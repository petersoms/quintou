class Animais{
    latir(): void{
        console.log("AUAUAUAUAUUAUA");

    }
    correr(): void{
        console.log("O animal esta correndo");
    }

} 
class Cachorros extends Animais{
   
}
let cachorro= new Cachorros()
cachorro.latir()
//let ato = new Animal();
//animal.latir()
//animal.correr