<template>
	<div>
		<div></div>
		<div class="banner-header">
			<div class="banner-top">
				<div class="top-left">
					北京
					<i class="iconfont">&#xe6b0;</i>
				</div>
				<div class="top-search">
					<i class="iconfont">&#xe621;</i>
					泰国
				</div>
				<div class="top-right">
					<img src="@/assets/img/show.png" alt="">
				</div>
			</div>
			<div class="banner-swiper">
				<swiper :options="swiperOptions">
					<swiper-slide v-for="item of imgsList" :key="item">
						<img :src="item" alt="">
					</swiper-slide>
					<div class="swiper-pagination" slot="pagination"></div>
				</swiper>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				swiperOptions: {
					pagination: {
						el: '.swiper-pagination'
					},
					loop: true
				},
				imgsList:[
					'@/assets/img/banner1.png',
					'@/assets/img/banner2.png',
					'@/assets/img/banner3.png'
				]
			}
		}
	}
</script>

<style scoped="scoped" lang="stylus">
	
</style>
