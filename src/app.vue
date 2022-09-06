<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { useAuthStore } from '@/stores/auth'

const authStore = useAuthStore()
</script>

<template>
  <header>
    <div class="wrapper">
      <h1>Songify - Le premier blind test basé sur tes propres playlists Spotify</h1>
      <nav
        v-show="authStore.code"
        class="navbar navbar-expand navbar-dark bg-dark"
      >
        <div class="navbar-nav">
          <RouterLink
            to="/"
            class="nav-item nav-link"
          >
            Home
          </RouterLink>
          <a
            class="nav-item nav-link"
            @click="authStore.logout()"
          >Logout</a>
        </div>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
</style>
