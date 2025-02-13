<script setup>
import { RouterLink } from "vue-router";
</script>
<template>
  <div>
    <!-- Event Buckets -->
    <div class="flex flex-col md:items-center md:justify-between mx-5 md:mx-20 my-9">
      <div>
        <h1 class="font-display text-xl font-bold text-black">
          Welcome John Doe,
        </h1>
        <p class="font-display text-sm text-black">
          Here are items in your eventful moment bucket.
        </p>
      </div>

      <RouterLink to="/addItem">
        <button
          class="bg-[#5271FF] p-3 rounded-md w-30 mt-5 text-white font-display text-sm font-bold align-center text-center"
        >
          Add Item
        </button>
      </RouterLink>
    </div>

    <!-- Event Buckets -->
    <div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-5 mx-5 md:mx-20 my-9">
        <div class="bg-white shadow-lg hover:bg-[#FFF5A7] p-6 md:p-5">
          <div>
            <h2 class="font-display font-bold text-sm text-black mb-5">
              Lorem ipsum began as scrambled, nonsensical Latin derived from
              Cicero’s 1st-century BC text De Finibus Bonorum et Malorum.
            </h2>
            <p class="font-display text-xs text-black mb-5 text-justify">
              Until recently, the prevailing view assumed lorem ipsum was born
              as a nonsense text. “It’s not Latin, though it looks like it, and
              it actually says nothing,” Before & After magazine answered a
              curious reader, “Its ‘words’ loosely approximate the frequency
              with which letters occur in English, which is why at a glance it
              looks pretty real. Until recently, the prevailing view assumed
              lorem ipsum was born as a nonsense text. “It’s not Latin, though
              it looks like it, and it actually says nothing,” Before & After
              magazine answered a curious reader, “Its ‘words’ loosely
              approximate the frequency with which letters occur in English,
              which is why at a glance it looks pretty real.
            </p>
          </div>
          <div class="flex items-center justify-between">
            <RouterLink to="/viewDetails" class="text-[#5271FF]"
              >View Details</RouterLink
            >
            <div class="flex items-center gap-5">
              <p class="text-gray-600 text-sm">20/05/2021</p>
              <p class="text-black text-sm">20/05/2025</p>
            </div>
          </div>
        </div>
        <div class="bg-white shadow-lg hover:bg-[#FFF5A7] p-5">
          <div>
            <h2 class="font-display font-bold text-sm text-black mb-5">
              Lorem ipsum began as scrambled, nonsensical Latin derived from
              Cicero’s 1st-century BC text De Finibus Bonorum et Malorum.
            </h2>
            <p class="font-display text-xs text-black mb-5 text-justify">
              Until recently, the prevailing view assumed lorem ipsum was born
              as a nonsense text. “It’s not Latin, though it looks like it, and
              it actually says nothing,” Before & After magazine answered a
              curious reader, “Its ‘words’ loosely approximate the frequency
              with which letters occur in English, which is why at a glance it
              looks pretty real. Until recently, the prevailing view assumed
              lorem ipsum was born as a nonsense text. “It’s not Latin, though
              it looks like it, and it actually says nothing,” Before & After
              magazine answered a curious reader, “Its ‘words’ loosely
              approximate the frequency with which letters occur in English,
              which is why at a glance it looks pretty real.
            </p>
          </div>
          <div class="flex items-center justify-between">
            <RouterLink to="/viewDetails" class="text-[#5271FF]"
              >View Details</RouterLink
            >
            <div class="flex items-center gap-5">
              <p class="text-gray-600 text-sm">20/05/2021</p>
              <p class="text-black text-sm">20/05/2025</p>
            </div>
          </div>
        </div>
        <div class="bg-white shadow-lg hover:bg-[#FFF5A7] p-5">
          <div>
            <h2 class="font-display font-bold text-sm text-black mb-5">
              Lorem ipsum began as scrambled, nonsensical Latin derived from
              Cicero’s 1st-century BC text De Finibus Bonorum et Malorum.
            </h2>
            <p class="font-display text-xs text-black mb-5 text-justify">
              Until recently, the prevailing view assumed lorem ipsum was born
              as a nonsense text. “It’s not Latin, though it looks like it, and
              it actually says nothing,” Before & After magazine answered a
              curious reader, “Its ‘words’ loosely approximate the frequency
              with which letters occur in English, which is why at a glance it
              looks pretty real. Until recently, the prevailing view assumed
              lorem ipsum was born as a nonsense text. “It’s not Latin, though
              it looks like it, and it actually says nothing,” Before & After
              magazine answered a curious reader, “Its ‘words’ loosely
              approximate the frequency with which letters occur in English,
              which is why at a glance it looks pretty real.
            </p>
          </div>
          <div class="flex items-center justify-between">
            <RouterLink to="/viewDetails" class="text-[#5271FF]"
              >View Details</RouterLink
            >
            <div class="flex items-center gap-5">
              <p class="text-gray-600 text-sm">20/05/2021</p>
              <p class="text-black text-sm">20/05/2025</p>
            </div>
          </div>
        </div>
        <div class="bg-white shadow-lg hover:bg-[#FFF5A7] p-5">
          <div>
            <h2 class="font-display font-bold text-sm text-black mb-5">
              Lorem ipsum began as scrambled, nonsensical Latin derived from
              Cicero’s 1st-century BC text De Finibus Bonorum et Malorum.
            </h2>
            <p class="font-display text-xs text-black mb-5 text-justify">
              Until recently, the prevailing view assumed lorem ipsum was born
              as a nonsense text. “It’s not Latin, though it looks like it, and
              it actually says nothing,” Before & After magazine answered a
              curious reader, “Its ‘words’ loosely approximate the frequency
              with which letters occur in English, which is why at a glance it
              looks pretty real. Until recently, the prevailing view assumed
              lorem ipsum was born as a nonsense text. “It’s not Latin, though
              it looks like it, and it actually says nothing,” Before & After
              magazine answered a curious reader, “Its ‘words’ loosely
              approximate the frequency with which letters occur in English,
              which is why at a glance it looks pretty real.
            </p>
          </div>
          <div class="flex items-center justify-between">
            <RouterLink to="/viewDetails" class="text-[#5271FF]"
              >View Details</RouterLink
            >
            <div class="flex items-center gap-5">
              <p class="text-gray-600 text-sm">20/05/2021</p>
              <p class="text-black text-sm">20/05/2025</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
