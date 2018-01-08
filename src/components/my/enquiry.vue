<template>
	<div class="container">
		<vtitle :title="title"></vtitle>
		<div class="list-wrapper">	
			<ul>
				<li>
					<div class="goods-list">
						<div class="img">
							<img src="../../assets/img/timg.jpg"/>
						</div>
						<div class="info">
							<h3>优鲜沛 鲜红蔓越莓切片1/2切片</h3>
							<p><span>已选:</span>11.34kg/箱*10箱</p>
						</div>
						<div class="desc">
							<div class="price">
								¥666.00
							</div>
							<span class="detail" @click="onNavTo('/myenquiry')">查看详情</span>
						</div>
					</div>
				</li>
			</ul>
		</div>
		<!--<transition name="hide">		
			<div class="detail-wrapper" v-show="detail">
				<span class="icon close" @click="detail = false"></span>
				<div class="form">
					<div class="">	
						<h3>用户信息</h3>
						<ul>
							<li>
								<span class="lable">收货人:</span>
								<span>慕味飞盈</span>
							</li>
							<li>
								<span class="lable">联系电话:</span>
								<span>18966668888</span>
							</li>
							<li>
								<span class="lable">提供发票:</span>
								<span>是</span>
							</li>
							<li>
								<span class="lable">收货地址：</span>
								<span>湖北省武汉市江汉区淮海路泛海国际SOHO城2-1105</span>
							</li>
						</ul>
					</div>
					<div class="">
						<h3>产品信息</h3>
						<ul>
							<li>
								<div class="goods-list">
						<div class="img">
							<img src="../../assets/img/timg.jpg"/>
						</div>
						<div class="info">
							<h3>优鲜沛 鲜红蔓越莓切片1/2切片</h3>
							<p><span>已选:</span>11.34kg/箱*10箱</p>
						</div>
						<div class="desc">
							<div class="price">
								¥666.00
							</div>
							<span>10</span>
						</div>
					</div>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</transition>-->
	</div>
</template>

<script>
	import vtitle from '../components/title'
	export default {
		data() {
			return {
				title: '我的询价',
				
				detail: false,
			}
		},
		
		created() {
			
		},
		
		methods: {
			onNavTo(url) {
				this.$router.push(url)
			}
		},
		
		components: {
			vtitle
		}
	}
</script>

<style scoped>
	.container {
		display: flex;
		flex-direction: column;
	}
	
	.container .list-wrapper {
		flex: 1;
	}
	
	.list-wrapper ul li {
		border-bottom: 1px solid #DEDEDE;
		box-shadow: 0 0 3px #CCCCCC;
	}
	
	.goods-list {
		display: flex;
		padding: 20px 20px;
	}
	
	.img {
		width: 80px;
	}
	
	.info {
		flex: 1;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		padding-left: 20px;
	}
	
	.info>h3 {
		font-size: 30px;
		font-weight: 700;
	}
	
	.info>p {
		color: #999;
	}
	
	.info>p>span {
		margin-right: 5px;
		color: #FF0000;
	} 
	
	.desc {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
	
	.price {
		font-size: 30px;
		font-weight: 700;
		color: #FF0000;
		text-align: center;
	}
	
	.detail {
		padding: 5px 20px;
		font-size: 24px;
		line-height: 24px;
		color: #FFFFFF;
		background: #0199E0;
		border-radius: 5px;
	}
	
	.detail-wrapper {
		position: fixed;
		top: 0;
		width: 100%;
		height: 100%;
		background: #FFFFFF;
	}
	
	.hide-enter-active,.hide-leave-active {
		transition: .5s;
	}
	
	.hide-enter, .hide-leave-to {
		opacity: 0;
	}
	
	
</style>