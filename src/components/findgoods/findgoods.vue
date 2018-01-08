<template>
	<div class="container">
		<vtitle :title="title"></vtitle>
		<div class="search-wrapper">
			<span class="icon search"></span>
		</div>
		<div class="goods">
			<div class="menu-wrapper" ref="menuWrapper">
				<ul>
					<li class="menu-item" v-for="(item,index) in odata" ref="menuList" :class="{'current':currentIndex===index}" @click="selectMenu(index)">
						<span>{{item.menu}}</span>
					</li>
				</ul>
			</div>
			<div class="foods-wrapper" ref="foodsWrapper">
				<ul>
					<li class="foods-list" v-for="(item,index) in odata" ref="foodList">
						<div class="img">
							<img src="../../assets/img/382a21c3a133135500d3bdfeef479dd5.jpg" />
						</div>
						<div>
							<ul class="content">
								<li class="foods-item" v-for="(oitem,oindex) in item.foodlist" @click="noNavTo('/goodsDetail')">
									<div class="icon">
										<img src="../../assets/img/timg.jpg" />
									</div>
									<p>{{oitem.desc}}</p>
								</li>
							</ul>
						</div>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
	import vtitle from '../components/title'
	import BScroll from 'better-scroll'
	export default {
		data() {
			return {
				title: '分类',
				scrollY: 0,
				listHeight: [],
				odata: [{
						menu: '休闲零食',
						src: '../../assets/img/382a21c3a133135500d3bdfeef479dd5.jpg',
						foodlist: [{
								icon: '../../assets/img/timg.jpg',
								desc: '果干'
							},
							{
								icon: '../../assets/img/timg.jpg',
								desc: '美加华'
							},
							{
								icon: '../../assets/img/timg.jpg',
								desc: '果干'
							},
							{
								icon: '../../assets/img/timg.jpg',
								desc: '果干'
							},
						]
					},
					{
						menu: '果汁 咖啡 茶 酒水',
						foodlist: [{
								icon: '../../assets/img/timg.jpg',
								desc: '刘伟望'
							},
							{
								icon: '../../assets/img/timg.jpg',
								desc: '果干'
							},
							{
								icon: '../../assets/img/timg.jpg',
								desc: '果干'
							},
							{
								icon: '../../assets/img/timg.jpg',
								desc: '果干'
							},
						]

					},
					{
						menu: '水果蔬菜',
						foodlist: [{
								icon: '../../assets/img/timg.jpg',
								desc: '丘博文'
							},
							{
								icon: '../../assets/img/timg.jpg',
								desc: '果干'
							},
							{
								icon: '../../assets/img/timg.jpg',
								desc: '果干'
							},
							{
								icon: '../../assets/img/timg.jpg',
								desc: '果干'
							},
						]
					},
					{
						menu: '乳制品及蛋类',
						foodlist: [{
								icon: '../../assets/img/timg.jpg',
								desc: '丘博文'
							},
							{
								icon: '../../assets/img/timg.jpg',
								desc: '果干'
							},
							{
								icon: '../../assets/img/timg.jpg',
								desc: '果干'
							},
							{
								icon: '../../assets/img/timg.jpg',
								desc: '果干'
							},
						]
					},
					{
						menu: '肉类及制品',
						foodlist: [{
								icon: '../../assets/img/timg.jpg',
								desc: '丘博文'
							},
							{
								icon: '../../assets/img/timg.jpg',
								desc: '果干'
							},
							{
								icon: '../../assets/img/timg.jpg',
								desc: '果干'
							},
							{
								icon: '../../assets/img/timg.jpg',
								desc: '果干'
							},
						]
					},
					{
						menu: '其他食品',
						foodlist: [{
								icon: '../../assets/img/timg.jpg',
								desc: '丘博文'
							},
							{
								icon: '../../assets/img/timg.jpg',
								desc: '果干'
							},
							{
								icon: '../../assets/img/timg.jpg',
								desc: '果干'
							},
							{
								icon: '../../assets/img/timg.jpg',
								desc: '果干'
							},
						]
					},
					{
						menu: '米面粮油',
						foodlist: [{
								icon: '../../assets/img/timg.jpg',
								desc: '丘博文'
							},
							{
								icon: '../../assets/img/timg.jpg',
								desc: '果干'
							},
							{
								icon: '../../assets/img/timg.jpg',
								desc: '果干'
							},
							{
								icon: '../../assets/img/timg.jpg',
								desc: '果干'
							},
						]
					},
					{
						menu: '海鲜水产',
						foodlist: [{
								icon: '../../assets/img/timg.jpg',
								desc: '丘博文'
							},
							{
								icon: '../../assets/img/timg.jpg',
								desc: '果干'
							},
							{
								icon: '../../assets/img/timg.jpg',
								desc: '果干'
							},
							{
								icon: '../../assets/img/timg.jpg',
								desc: '果干'
							},
						]
					},
					{
						menu: '美加华',
						foodlist: [{
								icon: '../../assets/img/timg.jpg',
								desc: '丘博文'
							},
							{
								icon: '../../assets/img/timg.jpg',
								desc: '果干'
							},
							{
								icon: '../../assets/img/timg.jpg',
								desc: '果干'
							},
							{
								icon: '../../assets/img/timg.jpg',
								desc: '果干'
							},
						]
					},
					{
						menu: '喷军服',
						foodlist: [{
								icon: '../../assets/img/timg.jpg',
								desc: '丘博文'
							},
							{
								icon: '../../assets/img/timg.jpg',
								desc: '果干'
							},
							{
								icon: '../../assets/img/timg.jpg',
								desc: '果干'
							},
							{
								icon: '../../assets/img/timg.jpg',
								desc: '果干'
							},
						]
					},
					{
						menu: '顾嘉唯',
						foodlist: [{
								icon: '../../assets/img/timg.jpg',
								desc: '丘博文'
							},
							{
								icon: '../../assets/img/timg.jpg',
								desc: '果干'
							},
							{
								icon: '../../assets/img/timg.jpg',
								desc: '果干'
							},
							{
								icon: '../../assets/img/timg.jpg',
								desc: '果干'
							},
						]
					}
				],

			}
		},

		computed: {
			currentIndex() {
				for(let i = 0; i < this.listHeight.length; i++) {
					let height1 = this.listHeight[i];
					let height2 = this.listHeight[i + 1];
					if(!height2 || (this.scrollY >= height1 && this.scrollY < height2)) {
						this.followScroll(i);
						return i;
					}
				}
				return 0;
			},
		},

		created() {
			this.$nextTick(() => {
				this.$vux.loading.show({
			        text: 'Loading...'
			       
			    })
				setTimeout(() => {
					this.$vux.loading.hide()
				},1000)
				this.initScroll()
				this.calculateHeight()
			})
		},
		
		mounted() {
			
		},

		methods: {
			selectMenu(index) {
				let foodList = this.$refs.foodList
				let el = foodList[index]
				this.foodsScroll.scrollToElement(el, 500)
			},

			initScroll() {
				this.meunScroll = new BScroll(this.$refs.menuWrapper, {
					click: true
				});
				this.foodsScroll = new BScroll(this.$refs.foodsWrapper, {
					click: true,
					probeType: 3
				});
				this.foodsScroll.on('scroll', (pos) => {
					// 判断滑动方向，避免下拉时分类高亮错误（如第一分类商品数量为1时，下拉使得第二分类高亮）
					if(pos.y <= 0) {
						this.scrollY = Math.abs(Math.round(pos.y));
					}
				});
			},

			calculateHeight() {
				let foodList = this.$refs.foodList;
				let height = 0;
				this.listHeight.push(height);
				for(let i = 0; i < foodList.length; i++) {
					let item = foodList[i];
					height += item.clientHeight;
					this.listHeight.push(height);
				}
			},

			followScroll(index) {
				let menuList = this.$refs.menuList;
				let el = menuList[index];
				this.meunScroll.scrollToElement(el, 500, 0, -100);
			},
			
			noNavTo(url) {
				this.$router.push(url)
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
	
	.search-wrapper {
		background: #00579E;
	}
	
	.goods {
		flex: 1;
		display: flex;
		position: fixed;
		top: 122px;
		height: 1118px;
		overflow: hidden;
	}
	
	.menu-wrapper {
		flex: 0 0 180px;
		background: #f3f5f7;
		text-align: center;
	}
	
	.foods-list .content {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
		border-bottom: 1px solid rgba(7,17,27,0.1);
	}
	
	.menu-item {
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 0 40px;
		height: 112px;
	}
	
	.menu-item:after {
		content: " ";
		display: block;
		position: absolute;
		left: 50%;
		bottom: 5px;
		width: 60%;
		border-top: 1px solid rgba(7, 17, 27, .1);
		transform: translateX(-50%);
	}
	
	.menu-item span {
		flex: 1;
		color: #333;
		font-size: 24px;
		transition: .5s;
	}
	
	.foods-wrapper {
		flex: 1;
		padding: 0 10px;
	}
	
	.foods-list {
		padding: 0 15px 15px;
	}
	
	.img {
		margin: 0 auto;
		margin-bottom: 20px;
		width: 460px;
	}
	
	.img img {
		border-radius: 10px;
	}
	
	.foods-item .icon {
		width: 175px;
		height: 175px;
	}
	
	.foods-item p {
		margin: 10px 0;
		text-align: center;
		font-size: 18px;
		color: rgb(7,17,27);
	}
	
	.current {
		background: #FFFFFF;
	}
	
	.current span {
		color: rgb(0,120,660);
		transform: translateX(10px);
	}
	
	.current:after {
		content: none;
	}
</style>