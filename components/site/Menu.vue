<template>
    <!-- TODO: DELETE -->
    <ul class="menu">
        <h2>Main Menu</h2>
        <li v-for="(item, i) in menuData">
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
        // console.log(this.menuData)
    }
}
</script>

<style lang="scss">
@import '~/styles/_vars.scss';
</style>
