<template>
    <div class="home-banner" @click="onClick">
        <div 
            class="bg-image" 
            :style="{backgroundImage}"
        >
            <div class="title">{{title}}</div>
            <div class="sub-title">{{subTitle}}</div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        title: {
            type: String,
            default: ''
        },
        img: {
            type: String,
            default: ''
        },
        subTitle: {
            type: String,
            default: ''
        }
    },
    methods: {
        onClick() {
            this.$emit('onClick')
        }
    },
    computed: {
        backgroundImage() {
            return `url(${this.img})`
        }
    }
}
</script>
<style lang="scss" scoped>
.home-banner {
    margin-top: 20px;
    padding: 0 20px;
    height: 125px;
    width: 100%;
    box-sizing: border-box;
    .bg-image {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 125px;
        border-radius: 10px;
        background-size: 100% 100%;
        background-repeat: no-repeat;
        .title{
            color: #fff;
            font-size: 18px;
            font-weight: 500;
        }
        .sub-title {
            padding: 5px 15px;
            margin-top: 10px;
            border: 1px solid #ccc;
            background-color: #4585ff;
            font-size: 14px;
            color: #fff;
            border-radius: 50px;
        }
    }
}
</style>