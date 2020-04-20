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
		<DetailBottom @readBook="readBook" />
    </div>
</template>
<script>
import DetailBook from '@/components/DetailBook'
import Statistic from '@/components/Statistic'
import BookRate from '@/components/BookRate'
import DetailContent from '@/components/DetailContent'
import DetailBottom from '@/components/DetailBottom'
export default {
    data() {
        return {
            book: {
				"id": 111,
				"fileName": "2015_Book_ContemporaryBioethics",
				"cover": "https://www.youbaobao.xyz/book/res/img//Biomedicine/2015_Book_ContemporaryBioethics.jpeg",
				"title": "Contemporary BioethicsBioethicsBioethicsBioethicsBioethicsBioethics",
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
					"avatarUrl": "https://wx.qlogo.cn/mmopen/vi_32/p70bVPxpyfekJNlia5VxLk4pSpiaLACKUbMEnrPhY5cHkvZEfFHPALUPd3k5NIf8eFMArf5ptj95NC0EI76EmHzA/132",
					"nickName": "向阳",
					"create_dt": 1560081154139
				},{
				"avatarUrl": "https://wx.qlogo.cn/mmopen/vi_32/tqibyt4aFmy42nFVuN79ZTUSLZE60LibEO4dVbI3A76En0qJxHMHy8B1XLck4EJjToXwTnz2UngF5f5uadh3ibgIw/132",
				"nickName": "ui设计web前端",
				"create_dt": 1581699891465
				},{
				"avatarUrl": "https://wx.qlogo.cn/mmopen/vi_32/tqibyt4aFmy42nFVuN79ZTUSLZE60LibEO4dVbI3A76En0qJxHMHy8B1XLck4EJjToXwTnz2UngF5f5uadh3ibgIw/132",
				"nickName": "ui设计web前端",
				"create_dt": 1581699891465
				},{
				"avatarUrl": "https://wx.qlogo.cn/mmopen/vi_32/tqibyt4aFmy42nFVuN79ZTUSLZE60LibEO4dVbI3A76En0qJxHMHy8B1XLck4EJjToXwTnz2UngF5f5uadh3ibgIw/132",
				"nickName": "ui设计web前端",
				"create_dt": 1581699891465
				},{
				"avatarUrl": "https://wx.qlogo.cn/mmopen/vi_32/tqibyt4aFmy42nFVuN79ZTUSLZE60LibEO4dVbI3A76En0qJxHMHy8B1XLck4EJjToXwTnz2UngF5f5uadh3ibgIw/132",
				"nickName": "ui设计web前端",
				"create_dt": 1581699891465
				},{
				"avatarUrl": "https://wx.qlogo.cn/mmopen/vi_32/tqibyt4aFmy42nFVuN79ZTUSLZE60LibEO4dVbI3A76En0qJxHMHy8B1XLck4EJjToXwTnz2UngF5f5uadh3ibgIw/132",
				"nickName": "ui设计web前端",
				"create_dt": 1581699891465
				},{
				"avatarUrl": "https://wx.qlogo.cn/mmopen/vi_32/tqibyt4aFmy42nFVuN79ZTUSLZE60LibEO4dVbI3A76En0qJxHMHy8B1XLck4EJjToXwTnz2UngF5f5uadh3ibgIw/132",
				"nickName": "ui设计web前端",
				"create_dt": 1581699891465
				},{
				"avatarUrl": "https://wx.qlogo.cn/mmopen/vi_32/tqibyt4aFmy42nFVuN79ZTUSLZE60LibEO4dVbI3A76En0qJxHMHy8B1XLck4EJjToXwTnz2UngF5f5uadh3ibgIw/132",
				"nickName": "ui设计web前端",
				"create_dt": 1581699891465
				},{
				"avatarUrl": "https://wx.qlogo.cn/mmopen/vi_32/tqibyt4aFmy42nFVuN79ZTUSLZE60LibEO4dVbI3A76En0qJxHMHy8B1XLck4EJjToXwTnz2UngF5f5uadh3ibgIw/132",
				"nickName": "ui设计web前端",
				"create_dt": 1581699891465
				},{
				"avatarUrl": "https://wx.qlogo.cn/mmopen/vi_32/tqibyt4aFmy42nFVuN79ZTUSLZE60LibEO4dVbI3A76En0qJxHMHy8B1XLck4EJjToXwTnz2UngF5f5uadh3ibgIw/132",
				"nickName": "ui设计web前端",
				"create_dt": 1581699891465
				},{
				"avatarUrl": "https://wx.qlogo.cn/mmopen/vi_32/tqibyt4aFmy42nFVuN79ZTUSLZE60LibEO4dVbI3A76En0qJxHMHy8B1XLck4EJjToXwTnz2UngF5f5uadh3ibgIw/132",
				"nickName": "ui设计web前端",
				"create_dt": 1581699891465
				},{
				"avatarUrl": "https://wx.qlogo.cn/mmopen/vi_32/tqibyt4aFmy42nFVuN79ZTUSLZE60LibEO4dVbI3A76En0qJxHMHy8B1XLck4EJjToXwTnz2UngF5f5uadh3ibgIw/132",
				"nickName": "ui设计web前端",
				"create_dt": 1581699891465
				},{
				"avatarUrl": "https://wx.qlogo.cn/mmopen/vi_32/tqibyt4aFmy42nFVuN79ZTUSLZE60LibEO4dVbI3A76En0qJxHMHy8B1XLck4EJjToXwTnz2UngF5f5uadh3ibgIw/132",
				"nickName": "ui设计web前端",
				"create_dt": 1581699891465
				},{
				"avatarUrl": "https://wx.qlogo.cn/mmopen/vi_32/tqibyt4aFmy42nFVuN79ZTUSLZE60LibEO4dVbI3A76En0qJxHMHy8B1XLck4EJjToXwTnz2UngF5f5uadh3ibgIw/132",
				"nickName": "ui设计web前端",
				"create_dt": 1581699891465
				},{
				"avatarUrl": "https://wx.qlogo.cn/mmopen/vi_32/tqibyt4aFmy42nFVuN79ZTUSLZE60LibEO4dVbI3A76En0qJxHMHy8B1XLck4EJjToXwTnz2UngF5f5uadh3ibgIw/132",
				"nickName": "ui设计web前端",
				"create_dt": 1581699891465
				},{
				"avatarUrl": "https://wx.qlogo.cn/mmopen/vi_32/tqibyt4aFmy42nFVuN79ZTUSLZE60LibEO4dVbI3A76En0qJxHMHy8B1XLck4EJjToXwTnz2UngF5f5uadh3ibgIw/132",
				"nickName": "ui设计web前端",
				"create_dt": 1581699891465
				},{
				"avatarUrl": "https://wx.qlogo.cn/mmopen/vi_32/tqibyt4aFmy42nFVuN79ZTUSLZE60LibEO4dVbI3A76En0qJxHMHy8B1XLck4EJjToXwTnz2UngF5f5uadh3ibgIw/132",
				"nickName": "ui设计web前端",
				"create_dt": 1581699891465
				},{
				"avatarUrl": "https://wx.qlogo.cn/mmopen/vi_32/tqibyt4aFmy42nFVuN79ZTUSLZE60LibEO4dVbI3A76En0qJxHMHy8B1XLck4EJjToXwTnz2UngF5f5uadh3ibgIw/132",
				"nickName": "ui设计web前端",
				"create_dt": 1581699891465
				},{
				"avatarUrl": "https://wx.qlogo.cn/mmopen/vi_32/tqibyt4aFmy42nFVuN79ZTUSLZE60LibEO4dVbI3A76En0qJxHMHy8B1XLck4EJjToXwTnz2UngF5f5uadh3ibgIw/132",
				"nickName": "ui设计web前端",
				"create_dt": 1581699891465
				},{
				"avatarUrl": "https://wx.qlogo.cn/mmopen/vi_32/tqibyt4aFmy42nFVuN79ZTUSLZE60LibEO4dVbI3A76En0qJxHMHy8B1XLck4EJjToXwTnz2UngF5f5uadh3ibgIw/132",
				"nickName": "ui设计web前端",
				"create_dt": 1581699891465
				},{
				"avatarUrl": "https://wx.qlogo.cn/mmopen/vi_32/tqibyt4aFmy42nFVuN79ZTUSLZE60LibEO4dVbI3A76En0qJxHMHy8B1XLck4EJjToXwTnz2UngF5f5uadh3ibgIw/132",
				"nickName": "ui设计web前端",
				"create_dt": 1581699891465
				}],
				"readerNum": 13,
				"rank": 2,
				"rankNum": 2,
				"rankAvg": 3
			},
			contents: [
				{
					"fileName": "2015_Book_ContemporaryBioethics",
					"id": "ACoverHTML",
					"href": "OEBPS/ACoverHTML.html",
					"order": 1,
					"level": 0,
					"text": "http://book.youbaobao.xyz/epub2/2015_Book_ContemporaryBioethics/OEBPS/ACoverHTML.html",
					"label": "Cover",
					"pid": "",
					"navId": "navpoint-1"
				},
				{
					"fileName": "2015_Book_ContemporaryBioethics",
					"id": "A328177_1_En_BookFrontmatter_OnlinePDF",
					"href": "OEBPS/A328177_1_En_BookFrontmatter_OnlinePDF.html",
					"order": 2,
					"level": 0,
					"text": "http://book.youbaobao.xyz/epub2/2015_Book_ContemporaryBioethics/OEBPS/A328177_1_En_BookFrontmatter_OnlinePDF.html",
					"label": "Frontmatter",
					"pid": "",
					"navId": "navpoint-2"
				},
				{
					"fileName": "2015_Book_ContemporaryBioethics",
					"id": "A328177_1_En_1_ChapterPart1",
					"href": "OEBPS/A328177_1_En_1_ChapterPart1.html",
					"order": 3,
					"level": 0,
					"text": "http://book.youbaobao.xyz/epub2/2015_Book_ContemporaryBioethics/OEBPS/A328177_1_En_1_ChapterPart1.html",
					"label": "1. Introductory Chapters",
					"pid": "",
					"navId": "navpoint-3"
				},
				{
					"fileName": "2015_Book_ContemporaryBioethics",
					"id": "A328177_1_En_1_Chapter",
					"href": "OEBPS/A328177_1_En_1_Chapter.html",
					"order": 4,
					"level": 1,
					"text": "http://book.youbaobao.xyz/epub2/2015_Book_ContemporaryBioethics/OEBPS/A328177_1_En_1_Chapter.html",
					"label": "1. Introduction",
					"pid": "navpoint-3",
					"navId": "navpoint-4"
				},
				{
					"fileName": "2015_Book_ContemporaryBioethics",
					"id": "A328177_1_En_2_Chapter",
					"href": "OEBPS/A328177_1_En_2_Chapter.html",
					"order": 5,
					"level": 1,
					"text": "http://book.youbaobao.xyz/epub2/2015_Book_ContemporaryBioethics/OEBPS/A328177_1_En_2_Chapter.html",
					"label": "2. The Sources of Common Principles of Morality and Ethics in Islam",
					"pid": "navpoint-3",
					"navId": "navpoint-5"
				},
				{
					"fileName": "2015_Book_ContemporaryBioethics",
					"id": "A328177_1_En_3_Chapter",
					"href": "OEBPS/A328177_1_En_3_Chapter.html",
					"order": 6,
					"level": 1,
					"text": "http://book.youbaobao.xyz/epub2/2015_Book_ContemporaryBioethics/OEBPS/A328177_1_En_3_Chapter.html",
					"label": "3. The Origins of Islamic Morality and Ethics",
					"pid": "navpoint-3",
					"navId": "navpoint-6"
				},
				{
					"fileName": "2015_Book_ContemporaryBioethics",
					"id": "A328177_1_En_4_Chapter",
					"href": "OEBPS/A328177_1_En_4_Chapter.html",
					"order": 7,
					"level": 1,
					"text": "http://book.youbaobao.xyz/epub2/2015_Book_ContemporaryBioethics/OEBPS/A328177_1_En_4_Chapter.html",
					"label": "4. Virtue Ethics and Moral Character Related to Medical Profession",
					"pid": "navpoint-3",
					"navId": "navpoint-7"
				},
				{
					"fileName": "2015_Book_ContemporaryBioethics",
					"id": "A328177_1_En_5_Chapter",
					"href": "OEBPS/A328177_1_En_5_Chapter.html",
					"order": 8,
					"level": 1,
					"text": "http://book.youbaobao.xyz/epub2/2015_Book_ContemporaryBioethics/OEBPS/A328177_1_En_5_Chapter.html",
					"label": "5. Regulation of Medical Profession and Medical Research",
					"pid": "navpoint-3",
					"navId": "navpoint-8"
				},
				{
					"fileName": "2015_Book_ContemporaryBioethics",
					"id": "A328177_1_En_6_ChapterPart2",
					"href": "OEBPS/A328177_1_En_6_ChapterPart2.html",
					"order": 9,
					"level": 0,
					"text": "http://book.youbaobao.xyz/epub2/2015_Book_ContemporaryBioethics/OEBPS/A328177_1_En_6_ChapterPart2.html",
					"label": "2. The Four Principles of Biomedical Ethics with an Islamic Perspective",
					"pid": "",
					"navId": "navpoint-9"
				},
				{
					"fileName": "2015_Book_ContemporaryBioethics",
					"id": "A328177_1_En_6_Chapter",
					"href": "OEBPS/A328177_1_En_6_Chapter.html",
					"order": 10,
					"level": 1,
					"text": "http://book.youbaobao.xyz/epub2/2015_Book_ContemporaryBioethics/OEBPS/A328177_1_En_6_Chapter.html",
					"label": "6. Autonomy",
					"pid": "navpoint-9",
					"navId": "navpoint-10"
				},
				{
					"fileName": "2015_Book_ContemporaryBioethics",
					"id": "A328177_1_En_7_Chapter",
					"href": "OEBPS/A328177_1_En_7_Chapter.html",
					"order": 11,
					"level": 1,
					"text": "http://book.youbaobao.xyz/epub2/2015_Book_ContemporaryBioethics/OEBPS/A328177_1_En_7_Chapter.html",
					"label": "7. Nonmaleficence",
					"pid": "navpoint-9",
					"navId": "navpoint-11"
				},
				{
					"fileName": "2015_Book_ContemporaryBioethics",
					"id": "A328177_1_En_8_Chapter",
					"href": "OEBPS/A328177_1_En_8_Chapter.html",
					"order": 12,
					"level": 1,
					"text": "http://book.youbaobao.xyz/epub2/2015_Book_ContemporaryBioethics/OEBPS/A328177_1_En_8_Chapter.html",
					"label": "8. Beneficence",
					"pid": "navpoint-9",
					"navId": "navpoint-12"
				},
				{
					"fileName": "2015_Book_ContemporaryBioethics",
					"id": "A328177_1_En_9_Chapter",
					"href": "OEBPS/A328177_1_En_9_Chapter.html",
					"order": 13,
					"level": 1,
					"text": "http://book.youbaobao.xyz/epub2/2015_Book_ContemporaryBioethics/OEBPS/A328177_1_En_9_Chapter.html",
					"label": "9. Justice: The Lost Value",
					"pid": "navpoint-9",
					"navId": "navpoint-13"
				},
				{
					"fileName": "2015_Book_ContemporaryBioethics",
					"id": "A328177_1_En_10_ChapterPart3",
					"href": "OEBPS/A328177_1_En_10_ChapterPart3.html",
					"order": 14,
					"level": 0,
					"text": "http://book.youbaobao.xyz/epub2/2015_Book_ContemporaryBioethics/OEBPS/A328177_1_En_10_ChapterPart3.html",
					"label": "3. Selected Topics",
					"pid": "",
					"navId": "navpoint-14"
				},
				{
					"fileName": "2015_Book_ContemporaryBioethics",
					"id": "A328177_1_En_10_Chapter",
					"href": "OEBPS/A328177_1_En_10_Chapter.html",
					"order": 15,
					"level": 1,
					"text": "http://book.youbaobao.xyz/epub2/2015_Book_ContemporaryBioethics/OEBPS/A328177_1_En_10_Chapter.html",
					"label": "10. Abortion",
					"pid": "navpoint-14",
					"navId": "navpoint-15"
				},
				{
					"fileName": "2015_Book_ContemporaryBioethics",
					"id": "A328177_1_En_11_Chapter",
					"href": "OEBPS/A328177_1_En_11_Chapter.html",
					"order": 16,
					"level": 1,
					"text": "http://book.youbaobao.xyz/epub2/2015_Book_ContemporaryBioethics/OEBPS/A328177_1_En_11_Chapter.html",
					"label": "11. Assisted Reproductive Technology: Islamic Perspective",
					"pid": "navpoint-14",
					"navId": "navpoint-16"
				},
				{
					"fileName": "2015_Book_ContemporaryBioethics",
					"id": "A328177_1_En_12_Chapter",
					"href": "OEBPS/A328177_1_En_12_Chapter.html",
					"order": 17,
					"level": 1,
					"text": "http://book.youbaobao.xyz/epub2/2015_Book_ContemporaryBioethics/OEBPS/A328177_1_En_12_Chapter.html",
					"label": "12. Ethical Issues in Genetics (Premarital Counseling, Genetic Testing, Genetic Engineering, Cloning and Stem Cell Therapy, DNA Fingerprinting)",
					"pid": "navpoint-14",
					"navId": "navpoint-17"
				},
				{
					"fileName": "2015_Book_ContemporaryBioethics",
					"id": "A328177_1_En_13_Chapter",
					"href": "OEBPS/A328177_1_En_13_Chapter.html",
					"order": 18,
					"level": 1,
					"text": "http://book.youbaobao.xyz/epub2/2015_Book_ContemporaryBioethics/OEBPS/A328177_1_En_13_Chapter.html",
					"label": "13. Organ Transplantation",
					"pid": "navpoint-14",
					"navId": "navpoint-18"
				},
				{
					"fileName": "2015_Book_ContemporaryBioethics",
					"id": "A328177_1_En_14_Chapter",
					"href": "OEBPS/A328177_1_En_14_Chapter.html",
					"order": 19,
					"level": 1,
					"text": "http://book.youbaobao.xyz/epub2/2015_Book_ContemporaryBioethics/OEBPS/A328177_1_En_14_Chapter.html",
					"label": "14. Brain Death",
					"pid": "navpoint-14",
					"navId": "navpoint-19"
				},
				{
					"fileName": "2015_Book_ContemporaryBioethics",
					"id": "A328177_1_En_15_Chapter",
					"href": "OEBPS/A328177_1_En_15_Chapter.html",
					"order": 20,
					"level": 1,
					"text": "http://book.youbaobao.xyz/epub2/2015_Book_ContemporaryBioethics/OEBPS/A328177_1_En_15_Chapter.html",
					"label": "15. End-of-Life Care",
					"pid": "navpoint-14",
					"navId": "navpoint-20"
				},
				{
					"fileName": "2015_Book_ContemporaryBioethics",
					"id": "A328177_1_En_BookBackmatter_OnlinePDF",
					"href": "OEBPS/A328177_1_En_BookBackmatter_OnlinePDF.html",
					"order": 21,
					"level": 0,
					"text": "http://book.youbaobao.xyz/epub2/2015_Book_ContemporaryBioethics/OEBPS/A328177_1_En_BookBackmatter_OnlinePDF.html",
					"label": "Backmatter",
					"pid": "",
					"navId": "navpoint-21"
				}
			]
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
			console.log(val, 'reader rank')
		},
		readBook(href) {
			console.log(href)
		}
	}
}
</script>