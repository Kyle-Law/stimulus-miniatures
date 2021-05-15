import { Controller } from "stimulus"

export default class extends Controller {

  static targets = ["container","input"]
  static values = {attribute: String, items: Array, originalArray:Array}

  connect() {
    this.originalArray = this.itemsValue
    console.log('dynamic search controller connected')
    this.paintDOM()
  }

  filter(){
    const searchTerm = this.inputTarget.value
    this.itemsValue = this.originalArray.filter(item => item.name.includes(searchTerm))
  }

  itemsValueChanged(){
    this.paintDOM()
  }

  paintDOM(){
    const domNodes = []
    this.itemsValue.forEach(item => {
      const p = document.createElement('p')
      p.textContent = item.name
      p.classList.add(`text-${item.color}`)
      domNodes.push(p)
      this.containerTarget.appendChild(p)
    });
    this.containerTarget.innerHTML = ''

    domNodes.forEach(node => {
      this.containerTarget.appendChild(node)
    })
  }

  sortByColor(){
    this.itemsValue = this.originalArray.sort((a,b) => a['color'] > b['color'] ? 1 : -1)
  }

  sortByName(){
    this.itemsValue = this.originalArray.sort((a,b) => a['name'] > b['name'] ? 1 : -1 )
  }


}
