<script setup></script>
<template>
  <div>
    <!-- Add Item -->
    <div>
      <form class="mx-10 my-10 p-5">
        <div>
          <label for="Date" class=" font-display text-black text-md">Date in the future</label>
          <input type="date" name="Date" id="Date" class="border border-gray-500 focus:outline-none w-80 h-8 block rounded-sm text-sm font-display text-black mt-3 mb-3 " />
        </div>
        <div>
          <label for="Title" class=" font-display text-black text-md">Title</label>
          <input type="text" name="Title" id="Title" class="border border-gray-500 focus:outline-none w-80 h-8 block rounded-sm text-sm font-display text-black mt-3 mb-3" />
        </div>
        <div>
          <label for="Details" class=" font-display text-black text-md">Details</label>
          <textarea name="Details" id="Details" cols="30" rows="10" class="border border-gray-500 focus:outline-none w-80  block rounded-sm text-sm font-display text-black "></textarea>
        </div>
        <div>
          <button type="submit" class="bg-[#5271FF] p-3 rounded-md w-30 mt-5 mx-25 text-white font-display text-sm font-bold border border-gray-500 text-center">Save</button>
        </div>
      </form>
    </div>
  </div>
</template>
