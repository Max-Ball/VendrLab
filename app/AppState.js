import { Snack } from "./Models/Snack.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
  /** @type {import('./Models/Value').Value[]} */
  values = []
  
/** @type {import('./Models/Snack').Snack[]} */

money = 0

snacks = [
  new Snack('Cheetos', 2.00, 4, 'https://images.unsplash.com/photo-1512741709538-3b10036eb57e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y2hlZXRvc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'),
  new Snack('Candy Bar', 1.50, 2, 'https://squirrelenthusiast.com/wp-content/uploads/2020/05/can-squirrels-eat-chocolate.jpg'),
  new Snack('Protein Bar', 4.25, 8, 'https://c8.alamy.com/comp/MMBKY7/a-california-ground-squirrel-feasting-on-a-stolen-kind-bar-in-lower-pines-campground-yosemite-valley-ca-MMBKY7.jpg'),
  new Snack('Orange Juice', 3.75, 6, 'https://thumbs.dreamstime.com/b/test-new-juice-squirrels-turned-out-to-be-interesting-squirrel-clutched-glass-orange-said-i-won-t-give-anyone-194588774.jpg')
]

boughtSnacks = []
}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
