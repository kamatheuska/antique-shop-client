<template>
  <div class="box-gray products-list"
    v-bind:class="classActiveStep">
    <div>
      <h1 @click="showProducts()">1 - Escoge los productos:</h1>      
    </div>
    <transition>
      <div v-if="db.showData" class="products">
        <ul v-for="(category, i) in db.schema"
            :key="category.id">
          <li>
            <span @click="showChildren(i, category.name)">
            {{ db.schema[i].name }}</span>
            <transition name="slide-fade">
              <ul v-if="db.schema[i].selected">
                <li class="subcategory-list"
                  v-for="(subcategory, subIndex) in db.schema[i].children"
                  :key="subcategory.id"
                  @click="showItems(i, subIndex)">
                  {{ subcategory.name }}
                </li>
              </ul>
            </transition>
          </li>
        </ul>
        <div class="box-gray"></div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data () {
    return {
      db: {
        showData: false,
        response: [
          {
            _ID: 3011029,
            ARTICULO: 'VASO ANTIGUO METAL',
            CANT: 3,
            PVP: 20,
            CATEGORY: 'OBJETO',
            SUBCATEGORY: 'METAL'
          },
          {
            _ID: 1040010,
            ARTICULO: 'SILLA SIGLO XIX',
            CANT: 5,
            PVP: 200,
            CATEGORY: 'MUEBLE',
            SUBCATEGORY: 'SILLA'
          },
          {
            _ID: 1040011,
            ARTICULO: 'MESA DE MÁRMOL',
            CANT: 2,
            PVP: 2200,
            CATEGORY: 'MUEBLE',
            SUBCATEGORY: 'MESA'
          }
        ],
        schema: [
          {
            id: 0,
            name: 'MUEBLES',
            selected: false,
            children: [
              { id: 0, active: false, name: 'SILLAS' },
              { id: 1, active: false, name: 'SILLONES' },
              { id: 2, active: false, name: 'MESAS' }
            ]
          },
          {
            id: 1,
            name: 'OBJETOS',
            selected: false,
            children: [
              { id: 0, active: false, name: 'METALES' },
              { id: 1, active: false, name: 'PLATA' }
            ]
          },
          {
            id: 2,
            name: 'LAMPARAS',
            selected: false,
            children: [
              { id: 0, active: false, name: 'TECHO' },
              { id: 1, active: false, name: 'MESA' }
            ]
          }
        ]
      },
      selection: {
        parent: '',
        child: ''
      }
    }
  },
  methods: {
    showProducts () {
      this.db.showData = !this.db.showData
    },
    showChildren (index) {
      this.db.schema[index].selected = !this.db.schema[index].selected
      let othersID = this.db.schema
        .filter(item => item.id !== index)
        .filter(item => item.selected == true)
        .map(item => item.id)
        .forEach(id => {
          this.db.schema[id].selected = !this.db.schema[id].selected
        })
      this.selectCategories('parent',this.db.schema[index].name)
    },
    showItem (parentIndex, childIndex) {
      let item = this.db.schema[parentIndex].children[childIndex]

      selectCategories('child', item.name)
    },
    selectCategories (type, name) {
      return type == 'child' ?
        this.selection.child = name
        : this.selection.parent = name
    }
  },
  computed: {
    classActiveStep () {
      return {
        activeStep: this.db.showData
      }
    }
  }
}
</script>

<style>
.products-list {
  display: grid;
  grid-template-rows: repeat(12, 1fr);
  grid-template-columns: repeat(12, 1fr);
}
.products {
  grid-column: 1 / -1;
  grid-row: 3 / -1;
  display: grid;
  grid-template-rows: repeat(6, 1fr);
  grid-template-columns: repeat(6, 1fr);
}
.products-list div:first-child {
  align-self: center;
  grid-column: 1 / -1;
  grid-row: 6;
}
.products-list .box-gray {
  grid-column: 5 / span 2;
  grid-row: 1 / -1;
  border: none;
  border-top: 2px solid #eee;
}
.products-list h1 {
  text-align: center;
  line-height: 1.5rem;
}
.products-list li {
  font-size: 2rem;
  cursor: pointer;
  text-decoration: none;
  list-style-type: none;
}
li.subcategory-list {
  font-size: 1.7rem;
  margin: 1rem 0;
}

/* TRANSITIONS AND EFFECTS */
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .4s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to {
  transform: translateX(10px);
  opacity: 0;
}
.activeStep {
  position: absolute;
  z-index: 1000;
}
.activeStep div:first-child {
  grid-row: 1;
}
</style>
