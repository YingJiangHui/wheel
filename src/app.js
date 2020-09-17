import Vue from 'vue'
import Button from './button.vue'
import ButtonGroup from './button-group.vue'
import Input from './input.vue'
import Row from './row.vue'
import Col from './col.vue'
import Header from './header'
import Footer from './footer'
import Content from './content'
import Layout from './layout'
import Sider from './sider'

Vue.component('w-button', Button)
Vue.component('w-button-group', ButtonGroup)
Vue.component('w-input', Input)
Vue.component('w-row',Row)
Vue.component('w-col',Col)
Vue.component('e-header',Header)
Vue.component('e-footer',Footer)
Vue.component('e-content',Content)
Vue.component('e-sider',Sider)
Vue.component('e-layout',Layout)

new Vue({
    data(){
        return{
            loading1:false,
            loading2:false,
            loading3:true,
            message:'hi'
        }
    },
    methods:{
        fn(e){
            console.log(e)
        }
    }
}).$mount('#app')

