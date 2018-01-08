<template>
	<div class="container">
		<vtitle :title="title"></vtitle>
		<div class="main">
			<div class="head">
				<span>收藏</span>
				<span>客服中心</span>
				<span @click="onNavTo('/sampling')">免费取样</span>
			</div>
		</div>
	</div>
</template>

<script>
	import vtitle from '../components/title'
	export default {
		data() {
			return {
				title: '消息',
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
	.head {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 10px 25px;
	}
	
	.head span:first-child {
		padding: 10px;
		color: #FFFFFF;
		background: #009EE2;
		border-radius: 5px;
	}
	
	.head span:last-child {
		padding: 10px;
		width: 50px;
		color: #FFFFFF;
		text-align: center;
		background: #009EE2;
		border-radius: 5px;
	}
	
	.head span:nth-child(2) {
		font-size: 30px;
	}
	
</style>