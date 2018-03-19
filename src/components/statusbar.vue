<template>
  <div class="box-gray status">
    <div v-bind:class="classActive" id="status-signal"></div>
    <h1>{{ status }} </h1>
    <h1>{{ datenow }}</h1>
    <button @click="simulateLogin">LOGIN</button>
  </div>
</template>

<script>
import moment from 'moment'

export default {
  data () {
    return {
      datenow: '',
      status: 'ACTIVE',
      isActive: true
    }
  },
  methods: {
    time () {
      this.datenow = moment().format('DD/MM/YYYY HH:mm:ss')
    },
    simulateLogin () {
      this.isActive = !this.isActive
      this.isActive ? this.status = 'ACTIVE' : this.status = 'DISABLED'
    }
  },
  computed: {
    classActive () {
      return this.isActive ? 'active' : 'disabled'
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
  width: 85%;
  height: 100%;
  padding: 0;
  box-shadow: 0px 0.4rem 0.8rem 0px rgba(0,0,0,0.2);
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 1rem;
  align-items: center;
  justify-items: center;
}
#status-signal {
  height: 2.5rem;
  width: 2.5rem;
  border-radius: 2rem;
}
#status-signal.active {
  background: #09eaae;
}
#status-signal.disabled {
  background: #ff8b8b;
}
.status h1:nth-child(3) {
  grid-column: 3 / span 2;
}
.status button {
  background: #10b8ff;
  color: #fff;
  border: none;
  height: 4.3rem;
  border-radius: 3rem;
  opacity: 0.4;
  cursor: pointer;
}
</style>
