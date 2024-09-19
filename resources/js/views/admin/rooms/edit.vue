<template>
    <div>
        <div class="row">
            <div class="col-md-12" v-if="!invalidObject">
                <div class="card shadow mb-4">
                    <div class="card-header py-3">
                        <div class="row">
                            <div class="col-md-8">
                                <h6 class="m-0 font-weight-bold text-primary">Update Room</h6>
                            </div>
                        </div>
                    </div>
                    <div class="card-body">
                        <div class="row">
                            <div class="col-12 col-md-6">
                                <div class="form-group">
                                    <label for="room_name">Room Name</label>
                                    <input type="text" class="form-control" v-model="room.room_name"
                                     placeholder="Enter Room Name" />
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                        <div class="card-body">
                            <div class="row">
                                <div class="col-12 col-md-6">
                                    <div class="form-group">
                                        <label for="occupied_beds">Occupied Beds</label>
                                        <input type="text" class="form-control" v-model="room.occupied_beds"
                                            placeholder="Enter total beds" />
                                           
                                    </div>
                                </div>
                            </div>
                            <div class="card-body">
                            <div class="row">
                                <div class="col-12 col-md-6">
                                    <div class="form-group">
                                        <label for="total_beds">Total Beds</label>
                                        <input type="text" class="form-control" v-model="room.total_beds"
                                            placeholder="Enter total beds" />
                                          
                                            
                                    </div>
                                </div>
                            </div>

                            


                            <div class="col-12 col-md-6">
                            </div>
                        </div>
                        <div cols="12">
                            <button class="btn btn-success" @click="updateRoom">Update</button>
                            <button class="btn btn-danger ml-3" @click="cancel">Cancel</button>
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

export default {
    name: "adminRoomEdit",
    components: {

    },
    data() {
        return {
            errorMessage: "",
            isLoading: true,
            room: {
                room_name: "",
                occupied_beds: "0",
                
                total_beds: "",
                
            },
            invalidObject: false,
            selectedStatus: "",
        };
    },
    
    methods: {
        async updateRoom() {
            try {
                const response = await axios.put(
                    `rooms/${this.room.id}`
                    , this.room
                );

                if (response.data.status == "success") {
                    this.$router.push("/admin/rooms");
                }
            } catch (error) {
                console.log(error);
                notify.authError(error);
            }
        },
        cancel() {
            this.$router.push("/admin/rooms");
        },
        toggleDropdown() {
            $('.dropdown-toggle').dropdown('toggle');
        },
        selectStatus(status) {
            this.room.status = status;
            this.selectedStatus = status;
        },
        async getRoom(id) {
            try {
                const response = await axios.get(`rooms/${id}`);
                this.room = response.data.room;
                this.selectedStatus = response.data.room.status;
            } catch (error) {
                this.invalidObject = true;
                notify.authError(error);
            }
        },
    },
    mounted() {
        this.getRoom(this.$route.params.id);
    },
};
</script>

<style scoped>
    /* Your styles here */
    label,
    input,
    select,
    .btn {
        color: black !important;
    }
</style>

