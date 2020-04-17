<template>
    <div class="tag-group-wrapper" >
        <div class="group-header">
            <div class="title">{{headerTitle}}</div>
            <div class="btn" @click="onBtnClick">{{btnText}}</div>
        </div>
        <div class="tags">
            <div
                class="tag-outter"
                v-for="(item, index) in tagArray"
                :key="index"    
            >
                <Tag 
                    :text="item"
                    @onTagClick="onTagClick(item)"
                />
            </div>
        </div>
    </div>
</template>
<script>
import Tag from './Tag'
export default {
    props: {
        headerTitle: {
            type:String,
            default: '123'
        },
        btnText: {
            type:String,
            default: ''
        },
        tagArray: {
            type: Array,
            default: []
        }
    },
    components: {
        Tag
    },
    methods: {
        onBtnClick() {
            this.$emit('onGroupBtnClick')
        },
        onTagClick(item) {
            this.$emit('onTagClick', item)
        }
    }
}
</script>
<style lang="scss" scoped>
@import '@/style/variables.scss';
.tag-group-wrapper {
    padding: 0 10px;
    .group-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 16px;
        padding: 0 6px;
        font-size: 14px;
        line-height: 20px;
        .title {
            color: #333;
        }
        .btn {
            color: $blueTextBtn;
        }
    }
    .tags {
        display: flex;
        flex-wrap: wrap;
        .tag-outter {
            max-width: 100%;
        }
    }
}
</style>