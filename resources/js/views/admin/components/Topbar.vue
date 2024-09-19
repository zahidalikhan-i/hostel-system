<template>
  <div class="
      navbar navbar-expand navbar-light
      bg-white
      topbar
      mb-4
      static-top
      shadow
    ">
    <!-- Sidebar Toggle (Topbar) -->
    <button id="sidebarToggleTop" class="btn btn-link d-md-none rounded-circle mr-7">
      <i class="fa fa-bars"></i>
    </button>

    <!-- Topbar Search -->
    <form class="
        d-none d-sm-inline-block
        form-inline
        mr-auto
        ml-md-3
        my-2 my-md-0
        mw-100
        navbar-search
      ">
      <div class="input-group">
        <input type="text" class="form-control bg-light border-0 small" placeholder="Search for..." aria-label="Search"
          aria-describedby="basic-addon2" style="border-color: black;" />
        <div class="input-group-append">
          <button class="btn btn-primary" type="button">
            <i class="fas fa-search fa-sm"></i>
          </button>
        </div>
      </div>
    </form>

    <!-- Topbar Navbar -->
    <ul class="navbar-nav ml-auto">
      <!-- Nav Item - Search Dropdown (Visible Only XS) -->
      <li class="nav-item dropdown no-arrow d-sm-none">
        <a class="nav-link dropdown-toggle" href="#" id="searchDropdown" role="button" data-toggle="dropdown"
          aria-haspopup="true" aria-expanded="false">
          <i class="fas fa-search fa-fw"></i>
        </a>
        <!-- Dropdown - Messages -->
        <div class="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in" aria-labelledby="searchDropdown">
          <form class="form-inline mr-auto w-100 navbar-search">
            <div class="input-group">
              <input type="text" class="form-control bg-light border-0 small" placeholder="Search for..."
                aria-label="Search" aria-describedby="basic-addon2" />
              <div class="input-group-append">
                <button class="btn btn-primary" type="button">
                  <i class="fas fa-search fa-sm"></i>
                </button>
              </div>
            </div>
          </form>
        </div>
      </li>
      </ul>

      <!-- Nav Item - Alerts -->
      <li class="nav-item dropdown no-arrow mx-1">
        <a class="nav-link dropdown-toggle" href="#" id="alertsDropdown" role="button" data-toggle="dropdown"
          aria-haspopup="true" aria-expanded="false">
          <i class="fas fa-bell fa-fw" style="color: black;"></i>

          <!-- Counter - Alerts -->
          <span class="badge badge-danger badge-counter"></span>
        </a>
        <!-- Dropdown - Alerts -->
        <div class="
            dropdown-list dropdown-menu dropdown-menu-right
            shadow
            animated--grow-in
          " aria-labelledby="alertsDropdown">
          <h6 class="dropdown-header">Alerts Center</h6>
          <a class="dropdown-item d-flex align-items-center" href="#">
            <div class="mr-3">
              <div class="icon-circle bg-primary">
                <i class="fas fa-file-alt text-white"></i>
              </div>
            </div>
            <div>
              <div class="small text-black-500 "> 2024</div>
              <span class="font-weight-bold">Hostel Management System</span>
            </div>
          </a>
          <a class="dropdown-item text-center small text-black-500 font-weight-bold " href="#">Show All Alerts</a>
        </div>
      </li>

      <!-- Nav Item - Messages -->
      <li class="nav-item dropdown no-arrow mx-1">
        <a class="nav-link dropdown-toggle" href="#" id="messagesDropdown" role="button" data-toggle="dropdown"
          aria-haspopup="true" aria-expanded="false">
          <i class="fas fa-envelope fa-fw" style="color: black;"></i>
          <!-- Counter - Messages -->
          <span class="badge badge-danger badge-counter"></span>
        </a>
        <!-- Dropdown - Messages -->
        <div class="
            dropdown-list dropdown-menu dropdown-menu-right
            shadow
            animated--grow-in
          " aria-labelledby="messagesDropdown">
          <h6 class="dropdown-header">Message Center</h6>
          <a class="dropdown-item d-flex align-items-center" href="#">
            <div class="dropdown-list-image mr-3">
              <img class="rounded-circle" src="https://source.unsplash.com/Mv9hjnEUHR4/60x60" alt="..." />
              <div class="status-indicator bg-success"></div>
            </div>
            <div>
              <div class="text-truncate font-weight-bold ">
                GPGC MANDIAN ABBOTTABAD
              </div>
              <div class="small text-black-500 font-weight-bold ">Department of Computer Science</div>
            </div>
          </a>
          <a class="dropdown-item text-center small text-black-500 font-weight-bold " href="#"></a>
        </div>
      </li>

     

      
      <div class="topbar-divider d-none d-sm-block"></div>
      <!-- Nav Item - User Information -->
      <li class="nav-item dropdown no-arrow">
        <a class="nav-link dropdown-toggle" href="#" id="userDropdown" role="button" data-toggle="dropdown"
          aria-haspopup="true" aria-expanded="false">
          <span class="mr-2 d-none d-lg-inline text-black-600 small" style="color: black;">{{ user.first_name }} {{
            user.last_name }}</span>
          <div class="profile-container">
            <i class="fas fa-user-circle profile-icon"></i>
          </div>
        </a>
        <!-- Dropdown - User Information -->
        <div class="dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="userDropdown">
          <a class="dropdown-item" href="#">
            <i class="fas fa-user fa-sm fa-fw mr-6 text-black-400"></i>
            Profile
    
          </a>
        
             <a class="dropdown-item" href="#">
            <i class="fas fa-user fa-sm fa-fw mr-2 text-black-400"></i>
            {{ user.first_name }} {{ user.last_name }}
          </a>
          <a class="dropdown-item" href="#">
            <i class="fas fa-envelope fa-sm fa-fw mr-2 text-black-400"></i>
            {{ user.email }}
          </a>
      
        
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="javascript:void(0)" @click="logout" data-toggle="modal"
            data-target="#logoutModal">
            <i class="fas fa-sign-out-alt fa-sm fa-fw mr-6 text-black-400"></i>
            Logout
          </a>
        </div>
      </li>
    </div>
  

      
    
  
  
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Topbar",
  computed: {
    ...mapGetters(["user"]),
  },
  methods: {
    logout() {
      localStorage.removeItem("token");
      this.$store.dispatch("user", null);
      this.$router.push("/login");
    },
  },
};
</script>

<style>
/* Apply dark black color to text inside the search box */
.navbar-search input[type="text"]::placeholder {
  color: #000;
  /* Dark black color */
}
.profile-icon {
  color: #000; /* Change the color if needed */
  font-size: 40px; /* Adjust the size as needed */
}
</style>