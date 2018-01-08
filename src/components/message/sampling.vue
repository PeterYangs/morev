<template>
	<div class="container">
		<vtitle :title="title"></vtitle>
		<div class="main">
			<div class="user">
				<group title="用户信息">
					<x-input title="收货人：" v-model="consignee" @on-change="change"></x-input>
					<x-input title="联系电话：" mask="999 9999 9999" v-model="phone" :max="13" is-type="china-mobile"></x-input>
					<x-input title="公司名称：" v-model="company" @on-change="change"></x-input>
					<x-input title="收货地址：" v-model="site" @on-change="change"></x-input>
				</group>
			</div>
			<div class="sample">
				<h1>样品信息</h1>
				<div class="content">
					<div class="logo">
						<img src="../../assets/img/timg.jpg"/>
					</div>
					<div class="text">
						<span>优鲜沛 蔓越莓 果干整颗</span>
					</div>
					<cartcontrol class="seat"></cartcontrol>
				</div>
			</div>
		</div>
		<div class="submit" @click="onSubmit">
			<span v-show="!lineLoading">提交订单</span>
			<spinner v-show="lineLoading" type="lines" size="20px"></spinner>
		</div>
	</div>
</template>

<script>
	import vtitle from '../components/title'
	import Group from 'vux/src/components/group'
	import XInput from 'vux/src/components/x-input'
	import cartcontrol from '../components/cartcontrol'
	import Spinner from 'vux/src/components/spinner'
	export default {
		data() {
			return {
				title: '免费取样',
				phone: '',
				consignee: '',
				site: '',
				company: '',
				
				lineLoading: false,
			}
		},
		
		created() {
			
		},
		
		methods: {
			change(val) {
				console.log(val)
			},
			
			onSubmit() {
				this.lineLoading = true
				window.setTimeout(() => {
					this.lineLoading = false
					this.$vux.toast.show({
						text: "<span class='icon succeed'></span><span class='toast-span'>操作成功</span>",
						type: 'text',
						position: 'top',
						isShowMask: true
					})
				},2000)
			}
 		},
		
		components: {
			vtitle,
			Group,
			XInput,
			cartcontrol,
			Spinner
		}
	}
</script>

<style scoped>
	.logo img{
		width: 200px;
		height: 150px;
	}
	
	.sample h1 {
		margin-top: 20px;
		padding: 20px 15px 10px;
		font-size: 30px;
		color: #FFFFFF;
		background: #009FE6;
	}
	
	.sample .content {
		position: relative;
		display: flex;
		padding: 20px;
	}
	
	.content .text {
		flex: 1;
		padding: 0 20px;
		font-size: 30px;
	}
	
	.seat {
		position: absolute;
		right: 40px;
		bottom: 0;
	}
	
	.submit {
		position: fixed;
		right: 40px;
		bottom: 50px;
		background: #009FE6;
		padding: 15px 30px;
		border-radius: 10px;
	}
	
	.submit span {
		font-size: 25px;
		font-family: "微软雅黑";
		color: #FFFFFF;
	}
	
	
</style>