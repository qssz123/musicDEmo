<template>
    <div class="home" @keydown="keydown">
        <div class="form">
            <h2 class="login-title">云音乐入口</h2>
            <div class="login-title-input">
                <div class="label">账户</div>
                <el-input v-model="form.username" style="width: calc(100% - 60px);display: inline-block;"></el-input>
            </div>
            <div class="login-title-input">
                <div class="label">密码</div>
                <el-input v-model="form.password" style="width: calc(100% - 60px);display: inline-block;"
                          type="password"></el-input>
            </div>
            <div>
                <div class="form-button" @click="sumbit">登录</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "home",
        data() {
            return {
                form: {
                    username: '',
                    password: ''
                }
            };
        },
        methods: {
            sumbit() {
                if (this.form.username === 'root') {
                    if (this.form.password === 'root123') {
                        this.$store.dispatch('SETISLOGIN', true)
                        this.$router.push('/discovery')
                    } else {
                        alert('密码错误')
                    }
                } else {
                    alert('账户不存在')
                }

            },
            keydown(event){
                event.keyCode===13&&this.sumbit()
            }
        },
        // 侦听器
        watch: {},
        created() {
        },
        mounted() {
            document.querySelector('.index-container').style.cssText = 'padding-top:0px;padding-bottom: 0px'
            document.querySelector('.index-container .main').style.padding = '0px';
        }
    }
</script>

<style scoped>
    .home {
        width: 100%;
        height: 100%;
        background-image: url('../assets/home.jpg');
    }

    .form-button {
        cursor: pointer;
        display: inline-block;
        padding: 5px 20px;
        background: #0AAEB3;
        color: white;
        border: 1px solid white;
        border-radius: 5px;
    }

    .login-title-input {
        padding: 5px;
    }

    .label {
        display: inline-block;
        width: 60px;
    }

    .login-title {
        padding: 5px;
    }

    .form {
        border-radius: 5px;
        background: #dcdfe6;
        position: absolute;
        height: 350px;
        width: 300px;
        left: 150px;
        top: 100px;
        padding: 10px;
    }
</style>