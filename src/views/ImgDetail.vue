<!-- @format -->

<template>
	<div class="">
		<div id="header">
			<router-link to="/">Домой</router-link>
		</div>
		<div class="labels">
			<div>
				<div>{{ name }}</div>
				<div>@{{ insta }}</div>
			</div>
			<div id="img" v-bind:class="{ active: isActive }">
				<img src="../assets/like.png" alt="" v-on:click="addFav" />
			</div>
			<div class="link">
				<a :href="src" :download="name">
					<span>Download</span>
				</a>
			</div>
		</div>
		<img :src="src" alt="" id="main-image" />
		<!-- <a href="/images/myw3schoolsimage.jpg" download> -->
	</div>
</template>

<script>
	export default {
		data() {
			return {
				isActive: false,
				src: "",
				name: "",
				insta: "",
			};
		},
		name: "imgdetail",
		mounted() {
			this.src = this.$store.state.user.fullName;

			let copy = this.$store.state.user;
			console.log(copy);
			let i;
			for (i = 0; i < copy.username.length; i++) {
				if (copy.username[i].urls.small === copy.fullName) {
					break;
				}
			}
			let name =
				copy.username[i].user.first_name +
				" " +
				copy.username[i].user.last_name;
			let insta = copy.username[i].user.instagram_username;

			this.name = name;
			this.insta = insta;
			console.log(copy.username[i]);
		},
		methods: {
			addFav() {
				//localStorage.removeItem('url')
				let urlStr = localStorage.getItem("url");
				if (urlStr == null) urlStr = this.src;
				else urlStr = this.src + " "+urlStr;
				localStorage.setItem("url", urlStr);
				this.isActive = !this.isActive;
			},
		},
	};
</script>
<style scoped>
	@media (max-width: 600px) {
		.active {
			width: 200% !important;
			background-color: red;
		}
		#main-image {
			height: 80% !important;
			margin-top: 5% !important;
			margin-left: 0% !important;
		}
	}
	.labels > .link > a {
		margin-top: 1.5%;
		color: black;
		border: yellow 1px solid;
		background-color: yellow;
		border-radius: 1vh;
		width: 10%;
	}
	.link > a {
		color: black;
		padding: 2%;
	}
	span {
		color: black;
	}
	.labels {
		display: flex;
	}
	.labels > div {
		width: 12%;
		height: 40%;
	}
	.labels > div > img {
		width: 60px;
		height: 70px;
	}
	.labels > div:not(:first-child, :last-child) {
		margin-left: 30%;
	}
	.labels > div:not(:first-child) {
		margin-left: 25%;
	}

	img {
		margin-top: 5%;
		margin-left: 30%;
	}
	#header {
		display: flex;
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
</style>
