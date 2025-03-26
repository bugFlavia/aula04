class Retangulo {
    altura: number;
    largura: number;

    constructor(altura:number, largura:number){
        this.altura = altura;
        this.largura = largura;
    }
    get calcularPerimetro():number{
        return 2 * (this.altura + this.largura)
    }
    get calcularArea():number{
        return this.altura * this.largura
    }
   }

class Quadrado extends Retangulo{
    constructor(lado:number){
        super(lado, lado)
        this.altura = lado
        this.largura = lado
    }

}
   
const retangulo = new Retangulo(20, 10)
const quadrado = new Quadrado(20)
console.log(retangulo.calcularPerimetro)
console.log(retangulo.calcularArea)
console.log(quadrado.calcularPerimetro)
console.log(quadrado.calcularPerimetro)