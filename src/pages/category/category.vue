<template>
    <div class="category-wrapper">
        <HomeBook 
            row="11"
            col="2"
            mode="category"
            :data="categoryList"
            @showList="showList"
        />
    </div>
</template>
<script>
import HomeBook from '@/components/HomeBook'
import {getCategoryList} from '@/api/index'
import {showLoading, hideLoading} from '@/api/wechat'
export default {
    components: {
        HomeBook
    },
    data() {
        return {
            categoryList: []
        }
    },
    methods: {
        getCategoryList() {
            showLoading('正在加载')
            getCategoryList().then(res =>{
                this.categoryList = res.data.data
                hideLoading()
            }).catch(err => {
                hideLoading()
            })
        },
        showList(cate) {
            this.$router.push({
                path: '/pages/list/main',
                query: {
                    category: cate.categoryText,
                    categoryId: cate.category
                }
            })
        }
    },
    mounted() {
        this.getCategoryList()
    }
}
</script>
<style lang="scss" scoped>
.category-wrapper {
    padding-bottom: 20px;
}
</style>