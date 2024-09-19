<template>
    <div>
        <div class="row">
            <div class="col-md-12">
                <div class="card shadow mb-4">
                    <div class="card-header py-3">
                        <div class="row">
                            <div class="col-md-8">
                                <h6 class="m-0 font-weight-bold text-primary">Edit Mess Details</h6>
                            </div>
                        </div>
                    </div>
                    <div class="card-body">
                        <div class="row">
                            <div class="col-12 col-md-6">
                            <div class="form-group">
                                <label for="day" class="text-black">Days</label>
                                <select class="form-control text-black" v-model="mess.day">
                                    <option value="" class="text-black">Select Day</option>
                                    <option value="Monday" class="text-black">Monday</option>
                                    <option value="Tuesday" class="text-black">Tuesday</option>
                                    <option value="Wednesday" class="text-black">Wednesday</option>
                                    <option value="Thursday" class="text-black">Thursday</option>
                                    <option value="Friday" class="text-black">Friday</option>
                                    <option value="Saturday" class="text-black">Saturday</option>
                                    <option value="Sunday" class="text-black">Sunday</option>
                                    

                                </select>
                                <small class="text-danger">
                                    {{ errorMessages.day && errorMessages.day[0] }}
                                </small>
                            </div>
                        </div>

                            <div class="col-12 col-md-6">
                                <div class="form-group">
                                    <label for="breakfast_time" style="color: black;">Breakfast Time</label>
                                    <input type="text" class="form-control" v-model="mess.breakfast_time" placeholder="Enter breakfast time" />
                                    <small class="text-danger" style="color: black;">{{ errorMessages.breakfast_time && errorMessages.breakfast_time[0] }}</small>
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-12 col-md-6">
                                <div class="form-group">
                                    <label for="break_fast" style="color: black;">Breakfast</label>
                                    <input type="text" class="form-control" v-model="mess.break_fast" placeholder="Enter breakfast" />
                                    <small class="text-danger" style="color: black;">{{ errorMessages.break_fast && errorMessages.break_fast[0] }}</small>
                                </div>
                            </div>

                            <div class="col-12 col-md-6">
                                <div class="form-group">
                                    <label for="lunch_time" style="color: black;">Lunch Time</label>
                                    <input type="text" class="form-control" v-model="mess.lunch_time" placeholder="Enter lunch time" />
                                    <small class="text-danger" style="color: black;">{{ errorMessages.lunch_time && errorMessages.lunch_time[0] }}</small>
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-12 col-md-6">
                                <div class="form-group">
                                    <label for="lunch" style="color: black;">Lunch</label>
                                    <input type="text" class="form-control" v-model="mess.lunch" placeholder="Enter lunch" />
                                    <small class="text-danger" style="color: black;">{{ errorMessages.lunch && errorMessages.lunch[0] }}</small>
                                </div>
                            </div>

                            <div class="col-12 col-md-6">
                                <div class="form-group">
                                    <label for="dinner_time" style="color: black;">Dinner Time</label>
                                    <input type="text" class="form-control" v-model="mess.dinner_time" placeholder="Enter dinner time" />
                                    <small class="text-danger" style="color: black;">{{ errorMessages.dinner_time && errorMessages.dinner_time[0] }}</small>
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-12 col-md-6">
                                <div class="form-group">
                                    <label for="dinner" style="color: black;">Dinner</label>
                                    <input type="text" class="form-control" v-model="mess.dinner" placeholder="Enter dinner" />
                                    <small class="text-danger" style="color: black;">{{ errorMessages.dinner && errorMessages.dinner[0] }}</small>
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-12">
                                <button class="btn btn-success" @click="updateMessDetail">Update</button>
                                <button class="btn btn-danger ml-3" @click="cancel">Cancel</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";

export default {
    name: "adminEditMessDetails",
    data() {
        return {
            errorMessages: {},
            mess: {
                day: "",
                breakfast_time: "",
                break_fast: "", // 'breakfast'
                lunch_time: "",
                lunch: "",
                dinner_time: "",
                dinner: "",
            },
        };
    },
    
    methods: {
        async updateMessDetail() {
            try {
                const response = await axios.put(`/mess_details/${this.mess.id}`, this.mess); 
                if (response && response.data && response.data.status === "success") {
                    this.$toast.success(response.data.message, {
                        position: "top-right",
                        autoClose: 5000,
                    });
                    
                    this.$router.push("/admin/mess_details"); // Corrected route '/admin/mess-details'
                }
            } catch (error) {
                if (error.response && error.response.data && error.response.data.errors) {
                    this.errorMessages = error.response.data.errors;
                } else {
                    this.$toast.error("An error occurred while updating the mess details.", {
                        position: "top-right",
                        autoClose: 5000,
                    });
                }
            }
        },
       
        cancel() {
            this.$router.push("/admin/mess_details"); // Corrected route '/admin/mess-details'
        },
        async fetchMessDetail(id) {
            try {
                const response = await axios.get(`/mess_details/${id}`);
                
                if (response && response.data && response.data.mess_detail) {
                    this.mess = response.data.mess_detail;
                } else {
                    this.$toast.error("Mess details not found.", {
                        position: "top-right",
                        autoClose: 5000,
                    });
                }
            } catch (error) {
                this.$toast.error("Error fetching mess detail", {
                    position: "top-right",
                    autoClose: 5000,
                });
            }
        }
    },
    mounted() {
        this.fetchMessDetail(this.$route.params.id);
    },
};
</script>

<style scoped>
  /* Your styles here */
  .fas,
  .text-info {
    cursor: pointer;
  }
  label,
  input,
  .btn {
    color: black !important;
  }
</style>
