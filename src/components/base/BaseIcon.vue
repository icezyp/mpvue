<template>
    <van-icon
        :custom-class="customClass"
        :name="name"
        :color="color"
        :size="size"
        v-if="platform === 'wx'"
    />
    <icon 
        :class="customClass"
        :type="name"
        :color="color"
        :size="size"
        v-else-if="platform === 'my'"
    />
</template>
<script>
export default {
    data() {
        return {
            platform: mpvuePlatform
        }
    },
    props: {
        customClass: {
            type: String,
            default: ''
        },
        name: {
            type: String,
            default: ''
        },
        color: {
            type: String,
            default: ''
        },
        size: {
            type: String,
            default: ''
        }
    }
}
</script>