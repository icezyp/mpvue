<template>
    <div class="search-bar">
        <div class="search-bar-wrapper" @click="onSearchBarClick">
            <van-icon 
                class="search" 
                name="search" 
                size="16px" 
                color="#858c96"
            />
            <input 
                class="search-bar-input"
                :focus="focus"
                :disabled="disabled"
                :maxlength="limit"
                :placeholder="hotSearch.length === 0 ? '请输入搜索关键词' : hotSearch"
                v-model="searchWord"
                @input="onChange"
                comfirm-type="search"
                @confirm="onConfirm"
                placeholder-style="color: #adb4be"
            />
            <van-icon 
                class="clear" 
                name="clear" 
                size="16px" 
                color="#858c96"
                @click="onClearClick"
                v-if="searchWord.length > 0"
            />
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            searchWord: ''
        }
    },
    props: {
        focus: {
            type: Boolean,
            default: true
        },
        disabled: {
            type: Boolean,
            default: false
        },
        limit: {
            type: Number,
            default: 50
        },
        hotSearch: {
            type: String,
            default: ''
        }
    },
    methods: {
        onSearchBarClick() {
            this.$emit('onClick')
        },
        onClearClick() {
            this.searchWord = ''
            this.$emit('onClear')
        },
        onChange(e) {
            const {value} = e.mp.detail
            this.$emit('onChange', value)
        },
        onConfirm(e) {
            const {value} = e.mp.detail
            this.$emit('onConfirm', value)
        },
        setValue(val) {
            this.searchWord = val
        },
        getValue() {
            return this.searchWord
        }

    }
}
</script>
<style lang="scss" scoped>
.search-bar {
    padding: 15px 15.5px;
    .search-bar-wrapper {
        display: flex;
        align-items: center;
        height: 40px;
        box-sizing: border-box;
        padding: 12px 17px;
        background: #f5f7f9;
        border-radius: 20px;
        .search-bar-input {
            flex: 1;
            margin: 0 8px;
            font-size: 15px;
        }
        .search, .clear {
            display: flex;
            height: 100%;
            align-items: center;
        }
    }
}
</style>