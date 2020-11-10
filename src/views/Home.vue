<!-- @format -->

<template>
	<div>
		<!-- <ul id="example-1">
			<li v-for="item in items" :key="item.message">
				{{ item.message }}
			</li>
		</ul> -->

		<div id="header">
			<router-link to="/favorites" id="router-link">Избранное</router-link>
		</div>
		<div class="search">
			<input
				type="text"
				v-model="text"
				v-on:keyup.enter="submit"
				placeholder="Поиск"
			/>
		</div>
		<div class="keywords">
			<div>
				<router-link to="/imgdetails">
					<img
						:src="newurl"
						alt=""
						v-on:click="imgDtl"
						v-for="(newurl, label) in newurls"
						:key="newurl + label"
					/>
				</router-link>
			</div>
		</div>
		<div class="images" v-if="urls.length">
			<div v-if="urls">
				<router-link to="/imgdetails">
					<img :src="urls[0]" alt="" v-on:click="imgDtl" />
				</router-link>
				<router-link to="/imgdetails">
					<img :src="urls[1]" alt="" v-on:click="imgDtl" />
				</router-link>
				<router-link to="/imgdetails">
					<img :src="urls[2]" alt="" v-on:click="imgDtl" />
				</router-link>
			</div>

			<br />
			<div v-if="urls">
				<router-link to="/imgdetails">
					<img :src="urls[3]" alt="" v-on:click="imgDtl" />
				</router-link>
				<router-link to="/imgdetails">
					<img :src="urls[4]" alt="" v-on:click="imgDtl" />
				</router-link>
				<router-link to="/imgdetails">
					<img :src="urls[5]" alt="" v-on:click="imgDtl" />
				</router-link>
			</div>
			<br />
			<div v-if="urls">
				<router-link to="/imgdetails">
					<img :src="urls[6]" alt="" v-on:click="imgDtl" />
				</router-link>
				<router-link to="/imgdetails">
					<img :src="urls[7]" alt="" v-on:click="imgDtl" />
				</router-link>
				<router-link to="/imgdetails">
					<img :src="urls[8]" alt="" v-on:click="imgDtl" />
				</router-link>
				<router-link to="/imgdetails">
					<img :src="urls[9]" alt="" v-on:click="imgDtl" />
				</router-link>
			</div>
		</div>
		<div v-else>Loading....</div>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				items: [{ message: "Foo" }, { message: "Bar" }],
				text: "",
				urls: [],
				data: [],
				newurls: [],
				people: [],
			};
		},
		name: "Home",
		methods: {
			imgDtl(event) {
				this.$store.commit("changeName", event.path[0].src);
				this.$store.commit("changeUsername", this.data);
			},
			submit() {
				function getImg(text, urls) {
					urls.length=0;
					fetch("https://unsplash-295104.uc.r.appspot.com/" + text)
						.then(function(response) {
							if (response.status !== 200) {
								console.log(
									"Looks like there was a problem. Status Code: " +
										response.status
								);
								return;
							}
                              
							// Examine the text in the response
							response.json().then(function(data) {
								data.urls.map(el => urls.push(el));
							});
						})
						.catch(function(err) {
							console.log("Fetch Error :-S", err);
						});
				}
				this.urls = "";
				getImg(this.text, this.newurls);
			},
		},
		mounted() {
			this.people = [
				{ id: "this-is-an-id", name: "Evan", age: 34 },
				{ id: "unique-id", name: "Sarah", age: 98 },
				{ id: "another-unique-id", name: "James", age: 45 },
			];
			function getImg(urls, datas) {
				fetch("https://unsplash-295104.uc.r.appspot.com/random")
					.then(function(response) {
						if (response.status !== 200) {
							console.log(
								"Looks like there was a problem. Status Code: " +
									response.status
							);
							return;
						}

						// Examine the text in the response
						response.json().then(function(data) {
							data.data.map(e => datas.push(e));
							data.urls.map(el => urls.push(el));
						});
					})
					.catch(function(err) {
						console.log("Fetch Error :-S", err);
					});
			}
			getImg(this.urls, this.data);
		},
	};
</script>
<style scoped>
	@media (max-width: 600px) {
		.images > div {
			display: flex;
			flex-direction: column;
			width: 90%;
		}
		img {
			width: 100%;
			height: 300%;
			padding-left: 5%;
		}
	}
	/* /////////////////////// */

	.images > div {
		margin-top: 5%;
		display: flex;
		width: 90%;
	}

	input {
		width: 40vw;
		height: 5vh;
		margin-top: 3%;
		margin-left: 29%;
	}
	.search {
		background-image: url("../assets/van.png");
		background-repeat: no-repeat;
		background-position: 0 0;
		background-size: cover;
		height: 20vh;
	}
	#router-link {
		padding-top: 2%;
		padding-left: 60%;
		font-size: 20px;
		text-decoration: none;
		font-family: "Roboto", "sans-serif";
		font-style: normal;
		font-weight: normal;
		font-size: 18px;
		line-height: 21px;
		color: white;
	}
	#header {
		display: flex;
		width: 100%;
		height: 10vh;
		background-color: black;
	}
</style>
