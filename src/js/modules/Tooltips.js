import tippy from "tippy.js"
import "tippy.js/dist/tippy.css"

class Tooltips {
  constructor() {
    tippy("[data-tippy-content]", {
      theme: "tarabiter"
    })
  }
}

export default Tooltips
