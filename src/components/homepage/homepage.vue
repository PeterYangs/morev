<template>
	<div class="container-tab">
		<div class="head">
			<div class="content">
				<div class="shaoma-wrapper">
					<img src="../../assets/img/rest/shaoma.png">
				</div>
				<!--<div class="message-wrapper" :class="{'messageam':menu}" @click="onNavTo('/message')">-->
					<!--<img src="../../assets/img/rest/message.png"/>-->
				<!--</div>-->
				<div class="search-wrapper">
					<input type="text" v-model="search" placeholder="搜索商品" />
					<div class="search" @click="onSearch">
						<span></span>
					</div>
				</div>
				<!--<div class="menu-wrapper" :class="{'menuam':!menu}" @click="menuShow">-->
					<!--<img src="../../assets/img/index/menu.png"/>-->
				<!--</div>-->

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

		<div class="swiper-wrapper">
			<!--轮播-->
			<swiper auto loop :interval=4000 class="img-scroll" :show-dots="true">
				<swiper-item><img src="../../assets/img/382a21c3a133135500d3bdfeef479dd5.jpg" @click="onDetail('1')"/></swiper-item>
				<swiper-item><img src="../../assets/img/a98f00ed6c2de0fb1f7f9f98c28b9e96.jpg"/></swiper-item>
				<swiper-item><img src="../../assets/img/a98f00ed6c2de0fb1f7f9f98c28b9e96.jpg"/></swiper-item>
			</swiper>
			<!--公告-->
			<swiper auto loop height="30px" direction="vertical" :interval=5000 class="text-scroll" :show-dots="false">
				<swiper-item><p>义务爱了 完成传奇世界H5-王者归来任务 获得20金币</p></swiper-item>
				<swiper-item><p>基本世神 兑换《传奇世界H5》畅玩级礼包 消耗30金币</p></swiper-item>
				<swiper-item><p>零哥章魚 完成传奇世界H5-王者归来任务 获得30金币</p></swiper-item>
				<swiper-item><p>做迎而為 兑换【饿了么】畅享美食红包 消耗20金币</p></swiper-item>
				<swiper-item><p>只知道不知道 兑换【饿了么】畅享美食红包 消耗20金币</p></swiper-item>
				<swiper-item><p>基本世神 兑换《传奇世界H5》畅玩级礼包 消耗30金币</p></swiper-item>
			</swiper>
		</div>

		<div class="list-wrapper" ref="listWrapper">
			<div class="list">
				<!--<div class="item">-->
					<!--<div class="h">-->
						<!--<span>热门品牌</span>-->
						<!--<span @click="onNavTo('/morebrand')">更多</span>-->
					<!--</div>-->
					<!--<div class="commodity-wrapper">-->
						<!--<div class="left text-wrapper">-->
							<!--<img src="../../assets/img/c5f0dcca7bcb0a468b5c53b46163f6246a60afc1.jpg"/>-->
							<!--<p class="text">就算冻死在冬天里也要说可乐不冰怎么喝</p>-->
						<!--</div>-->
						<!--<div class="right">-->
							<!--<div class="text-wrapper first">-->
								<!--<img src="../../assets/img/timg02.jpg"/>-->
								<!--<p class="text">美加华的咖啡</p>-->
							<!--</div>-->
							<!--<div class="text-wrapper first">-->
								<!--<img src="../../assets/img/timg02.jpg"/>-->
								<!--<p class="text">美加华的咖啡</p>-->
							<!--</div>-->
						<!--</div>-->
					<!--</div>-->
				<!--</div>-->
				<div class="item">
					<div class="h">
						<span>新品首发</span>
						<span @click="onNavTo('/morebrand')">更多</span>
					</div>
					<div class="commodity-wrapper">
						<div class="left text-wrapper" @click="onNavTo('/productdateils')">
							<img src="../../assets/img/c5f0dcca7bcb0a468b5c53b46163f6246a60afc1.jpg"/>
							<p class="text">美加华的咖啡</p>
						</div>
						<div class="right text-wrapper">
							<div class="text-wrapper">
								<img src="../../assets/img/timg02.jpg"/>
								<p class="text">美加华的咖啡</p>
							</div>
						</div>
					</div>
				</div>
				<div class="item">
					<div class="h">
						<span>精品首发</span>
						<span @click="onNavTo('/morebrand')">更多</span>
					</div>
					<div class="commodity-wrapper">
						<div class="left text-wrapper">
							<img src="../../assets/img/c5f0dcca7bcb0a468b5c53b46163f6246a60afc1.jpg"/>
							<p class="text">美加华的咖啡</p>
						</div>
						<div class="right text-wrapper">
							<div class="text-wrapper">
								<img src="../../assets/img/timg02.jpg"/>
								<p class="text">美加华的咖啡</p>
							</div>
						</div>
					</div>
				</div>
				<div class="item">
					<div class="h">
						<span>火热拼单</span>
						<span @click="onNavTo('/morebrand')">更多</span>
					</div>
					<div class="commodity-wrapper">
						<div class="text-wrapper" v-for="(item,index) in list">
							<img src="../../assets/img/c5f0dcca7bcb0a468b5c53b46163f6246a60afc1.jpg"/>
							<div class="text">
								<p>美加华的咖啡</p>
								<div class="plan-wrapper">
									<div class="border">
										<div class="plan" ref="plan">
											<p>{{item.width}}%</p>
										</div>
									</div>
									<div class="have">
										以拼447件
									</div>
								</div>
							</div>
						</div>
						<!--<div class="text-wrapper">-->
							<!--<div class="share-wrapper">-->
								<!--<img src="../../assets/img/timg02.jpg"/>-->
								<!--<div class="text">-->
									<!--<p>美加华的咖啡</p>-->
									<!--<div class="plan-wrapper">-->
										<!--<div class="border">-->
											<!--<div class="plan" ref="plan1">-->
												<!--<p>10%</p>-->
											<!--</div>-->

										<!--</div>-->
										<!--<div class="have">-->
											<!--以拼447件-->
										<!--</div>-->
									<!--</div>-->
								<!--</div>-->
							<!--</div>-->
						<!--</div>-->
					</div>
				</div>
				<p class="end">没有更多了，去顶部搜索查找您想要的产品~</p>
			</div>
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

	export default {
		directives: {
		   TransferDom
		},
		
		data() {
			return {
				search: '',
				// showToast: false,
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
						url: '',
						width: '30',
						index: '0'
					},
					{
						url: '',
                        width: '40',
                        index: '1'
					},
				],

			}
		},
		
		created() {
			this.$nextTick(() => {

				// this.$vux.loading.show({
			     //    text: 'Loading...'
                // })
				// setTimeout(() => {
				// 	this.$vux.loading.hide()
				// },1000)
				this.listSrcoll = new BSrcoll (this.$refs.listWrapper,{
					click: true
				})
                for( let i = 0; i < this.list.length; i++ ) {
                    this.$refs.plan[i].style.width = this.list[i].width + '%'
                }

			})


		},
		
		methods: {
			onSearch() {
				console.log('1')
			},
			
			menuShow() {
				this.menu = !this.menu
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
	
	.container-tab {
		display: flex;
		flex-direction: column;
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
		width: 75%;
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

	/*.img-scroll .vux-swiper {*/
		/*height: 360px;*/
	/*}*/

	/*.text-scroll .vux-swiper {*/
		/*height: 60px;*/
	/*}*/

	.dialog-demo .notarize {
		font-size: 48px;
		padding: 20px;
	}
	
	.message-wrapper,.menu-wrapper,.shaoma-wrapper {
		width: 40px;
		height: 40px;
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

	.text-scroll p{
		font-size: 24px;
		text-align: center;

	}

	.swiper-wrapper {
		box-shadow: 0 0 2px #ccc;
	}

	.list-wrapper {
		flex: 1;
		overflow: hidden;
	}

	.list .h{
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0 30px;
		height: 70px;
		line-height: 70px;
		background: #f3f5f7;

		z-index: 10;
	}
	
	.h span:nth-child(1) {
		font-size: 35px;
		font-weight: 700;
		color: #333;
	}
	
	.h span:nth-child(2) {
		padding: 0 10px;
		font-size: 20px;
		height: 40px;
		line-height: 40px;
		color: #FFFFFF;
		background: #42B983;
		border-radius: 5px;
	}

	/*.list .item:first-child .commodity-wrapper .left img{*/
		/*width: 380px;*/
		/*height: 320px;*/
	/*}*/

	/*.list .item:first-child .commodity-wrapper .right {*/
		/*display: flex;*/
		/*flex-direction: column;*/
		/*justify-content: space-between;*/
	/*}*/

	/*.list .item:first-child .commodity-wrapper .right img {*/
		/*width: 300px;*/
		/*height: 150px;*/
	/*}*/

	.commodity-wrapper > div  img{
		width: 340px;
		height: 320px;
	}

	.commodity-wrapper {
		display: flex;
		justify-content: space-between;
		padding: 10px 30px;
	}

	.text-wrapper {
		position: relative;
	}

	.text-wrapper .text {
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
		font-size: 30px;
		line-height: 50px;
		color: #FFFFFF;
		text-align: center;
		background: rgba(7,17,27,0.4);
		text-overflow:ellipsis;
		white-space: nowrap;
		overflow: hidden;
	}

	.plan-wrapper {
		display: flex;
		align-items: center;
		padding: 5px 0;
		line-height: 0;
	}

	.border {
		position: relative;
		flex: 1;
		display: flex;
		justify-content: flex-start;
		align-items: center;
		margin: 0 10px;
		border: 3px solid #ff0000;
		border-radius: 30px;
	}

	.border .plan {
		/*width: 20%;*/
		height: 26px;
		background: #ff0000;
		border-radius: 28px;
	}

	.plan p {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%,-50%);
	}

	.have {
		flex: 1;
		color: #ff0000;
		text-align: left;
		line-height: 30px;
	}

	.commodity-wrapper .right .first .text{
		font-size: 26px;
		height: 40px;
		line-height: 45px;
	}

	.end {
		font-size: 28px;
		color: #333;
		height: 60px;
		line-height: 60px;
		text-align: center;
		background: #f3f5f7;
	}

</style>