<template>
	<div class="container">
		<vtitle :title="title"></vtitle>
		<div class="brand-wrapper" ref="brandWrapper">
			<ul>
				<li v-for="(item,index) in list" @click="onNavTo('/brand')">
					<div class="brand-item">
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
						<!--<div class="desc-wrapper">
							<span class="desc">查看详情</span>
						</div>-->
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	import vtitle from '../components/title'
	import BSrcoll from 'better-scroll'
	export default {
		data() {
			return {
				title: '热门品牌',
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
				]
			}
		},
		
		created() {
			this.$nextTick(() => {
				this.brandSrcoll = new BSrcoll (this.$refs.brandWrapper,{
					click: true,
				})
			})
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
	
	.brand-wrapper {
		flex: 1;
		overflow: hidden;
	}
	
	.brand-wrapper ul li {
		border-bottom: 1px solid #DEDEDE;
	}
	
	.brand-wrapper ul li:last-child {
		border-bottom: none;	
	}
	
	.brand-item {
		display: flex;
		padding: 5px 20px 5px 40px;
	}
	
	.img {
		width: 125px;
	}
	
	.info {
		flex: 1;
		padding-left: 30px;
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
		padding: 2px 10px;
		font-size: 20px;
		color: #FFFFFF;
		background: #1AAD19;
		border-radius: 5px;
	}
</style>