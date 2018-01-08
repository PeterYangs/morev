<template>
	<div class="container">
		<vtitle :title="title"></vtitle>
		<!--选项-->
		<div class="tab">
			<div class="tab-item" :class="{pitch:tabIndex == '0'}" @click="onTabIndex('0')">
				<p :class="{pitch:tabIndex == '0'}">系列活动</p>
			</div>
			<div class="tab-item" :class="{pitch:tabIndex == '1'}" @click="onTabIndex('1')">
				<p :class="{pitch:tabIndex == '1'}">最新活动</p>
			</div>
			<div class="tab-item" :class="{pitch:tabIndex == '2'}" @click="onTabIndex('2')">
				<p :class="{pitch:tabIndex == '2'}">活动回顾</p>
			</div>
			<div class="block" :class="{one:tabIndex == '0',two:tabIndex == '2'}">	
			</div>
		</div>
		<!--内容-->
		<div class="content">
			<div class="" v-show="tabIndex == '0'">
				sdfsdf
			</div>
			<div class="" v-show="tabIndex == '1'">
				sd
			</div>
			<div class="" v-show="tabIndex == '2'">
				sdfs
			</div>
		</div>
	</div>
</template>

<script>
	import vtitle from '../components/title'
	export default {
		data() {
			return {
				title: '地标天物品牌秀',
				tabIndex: '1',
			}
		},
		
		created() {
			
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
	.container {
		display: flex;
		flex-direction: column;
	}
	
	.tab {
		position: relative;
		display: flex;
		height: 70px;
		border-bottom: 1px solid #999;
	}
	
	.tab .block {
		display: block;
		position: absolute;
		bottom: 0;
		width: 60px;
		height: 8px;
		background: #009FE6;
		border-radius:20px;
		transition: 0.4s;
		transform: translateX(344px);
	}
	
	.tab .one {
		transform: translateX(94px);
	}
	
	.tab .two {
		transform: translateX(596px);
	}
	
	.tab .tab-item {
		flex: 1;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	
	.tab-item p {
		font-size: 24px;
		transition: 0.4s;
		transform: translateY(0);
	}
	
	.tab-item .pitch {
		color: #009FE6;
		transform: translateY(-4px);
	}
	
	.content {
		flex: 1;
	}
	
</style>