<template>
    <div class="image-view" @click="onClick" :style="{height}">
        <img 
            :class="round ? 'round image' : 'image'"
            :style="{height}"
            :src="src" 
            :mode="mode"
            :lazy-load="lazyLoad"
            @load="onLoad"
            @error="onError"
            v-show="!isLoading && !error"
        />
        <img 
            :class="round ? 'round image' : 'image'"
            :style="{height}"
            src="/static/image/loading.jpg" 
            :mode="mode"
            v-show="isLoading || error"
        />
    </div>
</template>
<script>
export default {
    props: {
        src: {
            type: String,
            default: ''
        },
        mode: {
            type: String,
            default: 'widthFix'
        },
        lazyLoad: {
            type: Boolean,
            default: true
        },
        round: {
            type: Boolean,
            default: false
        },
        height: {
            type: String,
            default: '100%'
        }
    },
    watch: {
        src(newVal, preVal) {
            if(newVal && newVal.length > 0 && newVal !== preVal) {
                this.$nextTick(() => {
                    this.isLoading = true;
                    this.error = false;
                })
            }
        }
    },
    data() {
        return {
            isLoading: true,
            error: false,
        }
    },
    methods: {
        onClick() {
            this.$emit('onClick')
        },
        onLoad() {
            this.isLoading = false
            this.error = false
        },
        onError() {
            this.isLoading = false
            this.error = true
        }
    }
}
</script>
<style lang="scss" scoped>
.image-view {
    width: 100%;
    .image {
        width: 100%;
        &.round {
            border-radius: 50%;
        }
    }
}
</style>