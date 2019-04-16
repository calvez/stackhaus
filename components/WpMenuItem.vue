<template>
    <li :class="classes">
        <slot>
            <router-link
                v-if="forceRouterLink"
                :to="(item.url || item.permalink) | removeTrailingSlash"
                v-html="item.label"
            />

            <router-link
                v-else-if="!item.is_external"
                :to="item.url | removeTrailingSlash"
                v-html="item.label"
            />

            <a
                v-else
                :href="item.url | removeTrailingSlash"
                target="_blank"
                v-html="item.label"
            />

            <ul v-if="children.length">
                <menu-item
                    v-for="(child, i) in children"
                    :item="child"
                    :key="i"
                    :forceRouterLink="forceRouterLink"
                />
            </ul>
        </slot>
    </li>
</template>

<script>
import _get from 'lodash/get'

// TODO: replace backend url, filter relative path
export default {
    name: 'menu-item',
    filters: {
        removeTrailingSlash(val) {
            return val == '/' ? val : val.replace(/\/$/, '')
        }
    },
    props: {
        item: {
            type: Object,
            default: () => {
                return {}
            }
        },
        forceRouterLink: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        // TODO: get children
        children() {
            return this.item.childItems || []
        },
        isActive() {
            return this.$route.path.replace(/\/*$/, '') == this.item.url
        },
        isParent() {
            // remove trailing slash
            const strippedSlash = this.$route.path.replace(/\/$/g, '')
            // remove last directory from current route
            const parentRoute = strippedSlash.replace(/\/[^\/]*$/g, '')
            return parentRoute == this.item.url
        },
        isAncestor() {
            return (
                (!this.isActive && this.$route.path.includes(this.item.url)) ||
                this.isParent ||
                this.item.url == '/'
            )
        },
        hasSubMenu() {
            // return Object.keys(this.item.children).length > 0
            return this.item.childItems.edges.length > 0
        },
        isFrontPage() {
            return this.item.url == '/'
        },
        classes() {
            const classes = [
                'menu-item',
                `menu-item-${this.item.menuItemId || 'none'}`,
                { 'menu-item-has-children': this.hasSubMenu },
                { 'current-menu-item': this.isActive },
                { 'current-menu-parent': this.isParent },
                { 'current-menu-ancestor': this.isAncestor },
                { 'menu-item-is-front-page': this.isFrontPage },
                { 'in-active-tree': this.isAncestor },
                { active: this.isActive },
                { 'menu-item-is-home': this.item.isHome }
            ]

            // if devId has been provided, add it
            if (this.item.devId !== undefined) {
                classes.push(`menu-item-dev-id-${this.item.devId}`)
            }

            return classes
        }
    }
}
</script>
