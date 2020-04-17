<template>
    <div class="auth-wrapper">
        <div class="auth">
            <div class="auth-tips">
                <div class="logo">
                    <ImageView src="https://img.yzcdn.cn/vant/logo.png" />
                </div>
                <div class="sub-title">mpvue小程序</div>
                <div class="title">web前端工程师</div>
            </div>
            <button 
                class="login-btn"
                open-type="getUserInfo"
                @getuserinfo="getUserInfo"
            >
                授权登陆
            </button>
        </div>
    </div>
</template>
<script>
import ImageView from '@/components/base/ImageView'
export default {
    components: {
        ImageView
    },
    methods: {
        getUserInfo() {
            this.$emit('getUserInfo')
        }
    }
}
</script>
<style lang="scss" scoped>
    .auth-wrapper {
        display: flex;
        position: fixed;
        left: 0;
        right: 0;
        width: 100%;
        height: 100%;
        justify-content: center;
        align-items: center;
        background-color: #999;
        z-index: 999;
        .auth {
            display: flex;
            flex-direction: column;
            width: 270px;
            height: 248px;
            background-color: #f5f5f5;
            border-radius: 18px;
            .auth-tips {
                flex: 1;
                text-align: center;
                .logo {
                    width: 74px;
                    height: 74px;
                    margin: 22.5px auto 18px;
                }
                .sub-title {
                    font-size: 13px;
                    color: #999;
                    line-height: 18.5px;
                }
                .title {
                    font-size: 16px;
                    line-height: 22.5px;
                    color: #333;
                    margin-top: 3.5px;
                }
            }
            .login-btn {
                height: 49px;
                border: 0;
                width: 100%;
                color: #fff;
                font-size: 15px;
                line-height: 49px;
                text-align: center;
                background-image: linear-gradient(90deg, #1EA3F5 0%, #0F87FC 100%);
                border-radius: 0 0 18px 18px;
            }

        }
    }
</style>