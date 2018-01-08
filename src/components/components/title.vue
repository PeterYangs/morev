<template>
	<div class="title">
		<span class="icon back left" @click="onGoBack"></span>
		<span>{{title}}</span>
	</div>
</template>

<script>
	export default {
		props: {
			title: {
				type: String
			}
		},
		
		data() {
			return {
				
			}
		},
		
		created() {
			
		},
		
		computed: {
			
		},
		
		methods: {
			onGoBack() {
				this.$router.go(-1)
			}
		}
	}
</script>

<style scoped>
	
	.title {
		height: 80px;
		line-height: 80px;
		font-size: 32px;
		font-weight: 700;
		font-family: "微软雅黑"!important;
		text-align: center;
		color: #FFFFFF;
		background: linear-gradient(to right, rgb(11,91,168) , rgb(0,157,228));
	}
	
	.title  {
		position: relative;
	}
	
	.title .icon {
		position: absolute;
		top: 22px;
	}
	
	.title .right {
		right: 20px;
	}
	
	.title .left {
		left: 20px;
	}
</style>