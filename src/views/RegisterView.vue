<script setup>
 import { ref } from 'vue';
 import { useRouter } from 'vue-router';

 const router = useRouter()
 const fullName = ref('')
 const email = ref('')
 const password = ref('')
 const fullNameerror = ref('')
 const emailerror =ref('')
 const passworderror = ref('')


 // Form validation
 const validateForm = () => {
   emailerror.value = ''
   passworderror.value = ''

   if (!fullName.value){
     fullNameerror.value = 'Please enter your full name'
   }

   if (!email.value.includes('@')) {
     emailerror.value = 'Please enter a valid email address'
     return false
   } else if(!email.value.includes('@')){
     emailerror.value = 'Email address must contain a "@" symbol'
     return false
   } else{
     emailerror.value = ''
   }

   if (!password.value) {
     passworderror.value = 'Please enter password'
     return false;
   } else if(password.value.length < 8){
     passworderror.value = 'Password must be at least 8 characters long'
     return false;
   } else{
     passworderror.value = ''
   }

   return true; 
 }

 // Form submission
 const handleSubmit = async (event) => {
   event.preventDefault()

   if (validateForm()) {
     router.push('/')
   }
 }

</script>
<template>
  <div>
    <div class="flex flex-col items-center">
      <div class="w-96 my-5">
        <!-- main -->
        <div class="mt-15 w-110 leading-6">
          <h1 class="font-display text-2xl font-bold">Create an account,</h1>
        </div>
        <div>
          <!-- form -->
          <form @submit="handleSubmit" class="mt-5">
            <div>
              <div>
                <label for="FullName" class="font-display text-xs">Full Name</label>
                <input
                  type="text"
                  name="FullName"
                  id="FullName"
                  v-model="fullName"
                  class="block min-w-110 grow py-1.5 pr-3 pl-1 mt-3 mb-3 border border-gray-600 rounded-sm focus:outline-none font-display text-xs"
                />
                <p v-if="fullNameerror" class="text-red-500 text-xs ml-2">{{ fullNameerror }}</p>
              </div>
              <div>
                <label for="Email" class="font-display text-xs">Email</label>
                <input
                  type="email"
                  name="Email"
                  id="Email"
                  v-model="email"
                  class="block min-w-110 grow py-1.5 pr-3 pl-1 mt-3 mb-3 border border-gray-600 rounded-sm focus:outline-none font-display text-xs"
                />
                <p v-if="emailerror" class="text-red-500 text-xs ml-2">{{ emailerror }}</p>
              </div>
              <div>
                <label for="Password" class="font-display text-xs">Password</label>
                <input
                  type="Password"
                  name="Password"
                  id="Password"
                  v-model="password"
                  class="block min-w-110 grow py-1.5 pr-3 pl-1 mt-3 mb-3 border border-gray-600 rounded-sm focus:outline-none font-display text-xs"
                />
                <p v-if="passworderror" class="text-red-500 text-xs ml-2">{{ passworderror }}</p>
              </div>
              <div class="flex items-center justify-center">
                <button
                  type="submit"
                  class="bg-[#5271FF] p-3 rounded-sm w-30 mt-5 text-white font-display text-sm font-bold align-center text-center"
                >
                  Create
              </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
