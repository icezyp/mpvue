<template>
    <div class="search-list">
        <SearchItem 
            icon="apps-o"
            :title="category"
            sub-title="类别"
            @click="showList(category, 'category')"
            v-if="category"
        />
        <SearchItem 
            icon="user-o"
            :title="author"
            sub-title="作者"
            @click="showList(author, 'author')"
            v-if="author"
        />
        <SearchItem 
            icon="newspaper-o"
            :title="publisher"
            sub-title="出版社"
            @click="showList(publisher, 'publisher')"
            v-if="publisher"
        />
        <BookList 
            :book-list="data.book"
            @clickBook="onBookClick"
            v-if="data && data.book && data.book.length > 0"
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
            this.$emit('showList')
        },
        onBookClick(book) {

        }
    },
    computed: {
        category() {
            let categoryText = this.data && this.data.category && this.data.category[0] && this.data.category[0].categoryText
            return categoryText && CATEGORY[categoryText.toLowerCase()] || ''
        },
        author() {
            return this.data && this.data.author && this.data.author[0] && this.data.author[0].author
        },
        publisher() {
            return this.data && this.data.publisher && this.data.publisher[0] && this.data.publisher[0].publisher
        }
    }
}
</script>
<style lang="scss" scoped>

</style>