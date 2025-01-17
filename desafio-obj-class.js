class heroi{
    constructor(nome, idade, tipo){
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
    }

    msg(){
        let ataque = ""
        if(this.tipo == "mago") {
            ataque = "magia";
        }else if ( this.tipo == "guerreiro") {
            ataque = "espada";
        }else if (this.tipo == "monge") {
            ataque = "artes maciais";
        }else if (this.tipo == "ninja") {            
            ataque = "shuriken"
        }
        console.log(`O ${this.tipo} atacou usando o ${ataque}`)
    }
}

user01 = new heroi("Pablo", 10 ,"guerreiro")
user01.msg()


