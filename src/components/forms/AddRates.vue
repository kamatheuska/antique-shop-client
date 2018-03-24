<template>
  <div>
    <div class="AddRates
                container__frame grid">
      <div class="AddRates__title grid__row">
        <h4 class="h--bold">Valores</h4>
        <hr>
      </div>
      <div class="AddRates__pvp">
        <h5 class="h--bold">Precios de venta al público</h5>
        <label>Unidad
        <input class="input__number"
                type="number"
                placeholder="€" 
                name="pvp.unit"
                required><span></span></label>        
        <label>Colección
        <input class="input__number"
                type="number"
                placeholder="€"
                name="pvp.collection"><span></span></label>
      </div>
      <div class="AddRates__costs">
        <h5  class="h--bold">Costos</h5>
        <label>Costos
        <input class="input__number"
                type="number"
                placeholder="€" 
                name="cost"><span></span></label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AddRates',
  data () {
    return {
      rates:{ active: true }
    }
  }
}
</script>

<style scoped>
.AddRates { 
  grid-template-columns: repeat(2, auto);
  grid-template-rows: repeat(2, auto);
}
.AddRates > *    { grid-row: span 2 }
.AddRates__title { grid-row: span 1 }
.AddRates__title .h--bold { text-align: right }
.AddRates__pvp   { grid-column: 1 }
.AddRates__costs { grid-column: 2 }
</style>