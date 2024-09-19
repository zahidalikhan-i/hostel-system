<template>
    <div>
        <div class="row">
            <div class="col-md-12" v-if="!invalidObject">
                <div class="card shadow mb-4">
                    <div class="card-header py-3">
                        <div class="row">
                            <div class="col-md-8">
                                <h6 class="m-0 font-weight-bold text-primary">Update Fee Category</h6>
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

                                </div>
                            </div>

                            <div class="col-12 col-md-6">
                                <div class="form-group">
                                    <label for="amount">Amount</label>
                                    <input type="text" class="form-control" v-model="feeCategory.amount"
                                        placeholder="Enter Amount" />

                                </div>
                            </div>
                        </div>

                        <div cols="12">
                            <button class="btn btn-success" @click="updateFeeCategory">Update</button>
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
    name: "adminFeeCategoryEdit",
    components: {

    },
    data() {
        return {
            errorMessage: "",
            isLoading: true,
            feeCategory: {
                category_name: "",
                amount: "",

            },
            invalidObject: false,
        };
    },
    methods: {
        async updateFeeCategory() {
            try {
                
                const response = await axios.put(
                    `fee_categories/${this.feeCategory.id}`
                    
                    , this.feeCategory
                );
             
                
                if (response.data.status == "success") {
                    this.$router.push("/admin/fee_categories");
                }
            } catch (error) {
                notify.authError(error);
            }
        },
        cancel() {
            this.$router.push("/admin/fee_categories");
        },

        async getFeeCategory(id) {
            var _self = this;
            try {
                await axios
                    .get(`fee_categories/${id}`)
                    .then((response) => {
                        _self.feeCategory = response.data.fee_categories;
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
        this.getFeeCategory(this.$route.params.id);


    },
    created() {
    }
};
</script>

<style type="text/css">
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

