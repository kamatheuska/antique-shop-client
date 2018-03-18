 <template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
body, html {
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
  background: #eee;
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
  color: #666;
  overflow: hidden;
}
.box-gray {
  border: 2px solid #eee;
  border-radius: 10px;
  padding: 2rem;
  width: 100%;
  background: #fff;
  box-shadow: 0px 0.4rem 0.8rem 0px rgba(0,0,0,0.2);
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
</style>
