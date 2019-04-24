<template>
    <div class="site-header">
        <nuxt-link to="/">
            <svg-image src="logo.svg" />
        </nuxt-link>
        <wp-menu location-name="header-menu" />
    </div>
</template>

<script>
import _get from 'lodash/get'
import _pick from 'lodash/pick'

export default {}
</script>

<style lang="scss">
@import '~/styles/_vars.scss';
</style>
