<template>
  <h1>Home</h1>
</template>

<script setup lang="ts">
import { useRuntimeConfig } from 'nuxt/app'

const config = useRuntimeConfig()

const title = 'My cool page title'
const siteName = 'My company'
const description = 'Welcome to my home webpage!'
const locale = 'en'
const url = config.public.APP_BASE_URL as string

useHead({
  htmlAttrs: { lang: locale },
  title: title,
  meta: [
    { name: 'description', content: description },

    { property: 'og:type', content: 'website' },
    { property: 'og:title', content: title },
    { property: 'og:locale', content: locale },
    { property: 'og:url', content: url },
    { property: 'og:site_name', content: siteName },
    { property: 'og:description', content: description },
    { property: 'og:image', content: `${config.public.APP_BASE_URL}/banner.jpg` },
    { property: 'og:image:type', content: 'image/jpeg' },
    { property: 'og:image:width', content: '1200' },
    { property: 'og:image:height', content: '630' }
  ]
})

// useServerHead({
//   htmlAttrs: { lang: locale },
//   title: title,
//   meta: [
//     { name: 'description', content: description },

//     { property: 'og:type', content: 'website' },
//     { property: 'og:title', content: title },
//     { property: 'og:locale', content: locale },
//     { property: 'og:url', content: url },
//     { property: 'og:site_name', content: siteName },
//     { property: 'og:description', content: description },
//     { property: 'og:image', content: `${config.public.APP_BASE_URL}/banner.jpg` },
//     { property: 'og:image:type', content: 'image/jpeg' },
//     { property: 'og:image:width', content: '1200' },
//     { property: 'og:image:height', content: '630' }
//   ]
// })

// useServerHeadSafe({
//   htmlAttrs: { lang: locale },
//   title: title,
//   meta: [
//     { name: 'description', content: description },

//     { property: 'og:type', content: 'website' },
//     { property: 'og:title', content: title },
//     { property: 'og:locale', content: locale },
//     { property: 'og:url', content: url },
//     { property: 'og:site_name', content: siteName },
//     { property: 'og:description', content: description },
//     { property: 'og:image', content: `${config.public.APP_BASE_URL}/banner.jpg` },
//     { property: 'og:image:type', content: 'image/jpeg' },
//     { property: 'og:image:width', content: '1200' },
//     { property: 'og:image:height', content: '630' }
//   ]
// })

// useSeoMeta({
//   title,
//   description,
//   ogTitle: title,
//   ogSiteName: siteName,
//   ogType: 'website',
//   ogLocale: locale,
//   ogUrl: url,
//   ogDescription: description,
//   ogImage: {
//     url: `${config.public.APP_BASE_URL}/banner.jpg`,
//     type: 'image/jpeg',
//     width: 1200,
//     height: 630
//   }
// })

// useServerSeoMeta({
//   title,
//   description,
//   ogTitle: title,
//   ogSiteName: siteName,
//   ogType: 'website',
//   ogLocale: locale,
//   ogUrl: url,
//   ogDescription: description,
//   ogImage: {
//     url: `${config.public.APP_BASE_URL}/banner.jpg`,
//     type: 'image/jpeg',
//     width: 1200,
//     height: 630
//   }
// })
</script>
