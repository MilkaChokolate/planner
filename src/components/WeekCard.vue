<template>
<div class="week-card">
  {{ name }}
  <task-card v-for="task in day" :key="task.id" :task="task"></task-card>
</div>
</template>

<script>

import TaskCard from "@/components/TaskCard";
export default {
  name: "WeekCard",
  components: { TaskCard },
  props: {
    day: Array,
    name: String
  }
}
</script>

<style scoped>

</style>