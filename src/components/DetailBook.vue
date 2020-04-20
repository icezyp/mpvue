<template>
    <div class="detail-book-wrapper">
        <div class="book-info-l">
            <div class="book-wrapper">
                <ImageView :src="src"/>
            </div>
        </div>
        <div class="book-info-r">
            <div class="title">{{title}}</div>
            <div class="author">{{author}}</div>
            <div class="category">{{category}}</div>
        </div>
    </div>
</template>
<script>
import ImageView from '@/components/base/ImageView'
import {CATEGORY} from '@/utils/const'
export default {
    components: {
        ImageView
    },
    props: {
        book: {
            type: Object,
            default: {}
        }
    },
    computed: {
        src() {
            return this.book && this.book.cover || '/static/image/loading.jpg'
        },
        title() {
            return this.book && this.book.title || ''
        },
        author() {
            return this.book && this.book.author || ''
        },
        category() {
            return this.book && this.book.categoryText && CATEGORY[this.book.categoryText.toLowerCase()] || ''
        }
    }
}
</script>
<style lang="scss" scoped>
@import '@/style/mixin.scss';
.detail-book-wrapper {
    display: flex;
    padding: 0 20px;
    margin-top: 16px;
    .book-info-l {
        margin-right: 21.5px;
        .book-wrapper {
            width: 108px;
            height: 157px;
        }
    }
    .book-info-r {
        flex: 1;
        width: 197px;
        .title {
            font-size: 22px;
            line-height: 31px;
        }
        .author {
            font-size: 16px;
            line-height: 22.5px;
        }
        .title, .author {
            color: #333;
            word-break: break-word;
            @include ellipsis_2;
        }
        .category {
            margin-top: 12px;
            font-size: 14px;
            line-height: 22px;
            color: #868686;
        }
    }
}
</style>