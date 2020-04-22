<template>
  <footer id="footer" class="mt-auto py-3">
    <div class="container">
      <div class="row">
        <div class="col-md-10 mx-auto text-center">
          <small>
            &copy; {{ moment().format('YYYY') }} Geekfluencer
          </small>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style lang="scss">
  @import 'scss/globals/footer/base.scss'
</style>
