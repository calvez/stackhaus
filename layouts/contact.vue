<!-- This will be our App.vue -->
<template>
    <div :class="classes">
        <!-- Header goes here -->
        <site-header />

        <p>this is the custom Contact layout</p>

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
            return ['container', 'contact-layout']
        }
    }
}
</script>

<style lang="scss"></style>
