<template>
    <div class="loading-message" v-if="$apollo.loading">
        Loading...
    </div>

    <section v-else :class="classes">
        this is work in /pages
        <nuxt-child />
    </section>
</template>

<script>
import _get from 'lodash/get'

// Menu
import { GET_MENU_ITEMS } from '~/queries/menus.js'
// Page
import { GET_PAGE_BY_DEV_ID } from '~/queries/pages.js'

export default {
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
