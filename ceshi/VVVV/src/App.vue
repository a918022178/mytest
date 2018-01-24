<template>
  <div id="app" class="container">
    <img src="./assets/logo.png">
    <!-- <keep-alive name=""> -->
      <transition :name="name">
      <router-view class="child-view"></router-view>
      </transition>
    <!-- </keep-alive> -->
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      name: "left"
    };
  },
  watch: {
    $route(to, from) {
      console.log(this.name);
      to.fullPath==this.getCookie('path')?this.name='slide-right' : this.name='slide-left'
      this.setCookie("path", from.fullPath);
    }
  },
  created() {
        pushHistory();  
        window.addEventListener("popstate", function(e) {  
            alert("我监听到了浏览器的返回按钮事件啦");//根据自己的需求实现自己的功能  
    }, false);  
        function pushHistory() {
            var state = {  
                title: "title",  
                url: "#"  
            };  
        window.history.pushState(state, "title", "#");  
    } 
  },
  methods: {
    setCookie(key, value, time) {
      var cookie_key = key;
      var oDate = new Date();
      oDate.setTime(oDate.getTime() + time);
      document.cookie =
        cookie_key +
        "=" +
        value +
        ";expires=" +
        oDate.toGMTString() +
        ";path=/";
    },
    getCookie(name) {
      var arr,
        reg = new RegExp("(^| )" +  name + "=([^;]*)(;|$)");
      if ((arr = document.cookie.match(reg))) {
        return unescape(arr[2]);
      } else {
        return null;
      }
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#app {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.container {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
/* 上面是为了保证滑动的时候不出现抖动情况 */
.child-view {
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);
  background-color: #f2f2f2;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
}
/* 当child-view的内容过多时会撑开child-view使得内部能够滚动 */
.slide-left-enter
{
  opacity: 0;
  transform: translate(750px, 0);
  /* transition-delay: 0.5s; */
}

.slide-right-enter {
  opacity: 0;
  transform: translate(-750px, 0);
}
.slide-left-leave-active,
.slide-right-leave-active {
  transition-delay: 0.5s;

}
/* .slide-enter-active {
  transition: all 0.3s ease;
} */
/* .slide-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
} */
</style>
