<template>
    <div :class="classes">
        <h1>Work Grid</h1>
    </div>
</template>

<script>
import _kebabCase from 'lodash/kebabCase'
import _camelCase from 'lodash/camelCase'
import _get from 'lodash/get'
import _find from 'lodash/find'

export default {
    props: {},
    components: {},
    computed: {
        classes() {
            return ['work-grid']
        }
    }
}
</script>

<style lang="scss">
.menu {
}
</style>
