<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  async mounted() {    
    const client_id = import.meta.env.VITE_CLIENT_ID
    const redirect_uri = import.meta.env.VITE_REDIRECT_URL
    const scope = 'user-read-private,user-read-email'
    const state = this.generateRandomString(16)

    const url = `https://accounts.spotify.com/authorize?response_type=code&client_id=${client_id}&scope=${scope}&redirect_uri=${redirect_uri}&state=${state}`

    window.location.href = url
  },
  methods: {
    generateRandomString(length: number) {
      const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
      let result = ''
      const charactersLength = characters.length
      for ( let index = 0; index < length; index++ ) {
          result += characters.charAt(Math.floor(Math.random() * charactersLength))
      }

      return result
    }
  },
})
</script>

<template>
  Login View
</template>

<style scoped>
</style>
  