<template>
	<div class="containers">
		<div class="head">
			<div class="content">
				<div class="message-wrapper" :class="{'messageam':menu}" @click="onNavTo('/message')">
					<img src="../../assets/img/rest/message.png"/>
				</div>
				<div class="search-wrapper">
					<input type="text" v-model="search" placeholder="搜索商品" @focus="onfocus"/>
					<div class="search" @click="onSearch">
						<span></span>
					</div>
				</div>
				<div class="menu-wrapper" :class="{'menuam':!menu}" @click="menuShow">
					<img src="../../assets/img/index/menu.png"/>
				</div>
			</div>
			<!--目录-->
			<transition name="fademenu">	
				<div class="menu" v-show="menu">
					<ul>
						<li v-for="(item,index) in menuList" @click="onNavTo(item.url)">{{item.title}}</li>
						<!--<li>登录&nbsp;Sign&nbsp;In</li>
						<li>订单&nbsp;Your&nbsp;Lists</li>
						<li>卖家&nbsp;Sellsr</li>
						<li>买家&nbsp;Buys</li>
						<li>支持方&nbsp;Support</li>
						<li>关于幕味&nbsp;About&nbsp;More-V</li>-->
					</ul>
				</div>
			</transition>
		</div>
		<div class="main">
			<!--轮播-->
			<div class="swiper-wrapper">
				<swiper auto loop :interval=3000 class="text-scroll" :show-dots="true">
					<swiper-item><img src="../../assets/img/382a21c3a133135500d3bdfeef479dd5.jpg" @click="onDetail('1')"/></swiper-item>
     				<swiper-item><img src="../../assets/img/a98f00ed6c2de0fb1f7f9f98c28b9e96.jpg"/></swiper-item>
      			<swiper-item><img src="../../assets/img/a98f00ed6c2de0fb1f7f9f98c28b9e96.jpg"/></swiper-item>
				</swiper>
			</div>
			<div class="list">
				<div class="h">
					<span>热门品牌推荐</span>
					<span @click="onNavTo('/morebrand')">更多</span>
				</div>
				<div class="brand-wrapper" ref="brandWrapper">
					<ul class="brand-list">
						<li v-for="(item,index) in list">
							<div class="brand-item" @click="onDetail(index)">
								<div class="logo">
									<img src="../../assets/img/timg.jpg"/>
									<p>优鲜沛</p>
								</div>
								<div class="slogan">
									<p>slogan</p>
								</div>
								<div class="show">
									<img src="../../assets/img/382a21c3a133135500d3bdfeef479dd5.jpg"/>
								</div>
								<div class="background">
									<img width="100%" height="100%" src="../../assets/img/382a21c3a133135500d3bdfeef479dd5.jpg"/>
								</div>
							</div>	
						</li>
					</ul>
				</div>
			</div>
		</div>
		<!--弹窗提示-->
		<div v-transfer-dom>
	      <x-dialog v-model="showToast" class="dialog-demo">
	        <div style="padding:15px;">
	          <span>请填写搜索关键字</span>
	        </div>
	        <div class="notarize" @click="showToast = false">
	            <icon type="cancel"></icon>  	
	        </div>
	      </x-dialog>
	    </div>
	</div>
</template>

<script>
	import { TransferDomDirective as TransferDom } from 'vux/src/directives/transfer-dom'
	import XDialog from 'vux/src/components/x-dialog'
	import Icon from 'vux/src/components/icon'
	import Swiper from 'vux/src/components/swiper/swiper.vue'
	import SwiperItem from 'vux/src/components/swiper/swiper-item.vue'
	import BSrcoll from 'better-scroll'
	import split from '../components/split'
	export default {
		directives: {
		   TransferDom
		},
		
		data() {
			return {
				search: '',
				showToast: false,
				menu: false,
				timer: null,
				menuList: [
					{
						title: '登录 Sign In',
						url: '/signin'
					},
					{
						title: '订单 Your Lists',
						url: ''
					},
					{
						title: '卖家 Sellsr',
						url: ''
					},
					{
						title: '买家 Buys',
						url: ''
					},
					{
						title: '支持方 Support',
						url: ''
					},
					{
						title: '关于幕味 About More-V',
						url: ''
					},
				],
				list: [
					{
						url: ''
					},
					{
						url: ''
					},
					{
						url: ''
					},
					{
						url: ''
					},
					{
						url: ''
					},
					{
						url: ''
					},
					{
						url: ''
					},
					{
						url: ''
					},
					{
						url: ''
					},
				]
			}
		},
		
		created() {
			this.$nextTick(() => {
				this.$vux.loading.show({
			        text: 'Loading...'
			       
			    })
				setTimeout(() => {
					this.$vux.loading.hide()
				},1000)
				this.brandSrcoll = new BSrcoll (this.$refs.brandWrapper,{
					click: true
				})
			})
		},
		
		methods: {
			onSearch() {
				if(this.search === '') {
					this.showToast = true
				}
			},
			
			menuShow() {
				this.menu = !this.menu
			},
			
			onfocus() {
				if (!this.timer) {
					this.warning = true
					this.timer = window.setInterval(() => {
						this.warning = false
						window.clearInterval(this.timer)
						this.timer = null
					},2000);
				}
			},
			
			onDetail(index) {
				console.log(index)
				console.log(this.list.length)
			},
			
			onNavTo(url) {
				this.$router.push(url)
			},
			
		},
		
		components: {
			XDialog,
    		Icon,
    		Swiper,
    		SwiperItem,	
		}
	}
