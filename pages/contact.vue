<template>
    <div class="loading-message" v-if="$apollo.loading">
        Loading...
    </div>

    <section v-else :class="classes">
        {{ page }}
    </section>
</template>

<script>
import _get from 'lodash/get'
// Page
import { GET_PAGE_BY_DEV_ID } from '~/queries/pages.js'
// Formatters
import { formatPageData } from '~/utils/formatters.js'

export default {
    data() {
        return {
            devId: 'contact'
        }
    },
    layout: 'contact',
    middleware: ['mw1'],
    computed: {
        classes() {
            return ['section', this.devId]
        }
    },
    methods: {},
    apollo: {
        page: {
            query: GET_PAGE_BY_DEV_ID,
            variables() {
                return {
                    devId: this.devId
                }
            },
            update(queryData) {
                return formatPageData(queryData)
            }
        }
    }
}
</script>

<style lang="scss">
@import '~/styles/_vars.scss';

.section {
}
</style>
