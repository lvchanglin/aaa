<template>
	<div id="loginAfter">
		<Lisahead>
			<span slot="left">桐乡<i class="iconfont icon-paixu" ></i></span>
			<h3 slot="h3">开心网</h3>
			<span slot="right">
				<router-link to="/login" tag="div"><i class="iconfont icon-home1"></i>我的</router-link>
			</span>
		</Lisahead>

		<div class="my">
			<div class="touxiang"></div>
		</div>
	</div>

</template>

<script>
	

</script>

<style scoped lang="scss">
	#loginAfter{
		width: 100%;
		height: 100%;
		
	}

	.my{
		width:100%;
		text-align:center;
	}
	.touxiang{
		margin: 20px auto;
		display: inline-block;
		border-radius:100%;
		width:80px;
		height:80px;
		background-image:url(http://p3.music.126.net/85OraraqsQsBrce52g1kPg==/54975581401100.jpg?param=130y130);
		background-size:cover;
		border:5px solid #b30b0b;
	}

</style>