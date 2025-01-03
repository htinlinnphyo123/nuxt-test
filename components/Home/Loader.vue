<template>
  <div>
    <div>
      <Skeleton height="5rem" width="100%" class="animate-pulse" />
    </div>
    <br />
    <div class="mx-3">
      <Skeleton height="10rem" width="100%" class="animate-pulse" />
    </div>
    <br />
    <div class="grid grid-cols-1 lg:grid-cols-3 mx-3">
      <div class="col-span-2">
        <Skeleton width="100%" height="520px" class="animate-pulse" />
      </div>

      <div class="mt-5">
        <ul
          class="list-none border border-surface-200 dark:border-surface-700 rounded p-4 flex flex-col gap-2 relative"
        >
          <div class="absolute px-2 bg-white" style="top: -1rem">
            <h1 class="text-3xl font-semibold">{{ title }}</h1>
          </div>
          <li
            v-for="y in 4"
            :key="y"
            class="p-2 hover:bg-surface-100 dark:hover:bg-surface-800 rounded border border-transparent transition-all transition-duration-200 mt-2"
          >
            <div class="flex flex-wrap items-center gap-4">
              <Skeleton height="5rem" width="100%" class="animate-pulse" />
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script setup>
import { Skeleton } from "primevue";
const title = "Latest News";
</script>
