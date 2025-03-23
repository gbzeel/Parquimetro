class parquimetro {
    constructor(tempo, valor) {
        this.tempo = parseFloat(tempo);
        this.valorIncerido = parseFloat(valor).toFixed(2);
        this.valorPagar = () => {
            if(this.tempo <= 60) {
                return this.tempo / 30;
            }else{
                return (this.tempo - 30)/30;
            }
        }
        this.troco = this.valorIncerido - this.valorPagar();
    }
}

function calc() {
    let tempoEstacionado = document.getElementById("tempo");
    let valorParq = document.getElementById("valor");
    const estacionamento = new parquimetro(tempoEstacionado.value, valorParq.value);
    document.getElementById("troco").innerHTML = `Troco R$${estacionamento.troco.toFixed(2).replace('.',',')}`;
}