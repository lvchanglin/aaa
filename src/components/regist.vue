<template>
	<div id="regist">
		<Lisahead>
			<span slot="left" @click="handlelogin"><i class="iconfont icon-fanhui"></i></span>
			<h3 slot="h3">注册</h3>
			<span slot="right"><i class="iconfont icon-home"></i></span>
		</Lisahead>
		<div class="tel">
			<input v-model="username" class="username" type="text"  
			v-on:blur="handlea" placeholder="请输入11位手机号"/>
			<span>获取验证码</span>
			<div v-show="isShowUser">格式错误</div>
			<input class="password" type="password" placeholder="请输入收到的验证码"/>
			<input v-model="password" class="surepass" type="password" placeholder="请输入您的密码，长度至少为6位" v-on:blur="handleb"/>

			<div v-show="isShowPass">格式错误</div>
		</div>
		<input type="submit" class="btn" value="注册" @click="handleAjax"/>
	</div>
</template>
<script>
import router from "../router";
	export default{
		data(){
			return {
				isShowUser:false,
				isShowPass:false,
				password:"",
				username:""		
		        
			}
		},
		computed:{
			
		},

		methods:{
			handlea(el){
				var regUser = /^1[3]\d{9}/;
				if(!regUser.test(this.username)){
					this.isShowUser = true;
				}else{
					this.isShowUser = false;
				}
			},
			
			handleb(el){
				var regPass = /^[a-zA-Z0-9]{6,21}$/;
				if(!regPass.test(this.password)){
					this.isShowPass = true;
				}else{
					this.isShowPass = false;
				}
			},

			handleAjax(){
				axios.post(`/users/regist4ajax`,
					{"username":this.username,"password":this.password}).then(res=>{
						console.log(res.data);
					if(res.data.code){
						this.$router.push('/login');
						return;
					}else{
						alert(res.data.msg);
					}
				})
			},

			handlelogin(){
				router.push('/login');
			}
		}
	}
</script>
<style scoped lang="scss">

	#regist{

		h3{
			text-align:center;
		}
		.tel{
			background: #fff;
			margin-top: 10px;
			padding:10px;

			span{
				color: red;
				padding:5px;
				border:1px solid #ccc;
				border-radius:3px;
				font-size: 14px;
				float: right;
			}

			.surepass{
				width: 90%;
				margin-top:10px;
				padding:10px;
				border-radius: 5px;
			}
		}

		.username{
			padding:10px;
			border-radius: 5px;
		}

		.password{
			width: 90%;
			margin-top:10px;
			padding:10px;
			border-radius: 5px;
		}

	}

	.btn{
			width:90%;
			padding: 10px 0;
			background:#F64744;
			outline:none;
			border:0;
			color:#fff;
			font-size:16;
			border-radius:5px;
			margin-top: 20px;
		}
	
</style>
