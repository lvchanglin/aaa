<template>
		<header>
			<div class="left homeheader">
				<slot name="left"></slot>
				
			</div>
			<div class="homeheader"><slot name="h3"></slot></div>
			<div class="right homeheader">
				<slot name="right"></slot>
				
			</div>
		</header>
</template>

<script>
import router from "../router";
	export default{
		data(){
			return {

			}
		},

		methods:{
			
			
		}
	}
</script>

<style scoped lang="scss">
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