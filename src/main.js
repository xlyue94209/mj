// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

//手动挂载vue
// import Vue from 'vue/dist/vue'
import Vue from 'vue'
import App from './App'
// import router from './router'
import VueDOMPurifyHTML from 'vue-dompurify-html'
import axios from 'axios'

Vue.config.productionTip = false
Vue.use(VueDOMPurifyHTML)
Vue.prototype.$axios = axios
/* eslint-disable no-new */

//注册全局组件
// Vue.component('comm',{
// 	//视图  使用template作为属性时 必须用vue.js  不用时可以用vue.runtime.js
// 	template:'<div>我是全局组件 {{ msg }}</div>',
// 	data(){
// 		return {
// 			msg:'im comm'
// 		}
// 	},
// 	methods:{

// 	}
// })

//注册全局组件
// import Comm_zujian from './components/Comm_zujian'
// Vue.component('Comm_zujian',Comm_zujian)
// Vue.component(Comm_zujian.name,Comm_zujian)


// new Vue({
//   el: '#app',
//   router,
//   components: { App },
//   template: '<App/>'
// })


// new Vue({
// 	render:h=>h(App),//渲染的内容
// }).$mount('#app')

new Vue({
  // router,
  components: { App },//注册
  template: '<App/>'
}).$mount('#app')



// 入口文件