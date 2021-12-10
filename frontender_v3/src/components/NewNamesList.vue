<template>
  <div class="ul-container">
    <ul class="list-unstyled text-start">
      <!-- Vi hiver navnene ud fra store og kører dem igennem en v-for og siger at hvis et navn har en reviewColor lig en af de tre farver, -->
      <!-- så giv det list item en class af enten .red .yellow eller .green, som farver name outputtet den farve som den tilsvarende review knap har  -->
      <li
        v-for="name in names"
        :key="name.id"
        :class="[
          name.reviewColor == 'red' ? 'red' : '',
          name.reviewColor == 'green' ? 'green' : '',
          name.reviewColor == 'yellow' ? 'yellow' : '',
        ]"
      >
        {{ name.nameItems }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    names() {
      return this.$store.getters.getNames;
    },
    reviewTypeStyle() {
      return {
        happy: this.names.name == "happy",
      };
    },
  },
};
</script>

<style scoped>
.bad,
.red {
  color: #cc6666;
}
.neutral,
.yellow {
  color: #a89914;
}
.happy,
.green {
  color: #669966;
}

.ul-container {
  height: 300px;
}
</style>
