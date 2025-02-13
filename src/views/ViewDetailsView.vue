<script setup>
import { RouterLink } from 'vue-router';

</script>
<template>
  <div>
    <!-- Event title -->
    <div class="mx-5 md:mx-15 my-10 md:my-9">
      <h1 class="text-black font-display font-bold text-xl">Lorem ipsum began as scrambled, nonsensical Latin derived from Cicero’s 1scentury BC text De Finibus Bonorum et Malorum.</h1>
      <p class="text-[#5271FF] text-xs font-display mt-2">20/05/2025</p>
    </div>
    
    <!-- Event details -->
     <div class="mx-5 md:mx-15 my-9">
      <div class="text-black text-md font-display mb-10 text-justify">
        Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. “It’s not Latin, though it looks like it, and it actually says nothing,” Before & After magazine answered a curious reader, “Its ‘words’ loosely approximate the frequency with which letters occur in English, which is why at a glance it looks pretty real. 
      </div>
      <div class="text-black text-md font-display mb-10 text-justify">
        Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. “It’s not Latin, though it looks like it, and it actually says nothing,” Before & After magazine answered a curious reader, “Its ‘words’ loosely approximate the frequency with which letters occur in English, which is why at a glance it looks pretty real. 
      </div>
      <div class="text-black text-md font-display text-justify">
        Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. “It’s not Latin, though it looks like it, and it actually says nothing,” Before & After magazine answered a curious reader, “Its ‘words’ loosely approximate the frequency with which letters occur in English, which is why at a glance it looks pretty real. 
      </div>
     </div>

     <!-- Delete and Edit buttons -->
      <div class=" flex items-center gap-5 mx-15 my-9">
        <RouterLink
          to="/editItem"
          class="bg-[#5271FF] p-3 rounded-md w-30 mt-5 text-white font-display text-sm font-bold align-center text-center"
        >
          Edit
        </RouterLink>

        <button
          class="bg-[#C34F06]  p-3 rounded-md w-30 mt-5 text-white font-display text-sm font-bold align-center text-center"
        > 
          Delete
        </button>
      </div>
  </div>
</template>
