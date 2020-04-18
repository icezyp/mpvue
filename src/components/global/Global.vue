<template>
    <div class="global">
        <div class="error" v-if="error">
            <div class="error-msg-wrapper">
                <div class="error-image">

                </div>
            </div>
        </div>
        <slot v-else></slot>
    </div>
</template>
<script>
import store from '@/store/index'

export default {
    computed: {
        error() {
            return store.state.error
        }
    }
}
</script>