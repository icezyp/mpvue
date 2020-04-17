<template>
    <div class="home-book">
        <div class="header">{{title}}</div>
        <div class="content">
            <div class="row" v-for="(rowItem, rowIndex) in bookData" :key="rowIndex">
                <div class="col" v-for="(book, bookIndex) in rowItem" :key="bookIndex">
                    <div 
                        class="book-wrapper"
                        :style="{flexDirection: mode === HOME_BOOK_MODE.COL ? 'column' : 'row'}"
                        @click="onBookClick"
                        v-if="mode === HOME_BOOK_MODE.COL || mode === HOME_BOOK_MODE.ROW ? true : false"
                    >
                        <div 
                            class="book-box"
                            :style="{flex: mode=== HOME_BOOK_MODE.ROW ? '0 0 50%' : ''}"
                        >
                            <ImageView :src="book.cover"/>
                        </div>
                        <div 
                            class="book-title-wrapper book-title-col" 
                            v-if="mode === HOME_BOOK_MODE.COL"
                        >
                            <div class="book-des book-title">{{book.title}}</div>
                        </div>
                        <div 
                            class="book-title-wrapper book-title-row" 
                            v-else
                        >
                            <div class="book-des book-title">{{book.title}}</div>
                            <div>
                                <div class="book-des book-author">{{book.author}}</div>
                                <div class="book-des book-category">{{book.categoryText}}</div>
                            </div>
                        </div>
                    </div>
                    <div 
                        class="category-wrapper"
                        v-else
                    >
                        <div class="category-info">
                            <div class="category-text">{{book.text}}</div>
                            <div class="category-num">{{book.num}}本书</div>
                        </div>
                        <div class="category-img-wrapper">
                            <div class="category-cover1">
                                <ImageView :src="book.cover"/>
                            </div>
                            <div class="category-cover2">
                                <ImageView :src="book.cover2"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="home-book-footer" v-if="showBtn">
            <van-button custom-class="home-book-btn" round @click="onMoreClick">{{btnText}}</van-button>
        </div>
    </div>
</template>
<script>
import {HOME_BOOK_MODE, CATEGORY} from '@/utils/const'
import ImageView from '@/components/base/ImageView'
export default {
    mounted() {
        
    },
    methods: {
        onMoreClick() {
            this.$emit('onMoreClick')
        },
        onBookClick() {
            this.$emit('onBookClick')
        }
    },
    components: {
        ImageView
    },
    props: {
        title: {
            type: String,
            default: ''
        },
        data: {
            type: Array,
            default: []
        },
        btnText: {
            type: String,
            default: ''
        },
        row: {
            type: Number,
            default: 1
        },
        col: {
            type: Number,
            default: 0
        },
        mode: {
            type: String,
            default: HOME_BOOK_MODE.ROW
        },
        showTitle: {
            type: Boolean,
            default: true
        },
        showBtn: {
            type: Boolean,
            default: false
        },
        linearBg: {
            type: Boolean,
            default: false
        }

    },
    computed: {
        HOME_BOOK_MODE() {
            return HOME_BOOK_MODE
        },
        bookData() {
            const {data, row, col} = this
            if(data && data.length > 0) {  //当有图书存在时
                data.forEach(book => {
                    book.text = CATEGORY[book.categoryText.toLowerCase()]
                })
                const _bookData = data.slice(0, row * col);   //所需展示图书数
                const _bookDataRow = []
                const _col = Number(col)
                let _row = 0;
                while(_row < row) {
                    _bookDataRow.push(_bookData.slice(_row * _col, _row * _col + _col))
                    _row ++
                }
                
                return _bookDataRow
            } else {
                return []
            }
        }
    },
}
</script>
<style lang="scss" scoped>
.home-book {
    .header {
        margin-top: 36px;
        padding-left: 20px;
        font-size: 21px;
        color: #212933;

    }
    .content {
        padding: 0 12px;
        margin-top: 22.5px;
        .row {
            display: flex;
            margin-top: 12.5px;
            .col {
                flex: 1;
                padding: 0 8px;
                box-sizing: border-box;
                .book-wrapper {
                    display: flex;
                    .book-title-wrapper {
                        &.book-title-col {
                            .book-title {
                                font-size: 12px;
                                line-height: 16.5px;
                                max-height: 33px;
                                color: #212731;
                            }
                        }
                        &.book-title-row {
                            display: flex;
                            flex: 0 0 50%;
                            flex-direction: column;
                            padding: 10px;
                            justify-content: space-between;
                            .book-title {
                                font-size: 14px;
                                color: #1f1f1f;
                                line-height: 18px;
                                max-height: 36px;
                            }
                            .book-author, .book-category {
                                font-size: 12px;
                                color: #868686;
                                line-height: 14px;
                                max-height: 14px;
                            }
                        } 
                        .book-des {
                            overflow: hidden;
                            word-break: break-word;
                        }  
                    }
                }
                .category-wrapper {
                    position: relative;
                    display: flex;
                    border-radius: 5px;
                    height: 96px;
                    background-color: #F8F9FB;
                    padding: 13px 0 0 16px;
                    box-sizing: border-box;
                    overflow: hidden;
                    .category-info {
                        display: flex;
                        flex-direction: column;
                        justify-content: space-between;
                    }
                    .category-text {
                        width: 80px;
                        overflow: hidden;
                        color: #212832;
                        font-size: 16px;
                        line-height: 22.5px;
                    }
                    .category-num {
                        font-size: 12px;
                        color: #868686;
                        line-height: 16.5px;
                        margin-bottom: 14.5px;
                    }
                    .category-img-wrapper {
                        position: absolute;
                        right: 0;
                        bottom: -5px;
                        .category-cover1 {
                            position: absolute;
                            right: 0;
                            bottom: 0;
                            width: 48px;
                            z-index: 3;
                        }
                        .category-cover2 {
                            position: absolute;
                            right: 25px;
                            bottom: 0;
                            width: 36px;
                            z-index: 2;
                        }

                    }
                }
            }
        }
    }
    .home-book-footer {
        margin-top: 12px;
        padding: 0 20px 20px;
    }
}
</style>
<style lang="scss">
@import '@/style/variables.scss';
.home-book-footer {
    .home-book-btn {
        width: 100%;
        color: $blueTextBtn;
        font-size: 14px;
        border: 1px solid #efefef;
    }
}
</style>