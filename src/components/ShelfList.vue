<template>
    <div class="shelf-list-wrapper">
        <div class="books-wrapper">
            <div 
                class="book-wrapper"
                v-for="(item, index) in shelfList"
                :key="index"
            >
                <div class="book" @click="goToBookDetail(item)">
                    <div class="book-img">
                        <ImageView
                            :src="item.cover"
                        />
                    </div>
                    <div class="book-title">{{item.title}}</div>
                </div>
            </div>
            <div class="book-wrapper">
                <div class="add-book-btn" @click="searchBook"></div>
            </div>
        </div>
    </div>
</template>
<script>
import ImageView from '@/components/base/ImageView'
export default {
    props: {
        shelfList: {
            type: Array,
            default: []
        }
    },
    methods: {
        goToBookDetail(book) {
            this.$emit('goToBookDetail', book)
        },
        searchBook(){
            this.$emit('searchBook')
        }
    },
    components: {
        ImageView
    }
}
</script>
<style lang="scss" scoped>
@import '@/style/mixin.scss';
.shelf-list-wrapper {
    margin: 32px 16px 0;
    .books-wrapper {
        display: flex;
        flex-wrap: wrap;
        .book-wrapper {
            flex-shrink: 0;
            width: 33.3%;
            .book {
                width: 90px;
                margin: 0 auto 40px;
            }
            .book-img {
                height: 128px;
                box-sizing: border-box;
            }
            .book-title {
                font-size: 14px;
                line-height: 20px;
                color: #333;
                @include ellipsis_2;
            }
        }
        .add-book-btn {
            position: relative;
            width: 90px;
            height: 128px;
            margin: 0 auto;
            border: 1px solid #CBCBCB;
            box-sizing: border-box;
            &::before, &::after {
                content: "";
                position: absolute;
                width: 30px;
                height: 2px;
                background-color: #cacaca;
                top: 63px;
                left: 30px;
            }
            &::after {
                transform: rotate(90deg);
            }
        }
    }
}
</style>