<template>
    <div class="search-wrapper">
        <SearchBar
            @onClick="onSearchBarClick"
            @onConfirm="onConfirm"
            @onChange="onChange"
            @onClear="clearKeyword"
            :hot-search="hotSearchKeyword"
            :focus="searchFocus"
            ref="searchBar"
        />
        <TagGroup 
            :tag-array="hotSearchArray"
            header-title="热门搜索"
            btn-text="换一批"
            @onGroupBtnClick="changeHotSearch"
            @onTagClick="onTagClick"
            v-if="hotSearchArray && hotSearchArray.length > 0 && !showList"
        />
        <TagGroup 
            :tag-array="historySearch"
            header-title="搜索历史"
            btn-text="清空"
            @onGroupBtnClick="clearHistory"
            @onTagClick="onTagClick"
            v-if="historySearch && historySearch.length > 0 && !showList"
        />
        <SearchList
            :data="searchList"
            v-if="showList"
            @onBookClick="onBookClick"
        />
    </div>
</template>
<script>
import SearchBar from '@/components/SearchBar'
import TagGroup from '@/components/TagGroup'
import SearchList from '@/components/SearchList'
import {search, hotSearch} from '@/api/index'
import {HISTORY_SEARCH_KEY, OPEN_ID_KEY} from '@/utils/const'
import {setStorageSync, getStorageSync, showLoading, hideLoading, showToast} from '@/api/wechat'
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
        //清除搜索关键词
        clearKeyword() {
            this.searchList = {}
        },
        //获取搜索热词
        getHotSearch() {
            hotSearch().then(res => {
                this.hotSearch = res.data.data
            })
        },
        //点击书籍
        onBookClick(book) {
            const {fileName} = book
            this.$router.push({
                path: '/pages/detail/main',
                query: {
                    fileName: fileName || ''
                }
            })
        },
        //点击聚焦
        onSearchBarClick() {
            if(!this.searchFocus) {
                this.searchFocus = true
            }
        },
        // 点击标签内容
        onTagClick(keyword) {
            this.$refs.searchBar.setValue(keyword)
            this.setHistoryToStorage(keyword)
            this.searchFocus = false
            this.onSearch(keyword, true)
        },
        //点击软键盘的确认
        onConfirm(keyword) {
            if(!keyword || keyword.trim().length === 0) {
                //从首页会传入一个搜索热词，当点击软键盘的完成按钮进行搜索时，若输入框的内容为空，则使用热词为关键词进行搜索
                if(this.hotSearchKeyword && this.hotSearchKeyword.length > 0) {
                    //设置输入框的内容
                    this.$refs.searchBar.setValue(this.hotSearchKeyword)
                    keyword = this.hotSearchKeyword
                } else {
                    return
                }
            }
            this.setHistoryToStorage(keyword)
            this.searchFocus = false
            this.onSearch(keyword, true)
        },
        //存入历史，需要去重
        setHistoryToStorage(keyword) {
            if(!this.historySearch.includes(keyword)) {
                this.historySearch.push(keyword)
                setStorageSync(HISTORY_SEARCH_KEY, this.historySearch)
            }
        },
        //输入内容变化
        onChange(keyword) {
            if(!keyword || keyword.trim().length === 0) {
                this.searchList = {}
                return
            }
            //初始化page
            this.page = 1
            this.onSearch(keyword)
        },
        //部分搜索可不用openId（搜索和历史记录需要）
        onSearch(keyword, shouldOpendId = false) {
            const params = {keyword, page: this.page}
            if(shouldOpendId && this.openId) {
                params.openId = this.openId
            }
            search(params).then(res => {
                this.searchList = res.data.data
            })
        },
        //热门搜索点击换一批
        changeHotSearch() {
            this.getHotSearch()
        },
        //清空历史
        clearHistory() {
            this.historySearch = []
            setStorageSync(HISTORY_SEARCH_KEY, this.historySearch)
        },
        //初始化
        init() {
            this.hotSearchKeyword = this.$route.query.hotSearch
            this.historySearch = getStorageSync(HISTORY_SEARCH_KEY) || []
            this.openId = getStorageSync(OPEN_ID_KEY) || ''
            this.page = 1
            this.searchList = {}
            this.getHotSearch()
            //清空输入框内容
            this.$refs.searchBar.setValue('')
            //聚焦
            this.searchFocus = true
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
            return _hotSearch
        }
    },
    onPageScroll() {
        if(this.searchFocus){
            this.searchFocus = false
        }
    },
    onReachBottom() {
        if(this.showList) {
            this.page++
            const searchWord = this.$refs.searchBar.getValue()
            search({
                keyword: searchWord,
                page: this.page,
                pageSize: 20
            }).then(res => {
                const {book} = res.data.data
                if(book && book.length > 0) {
                    this.searchList.book.push(...book)
                } else {
                    showToast('没有更多数据')
                }
            })
        }
    }
}
</script>
<style lang="scss" scoped>

</style>