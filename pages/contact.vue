<template>
    <div class="loading-message" v-if="$apollo.loading">
        Loading...
    </div>

    <section v-else :class="classes">
        <div class="content" v-html="pageContent" />
    </section>
</template>

<script>
import _get from 'lodash/get'
// Page
import { GET_PAGE_BY_DEV_ID } from '~/queries/pages.js'
// Formatters
import { formatPageData } from '~/utils/formatters.js'

export default {
    layout: 'contact',
    data() {
        return {
            devId: 'contact'
        }
    },
    middleware: ['mw1'],
    computed: {
        classes() {
            return ['section', this.devId]
        },
        pageContent() {
            return _get(this.page, 'edges[0].node.content', '')
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
                console.log('queryData', queryData)
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
