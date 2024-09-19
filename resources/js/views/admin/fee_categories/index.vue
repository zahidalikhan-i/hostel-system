<template>
    <div>
        <div class="row">
            <div class="col-md-12">
                <div class="card shadow mb-4">
                    <div class="card-header py-3">
                        <div class="row">
                            <div class="col-md-8">
                                <h6 class="m-0 font-weight-bold text-primary">Categories</h6>
                            </div>
                            <div class="col-md-4 text-right">
                                <span class="text-info" @click="goToCreatePage"><i class="fas fa-plus"></i> Add Fee
                                    Category</span>
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
                                        <th>Category</th>
                                        <th>Amount</th>
                                        <th width="100">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(fee_category, index) in fee_categories" :key="index">
                                        <td>{{ fee_category.category_name }}</td>
                                        <td>{{ fee_category.amount }}</td>
                                        <td>
                                            <i class="fas fa-edit pl-2" @click="editPage(fee_category.id)"></i>
                                            <i class="fas fa-trash pl-2"
                                                @click="deletefeeCategory(fee_category.id, index)"></i>
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
    name: "adminFeeCategoryIndex",
    components: {
        Pagination,
    },
    data() {
        return {
            errorMessage: "",
            debug: "",
            fee_categories: [],
            totalPages: 0,
            currentPage: 1,
            isLoading: true,
            params: {
                page: 1,
            },

        };
    },
    methods: {
        async getFeeCategories() {
            try {
                this.isLoading = true;

                await axios
                    .get("/fee_categories", {
                        params: this.params,
                    })
                    .then((response) => {
                        this.fee_categories = response.data.fee_categories;
                        this.totalPages = response.data.total_pages;
                        this.isLoading = false;
                    });
            } catch (error) {

                this.isLoading = false;
            }
        },
        async deletefeeCategory(id, index) {
            let response = await this.$swal({
                title: "Are you sure ?",
                text: "You want to delete this Category?",
                type: "warning",
                showCancelButton: true,
                confirmButtonColor: "#DD6B55",
                confirmButtonText: "Yes, delete it !",
                cancelButtonText: "No, cancel !",
                closeOnConfirm: false,
                closeOnCancel: false,
            }).then((result) => {
                if (result.value) {
                    try {
                        axios
                            .delete(`fee_categories/${id}`)
                            .then((response) => {
                                console.log(response);
                                this.fee_categories.splice(index, 1);
                            })
                            .catch((error) => {
                                this.$swal({
                                    title: "Error!",
                                    html: error.response.data.message,
                                    icon: "error",
                                    confirmButtonText: "Ok",
                                });
                            });
                    } catch (error) {
                        console.log(error);
                    }
                }
            });
        },
        onPageChange(page) {
            this.params.page = page;
            this.currentPage = page;
            this.getFeeCategories();
        },

        goToCreatePage() {
            this.$router.push("/admin/fee_categories/create");
        },
        editPage(id) {
            this.$router.push(`/admin/fee_categories/${id}/edit`);
        },
    },
    mounted() {
        this.getFeeCategories();
    },
};
</script>

<style type="text/css">
.fas,
.text-info {
    cursor: pointer;
}
</style>
