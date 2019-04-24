<template>
    <section
        class="loading-message"
        v-if="$apollo.loading"
        v-html="Loading..."
    />

    <section v-else :class="classes">
        <div class="page-content">
            <h2>{{ pageObject.title }}</h2>
        </div>
    </section>
</template>

<script>
import _get from 'lodash/get'

// Menu
import { GET_MENU_ITEMS } from '~/queries/menus.js'
// Page
import { GET_PAGE_BY_DEV_ID } from '~/queries/pages.js'

// Formatters
import { formatPageData, formatPageByData } from '~/utils/formatters.js'

export default {
    data() {
        return {
            devId: 'front-page'
        }
    },
    computed: {
        classes() {
            return ['section', this.devId]
        },
        pageObject() {
            //
            let page = _get(this.page, 'edges', {})
            return page.map(i => {
                return i.node
            })[0]
        },
        pageInfo() {
            return _get(this.page, 'pageInfo', {})
        },
        featuredImage() {
            return _get(this.pageObject, 'featuredImage', {})
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
