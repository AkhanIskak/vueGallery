<!-- @format -->

<template>
	<div>
		<div id="header">
			<router-link to="/">Домой</router-link>
		</div>
		<div class="keywords">
			<div>
				<router-link
					to="/imgdetails"
					v-on:click="imgDtl"
					v-for="(favurl, label) in favurls"
					:key="favurl + label"
				>
					<img :src="favurl" alt="" />
				</router-link>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				favurls: [],
			};
		},
		name: "Favorites",
		mounted() {
			let urls = localStorage.getItem("url").split(" ");
			this.favurls = urls;
		},
	};
</script>

<style scoped>
	@media (max-width: 600px) {
		#header {
			width: 100%;
			height: 10vh;
			background-color: black;
		}
		a {
			padding-top: 2%;
			padding-left: 80%;
			font-size: 20px;
			text-decoration: none;
			font-family: "Roboto", "sans-serif";
			font-style: normal;
			font-weight: normal;
			font-size: 18px;
			line-height: 21px;
			color: white;
		}
		.keywords > div {
			width: 10%;
			margin-top: 5%;
			margin-left: -10%;
		}
	}
	@media (min-width: 601px) {
		.keywords > div {
			width: 50%;
			margin-left: 25%;
			width: 10%;
			margin-top: 5%;
		}
		#header {
			width: 100%;
			height: 10vh;
			background-color: black;
		}
		a {
			padding-top: 2%;
			padding-left: 80%;
			font-size: 20px;
			text-decoration: none;
			font-family: "Roboto", "sans-serif";
			font-style: normal;
			font-weight: normal;
			font-size: 18px;
			line-height: 21px;
			color: white;
		}
	}
</style>
