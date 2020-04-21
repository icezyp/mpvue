<template>
    <div>
        <BookList 
            :book-list="bookListArr"
            @clickBook="onBookClick"
            v-if="bookListArr.length > 0"
        />
    </div>
</template>
<script>
import BookList from '@/components/BookList'
import {CATEGORY} from '@/utils/const'
import {getBookList} from '@/api/index'
import {showLoading, hideLoading} from '@/api/wechat'
export default {
    data() {
        return {
            bookList: [],
            publisher: '',
            author: '',
            category: '',
            categoryId: '',
            page: 1,
            pageSize: 20,
            hasLoadAll: false
        }
    },
    components:{
        BookList
    },
    methods: {
        onBookClick(book) {
            const {fileName} = book
            this.$router.push({
                path: '/pages/detail/main',
                query: {
                    fileName: fileName || ''
                }
            })
        },
        getBookList() {
            showLoading('正在加载')
            getBookList({
                publisher: this.publisher,
                author: this.author,
                category: this.category,
                categoryId: this.categoryId,
                page: this.page,
                pageSize: this.pageSize
            }).then(res => {
                this.bookList = res.data.data
                if(res.data.data.length < 20) {
                    this.hasLoadAll = true
                }
                hideLoading()
            }).catch(err => {
                hideLoading()
            })
        },
        init() {
            this.category = this.$route.query.category
            this.categoryId = this.$route.query.categoryId
            this.page = 1
            this.bookList = []
            this.hasLoadAll = false
            this.getBookList()
        }
    },
    computed: {
        bookListArr() {
            let _bookList = this.bookList || []
            if(_bookList.length > 0) {
                _bookList.forEach(book => {
                    if(book.categoryText && book.categoryText.length > 0) {
                        book.categoryText = CATEGORY[book.categoryText.toLowerCase()]
                    }
                })
            }
            return _bookList
        }
    },
    mounted() {
        this.init()
    },
    onReachBottom() {
        if(!this.hasLoadAll) {
            showLoading('正在加载')
            this.page++ 
            getBookList({
                publisher: this.publisher,
                author: this.author,
                category: this.category,
                categoryId: this.categoryId,
                page: this.page,
                pageSize: this.pageSize
            }).then(res => {
                if(res.data.data.length < 20) {
                    this.hasLoadAll = true
                }
                res.data.data.length > 0 && this.bookList.push(...res.data.data)
                hideLoading()
            }).catch(err => {
                hideLoading()
            })
        }
    }
}
</script>
<style lang="scss" scoped>

</style>