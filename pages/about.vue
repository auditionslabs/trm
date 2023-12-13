<script setup>
    definePageMeta({
        layout:false,
    });
</script>
<template>
    <div>
        <SideBar/>
       <NuxtLayout name="custom">
            <h1>Pages/About Page</h1>       
       </NuxtLayout>
    </div>
</template>
  <!-- //method 1
layout:false,
//method 2
layout:"custom", -->