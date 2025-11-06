const opciones = ['piedra', 'papel', 'tijera']
let puntosUsuario = 0
let puntosOrdenador = 0

const botones = document.querySelectorAll('.boton-jugada')
const resultados = document.getElementById('resultados')
const contadorUsuario = document.getElementById('contador-usuario')
const contadorOrdenador = document.getElementById('contador-ordenador')

function ordenadorElige() {
  const random = Math.floor(Math.random() * opciones.length)
  return opciones[random]
}

function obtenerResultado(usuario, ordenador) {
  if (usuario === ordenador) return 'empate'
  const gana =
    (usuario === 'piedra' && ordenador === 'tijera') ||
    (usuario === 'papel' && ordenador === 'piedra') ||
    (usuario === 'tijera' && ordenador === 'papel')
  return gana ? 'gana' : 'pierde'
}

function mostrarResultado(usuario, ordenador, resultado) {
  let texto = `Tú: ${usuario} — Máquina: ${ordenador} → `
  let clase = ''
  if (resultado === 'gana') {
    texto += 'Has ganado'
    clase = 'result-ganaste'
  } else if (resultado === 'pierde') {
    texto += 'Has perdido'
    clase = 'result-perdiste'
  } else {
    texto += 'Empate'
    clase = 'result-empate'
  }
  resultados.textContent = texto
  resultados.className = clase
}

function actualizarPuntuacion(resultado) {
  if (resultado === 'gana') puntosUsuario += 1
  else if (resultado === 'pierde') puntosOrdenador += 1
  contadorUsuario.textContent = `Tus puntos: ${puntosUsuario}`
  contadorOrdenador.textContent = `Puntos de la máquina: ${puntosOrdenador}`
}

botones.forEach(boton => {
  boton.addEventListener('click', event => {
    const jugadaUsuario = boton.textContent.toLowerCase()
    const jugadaOrdenador = ordenadorElige();
    const resultado = obtenerResultado(jugadaUsuario, jugadaOrdenador);
    mostrarResultado(jugadaUsuario, jugadaOrdenador, resultado);
    actualizarPuntuacion(resultado);
  });
});
