<template>
	<div id="position">
		<header>
			<div class="left homeheader">桐乡
				<i class="iconfont icon-paixu" ></i></div>
			<div class="homeheader"><h3>开心网</h3></div>
			<div class="right homeheader">
				<router-link to="/login" tag="div"><i class="iconfont icon-home1"></i>我的</router-link>
			</div>
		</header>
	</div>
</template>
	
<script>
	export default{
		
	}
</script>
	
<style scoped lang="scss">
	#position{
		width: 100%;

	}

	header{
		width:100%;
		height:45px;
		line-height:45px;
		background: #F64744;
		display: flex;
		color: #fff;

		div.homeheader{
			flex:1;
		}

		.left{
				text-align: left;
				padding-left: 5px;
			}

		.right{
				text-align: right;
				padding-right: 5px;
			}
	}
</style>
