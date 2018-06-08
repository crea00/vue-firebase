<template>
  <div id="all-friends">
    <h2>All Friends</h2>
    {{ friends }}
    <div v-for="(friend, index) in friends" :key="index">
      <span>{{ friend.name }}</span>
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
  }
};
</script>

<style>
</style>
