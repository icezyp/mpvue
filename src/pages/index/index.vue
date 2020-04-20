<template>
    <div class="home">
        <div v-if="isAuth">
            <SearchBar 
                disabled
                @onClick="onSearchBarClick"
                :hot-search="hotSearch"
            />
            <HomeCard 
                :data="homeCard"
                @onBookClick="onBookClick"
            />
            <HomeBanner
                :img="banner.img"
                :title="banner.title"
                :subTitle="banner.subTitle"
                @onClick="onBannerClick"
            />
            <div>
                <HomeBook 
                    title="为你推荐"
                    row="1"
                    col="3"
                    mode="col"
                    btnText="换一批"
                    showBtn=true
                    :data="recommend"
                    @onMoreClick="changeBooks('recommend')"
                    @onBookClick="onBookClick"
                />
            </div>
            <div>
                <HomeBook 
                    title="免费阅读"
                    row="2"
                    col="2"
                    mode="col"
                    btnText="换一批"
                    showBtn=true
                    :data="freeRead"
                    @onMoreClick="changeBooks('freeRead')"
                    @onBookClick="onBookClick"
                />
            </div>
            <div>
                <HomeBook 
                    title="当前最热"
                    row="1"
                    col="4"
                    mode="col"
                    btnText="换一批"
                    showBtn=true
                    :data="hotBook"
                    @onMoreClick="changeBooks('hotBook')"
                    @onBookClick="onBookClick"
                />
            </div>
            <div>
                <HomeBook 
                    title="分类"
                    row="3"
                    col="2"
                    mode="category"
                    btnText="换一批"
                    showBtn=true
                    :data="category"
                    @onMoreClick="changeBooks('category')"
                    @onBookClick="onBookClick"
                />
            </div>
        </div>
        <Auth @getUserInfo="init" v-if="!isAuth"/>
    </div>
</template>
<script>
import SearchBar from '@/components/SearchBar'
import HomeCard from '@/components/HomeCard'
import HomeBanner from '@/components/HomeBanner'
import HomeBook from '@/components/HomeBook'
import Auth from '@/components/auth/Auth'
import {USER_INFO, OPEN_ID_KEY} from '@/utils/const'
import {getHomeData, recommend, freeRead, hotBook, category, register} from '@/api/index'
import {getSetting, getUserInfo, setStorageSync, getStorageSync, getUserOpenId, showLoading, hideLoading} from '@/api/wechat'
export default {
    data() {
        return{
            hotSearch: '',
            shelf: [],
            banner: {},
            recommend: [],
            freeRead: [],
            hotBook: [],
            category: [],
            homeCard: {},
            isAuth: true
        }
    },
    components: {
        SearchBar,
        HomeCard,
        HomeBanner,
        HomeBook,
        Auth
    },
    mounted() {
        this.init()
    },
    methods: {
        getHomeData(openId, userInfo) {
            getHomeData({openId}).then(res => {
                let {
                    hotSearch: {
                        keyword
                    },
                    shelf,
                    banner,
                    recommend,
                    freeRead,
                    hotBook,
                    category,
                    shelfCount
                } = res.data.data
                this.hotSearch = keyword
                this.shelf = shelf
                this.banner = banner
                this.recommend = recommend
                this.freeRead = freeRead
                this.hotBook = hotBook
                this.category = category
                this.homeCard = {
                    bookList: shelf, 
                    num: shelfCount, 
                    userInfo
                }
                hideLoading()
            }).catch(err => {
                hideLoading()
            })
        },
        onSearchBarClick() {
            this.$router.push({
                path: '/pages/search/main',
                query: {
                    hotSearch: this.hotSearch || ''
                }
            })
        },
        onBannerClick() {
            console.log('banner click...')
        },
        onMoreClick() {
            console.log('more book...')
        },
        onBookClick(book) {
            const {fileName} = book
            this.$router.push({
                path: '/pages/detail/main',
                query: {
                    fileName: fileName || ''
                }
            })
        },
        //点击换一换
        changeBooks(key) {
            switch(key) {
                case 'recommend': 
                    recommend().then(res => {
                        this.recommend = res.data.data
                    })
                    break;
                case 'freeRead':
                    freeRead().then(res => {
                        this.freeRead = res.data.data
                    })
                    break
                case 'hotBook':
                    hotBook().then(res => {
                        this.hotBook = res.data.data
                    })
                    break;
                case 'category':
                    category().then(res => {
                        this.category = res.data.data
                    })
                    break;
            }
        },
        //获取用户信息
        getUserInfo() {
            const getHomeDataAfterGetOpenId = (openId, userInfo) => {
                this.getHomeData(openId, userInfo)
                register(openId, userInfo).then(res => {
                    console.log(res)
                })
            }
            getUserInfo(
                (userInfo) => {
                    setStorageSync(USER_INFO,  userInfo)
                    const openId = getStorageSync(OPEN_ID_KEY)
                    if(!openId) {
                        getUserOpenId(openId => getHomeDataAfterGetOpenId(openId, userInfo))
                    } else {
                        getHomeDataAfterGetOpenId(openId, userInfo)
                    }
                },
                () => {
                    console.log('failed...')
                }
            )
        },
        getSetting() {
            getSetting(
                'userInfo', 
                () => {
                    this.isAuth = true
                    showLoading('正在加载')
                    this.getUserInfo()
                },
                () => {
                    this.isAuth = false
                }
            )
        },
        init() {
            this.getSetting()
        }
    }
}
</script>
<style lang="scss" scoped>
</style>
