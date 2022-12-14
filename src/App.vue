<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

import {onBeforeMount} from "vue";
import {v4 as uuidv4} from "uuid";

export default {
  name: 'App',
  setup() {
    onBeforeMount(() => {
      let date = new Date();
      let day1 = new Date(date.setDate(date.getDate()))
      let day2 = new Date(date.setDate(date.getDate()+1));
      let day3 = new Date(date.setDate(date.getDate()+1));
      let day4 = new Date(date.setDate(date.getDate()+1));
      let day5 = new Date(date.setDate(date.getDate()+1));
      let day6 = new Date(date.setDate(date.getDate()+1));
      let day7 = new Date(date.setDate(date.getDate()+1));

      function createArray(day){
        return [
        {
            isEmpty: true,
            time: '08:00',
            id: uuidv4(),
            start: new Date(day.getFullYear(), day.getMonth(), day.getDate(), 8, 0),
            end: new Date(day.getFullYear(), day.getMonth(), day.getDate(), 9, 0),
            clientName: '',
            reason: ''
        },
        {
            isEmpty: true,
            time: '09:00',
            id: uuidv4(),
            start: new Date(day.getFullYear(), day.getMonth(), day.getDate(), 9, 0),
            end: new Date(day.getFullYear(), day.getMonth(), day.getDate(), 10, 0),
            clientName: '',
            reason: ''
        },
        {
            isEmpty: true,
            time: '10:00',
            id: uuidv4(),
            start: new Date(day.getFullYear(), day.getMonth(), day.getDate(), 10, 0),
            end: new Date(day.getFullYear(), day.getMonth(), day.getDate(), 11, 0),
            clientName: '',
            reason: ''
        },
        {
            isEmpty: true,
            time: '11:00',
            id: uuidv4(),
            start: new Date(day.getFullYear(), day.getMonth(), day.getDate(), 11, 0),
            end: new Date(day.getFullYear(), day.getMonth(), day.getDate(), 12, 0),
            clientName: '',
            reason: ''
        },
        {
            isEmpty: true,
            time: '12:00',
            id: uuidv4(),
            start: new Date(day.getFullYear(), day.getMonth(), day.getDate(), 12, 0),
            end: new Date(day.getFullYear(), day.getMonth(), day.getDate(), 13, 0),
            clientName: '',
            reason: ''
        },
        {
            isEmpty: true,
            time: '13:00',
            id: uuidv4(),
            start: new Date(day.getFullYear(), day.getMonth(), day.getDate(), 13, 0),
            end: new Date(day.getFullYear(), day.getMonth(), day.getDate(), 14, 0),
            clientName: '',
            reason: ''
        },
        {
            isEmpty: true,
            time: '14:00',
            id: uuidv4(),
            start: new Date(day.getFullYear(), day.getMonth(), day.getDate(), 14, 0),
            end: new Date(day.getFullYear(), day.getMonth(), day.getDate(), 15, 0),
            clientName: '',
            reason: ''
        },
        {
            isEmpty: true,
            time: '15:00',
            id: uuidv4(),
            start: new Date(day.getFullYear(), day.getMonth(), day.getDate(), 15, 0),
            end: new Date(day.getFullYear(), day.getMonth(), day.getDate(), 16, 0),
            clientName: '',
            reason: ''
        },
            {
            isEmpty: true,
            time: '16:00',
            id: uuidv4(),
            start: new Date(day.getFullYear(), day.getMonth(), day.getDate(), 16, 0),
            end: new Date(day.getFullYear(), day.getMonth(), day.getDate(), 17, 0),
            clientName: '',
            reason: ''
        },
            {
            isEmpty: true,
            time: '17:00',
            id: uuidv4(),
            start: new Date(day.getFullYear(), day.getMonth(), day.getDate(), 17, 0),
            end: new Date(day.getFullYear(), day.getMonth(), day.getDate(), 18, 0),
            clientName: '',
            reason: ''
        },
      ]
      }

      let plans =
        {
          [day1.toDateString()]: createArray(day1),
          [day2.toDateString()]: createArray(day2),
          [day3.toDateString()]: createArray(day3),
          [day4.toDateString()]: createArray(day4),
          [day5.toDateString()]: createArray(day5),
          [day6.toDateString()]: createArray(day6),
          [day7.toDateString()]: createArray(day7)
        }

      if (localStorage.getItem('plans') === null) {
        localStorage.setItem('plans', JSON.stringify(plans))
      }
    })
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 10px;
}
</style>
