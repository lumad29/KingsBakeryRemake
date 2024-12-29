import { defineStore } from 'pinia'
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { auth, getUserState } from '@/firebase'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
  }),

  actions: {
    async signIn() {
      const provider = new GoogleAuthProvider()

      provider.setCustomParameters({
        prompt: 'consent',
        display: 'popup',
      })

      const userCredential = await signInWithPopup(auth, provider)
      const { user } = userCredential
      this.user = user
    },

    async isSignedIn() {
      return await getUserState()
    },
  },
})
