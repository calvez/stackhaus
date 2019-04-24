<template>
    <div class="loading-message" v-if="$apollo.loading" v-html="loading" />

    <div v-else class="director-list">
        This is the /pages/directors page

        <ul v-for="(page, i) in childrenPages">
            <li :key="i">
                <nuxt-link
                    :to="`/directors/${page.slug}`"
                    v-html="page.title"
                />
            </li>
        </ul>
    </div>
</template>

<script>
import _get from 'lodash/get'

import { GET_PAGE_BY_DEV_ID } from '~/queries/pages.js'
import { formatPageData, formatPageByData } from '~/utils/formatters.js'

export default {
    data() {
        return {
            devId: 'directors',
            page: {}
        }
    },
    // NOTE: Async Fetch method example
    async fetch(context) {
        const client = context.app.apolloProvider.defaultClient
        let pageData = await client
            .query({
                query: GET_PAGE_BY_DEV_ID,
                variables: {
                    devId: 'directors'
                }
            })
            .then(({ data }) => {
                return formatPageData(data)
            })
        /*  // Commit to store 
            context.store.commit('page/PAGE_DATA', pageData)
         */
    },
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
    },
    computed: {
        childrenPages() {
            return _get(this.page, 'edges[0].node.childPages.nodes', [])
        }
    }
}
</script>

<style lang="scss"></style>
