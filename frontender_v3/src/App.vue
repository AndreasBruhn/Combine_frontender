<template>
  <div>
    <Header />
    <main class="my-5">
      <div class="container">
        <Heading />
        <div class="row">
          <div class="col-md-10 d-flex justify-content-center">
            <!-- <AddNameForm /> -->
            <AddNameForm />
          </div>
          <div class="col-md-2">
            <div class="border overflow-auto rounded-2">
              <!-- <NewNamesList /> -->
              <NewNamesList />
            </div>
            <NamesReset class="" />
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import Heading from "./components/Heading.vue";
import Header from "./components/Header.vue";
import AddNameForm from "./components/AddNameForm.vue";
import NewNamesList from "./components/NewNamesList.vue";
import NamesReset from "./components/NamesReset.vue";

export default {
  components: {
    Heading,
    Header,
    AddNameForm,
    NewNamesList,
    NamesReset,
  },
};
</script>

<style>
html {
  font-size: 1.125rem;
}

#app {
  font-family: Source Sans Pro, Lobster, Arial, sans-serif;
  text-align: center;
}

/* COLOR CLASSES  */

.combine-bg-green {
  background-color: #149d2a;
}

/* CIRCLE AROUND COUNT OUTPUT */
.circle {
  border: 1px solid #c4c4c4;
  border-radius: 100%;
}
</style>
