<template>
    <div>
        <div class="row">
            <div class="col-md-12" v-if="!invalidObject">
                <div class="card shadow mb-4">
                    <div class="card-header py-3">
                        <div class="row">
                            <div class="col-md-8">
                                <h6 class="m-0 font-weight-bold text-primary">Update Staff</h6>
                            </div>
                        </div>
                    </div>
                    <div class="card-body">
                        <div class="row">
                            <div class="col-12 col-md-6">
                                <div class="form-group">
                                    <label for="first_name">First Name</label>
                                    <input type="text" class="form-control" v-model="staff.user.first_name"
                                        placeholder="Enter First Name" />
                                </div>
                            </div>

                            <div class="col-12 col-md-6">
                                <div class="form-group">
                                    <label for="last_name">Last Name</label>
                                    <input type="text" class="form-control" v-model="staff.user.last_name"
                                        placeholder="Enter Last Name" />
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-12 col-md-6">
                                <div class="form-group">
                                    <label for="staff_cnic">Staff Cnic</label>
                                    <input type="text" class="form-control" v-model="staff.staff_cnic"
                                        placeholder="Enter Staff Cnic" />
                                </div>
                            </div>
                        

                            <div class="col-12 col-md-6">
                                <div class="form-group">
                                    <label for="mobile_1">Mobile number</label>
                                    <input type="text" class="form-control" v-model="staff.mobile_1"
                                        placeholder="Enter Mobile number 1" />
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-12 col-md-6">
                                <div class="form-group">
                                    <label for="mobile_2">Mobile Number</label>
                                    <input type="text" class="form-control" v-model="staff.mobile_2"
                                        placeholder="Enter Mobile Number 2" />
                                </div>
                            </div>

                            <div class="col-12 col-md-6">
                                <div class="form-group">
                                    <label for="Address"> Address </label>
                                    <input type="text" class="form-control" v-model="staff.address"
                                        placeholder="Enter Address" />
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12 col-md-6">
                                <div class="form-group">
                                    <label for="Gender"> Gender </label>
                                    <div class="d-flex custom-radio-padding">
                                        <div class="form-check mr-3">
                                            <input type="radio" value="Male" v-model="staff.gender" class="form-check-input"
                                                id="maleRadio" name="genderRadio" />
                                            <label class="form-check-label" for="maleRadio">Male</label>
                                        </div>
                                        <div class="form-check">
                                            <input type="radio" value="Female" v-model="staff.gender"
                                                class="form-check-input" id="femaleRadio" name="genderRadio" />
                                            <label class="form-check-label" for="femaleRadio">Female</label>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            
                                <div class="col-12 col-md-6">
                                    <div class="form-group">
                                        <label for="email"> Email </label>
                                        <input type="text" class="form-control" v-model="staff.user.email"
                                            placeholder="Enter Email" />
                                    </div>
                                </div>
                          

                            <div class="col-12 col-md-6">
                                <div class="form-group">
                                    <label for="staff_type"> Staff Type </label>
                                    <select v-model="staff.staff_type_id" class="form-control">
                                        <option value="" disabled>Select Staff Type</option>
                                        <option v-for="(type, index) in staff_types" :key="index" :value="type.id">
                                            {{ type.staff_title }}
                                        </option>
                                    </select>
                                </div>
                            </div>
                        </div>

                       
                            <div class="col-12">
                                <button class="btn btn-success" @click="updateStaff">Update</button>
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
    name: "adminStaffEdit",
    data() {
        return {
            errorMessage: "",
            isLoading: true,
            staff: {
                staff_cnic: "",
                mobile_1: "",
                mobile_2: "",
                password: "",
                confirm_password: "",
                gender: "",
                address: "",
                user: {
                    first_name: "",
                    last_name: "",
                    email: "",
                },
            },
            staff_types: [],
            invalidObject: false,
            passwordStrengthMessage: '',
            errorMessages: {},
            passwordMismatch: false,
        };
    },
    methods: {
        async updateStaff() {
            try {
                const response = await axios.put(`staff_profiles/${this.staff.id}`, this.staff);
                if (response.data.status === "success") {
                    this.$router.push("/admin/staff_profiles");
                }
            } catch (error) {
                if (error.response && error.response.data && error.response.data.errors) {
                    this.errorMessages = error.response.data.errors;
                } else {
                    notify.authError(error);
                }
            }
        },
        cancel() {
            this.$router.push("/admin/staff_profiles");
        },
        async getStaff(id) {
            try {
                const response = await axios.get(`staff_profiles/${id}`);
                this.staff = response.data.staff;
                if (!this.staff.user) {
                    this.staff.user = {
                        first_name: '',
                        last_name: '',
                        email: '',
                    };
                }
            } catch (error) {
                this.invalidObject = true;
                notify.authError(error);
            }
        },
        async getStaffTypes() {
            try {
                this.isLoading = true;
                const response = await axios.get("/staff_types");
                this.staff_types = response.data.staff_types;
                this.isLoading = false;
            } catch (error) {
                console.error(error);
                this.isLoading = false;
            }
        },
      
    },
    mounted() {
        this.getStaff(this.$route.params.id);
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
