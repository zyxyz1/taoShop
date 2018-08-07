<template>
    <div id="editAdd">
        <div class="page_title">
            <p>联系方式</p>
        </div>
        <div class="editAddInfo">
            <div class="userName">
                <label c for="name">姓名:</label>
                <input class="name" type="text" id="name">
            </div>
            <div class="userName">
                <label c for="name">电话:</label>
                <input class="name" type="number" id="name">
            </div>
        </div>
        <div class="page_title">
            <p>收货地址</p>
        </div>
        <div class="editAddInfo">
            <div class="userName">
                <label c for="name">城市地区:</label>
                <input class="name" type="text" id="name">
            </div>
            <div class="userName">
                <label c for="name">详细地址:</label>
                <input class="name" type="text" id="name">
            </div>
        </div>
        <div class="Address">
            <div></div><span>设置为默认地址</span>
        </div>
        <div class="save">保存</div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scope>
@import "./../../assets/css/EditAdd.css";
</style>
