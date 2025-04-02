class Retangulo {
    private altura: number;
    private largura: number;

    constructor(altura:number, largura:number){
        this.altura = altura;
        this.largura = largura;
    }

    private calcularArea(){
        return this.altura * this.largura
    }

    public get area(): number{
        return this.calcularArea()
    }

    private calcularPerimetro(){
        return 2 * (this.altura + this.largura)
    }

    public get perimetro():number{
        return this.calcularPerimetro()
    }
   }

class Quadrado extends Retangulo{
    constructor(lado:number){
        super(lado, lado)
    }

}
   
const retangulo = new Retangulo(20, 10)
const quadrado = new Quadrado(20)
console.log(retangulo.perimetro)
console.log(retangulo.area)
console.log(quadrado.perimetro)
console.log(quadrado.area)