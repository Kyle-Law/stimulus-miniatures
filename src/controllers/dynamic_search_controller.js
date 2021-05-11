import { Controller } from "stimulus"

export default class extends Controller {

  static targets = ["container","input"]
  static values = {attribute: String, items: Array, filteredArray:Array}

  connect() {
    this.filteredArray = this.itemsValue
    console.log('dynamic search controller connected')
    this.paintDOM()
  }

  filter(){
    const searchTerm = this.inputTarget.value
    this.itemsValue = this.filteredArray.filter(item => item.name.includes(searchTerm))
  }

  itemsValueChanged(){
    this.paintDOM()
  }

  paintDOM(){
    const domNodes = []
    this.itemsValue.forEach(item => {
      const p = document.createElement('p')
      p.textContent = item.name
      domNodes.push(p)
      this.containerTarget.appendChild(p)
    });
    this.containerTarget.innerHTML = ''

    domNodes.forEach(node => {
      this.containerTarget.appendChild(node)
    })
  }


}
