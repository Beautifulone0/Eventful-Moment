<script setup>
import { useRouter } from "vue-router";
import { ref } from "vue";

const email = ref("");
const password = ref("");
const emailerror = ref("");
const passworderror = ref("");

const router = useRouter();

//  Validate Form
const validateForm = () => {
  emailerror.value = "";
  passworderror.value = "";

  if (!email.value) {
    emailerror.value = "Please enter your email address.";
    return false;
  } else if (!email.value.includes("@")) {
    emailerror.value = "Please enter a valid email address.";
    return false;
  } else {
    emailerror.value = "";
  }

  if (!password.value) {
    passworderror.value = "Please enter your password";
  } else if (password.value.length < 8) {
    passworderror.value = "Password must be at least 8 characters long.";
    return false;
  } else {
    passworderror.value = "";
  }

  return true;
};

// Submission
const handleSubmit = async (e) => {
  e.preventDefault();

  if (validateForm()) {
    router.push("/myBucket");
  }
};
</script>
<template>
  <div>
    <div class="flex flex-col items-center">
      <div class="md:w-96">
        <!-- main -->
        <div class="mt-15 w-100 md:w-110 leading-6 mx-5">
          <h1 class="font-display text-2xl font-bold">Welcome back,</h1>
          <p class="mt-5 mb-5 font-display text-md">
            Hi, my name is Eventful Moments, I am a bucket… no, not the bucket
            of water but I store awesome moments you will like to have in coming
            years.
          </p>
        </div>
        <div>
          <!-- form -->
          <form @submit="handleSubmit" class="mt-5 mx-5">
            <div class="">
              <div class="">
                <label for="Email" class="font-display">Email</label>
                <input
                  type="email"
                  name="Email"
                  id="Email"
                  v-model="email"
                  class="block w-100 md:min-w-110 grow py-1.5 pr-3 pl-1 mt-3 mb-3 border border-gray-600 rounded-sm focus:outline-none"
                />
                <p v-if="emailerror" class="text-red-500 text-xs">
                  {{ emailerror }}
                </p>
              </div>
              <div class="">
                <label for="Password">Password</label>
                <input
                  type="Password"
                  name="Password"
                  id="Password"
                  v-model="password"
                  class="block w-100 md:min-w-110 grow py-1.5 pr-3 pl-1 mt-3 mb-3 border border-gray-600 rounded-sm focus:outline-none"
                />
                <p v-if="passworderror" class="text-red-500 text-xs">
                  {{ passworderror }}
                </p>
              </div>
              <div class="flex items-center justify-center">
                <button
                  type="submit"
                  class="bg-[#5271FF] p-3 rounded-sm w-30 mt-5 text-white font-display text-sm font-bold align-center text-center"
                >
                  Login
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
