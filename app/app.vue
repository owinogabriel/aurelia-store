<template>
  <div class="min-h-screen bg-stone-50 p-8 text-stone-800">
    <header class="border-b bg-white">
      <nav
        class="mx-auto flex max-w-6xl items-center justify-between px-4 py-4"
      >
        <NuxtLink to="/" class="font-serif text-2xl tracking-wide"
          >Aurelia</NuxtLink
        >
        <NuxtLink to="/cart" class="text-sm hover:underline">Cart</NuxtLink>
      </nav>
    </header>
    <main class="mx-auto max-w-6xl px-4 py-8">
      <NuxtPage />
    </main>

    <footer class="py-8 text-center text-xs text-stone-500">
      © Aurelia Jewellery. Demo store, no real orders.
    </footer>
  </div>
</template>
