<template>
  <div class="box-gray shortcuts">
    <button
      @click="goToSell()"
      class="btn">VENDER
    </button>
    <button class="btn">COMPRAR</button>
    <button class="btn">CONSULTAR</button>
    <button
      @click="goToAddProduct()"
      class="btn">AGREGAR PRODUCTO
    </button>
    <div class="dropdown">
      <button class="dropbtn">AGREGA OTRA ACCIÓN RÁPIDA:</button>
      <div class="dropdown-content">
        <p>ACCIÓN 1</p>
        <p>ACCIÓN 2</p>
        <p>ACCIÓN 3</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  methods: {
    goToSell () {
      this.$router.push('/products/sell')
    },
    goToAddProduct () {
      this.$router.push('/products/add')
    }
  }
}
</script>

<style scoped>
.shortcuts {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-gap: 1rem;
  align-items: center;
  justify-items: center;
}
.shortcuts button.btn:nth-child(2) { grid-row: 2 }
.shortcuts button.btn:nth-child(3) { grid-row: 3 }
.shortcuts button.btn:nth-child(4) { grid-row: 4 }
.shortcuts button.btn:nth-child(1):hover {
  border-color: #c2dce2;
  color: #c2dce2;
}
.shortcuts button.btn:nth-child(2):hover {
  border-color: #f7a830;
  color: #f7a830;
}
.shortcuts button.btn:nth-child(3):hover {
  border-color: #dbd3b8;
  color: #dbd3b8;
}
.shortcuts button.btn:nth-child(4):hover {
  border-color: #f7a830;
  color: #f7a830;
}
/* Dropdown Button */
.dropbtn {
  background: none;
  border: 2px solid #ddd;
  padding: 1rem 1.4rem;
  display: block;
  width: 80%;
  height: 5rem;
  transition: background-color 0.3s ease;
}
.dropdown {
  position: relative;
  display: inline-block;
}
/* Dropdown Content (Hidden by Default) */
.dropdown-content {
  display: none;
  position: absolute;
  background-color: #fff;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}
/* Links inside the dropdown */
.dropdown-content p {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

/* Change color of dropdown links on hover */
.dropdown-content p:hover {background-color: #ddd}

/* Show the dropdown menu on hover */
.dropdown:hover .dropdown-content {
  display: block;
}

/* Change the background color of the dropdown button when the dropdown content is shown */
.dropdown:hover .dropbtn {
  background-color: #6d6d6d;
  color: white;
}
</style>
