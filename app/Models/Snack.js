

export class Snack{

  constructor(name, price, energy, image){
    this.name = name
    this.price = price
    this.energy = energy
    this.image = image
    this.quantity = 0

  }

  get Template(){
    return `
  <div id="${this.name}" class="col-4 snacks-card m-3 text-center">
    <h4>${this.name}</h4>
    <button onclick="app.snacksController.buySnack('${this.name}')">
      <img class="img-fluid" src="${this.image}" alt="snacks-image">
    </button>
    <p class="fs-3">$${this.price} | ${this.energy} Energy</p>
  </div>
    `
  }

  get boughtTemplate(){
    return `
    <div class="col-md-12 bg-dark text-light py-1">
    <div class="row">
      <div class="col-md-5">
        <h5>
        <b>${this.name}</b>
        </h5>
      </div>
      <div class="col-md-7 d-flex justify-content-between">
        
        $${this.price}
        
        <button class="btn" onclick="app.snacksController.removeSnack('${this.name}')">Remove</button>
      </div>
    </div>
  </div>
  `
  }
}

