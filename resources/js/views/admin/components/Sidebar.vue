<template>
    <ul class="navbar-nav bg-gradient-black sidebar sidebar-dark accordion" id="accordionSidebar">
        <!-- Sidebar - Brand -->
        <router-link class="sidebar-brand d-flex align-items-center justify-content-center" to="/">
            <div class="sidebar-brand-icon">
                <img src="images/download.jpeg" alt="logo" class="rounded-image">
            </div>
            <div class="sidebar-brand-text mx-3">
                GPGC MANDIAN ATD NO 2
            </div>
        </router-link>

        <!-- Divider -->
        <hr class="sidebar-divider my-0" />

        <!-- Nav Item - Dashboard -->
        <li class="nav-item active">
            <router-link class="nav-link d-flex align-items-center" to="/admin">
                <span class="material-symbols-outlined">
                    speed
                </span>
                <span class="d-block w-100 ml-2">
                    Dashboard
                </span>
            </router-link>
        </li>

        <!-- Divider -->
        <hr class="sidebar-divider" />

        <!-- Heading -->
        <div class="sidebar-heading">
            Modules

        </div>


        <li class="nav-item active">
            <router-link class="nav-link d-flex align-items-center" to="/admin/students">
                <span class="material-symbols-outlined">
                    groups
                </span>
                <span class="collapse-item text-white ml-2 mt-1" to="/admin/students">
                    Students
                </span>
            </router-link>
        </li>






        <li class="nav-item active ">
            <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseStaffs"
                aria-expanded="true" aria-controls="collapseStaffs">
                <i class="material-symbols-outlined">
                    manage_accounts
                </i>
                <span class="ml-1">
                    Staff
                </span>
            </a>
            <div id="collapseStaffs" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                <div class="bg-white py-2 collapse-inner rounded">
                    <router-link class="collapse-item" to="/admin/staff_profiles">
                        Staff Profiles
                    </router-link>
                    <router-link class="collapse-item" to="/admin/staff_types">
                        Staff Types
                    </router-link>
                </div>
            </div>
        </li>


        <li class="nav-item active">
            <router-link class="nav-link d-flex align-items-center" to="/admin/rooms">
                <i class="material-symbols-outlined">
                    bed
                </i>
                <span class="ml-1">Rooms</span>
            </router-link>
        </li>


        <li class="nav-item active ">
            <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseStudentFee"
                aria-expanded="true" aria-controls="collapseStudentFee">
                <i class="material-symbols-outlined">
                    paid
                </i>
                <span class="">
                    Student Fee
                </span>
            </a>
            <div id="collapseStudentFee" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                <div class="bg-white py-2 collapse-inner rounded">
                    <router-link class="collapse-item" to="/admin/fee_categories">
                        Fee Category
                    </router-link>


                    <router-link class="collapse-item" to="/admin/fee_slips">
                        Fee Slips
                    </router-link>
                </div>
            </div>
        </li>

        <li class="nav-item active">
            <router-link class="nav-link d-flex align-items-center" to="/admin/mess_details">
                <!-- Add Font Awesome fork and knife icon -->
                <span class="fa fa-utensils mr-2"></span>
                <!-- Keep the text for accessibility -->
                <span class="collapse-item text-white mt-1" to="/admin/mess_details">
                    Mess System
                </span>
            </router-link>
        </li>



    </ul>
    <!-- End of Sidebar -->
</template>

<script>

export default {
    name: 'Sidebar'
}
</script>
<style scoped>
.sidebar {
    background-color: #000;
   
}.rounded-image {
  width: 100%;
  height: auto;
  border-radius: 50%; 
  object-fit: cover; 
}


/* Add additional styles as needed */
</style>
