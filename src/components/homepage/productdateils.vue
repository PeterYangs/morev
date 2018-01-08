<template>
	<div class="container">
		<vtitle :title="title"></vtitle>
		<div class="main" ref="descList">
			<div>
				<div class="banner">
					<img src="../../assets/img/timg.jpg" />
				</div>
				<div class="desc-wrapper">
					<ul>
						<li>
							<h3>产品介绍</h3>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget.
							</p>
						</li>
						<li>
							<h3>详细信息</h3>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales
							</p>
						</li>
						<li>
							<h3>供应商描述</h3>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci,
							</p>
						</li>
						<li>
							<h3>采购方式</h3>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo
							</p>
						</li>
					</ul>
					<div class="recommend-wrapper">
						<h3>为您推荐</h3>
						<div class="product">
							<div class="item">
								<img src="../../assets/img/timg.jpg" />
							</div>
							<div class="item">
								<img src="../../assets/img/timg.jpg" />
							</div>
							<div class="item">
								<img src="../../assets/img/timg.jpg" />
							</div>
						</div>
						<div class="options">
							<span>关注</span>
							<span>收藏</span>
							<span>加入购物车</span>
							<span @click="enquiry = true">立即询价</span>
						</div>

					</div>
				</div>
			</div>
			<transition name="fold">
				<div class="enquiry" v-show="enquiry">
					<span class="icon close" @click="enquiry = false"></span>
					<div class="info">
						<div class="img">
							<img src="../../assets/img/timg.jpg" />
						</div>
						<div class="text">
							<h3>优鲜沛 蔓越莓 果干整颗</h3>
							<p>规格：11.34kg/箱</p>
						</div>
					</div>
					<div class="numb">
						<h3>数量</h3>
						<vcartcontrol></vcartcontrol>
					</div>
					<div class="buttom" @click="onNavTo('/dialogue')">
						<span>确认</span>
					</div>
				</div>
			</transition>
			<transition name="fade">
				<div class="mask" v-show="enquiry" @click="enquiry = false"></div>
			</transition>
		</div>
	</div>
</template>

<script>
	import vtitle from '../components/title'
	import vcartcontrol from '../components/cartcontrol'
	import BSrcoll from 'better-scroll'
	export default {
		data() {
			return {
				title: '蔓越莓切丁',
				enquiry: false,

			}
		},

		created() {
			this.$nextTick(() => {
				this.descSrcoll = new BSrcoll(this.$refs.descList, {
					click: true,
				})
			})
		},

		methods: {
			onNavTo(url) {
				this.$router.push(url)
			}
		},

		computed: {

		},

		components: {
			vtitle,
			vcartcontrol
		}
	}
</script>

<style scoped>
	.container {
		display: flex;
		flex-direction: column;
	}
	
	.main {
		flex: 1;
		overflow: hidden;
	}
	
	.desc-wrapper {
		padding: 20px;
	}
	
	.desc-wrapper ul li {
		padding-bottom: 10px;
		border-bottom: 1px solid rgba(7,17,27,0.1);
	}
	
	.desc-wrapper h3 {
		margin-top: 10px;
		margin-bottom: 10px;
		font-size: 30px;
		font-weight: 700;
		color: #333333;
	}
	
	.desc-wrapper p {
		font-size: 25px;
		color: #666666;
		text-align: justify;
	}
	
	.product {
		display: flex;
		justify-content: space-between;
	}
	
	.product .item {
		width: 30%;
	}
	
	.options {
		display: flex;
		justify-content: space-around;
	}
	
	.options span:last-child {
		padding: 10px 20px;
		color: #FFFFFF;
		background: orange;
		border-radius: 5px;
	}
	
	.mask {
		position: fixed;
		top: 0;
		right: 0;
		width: 100%;
		height: 100%;
		background: rgba(7, 17, 27, 0.6);
	}
	
	.fade-enter,
	.fade-leave-to {
		opacity: 0;
	}
	
	.fade-enter-active,
	.fade-leave-active {
		transition: 0.4s;
	}
	
	.enquiry {
		position: relative;
		position: fixed;
		bottom: 0;
		right: 0;
		width: 100%;
		background: #FFFFFF;
		z-index: 100;
	}
	
	.enquiry .close {
		position: absolute;
		right: 20px;
		top: 20px;
	}
	
	.info {
		display: flex;
		padding: 20px 0 20px 10px;
		border-bottom: 1px solid rgba(7,17,27,.1);
	}
	
	.info .img {
		width: 200px;
	}
	
	.info .text {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		padding: 40px 0 40px 20px;
	}
	
	.text h3 {
		font-size: 35px;
		color: #333333;
	}
	
	.text p {
		font-size: 30px;
		color: #93999f;
	}
	
	.fold-enter-active,
	.fold-leave-active {
		transition: 0.4s;
	}
	
	.fold-enter,
	.fold-leave-to {
		transform: translateY(100%);
	}
	
	.numb h3 {
		padding-left: 10px;
	}
	
	.buttom {
		height: 80px;
		line-height: 80px;
		background: #009BE4;
		text-align: center;
	}
	
	.buttom span {
		font-size: 35px;
		color: #FFFFFF;
	}
</style>