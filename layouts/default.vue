<!-- This will be our App.vue -->
<template>
    <main :class="classes">
        <!-- Header goes here -->
        <site-header />

        <!--  TODO: rename menu location-->
        <!-- <wp-menu location-name="header-menu" /> -->
        <!-- Hamburger goes here -->

        <nuxt />
        <!-- Footer goes here -->

        <wp-menu location-name="footer-menu" />
    </main>
</template>

<script>
import _throttle from 'lodash/throttle'
import _kebabCase from 'lodash/kebabCase'

import { GET_MENU_ITEMS } from '~/queries/menus.js'
import { formatMenuData } from '~/utils/formatters.js'

export default {
    data() {
        let output = {
            winHeight: 0,
            winWidth: 0,
            sTop: 0
        }
        if (process.client) {
            output.winHeight = window.innerHeight
            output.winWidth = window.innerWidth
        }
        return output
    },
    computed: {
        classes() {
            return [
                'container',
<<<<<<< HEAD
                'default-layout',
=======
                'main',
>>>>>>> 713be786bca6a3735fe529d8d9a0a9346b9820e6
                `breakpoint-${this.breakpoint}`,
                `route-${_kebabCase(this.$route.name)}`,
                { scrolled: this.sTop > 0 },
                { 'menu-opened': this.$store.state.menuOpened }
            ]
        },
        breakpoint() {
            let breakpoint = this.winWidth >= 750 ? 'desktop' : 'mobile'
            if (this.$store.state.breakpoint != breakpoint) {
                this.$store.commit('SET_BREAKPOINT', breakpoint)
            }
            return breakpoint
        }
    },
    mounted() {
        window.addEventListener('resize', _throttle(this.onResize, 30))
        window.addEventListener('scroll', _throttle(this.onScroll, 10))

        // Monitor keydown
        window.addEventListener('keydown', key => {
            // Close menu on esc key
            if (key && key.keyCode == 27) {
                this.$store.commit('CLOSE_MENU')
            }
        })
    },
    methods: {
        onResize() {
            this.winWidth = window.innerWidth
            this.winHeight = window.innerHeight

            this.$emit('throttled.resize')
        },
        onScroll() {
            this.sTop = window.pageYOffset || document.documentElement.scrollTop

            this.$emit('throttled.scroll')
        }
    },
    apollo: {
        menu: {
            query: GET_MENU_ITEMS,
            variables() {
                return {
                    location: this.mainMenu
                }
            },
            update(queryData) {
                return formatMenuData(queryData)
            }
        }
    }
}
</script>

<style lang="scss">
.default-layout {
    .footer-menu {
        position: fixed;
        bottom: 0;
        text-align: center;
        width: 100%;
        .menu-item {
            display: inline;
            text-transform: capitalize;
            padding: 10px 20px;
        }
    }
}
</style>
