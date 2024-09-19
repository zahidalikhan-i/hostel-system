<template>
  <div>
    <div class="row">
      <div class="col-md-12">
        <div class="card shadow mb-4">
          <div class="card-header py-3">
            <h6 class="m-0 font-weight-bold text-primary">Edit Fee Slip</h6>
          </div>
          <div class="card-body">
            <div class="col-12 col-md-6">
              <div class="form-group">
                <label for="first_name">First Name</label>
                <input type="text" class="form-control" v-model="feeSlip.first_name" placeholder="Enter First Name" />
                <small class="text-danger">{{ errorMessages.first_name && errorMessages.first_name[0] }}</small>
              </div>
            </div>

            <div class="col-12 col-md-6">
              <div class="form-group">
                <label for="last_name">Last Name</label>
                <input type="text" class="form-control" v-model="feeSlip.last_name" placeholder="Enter last Name" />
                <small class="text-danger">{{ errorMessages.last_name && errorMessages.last_name[0] }}</small>
              </div>
            </div>

            <div class="col-12 col-md-6">
              <div class="form-group">
                <label for="roll_number">Roll No</label>
                <input type="text" class="form-control" v-model="feeSlip.roll_number" placeholder="Enter  Your Roll Number " />
                <small class="text-danger">{{ errorMessages.roll_number && errorMessages.roll_number[0] }}</small>
              </div>
            </div>
            <div class="col-12 col-md-6">
              <div class="form-group">
                <label for="fee_type">Fee Type</label>
                <input type="text" class="form-control" v-model="feeSlip.fee_type" placeholder="Enter Fee Type" />
                <small class="text-danger">{{ errorMessages.fee_type && errorMessages.fee_type[0] }}</small>
              </div>
            </div>
            <div class="col-12 col-md-6">
              <div class="form-group">
                <label for="status">Status</label>
                <input type="text" class="form-control" v-model="feeSlip.status" placeholder="Enter Status" />
                <small class="text-danger">{{ errorMessages.status && errorMessages.status[0] }}</small>
              </div>
            </div>
            <div class="col-12 col-md-6">
              <div class="form-group">
                <label for="month">Month</label>
                <input type="text" class="form-control" v-model="feeSlip.month" placeholder="Enter Month" />
                <small class="text-danger">{{ errorMessages.month && errorMessages.month[0] }}</small>
              </div>
            </div>

            <div class="col-12">
              <button class="btn btn-success" @click="updateFeeSlip">Update</button>
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
  name: "adminEditFeeSlipsProfile",
  data() {
    return {
      feeSlip: {
        student_id: '',
        fee_category_id: '',
        fee_type: '',
        status: '',
        month: ''
      },
      errorMessages: {} // Initialize errorMessages object
    };
  },
  methods: {
    async updateFeeSlip() {
      try {
        const requestData = { ...this.feeSlip };
        const response = await axios.put(`/api/fee_slips/${this.$route.params.id}`, requestData);
        if (response.data.status === "success") {
          notify.success(response.data.message);
          this.$router.push("/admin/fee_slips");
        }
      } catch (error) {
        this.errorMessages = error.response.data.errors;
      }
    },
    cancel() {
      this.$router.push("/admin/fee_slips");
    },
    async fetchFeeSlip() {
      try {
        const response = await axios.get(`/api/fee_slips/${this.$route.params.id}`);
        this.feeSlip = response.data.feeSlip;
      } catch (error) {
        console.error("Error fetching fee slip:", error);
      }
    },
  },
  mounted() {
    this.fetchFeeSlip();
  },
};
</script>

<style>
.fas,
.text-info {
  cursor: pointer;
}
</style>
