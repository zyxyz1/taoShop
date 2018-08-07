<template>
    <div class="TopUp">
        <div class="Header">
            <span style="font-size:.3rem">充值金额</span>
            <div class="Number">
             <van-cell-group>
                <van-field v-model="value" placeholder="请输入" type="number"/>
             </van-cell-group>
            </div>
            
        </div>
        <div class="TopMoney">充值</div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            value:''
        }
    }
}
</script>
<style>
* {
    padding: 0;
    margin: 0;
  }
  html,
  body {
    height: 100%;
    font-family: SimHei;
    background-color:#F6F6F6;
}
.Header{
    width: 100%;
    height: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: .3rem;
    color: #333;
    background-color: #fff;
    padding: 0 .3rem;
    box-sizing: border-box;
    font-size: 0.24rem    
}
    .van-hairline--top-bottom::after {
    border-width: 0;
}
.van-cell{
    padding: 0;
}
    .Number{
        width: 70%;
        height: 1rem;
    }
    .van-field__control{
        line-height: 1rem;
        text-align: right;
        font-size: .3rem;
        color: #ccc;
    }
    .TopMoney{
        width: 5.7rem;
        height: .8rem;
        background-image: linear-gradient(0deg, 
            #fe4a03 0%, 
            #ffa810 100%), 
        linear-gradient(
            #ef1c20, 
            #ef1c20);
        background-blend-mode: normal, 
            normal;
        border-radius: .4rem;
        font-size: .3rem;
        line-height: .8rem;
        color: #ffffff;
        text-align: center;
        margin: 0 auto;
        margin-top: 2rem;
    }
</style>


