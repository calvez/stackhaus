<template>
    <section class="loading-message" v-if="$apollo.loading">
        Loading...
    </section>

    <section v-else :class="classes">
        <div class="page-content">
            <h2>{{ pageObject.title }} By (devId: {{ devId }} )</h2>

            <responsive-image
                :object="featuredImage"
                aspect="56.25"
                object-fit="cover"
            />
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
            // page: {},
            mainMenu: 'HEADER_MENU',
            firstPosts: 2,
            postSlug: 'slug-test',
            devId: 'front-page',
            pageBySlug: 'work',
            pageByUri: 'work'
        }
    },
    computed: {
        classes() {
            return ['section', this.devId]
        },
        pageObject() {
            let page = _get(this.page, 'edges', {})
            // TODO: clean up
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
    color: $black;

    .menu {
        display: block;
    }
    .page-content {
        display: block;
        .page-content {
            display: block;
            .image {
                max-width: 250px;
                height: auto;
            }
        }
    }
    // TODO: Remove placeholder
    .responsive-image {
        max-width: 500px;
        height: auto;
        margin: 0 auto;
    }

    .a-div {
        display: block;
        text-decoration: underline;
        transition: all 0.2s;
        &:hover {
            color: red;
        }
    }
}
</style>
