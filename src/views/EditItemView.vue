<script setup>
 import { ref } from 'vue';

 const date = ref('2050-07-20')
 const title = ref('Lorem ipsum began as scrambled, nonsensical Latin derived from Cicero’s 1scentury BC text De Finibus Bonorum et Malorum.')
 const details = ref('Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. “It’s not Latin, though it looks like it, and it actually says nothing,” Before & After magazine answered a curious reader, “Its ‘words’ loosely approximate the frequency with which letters occur in English, which is why at a glance it looks pretty real. Until, the prevailing view assumed lorem ipsum was born as a nonsense text. “It’s not Latin, though it looks like it, and it actually says nothing,” Before & After magazine answered a curious reader, “Its ‘words’ loosely approximate the frequency with which letters occur in English, which is why at a glance it looks pretty real. Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. ')
</script>
<template>
    <div>
    <!-- Edit Item -->
    <div>
      <form class="mx-10 my-5 p-5">
        <div>
          <label for="Date" class=" font-display text-black text-md">Date in the future</label>
          <input type="date" name="Date" id="Date" v-model="date" class="border border-gray-500 focus:outline-none w-100 h-8 block rounded-sm text-sm font-display text-black mt-3 mb-3 p-3 " />
        </div>
        <div>
          <label for="Title" class=" font-display text-black text-md">Title</label>
          <input type="text" name="Title" id="Title" v-model="title" class="border border-gray-500 focus:outline-none w-100 h-8 block rounded-sm text-sm font-display text-black mt-3 mb-3 p-3" />
        </div>
        <div>
          <label for="Details" class=" font-display text-black text-md">Details</label>
          <textarea name="Details" id="Details" cols="30" rows="10" v-model="details" class="border border-gray-500 focus:outline-none w-100  block rounded-sm text-xs font-display text-black p-3 "></textarea>
        </div>
        <div>
          <button type="submit" class="bg-[#5271FF] p-3 rounded-md w-30 mt-5 mx-25 text-white font-display text-sm font-bold border border-gray-500 text-center">Update</button>
        </div>
      </form>
    </div>
  </div>
</template>