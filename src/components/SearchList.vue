<template>
    <div class="search-list">
        <SearchItem 
            :icon="category.icon"
            :title="category.title"
            :sub-title="category.subTitle"
            @click="showList(category.title, 'category')"
            v-if="category"
        />
        <SearchItem 
            :icon="author.icon"
            :title="author.title"
            :sub-title="author.subTitle"
            @click="showList(author.title, 'author')"
            v-if="author"
        />
        <SearchItem 
            :icon="publisher.icon"
            :title="publisher.title"
            :sub-title="publisher.subTitle"
            @click="showList(publisher.title, 'publisher')"
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
            return this.data && this.data.item && this.data.item[0]
        },
        author() {
            return this.data && this.data.item && this.data.item[1]
        },
        publisher() {
            return this.data && this.data.item && this.data.item[2]
        }
    }
}
</script>
<style lang="scss" scoped>

</style>