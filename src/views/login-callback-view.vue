<script lang="ts">
import { defineComponent } from 'vue'
import { useAuthStore } from '@/stores/auth'

export default defineComponent({
  async mounted() {
    const authStore = useAuthStore(); 
    authStore.login(this.$route.query.code as string, this.$route.query.state as string)
  },
})
</script>