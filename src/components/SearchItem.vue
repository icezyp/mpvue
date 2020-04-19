<template>
    <div class="search-item" @click="selectCate">
        <div class="icon-wrapper">
            <BaseIcon 
                :name="iconName"
                color="#999"
                size="20px"
                custom-class="search-item-icon"
            />
        </div>
        <div class="info">
            <div class="title">{{title}}</div>
            <div class="sub-title">{{subTitle}}</div>
        </div>
    </div>
</template>
<script>
import BaseIcon from './base/BaseIcon'
export default {
    methods: {
        selectCate() {
            this.$emit('selectCate')
        }
    },
    components: {
        BaseIcon
    },
    props: {
        title:{
            type: String,
            default: '基本面分析——对十天前趋势判断的验证'
        },
        subTitle: {
            type: String,
            default: '红色竖线是我给出'
        },
        icon: {
            type: String,
            default:''
        }
    },
    computed: {
        iconName() {
            if(mpvuePlatform === 'wx') {
                return this.icon
            } else if(mpvuePlatform === 'my') {
                return 'info'
            }
        }
    }
}
</script>
<style lang="scss" scoped>
@import '@/style/mixin.scss';
@import '@/style/variables.scss';
.search-item {
    display: flex;
    align-items: center;
    padding: 12px 15px;
    .icon-wrapper {
        width: 32px;
        height: 32px;
        margin-right: 10px;
        flex-shrink: 0;
        background-color: #f7f7f9;
        border-radius: 50%;
        padding: 5px 0;
        box-sizing: border-box;
        @include center;
    }
    .info {
        width: 60%;
        flex: 1;
        .title {
            font-size: 14px;
            line-height: 20px;
            color: #333;
            @include ellipsis;
        }
        .sub-title {
            font-size: 12px;
            color: $subTextColor;
            @include ellipsis;
        }
    }
}
</style>
<style lang="scss">
.search-item-icon {
    margin: 5px 0;
}
</style>