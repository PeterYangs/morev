<template>
	<div class="container">
		<vtitle :title="title"></vtitle>
		<div class="from">
			<group>
				<x-input title="手机号" mask="999 9999 9999" v-model="phone" :max="13" is-type="china-mobile"></x-input>
	      		<x-input title="发送验证码" class="weui-vcode" v-model="code">
		        	<x-button slot="right" type="primary" mini :disabled="disabled" @click.native="getCode">
		        		<span v-show="!disabled">发送验证码</span>
		        		<span v-show="disabled">{{count}}秒</span>
		        	</x-button>
		      	</x-input>
		    </group>
		    <div class="buttom-wrapper">
		    	<div class="buttom" @click="onNavTo()">
		    		<span>提交</span>
		    	</div>	
		    </div>
		</div>	
	</div>
</template>

<script>
//	import { XInput,XButton } from 'vux'
	import Group from 'vux/src/components/group'
	import XInput from 'vux/src/components/x-input'
	import XButton from 'vux/src/components/x-button'
	import vtitle from '../components/title'
	export default {
		data() {
			return {
				phone: '',
				code: '',
				disabled: false,
				count: 60,
				title: '忘记密码'
			}
		},
		
		created() {
			
		},
		
		methods: {
			getCode() {
				if (!this.timer) {
					this.disabled = true
					this.timer = setInterval(() => {
	                  if (this.count > 0 && this.count <= 60) {
	                    this.count--
	                  } else {
	                    this.disabled = false
	                    clearInterval(this.timer)
	                    this.timer = null
	                  }
	                }, 1000)
				}
			},
			
			onNavTo(url) {
				this.$router.push(url)
			}
		},
		
		components: {
			Group,
			XInput,
			XButton,
			vtitle
		}
	}
</script>

<style scoped>
	.buttom-wrapper {
		margin-top: 100px;
	}
	
	.buttom span{
		font-size: 30px;
		color: #FFFFFF;
	}
	
	.buttom {
		margin-bottom: 40px;
	}
</style>