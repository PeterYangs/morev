<template>
	<div class="container">
		<vtitle :title="title"></vtitle>
		<div class="tab">
			<div class="tab-item" v-for="(item,index) in tabs" :class="{'pitch':tabIndex === index}" @click="onTabIndex(index)">
				<p :class="{'movep':tabIndex === index}">{{item}}</p>
			</div>
			<div class="slide" :class="classMap[tabIndex]"></div>	
		</div>
		<!--内容-->
		<div class="content">
		<!--	通知-->
			<div class="inform" v-show="tabIndex === 0" ref="informWrapper">
				<ul>
					<li v-for="(item,index) in list">
						<div class="portrait">
							<img src="../../assets/img/timg.jpg"/>
						</div>
						<div class="message">
							<h3><span class="name">慕味客服</span><span class="date">17/12/12</span></h3>
							<p>你好，请问有什么可以帮您。</p>
						</div>
					</li>
					<li v-for="(item,index) in list">
						<div class="portrait">
							<img src="../../assets/img/timg.jpg"/>
						</div>
						<div class="message">
							<h3><span class="name">慕味飞盈</span><span class="date">17/12/12</span></h3>
							<p>今日优鲜沛上新三款新产品，总有一款适合你~</p>
						</div>
					</li>
					<span @click="onShow1">点击</span>
					<span @click="onShow">可以</span>
				</ul>
			</div>
			<!--公告-->
			<div class="notice" v-show="tabIndex === 1" ref="noticeWrapper">
				<ul>
					<li v-for="(item,index) in list">
						<div class="item">
							<h3 class="date">2017年11月18日 8:00</h3>
							<div class="desc">
								<div class="top">
									<span>公告信息</span>
									<h3 class="h">地标天物第二季 | 我在活动现场见到你了！</h3>
									<p>
										PLMA自有品牌展，慕味与你同行。作为全球优质农产品品牌发行商，more-V拥有8500家海外上游源头供应商资源（会员）、
										宣传优势（亚洲最大食品展会SIAL China中食展）、精通贸易（18年国际贸易、展会经验）三大优势。
									</p>	
								</div>
								<div class="bottom">
									<span>查看详情</span>
									<span @click="onmeijihua">更多</span>
								</div>
							</div>
						</div>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
	import vtitle from '../components/title'
	import Spinner from 'vux/src/components/spinner'
	import Toast from 'vux/src/components/toast'
	import BScroll from 'better-scroll'
	export default {
		data() {
			return {
				food: {
					count: 0
				},
				
				toastShow: false,
				
				title: '消息',
				
				tabs:['通知','公告'],
				tabIndex: 0,
				
				list: [
					{
						text: ''
					},
					{
						text: ''
					},
					{
						text: ''
					},
					{
						text: ''
					},
				]
			}
		},
		
		created() {
			this.classMap = ['','move']
			this.$nextTick(() => {
				this.$vux.loading.show({
			        text: 'Loading...'
			       
			    })
				setTimeout(() => {
					this.$vux.loading.hide()
				},1000)
				this.informScroll = new BScroll (this.$refs.informWrapper, {
					click: true,
				})
			})
		},
		
		methods: {
			decreaseCart(n) {
				this.food.count-= n
			},
			
			addCart(n) {
				this.food.count+= n
		
			},
			
			onShow() {
//				this.$vux.toast.show({
//					text: "<span class='icon failed'></span><span class='toast-span'>操作失败</span>",
//					type: 'text',
//					time: '1000',
//					position: 'top',
//					isShowMask: true
//				})
				
				this.$vux.loading.show({
			        text: 'Loading...'
			       
			    })
				setTimeout(() => {
					this.$vux.loading.hide()
				},2000)
			},
			
			onShow1() {
				this.$vux.toast.show({
					text: "<span class='icon succeed'></span><span class='toast-span'>操作成功</span>",
					type: 'text',
					position: 'top',
					isShowMask: true
				})
			},
			
			onTabIndex(index) {
				this.tabIndex = index
				if (this.tabIndex === 1) {
					this.$nextTick(() => {
						this.noticeScroll = new BScroll (this.$refs.noticeWrapper, {
							click: true,
						})
					})
				} else {
					this.$nextTick(() => {
						this.informScroll = new BScroll (this.$refs.informWrapper, {
							click: true,
						})
					})
				}
			},
			
			onmeijihua() {
				console.log('11')
			}
		},
		
		components: {
			Spinner,
			Toast,
			vtitle
		}
	}
</script>

<style scoped>
	
	.tab {
		position: relative;
		display: flex;
		height: 60px;
		line-height: 60px;
		border-bottom: 1px solid #DEDEDE;
		box-shadow: 0 0 3px #CCCCCC;
	}
	
	.tab .slide {
		transform: translateX(164px);
	}
	
	.tab .move {
		transform: translateX(536px);
	}
	
	.tab .tab-item {
		flex: 1;
	}
	
	.tab .tab-item p {
		font-size: 30px;
		text-align: center;
		transition: .5s;
	}
	
	.pitch {
		transition: .5s;
	}
	
	.pitch p {
		font-size: 18px;
		color: #009BE4;
		transform: translateY(-5px);
	}
	
	@keyframes moveam {
		from {
			transform: translateX(0);
		}
		25% {
			transform: translateX(5px);
		}
		75% {
			transform: translateX(-5px);
		}
		to {
			transform: translateX(0);
		}
	}
	
	.movep {
		animation: moveam 2s infinite linear;
	}
	
	.content {
		position: fixed;
		width: 100%;
		height: 1095px;
	} 
	
	.content .notice {
		height: 100%;
		background: #f9f9f9;
		overflow: hidden;
	}
	
	.notice ul li {
		padding: 20px 20px 50px 20px;
	}
	
	.item .date {
		margin-bottom: 5px;
		font-size: 20px;
		color: #ccd2dd;
		text-align: center;
	}
	
	.desc {
		padding: 20px;
		background: #FFFFFF;
		border-radius: 10px;
	}
	
	.desc .top {
		padding-bottom: 10px;
		border-bottom: 1px solid #e7e7e7;
	}
	
	.top span {
		font-size: 22px;
		color: #CCCCCC;
		
	}
	
	.top .h {
		padding-top: 10px;
		padding-bottom: 10px;
		font-size: 33px;
		line-height: 33px;
		font-weight: 700;
	}
	
	.top p {
		font-size: 25px;
		color: #949494;
		text-align: justify;
	}
	
	.desc .bottom {
		display: flex;
		justify-content: space-between;
		padding: 20px 0;
	}
	
	.inform {
		height: 100%;
		overflow: hidden;
	}
	
	.inform ul li {
		display: flex;
		padding: 10px;
		border-bottom: 1px solid rgba(7,17,27,0.1);
	}
	
	.portrait {
		width: 120px;
		height: 120px;
	}
	
	.portrait img {
		border-radius: 50%;
	}
	
	.message {
		flex: 1;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		padding-left: 20px;
	}
	
	.message h3 {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	
	.message p {
		font-size: 25px;
		color: #999999;
		overflow: hidden;
	}
	
	h3 .name {
		font-size: 35px;
		color: #333333;
		font-weight: 700;
		
	}
	
	h3 .date {
		font-size: 20px;
		color: #666666;
	}
	
	
</style>