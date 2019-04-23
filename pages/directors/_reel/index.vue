<template>
    <div class="director-reel">
        This is the /directors Reel detail
    </div>
</template>

<script>
import _get from 'lodash/get'

import { GET_PAGE_BY } from '~/queries/pages.js'
import { formatPageData, formatPageByData } from '~/utils/formatters.js'

export default {
    data() {
        return {
            uri: this.$nuxt.$route.path
        }
    },
    apollo: {
        page: {
            query: GET_PAGE_BY,
            variables() {
                return {
                    uri: this.uri
                }
            },
            update(queryData) {
                return formatPageData(queryData)
            }
        }
    },
    computed: {
        childrenPages() {
            return _get(this.page, 'edges[0].node.childPages.nodes', [])
        }
    }
}
</script>

<style lang="scss"></style>
