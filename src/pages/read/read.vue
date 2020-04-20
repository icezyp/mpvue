<template>
    <web-view :src="url"></web-view>
</template>
<script>
export default {
    data() {
        return {
            fileName: '',
            opf: '',
            navigation: '',
            url: ''
        }
    },
    mounted() {
        this.fileName = this.$route.query.fileName
        this.opf = this.$route.query.opf
        this.href = this.$route.query.href
        let _url = 'https://www.youbaobao.xyz/book/#/ebook'
        if(this.fileName) {
            _url = `${_url}?fileName=${this.fileName}`
        }
        if(this.opf) {
            _url = `${_url}${this.fileName ? '&' : '?'}opf=${this.opf}`
        }
        if(this.navigation) {
            _url = `${_url}${this.fileName || this.opf ? '&' : '?'}opf=${this.navigation}`
        } 
        console.log(_url)
        this.url = _url
    }
}
</script>