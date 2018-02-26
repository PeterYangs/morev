<template>
	<div class="container">
		<vtitle :title="title"></vtitle>
		<div class="main" ref="descList">
			<div>
				<div class="banner">
					<img src="../../assets/img/timg.jpg" />
				</div>
				<div class="desc-wrapper">
					<ul class="desc">
						<li>
							<h3 class="t">Confiland宫翡岚 黑巧克力</h3>
							<p>
								宫翡岚旗下的黑巧克力有从可可固体物含量53% 到可可固体物含量100%。黑巧克力主要成分就是可可粉、可可脂和糖，还有一点点卵磷脂。
								黑巧克力也是可可含量要求最高的巧克力，其中可可含量在30%以上。可可含量在50%以下，意味着糖分过高，巧克力会又甜又腻，可可含量
								超过85%的黑巧克力是喜欢品尝“原味巧克力”人群的最爱。通常糖类较低或不含糖，可可的香味没有被其他味道所掩盖，在口中融化时可可
								的芳香会在齿间四溢许久。甚至有些人认为这才是在吃真正的巧克力。
							</p>
						</li>
						<li>
							<h3 class="t">商品信息</h3>
							<div class="chart">
								<!--<p>图片信息供参考，以产品实物为准。</p>-->
								<table class="table">
									<tbody>
									<tr>
										<td>供应商</td>
										<td>United Growth In`tl Inc</td>
									</tr>
									<tr>
										<td>规格</td>
										<td>ex 40-50;50-60;60-70</td>
									</tr>
									<tr>
										<td>箱规</td>
										<td>10KG/箱</td>
									</tr>
									<tr>
										<td>产地</td>
										<td>智利</td>
									</tr>
									<tr>
										<td>包装</td>
										<td>纸箱</td>
									</tr>
									<tr>
										<td>保质期</td>
										<td>12个月</td>
									</tr>
									<tr>
										<td>存储方式</td>
										<td>置于阴凉干燥处</td>
									</tr>
									</tbody>
								</table>
							</div>
						</li>
						<li>
							<h3 class="t">供应商描述</h3>
							<p>
								上海慕味国际贸易有限公司武汉分公司，开创MORE-V进口食品ABC（American Born Chinese Goods)模式。
							</p>
						</li>
						<li class="way">
							<h3 class="t">采购方式</h3>
							<ul>
								<li><span class="icon"></span>中国现货<span class="text">款到发货,7天内到货,需一次性提完</span></li>
								<li><span class="icon"></span>长单直采<span class="text">需付定金30%~50%,每个月约定时间提货</span></li>
								<li><span class="icon"></span>预售优惠<span class="text">需付定金30%,采购时间为3个月，需一次性提完</span></li>
							</ul>
						</li>
					</ul>
					<div class="recommend-wrapper">
						<h3 class="t">为您推荐</h3>
						<ul class="product">
							<li class="item text-wrapper">
								<img src="../../assets/img/timg.jpg" />
								<p class="text">mijiahua</p>
							</li>
							<li class="item text-wrapper">
								<img src="../../assets/img/timg.jpg" />
								<p class="text">mijiahua</p>
							</li>
							<li class="item text-wrapper">
								<img src="../../assets/img/timg.jpg" />
								<p class="text">mijiahua</p>
							</li>
							<li class="item text-wrapper">
								<img src="../../assets/img/timg.jpg" />
								<p class="text">mijiahua</p>
							</li>
						</ul>
						<p class="more">没有更多了，试试搜索看看吧~</p>
					</div>
				</div>
			</div>

			<transition name="fold">
				<div class="enquiry" v-show="enquiry">
					<div class="header">
						<h3>产品信息</h3>
						<span class="icon close" @click="enquiry = false"></span>
					</div>

					<div class="info">
						<div class="img">
							<img src="../../assets/img/timg.jpg" />
						</div>
						<div class="text">
							<h3>优鲜沛 蔓越莓 果干整颗</h3>
							<p>规格：11.34kg/箱</p>
						</div>
					</div>
					<div class="numb">
						<h3>数量<span>(箱)</span></h3>
						<group>
							<x-number align="left" width="70px" fillable :min="0" :step="data.step" v-model="data.value"></x-number>
						</group>
					</div>
					<div class="buttom" @click="onNavTo('/dialogue')">
						<span>确认</span>
					</div>
				</div>
			</transition>
			<transition name="fade">
				<div class="mask" v-show="enquiry" @click="enquiry = false"></div>
			</transition>
		</div>

		<footer class="options">
			<div>
				<span>
					<span class="icon attention"></span>
					<p>关注</p>
				</span>
				<span>
					<span class="icon collect"></span>
					<p>收藏</p>
				</span>
			</div>
			<div class="join">
				<span>加入购物车</span>
				<span @click="enquiry = true">立即询价</span>
			</div>
		</footer>
	</div>
</template>

<script>
	import vtitle from '../components/title'
	import BSrcoll from 'better-scroll'
    import { Spinner,XNumber,Group } from 'vux'

	export default {
		data() {
			return {
				title: '产品详情',
				enquiry: false,
				data:{
                    step: 10,
					min: 100,
                    value: 10,
				},
			}
		},

		created() {
			this.$nextTick(() => {
				this.descSrcoll = new BSrcoll(this.$refs.descList, {
					click: true,
				})
			})
		},

		methods: {
			onNavTo(url) {
				this.$router.push(url)
			}
		},

		computed: {

		},

		components: {
			vtitle,
            Spinner,
            XNumber,
            Group
		}
	}
</script>

<style scoped>
	.container {
		display: flex;
		flex-direction: column;
	}

	.main {
		flex: 1;
		overflow: hidden;
	}

	.desc-wrapper {

	}

	.desc {
		padding: 20px 25px;
	}

	.desc-wrapper > ul > li {
		padding-bottom: 10px;
		border-bottom: 1px solid rgba(7,17,27,0.1);
	}

	.t {
		margin-top: 10px;
		margin-bottom: 20px;
		font-size: 30px;
		font-weight: 700;
		color: #333333;
	}

	.desc-wrapper ul li p {
		font-size: 24px;
		color: #999;
		text-align: justify;
	}

	.desc-wrapper>ul>li:first-child p {
		margin-left: 20px;
		line-height: 30px;
	}

	.table {
		width: 100%;
	}

	.table tr > td {
		text-align: center;
		vertical-align: middle;
		height: 50px;
		font-size: 26px;
		/*border: 1px solid #ddd;*/
		border-width: 1px 0;
	}

	.table tr > td:first-child {
		width: 30%;
		color: #666;
		background: #F3F5F7;
	}

	.table tr > td:last-child {
		text-align: left;
		text-indent: 2em;
	}

	.way ul li  {
		display: inline-flex;
		justify-content: center;
		align-items: center;
		font-size: 30px;
		line-height: 40px;
		color: #333;
	}

	.way ul li .text {
		margin-left: 10px;
		font-size: 24px;
		color: #999;
	}

	.product {
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		padding: 0 25px;
	}

	.product .item {
		margin-bottom: 10px;
	}

	.options {
		display: flex;
		justify-content: space-between;
		padding: 0 50px;
		font-size: 24px;
		color: #0965b1;
		border-top: 1px solid #F3f5f7;
	}

	.options>div {
		display: inline-flex;
	}

	.options>div>span {
		text-align: center;
	}

	.options>div>span>p {
		padding: 0 30px;
	}

	.options .icon {
		margin-top: 10px;
		width: 50px;
		height: 50px;
	}

	.mask {
		position: fixed;
		top: 0;
		right: 0;
		width: 100%;
		height: 100%;
		background: rgba(7, 17, 27, 0.6);
	}

	.fade-enter,
	.fade-leave-to {
		opacity: 0;
	}

	.fade-enter-active,
	.fade-leave-active {
		transition: 0.4s;
	}

	.enquiry {
		position: fixed;
		bottom: 0;
		right: 0;
		width: 100%;
		background: #FFFFFF;
		z-index: 100;
	}

	.enquiry .header {
		display: flex;
		justify-content: space-between;
		padding: 20px 20px 0 20px;
	}

	.enquiry h3 {
		font-size: 34px;
		font-weight: 700;
	}

	.info {
		display: flex;
		padding: 20px 0 20px 30px;
		border-bottom: 1px solid rgba(7,17,27,.1);
	}

	.info .img {
		width: 180px;
		height: 180px;
	}

	.info .text {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		padding: 40px 0 40px 20px;
	}

	.text h3 {
		font-size: 32px;
		color: rgba(7,17,27,0.7);
	}

	.text p {
		font-size: 28px;
		color: #999;
	}

	.fold-enter-active,
	.fold-leave-active {
		transition: 0.4s;
	}

	.fold-enter,
	.fold-leave-to {
		transform: translateY(100%);
	}

	.numb h3 {
		padding: 20px 0 0 30px;
	}

	.numb h3 span {
		margin-left: 10px;
		color: #999;
	}

	.buttom {
		height: 80px;
		line-height: 80px;
		background: #009BE4;
		text-align: center;
	}

	.buttom span {
		font-size: 35px;
		color: #FFFFFF;
	}

	.text-wrapper {
		position: relative;
	}

	.text-wrapper img {
		width: 340px;
		height: 320px;
	}

	.text-wrapper .text {
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
		font-size: 30px;
		line-height: 50px;
		color: #FFFFFF;
		text-align: center;
		background: rgba(7,17,27,0.4);
		text-overflow:ellipsis;
		white-space: nowrap;
		overflow: hidden;
	}

	.more {
		text-align: center;
		font-size: 24px;
		line-height: 50px;
		background: #f3f5f7;
	}

	.recommend-wrapper .t {
		padding-left: 20px;
	}

	.join {
		margin: 20px 0;
		width: 300px;
		border: 5px solid #0965b1;
		border-radius: 5px;
	}

	.join span {
		flex: 1;
		line-height: 54px;
	}

	.join span:last-child {
		color: #FFFFFF;
		background: #0965b1;
	}

</style>