class parquimetro {
    constructor(tempo, valor) {
        this.tempo = tempo;
        this.valorIncerido = valor;
        this.valorPagar = () => {
            if(this.tempo == 30) {
                return 1;
            }else if (this.tempo == 60) {
                return this.tempo/60*1.75
            }else {
                return this.tempo/60*1.5
            }
        }
        this.troco = this.valorIncerido - this.valorPagar().toFixed(2);
    }
}

function calc() {
    let tempoEstacionado = document.getElementById("tempo").value.replace('min','');
    let valorParq = document.getElementById("valor");
    const estacionamento = new parquimetro(tempoEstacionado, valorParq.value);
    if (valorParq.value == '') {
        document.getElementById("troco").innerHTML = `Incira um valor`;
    }else if (estacionamento.troco < 0) {
        document.getElementById("troco").innerHTML = `Valor insuficiente`;
    }else {
        document.getElementById("troco").innerHTML = `Troco R$${estacionamento.troco.toFixed(2).replace('.',',')}`;
    }
    console.log(`${valorParq.value}`);
    
}