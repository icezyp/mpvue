<template>
    <div class="search-wrapper">
        <SearchBar
            @onClick="onSearchBarClick"
            @onConfirm="onConfirm"
            @onChange="onChange"
        />
        <TagGroup 
            :tag-array="hotSearch"
            header-title="热门搜索"
            btn-text="换一批"
        />
        <TagGroup 
            :tag-array="historySearch"
            header-title="搜索历史"
            btn-text="清空"
        />
        <SearchList/>
    </div>
</template>
<script>
import SearchBar from '@/components/SearchBar'
import TagGroup from '@/components/TagGroup'
import SearchList from '@/components/SearchList'
import {search} from '@/api/index'
import {HISTORY_SEARCH_KEY, OPEN_ID_KEY} from '@/utils/const'
export default {
    data() {
        return {
            hotSearch: null,
            hotSearchKey: null,
            historySearch: '',
            searchList: null,
            openId: '',
            page: 1,
            searchFocus: true,
            hotSearchWord: ''
        }
    },
    components: {
        SearchBar,
        TagGroup,
        SearchList
    },
    methods: {
        getHotSearch() {

        },
        //点击聚焦
        onSearchBarClick() {
            if(!this.searchFocus) {
                this.searchFocus = true
            }
        },
        //点击软键盘的确认
        onConfirm(keyword) {
            if(keyword.trim().length === 0) {

            }
        },
        //输入内容变化
        onChange(keyword) {

        },
        //部分搜索可不用openId（搜索和历史记录需要）
        onSearch(keyword, shouldOpendId = false) {
            const params = {keyword, page: this.page}
            if(shouldOpendId && this.openId) {

            }
        },
        init() {
            this.hotSearchWord = this.$route.query.hotSearch
            this.historySearch = getStorageSync(HISTORY_SEARCH_KEY) || ''
            this.openId = getStorageSync(OPEN_ID_KEY) || ''
            this.page = 1
            this.searchList = null
            this.searchFocus = true
            this.getHotSearch()
        }
    },
    mounted() {
        this.init()
    }
}
</script>
<style lang="scss" scoped>

</style>