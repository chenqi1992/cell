<template>
  	<div id="app">
	  	<router-view></router-view>
  	</div>
</template>
<script>
export default {
	name: 'app',
	data() {
		return {
		}
	}
}
</script>

<style lang="scss">
	// @import "@/common/scss/element-variables.scss";
  	#app {
		// min-width: 1280px;
		width: 100%;
        height: 100%;
	}
</style>
