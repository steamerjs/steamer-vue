import Vue from 'vue'
import Main from './main.vue'

new Vue({
    el: '#main',
    render: h => h(Main)
})


var b = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve(1)
    })
})
b.then(function (number) {
    console.log(number)
})
console.log(1)
export default {
    name: '1'
}
