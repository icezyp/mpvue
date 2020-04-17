import {getOpenId} from './index'
import {OPEN_ID_KEY} from '@/utils/const'
//获取授权
export function getSetting(auth, onSuccess, onFailed) {
    mpvue.getSetting({
        success(res){
            if(res.authSetting[`scope.${auth}`]){
                onSuccess(res)
            } else {
                onFailed(res)
            }
        },
        fail(err) {
            console.log(err) //抛出异常
        }
    })
}

//获取用户信息
export function getUserInfo(onSuccess, onFailed) {
    mpvue.getUserInfo({
        success(res) {
            const {userInfo} = res
            if(userInfo) {
                onSuccess(userInfo)
            } else {
                onFailed(res)
            }
        },
        fail(err) {
            console.log(err) //抛出异常
        }
    })
}

//存储
export function setStorageSync(key, value) {
    mpvue.setStorageSync(key, value)
}

//获取本地存储
export function getStorageSync(key) {
    return mpvue.getStorageSync(key)
}

//获取openId
export function getUserOpenId(callback) {
    mpvue.login({
        success(res) {
            if(res.code) {
                const {code} = res
                getOpenId(code).then(res => {
                    const {data : {data: {openid}}} = res
                    //将openId存入storage中
                    setStorageSync(OPEN_ID_KEY, openid)
                    //成功的回调
                    callback && callback(openid)
                }).catch(err => {
                    console.log(err)//抛出异常
                })
            } else {
                console.log(res)//抛出异常
            }
        },
        fail(err) {
            console.log(err) //抛出异常
        }
    })
}

//显示加载框
export function showLoading(title) {
    mpvue.showLoading({
        title,
        mask: true
    })
}

//隐藏加载框
export function hideLoading() {
    mpvue.hideLoading()
}