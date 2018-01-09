<template>
	<div class="container">
		<vtitle :title="title"></vtitle>
		<div class="main">
			<div class="logo">
				<img src="../../assets/img/timg.jpg">
				<p>慕味终极粉丝</p>
			</div>
			<div class="info-wrapper">
				<!--<ul>-->
					<!--<li>-->
						<!--<span class="lable">昵称</span>-->
						<!--<span class="info">慕味终极粉丝</span>-->
					<!--</li>-->
					<!--<li>-->
						<!--<span class="lable">性别</span>-->
						<!--<span class="info">男</span>-->
					<!--</li>-->
					<!--<li>-->
						<!--<span class="lable">我的等级</span>-->
						<!--<span class="info">注册会员</span>-->
					<!--</li>-->
					<!--<li>-->
						<!--<span class="lable">公司名称</span>-->
						<!--<span class="info">慕味飞盈</span>-->
					<!--</li>-->
					<!--<li>-->
						<!--<span class="lable">账户安全</span>-->
						<!--<span class="info">绑定手机或邮箱  修改密码</span>-->
					<!--</li>-->
					<!--<li>-->
						<!--<span class="lable">地址管理</span>-->
						<!--<span class="info">meijihua</span>-->
					<!--</li>-->
				<!--</ul>-->
				<group>
					<x-input title="昵称"  text-align="right"></x-input>
					<popup-picker title="性别" :data="sexList" v-model="sex" value-text-align="right"></popup-picker>
					<x-input title="我的等级"  text-align="right"></x-input>
					<x-input title="公司名称"  text-align="right"></x-input>
					<x-input title="账户安全"  text-align="right"></x-input>
					<x-input title="地址管理"  text-align="right"></x-input>
				</group>
				<div class="alter" @click="onAlter">
					<span>提交修改</span>
				</div>
			</div>
			<div class="buttom-wrapper">
				<p class="buttom"><span @click="onDropOut">退出登录</span></p>
			</div>
		</div>
	</div>
</template>

<script>
	import vtitle from '../components/title'
    import Group from 'vux/src/components/group'
    import XInput from 'vux/src/components/x-input'
    import PopupPicker from 'vux/src/components/popup-picker'


	export default {
		data() {
			return {
				title: '个人信息',
				show: false,
				text: '炒作成功是的',
                sex: ['男'],
                sexList: [['男','女']],
			}
		},
		
		created() {
		
		},
		
		methods: {
			onAlter() {
				this.$vux.loading.show({
					text: 'Loading...'
				})
				window.setTimeout(() => {
					this.$vux.loading.hide()
					this.$vux.toast.show({
                    text: "<span class='icon succeed'></span><span class='toast-span'>修改成功</span>",
                    type: 'text',
                    position: 'top',
                    isShowMask: true
                })
				},1000)
			},
			
			onDropOut() {
			    let that = this
                this.$vux.confirm.show({
                    title: '确认?',
                    content: '确认注销登录吗?',
                    onShow () {
                        console.log('plugin show')
                    },
                    onHide () {
                        console.log('plugin hide')
                    },
                    onCancel () {
                        console.log('plugin cancel')
                    },
                    onConfirm () {
                        that.$vux.loading.show({
                            text: 'Loading...'
                        })
                        window.setTimeout(() => {
                            that.$vux.loading.hide()
                            that.$vux.toast.show({
                                text: "<span class='icon succeed'></span><span class='toast-span'>"+ that.text +"</span>",
                                type: 'text',
                                position: 'top',
                                isShowMask: true
                            })
                        },1000)
                    }
                })
			},
		},
		
		components: {
			vtitle,
            XInput,
            Group,
            PopupPicker
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
		position: relative;
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
	
	.alter {
		position: absolute;
		right: 0;
		margin-right: 20px;
		margin-top: 20px;
	}
	
	.alter span {
		display: block;
		padding: 10px 20px;
		color: #FFFFFF;
		background: #1AAD19;
		border-radius: 5px;
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