</script>

<style scoped>
	
	.containers {
		overflow: hidden;
	}
	
	.head {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 96px;
		background: linear-gradient(to right, rgb(11,91,168) , rgb(0,157,228));
	}
	
	.head .content {
		display: flex;
		align-items: center;
		justify-content: space-around;
		width: 80%;
	}
	
	.search-wrapper {
		display: flex;
		justify-content: center;
		width: 67%;
		box-sizing: border-box;
	}
	
	.search-wrapper input{
		width: 85%;
		height: 48px;
		font-size: 24px;
		border: none;
		outline: none;
		text-indent: 24px;
		border-radius: 32px 0 0 32px;
	}
	
	.search-wrapper .search {
		flex: 1;
		display: flex;
		justify-content: center;
		align-items: center;
		width: 15%;
		font-size: 24px;
		height: 48px;
    	line-height: 48px;
    	border-radius: 0 32px 32px 0;
    	background-color: #009FE6;
	}
	
	.search span {
		width: 32px;
		height: 32px;
		background: url(../../assets/img/rest/search.png) no-repeat;
		background-size: cover;
	}
	
	.dialog-demo .notarize {
		font-size: 48px;
		padding: 20px;
	}
	
	.message-wrapper,.menu-wrapper {
		vertical-align: middle;
		width: 40px;
		height: 40px;
		transform: none;
	}
	
	.menu {
		position: fixed;
		top: 80px;
		right: 40px;
		width: 50%;
		background: rgba(0,159,230,0.95);
		border-radius: 20px;
		z-index: 100;
	}
	
	.menuam {
		animation: menumove 2s infinite linear;
	}
	
	@keyframes menumove {
		from {
			transform: translateX(0);
		}
		25% {
			transform: translateX(10px);
		}
		75% {
			transform: translateX(-10px);
		}
		to {
			transform: translateX(0);
		}
	}
	
	.menu ul li {
		padding:  20px 0 20px 15px;
		font-size: 28px;
		border-bottom: 1px solid #FFFFFF;
	}
	
	.menu ul li :nth-last-child {
		border-bottom: none;
	}
	
	.fademenu-enter-active, .fademenu-leave-active {
	  transition: .5s
	}
	
	.fademenu-enter, .fademenu-leave-to {
	  opacity: 0;
	  transform: translateY(10px);
	}
	
	.messageam{
		animation: messagemove 5s infinite linear;
	}
	
	@keyframes messagemove {
		from {
			transform: rotate(0)
		}
		to {
			transform: rotate(360deg)
		}
	}
	
	.fade-enter-active, .fade-leave-active {
	  transition: .5s
	}
	
	.fade-enter, .fade-leave-to {
	  opacity: 0;
	  transform: translateY(-10px);
	}
	
	.list .h{
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding-right: 20px;
		height: 70px;
		box-shadow: 0 0 3px #CCCCCC;
		z-index: 10;
	}
	
	.h span:nth-child(1) {
		font-size: 35px;	
		color: #009FE6;
		
	}
	
	.h span:nth-child(2) {
		padding: 0 10px;
		font-size: 20px;
		line-height: 40px;
		color: #FFFFFF;
		background: #42B983;
		border-radius: 5px;
	}
	
	.brand-wrapper {
		/*position: fixed;
		bottom: 100px;
		width: 100%;*/
		height: 672px;
		overflow: hidden;
	}
	
	.brand-list li {
		margin-bottom: 20px;
	}
	
	.brand-item {
		position: relative;
		display: flex;
		align-items: center;
		padding: 10px 40px 10px 20px;
		/*background: #DEDEDE;*/
	}
	
	.logo img {
		width: 100px;
		height: 100px;
		border-radius: 5px;
	}
	
	.logo p {
		margin-top: 5px;
		font-size: 30px;
		text-align: center;
		color: #FFFFFF;
	}
	
	.slogan {
		flex: 1;
		color: #FFFFFF;
	}
	
	.slogan p {
		text-align: center;
	}
	
	.show img {
		width: 280px;
		height: 100px;
		border-radius: 5px;
	}
	
	.background {
		position: absolute;
		top: 0;
		right: 0;
		width: 100%;
		height: 100%;
		filter: blur(15px);
		z-index: -2;
		overflow: hidden;
	}
</style>