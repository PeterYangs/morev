<template>
	<div class="container">
		<vtitle :title="title"></vtitle>
		<div class="from">
			<group title="买家">
				<x-input placeholder="企业名称" @on-change="change"></x-input>
				<popup-picker title="选择职位" :data="postList" v-model="post" value-text-align="right"></popup-picker>
				<popup-picker title="性别" :data="sexList" v-model="sex" value-text-align="right"></popup-picker>
				<x-input mask="999 9999 9999" placeholder="手机号" v-model="phone" :max="13" is-type="china-mobile"></x-input>
				<x-input title="发送验证码" class="weui-vcode" v-model="code">
					<x-button slot="right" type="primary" mini :disabled="disabled" @click.native="getCode">
						<span v-show="!disabled">发送验证码</span>
						<span v-show="disabled">{{count}}秒</span>
					</x-button>
				</x-input>
				<x-input type="password" v-model="password" placeholder="密码" :min="6" :max="12" @on-change="change"></x-input>
				<x-input type="password" v-model="newPassword" placeholder="确认密码" :equal-with="password"></x-input>
			</group>
			<!-- 协议-->
			<vagreement @toggle="toggleAgreement"></vagreement>
		</div>
		<div class="buttom-wrapper">
			<div class="buttom" :class="{'forbidden':agreement == false}" @click="onRegister">
				<span>立即注册</span>
			</div>
		</div>
	</div>
</template>

<script>
//	import { Group, XInput, PopupPicker, XButton } from 'vux'
	import Group from 'vux/src/components/group'
	import XInput from 'vux/src/components/x-input'
	import XButton from 'vux/src/components/x-button'
	import PopupPicker from 'vux/src/components/popup-picker'
	import vagreement from '../components/agreement.vue'
	import vtitle from '../components/title'
	export default {
		data() {
			return {
				title: '用户注册',
				password: '',
				newPassword: '',
				postList: [
					['首席执行官CEO/总裁/总经理', '首席运营官COO/副总理/副总', '董事会秘书/仲裁助理/总经理助理', '总监', '企业发展规划经理/主管', '分公司/办事处/分支机构经理',
						'合伙人', '其他经营管理类', '销售总监', '销售经理', '销售主管/主任','招商/渠道/分销/拓展经理','招商/渠道/分销/拓展主管','区域销售经理','大客户经理/主管',
						'其他销售管理类','销售代表/客户经理','推销员/业务员','渠道/分销/拓展专员','特许加盟/经销商','其他销售业务类','销售行政经理/主管','销售行政专员/助理',
						'商务经理/主管','商务代表/专员/助理','销售助理','其他销售行政/商务类','市场/营销总监','市场/营销经理/主管','市场/营销专员/助理','市场分析/调研/情报收集/分析',
						'产品/品牌经理/主管','产品/品牌专员','市场推广经理/主管','市场推广专员','促销经理','促销主管/督导','媒介企划经理/主管','媒介企划专员','其他市场/营销/推广类',
						'其他行政/文职/后勤类','行政总监','行政经理/主管/办公室主任','行政专员/经理助理','秘书/高级文员','资料/文档管理','技术文档写作','前台/接待/礼仪','后勤/总务/话务',
						'图书/情报/合同管理','采购总监','采购经理/主管','采购专员/助理','供应商管理','外贸采购','材料/设备采购管理','其他采购类','网站运营总监','网站运营经理/主管',
						'网站编辑/论坛维护/内容监管','网站策划/管理','网站推广/优化/SEO','银行行长/副行长','银行营业部主任','理财顾问/财务规划师','金融资产评估/风险控制',
						'外贸经理/主管','外贸专员/助理','国内贸易','电子商务','物流总监','物流经理/主管','物流专员/助理','供应链总监','供应链经理/主管','供应链主管/专员',
						'生物工程/生物制药','医药代表','化学分析/测试','百货/连锁/零售类店长','面点师','行政主厨/厨师长','餐饮/娱乐/宴会管理者','工厂经理/厂长','生产经理/车间主任',
						'融资经理/融资主管','投资顾问','融资专员','金融分析师','期货/外汇经纪人','金融/经济研究员','预结算/清算','酒店/旅游类','其他'
					]
				],
				post: [],
				phone: '',
				code: '',
				disabled: false,
				count: 60,
				timer: null,
				sex: [],
				sexList: [
					['男', '女']
				],
				agreement: true,
//				agreementShow: false,
			}
		},

		created() {

		},

		methods: {
			change(val) {
				console.log(val)
			},

			getCode() {
				if(!this.timer) {
					this.disabled = true
					this.timer = setInterval(() => {
						if(this.count > 0 && this.count <= 60) {
							this.count--
						} else {
							this.disabled = false
							clearInterval(this.timer)
							this.timer = null
						}
					}, 1000)
				}
			},

			onRegister() {
				if(!this.agreement) {
					return
				} else {
					console.log('1')
				}
			},
			
			toggleAgreement() {
				this.agreement = !this.agreement
			}
		},

		components: {
			Group,
			XInput,
			PopupPicker,
			XButton,
			vagreement,
			vtitle
		}
	}
</script>

<style scoped>
	.container {
		display: flex;
		flex-direction: column;
		height: 100%;
	}
	
	.from {
		flex: 1;
	}
	
	.agreement {
		display: flex;
		align-content: center;
		padding: 10px 0;
	}
	
	.agreement span {
		margin-left: 5px;
		line-height: 36px;
		color: #45abef;
	}
	
	.buttom {
		transition: 0.4s;
	}
	
	.forbidden {
		background: #999999;
	}
	
	.buttom span {
		font-size: 30px;
		color: #FFFFFF;
	}
	
</style>