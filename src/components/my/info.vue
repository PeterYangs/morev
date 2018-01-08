<template>
	<div class="container">
		<vtitle :title="title"></vtitle>
		<div class="main">
			<div class="logo">
				<img src="../../assets/img/timg.jpg">
				<p>慕味终极粉丝</p>
			</div>
			<div class="info-wrapper">
				<ul>
					<li>
						<span class="lable">昵称</span>
						<span class="info">慕味终极粉丝</span>
					</li>
					<li>
						<span class="lable">性别</span>
						<span class="info">男</span>
					</li>
					<li>
						<span class="lable">我的等级</span>
						<span class="info">注册会员</span>
					</li>
					<li>
						<span class="lable">公司名称</span>
						<span class="info">慕味飞盈</span>
					</li>
					<li>
						<span class="lable">账户安全</span>
						<span class="info">绑定手机或邮箱  修改密码</span>
					</li>
					<li>
						<span class="lable">地址管理</span>
						<span class="info">meijihua</span>
					</li>
				</ul>
			</div>
			<div class="buttom-wrapper">
				<p class="buttom"><span v-show="!show" @click="onDropOut">退出登录</span><spinner v-show="show" type="lines" size="20px"></spinner></p>	
			</div>
		</div>
	</div>
</template>

<script>
	import vtitle from '../components/title'
	import Spinner from 'vux/src/components/spinner'
	export default {
		data() {
			return {
				title: '个人信息',
				show: false,
				
				text: '炒作成功是的'
			}
		},
		
		created() {
		
		},
		
		methods: {
			onDropOut() {
				this.show = true
				setTimeout(() => {
					this.show = false
					this.$vux.toast.show({
						text: "<span class='icon succeed'></span><span class='toast-span'>"+ this.text +"</span>",
						type: 'text',
						position: 'top',
						isShowMask: true
					})
				},1000)
			},
			
			
		},
		
		components: {
			vtitle,
			Spinner
		}
	}
</script>

<style scoped>
	.container {
		display: flex;
		flex-direction: column;
	}
	
	.container .main {
		flex: 1;
		display: flex;
		flex-direction: column;
	}
	
	.logo {
		padding: 20px 0 40px;
		background: #CCCCCC;
		text-align: center;
	}
	
	.main .logo img{
		width: 150px;
		height: 150px;
	}
	
	.logo p {
		margin-top: 10px;
		font-size: 32px;
		font-family: "微软雅黑";
		font-weight: 700;
	}
	
	.info-wrapper {
		flex: 1;
	}
	
	.info-wrapper ul {
		padding-left: 20px;
	} 
	
	.info-wrapper ul li {
		display: flex;
		justify-content: space-between;
		padding: 20px;
		border-bottom: 1px solid rgba(7,17,27,0.1);
	}
	
	.info-wrapper ul li:last-child {
		border-bottom: none;
	}
	
	ul li .lable {
		font-size: 30px;
		font-weight: 700;
		font-family: "微软雅黑";
		color: #333333;
	}
	
	ul li .info {
		font-size: 23px;
		line-height: 43px;
		color: #666666;
	}
	
	.buttom {
		display: flex;
		justify-content: center;
		align-items: center;
		line-height: 0;
	}
	
	.buttom span {
		padding: 10px 200px;
		color: #FFFFFF;
		font-size: 25px;
		line-height: 25px;
	}
</style>