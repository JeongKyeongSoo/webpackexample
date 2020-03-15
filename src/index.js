import hello_word from "./hello.js"
import world_word from "./world.js"
import css from './style.css'
import _ from 'lodash'
import $ from 'jquery'
import axios from 'axios'

console.log('css ', css)
// document.querySelector("#root").innerHTML =_.join([hello_word, world_word], ' ');
$('#root').text('aaa')

axios.get('test.txt')
.then(function(response){
    console.log(response.data)
})
