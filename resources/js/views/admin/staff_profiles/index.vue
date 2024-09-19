<template>
    <div>
        <div class="row">
            <div class="col-md-12">
                <div class="card shadow mb-4">
                    <div class="card-header py-3">
                        <div class="row">
                            <div class="col-md-8">
                                <h6 class="m-0 font-weight-bold text-primary">Staff Profiles</h6>
                            </div>
                            <div class="col-md-4 text-right">
                                <span class="text-info" @click="goToCreatePage"><i class="fas fa-plus"></i> Add Staff</span>
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
                                        <th>Name</th>
                                        <th>Your CNIC</th>
                                        <th>Mobile Number</th>
                                        <th>Address</th>
                                        <th>Gender</th>
                                        <th>Email</th>
                                      
                                      
                                       
                                        
                                        <th width="100">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(staff, index) in staff_profiles" :key="index">
                                        <td>{{ staff.user.first_name + " " + staff.user.last_name }}</td>
                                        <td>{{ staff.staff_cnic }}</td>
                                        <td>{{ staff.mobile_1 }}</td>
                                        <td>{{ staff.address }}</td>
                                        <td>{{ staff.gender}}</td>
                                        <td>{{ staff.user.email}}</td>
                                     

                                       
                                      
                                        <td>
                                            <i class="fas fa-edit pl-2" @click="editPage(staff)"></i>
                                            <i class="fas fa-trash pl-2" @click="deleteStaff(staff.id, index)"></i>
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
    name: "adminStaffProfilesIndex",
    components: {
        Pagination,
    },
    data() {
        return {
            errorMessage: "",
            debug: "",
            staff_profiles: [],
            totalPages: 0,
            currentPage: 1,
            isLoading: true,
            params: {
                page: 1,
            },

        };
    },
    methods: {
        async getStaffProfiles() {
            try {
                this.isLoading = true;

                await axios
                    .get("staff_profiles", {
                        params: this.params,
                    })
                    .then((response) => {
                        this.staff_profiles = response.data.staff_profiles;
                        console.log('test',response);
                        this.totalPages = response.data.total_pages;
                        this.isLoading = false;
                    });
            } catch (error) {

                this.isLoading = false;
            }
        },
        async deleteStaff(id, index) {
    try {
        let result = await this.$swal({
            title: "Are you sure?",
            text: "You want to delete this Staff?",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "Yes, delete it!",
            cancelButtonText: "No, cancel",
            closeOnConfirm: false,
            closeOnCancel: true, // Changed to true to close on cancel
        });

        if (result.isConfirmed) {
            const response = await axios.delete(`staff_profiles/${id}`);
            console.log(response);
            this.staff_profiles.splice(index, 1);
            this.$swal({
                title: "Success!",
                text: "Profile deleted successfully.",
                icon: "success",
                confirmButtonText: "Ok",
            });
        } else if (result.dismiss === "cancel") {
            this.$swal("Cancelled", "Operation cancelled.", "error");
        }
    } catch (error) {
        console.error("Delete error:", error);
        this.$swal({
            title: "Error!",
            text: error.response.data.message || "Failed to delete profile. Please try again.",
            icon: "error",
            confirmButtonText: "Ok",
        });
    }
        },
    
        onPageChange(page) {
            this.params.page = page;
            this.currentPage = page;
            this.getStaffProfiles();
        },

        goToCreatePage() {
            this.$router.push("/admin/staff_profiles/create");
        },
        editPage(staff) {
            this.$router.push(`/admin/staff_profiles/${staff.id}/edit`);
        },
    },
    mounted() {
        this.getStaffProfiles();
    },
};
</script>

<style type="text/css">
.fas,
.text-info {
    cursor: pointer;
}
</style>
