<template>
    <div class="search-list">
        <SearchItem 
            icon="apps-o"
            :title="categoryText"
            sub-title="类别"
            @selectItem="showList(category, 'category')"
            v-if="category"
        />
        <SearchItem 
            icon="user-o"
            :title="author"
            sub-title="作者"
            @selectItem="showList(author, 'author')"
            v-if="author"
        />
        <SearchItem 
            icon="newspaper-o"
            :title="publisher"
            sub-title="出版社"
            @selectItem="showList(publisher, 'publisher')"
            v-if="publisher"
        />
        <BookList 
            :book-list="bookList"
            @clickBook="onBookClick"
            v-if="bookList.length > 0"
        />
    </div>
</template>
<script>
import SearchItem from './SearchItem'
import BookList from './BookList'
import {CATEGORY} from '@/utils/const'
export default {
    components: {
        SearchItem,
        BookList
    },
    props: {
        data: {
            type: Object,
            default: {}
        }
    },
    methods: {
        showList(text, key) {
            this.$emit('showList', {text, key})
        },
        onBookClick(book) {
            this.$emit('onBookClick', book)
        }
    },
    computed: {
        category() {
            return this.data && this.data.category && this.data.category[0] && this.data.category[0].categoryText
        },
        categoryText() {
            let categoryText = this.data && this.data.category && this.data.category[0] && this.data.category[0].categoryText
            return categoryText && CATEGORY[categoryText.toLowerCase()] || ''
        },
        author() {
            return this.data && this.data.author && this.data.author[0] && this.data.author[0].author
        },
        publisher() {
            return this.data && this.data.publisher && this.data.publisher[0] && this.data.publisher[0].publisher
        },
        bookList() {
            let _books = this.data && this.data.book || []
            if(_books.length > 0) {
                _books.forEach(item => {
                    item.categoryText = CATEGORY[item.categoryText.toLowerCase()]
                })
            }
            return _books
        }
    }
}
</script>
<style lang="scss" scoped>

</style>