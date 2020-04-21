<template>
    <div class="user-info-wrapper">
        <div class="user-info">
            <div>
                <div class="nick-name">{{userInfo.nickName}}</div>
                <div class="read-time">您已经加入小慕读书{{readDay}}天</div>
            </div>
            <div class="avatar-wrapper">
                <ImageView 
                    :src="userInfo.avatarUrl" 
                    round 
                    mode="scaleToFill"
                />
            </div>
        </div>
        <div class="book-statistic">您的书架共有{{num}}本好书</div>
    </div>
</template>
<script>
import ImageView from '@/components/base/ImageView'
export default {
    props: {
        num: {
            type: Number,
            default: 0
        },
        readDay: {
            type: Number,
            default: 0
        },
        userInfo: {
            type: Object,
            default: {}
        }
    },
    components: {
        ImageView
    },
    mounted() {
        console.log(this.userInfo ,111)
    }
}
</script>
<style lang="scss" scoped>
.user-info-wrapper {
    padding: 13.5px 23.5px 17px 18px;
    box-sizing: border-box;
    margin: 14px 24px 0;
    background: #F8F9FB;
    border: 1px solid #E0E1E2;
    border-radius: 12px;
    .user-info {
        display: flex;
        padding-bottom: 20px;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid #e9e9e9;
        .nick-name {
            font-size: 17px;
            line-height: 24px;
            color: #333;
            font-weight: 700;
            margin-bottom: 4px;
        }
        .read-time {
            font-size: 12px;
            line-height: 16.5px;
            color: #868686;
        }
        .avatar-wrapper {
            width: 36px;
            height: 36px;
        }
    }
    .book-statistic {
        font-size: 12px;
        line-height: 16.5px;
        color: #666;
        padding-top: 16px;
    }
}
</style>