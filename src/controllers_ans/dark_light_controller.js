import { Controller } from "stimulus"

export default class extends Controller {

  static values = {mode: String}
  static targets = ["container","toggler","icon"]


  connect() {
    console.log("dark_light_controller is connected")
    this.toggleMode()
  }

  toggleMode(){
    this.modeValue = this.modeValue === 'light' ? 'dark' : 'light'
  }

  modeValueChanged(){
    this.modeValue === 'light' ? this.lightMode() : this.darkMode()
  }

  darkMode(){
    this.containerTarget.classList.add('bg-dark','text-light')
    this.iconTarget.className = "fas fa-moon"
    this.togglerTarget.className = 'btn btn-secondary'
  }

  lightMode(){
    this.containerTarget.classList.remove('bg-dark','text-light')
    this.iconTarget.className = "fas fa-sun"
    this.togglerTarget.className = 'btn btn-light'
  }

}
