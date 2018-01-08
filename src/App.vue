<template>
  <div id="app">
  	<keep-alive>
  		<transition name="show">	
    		<router-view/>
  		</transition>
    </keep-alive>	
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style scoped>
#app {
	height: 100%;
	overflow-y: auto;
}
	
.show-enter-active, .show-leave-active {
	transition: 0.5s;
}

.show-enter, .show-leave-to {
	opacity: 0;
	transform: scale(1.05,1.05);
}
</style>
