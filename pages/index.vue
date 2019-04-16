<template>
    <div class="loading-message" v-if="$apollo.loading">
        Loading...
    </div>

    <section v-else :class="classes">
        <!-- <site-menu :menu-data="menu" /> -->

        <!-- <div class="settings">
            {{ settings }}
        </div> -->

        <div class="page">
            <h2>Page By (devId: {{ devId }} )</h2>
            {{ page }}
        </div>

        <div class="posts">
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
        </div>
    </section>
</template>

<script>
// Menu
import menuQuery from '~/queries/menus/GetMenuItems.gql'
// Settings
import settingsQuery from '~/queries/settings/GetSettings.gql'
// Page
import pageQuery from '~/queries/pages/GetPageByDevId.gql'
import pageByQuery from '~/queries/pages/GetPageBy.gql'
// Post
import postsQuery from '~/queries/posts/GetPosts.gql'
import postByQuery from '~/queries/posts/GetPostBy.gql'
import postCategoriesQuery from '~/queries/categories/GetCategories.gql'
import postCategoriesRelatedQuery from '~/queries/categories/GetCategoriesRelated.gql'

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
            page: '',
            devId: 'work-detail-1w',
            mainMenu: 'MAIN_MENU',
            firstPosts: 2,
            postSlug: 'slug-test',
            pageBySlug: 'work',
            pageByUri: 'work'
        }
    },
    computed: {
        classes() {
            return ['section', this.devId]
        }
    },
    methods: {},
    apollo: {
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
        /*/
        settings: {
            query: settingsQuery,
            update(queryData) {
                return formatSettingsData(queryData)
            }
        }
        /*/
        page: {
            query: pageQuery,
            variables() {
                return {
                    devId: this.devId
                }
            },
            update(queryData) {
                return formatPageData(queryData)
            }
        },
        pageBy: {
            query: pageByQuery,
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
    }
}
</script>

<style lang="scss">
@import '~/styles/_vars.scss';

.section {
    color: $black;
    // margin: 0 auto;
    // min-height: 100vh;
    // display: flex;
    // justify-content: center;
    // align-items: center;
    // text-align: center;

    .menu {
        display: block;
    }
    .page-content {
        display: block;
    }
}
</style>
