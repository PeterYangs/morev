<template>
	<div class="container">
		<vtitle :title="title"></vtitle>
		<div class="form">
			<div class="item">
				<div class="icon-wrapper">
					<span class="icon id"></span>
					<input type="" v-model="username" placeholder="手机号/同一社会信用代码"/>
				</div>
				<p><!--{{usernameText}}--></p>
			</div>
			<div class="item">
				<div class="icon-wrapper">
					<span class="icon password"></span>
					<input type="password" placeholder="密码"/>
				</div>
				<p><!--<icon type="success-circle"></icon>--></p>
			</div>
			<div class="buttom-flex">
				<div class="buttom-item" @click="showDialogStyle = true">
					<span>注册</span>
				</div>
				<div class="buttom-item">
					<span>登陆</span>
				</div>
			</div>
			<div class="wrapper">
				<span @click="usernotice = true">会员须知</span>
				<span><span @click="onNavTo('/phonelogin')">手机登录</span><span @click="onNavTo('/forget')">忘记密码？</span></span>
			</div>
		</div>
		<!--弹窗-->
		<div v-transfer-dom>
	      <x-dialog v-model="showDialogStyle" hide-on-blur class="dialog" :dialog-style="{'max-width': '100%', width: '100%', height: '50%', 'background-color': 'transparent'}">
	      	<div v-show="!options">
		      	<span @click="showDialogStyle = false">声明</span>
		        <p>
		          	因平台只对专业客户开放，注册时请您务必填写准确的企业信息(如手:手机，姓名，公司全称等)，否则审核可能无法通过。另我们对此声明与承
		          	若,您的个人信息仅用于识别您的企业信息,不做其他商用。 
		        </p>
		        <div class="buttom" @click="options = true">
		        	<span>确认</span>
		        </div>
	      	</div>
	      	<div class="options" v-show="options">
	      		<div class="buyer" @click="onNavTo('/register')">
	      			<img src="../../assets/img/rest/buyer.png"/><span>买家注册</span>
	      		</div>
	      		<div class="seller" @click="onNavTo('/seller')">
	      			<img src="../../assets/img/rest/seller.png"/><span>卖家注册</span>
	      		</div>
	      	</div>
	      </x-dialog>
	    </div>
	    <!-- 会员须知-->
	    <transition name="fade">	
		    <div class="usernotice" v-show="usernotice">
		    	<div class="title" @click="usernotice = false">
					<span>会员须知</span>
					<span class="icon close-white right"></span>
				</div>
		    </div>
	    </transition>
	</div>
</template>

<script>
//	import { Icon,XDialog,XButton,TransferDomDirective as TransferDom } from 'vux'
	import Icon from 'vux/src/components/icon'
	import XDialog from 'vux/src/components/x-dialog'
	import XButton from 'vux/src/components/x-button'
	import { TransferDomDirective as TransferDom } from 'vux/src/directives/transfer-dom'
	import vtitle from '../components/title'
	export default {
		directives: {
		    TransferDom
		},
		
		data() {
			return {
				usernotice: false,
				username: '',
				usernameText: '',
				showDialogStyle: false,
				options: false,
				title: '用户登录'
			}
		},
		
		created() {
			
		},
		
		methods: {
            onNavTo(url) {
            	this.$router.push(url)
            },
            

		},
		
		components: {
			Icon,
			XDialog,
			XButton,
			vtitle
		}
	}
</script>

<style scoped>
	
	.form {
		padding: 20px;
	}
	
	.form input{
		outline: none;
		width: 100%;
		height: 70px;
		font-size: 30px;
		text-indent: 90px;
		border: 1px solid #00579E;
		border-radius: 60px;
	}
	
	.form .item {
		margin-bottom: 20px;
	} 
	
	.icon-wrapper {
		position: relative;
	}
	
	.icon-wrapper span {
		position: absolute;
		top: 50%;
		left: 35px;
		transform: translateY(-50%);
	}
	
	.item p {
		padding-left: 40px;
		height: 40px;
		line-height: 40px;
		font-size: 30px;
		color: red;
	}
	
	.buttom-flex {
		display: flex;
		justify-content: space-between;
		margin-bottom: 40px;
	}
	
	.buttom-item {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 48%;
		height: 70px;
		background: #009be4;
		border-radius: 60px;
	}
	
	.buttom-item span {
		font-size: 30px;
		color: #FFFFFF;
	}
	
	.wrapper {
		display: flex;
		justify-content: space-between;
	}
	
	.wrapper span {
		font-size: 30px;
		color: #45bdf5;
	}
	
	.wrapper>span>span {
		margin-left: 20px;
	}
	
	.buttom {
		margin: 0 auto;
		width: 25%;
		height: 70px;
		line-height: 70px;
		background: #00579E;
		border-radius: 20px;
		text-align: center;
	}
	
	.buttom span {
		font-size: 28px;
		color: #FFFFFF;
	}
	
	.dialog span{
		font-size: 40px;
		color: #fff;
		text-align: center;
	}
	
	.dialog p {
		padding: 40px 0;
		font-size: 30px;
		color: #fff;
		text-align: justify;
	}
	
	.options>div {
		display: flex;
		justify-content: center;
		align-items: center;
		margin-bottom: 80px;
	}
	
	.options img {
		margin-right: 40px;
		width: 128px;
		height: 128px;
	}
	
	.usernotice {
		position: fixed;
		top: 0;
		width: 100%;
		height: 100%;
		background: #FFFFFF;
	}
	
	.fade-enter-active,
	.fade-leave-active {
		transition: .5s
	}
	
	.fade-enter,
	.fade-leave-to {
		opacity: 0;
		transform: translateX(100%);
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
	
	
</style>