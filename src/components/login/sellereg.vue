<template>
	<div class="container">
		<vtitle :title="title"></vtitle>
		<div class="from">
			<group title="卖家">
				<x-input placeholder="企业名称" @on-change="change"></x-input>
				<x-input placeholder="统一社会代码"></x-input>
			</group>
			<div class="checker">
				<h1>主营商品</h1>
				<checker v-model="mainProducts" default-item-class="demo1-item" selected-item-class="demo1-item-selected" type="checkbox">
					<checker-item :value="item" v-for="(item, index) in mainProductsList" :key="index">{{item.name}}</checker-item>
				</checker>
				<h1>采购需求</h1>
				<checker v-model="buyingLeads" default-item-class="demo1-item" selected-item-class="demo1-item-selected" type="checkbox">
					<checker-item :value="item" v-for="(item, index) in buyingLeadsList" :key="index">{{item.name}}</checker-item>
				</checker>
			</div>
			<group>
				<x-input placeholder="主要客户"></x-input>
				<popup-picker title="公司性质" :data="propertyList" v-model="property" value-text-align="right"></popup-picker>
				<popup-picker title="公司规模" :data="scaleList" v-model="scale" value-text-align="right"></popup-picker>
				<popup-picker title="营业额" :data="turnoverList" v-model="turnover" value-text-align="right"></popup-picker>
				<popup-picker title="选择银行" :data="bankList" v-model="bank" value-text-align="right"></popup-picker>
				<x-input placeholder="银行支行名称"></x-input>
				<x-input placeholder="银行账户"></x-input>
			</group>
			<div class="checker">
				<h1>销售渠道</h1>
				<checker v-model="distributionChannel " default-item-class="demo1-item" selected-item-class="demo1-item-selected" type="checkbox">
					<checker-item :value="item" v-for="(item, index) in distributionChannelList" :key="index">{{item.name}}</checker-item>
				</checker>
				<h1>货品交收</h1>
				<checker v-model="delivery" default-item-class="demo1-item" selected-item-class="demo1-item-selected" type="checkbox">
					<checker-item :value="item" v-for="(item, index) in deliveryList" :key="index">{{item.name}}</checker-item>
				</checker>
			</div>
		</div>
		<div class="buttom-wrapper">
			<div class="buttom" @click="onNavTo('/sellerend')">
				<span>下一步</span>
			</div>
		</div>
	</div>
</template>

<script>
//	import { Group, XInput, PopupPicker, XButton, Checker, CheckerItem } from 'vux'
	import Group from 'vux/src/components/group'
	import XInput from 'vux/src/components/x-input'
	import XButton from 'vux/src/components/x-button'
	import PopupPicker from 'vux/src/components/popup-picker'
	import Checker from 'vux/src/components/checker/checker'
	import CheckerItem from 'vux/src/components/checker/checker-item'
	import vtitle from '../components/title'
	export default {
		data() {
			return {
				title: '商家',
				mainProducts: null,
				buyingLeads: null,
				mainProductsList: [{
					key: '1',
					value: 'A',
					name: '休闲零食',
				}, {
					key: '2',
					value: 'B',
					name: '果汁、咖啡、茶等等',
				}, {
					key: '3',
					value: 'C',
					name: '水果蔬菜'
				}, {
					key: '4',
					value: 'D',
					name: '海鲜水产'
				}, {
					key: '5',
					value: 'E',
					name: '米、面、粮、油'
				}, {
					key: '6',
					value: 'F',
					name: '米、面、粮、油'
				}, {
					key: '6',
					value: 'G',
					name: '肉类及制品'
				}],
				
				buyingLeadsList: [{
					key: '1',
					value: 'A',
					name: '休闲零食'
				},{
					key: '2',
					value: 'B',
					name: '果汁、咖啡、茶等等'
				},{
					key: '3',
					value: 'C',
					name: '水果蔬菜'
				},{
					key: '4',
					value: 'D',
					name: '海鲜水产'
				},{
					key: '5',
					value: 'E',
					name: '米、面、粮、油'
				},{
					key: '6',
					value: 'F',
					name: '米、面、粮、油'
				},{
					key: '7',
					value: 'G',
					name: '其他食品'
				}],
				
				propertyList: [['国有企业','国外供应商','外资企业','服务商','港澳台企业','合资企业','上市企业','民营企业']],
				property: [],
				
				scaleList: [['少于50人','50-150人','150-500人','500-1000人','1000-5000人','5000-10000人','10000人以上']],
				scale: [],
				
				turnoverList: [['500万以下','500万-1000万','1000万-5000万','5000万-1亿','1亿以上']],
				turnover: [],
				
				bankList: [['中国农业银行','中国工商银行','招商银行','中国银行','中国建设银行','交通银行','广发银行','光大银行','中信银行','邮政储蓄银行','民生银行',
				'平安银行','浦发银行','兴业银行','华夏银行']],
				bank: [],
				
				distributionChannel: null,
				distributionChannelList: [{
					key: '1',
					value: 'A',
					name: '食品工厂 ',
				},{
					key: '2',
					value: 'B',
					name: '连锁客户 ',
				},{
					key: '3',
					value: 'C',
					name: '渠道经销 ',
				},{
					key: '4',
					value: 'D',
					name: '电商平台',
				},{
					key: '5',
					value: 'E',
					name: 'KA商超',
				},{
					key: '6',
					value: 'F',
					name: '其他',
				}],
				
				delivery: null,
				deliveryList: [{
					key: '1',
					value: 'A',
					name: '总货收货 '
				},{
					key: '2',
					value: 'B',
					name: '到货自提 '
				},{
					key: '3',
					value: 'C',
					name: '工厂自提'
				}]
			}
		},

		created() {

		},

		methods: {
			change(val) {
				console.log(val)
			},
			
			onNavTo(url) {
				this.$router.push(url)
			}
		},

		components: {
			Group,
			XInput,
			PopupPicker,
			XButton,
			Checker,
			CheckerItem,
			vtitle
		}
	}
</script>

<style scoped>
	.checker {
		padding: 9px 14px;
	}
	
	.checker h1 {
		color: #999999;
	}
	
	.demo1-item {
		padding: 5px 15px;
		margin: 5px;
		width: 43.8%;
		height: 40px;
		line-height: 40px;
		text-align: center;
		border: 1px solid #0199e0;
		border-radius: 10px;
	}
	
	.demo1-item-selected {
		color: #FFFFFF;
		background: #1aad19;
		border: 1px solid #1aad19;
	}
	
	.buttom span{
		font-size: 30px;
		color: #FFFFFF;
	}
</style>