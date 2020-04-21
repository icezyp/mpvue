<template>
    <div class="shelf-wrapper">
        <ShelfUserInfo 
            :user-info="userInfo"
            :read-day="readDay"
            :num="shelfList.length"
        />
        <ShelfList 
            :shelf-list="shelfList"
            @goToBookDetail="goToBookDetail"
            @searchBook="searchBook"
        />
    </div>
</template>
<script>
import ShelfUserInfo from '@/components/ShelfUserInfo'
import ShelfList from '@/components/ShelfList'
import {USER_INFO, OPEN_ID_KEY} from '@/utils/const'
import {getStorageSync} from '@/api/wechat'
import {getUserDay, getShelfList} from '@/api/index'
export default {
    data() {
        return {
            shelfList: [],
            readDay: 0,
            openId: ''
        }
    },
    components: {
        ShelfUserInfo,
        ShelfList
    },
    computed: {
        userInfo() {
            return getStorageSync(USER_INFO) || {}
        }
    },
    methods: {
        // 获取加入天数
        getUserDay() {
            getUserDay({openId: this.openId}).then(res => {
                this.readDay = res.data.data.day
            })
        },
        //获取书架
        getShelfList() {
            getShelfList({openId: this.openId}).then(res => {
                this.shelfList = res.data.data
            })
        },
        //点击书籍去往详情页
        goToBookDetail(book) {
            const {fileName} = book
            this.$router.push({
                path: '/pages/detail/main',
                query: {
                    fileName: fileName || ''
                }
            })
        },
        //添加书籍（搜索页）
        searchBook() {
            this.$router.push('/pages/search/main')
        }
    },
    mounted() {
        this.openId = getStorageSync(OPEN_ID_KEY)
        this.getUserDay()
        this.getShelfList()
    }
}
</script>