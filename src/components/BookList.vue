<template>
    <div class="book-list">
        <div 
            class="search-book" 
            v-for="(book, index) in bookList" 
            :key="index"
            @click="clickBook(book)"
        >
            <div class="book-bg">
                <ImageView :src="book.cover" />
            </div>
            <div class="book-info">
                <div class="title">{{book.title}}</div>
                <div class="author">{{book.author}}</div>
                <div class="category">{{book.categoryText}}</div>
            </div>
        </div>
    </div>
</template>
<script>
import ImageView from './base/ImageView'
export default {
    props: {
        bookList: {
            type: Array,
            default: []
        }
    },
    methods: {
        clickBook(item) {
            this.$emit('clickBook', item)
        }
    },
    components: {
        ImageView
    }
}
</script>

<style lang="scss" scoped>
@import '@/style/mixin.scss';
@import '@/style/variables.scss';
.book-list {
    .search-book {
        display: flex;
        padding: 14px 16px;
        .book-bg {
            width: 47px;
            height: 68.5px;
            margin-right: 15.5px;
        }
        .book-info {
            width: 50%;
            flex: 1;
            .title {
                font-size: 16px;
                line-height: 22.5px;
                width: 100%;
                @include ellipsis;
            }
            .author {
                font-size: 13px;
                line-height: 18px;
                color: rgba(0, 0, 0, 0.65);
            }
            .category {
                font-size: 13px;
                line-height: 18px;
                color: $subTextColor;
            }
        }
    }
}
</style>
