import { ProxyState } from "../AppState.js"



class SnacksService{

getMoney(){
  ProxyState.money += .25
  document.getElementById("money").innerText = ProxyState.money
}

buySnack(name){
  let snack = ProxyState.snacks.find(snack => snack.name == name) 
  console.log('buying', name);
  if(ProxyState.money >= snack.price){
    ProxyState.money -= snack.price
    ProxyState.boughtSnacks.push(snack)
    console.log(ProxyState.boughtSnacks);
    document.getElementById("money").innerText = ProxyState.money
  } else {
    window.alert("you need money!")
  }
}

removeSnack(name){
  ProxyState.boughtSnacks.findIndex(snack => snack.name == name)
  ProxyState.boughtSnacks.splice(name, 1)
  app.snacksController._drawBoughtSnacks()
}

}

export const snacksService = new SnacksService()