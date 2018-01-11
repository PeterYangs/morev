<template>
	<div class="container">
		<vtitle :title="title"></vtitle>
		<div class="content">
			<div class="banner-wrapper">
				<div class="img">
					<img src="../../assets/img/timg.jpg" />
				</div>
				<div class="desc">
					<strong>品牌故事</strong>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget.
					</p>
					<span :class="{'add':type == true}" @click="addAttention()">关注</span>
				</div>
			</div>
			<div class="list-wrapper" ref="listWrapper">
				<ul>
					<li v-for="(item,index) in list" @click="noNavTo('/productdateils')">
						<div class="list-item">
							<div class="logo">
								<img src="../../assets/img/timg.jpg"/>
							</div>
							<div class="text">
								<span>Ocean Spray优鲜沛   蔓越莓</span>
								<span>原味蔓越莓切片   20件1起订</span>
								<div class="icon-wrapper">
									<span>vip</span>
									<span>取样</span>
									<span>购物车</span>
									<span>立即询价</span>
								</div>
							</div>
						</div>	
					</li>
				</ul>
			</div>
				<!--<transition name="fade">
					<div class="deteil-wrapper" v-show="dateil">
						<div class="title">
							<span>蔓越莓切丁</span>
							<span class="icon backtwo" @click="dateil = false"></span>
						</div>
						<div class="" @click="dateil = false">
						
							sdfsdf
						</div>	
					</div>
				</transition>-->
		</div>
	</div>
</template>

<script>
	import vtitle from '../components/title'
	import BSrcoll from 'better-scroll'
	export default {
		data() {
			return {
				title: '优鲜沛 Ocean Spray',
				
				list: [
					{
						name: ''
					},
					{
						name: ''
					},
					{
						name: ''
					},
					{
						name: ''
					},
					{
						name: ''
					},
					{
						name: ''
					},
					{
						name: ''
					},
					{
						name: ''
					},
					{
						name: ''
					},
					{
						name: ''
					},
				],
				
				dateil: false,

                type: false
			}
		},

		created() {
			this.$nextTick(() => {
				this.listSrcoll = new BSrcoll (this.$refs.listWrapper,{
					click: true
				})
			})
		},

		methods: {
			noNavTo(url) {
				this.$router.push(url)
			},

            addAttention(name) {
			    this.type = !this.type
				if (this.type) {
                    this.$vux.toast.show({
                        text: "<span class='icon succeed'></span><span class='toast-span'>关注成功</span>",
                        type: 'text',
                        position: 'top',
                        isShowMask: true
                    })
				} else {
                    this.$vux.toast.show({
                        text: "<span class='icon succeed'></span><span class='toast-span'>以取消关注</span>",
                        type: 'text',
                        position: 'top',
                        isShowMask: true
                    })
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
		overflow: hidden;
	}
	
	.content {
		flex: 1;
		display: flex;
		flex-direction: column;
		overflow: hidden;
	}
	
	.banner-wrapper {
		display: flex;
		align-content: center;
		padding: 20px 10px;
		box-shadow: 0 0 3px #CCCCCC;
		z-index: 10;
	}
	
	.img {
		flex: 0 0 300px;
		display: flex;
		justify-content: center;
		align-items: center;
		width: 300px;
	}
	
	.img img {	
		width: 300px;
		height: 300px;
		border-radius: 8px;
	}
	
	.logo img {
		border-radius: 10px;
	}
	
	strong {
		margin-bottom: 10px;
		font-size: 30px;
	}
	
	.desc {
		flex: 1;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 0 20px;
	}
	
	.desc p {
		font-size: 20px;
		text-align: justify;
	}
	
	.desc span {
		display: block;
		padding: 5px 20px;
		margin-top: 10px;
		color: #FFFFFF;
		background: #1AAD19;
		border-radius: 5px;
		transition: .5s;
	}

	.desc .add {
		background: #009BE4;
	}

	.list-wrapper {
		flex: 1;
		overflow: hidden;
		
	} 
	
	.list-wrapper ul {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
	}
	
	.list-wrapper ul li {
		flex: 0 0 45%;
	}

	.desc .add {

	}

	.text {
		display: flex;
		flex-direction: column;
		padding: 20px 10px 5px;
	}
	
	.text span:nth-child(1) {
		font-size: 25px;
		font-weight: 700;
	}
	
	.text>span:nth-child(2) {
		font-size: 22px;
		color: #ccc;
	}
	
	.deteil-wrapper {
		position: fixed;
		width: 100%;
		height: 100%;
		top: 0;
		right: 0;
		background: #FFFFFF;
	}
	
	.fade-enter-active, .fade-leave-active {
		transition: .5s;
	}
	
	.fade-enter, .fade-leave-to { 
	  transform: translateX(-100%);
	}
	
	.title {
		position: relative;
	}
	
	.title .icon {
		position: absolute;
		left: 10px;
		top: 50%;
		transform: translateY(-50%);
	} 
</style>