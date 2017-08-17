<template>
	<div class="email">
		<input class="username" type="text" placeholder="请输入11位手机号"/>
		<span>获取验证码</span>
		<input class="password" type="password" placeholder="请输入收到的验证码"/>
	</div>

</template>
<script>
	export default{
		
	}
</script>
<style scoped lang="scss">
	.email{
		width: 80%;
		padding:20px 5px;
		span{
			padding:10px 5px;
			border: 1px solid #ccc;
			border-radius:5px;
			font-size: 12px;
			float: right;
			color: red;
		}
	}
	.username{
		width:50%;
	}

	.password{
		width:100%;
	}

	input{
		padding:10px;
		
		margin-bottom: 10px;
		border-radius: 5px;
	}

</style>