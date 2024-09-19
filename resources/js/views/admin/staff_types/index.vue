<template>
    <div>
        <div class="row">
            <div class="col-md-12">
                <div class="card shadow mb-4">
                    <div class="card-header py-3">
                        <div class="row">
                            <div class="col-md-8">
                                <h6 class="m-0 font-weight-bold text-primary">Saff Types</h6>
                            </div>
                            <div class="col-md-4 text-right">
                                <span class="text-info" @click="goToCreatePage"><i class="fas fa-plus"></i> Add Staff
                                    Type</span>
                            </div>
                        </div>
                    </div>
                    <div class="card-body">
                        <div class="table-responsive">
                            <div class="d-flex align-items-center justify-content-center" v-if="isLoading">
                                <div>
                                    <img width="100" src="/images/img/red-spinner.gif" />
                                    <p class="text-center mt-0">Please wait...</p>
                                </div>
                            </div>
                            <table v-show="!isLoading" class="table table-bordered" id="dataTable" width="100%"
                                cellspacing="0">
                                <thead>
                                    <tr>
                                        <th>Staff Type</th>
                                        <th width="100">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(staffType, index) in staffTypes" :key="index">
                                        <td>{{ staffType.staff_title }}</td>
                                        <td>
                                            <i class="fas fa-edit pl-2" @click="editPage(staffType.id)"></i>
                                            <i class="fas fa-trash pl-2" @click="deleteStaffType(staffType.id, index)"></i>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div v-show="!isLoading">
                            <pagination :totalPages="totalPages" :perPage="50" :currentPage="currentPage"
                                @pageChanged="onPageChange" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import * as notify from "../../../utils/notify.js";
import axios from "axios";

import Pagination from "../components/Pagination.vue";

export default {
    name: "adminStaffTypesIndex",
    components: {
        Pagination,
    },
    data() {
        return {
            errorMessage: "",
            debug: "",
            staffTypes: [],
            totalPages: 0,
            currentPage: 1,
            isLoading: true,
            params: {
                page: 1,
            },

        };
    },
    methods: {
        async getStaffTypes() {
            try {
                this.isLoading = true;

                await axios
                    .get("/staff_types", {
                        params: this.params,
                    })
                    .then((response) => {
                        this.staffTypes = response.data.staff_types;
                        this.totalPages = response.data.total_pages;
                        this.isLoading = false;
                    });
            } catch (error) {

                this.isLoading = false;
            }
        },
        async deleteStaffType(id, index) {
            try {
                let result = await this.$swal({
                    title: "Are you sure?",
                    text: "You want to delete this Subject?",
                    type: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#DD6B55",
                    confirmButtonText: "Yes, delete it!",
                    cancelButtonText: "No, cancel!",
                    closeOnConfirm: false,
                    closeOnCancel: false,
                });

                if (result.value) {
                    let response = await axios.delete(`staff_types/${id}`);
                    if (response.data.status === "success") {
                        this.staffTypes.splice(index, 1);
                        this.$swal({
                            title: "Deleted!",
                            text: "The staff type has been deleted.",
                            icon: "success",
                            confirmButtonText: "Ok",
                        });
                    } else {
                        this.$swal({
                            title: "Error!",
                            html: response.data.message,
                            icon: "error",
                            confirmButtonText: "Ok",
                        });
                    }
                }
            } catch (error) {
                console.error(error);
            }
        },
        onPageChange(page) {
            this.params.page = page;
            this.currentPage = page;
            this.getStaffTypes();
        },

        goToCreatePage() {
            this.$router.push("/admin/staff_types/create");
        },
        editPage(id) {
            this.$router.push(`/admin/staff_types/${id}/edit`);
        },
    },
    mounted() {
        this.getStaffTypes();
    },
};
</script>

<style scoped>
.fas,
.text-info {
  cursor: pointer;
}

input#typeahead_id.simple-typeahead-input {
  width: 100% !important;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  border-radius: 0.35rem;
  border: 1px solid #d1d3e2;
}

.custom-radio-padding {
  width: 100% !important;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  border-radius: 0.35rem;
  border: 1px solid #d1d3e2;
}

input::placeholder,
textarea::placeholder {
  color: #2b2828;
  /* Dark black placeholder color */
}

input,
textarea,
select,
option {
  color: #000000;
  /* Dark black text color */
}

h6,
label,
button {
  color: #000000;
  /* Dark black text color for headings, labels, and buttons */
}

.text-danger {
  color: red;
  /* Red color for error messages */
}
</style>
