<template>
    <div class="loading-message" v-if="$apollo.loading">
        Loading...
    </div>

    <section v-else :class="classes">
        <div class="page-content">
            <h2>{{ pageObject.title }} By (devId: {{ devId }} )</h2>

            <responsive-image
                :object="featuredImage"
                aspect="56.25"
                object-fit="cover"
            />

            <!--  a-div: -->
            <!-- <a-div href="/work">Link to work page relative</a-div>
            <a-div href="http://localhost:3000/work">Link to work page</a-div>
            <a-div href="http://google.com">Link to google</a-div> -->

            <!-- <no-ssr>
                <wp-content-test :raw-html="pageObject.content" />
            </no-ssr> -->
        </div>

        <!-- <div class="settings">
            {{ settings }}
        </div> -->

        <!-- <div class="posts">
            <h2>All Posts</h2>
            {{ posts }}
        </div>

        <div class="page-by">
            <h2>Page By (uri: {{ pageByUri }})</h2>
            {{ pageBy }}
        </div>

        <div class="postsBy">
            <h2>Post By (slug: {{ postSlug }})</h2>
            {{ postBy }}
        </div>

        <div class="categories">
            <h2>Post Categories</h2>
            {{ categories }}
        </div>

        <div class="categories">
            <h2>Post Categories and Related Posts:</h2>
            {{ categoriesRelated }}
        </div> -->
    </section>
</template>

<script>
import _get from 'lodash/get'

// Menu
import { GET_MENU_ITEMS } from '~/queries/menus.js'
// Page
import { GET_PAGE_BY_DEV_ID } from '~/queries/pages.js'

// Formatters
import {
    formatMenuData,
    formatSettingsData,
    formatPageData,
    formatPageByData,
    formatPostsData,
    formatPostByData,
    formatPostCategoriesData,
    formatPostCategoriesRelatedData
} from '~/utils/formatters.js'

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
        /*
        menu: {
            query: menuQuery,
            variables() {
                return {
                    location: this.mainMenu
                }
            },
            update(queryData) {
                return formatMenuData(queryData)
            }
        },

        settings: {
            query: settingsQuery,
            update(queryData) {
                return formatSettingsData(queryData)
            }
        }

        pageBy: {
            query: pageBy,
            variables() {
                return {
                    uri: this.pageByUri
                }
            },
            update(queryData) {
                return formatPageByData(queryData)
            }
        },
        posts: {
            query: postsQuery,
            variables() {
                return {
                    first: this.firstPosts
                }
            },
            update(queryData) {
                return formatPostsData(queryData)
            }
        },
        postBy: {
            query: postByQuery,
            variables() {
                return {
                    slug: this.postSlug
                }
            },
            update(queryData) {
                return formatPostByData(queryData)
            }
        },
        categories: {
            query: postCategoriesQuery,
            variables() {
                return {
                    // slug: this.postSlug
                }
            },
            update(queryData) {
                return formatPostCategoriesData(queryData)
            }
        },
        categoriesRelated: {
            query: postCategoriesRelatedQuery,
            variables() {
                return {
                    // slug: this.postSlug
                }
            },
            update(queryData) {
                return formatPostCategoriesRelatedData(queryData)
            }
        }
        */
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
