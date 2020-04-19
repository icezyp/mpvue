import {showToast} from '@/api/wechat'

function createFly () {
    if(mpvuePlatform === 'wx') {
        const Fly = require('flyio/dist/npm/wx')
        return new Fly()
    }
    return null
}

function handleError (err) {
    console.log(err)
}

export function get (url, params = {}, showToast = true) {
    const fly = createFly()
    if(fly) {
        return new Promise((resolve, reject) => {
            fly.get(url, params).then(response => {
                if(response && response.data && response.data.error_code === 0) {
                    resolve(response)
                } else {
                    if(showToast) {
                        let msg = response && response.data && response.data.msg || '请求失败'
                        showToast(msg)
                    }
                    reject(response)
                }
            }).catch(err => {
                handleError(err);
                reject(err)
            })
        })
    }
}

export function post (url, params = {}, showToast = true) {
    const fly = createFly()
    if(fly) {
        return new Promise((resolve, reject) => {
            fly.post(url, params).then(response => {
                if(response && response.data && response.data.error_code === 0) {
                    resolve(response)
                } else {
                    if(showToast) {
                        let msg = response && response.data && response.data.msg || '请求失败'
                        showToast(msg)
                    }
                    reject(response)
                }
            }).catch(err => {
                handleError(err)
                reject(err)
            })
        })
    }
}