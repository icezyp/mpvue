<template>
    <div class="detail-bottom">
        <div class="btn-wrapper">
            <van-button 
                round 
                :custom-class="isInShelf ? 'remove-shelf operate-btn' : 'add-shelf operate-btn'"
                @click="handleShelf"
            >
            {{isInShelf ? '移出书架' : '加入书架'}}
            </van-button>
        </div>
        <div class="btn-wrapper">
            <van-button 
                round 
                custom-class="read-btn operate-btn"
                @click="readBook"
            >
            阅读
            </van-button>
        </div>
    </div>
</template>
<script>
export default {
    props:{
        isInShelf: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        handleShelf() {
            this.$emit('handleShelf');
        },
        readBook() {
            this.$emit('readBook');
        }
    }
}
</script>
<style lang="scss" scoped>
.detail-bottom {
    display: flex;
    position: fixed;
    width: 100%;
    height: 60px;
    padding: 5px 9px;
    bottom: 0;
    box-shadow: 0 -4px 16px 0 rgba(0,0,0,0.11);
    background-color: #fff;
    justify-content: space-around;
    box-sizing: border-box;
    .btn-wrapper {
        flex: 1;
        margin: 0 9px;
    }
}
</style>
<style lang="scss">
.operate-btn {
    width: 100%;
    height: 40px;
    &.read-btn {
        background-image: linear-gradient(90deg, #1EA3F5 0%, #0F87FC 100%);
        color: #fff;
        font-size: 15px;
    }
    &.add-shelf {
        border-color: #0F87FC;
        color: #0F87FC;
    }
    &.remove-shelf {
        border: 1px solid #FFAF9B;
        color: #F96128;
        background: rgba(255, 175, 155, .3);
    }
}
</style>