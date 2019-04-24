<template>
    <div class="loading-message" v-if="$apollo.loading" v-html="loading" />

    <section v-else :class="classes">
        <h2>{{ page.title }}</h2>
    </section>
</template>

<script>
// Page
import { GET_PAGE_BY } from '~/queries/pages.js'
import _get from 'lodash/get'
// Formatters
import { formatPageData, formatPageByData } from '~/utils/formatters.js'

export default {
    data() {
        return {
            devId: 'work',
            pageBySlug: 'work',
            uri: 'work'
            // page: {}
        }
    },
    computed: {
        classes() {
            return ['section', this.devId]
        },
        featuredImage() {
            return _get(this.page, 'featuredImage', {})
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
    }
    /*/
    // NOTE: AyncData Example (w/ apollo) extends context to apollo
    async asyncData({ app, store, query }) {
        const client = app.apolloProvider.defaultClient

        let pageData = await client
            .query({
                query: pageByQuery,
                variables: {
                    uri: 'work'
                }
            })
            .then(({ data }) => {
                // console.log('data', data)
                return formatPageByData(data)
            })

        return { page: pageData }
    },
    /*/
}
</script>

<style lang="scss">
@import '~/styles/_vars.scss';

.section {
    color: $black;

    .menu {
        display: block;
    }
    .page-content {
        display: block;
        .image {
            max-width: 250px;
            height: auto;
        }
    }
}
</style>
