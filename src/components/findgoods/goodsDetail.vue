<template>
	<div class="container">
		<vtitle :title="title"></vtitle>
		<div class="brand-wrapper">	
			<div class="brand">
				<span class="lable">品牌：</span>
				<ul>
					<li>
						<img src="../../assets/img/timg.jpg"/>
					</li>
					<li>
						<img src="../../assets/img/timg.jpg"/>
					</li>
					<li>
						<img src="../../assets/img/timg.jpg"/>
					</li>
					<li>
						<img src="../../assets/img/timg.jpg"/>
					</li>
				</ul>
			</div>
			<div class="tag">
				<h1 class="lable">请选择：</h1>
				<ul class="tag-wrapper">
					<li v-for="(item,index) in list">
						<span :class="{'pitch':item.type}" @click="item.type = !item.type">{{item.name}}</span>
					</li>
				</ul>
			</div>
		</div>
		<div class="list-wrapper" ref="listWrapper">
			<ul>
				<li v-for="(item,index) in list" @click="noNavTo('/productdateils')">
					<div class="list-item">
						<div class="">
							<img src="../../assets/img/timg.jpg"/>
						</div>
						<div class="text">
							<span>Ocean Spray优鲜沛   蔓越莓</span>
							<span>原味蔓越莓切片   20件1起订</span>
							<div class="icon-wrapper">
								<span>vip</span>
								<span>取样</span>
								<span>购物车</span>
								<span>立即询价</span>
							</div>
						</div>
					</div>	
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	import vtitle from '../components/title'
	import BScroll from 'better-scroll'
	export default {
		data() {
			return {
				title:　'分类',
				
				list:[
					{
						name: '蔓越莓干',
						type: false
					},
					{
						name: '蓝莓干',
						type: false
					},
					{
						name: '西梅干',
						type: false
					},
					{
						name: '提子干',
						type: false
					},
					{
						name: '樱桃干',
						type: false
					},
					{
						name: '葡萄干',
						type: false
					},
					{
						name: '凤梨干',
						type: false
					},
					{
						name: '芭乐干',
						type: false
					},
					{
						name: '杏干',
						type: false
					},
					{
						name: '苹果干',
						type: false
					},
					{
						name: '甜枣',
						type: false
					},
					{
						name: '柚子参',
						type: false
					},
					{
						name: '软果干',
						type: false
					},
					{
						name: '相思果',
						type: false
					},
					{
						name: '蜜饯',
						type: false
					},
					{
						name: '榴莲干',
						type: false
					},
					{
						name: '木瓜干',
						type: false
					},
					{
						name: '果干坚果混合',
						type: false
					},
				]
			}
		},
		
		created() {
			this.$nextTick(() => {
				this.listScroll = new BScroll (this.$refs.listWrapper, {
					click:true
				})
 			})
			
		},
		
		methods: {
			noNavTo(url) {
				this.$router.push(url)
			}
		},
		
		components: {
			vtitle,
		}
	}
</script>

<style scoped>
	.container {
		display: flex;
		flex-direction: column;
	}
	
	.brand-wrapper {
		border-bottom: 1px solid #DEDEDE;
		box-shadow: 0 1px 1px #CCCCCC;
	}
	
	.brand {
		display: flex;
		align-items: center;
		padding: 10px 0 10px 20px;
		
	}
	
	.brand .lable {
		font-size: 30px;
	}
	
	.lable {
		font-weight: 700;
		font-family: "微软雅黑";
		color: rgb(7,17,27);
	}
	
	.brand ul {
		display: flex;
	}
	
	.brand ul li {
		margin-right: 20px;
	}
	
	.brand ul li img{
		width: 120px;
		height: 120px;
	}
	
	.tag ul {
		padding: 10px 0 10px 20px;
	}
	
	.tag .lable {
		padding: 10px 0 10px 20px;
		font-size: 30px;
		background: #CCCCCC;
	}
	
	.tag-wrapper {
		display: flex;
		flex-wrap: wrap;
	}
	
	.tag-wrapper li {
		margin: 15px 2px;
	}
	
	.tag-wrapper li span {
		padding: 5px 10px;
		font-size: 18px;
		color: #93999f;
		border: 1px solid rgba(7,17,27,.1);
		border-radius: 1px;
		transition: 0.5s;
	}
	
	.tag-wrapper li .pitch {
		color: #fff;
		background: #1AAD19;
		border: 1px solid #1AAD19;
	}
	
	.list-wrapper {
		flex: 1;
		overflow: hidden;
		
	} 
	
	.list-wrapper ul {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
	}
	
	.list-wrapper ul li {
		flex: 0 0 45%;
	}
	
	.text {
		display: flex;
		flex-direction: column;
		padding: 20px 10px 5px;
	}
	
	.text span:nth-child(1) {
		font-size: 25px;
		font-weight: 700;
	}
	
	.text>span:nth-child(2) {
		font-size: 22px;
		color: #ccc;
	}
	
</style>