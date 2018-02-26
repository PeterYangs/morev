<template>
	<div class="container">
		<vtitle :title="title"></vtitle>
		<div class="all-wrapper">
			<transition-group name="fade">	
				<span class="all" v-show="!show" key="1" @click="onAll()">全选</span>				
				<span class="all" v-show="show" key="2" @click="onOnAll()">不选</span>
			</transition-group>	
		</div>
		<div class="list-wrapper" ref="listWrapper">
			<ul>
				<li class="item" v-for="(item,index) in list">
					<div class="left">
						<div class="logo">
							<img src="../../assets/img/timg.jpg"/>
						</div>
						<div class="desc">
							<span class="t">优鲜沛 鲜红蔓越莓切片</span>
							<span>1/2切片</span>
						</div>
					</div>
					<div class="right">
						<span class="icon" :class="{'pitch':item.type}" @click="onPitch(index)"></span>
					</div>
				</li>
			</ul>
		</div>
        <div class="submit">
            立即询价
        </div>
	</div>
</template>

<script>
	import vtitle from '../components/title'
	import BScroll from 'better-scroll'
	export default {
		data() {
			return {
				title:'购物车',
				
				show: false,
				
				list: [
					{
						name: '',
						type: false
					},
					{
						name: '',
						type: false
					},
					{
						name: '',
						type: false
					},
					{
						name: '',
						type: false
					},
					{
						name: '',
						type: false
					},
					{
						name: '',
						type: false
					},
					{
						name: '',
						type: false
					},
					{
						name: '',
						type: false
					},
					{
						name: '',
						type: false
					},
				]
			}
		},
		
		created() {
			this.$nextTick(() => {
				this.$vux.loading.show({
			        text: 'Loading...'
			       
			    })
				setTimeout(() => {
					this.$vux.loading.hide()
				},1000)
				this.listBscroll = new BScroll (this.$refs.listWrapper, {
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
	.all-wrapper {
		position: relative;
		padding-left: 40px;
		line-height: 80px;
		height: 80px;
		border-bottom: 1px solid #DEDEDE;
		box-shadow: 0 0 2px #CCCCCC;
	}
	
	.all {
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
	
	.list-wrapper {
		position: fixed;
		width: 100%;
		height: 1078px;
		overflow: hidden;
	}
	
	.logo img {
		width: 140px;
		height: 140px;
	}
	
	.item {
		display: flex;
		padding: 20px 20px 20px 50px;
		border-bottom: 1px solid rgba(7,17,27,0.1);
	}
	
	.item:last-child {
		border-bottom: none;
	}
	
	.right {
		display: flex;
		justify-content: center;
		align-items: center;
		flex: 0 0 100px;
		width: 100px;
	}
	
	.icon {
		padding: 10px;
		background:url(../../assets/img/rest/select.png) no-repeat;
		background-size: 100%;
		transition: .5s;
	}
	
	.right .pitch {
		background:url(../../assets/img/rest/select01.png) no-repeat ;
		background-size: 100%;
		animation: move .5s cubic-bezier(.17,.67,.95,.46);
	}
	
	@keyframes move{
		from{
			transform: scale(1,1);
		}
		25% {
			transform: scale(1.2,1.2);
		}
		50% {
			transform: scale(1,1);
		}
		75% {
			transform: scale(1.1,1.1);
		}
		to{
			transform: scale(1,1);
		}
	}
	
	.left {
		flex: 1;
		display: flex;
		padding-left: 20px;
	}
	
	.desc {
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		padding-left: 20px;
	}
	
	.desc .t {
		font-size: 30px;
		font-family: "微软雅黑";
		font-weight: 700;
		color: #333;
	}
	
	.desc span {
		font-size: 25px;
		color: #999;
	}
	
	.fade-enter-active,.fade-leave-active {
		transition: 0.5s;
	}
	
	.fade-enter,.fade-leave-to {
		opacity: 0;
		transform: translateX(-80%);
	}

    .submit {
        position: fixed;
        bottom: 110px;
        right: 120px;
        padding: 10px 20px;
        font-size: 30px;
        color: #FFFFFF;
        background: #0965b1;
        border-radius: 10px;
    }
	
</style>