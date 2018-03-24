<template>
  <div>
    
  <div class="AddSpecs container__frame grid">
    <div class="AddSpecs__title grid__row">
      <h4 class="h--bold AddSpecs__title">Especificaciones</h4>
      <hr>
    </div>
    <div class="AddSpecs__amount">
      <h5 class="h--bold">Cantidades</h5>
      <div>
        <div>
          <label>¿Es una colección?</label>
          <label>Si<input name="isCollection"
                          type="radio"
                         value="true"></label>
          <label>No<input name="isCollection"
                          type="radio"
                         value="false"
                         checked></label>
        </div>
        <div class="AddSpecs__div">
          <label>¿Cuántos por colección?
          <input class="AddSpecs__amount--input input__number"
                  type="number"
                  name="amoun.collection.units"><span></span></label>
        </div>
        <div>
          <label>¿Cuántas unidades?
          <input class="AddSpecs__amount--input input__number"
                  type="number"
                  name="amount.units"
                  required><span></span></label>
        </div>
      </div>
    </div>
    <datalist id="countries">
      <option value="Alemania"></option>
      <option value="España"></option>
      <option value="Finlandia"></option>
      <option value="Dinamarca"></option>
      <option value="Francia"></option>
      <option value="Colombia"></option>
      <option value="Holanda"></option>
      <option value="Noruega"></option>
    </datalist>
    <div class="AddSpecs__designer">
      <h5 class="h--bold">Diseñador</h5>
      <div>
        <label>Nombre
        <input placeholder="Leonardo DaVinci"
                      type="text"
                      name="designer.name"></label>
        <label>Pais de origen
        <input  class="AddSpecs__datalist"type="text" list="countries"
               name="designer.name"><span></span></label>
      </div>
    </div>
    <div class="AddSpecs__manufacturer">
      <h5 class="h--bold">Fabricante</h5>
      <div>
        <label>Nombre
        <input placeholder="Knoll Productions"
                      type="text"
                      name="manufacturer.name"></label>
        <label>Pais de origen
        <input  class="AddSpecs__datalist"type="text" list="countries"
               name="manufacturer.name"><span></span></label>
      </div>
    </div>
    <div class="AddSpecs__measures">
      <h5 class="h--bold">Medidas</h5>
      <div>
        <div class="AddSpecs__div--inline">
          <label>Peso <span class="h6--italic">(gr)</span>
          <input class="input__number" 
                  type="number"
                  name="measures.weight"></label><br>
          <label>Altura <span class="h6--italic">(cm)</span>
          <input class="input__number" 
                  type="number"
                  name="measures.height"></label>
        </div>
        <div class="AddSpecs__div--inline">
          <label>Largo <span class="h6--italic">(cm)</span>
          <input class="input__number" 
                  type="number"
                  name="measures.long"></label><br>
          <label>Ancho <span class="h6--italic">(cm)</span>
          <input class="input__number" 
                  type="number"
                  name="measures.width"></label>        
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  name: 'AddSpecs',
  data () {
    return {

    }
  }
}
</script>

<style scoped>
.AddSpecs__title                   { text-align: right} 
.AddSpecs__amount *                { display: inline-block }
.AddSpecs__div                     { margin-left: 0.4rem }
.AddSpecs__datalist                { width: 11rem }
.AddSpecs__measures .input__number { margin: 0.3rem 0.5rem }
.AddSpecs__div--inline {
  float: left;
  text-align: right;
  margin-right: 1rem;
}
</style>
