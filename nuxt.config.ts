// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  runtimeConfig: {
    public: {
      APP_BASE_URL: process.env.APP_BASE_URL
    }
  },
})
