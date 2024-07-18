class Bus {
  constructor() {
    this.callbacks = {}
  }

  $on(name, fn) {
    if (!this.callbacks[name]) {
      this.callbacks[name] = []
    }
    this.callbacks[name].push(fn)
  }

  $emit(name, args) {
    if (this.callbacks[name]) {
      this.callbacks[name].forEach(cb => {
        cb(args)
      })
    }
  }

  $remove(name) {
    Object.keys(this.callbacks).forEach(key => {
      if (key === name) {
        delete this.callbacks[name]
      }
    })
  }
}

export {Bus}
