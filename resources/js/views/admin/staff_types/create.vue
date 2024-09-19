<template>
    <div>
        <div class="row">
            <div class="col-md-12">
                <div class="card shadow mb-4">
                    <div class="card-header py-3">
                        <div class="row">
                            <div class="col-md-8">
                                <h6 class="m-0 font-weight-bold text-primary">Add Staff Type</h6>
                            </div>
                        </div>
                    </div>
                    <div class="card-body">
                        <div class="row">
                            <div class="col-12 col-md-6">
                                <div class="form-group">
                                    <label for="staff_type"> Staff Type title</label>
                                    <input type="text" class="form-control" v-model="staff.staff_title"
                                        placeholder="Enter Title" />
                                    <small class="text-danger">
                                        {{
                                            errorMessages.staff_title &&
                                            errorMessages.staff_title[0]
                                        }}</small>
                                </div>
                            </div>
                            <div class="col-12 col-md-6">

                            </div>
                        </div>

                        <div cols="12">
                            <button class="btn btn-success" @click="saveSubject">Save</button>
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
    name: "adminAddStaffProfile",
    components: {
    },
    data() {
        return {
            errorMessages: {},
            debug: "",
            isLoading: true,
            staff: {
                staff_title: "",
            },

        };
    },
    computed: {

    },
    methods: {

        async saveSubject() {
            try {
                const response = await axios.post("staff_types", this.staff);
                if (response.data.status == "success") {
                    this.$toast.success(response.data.message, {
                        position: "top-right",
                        autoClose: 5000,
                    });
                    this.$router.push("/admin/staff_types");
                }
            }
            catch (error) {
                this.errorMessages = error.response.data.errors;
            }
        },

        cancel() {
            this.$router.push("/admin/staff_types");
        },

    },

    mounted() {

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