// Datos de ejemplo para login
const users = [
  { username: 'usuario1', password: '12345' },
  { username: 'usuario2', password: '67890' }
];

// Función para manejar el login
document.getElementById('login-form').addEventListener('submit', function(event) {
  event.preventDefault();

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  const user = users.find(u => u.username === username && u.password === password);

  if (user) {
    // Si el login es exitoso, muestra el test vocacional
    document.getElementById('login-container').classList.add('hidden');
    document.getElementById('quiz-container').classList.remove('hidden');
  } else {
    alert('Usuario o contraseña incorrectos');
  }
});

// Lógica para procesar el test vocacional
document.getElementById('quiz-form').addEventListener('submit', function(event) {
  event.preventDefault();

  let answers = {
    q1: document.querySelector('input[name="q1"]:checked')?.value,
    q2: document.querySelector('input[name="q2"]:checked')?.value,
    q3: document.querySelector('input[name="q3"]:checked')?.value,
    q4: document.querySelector('input[name="q4"]:checked')?.value
  };

  if (!answers.q1 || !answers.q2 || !answers.q3 || !answers.q4) {
    alert("Por favor, responde todas las preguntas.");
    return;
  }

  // Procesar el resultado
  let resultText = "";

  if (answers.q1 === "Analítico" && answers.q2 === "Tecnología" && answers.q3 === "Resolución lógica" && answers.q4 === "Oficina") {
    resultText = "Tu vocación podría ser Ingeniería de Sistemas o Investigación Científica.";
  } else if (answers.q1 === "Creativo" && answers.q2 === "Arte" && answers.q3 === "Pensamiento creativo" && answers.q4 === "Creativo") {
    resultText = "Tu vocación podría ser Diseño Gráfico o Producción Artística.";
  } else if (answers.q1 === "Empático" && answers.q2 === "Ayudar" && answers.q3 === "Colaboración" && answers.q4 === "Social") {
    resultText = "Tu vocación podría ser Psicología o Trabajo Social.";
  } else if (answers.q1 === "Práctico" && answers.q2 === "Deporte" && answers.q3 === "Acción inmediata" && answers.q4 === "Práctico") {
    resultText = "Tu vocación podría ser Educación Física o Medicina Deportiva.";
  } else {
    resultText = "Tu vocación es explorar más opciones. Sigue investigando y probando diferentes campos.";
  }

  document.getElementById('result-text').innerText = resultText;
  document.getElementById('result').classList.remove('hidden');
});

