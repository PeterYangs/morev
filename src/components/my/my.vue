<template>
	<div class="container">
		<vtitle :title="title"></vtitle>
		<div class="content">
			<div class="portrait">
				<div class="img-wrapper">
					<img src="../../assets/img/timg.jpg"/>

				</div>
				<p>登录/注册</p>
			</div>
			<div class="headline">
				<span class="left">采购管理</span>
				<span class="right"><span>查看全部采购</span><span class="on">更多</span></span>
			</div>
			<div class="options-wrapper">
				<div class="top">
					<div class="option" v-for="(item,index) in optionList">
						<span class="icon" :class="item.class" @click="onNavTo(item.url)"></span>
						<p>{{item.title}}</p>
					</div>
				</div>
				<div class="bottom">
					<div class="option" v-for="(item,index) in myOption">
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
						url: '/indent/0',
						class: 'procurement',
						
					},
					{
						title: '待定采购',
						url: '/indent/2',
						class: 'undetermined',
						
					},
					{
						title: '历史采购',
						url: '/indent',
						class: 'history',
						
					},
					{
						title: '待评论',
						url: '/indent/3',
						class: 'comment',
						
					},
				],
				myOption: [
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
				],
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
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 30px 0;
		background: #ccc;
	}
	
	.img-wrapper {
		margin-top: 20px;
		width: 150px;
		height: 150px;
	}

	.img-wrapper img {
		border-radius: 50%;
	}

	.portrait p {
		margin: 20px 0 30px 0;
		font-size: 32px;
		text-align: center;
	}

	.content .headline {
		display: flex;
		justify-content: space-between;
		align-items: flex-end;
		padding: 20px;
		border-bottom: 1px solid rgba(7,17,27,0.1);
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

	}

	.options-wrapper .top {
		padding-bottom: 20px;
	}

	.options-wrapper .bottom {
		padding-top: 20px;
	}

	.options-wrapper>div {
		display: flex;
		flex-wrap: wrap;
	} 
	
	.options-wrapper>div .option {
		flex: 0 0 25%;
		padding: 20px 10px;
		text-align: center;
		box-sizing: border-box;
	}

	.options-wrapper > div:first-child {
		border-bottom: 10px solid #f3f5f7;
	}

	.icon {
		width: 54px;
		height: 54px;
		
	}
	
	.option p {
		margin-top: 10px;
		font-size: 28px;
		color: #333;
	}

	
</style>