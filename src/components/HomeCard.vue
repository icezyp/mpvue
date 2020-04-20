<template>
    <div class="home-card">
        <div class="home-card-inner">
            <div class="user-info">
                <div class="avatar-wrapper">
                    <ImageView 
                        :src="avatar"
                        round
                        mode="scaleToFill"
                    />
                </div>
                <div class="nickname">{{nickname}}</div>
                <div class="shelf-text">书架共有{{data.num}}本好书</div>
                <div class="round-point"></div>
                <div class="shelf-text">特别精选</div>
            </div>
            <div class="book-info">
                <div class="book-wrapper">
                    <div 
                        class="book-image-wrapper"
                        v-for="(item, index) in bookList"
                        :key="index"
                        @click="onBookClick(item)"
                    >
                        <ImageView :src="item.cover"/>
                    </div>
                </div>
                <div class="shelf-wrapper">
                    <div class="shelf">书架</div>
                    <van-icon 
                        class="arrow" 
                        name="arrow" 
                        size="11px"
                        color="#828489"
                    ></van-icon>
                </div>
            </div>
            <div class="feedback-wrapper" @click="onFeedbackClick">反馈</div>
        </div>
        <van-dialog id="van-dialog"></van-dialog>
    </div>
</template>
<script>
import ImageView from '@/components/base/ImageView'
import Dialog from 'vant-weapp/dist/dialog/dialog'
export default {
    components: {
        ImageView
    },
    props: {
        data: {
            type: Object,
            default: null
        },
        hasSign: {
            type: Boolean,
            default: false
        },
        signDay: {
            type:Number,
            default: 0
        }
    },
    methods: {
        gotoShelf() {

        },
        onBookClick(book) {
            this.$emit('onBookClick', book)
        },
        sign() {

        },
        onFeedbackClick() {
            Dialog.confirm({
                title: '反馈',
                message: ' 您是否确认反馈信息',
                confirmButtonText: '是',
                cancelButtonText: '否',
            }).then(() => {
                console.log('点击确认反馈')
            }).catch(() => {
                console.log('点击取消反馈')
            })
        }
    },
    computed: {
        avatar() {
            return this.data && this.data.userInfo && this.data.userInfo.avatarUrl || ''
        },
        nickname() {
            return this.data && this.data.userInfo && this.data.userInfo.nickName || '匿名'
        },
        bookList() {
            return this.data && this.data.bookList || []
        }
    }
}
</script>
<style lang="scss" scoped>
.home-card {
    position: relative;
    padding: 21.5px 17px 20px 20px;
    margin: 22px 20px 0;
    background-image: linear-gradient(-90deg, #54575F 0%, #595B60 100%);
    border-radius: 15px;
    box-sizing: border-box;
    .home-card-inner {
        .user-info{
            display: flex;
            align-items: center;
            .avatar-wrapper {
                width: 20px;
                height: 20px;
                flex-shrink: 0;
            }
            .nickname, .shelf-text {
                font-size: 12px;
                color: #fff;
            }
            .nickname {
                margin: 0 8.5px;
            }
            .shelf-text {
                opacity: .7;
            }
            .round-point {
                width: 4px;
                height: 4px;
                background-color: #a2a2a2;
                border-radius: 50%;
                margin: 0 8px;
            }
        }
        .book-info {
            display: flex;
            align-items: center;
            margin-top: 16.5px;
            .book-wrapper {
                display: flex;
                justify-content: space-around;
                flex: 1;
                justify-content: space-between;
                .book-image-wrapper {
                    width: 72px;
                    height: 101px;
                }
            }
            .shelf-wrapper {
                display: flex;
                align-items: center;
                margin-left: 17.5px;
                .shelf {
                    width: 11px;
                    font-size: 11px;
                    word-break: break-all;
                    color: #fff;
                    opacity: .8;
                }
            }
        }
        .feedback-wrapper {
            position: absolute;
            width: 44.5px;
            height: 23.5px;
            right: 0;
            top: 19.5px;
            border-radius: 100px 0 0 100px;
            background-color: rgba(216, 216, 216, .3);
            font-size: 11px;
            color: #fff;
            text-align: center;
            line-height: 23.5px;
        }
    }
}
</style>