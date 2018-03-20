 <template>
  <div id="app">
    <transition name="fade" mode="out-in">
      <router-view/>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
/*#3c3c3b gris oscuro */
/*#c2dce2  azul claro*/
/*#f7a830  naranja  */
/*#dbd3b8 beige */
body, html {

  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
/*  background-image: url("/assets/logo.png");
  background-size: cover;*/
  background-color: #3c3c3b;
  font-size: 10px;
}
html * {
  box-sizing: border-box;
}
#app {
  height: 100%;
  width: 100%;
  font-family: 'Montserrat', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #dbd3b8;
  overflow: hidden;
}
.box-gray {
  border: 2px solid #eee;
  border-radius: 10px;
  padding: 2rem;
  width: 100%;
  background: #fff;
  box-shadow: 0px 0.4rem 0.8rem 0px rgba(0,0,0,0.8);
}
.container {
  padding: 3rem 10rem;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(12, 1fr);
  height: 100%;
  width: 100%;
}
.btn {
  position: relative;
  background: none;
  border: 2px solid #ddd;
  padding: 1rem 2rem;
  display: block;
  width: 70%;
  height: 5rem;
  color: #6d6d6d;
  cursor: pointer;
}
a {
  display: block;
  text-decoration: none;
  color: inherit;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
