import {get, post} from '@/utils/request'
import {APP_ID, APP_SECRET} from '@/utils/const'

const API_URL = 'https://test.youbaobao.xyz:18081'

//首页参数
export function getHomeData(params) {
    return get(`${API_URL}/book/home/v2`, params)
}

//推荐
export function recommend() {
    return get(`${API_URL}/book/home/recommend/v2`)
}

//免费阅读
export function freeRead() {
    return get(`${API_URL}/book/home/freeRead/v2`)
}

//热门
export function hotBook() {
    return get(`${API_URL}/book/home/hotBook/v2`)
}

//分类
export function category() {
    return get(`${API_URL}/book/category/list/v2`)
}

//获取openId
export function getOpenId(code) {
    return get(`${API_URL}/openId/get`, {
        appId: APP_ID,
        code,
        secret: APP_SECRET
    })
}

//用户注册
export function register(openId, userInfo) {
    return post(`${API_URL}/user/register`, {
        openId,
        ...userInfo,
        platform: mpvuePlatform
    })
}

//关键词搜索
export function search(params) {
    if(params.keyword) {
        params.keyword = encodeURIComponent(params.keyword)
    }
    params.pageSize = params.pageSize || 20
    params.page = params.page || 1
    return get(`${API_URL}/book/search`, params)
}

//热门搜索
export function hotSearch() {
    return get(`${API_URL}/book/hot-search`)
}

//获取图书详情
export function getDetail(params) {
    return get(`${API_URL}/book/detail`, params)
}

//获取图书目录
export function getBookContent(params) {
    return get(`${API_URL}/book/contents`, params)
}

//获取图书存储书架状态
export function getShelfState(params) {
    return get(`${API_URL}/book/shelf/get`, params)
}

//图书评分
export function saveRate(params) {
    return get(`${API_URL}/book/rank/save`, params)
}

//加入书架
export function addShelf(params) {
    return get(`${API_URL}/book/shelf/save`, params)
}

//移出书架
export function removeShelf(params) {
    return get(`${API_URL}/book/shelf/remove`, params)
}

//获取书架列表
export function getShelfList(params) {
    return get(`${API_URL}/book/shelf/get`, params)
}

//获取用户加入天数
export function getUserDay(params) {
    return get(`${API_URL}/user/day`, params)
}

//获取分类列表
export function getCategoryList(){
    return get(`${API_URL}/book/category/list/v2`)
}

//获取图书列表
export function getBookList(params){
    return get(`${API_URL}/book/search-list`, params)
}