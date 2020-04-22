<template>
  <div>
    <!-- HEADER START -->
    <Header />
    <!-- HEADER END -->
    <!-- MAIN APP START -->
    <div id="app">
      <router-view/>
    </div>
    <!-- MAIN APP END -->
    <!-- FOOTER START -->
    <Footer />
    <!-- FOOTER END -->
  </div>
</template>

<script>
import Header from '@/components/Globals/Header'
import Footer from '@/components/Globals/Footer'
export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}
</script>

<style lang='scss'>
  @import 'bootstrap/dist/css/bootstrap.min.css';
  @import 'scss/main.scss';
</style>
