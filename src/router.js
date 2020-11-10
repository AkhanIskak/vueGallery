/** @format */

import Vue from "vue";
import Router from "vue-router";
import Home from "@/views/Home";
Vue.use(Router);
export default new Router({
	mode: "history",
	routes: [
		{
			path: "/",
			component: Home,
		},
		{
			path: "/favorites",
			component: () => import("./views/Favorites.vue"),
		},
		{
			path: "/imgdetails",
			component: () => import("./views/ImgDetail.vue"),
		},
	],
});
