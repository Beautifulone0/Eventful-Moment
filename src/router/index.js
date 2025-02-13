import { createRouter, createWebHistory } from "vue-router";
import HomeView from '../views/HomeView.vue'
import MyBucketView from '../views/MyBucketView.vue'
import ViewDetailsView from '../views/ViewDetailsView.vue'
import AddItemView from '../views/AddItemView.vue'
import EditItemView from '../views/EditItemView.vue'
import RegisterView from "../views/RegisterView.vue";


const router = createRouter({
    history: createWebHistory(import.meta.env.Base_URL),
    routes: [
      {
        path: "/",
        name: "Home",
        component:HomeView ,
      },
      {
        path: "/myBucket",
        name: "My bucket",
        component:  MyBucketView ,
      },
      {
        path: "/viewDetails",
        name: "View Details",
        component:  ViewDetailsView ,
      },
      {
        path: "/addItem",
        name: "Add Item",
        component:  AddItemView ,
      },
      {
        path: "/editItem",
        name: "Edit Item",
        component:  EditItemView ,
      },
      {
        path: "/register",
        name: "Register",
        component:  RegisterView,
      },
    ],
  });
  
  export default router;