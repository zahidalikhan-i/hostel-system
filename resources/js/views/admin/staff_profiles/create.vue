<template>
    <div>
        <div class="row">
            <div class="col-md-12">
                <div class="card shadow mb-4">
                    <div class="card-header py-3">
                        <div class="row">
                            <div class="col-md-8">
                                <h6 class="m-0 font-weight-bold text-primary">Add Staff</h6>
                            </div>
                        </div>
                    </div>
                    <div class="card-body">
                        <div class="row">
                            <div class="col-12 col-md-6">
                                <div class="form-group">
                                    <label for="first_name">First Name</label>
                                    <input type="text" class="form-control" v-model="staff.first_name"
                                        placeholder="Enter First Name" required />
                                    <small class="text-danger">
                                        {{ errorMessages.first_name && errorMessages.first_name[0] }}
                                    </small>
                                </div>
                            </div>

                            <div class="col-12 col-md-6">
                                <div class="form-group">
                                    <label for="last_name">Last Name</label>
                                    <input type="text" class="form-control" v-model="staff.last_name"
                                        placeholder="Enter Last Name" required />
                                    <small class="text-danger">
                                        {{ errorMessages.last_name && errorMessages.last_name[0] }}
                                    </small>
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-12 col-md-6">
                                <div class="form-group">
                                    <label for="staff_cnic">Staff CNIC</label>
                                    <input type="text" class="form-control" v-model="staff.staff_cnic"
                                        @input="formatCnic" placeholder="Enter Staff CNIC" required />
                                    <small class="text-danger">
                                        {{ errorMessages.staff_cnic && errorMessages.staff_cnic[0] }}
                                    </small>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="password">
                                        Password <span class="text-danger"></span>
                                    </label>
                                    <input type="password" id="password" class="form-control" v-model="staff.password"
                                        @input="checkPasswordStrength" placeholder="Enter Password" required />
                                    <small class="text-danger">{{ errorMessages.password &&
                                        errorMessages.password[0] }}</small>
                                    <small class="text-danger">{{ passwordStrengthMessage }}</small>
                                </div>
                            </div>
                        </div>

                        <!-- Confirm Password and Email -->
                        <div class="row">
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="password_confirm">
                                        Confirm Password <span class="text-danger"></span>
                                    </label>
                                    <input type="password" class="form-control" v-model="staff.password_confirm"
                                        @input="validatePassword" placeholder="Confirm Password" required />
                                    <small class="text-danger">{{ errorMessages.password_confirm &&
                                        errorMessages.password_confirm[0] }}</small>
                                    <small class="text-danger">{{ passwordMismatch }}</small>
                                </div>
                            </div>

                            <div class="col-12 col-md-6">
                                <div class="form-group">
                                    <label for="mobile_1">Mobile Number</label>
                                    <input type="text" class="form-control" v-model="staff.mobile_1"
                                        placeholder="Enter Mobile Number" />
                                    <small class="text-danger">
                                        {{ errorMessages.mobile_1 && errorMessages.mobile_1[0] }}
                                    </small>
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-12 col-md-6">
                                <div class="form-group">
                                    <label for="mobile_2">Mobile Number 2</label>
                                    <input type="text" class="form-control" v-model="staff.mobile_2"
                                        placeholder="Enter Mobile Number 2" />
                                    <small class="text-danger">
                                        {{ errorMessages.mobile_2 && errorMessages.mobile_2[0] }}
                                    </small>
                                </div>
                            </div>

                            <div class="col-12 col-md-6">
                                <div class="form-group">
                                    <label for="address">Address</label>
                                    <input type="text" class="form-control" v-model="staff.address"
                                        placeholder="Enter Address" />
                                    <small class="text-danger">
                                        {{ errorMessages.address && errorMessages.address[0] }}
                                    </small>
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-12 col-md-6">
                                <div class="form-group">
                                    <label for="gender">Gender</label>
                                    <div class="d-flex custom-radio-padding">
                                        <div class="form-check mr-3">
                                            <input type="radio" value="Male" v-model="staff.gender"
                                                class="form-check-input" id="maleRadio" name="genderRadio" />
                                            <label class="form-check-label" for="maleRadio">
                                                Male
                                            </label>
                                        </div>
                                        <div class="form-check">
                                            <input type="radio" value="Female" v-model="staff.gender"
                                                class="form-check-input" id="femaleRadio" name="genderRadio" />
                                            <label class="form-check-label" for="femaleRadio">
                                                Female
                                            </label>
                                        </div>
                                    </div>
                                    <small class="text-danger">
                                        {{ errorMessages.gender && errorMessages.gender[0] }}
                                    </small>
                                </div>
                            </div>

                            <div class="col-12 col-md-6">
                                <div class="form-group">
                                    <label for="email">Email</label>
                                    <input type="text" class="form-control" v-model="staff.email"
                                        placeholder="Enter Email" />
                                    <small class="text-danger">
                                        {{ errorMessages.email && errorMessages.email[0] }}
                                    </small>
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-12 col-md-6">
                                <div class="form-group">
                                    <label for="staff_type">Staff Type</label>
                                    <select v-model="staff.staff_type" class="form-control">
                                        <option value="" disabled>Select Staff Type</option>
                                        <option v-for="(type, index) in staffTypes" :key="index"
                                            :value="type.staff_title">
                                            {{ type.staff_title }}
                                        </option>
                                    </select>
                                    <small class="text-danger">{{ errorMessages.staff_type &&
                                        errorMessages.staff_type[0] }}</small>
                                </div>
                            </div>
                        </div>

                        <div class="cols-12">
                            <button class="btn btn-success" @click="saveStaff">Save</button>
                            <button class="btn btn-danger ml-3" @click="cancel">Cancel</button>
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
    name: "adminAddStaffProfiles",
    data() {
        return {
            errorMessages: {},
            isLoading: true,
            staff: {
                staff_cnic: "",
                mobile_1: "",
                mobile_2: "",
                password: "",
                password_confirm: "",
                gender: "",
                address: "",
                first_name: "",
                last_name: "",
                staff_type: "",
                email: ""
            },
            staffTypes: [],
            passwordMismatch: "",
            passwordStrengthMessage: '',
        };
    },
    methods: {
        async saveStaff() {
            try {
                const response = await axios.post("staff_profiles", this.staff);

                if (response.data.status === "success") {
                    this.$toast.success(response.data.message, {
                        position: "top-right",
                        autoClose: 5000,
                    });
                    this.$router.push("/admin/staff_profiles");
                }
            } catch (error) {
                this.errorMessages = error.response.data.errors || {};
            }
        },

        async getStaffTypes() {
            try {
                this.isLoading = true;
                const response = await axios.get("/staff_types");
                this.staffTypes = response.data.staff_types;
                this.isLoading = false;
            } catch (error) {
                this.isLoading = false;
            }
        },

        cancel() {
            this.$router.push("/admin/staff_profiles");
        },

        checkPasswordStrength() {
            const password = this.staff.password;
            this.passwordStrengthMessage = this.getPasswordStrength(password);
        },

        validatePassword() {
            this.passwordMismatch = this.staff.password !== this.staff.password_confirm ? "Passwords do not match" : true;
        },

        formatCnic() {
            const cnic = this.staff.staff_cnic.replace(/\D/g, "").slice(0, 13);
            const formattedCnic = cnic.replace(/(\d{5})(\d{7})(\d{1})/, "$1-$2-$3");
            this.staff.staff_cnic = formattedCnic;
        },

        getPasswordStrength(password) {
            if (password.length < 6) {
                return "Password is too short. Use a strong password including upper and lower case letters, digits, and special characters.";
            }
            if (!/[A-Z]/.test(password)) {
                return "Password is weak. Use a strong password including upper and lower case letters, digits, and special characters.";
            }
            if (!/[a-z]/.test(password)) {
                return "Password is weak. Use a strong password including upper and lower case letters, digits, and special characters.";
            }
            if (!/[0-9]/.test(password)) {
                return "Password must contain at least one digit. Use a strong password including upper and lower case letters, digits, and special characters.";
            }
            if (!/[@$!%*?&#]/.test(password)) {
                return "Password should contain at least one special character.";
            }
            return "Password is strong";
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
