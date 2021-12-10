<template>
  <div>
    <button class="rounded combine-bg-green text-white" @click="resetAll">
      Nulstil
    </button>
  </div>
</template>

<script>
export default {
  computed: {},
  methods: {
    resetAll() {
      const check = confirm("Er du sikker på at du vil nulstille navnene?");
      if (check) {
        this.$store.commit("removeAllNameItems");
        this.$store.commit("removeNameColor");
      }
    },
  },
};
</script>

<style scoped>
button {
  border: none;
  padding: 0.5rem 2rem;
  margin-top: 1rem;
}
</style>
