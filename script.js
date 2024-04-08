
// function verificarStatusDB() {
//   fetch('/status-db')
//     .then(response => response.json())
//     .then(data => {
//       document.getElementById('statusConexao').textContent = data.status;
//     })
//     .catch(error => {
//       console.error('Erro ao verificar o status do banco de dados:', error);
//     });
// }

// window.onload = verificarStatusDB;  








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






  // home

  document.addEventListener("DOMContentLoaded", function() {
    var videoCards = document.querySelectorAll(".video-card");

    videoCards.forEach(function(card) {
        card.addEventListener("click", function(event) {
            var videoUrl = this.querySelector("a").href;
            window.location.href = videoUrl;
        });
    });
});

// videos

document.addEventListener("DOMContentLoaded", function() {
  var videoPlayer = document.getElementById('videoPlayer');
  var qualityButton = document.getElementById('qualityButton');
  var speedButton = document.getElementById('speedButton');
  
  // qualityButton.addEventListener('click', function() {
  //     changeQuality('720');
  // });
  
  // speedButton.addEventListener('click', function() {
  //     changeSpeed(1.5);
  // });
  
  function changeQuality(quality) {
      var currentTime = videoPlayer.currentTime;
      var isPaused = videoPlayer.paused;
      
      videoPlayer.src = '/videos/Universidade Monstros_' + quality + '.mp4';
      videoPlayer.currentTime = currentTime;
      if (!isPaused) videoPlayer.play();
  }
  
  function changeSpeed(speed) {
      videoPlayer.playbackRate = speed;
  }
});