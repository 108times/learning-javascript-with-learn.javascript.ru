function Car({
    name = "Unnamed",
    engine = {}
}){
    this.engine = {
        v: engine.v || 1.6,
        horsePower: engine.horsePower || 135,
        isTurnOn: engine.isTurnOn || false
    }
}
Car.prototype.start = function() {
        this.isTurnOn = true
        this.speed = 10
        this.engine.isTurnOn = true
}


function makePropsFromArgs(arguments, target, exeptions = []) {
    arguments.forEach(item => {
        const [key,value] = item
        console.log(item)
        ! exeptions.includes(key)
        ? target[key] = value
        : null
    })
}

const arguments = Object.entries({
  name: "BMW",
  engine : {
      v: 2.5,
      horsePower: 300,
      isTurnOn: true
  },
  speed: 20
})

const reno = new Car({
  name: 'reno'
})

makePropsFromArgs(arguments, reno)

const mers = new Car({
  name: 'mers'
})

reno.start();
mers.start();
console.log(reno)
