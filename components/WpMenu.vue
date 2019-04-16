<template>
    <ul :class="['menu', targetSlug]">
        <wp-menu-item
            v-for="(item, i) in menuItems"
            :key="i"
            :item="item"
            :forceRouterLink="forceRouterLink"
        >
            <slot name="menu-item" :menu-item="item" :index="i" />
        </wp-menu-item>
    </ul>
</template>

<script>
import _kebabCase from 'lodash/kebabCase'
import _get from 'lodash/get'
import _find from 'lodash/find'

export default {
    props: {
        slug: {
            type: String,
            default: ''
        },
        // TODO: rename menus not as camel case
        name: {
            type: String,
            default: 'Main Menu'
        },
        forceRouterLink: {
            type: Boolean,
            default: false
        }
    },
    components: {
        // TODO: load components better
        'menu-item': require('./WpMenuItem')
    },
    computed: {
        targetSlug() {
            return this.slug || _kebabCase(this.name)
        },
        menuItems() {
            const menus = _get(this.$store.state, 'menus', [])
            console.log('menus', menus)

            // find first menu that matches the given slug
            /*/
            let menu = menus.find(singleMenu => {
                return singleMenu.slug == this.targetSlug
            })
            /*/
            // TODO: match by slug or name? (cant get slug from wpGraphql)
            let menu = menus[this.name]

            // fall back to first menu
            if (menu === undefined) {
                menu = _get(menus, '[0]')
            }

            console.log('menu', menu)

            // return menu ? menu.items : false

            return menu
        }
    }
}
</script>

<style>
.menu {
    list-style-type: none;
    padding: 0;
    margin: 0;
}
</style>
