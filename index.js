//classes podem ter comportamento, além de poder guardar informações
class heroi{
	constructor(nomeHeroi, idadeHeroi, tipoHeroi){//funcao padrão (criar todas as vzs em uma classe)
		this.nomeHeroi = nomeHeroi
        this.idadeHeroi = idadeHeroi //mesma coisa que fazer "let saborRecheio
        this.tipoHeroi = tipoHeroi
    }
    atacar(){
    	if(`${this.tipoHeroi}` == 'mago'){
    		console.log(`O ${this.tipoHeroi} atacou usando magia`)
        } else if(`${this.tipoHeroi}` == 'guerreiro'){
        	console.log(`O ${this.tipoHeroi} atacou usando espada`)
        } else if(`${this.tipoHeroi}` == 'monge'){
        	console.log(`O ${this.tipoHeroi} atacou usando artes marciais`)
        } else if(`${this.tipoHeroi}` == 'ninja'){
        	console.log(`O ${this.tipoHeroi} atacou usando shuriken`)
        }
    }
}

let ataqueHeroiMago = new heroi("mago", 21, "mago")//objeto, quando eu instancio os valores da classe7

let ataqueHeroi2 = new heroi("guerreiro", "Recheio de morango","guerreiro")

let ataqueHeroi3 = new heroi("monge", "Recheio de morango","monge")

let ataqueHeroi4 = new heroi("ninja", "Recheio de morango", "ninja")

ataqueHeroiMago.atacar()
ataqueHeroi2.atacar()
ataqueHeroi3.atacar()
ataqueHeroi4.atacar()
/*
let convidado = {
    nome: "Pedrinho",
    idade: 10,
    presente: "quebra-cabeça"
};

convidado.localizacao = "sala de estar"

console.log(convidado)*/