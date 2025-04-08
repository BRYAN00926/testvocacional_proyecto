document.getElementById('login-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const user = document.getElementById('username').value.trim();
  const pass = document.getElementById('password').value.trim();

  // Ejemplo básico, puedes agregar validación real o conexión backend
  if (user && pass) {
    document.getElementById('login-container').classList.add('hidden');
    document.getElementById('quiz-container').classList.remove('hidden');
  } else {
    alert("Por favor, completa ambos campos.");
  }
});

document.getElementById('quiz-form').addEventListener('submit', function(e) {
  e.preventDefault();
  
  const form = e.target;
  const answers = [...form.querySelectorAll('input[type="radio"]:checked')];
  
  if (answers.length < 5) {
    alert('Por favor responde todas las preguntas.');
    return;
  }

  const results = answers.map(ans => ans.value);
  let resultado = '';
  const contador = {};

  results.forEach(res => {
    contador[res] = (contador[res] || 0) + 1;
  });

  let max = 0;
  let final = '';
  for (let clave in contador) {
    if (contador[clave] > max) {
      max = contador[clave];
      final = clave;
    }
  }

  switch (final) {
    case 'Investigación':
    case 'Ciencias':
    case 'Analisis':
      resultado = "Podrías destacar en carreras como Ingeniería, Medicina o Ciencias Exactas.";
      break;
    case 'Diseño':
    case 'Creatividad':
      resultado = "Tu camino puede estar en Artes, Comunicación, Publicidad o Diseño Gráfico.";
      break;
    case 'Servicio':
    case 'Comunicacion':
      resultado = "Tienes vocación para Psicología, Educación, Trabajo Social o Enfermería.";
      break;
    case 'Liderazgo':
    case 'Negocios':
      resultado = "Podrías sobresalir en Administración, Economía, Derecho o Gestión Empresarial.";
      break;
    case 'Exterior':
    case 'Campo':
      resultado = "Podrías orientarte a carreras como Agronomía, Biología o Turismo.";
      break;
    default:
      resultado = "Sigue explorando tus intereses. ¡El futuro está en tus manos!";
  }

  document.getElementById('result-text').innerText = resultado;
  document.getElementById('result').classList.remove('hidden');
});


