<template>
  <div>
    <!-- HEADER START -->
    <Header />
    <!-- HEADER END -->
    <!-- HOME START -->
    <div id="home" class="container">
      <div class="row">
        <div class="col-md-10 mx-auto text-center">
            <div class="display-1 text-center">
              Vue Starter Template
            </div>
        </div>
      </div>
    </div>
    <!-- HOME END -->
    <!-- FOOTER START -->
    <Footer />
    <!-- FOOTER END -->
  </div>
</template>

<script>
import Header from '@/components/Globals/Header'
import Footer from '@/components/Globals/Footer'
export default {
  name: 'Home',
  data () {
    return {
    }
  },
  components: {
    Header,
    Footer
  }
}
</script>

<style lang='scss'>
  @import 'scss/pages/home/base.scss';
</style>
