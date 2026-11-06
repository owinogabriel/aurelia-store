<script setup lang="ts">
import { useFetch, useSeoMeta } from 'nuxt/app';

const { data: products } = await useFetch('/api/products')

const title = 'Fine Jewellery: Rings, Earrings, Necklaces'
const description = 'Shop handcrafted gold and silver jewellery. Diamond rings, pearl earrings, pendants and more.'

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  ogType: 'website',
  ogImage: products.value?.[0]?.image,
  twitterCard: 'summary_large_image'
})
</script>

<template>
  <section>
    <h1 class="font-serif text-3xl">Fine jewellery, made to last</h1>
    <p class="mt-2 text-stone-600">Handcrafted rings, earrings, necklaces and bracelets.</p>

    <div class="mt-8 grid grid-cols-2 gap-6 md:grid-cols-3">
      <ProductCard v-for="p in products" :key="p.slug" :p="p" />
    </div>
  </section>
</template>