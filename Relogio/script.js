function atualizarTempo() {
  const dataInicial = new Date("2023-04-17T00:00:00");
  const agora = new Date();

  // Calcular diferença de tempo (anos, meses, dias)
  let anos = agora.getFullYear() - dataInicial.getFullYear();
  let meses = agora.getMonth() - dataInicial.getMonth();
  let dias = agora.getDate() - dataInicial.getDate();

  if (dias < 0) {
    meses--;
    const mesAnterior = new Date(agora.getFullYear(), agora.getMonth(), 0);
    dias += mesAnterior.getDate();
  }

  if (meses < 0) {
    anos--;
    meses += 12;
  }

  // Cálculo do tempo do dia atual
  const inicioHoje = new Date(agora.getFullYear(), agora.getMonth(), agora.getDate());
  const diferencaMs = agora - inicioHoje;

  const horas = Math.floor(diferencaMs / (1000 * 60 * 60));
  const minutos = Math.floor((diferencaMs % (1000 * 60 * 60)) / (1000 * 60));
  const segundos = Math.floor((diferencaMs % (1000 * 60)) / 1000);

  document.getElementById("tempo-decorrido").textContent =
    `${anos} ano(s), ${meses} mês(es), ${dias} dia(s)\n` +
    `${horas}h, ${minutos}min, ${segundos}s`;
}

setInterval(atualizarTempo, 1000);
atualizarTempo();
