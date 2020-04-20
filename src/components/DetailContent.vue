<template>
    <div class="content-wrapper">
        <div class="title">目录</div>
        <ul class="content-list">
            <li
                class="catalogue"
                v-for="(item, index) in contents"
                :key="index"
                @click="readBook(item.href)"
            >
                <div class="content-label">
                    {{item.label}}
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    props: {
        contents: {
            type: Array,
            default: []
        }
    },
    methods: {
        readBook(href) {
            this.$emit('readBook', href)
        }
    }
}
</script>
<style lang="scss" scoped>
@import '@/style/mixin.scss';
.content-wrapper {
    margin: 12px 20px 0;
    border-top: 1px solid #dcdcdc;
    .title {
        font-size: 22px;
        line-height: 31px;
        color: #333;
        margin: 6px 0;
    }
    .content-list {
        padding-bottom: 60px;
        .catalogue {
            border-bottom: 1px solid #ebebeb;
            padding: 12px 0 17px;
            .content-label {
                width: 100%;
                font-size: 15px;
                line-height: 14px;
                color: #868686;
                @include ellipsis;
            }
        }
    }
}
</style>