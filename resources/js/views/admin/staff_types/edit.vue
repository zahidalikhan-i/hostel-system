<template>
    <div>
        <div class="row">
            <div class="col-md-12" v-if="!invalidObject">
                <div class="card shadow mb-4">
                    <div class="card-header py-3">
                        <div class="row">
                            <div class="col-md-8">
                                <h6 class="m-0 font-weight-bold text-primary">Update Saff Type</h6>
                            </div>
                        </div>
                    </div>
                    <div class="card-body">
                        <div class="row">
                            <div class="col-12 col-md-6">
                                <div class="form-group">
                                    <label for="staff_title">Staff title</label>
                                    <input type="text" class="form-control" v-model="staffType.staff_title"
                                        placeholder="Enter  Staff title" />

                                </div>
                            </div>

                            <div class="col-12 col-md-6">
                            </div>
                        </div>

                        <div cols="12">
                            <button class="btn btn-success" @click="updateStaffType">Update</button>
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
    name: "adminStaffProfileEdit",
    components: {

    },
    data() {
        return {
            errorMessage: "",
            isLoading: true,
            staffType: {
                staff_title: "",
            },
            invalidObject: false,
        };
    },
    methods: {
        async updateStaffType() {
            try {
                const response = await axios.put(
                    `staff_types/${this.staffType.id}`
                    , this.staffType
                );

                if (response.data.status == "success") {
                    this.$router.push("/admin/staff_types");
                }
            } catch (error) {
                console.log(error);
                notify.authError(error);
            }
        },
        cancel() {
            this.$router.push("/admin/staff_types");
        },

        async getStaffTypes(id) {
            var _self = this;
            try {
                await axios
                    .get(`staff_types/${id}`)
                    .then((response) => {
                        _self.staffType = response.data.staff_type;
                    })
                    .catch((error) => {
                        this.invalidObject = true;
                    });
            } catch (error) {
                notify.authError(error);
            }
        },

    },
    mounted() {
        this.getStaffTypes(this.$route.params.id);


    },
    created() {
    }
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
