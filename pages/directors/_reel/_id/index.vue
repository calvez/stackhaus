<template>
    <div class="loading-message" v-if="$apollo.loading">
        Loading...
    </div>

    <section v-else :class="classes">
        this is a reel detail page
    </section>
</template>
