<template>
  <div class="box-gray modules">
    <div v-for="module in modules">
      <p>{{ module }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      modules: ['Compraventas', 'Módulo 2', 'Módulo 3', 'Módulo 4']
    }
  }
}
</script>

<style>
.box-green {
  border: 2px solid #eee;
  border-radius: 10px;
  padding: 2rem;
  width: 100%;
}
.modules {
  display: grid;
  grid-template-columns: 2fr 2fr;
  grid-template-rows: 2fr 2fr;
  align-items: center;
  justify-items: center;
  padding: inherit;
}
.modules div {
  color: #999;
  line-height: 12rem;
  background: none;
  border: 2px solid #ddd;
  padding: 0 1rem;
  display: block;
  width: 20rem;
  height: 12rem;
  box-shadow: 0px 0.4rem 0.6rem 0px rgba(0,0,0,0.2);
  transition: background-color 0.3s ease;
}
.modules div:nth-child(1) {
  border-color: #10b8ff; /*light blue*/
  color: #10b8ff
}
.modules div:nth-child(2) {
  border-color: #09eaae; /*light green*/
  color: #09eaae;
}
.modules div:nth-child(3) {
  border-color: #9d16c7; /*purple*/
  color: #9d16c7;
}
.modules div:nth-child(1):hover {
  border: none;
  background: #10b8ff;
  color: #fff
}
.modules div:nth-child(2):hover {
  border: none;
  background: #09eaae;
  color: #fff;
}
.modules div:nth-child(3):hover {
  border: none;
  background: #9d16c7;
  color: #fff;
}
.modules div p {
  font-size: 2.3rem;
  line-height: 1.5rem;
  text-align: center;
  width: 100%;
  display: inline-block;
  font-weight: 900;
}

</style>
