<template>
  <div>
    <div class="AddNotes container__frame grid">
      <div class="AddRates__title grid__row">
        <h4 class="h--bold">Notas</h4>
        <hr>
      </div>
      <label>Resumen</label>
      <div>
        <textarea class="input__text"
                  placeholder="Escribe algo aqui" 
                  name="resumen"
                  rows="3" cols="48" 
                  required></textarea>
                  <span></span>
      </div>
      <label>Notas</label>
      <div>
        <textarea class="input__text"
                  placeholder="Escribe algo aqui"
                  name="notes"
                  rows="6" cols="48"
                  required></textarea>
                <span></span>
      </div>     
    </div>
  </div>
</template>

<script>
export default {
  name: 'AddNotes',
  data () {
    return {

    }
  }
}
</script>

<style>

</style>