<!-- This will be our App.vue -->
<template>
    <div :class="classes">
        <!-- Header goes here -->

        <p>this is a custom contact layout</p>

        <nuxt />
        <!-- Footer goes here -->
    </div>
</template>

<script>
import _throttle from 'lodash/throttle'
import _kebabCase from 'lodash/kebabCase'

export default {
    data() {
        return {}
    },
    computed: {
        classes() {
            return ['container']
        }
    }
}
</script>

<style lang="scss"></style>
