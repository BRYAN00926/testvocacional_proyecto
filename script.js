document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("login-form");
  const quizContainer = document.getElementById("quiz-container");
  const loginContainer = document.getElementById("login-container");
  const quizForm = document.getElementById("quiz-form");
  const resultSection = document.getElementById("result");
  const resultText = document.getElementById("result-text");

  // Control de pasos
  const steps = document.querySelectorAll(".question-step");
  let currentStep = 0;

  // Avanzar paso a paso
  document.querySelectorAll(".next-btn").forEach((btn, i) => {
    btn.addEventListener("click", () => {
      const inputs = steps[i].querySelectorAll("input[type='radio']");
      let answered = false;
      inputs.forEach(input => { if (input.checked) answered = true; });

      if (answered) {
        steps[i].classList.add("hidden");
        steps[i + 1].classList.remove("hidden");
      } else {
        alert("Por favor selecciona una respuesta antes de continuar.");
      }
    });
  });

  // Validación de login
  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const user = document.getElementById("username").value;
    const pass = document.getElementById("password").value;
    if (user && pass) {
      loginContainer.classList.add("hidden");
      quizContainer.classList.remove("hidden");
      steps[0].classList.remove("hidden");
    }
  });

  // Resultado del test
  quizForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const answers = Array.from(new FormData(quizForm).values());

    const counts = {};
    answers.forEach(ans => {
      counts[ans] = (counts[ans] || 0) + 1;
    });

    // Elegir la categoría dominante
    const dominant = Object.entries(counts).sort((a, b) => b[1] - a[1])[0][0];

    let career = "No se pudo determinar una vocación clara.";
    switch (dominant) {
      case "Investigación":
      case "Ciencias":
      case "Analisis":
      case "Tecnología":
      case "Técnicos":
        career = "Podrías destacar en carreras como Ingeniería de Sistemas, Física, Matemáticas o Ciencia de Datos.";
        break;
      case "Diseño":
      case "Creativo":
      case "Arte":
      case "Visuales":
        career = "Te iría muy bien en Diseño Gráfico, Arquitectura, Comunicación Visual o Artes Multimedia.";
        break;
      case "Servicio":
      case "Empatia":
      case "Docente":
      case "Sociales":
        career = "Carreras como Psicología, Educación, Trabajo Social o Recursos Humanos serían ideales para ti.";
        break;
      case "Negocios":
      case "Liderazgo":
      case "Empresarial":
      case "Estrategicos":
        career = "Podrías estudiar Administración de Empresas, Marketing, Economía o Comercio Internacional.";
        break;
      case "Medicina":
        career = "Podrías estudiar Medicina, Enfermería, Bioquímica o Tecnología Médica.";
        break;
      case "Ingeniería":
        career = "Carreras como Ingeniería Industrial, Mecánica, Civil o Eléctrica podrían ser para ti.";
        break;
    }

    quizForm.classList.add("hidden");
    resultSection.classList.remove("hidden");
    resultText.textContent = career;
  });
});



