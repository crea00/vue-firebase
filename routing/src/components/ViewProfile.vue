<template>
  <div class="view-profile">
    <h2>Profile for {{ userId }}</h2>
  </div>
</template>

<script>
export default {
  name: 'ViewProfile',
  data() {
    return {
      userId: this.$route.params.user_id
    }
  },
  methods: {
    updateId() {
      this.userId = this.$route.params.user_id
    }
  },
  /*
    This is where we can ask our component to watch certain things, certain variables or objects
    and when that variable or object changes then we can call a function
  */
  watch: {
    $route: 'updateId'
  }
}
</script>

<style>

</style>
