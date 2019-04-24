<template>
    <div class="loading-message" v-if="$apollo.loading" v-html="loading" />

    <section v-else :class="classes">
        this is work in /pages
        <nuxt-child />
    </section>
</template>

<script>
import _get from 'lodash/get'

// Page
import { GET_PAGE_BY_DEV_ID } from '~/queries/pages.js'

export default {
    data() {
        return {
            devId: 'work'
        }
    },
    computed: {
        classes() {
            return ['section', this.devId]
        }
    }
}
</script>

<style lang="scss">
@import '~/styles/_vars.scss';

.section {
}
</style>
