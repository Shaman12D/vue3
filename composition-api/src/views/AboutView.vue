<template>
  <div class="about">
    <h1>{{ title }}</h1>
    <button @click="Cambiartitulo">Cambiar titulo</button>
  </div>
</template>
<script>
  import {
    ref,
    onUpdated,
    onMounted,
    onUnmounted,
    onBeforeMount,
    onBeforeUpdate,
    onBeforeUnmount,
    onErrorCaptured,
    onRenderTracked,
    onRenderTriggered,
    onActivated,
    onDeactivated,
    onServerPrefetch,
  } 
  from 'vue'

  export default{
    setup() {
      const title = ref('About')

      onUpdated(()=>{console.log("onUpdated")}),
      onMounted(()=>{console.log("onMounted")}),
      onUnmounted(()=>{console.log("onUnmounted")}),
      onBeforeMount(()=>{console.log("onBeforeMount")}),
      onBeforeUpdate(()=>{console.log("onBeforeUpdate")}),
      onBeforeUnmount(()=>{console.log("onBeforeUnmount")}),
      onErrorCaptured(()=>{console.log("onErrorCaptured")}),
      onRenderTracked(()=>{console.log("onRenderTracked")}),
      onRenderTriggered(()=>{console.log("onRenderTriggered")}),
      onActivated(()=>{console.log("onActivated")}),
      onDeactivated(()=>{console.log("onDeactivated")}),
      onServerPrefetch(()=>{console.log("onServerPrefetch")})

      return{
        title,
        Cambiartitulo:()=>title.value='New About'
      }
    }
  }
</script>