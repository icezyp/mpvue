<template>
    <div class="rate">
        <div class="text">轻点评分</div>
        <div class="rate-wrapper">
            <van-rate
                :value="rateValue"
                size="22"
                gutter="12"
                color="#1d89ef"
                void-color="#dee0e2"
                void-icon="star"
                allow-half
                @change="onRateChange"
            >
            </van-rate>
        </div>
    </div>
</template>
<script>
export default {
    methods: {
        onRateChange(e) {
            this.$emit('onRateChange', e.mp.detail)
        }
    },
    props: {
        rateValue: {
            type: Number,
            default: 0
        }
    }
}
</script>
<style lang="scss" scoped>
.rate {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    margin-top: 14px;
    .text {
        font-size: 12.5px;
        color: #99a0aa;
        line-height: 14px;
        flex: 1;
    }
    .rate-wrapper {
        flex: 1;
    }
}
</style>