<template>
  <div class="box box-gray products-selection"
    v-bind:class="classActiveStep">
    <div>
      <h1 @click="showProducts()">1 - Escoge los productos: </h1>
    </div>
    <transition>
      <div
        v-if="db.showData"
        class="products-selection-exp">
        <ul
          class="category-list"
          v-for="(category, i) in db.schema"
           :key="category.id">
          <li>
            <span @click="showChildren(i, category.name)">
            {{ db.schema[i].name }}</span>

            <transition name="slide-fade">
              <ul
                v-if="db.schema[i].selected"
               class="subcategory-list">
                <li
                  v-for="(subcategory, j) in db.schema[i].children"
                   :key="subcategory.id">
                  <span @click="showItems(i, j)">
                  {{ subcategory.name }}</span>
                </li>
              </ul>
            </transition>

          </li>
        </ul>
        <div class="box box-gray table-products">
          <table>
            <caption>Articulos disponibles:</caption>
            <tr v-if="selection.available.length !== 0">
              <th>ID</th>
              <th>CANT</th>
              <th>ARTICULO</th>
              <th>PVP</th>
              <th></th>
            </tr>
            <tr v-for="(item, l) in selection.available">
              <td>{{ item._ID }}</td>
              <td>{{ item.CANT }}</td>
              <td>{{ item.ARTICULO }}</td>
              <td>{{ item.PVP }}</td>
              <td @click="addItem(item, l)">
                <div class="symbol">+</div>
              </td>
            </tr>
          </table>
        </div>
        <div class="box box-gray selected-items">
          <table>
            <caption>Articulos seleccionados</caption>
            <tr v-if="selection.items.length !== 0">
              <th>ARTICULO</th>
              <th>PVP</th>
              <th>CANT</th>
              <th>IVA</th>
              <th>DTO</th>
              <th>TOTAL</th>
            </tr>
            <tr v-for="(item, m) in selection.items">
              <td>{{ item.ARTICULO }}</td>
              <td>{{ item.PVP }}</td>
              <td>
                <input
                   @input="changeSelectedItem"
                     type="number"></td>
              <td><input type="text"> %</td>
              <td>
                <input type="number"> %</td>
              <td> €</td>
              <td @click="removeItem(item, m)">
                <div class="symbol">-</div>
              </td>
            </tr>
          </table>
        </div>
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
            CATEGORY: 'OBJETOS',
            SUBCATEGORY: 'METALES'
          },
          {
            _ID: 3011119,
            ARTICULO: 'TAZA VIEJA METAL',
            CANT: 1,
            PVP: 2,
            CATEGORY: 'OBJETOS',
            SUBCATEGORY: 'METALES'
          },
          {
            _ID: 1040010,
            ARTICULO: 'SILLA SIGLO XIX',
            CANT: 5,
            PVP: 200,
            CATEGORY: 'MUEBLES',
            SUBCATEGORY: 'SILLAS'
          },
          {
            _ID: 1040011,
            ARTICULO: 'MESA DE MÁRMOL',
            CANT: 2,
            PVP: 2200,
            CATEGORY: 'MUEBLES',
            SUBCATEGORY: 'MESAS'
          },
          {
            _ID: 1040010,
            ARTICULO: 'LAMPARA AZULADA',
            CANT: 1,
            PVP: 3020,
            CATEGORY: 'LAMPARAS',
            SUBCATEGORY: 'TECHO'
          },
          {
            _ID: 1040011,
            ARTICULO: 'LAMPARA DE DISEÑO',
            CANT: 1,
            PVP: 10040,
            CATEGORY: 'LAMPARAS',
            SUBCATEGORY: 'MESA'
          }
        ],
        schema: [
          {
            id: 0,
            name: 'MUEBLES',
            selected: false,
            children: [
              { id: 0, active: false, selected: false, name: 'SILLAS' },
              { id: 1, active: false, selected: false, name: 'SILLONES' },
              { id: 2, active: false, selected: false, name: 'MESAS' }
            ]
          },
          {
            id: 1,
            name: 'OBJETOS',
            selected: false,
            children: [
              { id: 0, active: false, selected: false, name: 'METALES' },
              { id: 1, active: false, selected: false, name: 'PLATA' }
            ]
          },
          {
            id: 2,
            name: 'LAMPARAS',
            selected: false,
            children: [
              { id: 0, active: false, selected: false, name: 'TECHO' },
              { id: 1, active: false, selected: false, name: 'MESA' }
            ]
          },
          {
            id: 3,
            name: 'OTRA CATEGORIA',
            selected: false,
            children: [
              { id: 0, active: false, selected: false, name: 'OTRA' },
              { id: 1, active: false, selected: false, name: 'OTRA' },
              { id: 2, active: false, selected: false, name: 'OTRA' },
              { id: 3, active: false, selected: false, name: 'OTRA' },
              { id: 4, active: false, selected: false, name: 'OTRA' },
              { id: 5, active: false, selected: false, name: 'OTRA' }
            ]
          },
          {
            id: 4,
            name: 'OTRA MAS',
            selected: false,
            children: [
              { id: 0, active: false, selected: false, name: 'OTRA' },
              { id: 1, active: false, selected: false, name: 'OTRA' }
            ]
          }
        ]
      },
      selection: {
        parent: '',
        child: '',
        available: [],
        items: []
      }
    }
  },
  methods: {
    getTotal (item) {
      return item.PVP + 100
    },
    showProducts () {
      this.db.showData = !this.db.showData
    },
    showChildren (index) {
      this.db.schema[index].selected = !this.db.schema[index].selected
      this.db.schema
        .filter(item => item.id !== index)
        .filter(item => item.selected === true)
        .map(item => item.id)
        .forEach(id => {
          this.db.schema[id].selected = !this.db.schema[id].selected
        })
      this.selectCategories('parent', this.db.schema[index].name)
    },

    showItems (parentIndex, childIndex) {
      let subcategory = this.db.schema[parentIndex].children[childIndex]
      // eslint-disable-next-line
      this.selection.available.length === 0 ? this.selection.available.pop() : ''
      subcategory.selected = !subcategory.selected

      this.selectCategories('child', subcategory.name)

      let items = this.db.response.filter((item) => {
        return item.CATEGORY === this.selection.parent
      }).filter((item) => {
        return item.SUBCATEGORY === this.selection.child
      })

      this.selection.available = items
    },
    addItem (item, index) {
      this.selection.items.push(item)
    },
    removeItem (item, index) {
      this.selection.items.splice(index, 1)
    },
    changeSelectedItem () {

    },
    selectCategories (type, name) {
      if (type === 'parent') {
        this.selection.child = ''
        this.selection.parent = name
      } else {
        this.selection.child = name
      }
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
.symbol {
  line-height: 1.4rem;
  border: 1.5px #888 solid;
  border-radius: 2rem;
  height: 1.6rem;
  width: 1.6rem;
  display: inline-block;
  text-align: center;
  font-size: 1.4rem;
  color: #555;
  background: #eee;
  font-weight: 900;
  cursor: pointer;

}
.products-selection {
  display: grid;
  grid-template-rows: repeat(12, 1fr);
  grid-template-columns: repeat(12, 1fr);
  color: #3c3c3b;
}
.products-selection-exp {
  grid-column: 1 / -1;
  grid-row: 3 / -1;
}
/*.products-selection-exp ul {
  grid-row: span 2;
}*/
.products-selection div:first-child {
  align-self: center;
  grid-column: 1 / -1;
  grid-row: 6;
}
.products-selection h1 {
  text-align: center;
  line-height: 1.5rem;
}
.products-selection-exp {
  display: grid;
  grid-template-rows: repeat(12, 1fr);
  grid-template-columns: repeat(12, 1fr);
}
.products-selection-exp .category-list:nth-child(n + 5) { grid-row: 2; }
.products-selection-exp .selected-items {
  background: #c2dce2;
  grid-column: 6 / -1;
  grid-row: 1 / -1;
}
.products-selection-exp .selected-items table {
  width: 100%;
  font-size: 2rem;
}
.products-selection-exp .selected-items caption {
  width: 100%;
  font-size: 1.8rem;
  margin-bottom: 1rem;
  font-weight: 900;
}
.products-selection-exp .selected-items th {
  text-align: left;
}
.products-selection-exp .selected-items input {
  text-align: right;
  font-size: 3.8rem;
  height: 5rem;
  width: 7rem;
  border: none;
  border: 1px #ccc solid;
}
.products-selection-exp .selected-items td:nth-child(4) {
  text-align: right;
}

.products-selection-exp .table-products {
  grid-column: 1 / span 6;
  grid-row: 6 / -1;
  background: #dbd3b8;
}
.products-selection-exp li {
  font-size: 1.5rem;
  cursor: pointer;
  text-decoration: none;
  list-style-type: none;
}
.products-selection-exp .subcategory-list li {
  font-size: 1.3rem;
  margin: 1rem 0;
}
#test {
  justify-self: left;
  grid-column: 12;
  grid-row: 1;
  font-size: 1.3rem;
}
.products-selection-exp .table-products {
  margin-left: 2rem;
  width: 70%;
  border: none;
  border-top: 2px solid #eee;
}
.products-selection-exp .table-products table {
  width: 100%;
  font-size: 1.5rem;
}
.products-selection-exp .table-products caption {
  width: 100%;
  font-size: 1.8rem;
  margin-bottom: 1rem;
  font-weight: 900;
}
.products-selection-exp .table-products th {
  text-align: left;
}

/* TRANSITIONS AND EFFECTS */
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .4s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to {
  transform: translateX(5rem);
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
