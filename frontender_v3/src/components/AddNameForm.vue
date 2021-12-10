<template>
  <form>
    <div class="row mb-3 smiley-container">
      <div class="col-md-12 mb-5">
        <input
          type="text"
          placeholder="Dit navn"
          v-model.trim="nameItems"
          class="rounded-2"
        />
      </div>
      <div
        class="
          col-md-4
          d-flex
          justify-content-center
          align-items-center
          flex-column
        "
      >
        <button
          @click.prevent="addName('red')"
          type="submit"
          class="
            rounded-circle
            justify-content-center
            align-items-center
            shadow-3-strong
            bad
            combine-red
          "
          id="btn-sad"
        >
          <div class="material-icons">sentiment_dissatisfied</div>
        </button>
        <span class="border rounded-circle my-4">
          {{ $store.getters.getRed }}</span
        >
      </div>
      <div
        class="
          col-md-4
          d-flex
          justify-content-center
          align-items-center
          flex-column
        "
      >
        <button
          @click.prevent="addName('yellow')"
          type="submit"
          id="btn-neutral"
          class="
            rounded-circle
            justify-content-center
            align-items-center
            shadow-3-strong
            neutral
            combine-yellow
          "
        >
          <div class="material-icons">sentiment_neutral</div>
        </button>
        <span class="border rounded-circle my-4">
          {{ $store.getters.getYellow }}</span
        >
      </div>
      <div
        class="
          col-md-4
          d-flex
          justify-content-center
          align-items-center
          flex-column
        "
      >
        <button
          @click.prevent="addName('green')"
          type="submit"
          id="btn-happy"
          class="
            rounded-circle
            justify-content-center
            align-items-center
            shadow-3-strong
            happy
            combine-green
          "
        >
          <div class="material-icons">sentiment_satisfied</div>
        </button>
        <span class="border rounded-circle my-4">
          {{ $store.getters.getGreen }}</span
        >
      </div>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      nameItems: "",
      id: 0,
      reviewColor: "",
    };
  },
  methods: {
    addName: function (color) {
      // Hvis input felt er tomt, så sæt det lig "==="
      if (this.nameItems == "") {
        this.nameItems = "===";
      }
      let { id, nameItems, reviewColor } = this;
      reviewColor = color;

      // Bruger switch metoden til at evaluere hvilket parameter som addName() funktionen, sender af sted når den bliver 'fired' (mangler det danske ord for det :-D )
      switch (reviewColor) {
        case "red":
          this.$store.commit("incrementRedCount");
          break;
        case "yellow":
          this.$store.commit("incrementYellowCount");
          break;
        case "green":
          this.$store.commit("incrementGreenCount");
          break;
      }

      // Tilføj navn til store og increment id, efterfulgt af at sætte input felt lig tom streng
      this.$store.commit("addNameItem", { id, nameItems, reviewColor });
      this.id++;
      this.nameItems = "";
    },
  },
};
</script>

<style scoped>
input {
  padding: 8px 24px;
  border: 1px solid #c4c4c4;
}

button {
  width: 160px;
  height: 160px;
  border: none;
}

#btn-sad {
  background-color: #bf2b21;
}
#btn-neutral {
  background-color: #a89914;
}
#btn-happy {
  background-color: #149d2a;
}

.material-icons {
  display: block;
  color: #fff;
  font-size: 7rem;
}

.smiley-container {
  margin-left: 10rem;
}

span {
  font-size: 3rem;
  width: 80px;
  height: 80px;
  color: #c4c4c4;
}

/* COLOR CLASSES  */
.combine-green {
  color: #149d2a;
}
.combine-yellow {
  color: #a89914;
}
.combine-red {
  color: #bf2b21;
}
</style>
