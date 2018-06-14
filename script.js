class Dog {
    constructor(name){
       this.name = name
    }
    speak() {
        return 'woof'
    }
}
class Labarador extends Dog {
    constructor(color, breedWeight){
        super(color, breedWeight)
        this.color = color
        this.breedWeight = breedWeight
    }
     speak() {
        return 'Labarador says WOOF'
    }
}

var lab = new Labarador('Labarador')
console.log(lab.speak())

