<template>
  <header class="d-flex justify-content-between align-items-center">
    <h1 class="logo h1 text-white">24Super</h1>
    <nav>
      <address class="text-end px-2 text-white">
        Havnepladsen 50, 1234 Aalby
      </address>
      <router-link class="px-2 text-white" to="#">Forside</router-link>
      <router-link
        class="text-decoration-underline px-2 text-white fw-bolder"
        to="#"
        >Besøgsoplevelse</router-link
      >
      <router-link class="px-2 text-white" to="#">Find butik</router-link>
      <router-link class="px-2 text-white" to="#">Kontakt</router-link>
      <router-view />
    </nav>
  </header>
</template>

<script>
export default {};
</script>

<style>
header {
  background: linear-gradient(180deg, #118b24 0%, #149d2a 100%);
}

nav {
  margin: 2rem 6.25rem;
}

.logo {
  font-family: Lobster;
  margin: 2rem 6.25rem;
}
</style>
