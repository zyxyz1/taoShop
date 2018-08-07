<template>
    <div class="MyWallet">
        <div class="Header">
            <div class="MyMoney">
                <div class="MyIcon">
                    <img src="./../../assets/images/person/mywallet.png" alt="">
                </div>
                <div class="Wallet_text">
                    <p>账户余额(元)</p>
                    <span>58.00</span>
                </div>
            </div>
            <div class="detail" @click="GetDetail">
                <img src="./../../assets/images/person/icon_detail.png" alt="">
                <span>明细</span>
            </div>
        </div>
        <div class="MyPlay">
            <div class="balance">
                <span>余额支付</span>
                <div class="balance_item">
                    <span>0.00</span>
                    <img src="./../../assets/images/person/icon_left.png" alt="">
                </div>
            </div>
            <div class="balance">
                <span>豆豆支付</span>
                <div class="balance_item">
                    <span>0.00</span>
                    <img src="./../../assets/images/person/icon_left.png" alt="">
                </div>
            </div>
        </div>
        <div class="record">
            <div class="balance">
                <span>充值</span>
                <div class="balance_item">
                    <img src="./../../assets/images/person/icon_left.png" alt="">
                </div>
            </div>
            <div class="balance">
                <span>提现</span>
                <div class="balance_item">
                    <img src="./../../assets/images/person/icon_left.png" alt="">
                </div>
            </div>
            <div class="balance">
                <span>提现记录</span>
                <div class="balance_item">
                    <img src="./../../assets/images/person/icon_left.png" alt="">
                </div>
            </div>
        </div>
        <div class="SetPlay">
            <div class="balance">
                <span>设置支付密码</span>
                <div class="balance_item">
                    <img src="./../../assets/images/person/icon_left.png" alt="">
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
@import '../../assets/css/MyWallet.css';
</style>


