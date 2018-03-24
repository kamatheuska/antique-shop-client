<template>
  <div class="grid__col">
    <div class="AddItem box__big">
      <form class="AddItem__form grid grid--x12">
        <h2 class="grid__row h--bold">Nuevo Producto</h2>
        <div class="grid__row">
          <label class="AddItem__title">Nombre/Titulo
            <input placeholder="Silla Siglo XXI"
                          type="text"
                          name="title"
                          required autofocus><span></span></label>
        </div>
        <div class="grid__row--third AddItem__selector"
             v-for="(parent, index) in addItemForm">
          <span></span>
          <p class="AddItem__selector-name"
            @click="showSubForm({ name: 'addItemForm', parent })">
             {{parent.name}}
          </p>
        </div>
        <div class=" grid__row grid__col--sp6">
          <transition name="fade">
            <add-rates v-if="addItemForm[0].sel"
                      class="AddItem__rates">
                      </add-rates>
          </transition>
          <transition name="fade">
            <add-specs v-if="addItemForm[1].sel"
                      class="AddItem__specs">
                      </add-specs>
          </transition>
          <transition name="fade">
            <add-notes v-if="addItemForm[2].sel"
                      class="AddItem__notes">
                      </add-notes>
          </transition>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex'

import AddRates from '@/components/forms/AddRates'
import AddSpecs from '@/components/forms/AddSpecs'
import AddNotes from '@/components/forms/AddNotes'

export default {
  name: 'AddItem',
  data () {
    return {
      // form: [
      //   { name: 'VALORES', selected: false },
      //   { name: 'ESPECIFICACIONES', selected: false },
      //   { name: 'NOTAS', selected: false }
      // ]
    }
  },
  components: {
    'add-rates': AddRates,
    'add-specs': AddSpecs,
    'add-notes': AddNotes
  },
  computed: {
    ...mapState([ 'addItemForm' ])
  },
  methods: {
    ...mapActions([ 'toggleParentChild' ]),
    showSubForm (payload) {
      this.toggleParentChild(payload)
    },
  }
}
</script>

<style scoped>
.AddItem {
  background: #fff;
  color: black;
  transition: background-color 0.8s ease;
  padding: 2rem;
  font-weight: 600;
  font-size: 1.3em;
}
.AddItem__title { 
  display: inline-block;
  border: none;
}
.AddItem__selector      { display: inline-block }
.AddItem__selector-name { display: inline-block }
.AddItem__selector span:after {
  content: '►';
  padding: 0 0.5rem;
}

</style>