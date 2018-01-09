<template>
	<div class="container">
	 	<vtitle :title="title"></vtitle>
	 	<div class="tab">
	 		<div class="tab-item" v-for="(item,index) in tab" @click="onTabIndex(index)">
	 			<p :class="{'movep':tabIndex === index}">{{item}}</p>
	 		</div>
	 		<div class="slide" :class="classMap[tabIndex]"></div>
	 	</div>
	 	<!--内容-->
	 	<div class="main">
	 		<div class="" v-show="tabIndex === 0">
	 			asd
	 		</div>
	 		<div class="" v-show="tabIndex === 1">
	 			d
	 		</div>
	 		<div class="" v-show="tabIndex === 2">
	 			gf
	 		</div>
	 		<div class="" v-show="tabIndex === 3">
	 			fg
	 		</div>
	 	</div>
	</div>
</template>

<script>
	import vtitle from '../components/title'
	export default {
		data() {
			return {
				title: '我的订单',
				tab: ['全部','样品单','待采购','待评论'],
				tabIndex: 0,
			}
		},
		
		created() {
			this.classMap = ['','movea','moveb','movec']
		},
		
		methods: {
			onTabIndex(index) {
				this.tabIndex = index
			}
		},
		
		components: {
			vtitle
		}
	}
</script>

<style scoped>
	.tab {
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
</style>