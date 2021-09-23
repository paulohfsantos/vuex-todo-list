<template>
  <div>
    <div class="todo_list">
      <div v-for="todo in allTodos" :key="todo.id" class="todo">
        {{ todo.desc }}
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'Todo',

  created() {
    this.fetchAllTodos()
  },

  methods: {
    ...mapActions(['fetchAllTodos'])
  },

  computed: {
    ...mapGetters(['allTodos'])
  }
}
</script>
