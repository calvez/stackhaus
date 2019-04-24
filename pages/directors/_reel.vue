<template>
    <div class="director-detail" v-if="$apollo.loading">
        loading...
    </div>
    <div v-else>
        <h2>This is director {{ page.title }}'s detail page</h2>

        <nuxt-child />
    </div>
</template>

<script>
import _get from 'lodash/get'

import { GET_PAGE_BY } from '~/queries/pages.js'
import { formatPageData, formatPageByData } from '~/utils/formatters.js'

export default {
    transition: 'fade-up',
    validate({ params, query, store }) {
        // return /^[a-zA-Z ]*$/.test(params.id) //test for text
        return true
    },
    middelware: 'checkId',
    data() {
        return {
            uri: this.$nuxt.$route.path
        }
    },
    // head() {
    //     return {
    //         title: this.page.title
    //     }
    // },
    apollo: {
        page: {
            query: GET_PAGE_BY,
            variables() {
                return {
                    uri: this.uri
                }
            },
            update(queryData) {
                return formatPageByData(queryData)
            }
        }
    },
    computed: {
        childrenPages() {
            return _get(this.page, 'childPages.nodes', [])
        }
    }
}
</script>

<style lang="scss"></style>
