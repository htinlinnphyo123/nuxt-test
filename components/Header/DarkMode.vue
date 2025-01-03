<template>
  <div>
    <button @click="toggleDarkMode" class="p-button p-button-outlined">
      Toggle Dark Mode
    </button>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const toggleDarkMode = () => {
  if (process.client) {
    const currentTheme = localStorage.getItem("theme");

    if (currentTheme === "dark") {
      document.body.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.body.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  }
};

onMounted(() => {
  if (process.client && localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
  }
});
</script>
