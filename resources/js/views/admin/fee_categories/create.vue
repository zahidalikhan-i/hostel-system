<template>
    <div>
        <div class="row">
            <div class="col-md-12">
                <div class="card shadow mb-4">
                    <div class="card-header py-3">
                        <div class="row">
                            <div class="col-md-8">
                                <h6 class="m-0 font-weight-bold text-primary">Add Category</h6>
                            </div>
                        </div>
                    </div>
                    <div class="card-body">
                        <div class="row">
                            <div class="col-12 col-md-6">
                                <div class="form-group">
                                    <label for="category_name">Category Name</label>
                                    <input type="text" class="form-control" v-model="feeCategory.category_name"
                                        placeholder="Enter Category Name" />
                                    <small class="text-danger">
                                        {{
                                            errorMessages.category_name &&
                                            errorMessages.category_name[0]
                                        }}</small>
                                </div>
                            </div>

                            <div class="col-12 col-md-6">
                                <div class="form-group">
                                    <label for="amount">Amount</label>
                                    <input type="text" class="form-control" v-model="feeCategory.amount"
                                        placeholder="Enter Amount" />
                                    <small class="text-danger">
                                        {{ errorMessages.amount && errorMessages.amount[0] }}</small>
                                </div>
                            </div>
                        </div>

                        <div cols="12">
                            <button class="btn btn-success" @click="saveFeeCategory">
                                Save
                            </button>
                            <button class="btn btn-danger ml-3" @click="cancel">
                                Cancel
                            </button>
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
    name: "adminAddFeeCategory",
    components: {},
    data() {
        return {
            errorMessages: {},
            debug: "",
            isLoading: true,
            feeCategory: {
                category_name: "",
                amount: "",
            },
        };
    },
    computed: {},
    methods: {
        async saveFeeCategory() {
            try {
                const response = await axios.post("fee_categories", this.feeCategory);

                if (response.data.status == "success") {
                    this.$toast.success(response.data.message, {
                        position: "top-right",
                        autoClose: 5000,
                    });
                    this.$router.push("/admin/fee_categories");
                }
            } catch (error) {
                console.log("errors", error.response.data);
                this.errorMessages = error.response.data.errors;
            }
        },

        cancel() {
            this.$router.push("/admin/fee_categories");
        },
    },

    mounted() { },
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
