<template>
  <div id="all-friends">
    <h2>All Friends</h2>
    <div v-for="(friend, index) in friends" :key="index">
      <span @click="unfriend(friend.name)">{{ friend.name }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "AllFriends",
  // <AllFriends :friends="friends" />, props must be an array
  // props shoud be equal :friends
  props: ["friends"],
  data() {
    return {};
  },
  methods: {
    unfriend(name) {
      // $emit is a custom event
      this.$emit("delete", { name });
    }
  }
};
</script>

<style>
</style>
