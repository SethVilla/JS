class Vehicle {
  constructor(public color : string){
  }

  public drive(): void {
    console.log('zoom zoom zoom')
  }
  protected honk(): string {
    return 'beep beep'
  }
}

class Carro extends Vehicle {

  constructor(public wheels: number, color : string){
    super(color)
  }

   drive(): void {
    console.log('vroom vroom')
  }

  startDrivingProcess() : void {
    this.drive()
    this.honk()
  }

}

const vehicle = new Vehicle('orange');

const coolCar = new Carro(4, 'red')
