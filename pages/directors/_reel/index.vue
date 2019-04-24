<template>
    <div class="loading-message" v-if="$apollo.loading" v-html="loading" />
    <div v-else class="director-reel">
        This is the /directors Reel index

        <ul v-for="(child, i) in childrenPages">
            <li :key="i">
                <nuxt-link
                    :to="`${$route.path}/${child.slug}`"
                    v-html="child.title"
                />
            </li>
        </ul>
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
