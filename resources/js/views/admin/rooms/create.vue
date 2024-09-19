<template>
    <div>
        <div class="row">
            <div class="col-md-12">
                <div class="card shadow mb-4 p-4">
                    <div class="card-header py-3">
                        <div class="row">
                            <div class="col-md-8">
                                <h6 class="m-0 font-weight-bold text-black">Add Room</h6>
                            </div>
                        </div>
                    </div>
                    <div class="card-body">
                        <div class="row">
                            <div class="col-6 col-md-6">
                                <div class="form-group">
                                    <label for="room_name" class="text-black"> Room Name</label>
                                    <input type="text" class="form-control text-black" v-model="room.room_name" placeholder="Enter Room Name" />
                                    <small class="text-danger">
                                        {{ errorMessages.room_name && errorMessages.room_name[0] }}
                                    </small>
                                </div>
                            </div>
                            <div class="col-6 col-md-6">
                                <div class="form-group">
                                    <label for="total_beds" class="text-black"> Total Beds</label>
                                    <input type="text" class="form-control text-black" v-model="room.total_beds" placeholder="Enter total Beds" />
                                    <small class="text-danger">
                                        {{ errorMessages.total_beds && errorMessages.total_beds[0] }}
                                    </small>
                                </div>
                            </div>
                        </div>

                        </div>
                     

                       

                        <div class="row">
                            <div class="col-12 d-flex">
                                <button class="btn btn-success " @click="saveRoom">Save</button>
                                <button class="btn btn-danger ml-3 " @click="cancel">Cancel</button>
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
    name: "adminAddRoom",
    data() {
        return {
            errorMessages: {},
            room: {
                room_name: "",
                occupied_beds: "0",
                total_beds: "",
                // status: "",
            },
        };
    },
    methods: {
        async saveRoom() {
            try {
                const response = await axios.post("rooms", this.room);
                if (response.data.status == "success") {
                    this.$toast.success(response.data.message, {
                        position: "top-right",
                        autoClose: 5000,
                    });
                    this.$router.push("/admin/rooms");
                }
            } catch (error) {
                this.errorMessages = error.response.data.errors;
            }
        },
        cancel() {
            this.$router.push("/admin/rooms");
        },
    },
};
</script>

<style scoped>
.fas,
.text-info {
    cursor: pointer;
}

input::placeholder,
textarea::placeholder {
    color: #000000; /* Dark black placeholder color */
}

input,
textarea,
select,
option {
    color: #000000; /* Dark black text color */
}

h6, label, button {
    color: #000000; /* Dark black text color for heading, labels, and buttons */
}
</style>
