<template>
    <div class="detail-wrapper">
        <DetailBook :book="book"/>
    </div>
</template>
<script>
import DetailBook from '@/components/DetailBook'
export default {
    data() {
        return {
            book: {
		"id": 111,
		"fileName": "2015_Book_ContemporaryBioethics",
		"cover": "https://www.youbaobao.xyz/book/res/img//Biomedicine/2015_Book_ContemporaryBioethics.jpeg",
		"title": "Contemporary Bioethics",
		"author": "Mohammed Ali Al-Bar and Hassan Chamsi-Pasha",
		"publisher": "Springer International Publishing, Cham",
		"bookId": "2015_Book_ContemporaryBioethics",
		"category": 12,
		"categoryText": "Biomedicine",
		"language": "en",
		"rootFile": "OEBPS/content.opf",
		"selected": false,
		"private": false,
		"cache": false,
		"haveRead": 0,
		"opf": "https://www.youbaobao.xyz/epub2/2015_Book_ContemporaryBioethics/OEBPS/content.opf",
		"readers": [{
			"avatarUrl": "https://wx.qlogo.cn/xxx",
			"nickName": "xxx",
			"create_dt": 1560081154139
		}],
		"readerNum": 13,
		"rank": 2,
		"rankNum": 2,
		"rankAvg": 3
	}
        }
    },
    components: {
        DetailBook
    }
}
</script>