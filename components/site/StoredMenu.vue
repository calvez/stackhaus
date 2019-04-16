<template>
    <ul class="menu">
        <li v-for="(item, i) in loadMenu">
            <a
                :key="i"
                :href="item.url"
                v-html="item.label"
                :style="menuStyles(item.cssClasses)"
            />
        </li>
    </ul>
</template>

<script>
import _get from 'lodash/get'

export default {
    props: {
        menuData: {
            type: Array,
            default: () => []
        }
    },
    methods: {
        menuStyles(cssClasses) {
            if (cssClasses) {
                console.log(cssClasses)
            }
        }
    },
    computed: {
        loadMenu() {
            return _get(this.$store.state, 'menus.mainMenu', false)
        }
    }
}
</script>

<style lang="scss">
@import '~/styles/_vars.scss';
</style>
