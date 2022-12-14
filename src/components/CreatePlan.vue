<template>
  <div class="create-plan">
    <div>
      <p>Начало</p>
      <Datepicker
          v-model="startDate"
          :allowed-dates="allowedDates"
          :start-time="{ hours: 8, minutes: 0 }"
          :min-time="{ hours: 8, minutes: 0 }"
          :max-time="{ hours: 18, minutes: 0 }"
      />
      <p>Конец</p>
      <Datepicker
          v-model="endDate"
          :allowed-dates="allowedDates"
          :start-time="{ hours: 8, minutes: 0 }"
          :min-time="{ hours: 8, minutes: 0 }"
          :max-time="{ hours: 18, minutes: 0 }"
      />
      <p>ФИО клиента</p>
      <input type="text" placeholder="🖊" v-model="clientName" required>
      <p>Причина обращения</p>
      <input type="text" placeholder="🖊" v-model="reason" required>
    </div>
    <div>
      <button @click="addNew">Создать</button>
    </div>
  </div>
</template>

<script>

import Datepicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';
import {ref} from "vue";
import { v4 as uuidv4 } from "uuid";

export default {
  name: "UserCreatePlan",
  components: { Datepicker },
  props: {
    modalVisibility: Boolean
  },
  setup() {
    const startDate = ref();
    const endDate = ref();
    const clientName = ref('');
    const reason = ref('');
    const allowedDates = [
        new Date(),
        new Date(new Date().setDate(new Date().getDate() + 1)),
        new Date(new Date().setDate(new Date().getDate() + 2)),
        new Date(new Date().setDate(new Date().getDate() + 3)),
        new Date(new Date().setDate(new Date().getDate() + 4)),
        new Date(new Date().setDate(new Date().getDate() + 5)),
        new Date(new Date().setDate(new Date().getDate() + 6))
    ];

    function addNew(){
      let newPlan = {
        isEmpty: false,
        time: (startDate.value.toLocaleString().substring(12, 17)),
        id: uuidv4(),
        start: startDate.value,
        end: endDate.value,
        clientName: clientName.value,
        reason: reason.value
      }

      if (startDate.value < endDate.value) {
        let plans = JSON.parse(localStorage.getItem('plans'));
        let todayPlans = plans[startDate.value.toDateString()]
        for (let i = 0; i < todayPlans.length; i++) {
          console.log(i)
          if (todayPlans[i].start <= startDate.value && todayPlans[i].isEmpty === true) {
            plans[startDate.value.toDateString()].splice(i, 1, newPlan);
            localStorage.setItem('plans', JSON.stringify(plans));
            alert("Событие создано");
            startDate.value = '';
            endDate.value = '';
            reason.value = '';
            clientName.value = '';
            return false
          } else {
            if (todayPlans[i].isEmpty === false

                && todayPlans[i].start < startDate.value
                && startDate.value < todayPlans[i].end
                && todayPlans[i].start < endDate.value
                && endDate.value < todayPlans[i].end

                && startDate.value < todayPlans[i].start
                && todayPlans[i].start < endDate.value
                && startDate.value < todayPlans[i].end
                && todayPlans[i].end < endDate.value) {

              alert('Это время занято');
              return false

            } else {
              console.log(todayPlans[i].isEmpty === false

                && todayPlans[i].start < startDate.value
                && startDate.value < todayPlans[i].end
                && todayPlans[i].start < endDate.value
                && endDate.value < todayPlans[i].end

                && startDate.value < todayPlans[i].start
                && todayPlans[i].start < endDate.value
                && startDate.value < todayPlans[i].end
                && todayPlans[i].end < endDate.value)
              plans[startDate.value.toDateString()].splice(i, 1, newPlan);
              localStorage.setItem('plans', JSON.stringify(plans));
              alert("Событие создано");
              startDate.value = '';
              endDate.value = '';
              reason.value = '';
              clientName.value = '';
              return false
            }
          }
        }
      } else {
        alert('Неверно введена дата: Время окончания должно быть позже времени начала')
      }
    }

    return { startDate, endDate, clientName, reason, allowedDates, addNew }
  }
}
</script>

<style scoped>

</style>