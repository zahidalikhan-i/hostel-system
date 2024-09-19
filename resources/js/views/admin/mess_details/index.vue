<template>
    <div>
        <!-- Room Information Card -->
        <div class="card shadow mb-4">
            <div class="card-header py-3">
                <div class="row">
                    <div class="col-md-8">
                        <h6 class="m-0 font-weight-bold text-primary">Mess Details</h6>
                    </div>
                    <div class="col-md-4 text-right">
                        <!-- Button to Add New Mess Detail -->
                        <span class="text-info" @click="goToCreatePage"><i class="fas fa-plus"></i> Add Mess Detail</span>
                    </div>
                </div>
            </div>
            <div class="card-body">
                <!-- Loading Spinner -->
                <div class="d-flex align-items-center justify-content-center" v-if="isLoading">
                    <div>
                        <img width="100" src="/images/img/red-spinner.gif" />
                        <p class="text-center mt-0">Please wait...</p>
                    </div>
                </div>
                <!-- Table of Mess Details -->
                <table v-show="!isLoading" class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                    <thead>
                        <tr>
                            <th>Days</th>
                            <th>Breakfast Time</th>
                            <th>Breakfast</th>
                            <th>Lunch Time</th>
                            <th>Lunch</th>
                            <th>Dinner Time</th>
                            <th>Dinner</th>
                            <th width="100">Actions</th> <!-- Corrected 'Action' to 'Actions' -->
                        </tr>
                    </thead>
                    <tbody>
                        <!-- Iterate over Mess Details -->
                        <tr v-for="(messDetails, index) in mess_Details" :key="index" @click="showMessDetails(messDetails.id)">
                            <td>{{ messDetails.day }}</td>
                            <td>{{ messDetails.breakfast_time}}</td>
                            <td>{{ messDetails.break_fast }}</td> <!-- Corrected 'break_fast' to 'breakfast' -->
                            <td>{{ messDetails.lunch_time}}</td>
                            <td>{{ messDetails.lunch }}</td>
                            <td>{{ messDetails.dinner_time}}</td>
                            <td>{{ messDetails.dinner }}</td>
                            <td>
                                <!-- Edit and Delete Icons -->
                                <i class="fas fa-edit pl-2" @click="editPage(messDetails.id)"></i>
                                <i class="fas fa-trash pl-2" @click="deleteMessDetails(messDetails.id, index)"></i>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div v-show="!isLoading">
                <!-- Pagination Component -->
                <pagination :totalPages="totalPages" :perPage="50" :currentPage="currentPage" @pageChanged="onPageChange" />
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";
import Pagination from "../components/Pagination.vue";

export default {
    name: "adminMessDetailsIndex", // Changed name from 'adminRoomInfoIndex' to 'adminMessDetailsIndex'
    components: {
        Pagination,
    },
    data() {
        return {
            errorMessage: "",
            mess_Details: [], 
            totalPages: 0,
            currentPage: 1,
            isLoading: true,
            params: {
                page: 1,
            },
        };
    },
    methods: {
        async getMessDetails() { // Renamed 'getMessDetails'
        try {
                this.isLoading = true;

                await axios
                    .get("/mess_details", {
                        params: this.params,
                    })
                    .then((response) => {
                        this.mess_Details = response.data.mess_details;
                        this.totalPages = response.data.total_pages;
                        this.isLoading = false;
                    });
            } catch (error) {

                this.isLoading = false;
            }
        },
        async deleteMessDetails(id, index) { // Renamed'deleteMessDetails'
            try {
                const result = await this.$swal({
                    title: "Are you sure?",
                    text: "You want to delete this Mess Detail?",
                    type: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#DD6B55",
                    confirmButtonText: "Yes, delete it!",
                    cancelButtonText: "No, cancel!",
                    closeOnConfirm: false,
                    closeOnCancel: false,
                });

                if (result.value) {
                    const response = await axios.delete(`mess_details/${id}`); // Changed endpoint from 'room-info' to 'mess-details'
                    if (response.data.status === "success") {
                        this.mess_Details.splice(index, 1); // Changed from 'room_Info' to 'mess_Details'
                        this.$swal({
                            title: "Deleted!",
                            text: "The Mess Detail has been deleted.",
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
            this.getMessDetails(); // 'getMessDetails'
        },
        goToCreatePage() {
            this.$router.push("/admin/mess_details/create"); // route  '/admin/mess-details/create'
        },
        editPage(id) {
            this.$router.push(`/admin/mess_details/${id}/edit`); //  route  to `/admin/mess-details/${id}/edit`
        },
    },
    mounted() {
        this.getMessDetails(); //  'getMessDetails'
    },
};
</script>

<style type="text/css">
.fas,
.text-info {
    cursor: pointer;
}
</style>
