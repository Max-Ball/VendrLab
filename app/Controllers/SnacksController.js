import { ProxyState } from "../AppState.js";
import { snacksService } from "../Services/SnacksService.js";


// PRIVATE FUNCTIONS


function _drawSnacks(){
  let snacks = ProxyState.snacks
  let template = ''
  snacks.forEach(snack => template += snack.Template)
  document.getElementById("snacks").innerHTML = template
}

function _drawBoughtSnacks(){
  let boughtSnacks = ProxyState.boughtSnacks
  let template = ' '
  boughtSnacks.forEach(boughtSnack => template += boughtSnack.boughtTemplate)
  console.log(template);
  document.getElementById('bought-snacks').innerHTML = template

}




// PUBLIC FUNCTIONS

export class SnacksController{
  constructor(){
    _drawSnacks()
    
  }

  getMoney(){
    snacksService.getMoney()
  }

  buySnack(name){
    snacksService.buySnack(name)
    _drawBoughtSnacks()
    console.log(name);
  }

  removeSnack(name){
    snacksService.removeSnack(name)
  }
  
  newMethod(){
  }



}