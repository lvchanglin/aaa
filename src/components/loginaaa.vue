<template>
	<div class="email">
		<input v-model="username" class="username" type="text" 
		v-on:blur="blurUser" placeholder="手机号/邮箱/用户名"/>
		<div v-show="isShowU">{{this.msg}}</div>
		<input v-model="password" class="password" type="password" 
		v-on:blur="blurPass" placeholder="密码"/>
		<div v-show="isShowP">{{this.msg}}</div>
	</div>

</template>
<script>
	export default{
		data(){
			return {
				isShowU:false,
				isShowP:false,
				username:"",
				password:"",
				msg:'账号或密码错误'
			}
		},

		methods:{
			blurUser(el){
				var regUser = /^1[3589]\d{9}/;
				if(!regUser.test(this.username)){
					this.isShowU = true;

				}else{
					this.isShowU = false;

				}
			},
			blurPass(){
				var regPass = /^[a-zA-Z0-9]{6,21}$/;
				if (!regPass.test(this.password)){
					this.isShowP = true;
				}else{
					this.isShowP = false;
				}
			}
		},

		mounted(){

		}
	}
</script>
<style scoped lang="scss">
	.email{
		width: 90%;
		padding:20px 5px;
	}
	input{
		width: 100%;
		padding:10px;
		text-indent: 2em;
		margin-bottom: 10px;
		border-radius: 5px;
	}

</style>