<template>
	<div class="container">
		<vtitle :title="title"></vtitle>
		<div class="content">
			<h3 class="t">
				<span class="h">收藏</span>	
				<transition-group name="fade">	
					<span class="all" v-show="!show" key="1" @click="onAll()">全选</span>				
					<span class="all" v-show="show" key="2" @click="onOnAll()">不选</span>
				</transition-group>	
			</h3>
			<div class="list" ref="listWrapper">	
				<ul>
					<li v-for="(item,index) in list">
						<div class="goods-wrapper">
							<div class="img">
								<img src="../../assets/img/timg.jpg"/>
							</div>
							<div class="info">
								<h3>蔓越莓切丁</h3>
								<div class="icon-wrapper">
									<div class="item">	
										<span class="icon"></span>
										<span class="number">59</span>
									</div>
									<div class="item">	
										<span class="icon"></span>
										<span class="number">2</span>
									</div>
								</div>
							</div>
							<div class="select">
								<span class="icon" :class="{'pitch':item.type}" @click="onPitch(index)"></span>
							</div>
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
				title: '我的收藏',
				
				show: false,
				
				list: [
					{
						id: '1',
						type: false
					},
					{
						id: '2',
						type: false
					},
					{
						id: '3',
						type: false
					},
					{
						id: '4',
						type: false
					},
					{
						id: '5',
						type: false
					},
					{
						id: '6',
						type: false
					},
					{
						id: '7',
						type: false
					},
					{
						id: '8',
						type: false
					},
					{
						id: '9',
						type: false
					},
					
				]
			}
		},
		
		created() {
			this.$nextTick(() => {
				this.listBscroll = new BScroll (this.$refs.listWrapper,{
					click: true
				})
			})
		},
		
		methods: {
			onAll() {
				this.show = true
				this.list.forEach(item => {
					item.type = true
				})
			},
			
			onOnAll() {
				this.show = false
				this.list.forEach(item => {
					item.type = false
				})
			},
			
			onPitch(index) {
				this.list[index].type = !this.list[index].type
			}
		},
		
		components: {
			vtitle
		}
	}
</script>

<style scoped>
	
	.content .t {
		position: relative;
		display: flex;
		flex-direction: column;
		padding: 20px 25px 20px 35px;
		border-bottom: 1px solid #DEDEDE;
		box-shadow: 0 0 3px #CCCCCC;	
	}
	
	.content .list {
		position: fixed;
		height: 1172px;
		width: 100%;
		overflow: hidden;
	}
	
	.t .h {
		font-size: 30px;
		font-family: "微软雅黑";
		font-weight: 700;
		color: #45BDF5;	
	}
	
	.t .all {
		position: absolute;
		top: calc(50% - 19px);
		right: 25px;
		padding: 8px 10px;
		font-size: 20px;
		line-height: 20px;
		color: #FFFFFF;
		background: #42B983;
		border-radius: 5px;
		white-space: nowrap;	
	}
	
	.fade-enter-active,.fade-leave-active {
		transition: 0.5s;
	}
	
	.fade-enter,.fade-leave-to {
		opacity: 0;
		transform: translateX(-80%);
	}
	
	.content ul li {
		border-bottom: 1px solid rgba(7,17,27,0.1);
	}
	
	.content ul li:last-child {
		border-bottom: none;
	}
	
	.goods-wrapper {
		display: flex;
		padding: 10px 25px 10px 25px;
	}
	
	.goods-wrapper .img {
		width: 130px;
	}
	
	.info {
		flex: 1;
		display: flex;
		flex-direction: column;
		justify-content: center;
		padding-left: 45px;
	}
	
	.info h3 {
		font-size: 35px;
		font-weight: 600;
	}
	
	.info .icon-wrapper {
		display: flex;
	}
	
	.item {
		display: flex;
		align-items: center;
		margin-top: 20px;
		margin-right: 20px;
	}
		
	.item .icon {
		margin-right: 10px;
		width: 45px;
		height: 25px;
		background: #009BE4;
	}
	
	.select {
		display: flex;
		align-items: center;
	}
	
	.select .icon {
		padding: 5px;
		background: url(../../assets/img/rest/select.png) no-repeat;
		background-size: 100%;
		transition: .5s;
	}
	
	.select .pitch {
		background: url(../../assets/img/rest/select01.png) no-repeat;
		background-size: 100%;
		animation: move .5s cubic-bezier(.17,.67,.95,.46); 
	}
	
	@keyframes move{
		from{
			transform: scale(1,1);
		}
		25% {
			transform: scale(1.1,1.1);
		}
		50% {
			transform: scale(1,1);
		}
		75% {
			transform: scale(1.05,1.05);
		}
		to{
			transform: scale(1,1);
		}
	}
</style>