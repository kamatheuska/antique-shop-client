<template>
  <div class="box-gray status">
    <div id="status-signal"></div>
    <h1>{{ status }} </h1>
    <h1>{{ datenow }}</h1>
  </div>
</template>

<script>
import moment from 'moment'

export default {
  data () {
    return {
      datenow: '',
      status: 'ACTIVE'
    }
  },
  methods: {
    time () {
      this.datenow = moment().format('DD/MM/YYYY HH:mm:ss')
    }
  },
  mounted () {
    this.interval = setInterval(this.time, 1000)
  },
  beforeDestroy () {
    clearInterval(this.interval)
  }
}
</script>

<style scoped>
.status {
  width: 70%;
  height: 100%;
  padding: 0;
  box-shadow: 0px 0.4rem 0.8rem 0px rgba(0,0,0,0.2);
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1rem;
  align-items: center;
  justify-items: center;
}
#status-signal {
  height: 2.5rem;
  width: 2.5rem;
  border-radius: 2rem;
  background: red;
}
.status h1:last-child {
  grid-column: 3 / -1;
}

</style>
