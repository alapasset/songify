import { defineStore } from 'pinia'
import { router } from '@/router'
// eslint-disable-next-line unicorn/prefer-node-protocol
import { Buffer } from 'buffer'

export const useAuthStore = defineStore({
  id: 'auth',
  state: () => ({
    code: localStorage.getItem('code') !== null ? localStorage.getItem('code') : undefined,
    state: localStorage.getItem('state') !== null ? localStorage.getItem('state') : undefined,
    access_token: localStorage.getItem('access_token') !== null ? localStorage.getItem('access_token') : undefined
  }),
  actions: {
    async login(code: string, state: string) {
      this.code = code
      this.state = state

      localStorage.setItem('code', code)
      localStorage.setItem('state', state)

      await this.getAccessToken()

      router.push('/')
    },
    async getAccessToken() {
      const rawResponse = await fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',          
          'Authorization': 'Basic ' + (Buffer.from(import.meta.env.VITE_CLIENT_ID + ':' + import.meta.env.VITE_SECRET_ID).toString('base64')) 
        },
        body: `grant_type=authorization_code&code=${this.code}&redirect_uri=${import.meta.env.VITE_REDIRECT_URL}`
      })
      const { access_token } = await rawResponse.json()
      this.access_token = access_token
      localStorage.setItem('access_token', access_token)
    },
    logout() {
      this.code = undefined;
      this.state = undefined;
      this.access_token = undefined;
      localStorage.removeItem('code')
      localStorage.removeItem('state')
      localStorage.removeItem('access_token')
      router.push('/login')
    }
  }
})