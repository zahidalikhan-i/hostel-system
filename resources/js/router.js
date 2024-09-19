import { createApp } from "vue";
import {
  createRouter,
  createWebHashHistory,
  createWebHistory,
} from "vue-router";
import store from "./vuex";
import AdminLayout from "./views/admin/layout/index";
import StudentLayout from "./views/student/layout/index";

 


const routes = [
  
  // {
  //   path: "/",
  //   name: "home",
  //   component: () => import("./views/admin/home/index.vue"),
  // },
  
  {
    path: "/",
    name: "admin",
    component: () => import("./views/admin/dashboard.vue"),
    meta: {
      requiresAuth: true,
      layout: AdminLayout,
    },
  },
  {
    path: "/login/:user_id?",
    name: "login",
    component: () => import("./views/login/index.vue"),
  },
  {
    path: "/register",
    name: "register",
    component: () => import("./views/register/index.vue"),
  },
  {
    path: "/verify/user/:id",
    name: "verify",
    props: true,
    component: () => import("./views/verify/index.vue"),
  },
  {
    path: "/forgot-password",
    name: "forgot",
    component: () => import("./views/forgot/index.vue"),
  },
  {
    path: "/reset/:token",
    name: "reset",
    component: () => import("./views/reset/index.vue"),
  },

  //  * Admin routes
  
   {
     path: "/admin",
     name: "HostelDashboard",
     component: () => import("./views/admin/dashboard.vue"),
     meta: {
       requiresAuth: true,
       layout: AdminLayout,
     },
   },
  
/**
   * student routes
   */
{
  path: "/student",
  name: "student",
  component: () => import("./views/student/dashboard.vue"),
  meta: {
    requiresAuth: true,
    layout: StudentLayout,
  },
},

{
  path: "/students",
  name: "studentAllData",
  component: () => import("./views/student/index.vue"),
  meta: {
    requiresAuth: true,
    layout: StudentLayout,
  },
},
//students routes
{
  path: "/student",
  name: "StudentsIndex",
  component: () => import("./views/student/index.vue"), 
  meta: {
    requiresAuth: true,
    layout: StudentLayout,
  },
},


//room routes
{
  path: "/admin/rooms",
  name: "adminRoomsIndex",
  component: () => import("./views/admin/rooms/index.vue"), // Update component import
  meta: {
    requiresAuth: true,
    layout: AdminLayout,
  },
},

{
  path: "/admin/rooms/create",
  name: "adminAddRoomsProfile",
  component: () => import("./views/admin/rooms/create.vue"), // Update component import
  meta: {
    requiresAuth: true,
    layout: AdminLayout,
  },
},

{
  path: "/admin/rooms/:id/edit",
  name: "adminRoomsProfileEdit",
  component: () => import("./views/admin/rooms/edit.vue"), // Update component import
  meta: {
    requiresAuth: true,
    layout: AdminLayout,
  },
},


// fee_slip routes
{
  path: "/admin/fee_slips",
  name: "adminFeeSlipsIndex",
  component: () => import("./views/admin/fee_slips/index.vue"),
  meta: {
    requiresAuth: true,
    layout: AdminLayout,
  },
},

{
  path: "/admin/fee_slips/create",
  name: "adminAddFeeSlips",
  component: () => import("./views/admin/fee_slips/create.vue"),
  meta: {
    requiresAuth: true,
    layout: AdminLayout,
  },
},

{
  path: "/admin/fee_slips/edit",
  name: "adminFeeSlipsProfileEdits",
  component: () => import("./views/admin/fee_slips/edit.vue"),
  meta: {
    requiresAuth: true,
    layout: AdminLayout,
  },
},


// mess_detail routes
{
  path: "/admin/mess_details/:id",
  name: "adminMessDetailsIndex",
  component: () => import("./views/admin/mess_details/index.vue"),
  meta: {
    requiresAuth: true,
    layout: AdminLayout,
  },
},

{
  path: "/admin/mess_details/create",
  name: "adminAddMessDetailsProfile",
  component: () => import("./views/admin/mess_details/create.vue"),
  meta: {
    requiresAuth: true,
    layout: AdminLayout,
  },
},

{
  path: "/admin/mess_details/:id/edit",
  name: "adminMessDetailsProfileEdits",
  component: () => import("./views/admin/mess_details/edit.vue"),
  meta: {
    requiresAuth: true,
    layout: AdminLayout,
  },
},



//students routes
{
  path: "/admin/students",
  name: "adminStudentsIndex",
  component: () => import("./views/admin/students/index.vue"), // Update component import
  meta: {
    requiresAuth: true,
    layout: AdminLayout,
  },
},

{
  path: "/admin/students/create",
  name: "adminAddstudentsProfile",
  component: () => import("./views/admin/students/create.vue"), // Update component import
  meta: {
    requiresAuth: true,
    layout: AdminLayout,
  },
},

{
  path: "/admin/students/:id/edit",
  name: "adminStudentsProfileEdit",
  component: () => import("./views/admin/students/profile.vue"), // Update component import
  meta: {
    requiresAuth: true,
    layout: AdminLayout,
  },
},

// Mess Details routes
{
  path: "/admin/mess_details",
  name: "adminMessDetailsIndex",
  component: () => import("./views/admin/mess_details/index.vue"),
  meta: {
    requiresAuth: true,
    layout: AdminLayout,
  },
},

{
  path: "/admin/mess_details/create",
  name: "adminAddMessDetail",
  component: () => import("./views/admin/mess_details/create.vue"),
  meta: {
    requiresAuth: true,
    layout: AdminLayout,
  },
},

{
  path: "/admin/mess_details/:id/edit",
  name: "adminMessDetailEdit",
  component: () => import("./views/admin/mess_details/edit.vue"),
  meta: {
    requiresAuth: true,
    layout: AdminLayout,
  },
},


// user Type routes
{
  path: "/admin/staff_types",
  name: "adminStaffTypesIndex",
  component: () => import("./views/admin/staff_types/index.vue"),
  meta: {
    requiresAuth: true,
    layout: AdminLayout,
  },
},

{
  path: "/admin/staff_types/create",
  name: "adminAddStaffTypes",
  component: () => import("./views/admin/staff_types/create.vue"),
  meta: {
    requiresAuth: true,
    layout: AdminLayout,
  },
},

{
  path: "/admin/staff_types/:id/edit",
  name: "adminStaffTypesEdit",
  component: () => import("./views/admin/staff_types/edit.vue"),
  meta: {
    requiresAuth: true,
    layout: AdminLayout,
  },
},

// User Profile routes
{
  path: "/admin/staff_profiles",
  name: "adminStaffProfileIndex",
  component: () => import("./views/admin/staff_profiles/index.vue"),
  meta: {
    requiresAuth: true,
    layout: AdminLayout,
  },
},

{
  path: "/admin/staff_profiles/create",
  name:"adminAddStaffProfile",
  component: () => import("./views/admin/staff_profiles/create.vue"),
  meta: {
    requiresAuth: true,
    layout: AdminLayout,
  },
},

{
  path: "/admin/staff_profiles/:id/edit",
  name:  "adminStaffProfileEdit",
  component: () => import("./views/admin/staff_profiles/edit.vue"),
  meta: {
    requiresAuth: true,
    layout: AdminLayout,
  },
},


//fee_categories routes
{
  path: "/admin/fee_categories",
  name: "adminFeeCategoriesIndex",
  component: () => import("./views/admin/fee_categories/index.vue"), // Update component import if necessary
  meta: {
    requiresAuth: true,
    layout: AdminLayout,
  },
},

{
  path: "/admin/fee_categories/create",
  name: "adminAddFeeCategoryProfile",
  component: () => import("./views/admin/fee_categories/create.vue"), // Update component import if necessary
  meta: {
    requiresAuth: true,
    layout: AdminLayout,
  },
},

{
  path: "/admin/fee_categories/:id/edit",
  name: "adminFeeCategoryProfileEdit",
  component: () => import("./views/admin/fee_categories/edit.vue"), // Update component import if necessary
  meta: {
    requiresAuth: true,
    layout: AdminLayout,
  },
},



];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (store.getters.user) {
      next();
      return;
    }
    next("/login");
  } else {
    next();
  }
});

export default router;
