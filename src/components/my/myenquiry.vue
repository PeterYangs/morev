<template>
	<div class="container">
		<vtitle :title="title"></vtitle>
		<div class="user wrapper">
			<h3>用户信息</h3>
			<div class="list-wrapper">
				<ul>
					<li class="list">
						<span class="lable">收货人：</span>
						<span>慕味飞盈</span>
					</li>
					<li class="list">
						<span class="lable">联系电话：</span>
						<span>189 6666 8888</span>
					</li>
					<li class="list">
						<span class="lable">提供发票：</span>
						<span>是</span>
					</li>
					<li class="list">
						<span class="lable">收货地址：</span>
						<span>湖北省武汉市江汉区淮海路泛海国际SOHO城2-1105</span>
					</li>
				</ul>
			</div>
		</div>
		<div class="wrapper">
			<h3>产品信息</h3>
			<div class="product">
				<div class="logo">
					<img src="../../assets/img/timg.jpg"/>
				</div>
				<div class="desc">
					<div class="top">
						<span class="h">优先沛 蔓越莓 干果整颗</span>
						<span class="price">¥666.00</span>
					</div>
					<div class="bottom">
						<span>规格：11.34kg/箱</span>
						<span>*10</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import vtitle from '../components/title'
	export default {
		data() {
			return {
				title: '我的询价'
			}
		},
		
		created() {
			
		},
		
		methods: {
			
		},
		
		components: {
			vtitle
		}
	}
</script>

<style scoped>
	.wrapper {
		margin-top: 10px;
	}
	
	.wrapper h3 {
		padding: 5px 15px;
		line-height: 35px;
		font-size: 32px;
		font-weight: 700;
		color: #FFFFFF;
		background: #0196dd;
	}
	
	.list-wrapper {
		padding-left: 15px;
	}
	
	.list-wrapper ul li{
		padding: 20px 0 20px 0;
		border-bottom: 1px solid #CCCCCC;
	}
	
	.list-wrapper ul li:last-child {
		border-bottom: none;
	}
	
	.list .lable {
		font-size: 30px;
		color: #333333;
	}
	
	.list span {
		font-size: 22px;
		color: #999999;
	}
	
	.product {
		display: flex;
		padding: 20px 20px;
		border-bottom: 1px solid #DEDEDE;
		
	}
	
	.logo img{
		width: 200px;
		height: 150px;
	}
	
	.desc {
		flex: 1;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		padding-left: 20px;
	}
	
	.desc>div{
		display: flex;
		justify-content: space-between;
	}
	
	.top .h {
		font-size: 30px;
		font-weight: 700;
		color: #333333;
	}
	
	.top .price {
		color: #FF0000;
		font-size: 28px;
		font-weight: 700;
	}
	
	.bottom span {
		color: #949494;
		font-size: 20px;
	}
	
</style>