<template>
    <div class="tag-wrapper" @click="onTagClick">
        <div class="tag">{{text}}</div>
    </div>
</template>
<script>
export default {
    props: {
        text: {
            type: String,
            default: ''
        }
    },
    methods: {
        onTagClick() {
            this.$emit('onTagClick')
        }
    }
}
</script>