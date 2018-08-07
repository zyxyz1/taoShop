<template>
<div>
    <button @click='testApi'>点我</button>
</div>
</template>
<script>

export default {
    name:'demo',
    data(){
        return{
            
        }
    },
    methods: {
        testApi(){
            var params = {
                method:'tao.user.login.get',
                user_name:'18281986855',
                password:'123456'
            };
            params.sign = this.$sign(params);
            console.log(params);
           this.$http.post("/User",params,data=>{
                console.log(data,'123123');
            });
        }
    },
    created () {
        // this.testApi()
    }
}
</script>
<style scope>

</style>