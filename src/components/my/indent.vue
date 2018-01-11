<template>
	<div class="container">
	 	<vtitle :title="title"></vtitle>
	 	<div class="tab">
	 		<div class="tab-item" v-for="(item,index) in tab" @click="onTabIndex(index)">
	 			<p :class="{'movep':tabIndex == index}">{{item}}</p>
	 		</div>
	 		<div class="slide" :class="classMap[tabIndex]"></div>
	 	</div>
	 	<!--内容-->
	 	<div class="main" ref="listWrapper">
	 		<div class="all">
	 			<ul class="list">
					<li v-for="(item,index) in array">
						<div class="t">
							<span>订单号: <span>20180109115949689797</span></span>
							<span class="delay" v-if="item.type == 1">待付款</span>
							<span class="ok" v-else-if="item.type == 2">已确认</span>
							<span class="delay" v-else>已取消</span>
						</div>
						<ul class="item">
							<li @click="onNavTo('/goodsDetail')">
								<div class="logo">
									<img src="../../assets/img/timg.jpg"/>
								</div>
								<div class="text">
									<h2>蔓越莓切丁</h2>
									<div class="desc">
										sdfdsf
									</div>
								</div>
							</li>
						</ul>
						<div class="bottom">
							<div class="info">
								<span>共<span class="sum">1</span>件商品</span>
								<span>总价<span class="sum">144</span>元</span>
							</div>
							<div>
								<span class="block" v-if="item.type !== 3 " @click="onNavTo('/lineItem/',item.type)">查看订单</span>
								<span class="block" v-if="item.type == 1" @click="onCancel(index)">取消订单</span>
							</div>
						</div>
					</li>
				</ul>
	 		</div>
	 		<!--<div class="sample" v-show="tabIndex === 1">
	 			
	 		</div>
	 		<div class="delay-one" v-show="tabIndex === 2">
	 			
	 		</div>
	 		<div class="discuss" v-show="tabIndex === 3">
	 			
	 		</div>-->
	 	</div>
	</div>
</template>

<script>
	import vtitle from '../components/title'
   import BSrcoll from 'better-scroll'
   import Vue from 'vue'
	export default {
		data() {
			return {
				title: '我的订单',
				tab: ['全部','样品单','待采购','待评论'],
				tabIndex: null,
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
				array: []
			}
		},
		
		created() {
			this.tabIndex = this.$route.params.tab
			this.classMap = ['','movea','moveb','movec']
			this.getData()
			this.$nextTick(() => {
			    this.listScroll = new BSrcoll (this.$refs.listWrapper,{
			        click: true,
				})
			})

		},
		
		methods: {
			getData() {
				this.array = []
				if (this.tabIndex == 0) {
					this.array = this.list
				}
				if (this.tabIndex == 1) {
					this.list.forEach(item => {
						if (item.type == 2) {
							this.array.push(item)
						}
					})	
				}
				if (this.tabIndex == 2) {
					this.list.forEach(item => {
						if (item.type == 1) {
							this.array.push(item)
						}
					})	
				}
				if (this.tabIndex == 3) {
					
				}
			},
			
			onTabIndex(index) {
				this.tabIndex = index
				this.getData()
			},

         onCancel(index) {
         	console.log(index)
             let that = this
             this.$vux.confirm.show({
                 title: '确认?',
                 content: '确认取消订单吗?',
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
                         Vue.set(that.array,index,{type:3})
                         that.$vux.toast.show({
                             text: "<span class='icon succeed'></span><span class='toast-span'>取消成功</span>",
                             type: 'text',
                             position: 'top',
                             isShowMask: true
                         })
                     },1000) 
                 }
             })   
			},

         onNavTo(url,type) {
         	if (!type) {
         		this.$router.push(url)
         	} else {
				   this.$router.push(url + type)
         	}
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

	.main {
		flex: 1;
		overflow: hidden;
	}

	.tab {
		flex: 0 0 0.8rem;
		position: relative;
		display: flex;
		height: 60px;
		line-height: 60px;
		border-bottom: 1px solid #DEDEDE;
		box-shadow: 0 0 3px #CCCCCC;
	}
	
	.tab .tab-item {
		flex: 1;
	}
	
	.tab-item p {
		font-size: 20px;
		text-align: center;
		transition: .5s;
	}
	
	.slide {
		transform: translateX(67px);
	}
	
	.movep {
		color: #009BE4;
		transform: translateY(-10px);
	}
	
	.movea {
		transform: translateX(254px);
	}
	
	.moveb {
		transform: translateX(444px);
	}
	
	.movec {
		transform: translateX(632px);
	}

	.main .t {
		display: flex;
		justify-content: space-between;
		padding: 10px 20px;
	}

	.t span {
		font-size: 20px;
	}

	.t>span>span {
		color: #666;
	}

	.delay {
		color: #ff0000;
	}

	.logo {
		width: 192px;
		height: 192px;
	}

	.item {
		padding: 20px;
		background: rgba(7,17,27,0.1);
	}

	.item li {
		display: flex;
	}

	.item li .text {
		flex: 1;
		margin-left: 20px;
	}

	.text h2{
		font-size: 28px;
		color: rgb(7,17,27);
	}

	.text .desc {
		font-size: 20px;
		color: #333333;
	}

	.bottom {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 20px;
		border-bottom: 1px solid rgba(7,17,27,0.2);
	}
	
	.bottom .info {
		height: 38px;
		line-height: 38px;
	}
	
	.ok {
		color: #009BE4;
	}
	
	.sum {
		color: #ff0000;
	}

	.block {
		display: inline-block;
		padding: 5px 10px;
		color: #FFFFFF;
		background: darksalmon;
		border-radius: 5px;
	}
</style>