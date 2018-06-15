<template>
  <div class="welcome container">
    <div class="card">
      <div class="card-content center-align">
        <h2 class="teal-text">Welcome</h2>
        <form @submit.prevent="enterChat">
          <label for="name">Enter your name: </label>
          <p v-if="feedback" class="red-text">{{ feedback }}</p>
          <input type="text" name="name" v-model="name">
          <button class="btn teal">Enter Chat</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Welcome',
  data () {
    return {
      name: null,
      feedback: null
    }
  },
  methods: {
    enterChat() {
      if(this.name) {
        /*
          when we redirecting them to the chat component, 
          we're passing through a parameter which is actually passing a prop on we've said 
          that we want to accept that prop in chat component
        */
        this.$router.push({ name: 'Chat', params: { name: this.name }  })
      } else {
        this.feedback = "You must enter a name to join"
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.welcome {
  max-width: 400px;
  margin-top: 100px;
}
.welcome h2 {
  font-size: 3em;
}
.welcome button {
  margin: 30px auto;
}
</style>
