<template>
  <div class="dialog">
    <div @click.stop class="dialog-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>

export default {
  name: 'ModalWindow',
}
</script>

<style scoped>

</style>