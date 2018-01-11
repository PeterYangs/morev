<template>
    <div class="container">
        <vtitle :title="title"></vtitle>
        <header>
        	<div class="left">
	        	<div>
	        		<span class="name">美佳华</span>
	        		<span class="phone">12345678912</span>
	        	</div>
	        	<span class="company">公司</span>
        	</div>
        	<div class="right">
        		<span>合计<span class="red">¥144</span></span>
        	</div>
        </header>
        <div class="list" ref="listWrapper">	
	        <ul>
	        	<li class="item" v-for="(item,index) in list">
	        		<div class="logo">
	        			<img src="../../assets/img/timg.jpg"/>
	        		</div>
	        		<div class="desc">
	        			<h1>土耳其无花果干-分享包100g-More-V慕味</h1>
	        			<p class="align"><span>规格：<span class="text">4号果</span></span><span class="price">¥165</span></p>
	        			<p class="align"><span>箱规：<span class="text">100g*50包/箱</span></span><span class="quantity">*1</span></p>
	        			<p>产地：<span class="text">原产地无花果</span></p>
	        			<p>交货期：<span class="text">7个工作日</span></p>
	        		</div>
	        	</li>
	        </ul>
        </div>
        <div class="submit" v-if="type == 1" @click="onSubmit()">
        	<span>提交订单</span>
        </div>
        <transition name="fade">
	        <div class="alert-wrapper" v-if="show">
	        	<div class="logo">
	        		<img src="../../assets/img/timg.jpg"/>
		        	<h1>提交成功</h1>
	        	</div>
	        	<div class="alert">
	        		<h1>通知</h1>
	        		<p> 
							    随后您将收到我们的产品经纪人的致电，确认订单信息，请保持电话畅通。
							    如有疑问，可致电400-808-1128。
							</p>
	        	</div>
	        	<footer>
	        		<div class="left">
	        			<span @click="onGoBack()">返回活动页</span>
	        		</div>
	        		<div class="right">
	        			<span @click="onGoBack()">查看订单</span>
	        		</div>
	        	</footer>
	        	<span class="icon back" @click="show = false"></span>
	        </div>
        </transition>
    </div>
</template>

<script>
		import vtitle from '../components/title'
		import BSrcoll from 'better-scroll'
		
    export default {
        data() {
            return {
							title: '订单详情',
							list: [
								{
									name: '',
									type: 1,
								},
								{
									name: '',
									type: 2,
								},
								{
									name: '',
									type: 1,
								},
								{
									name: '',
									type: 1,
								},
								{
									name: '',
									type: 1,
								},
								{
									name: '',
									type: 1,
								},								
							],
							show: false,
            }
        },

        created() {
        	this.type =  this.$route.params.type 
					this.$nextTick(() => {
						this.listSrcoll = new BSrcoll (this.$refs.listWrapper ,{
							click: true
						})
					})
        },

        computed: {

        },

        methods: {
					onSubmit(index) {
						this.$vux.loading.show({
							text: 'loading...'
						})
						window.setTimeout(() => {
							this.$vux.loading.hide()
							this.show = true
							this.type = 3
						},1000)
						
					},
					
					onGoBack() {
						this.$router.go(-1)
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
	
	.container .list {
		flex: 1;
		overflow: hidden;
	}
	
	header {
		display: flex;
		justify-content: space-between;
		padding: 20px;
		border-bottom: 1px solid #DEDEDE;
		box-shadow: 0 0 3px #CCCCCC;
	}
	
	header .right {
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 40px;
	}
	
	header .name {
		font-size: 35px;
		color: #333333;
	}
	
	header .phone {
		color: #666666;
		font-size: 26px;
	}
	
	header .company {
		font-size: 24px;
		color: #999999;
	}
	
	header .left>div {
		margin-bottom: 10px;
	}
	
	.red {
		color: #FF0000;
	}
	
	.logo {
		width: 196px;
		height: 196px;
	}
	
	.logo img {
		border-radius: 10px;
	}
	
	.item {
		display: flex;
		padding: 10px 10px;
		margin-top: 20px;
		width: 100%;
		background: #F9F9F9;
		box-sizing: border-box;
		box-shadow: 0 0 1px #CCCCCC;
	}
	
	.list .item:first-child {
		margin-top: 0px;
	}
	
	.item .desc {
		flex: 1;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		padding-left: 20px;
	}
	
	.desc h1 {
		font-size: 27px;
		color: rgba(7,17,27,1);
	}
	
	.desc p {
		font-size: 25px;
		color: #333;
	}
	
	.desc p .text {
		font-size: 24px;
		color: #999;
	}
	
	.desc .align{
		display: flex;
		justify-content: space-between;
	}
	
	.price {
		font-size: 28px;
		color: #FF0000;
	}
	
	.quantity {
		font-size: 28px;
		color: #000000;
	}
	
	.submit {
		position: fixed;
		bottom: 40px;
		right: 40px;
		background: #E9967A;
		border-radius: 40px;
		overflow: hidden;
	}
	
	.submit span {
		display: block;
		padding: 10px 20px;
		font-size: 26px;
		color: #FFFFFF;
		text-align: center;
	}
	
	.alert-wrapper {
		position: fixed;
		padding: 10px;
		width: 100%;
		height: 100%;
		color: #fff;
		background: rgba(7,17,27,0.6);
		box-sizing: border-box;
	}
	
	.alert-wrapper .logo {
		margin: 180px auto;
	}
	
	.logo h1 {
		font-size: 36px;
		text-align: center;
	}
	
	.alert h1 {
		position: relative;
		font-size: 32px;
		text-align: center;
	}
	
	.alert h1:after,
	.alert h1:before {
		display: block;
		position: absolute;
		top: 50%;
		right: 0;
		content: '';
		width: 40%;
		border-bottom: 1px solid #CCCCCC;
	}
	
	.alert h1:before {
		left: 0;
	}
	
	.alert p {
		padding: 40px 100px;
		font-size: 26px;
		line-height: 34px;
	}
	
	footer {
		display: flex;
		justify-content: space-around;
		margin-top: 40px;
	}
	
	footer>div {
		padding: 15px 30px;
		border-radius: 10px;
	}
	
	footer .left {	
		background: #45BDF5;
	}
	
	footer .right {
		background: #E9967A;
	}
	
	.fade-enter-active,
	.fade-leave-active {
		transition: .5s
	}
	
	.fade-enter,
	.fade-leave-to {
		opacity: 0;
		transform-origin: 0 100%;
		transform: rotate(90deg);
	}
	
	.alert-wrapper .icon {
		position: fixed;
		top: 20px;
		left: 20px;
	}
</style>