<script setup></script>

<template>
  <div>
    <!-- Nav Bar -->
    <div>
      <div
        class="navbar bg-[#008289] flex items-center justify-between w-full p-5"
      >
        <div class="title">
          <h1
            class="font-display text-md text-white opacity-100 italic font-bold"
          >
            Eventful Moments.
          </h1>
        </div>
        <div>
          <ul class="flex items-center gap-5">
            <li class="font-display text-sm text-white">
              <a href="#">Login</a>
            </li>
            <li class="font-display text-sm text-white">
              <a href="#">Register</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>

  <div>
    <div class="flex flex-col items-center">
      <div class="w-96">
        <!-- main -->
      <div class="mt-15 w-110 leading-6">
        <h1 class="font-display text-2xl font-bold">Welcome back,</h1>
        <p class="mt-5 mb-5 font-display text-md">
          Hi, my name is Eventful Moments, I am a bucket… no, not the bucket of
          water but I store awesome moments you will like to have in coming
          years.
        </p>
      </div>
      <div>
        <!-- form -->
        <form class="mt-5">
          <div>
            <div>
              <label for="Email" class="font-display">Email</label>
              <input
                type="Email"
                name="Email"
                id="Email"
                class="block min-w-110 grow py-1.5 pr-3 pl-1 mt-3 mb-3 border border-gray-600 rounded-sm focus:outline-none"
              />
            </div>
            <div>
              <label for="Password">Password</label>
              <input
                type="Password"
                name="Password"
                id="Password"
                class="block min-w-110 grow py-1.5 pr-3 pl-1 mt-3 mb-3 border border-gray-600 rounded-sm focus:outline-none"
              />
            </div>
            <div class="flex items-center justify-center">
              <button
                type="submit"
                class="bg-[#5271FF] p-3 rounded-sm w-30 mt-5 text-white font-display text-sm font-bold  align-center text-center"
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

    <!-- footer -->
    <div class="bg-[#60CED4] w-full p-5 mt-19">
      <p class="text-right text-sm font-display opacity-100">
        Eventful Moments by Place Your Name Here
      </p>
    </div>
</template>
