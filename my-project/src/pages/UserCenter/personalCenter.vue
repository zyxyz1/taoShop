<template>
    <div class="personalCenter">
            <div class="Header">
                <div class="set"><img src="./../../assets/images/person/icon_set.png" alt=""><span>设置</span></div>
                <div class="Head"><img src="./../../assets/images/person/head.png" alt=""></div>
                <div class="Name">
                        <p>回眸有风险</p>
                        <p>15881901156</p>
                        <div class="level"><img src="./../../assets/images/person/icon_ordinary.png"><span>普通用户</span></div>
                </div>
                <div class="money">
                    <div class="money_left">
                        <span>￥452,0</span>
                        <span class="left_item">余额</span>
                    </div>
                    <div class="money_right">
                            <span>10.00</span>
                            <span class="left_item right_item">豆豆</span>
                    </div>
                </div>
            </div>
            <div class="Myorder">
                    <div class="order_header">
                        <span>我的订单</span>
                        <div class="order_more">
                            <span>全部订单</span>
                            <img src="./../../assets/images/person/icon_left.png" alt="">
                        </div>
                    </div>
                    <div class="order_record">
                        <div class="record_item"><img src="./../../assets/images/person/icon_order.png" alt=""><span>储值订单</span></div>
                        <div class="record_item"><img src="./../../assets/images/person/icon_Other.png" alt=""><span>团购订单</span></div>
                        <div class="record_item"><img src="./../../assets/images/person/icon_record.png" alt=""><span>活动订单</span></div>
                        <div class="record_item"><img src="./../../assets/images/person/icon_cash.png" alt=""><span>现金订单</span></div>
                    </div>
            </div>
            <div class="operation">
                <div class="operationBox">
                    <div class="operation_item"><div class="item_cart"></div><span>我的购物车</span></div>
                    <div class="operation_item"><div class="item_wallet"></div><span>我的钱包</span><span>今日收益: ￥45</span></div>
                    <div class="operation_item"><div class="item_card"></div><span>我的卡券</span></div>
                </div>
                <div class="operationBox">
                        <div class="operation_item"><div class="item_friend"></div><span>邀请好友</span></div>
                        <div class="operation_item"><div class="item_team"></div><span>我的员工</span></div>
                        <div class="operation_item"  @click='Giving'><div class="item_givi"></div><span>赠送豆豆</span></div>
                    </div>
                    <div class="operationBox">
                            <div class="operation_item"><div class="item_live"></div><span>我的收藏</span></div>
                            <div class="operation_item"><div class="item_seller"></div><span>成为商户</span></div>
                            <div class="operation_item"><div class="item_help"></div><span>帮助中心</span></div>
                        </div>
            </div>
            <div class="Footer">
                <div></div><span>当前版本2.0</span><div></div>
            </div>
    </div>
</template>
<script>
export default {
    data(){
        return{

        }
    },
    methods:{
        Giving(){//赠送豆豆弹框
                this.$dialog.alert({
                message: '开发中，敬请期待'
                });
            },
    },
    created () {
    }
}
</script>
<style scope>
@import "../../assets/css/personalCenter.css";
.van-dialog__message{
text-align: center;
}
.van-button__text{
    color: #999999;
}
</style>
