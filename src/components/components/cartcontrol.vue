<template>
	<div class="cart-control">
		<transition name="more">
			<div class="cart-decrease" v-show="food.count>0" @click.stop.prevent="decreaseCart(1)">
		        <span class="inner icon minus"></span>
		   </div>	
		</transition>
		<div class="cart-count" v-show="food.count>0">
	   		{{food.count}}
	   </div>
		<span class="icon add" @click="addCart(1)"></span>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				food:{
					count: 0,
				}
			}
		},
		
		created() {
			
		},
		
		methods: {
			decreaseCart(n) {
				this.food.count -= n
			},
			
			addCart(n) {
				this.food.count += n
			}
		}
	}
</script>

<style scoped>
	.cart-control {
		display: flex;
		align-items: center;
		justify-content: center;
	}
	
	.cart-count {
		width: 48px;
		font-size: 32px;
		line-height: 64px;
		text-align: center;
	}
	
	.icon {
		width: 64px;
		height: 64px;
		transition: .5s;
		transform: rotate(0deg);
	}
	
	.more-enter-active,
	.more-leave-active {
		transition: .5s
	}
	
	.more-enter,
	.more-leave-to {
		opacity: 0;
		transform: translateX(64px)
	}
	
	.more-enter-to,
	.more-leave-active .inner {
		transform: rotate(180deg);
	}
	
	.minus {
		vertical-align: middle;
	}
</style>