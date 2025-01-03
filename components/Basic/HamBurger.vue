<template>
    <button id="mobile-icon" class="hamburger xl:hidden cursor-pointer"
        :class="showMobileMenu==true ? 'active' : ''"
        @click="showMobileMenuFunction">
        <span class="bar bar1"></span>
        <span class="bar bar2"></span>
        <span class="bar bar3"></span>
    </button>
</template>

<script setup>
    import { ref,watch } from "vue";
    import { useRoute } from "vue-router";

    const showMobileMenu = ref(false);
    const emit = defineEmits(['showMobileEvent']);

     //change icon and emit Event to Open Mobile Menu category list when click HamBurger icon
    function showMobileMenuFunction(){
        showMobileMenu.value = !showMobileMenu.value;
        emit('showMobileEvent');
    }

    //change icon to Three bar when route change
    const route = useRoute();
    watch(route,()=>{
        // console.log('Route Changed');
        showMobileMenu.value = false;
    })

</script>