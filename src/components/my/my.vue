<template>
	<div class="container">
		<vtitle :title="title"></vtitle>
		<div class="content">
			<div class="portrait">
				<div class="img-wrapper">
					<img src="../../assets/img/timg.jpg"/>	
				</div>
			</div>
			<div class="headline">
				<span class="left">采购管理</span>
				<span class="right"><span>查看全部采购</span><span class="on">更多</span></span>
			</div>
			<div class="options-wrapper">
				<div>
					<div class="option" v-for="(item,index) in optionList">
						<span class="icon" :class="item.class" @click="onNavTo(item.url)"></span>
						<p>{{item.title}}</p>
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
				title: '我的',
				optionList: [
					{
						title: '我的采购',
						url: '/indent',
						class: 'procurement'
					},
					{
						title: '待定采购',
						url: '',
						class: 'undetermined'
					},
					{
						title: '历史采购',
						url: '',
						class: 'history'
					},
					{
						title: '待评论采购',
						url: '',
						class: 'comment'
					},
					{
						title: '我的收藏',
						url: '/collect',
						class: 'collect'
					},
					{
						title: '商家关注',
						url: '/attention',
						class: 'attention'
					},
					{
						title: '账户管理',
						url: '/info',
						class: 'manage'
					},
					{
						title: '我的询价',
						url: '/enquiry',
						class: 'enquiry'
					},
				]
			}
		},
		
		created() {
			
		},
		
		mounted() {
			
		},
		
		methods: {
			onNavTo(url) {
				this.$router.push(url)
			}
		},
		
		components: {
			vtitle,	
		}
	}
</script>

<style scoped>
	.portrait {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 200px;
		background: #ccc;
	}
	
	.img-wrapper {
		width: 150px;
		height: 150px;
	}
	
	.content .headline {
		display: flex;
		justify-content: space-between;
		align-items: flex-end;
		padding: 20px;
		box-shadow: 0 0 3px #CCCCCC;
	}
	
	.headline .left{
		font-size: 30px;
	}
	
	.headline .right {
		display: flex;
		align-items: flex-end;
		font-size: 20px;	
	}
	
	.right span {
		font-size: 20px;
		color: #999;
	}
	
	.right .on {
		padding: 8px 10px;
		margin-left: 10px;
		color: #FFFFFF;
		background: #1AAD19;
		border-radius: 5px;
	}
	
	.options-wrapper {
		background: #333;
		border-top: 1px solid #DEDEDE;
		border-bottom: 1px solid #DEDEDE;
		box-shadow: 0 0 3px #CCCCCC;
	}
	
	.options-wrapper>div {
		display: flex;
		flex-wrap: wrap;
		background: #FFFFFF;
	} 
	
	.options-wrapper>div .option {
		flex: 0 0 25%;
		padding: 10px;
		text-align: center;
		box-sizing: border-box;
	}
	
	.icon {
		width: 54px;
		height: 54px;
		
	}
	
	.option p {
		margin-top: 10px;
		font-size: 20px;
		color: #666666;
	}
	
	.botton {
		margin-top: 10px;
	}
	
</style>