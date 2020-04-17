<template>
    <div class="search-wrapper">
        <SearchBar
            @onClick="onSearchBarClick"
            @onConfirm="onConfirm"
            @onChange="onChange"
            @onClear="clearKeyword"
            :hot-search="hotSearchKeyword"
        />
        <TagGroup 
            :tag-array="hotSearchArray"
            header-title="热门搜索"
            btn-text="换一批"
            v-if="hotSearchArray && hotSearchArray.length > 0 && !showList"
        />
        <TagGroup 
            :tag-array="historySearch"
            header-title="搜索历史"
            btn-text="清空"
            v-if="historySearch && historySearch.length > 0 && !showList"
        />
        <SearchList
            :data="searchList"
            v-if="showList"
        />
    </div>
</template>
<script>
import SearchBar from '@/components/SearchBar'
import TagGroup from '@/components/TagGroup'
import SearchList from '@/components/SearchList'
import {search, hotSearch} from '@/api/index'
import {HISTORY_SEARCH_KEY, OPEN_ID_KEY} from '@/utils/const'
import {setStorageSync, getStorageSync, showLoading, hideLoading} from '@/api/wechat'
export default {
    data() {
        return {
            hotSearch: [],
            hotSearchKeyword: '',
            historySearch: [],
            searchList: {},
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
        clearKeyword() {
            this.searchList = {}
        },
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
            if(!keyword || keyword.trim().length === 0) {

            }
        },
        //输入内容变化
        onChange(keyword) {
            if(!keyword || keyword.trim().length === 0) {
                return
            }
            this.onSearch(keyword)
        },
        //部分搜索可不用openId（搜索和历史记录需要）
        onSearch(keyword, shouldOpendId = false) {
            const params = {keyword, page: this.page}
            if(shouldOpendId && this.openId) {
                params.openId = this.openId
            }
            search(params).then(res => {
                console.log(res.data.data)
                this.searchList = res.data.data
            })
        },
        init() {
            this.hotSearchKeyword = this.$route.query.hotSearch
            this.historySearch = getStorageSync(HISTORY_SEARCH_KEY) || ''
            this.openId = getStorageSync(OPEN_ID_KEY) || ''
            this.page = 1
            this.searchList = null
            this.searchFocus = true
            this.getHotSearch()
            hotSearch().then(res => {
                console.log(res.data.data)
            })
        }
    },
    mounted() {
        this.init()
    },
    computed: {
        showList() {
            const keys = Object.keys(this.searchList)
            return keys.length > 0
        },
        hotSearchArray() {
            const _hotSearch = []
            this.hotSearch.forEach(obj => _hotSearch.push(obj.title))
        }
    }
}
</script>
<style lang="scss" scoped>

</style>