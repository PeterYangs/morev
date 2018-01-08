<template>
	<div class="container">
		<vtitle :title="title"></vtitle>
		<div class="list" ref="listWrapper">
			<ul>
				<li v-for="(item,index) in list">
					<div class="brand-wrapper">
						<div class="img">
							<img src="../../assets/img/timg.jpg"/>
						</div>
						<div class="info">
							<h3>优鲜沛/Ocean Spray</h3>
							<div class="lable-wrapper">
								<span class="lable">蔓越莓</span>
								<span class="lable">蔓越莓</span>
								<span class="lable">蔓越莓</span>
								<span class="lable">蔓越莓</span>
							</div>
						</div>
						<div class="desc-wrapper">
							<span class="desc">查看详情</span>
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
				title: '我的关注',
				
				
				list: [
					{
						name: '',
					},
					{
						name: '',
					},
					{
						name: '',
					},
					{
						name: '',
					},
					{
						name: '',
					},
					{
						name: '',
					},
					{
						name: '',
					},
					{
						name: '',
					},
					{
						name: '',
					},
					{
						name: '',
					},
					{
						name: '',
					},
					{
						name: '',
					},
					
				]
			}
		},
		
		created() {
			this.$nextTick(() => {
				this.listBscroll = new BScroll (this.$refs.listWrapper, {
					click: true
				})
			})
		},
		
		methods: {
			
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
	
	.container .list {
		flex: 1;
		height: 100%;
		overflow: hidden;
	}
	
	.container ul li {
		border-bottom: 1px solid rgba(7,17,27,0.1);		
	}
	
	.container ul li:last-child {
		border-bottom: none;	
	}
	
	.brand-wrapper {
		display: flex;
		padding: 5px 20px 5px 40px;
	}
	
	.img {
		width: 125px;
	}
	
	.info {
		flex: 1;
		padding-left: 25px;
	}
	
	.info h3 {
		margin-top: 40px;
		font-size: 35px;
	}
	
	.lable-wrapper {
		margin-top: 10px;
	}
	
	.lable {
		display: inline-block;
		margin-top: 10px;
		padding: 2px 10px;
		font-size: 18px;
		color: #FFFFFF;
		background: #1AAD19;
		border-radius: 3px;
	}
	
	.desc-wrapper {
		display: flex;
		justify-content: center;
		align-items: center;
	}
	
	.desc {
		padding: 5px 20px;
		font-size: 20px;
		color: #FFFFFF;
		background: #009FE6;
		border-radius: 3px;
	}
</style>