
function verificarStatusDB() {
  fetch('/status-db')
    .then(response => response.json())
    .then(data => {
      document.getElementById('statusConexao').textContent = data.status;
    })
    .catch(error => {
      console.error('Erro ao verificar o status do banco de dados:', error);
    });
}

window.onload = verificarStatusDB;  








  function atualizarRelogio() {
    var agora = new Date();
    var horas = agora.getHours();
    var minutos = agora.getMinutes();
    var segundos = agora.getSeconds();
    minutos = minutos < 10 ? '0' + minutos : minutos;
    segundos = segundos < 10 ? '0' + segundos : segundos;
    var strHorario = horas + ':' + minutos + ':' + segundos;
    document.getElementById('relogio').textContent = strHorario;
}

setInterval(atualizarRelogio, 1000);
