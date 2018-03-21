<template>
  <div class="box box-gray news">
    <table>
      <caption>Actividad reciente:</caption>
      <tr class="table-headings">
        <th>Fecha</th>
        <th>Actividad</th>
        <th>Completada</th>
      </tr>
      <tr class="table-data" v-for="entry in historal">
        <td>{{ entry.date }}</td>
        <td>{{ entry.log }} </td>
        <td>{{ entry.isCompleted }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
import moment from 'moment'

export default {
  data () {
    return {
      historal: [
        {
          date: moment('20180101T1523').format('DD/MM/YYYY HH:mm'),
          log: 'Agregados referencias 097082 y 0123752',
          isCompleted: false
        },
        {
          date: moment('20180312T2003').format('DD/MM/YYYY HH:mm'),
          log: 'Vendido 223111',
          isCompleted: true
        }
      ]
    }
  },
  methods: {
    completionDate () {
      this.dates.push()
    }
  },
  mounted () {
    this.completionDate()
  }
}
</script>

<style>
.news table {
  width: 100%;
  font-size: 1.4rem;
}
.news table th {
  background: #f7a830;
  color: #fff;
  padding: 0.7rem;
}
.news caption {
  text-align: right;
  font-size: 2rem;
  font-style: italic;
  color: #3c3c3b;
}
.news td {
  padding: 1rem;
}
.news table tr:nth-child(odd) {
  background-color: #dbd3b8;
  color: #3c3c3b;
}
.news table tr:nth-child(even) {
  background: #c2dce2;
  color: #3c3c3b;
}

/*
09eaae
9d16c7*/
</style>
