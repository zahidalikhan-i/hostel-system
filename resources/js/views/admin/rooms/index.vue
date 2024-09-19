<template>
    <div>
        <div class="row">
            <div class="col-md-12">
                <div class="card shadow mb-4">
                    <div class="card-header py-3">
                        <div class="row">
                            <div class="col-md-8">
                                <h6 class="m-0 font-weight-bold text-primary">Rooms</h6>
                            </div>
                            <div class="col-md-4 text-right">
                                <span class="text-info" @click="goToCreatePage"><i class="fas fa-plus"></i> Add
                                    Room</span>
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
                                        <th>Room Name</th>
                                        <th>Total Beds</th>
                                        <th>Occupied Beds</th>
                                        <th>Remaining Beds</th>
                                        
                                        <th>Status</th>
                                        <th width="100">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(room, index) in rooms" :key="index">
                                        <td>
                                            {{ room.room_name }}
                                        </td>
                                        <td>{{ room.total_beds }}</td>
                                        <td>{{ room.occupied_beds }}</td>
                                        <td>{{ room.total_beds - room.occupied_beds}}</td>
                                        
                                        <td>{{ room.total_beds === room.occupied_beds ? 'Occupied' : 'Available' }}</td>
                                        <td>
                                            <i class="fas fa-edit pl-2" @click="editPage(room.id)"></i>
                                            <i class="fas fa-trash pl-2" @click="deleteRoom(room.id, index)"></i>
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
    name: "adminRoomsIndex",
    components: {
        Pagination,
    },
    data() {
        return {
            errorMessage: "",
            debug: "",
            rooms: [],
            totalPages: 0,
            currentPage: 1,
            isLoading: true,
            params: {
                page: 1,
            },
        };
    },
    methods: {
        async getRooms() {
            try {
                this.isLoading = true;
                await axios
                    .get("/rooms", {
                        params: this.params,
                    })
                    .then((response) => {
                        console.log(response);
                        this.rooms = response.data.room;
                        this.totalPages = response.data.total_pages;
                        this.isLoading = false;
                    });
            } catch (error) {
                this.isLoading = false;
            }
        },
        async deleteRoom(id, index) {
            try {
                let result = await this.$swal({
                    title: "Are you sure?",
                    text: "You want to delete this Room?",
                    type: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#DD6B55",
                    confirmButtonText: "Yes, delete it!",
                    cancelButtonText: "No, cancel!",
                    closeOnConfirm: false,
                    closeOnCancel: false,
                });

                if (result.value) {
                    let response = await axios.delete(`rooms/${id}`);
                    if (response.data.status === "success") {
                        this.rooms.splice(index, 1);
                        this.$swal({
                            title: "Deleted!",
                            text: "The room has been deleted.",
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
            this.getRooms();
        },
        goToCreatePage() {
            this.$router.push("/admin/rooms/create");
        },
        editPage(id) {
            this.$router.push(`/admin/rooms/${id}/edit`);
        },
        redirectToRoomInfo(id) {
            this.$router.push(`/admin/room_info/${id}`);
        }
    },
    mounted() {
        this.getRooms();
    },
};
</script>

<style type="text/css">
.fas,
.text-info {
    cursor: pointer;
}

.room-link:hover {
    color: blue; /* Change color on hover */
}
</style>
