function gerarDiaDaSemana() {
    const diaDaSemana = new Date().toLocaleDateString('pt-BR', { weekday: 'long' });
    const data = new Date().toLocaleDateString("pt-Br");
    const hora = new Date().toLocaleTimeString("pt-Br", { hour: "numeric", minute: "numeric" });
    const dataCompleta = `${diaDaSemana} (${data}) às ${hora}`;


    return dataCompleta;
}
export default gerarDiaDaSemana;