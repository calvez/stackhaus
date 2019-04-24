<template>
    <section>
        <svg-image src="/svgs/biohazard.svg" />
        <h2>this is work/id params: {{ $route.params }}</h2>
        <h2>this is work/id query: {{ $route.query.id }}</h2>
    </section>
</template>

<script>
// Page
import { GET_PAGE_BY } from '~/queries/pages.js'
import _get from 'lodash/get'
import _pick from 'lodash/pick'
// Formatters
import { formatPageData, formatPageByData } from '~/utils/formatters.js'

export default {
    // NOTE: Validate params example
    validate({ params, query, store }) {
        return /^\d+$/.test(params.id) //test for number
    }
}
</script>

<style lang="scss">
@import '~/styles/_vars.scss';

.section {
}
</style>
