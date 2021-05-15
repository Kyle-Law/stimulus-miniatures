import { Controller } from "stimulus"

export default class extends Controller {
  static targets = ["input","container"]

  connect() {
    console.log("List controller is connected")
  }

  add(e){
    e.preventDefault()
    if (this.inputTarget.value) {
      const li = document.createElement('li')
      li.setAttribute('data-action','click->todo#done')
      li.innerHTML = `${this.inputTarget.value} <span data-action="click->todo#remove" class="close">&times;</span>`
      this.containerTarget.insertAdjacentElement('afterbegin',li)
      e.target.reset()
    }
  }

  remove(e){
    console.log(e.target.parentElement)
    e.target.parentElement.hidden = true
  }

  done(e){
    e.target.classList.toggle('crossed')
  }

}
