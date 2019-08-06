<template>
    <div class="layout-search">
        <nav-bar/>
        <nuxt/>
       <footer-bar/>
    </div>
</template>

<script>
    import NavBar from '../components/Nav'
    import FooterBar from '../components/Footer'
    export default {
        name: "search",
        components:{
            NavBar,
            FooterBar
        }
    }
</script>

<style scoped>
.layout-search{
}
</style>