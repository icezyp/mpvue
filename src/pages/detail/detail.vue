<template>
    <div class="detail-wrapper">
        <DetailBook :book="book"/>
		<Statistic 
			:readers="readers"
			:reader-num="readerNum"
			:rank-num="rankNum"
			:rank-avg="rankAvg"
		/>
		<BookRate
			:rate-value="rateValue"
			@onRateChange="onRateChange"
		/>
		<DetailContent 
			:contents="contents"
			@readBook="readBook"	
		/>
		<DetailBottom 
			@handleShelf="handleShelf"
			@readBook="readBook" 
			:isInShelf="isInShelf"
		/>
    </div>
</template>
<script>
import DetailBook from '@/components/DetailBook'
import Statistic from '@/components/Statistic'
import BookRate from '@/components/BookRate'
import DetailContent from '@/components/DetailContent'
import DetailBottom from '@/components/DetailBottom'
import {getDetail, getBookContent, getShelfState, saveRate, addShelf, removeShelf} from '@/api/index'
import {getStorageSync, showToast} from '@/api/wechat'
import {OPEN_ID_KEY} from '@/utils/const'
export default {
    data() {
        return {
            book: {},
			contents: [],
			openId: '',
			fileName: '',
			isInShelf: false
        }
    },
    components: {
		DetailBook,
		Statistic,
		BookRate,
		DetailContent,
		DetailBottom
	},
	computed: {
		readers() {
			return this.book && this.book.readers || []
		},
		readerNum() {
			return this.book && this.book.readerNum || 0
		},
		rankNum() {
			return this.book && this.book.rankNum || 0
		},
		rankAvg() {
			return this.book && this.book.rankAvg || 0
		},
		rateValue() {
			return this.book && this.book.rank || 0
		}
	},
	methods: {
		onRateChange(val) {
			saveRate({
				fileName: this.fileName,
				openId: this.openId,
				rank: val
			}).then(res => {
				if(res.data.error_code === 0) {
					showToast(res.data.msg, 'success')
				}
			})
		},
		//书本加入|移出书架
		handleShelf() {
			let shelf = JSON.stringify({
					fileName: this.fileName, 
					openId: this.openId
				})
			//移出书架
			if(this.isInShelf) {
				removeShelf({shelf}).then(res => {
					if(res.data.error_code === 0) {
						this.isInShelf = false
						showToast(res.data.msg, 'success')
					}
				})
			} else {
				addShelf({shelf}).then(res => {
					if(res.data.error_code === 0) {
						this.isInShelf = true
						showToast(res.data.msg, 'success')
					}
				})
			}
		},
		readBook(href) {
			console.log(href)
		},
		//获取图书详情
		getDetail() {
			getDetail({
				fileName: this.fileName, 
				openId: this.openId
			}).then(res => {
				this.book = res.data.data
			})
		},
		//获取书架状态
		getShelfState() {
			getShelfState({
				fileName: this.fileName, 
				openId: this.openId
			}).then(res => {
				this.isInShelf = res.data.data.length
			})
		},
		//获取目录
		getContent() {
			getBookContent({fileName: this.fileName}).then(res=>{
				this.contents = res.data.data
			})
		},
		//初始化
		init() {
			this.fileName = this.$route.query.fileName
			this.openId = getStorageSync(OPEN_ID_KEY) || ''
			this.getDetail()
			this.getContent()
			this.getShelfState()
		}
	},
	mounted() {
		this.init()
	}
}
</script>