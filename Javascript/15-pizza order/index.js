export function pizzaPrice(pizza, ...extras) {
    let basePrice = 0;
    if (pizza === 'Margherita') basePrice = 7;
    else if (pizza === 'Caprese') basePrice = 9;
    else if (pizza === 'Formaggio') basePrice = 10;
  
    for (const extra of extras) {
      if (extra === 'ExtraSauce') basePrice += 1;
      else if (extra === 'ExtraToppings') basePrice += 2;
    }
  
    return basePrice;
  }
  
  export class PizzaOrder {
    constructor(pizza, ...extras) {
      this.pizza = pizza;
      this.extras = extras;
    }
  }
  
  export function orderPrice(orders) {
    let total = 0;
    for (const order of orders) {
      total += pizzaPrice(order.pizza, ...order.extras);
    }
    return total;
  }
  