<template>
    <div class="SubmitOrders">
    <!-- <div class="Header">
            <div class="data"><div class="map"></div>
                <div class="Address">
                  <p>填写收货人地址以及联系方式</p>
                 <p>暂无收货人信息</p>
                 </div>
            </div>           
            <div class="more"></div>
    </div> -->
    <div class="Header">
            <div class="data"><div class="map"></div>
                <div class="Address">
                  <span>张三</span><span>15881901186</span>
                 <p class="MyAddre">四川省成都市武侯区环球中心123号</p>
                 </div>
            </div>           
            <div class="more"></div>
    </div>
    <div class="barcode"></div>
    <div class="Goods">
        <div class="order">
            <div class="order_img">
                <img src="./../../assets/images/index/order.png" alt="">
            </div>
            <div class="order_text">
                <div class="order_name">Apple/苹果 12 英寸 MacBook 1.3GHz 处理器  512GB 存储容量</div>
                <div class="order_species"><span>颜色:白色</span><span>类型：套餐一</span></div>
                <div class="poice">
                    <div class="money"><span>￥</span><span>4515</span><span>豆豆</span></div>
                    <div>×<span>1</span></div>
                </div>
            </div>
        </div>
        <div class="order">
                <div class="order_img">
                    <img src="./../../assets/images/index/order.png" alt="">
                </div>
                <div class="order_text">
                    <div class="order_name">Apple/苹果 12 英寸 MacBook 1.3GHz 处理器  512GB 存储容量</div>
                    <div class="order_species"><span>颜色:白色</span><span>类型：套餐一</span></div>
                    <div class="poice">
                        <div class="money"><span>￥</span><span>4515</span><span>豆豆</span></div>
                        <div>×<span>1</span></div>
                    </div>
                </div>
            </div>
        <div class="freight">
            <span>运费</span>
            <div class="Courier"><span>快递:</span><span>￥5.00</span></div>
        </div>
        <div class="Leave">
                <label c for="name">给卖家留言:</label>
                <input class="name" type="text" id="name">
        </div>
        <div class="combined">
            <span>共2件商品</span><span>合计:￥5,694.00</span><span>（含运费5.00）</span>
        </div>
    </div>
    <div class="total">
        <div class="porice"><span>合计:</span><span>￥</span><span>5,694.00</span></div>
        <div class="Sumit">提交订单</div>
    </div>
</div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
@import "../../assets/css/SubmitOrders.css";
</style>
