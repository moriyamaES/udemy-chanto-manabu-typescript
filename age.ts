abstract class Person {
  public name: string
  constructor(name: string){
    this.name = name
  }
}

class Gest extends Person {}

class Member extends Person {
  private _birth: Date
  
  constructor(name: string, birth: Date){
    super(name)
    this._birth = birth
  }
  get birth(): Date{
    return this._birth
  }

  set birth (value: Date) {
    this._birth = value
  }

  getAge(): number {
    const now = new Date()
    let age = now.getFullYear() - this.birth.getFullYear()
    const thisBirth = new Date(now.getFullYear(), this.birth.getMonth(), this.birth.getDay())
    if (now < thisBirth) age--
    return age
  }
}

const taro = new Gest ('太郎') 
const yosiko = new Member('良子',new Date(2000,1,3))

console.log(taro.name)
console.log(yosiko.name)
console.log(yosiko.getAge())
