<template>
    <div class="tag-wrapper" @click="onTagClick">
        <div class="tag">{{text}}</div>
    </div>
</template>
<script>
export default {
    props: {
        text: {
            type: String,
            default: ''
        }
    },
    methods: {
        onTagClick() {
            this.$emit('onTagClick')
        }
    }
}
</script>
<style lang="scss" scoped>
@import '@/style/mixin.scss';
.tag-wrapper {
    padding: 6px 17px;
    margin: 0 6px 12px;
    border-radius: 16px;
    background-color: #F7F7F9;
    .tag {
        font-size: 14px;
        color: #272E37;
        width: 100%;
        @include ellipsis
    }
}
</style>