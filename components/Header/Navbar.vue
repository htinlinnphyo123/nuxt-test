<template>
  <div class="lg:sticky lg:top-0 lg:left-0" style="z-index: 10000">
    <header
      id="navbar"
      class="w-full bg-brand-primary relative px-2 xl:ps-[40px]"
    >
      <div
        class="w-full max-w-[1440px] mx-auto h-20 flex justify-between items-center gap-10 pr-8"
      >
        <div class="flex justify-start items-center gap-10">
          <HamBurger @showMobileEvent="showMobileMenu = !showMobileMenu" />
          <BrandLogo />
          <DesktopMenu />
          <!-- <DarkMode /> -->
        </div>
        <div class="flex justify-start items-center gap-10">
          <LocaleToggler />
          <MobileMenu :class="showMobileMenu ? 'active' : ''" />
        </div>
      </div>
    </header>
  </div>
</template>

<script setup>
import BrandLogo from "./BrandLogo.vue";
import LocaleToggler from "./LocaleToggler.vue";
import MobileMenu from "./MobileMenu.vue";
import DesktopMenu from "./DesktopMenu.vue";
import { onMounted, ref, watch } from "vue";
import HamBurger from "../Basic/HamBurger.vue";
import { useRoute } from "vue-router";

const showMobileMenu = ref(false);

//close category mobile menu list when route change
const route = useRoute();
watch(route, () => {
  showMobileMenu.value = false;
});
</script>
<style>
#navbar li {
  z-index: 150;
}
.mobile-menu ul li ul {
  display: none;
}
.mobile-menu ul li:hover ul {
  display: block;
}
.bar {
  display: block;
  width: 30px;
  height: 2px;
  margin: 5px auto;
  -webkit-transition: all 0.3s ease-in-out;
  transition: all 0.4s ease-in-out;
  background-color: #ffff;
}
.hamburger.active .bar1 {
  transform: translate(1px, 3.5px) rotate(50deg);
}
.hamburger.active .bar2 {
  display: none;
  opacity: 0;
}
.hamburger.active .bar3 {
  transform: translate(1px, -3.5px) rotate(130deg);
}
</style>
