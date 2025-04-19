const preguntas = [
  {
      pregunta: "¿Qué actividad disfrutas más?",
      opciones: {
          "Tecnología": "Programar o reparar computadoras",
          "Salud": "Ayudar a personas enfermas",
          "Arte": "Diseñar, pintar o tocar un instrumento",
          "Negocios": "Planear un negocio o vender algo"
      }
  },
  {
      pregunta: "¿En qué área destacas más en tus estudios?",
      opciones: {
          "Tecnología": "Matemáticas o informática",
          "Salud": "Biología o química",
          "Arte": "Artes plásticas o música",
          "Negocios": "Economía o gestión empresarial"
      }
  },
  {
      pregunta: "¿Qué tipo de películas prefieres?",
      opciones: {
          "Tecnología": "Ciencia ficción",
          "Salud": "Historias de superación",
          "Arte": "Dramas y cine independiente",
          "Negocios": "Películas sobre empresas o dinero"
      }
  },
  {
      pregunta: "¿Qué te gustaría hacer en un proyecto escolar?",
      opciones: {
          "Tecnología": "Diseñar una app o un robot",
          "Salud": "Investigar sobre enfermedades",
          "Arte": "Crear una obra o un cortometraje",
          "Negocios": "Organizar ventas o gestionar recursos"
      }
  },
  {
      pregunta: "¿Qué tipo de problema disfrutas resolver?",
      opciones: {
          "Tecnología": "Errores técnicos o bugs",
          "Salud": "Problemas de salud o bienestar",
          "Arte": "Cómo expresar emociones visualmente",
          "Negocios": "Cómo ganar más con menos recursos"
      }
  },
  {
      pregunta: "¿Qué tipo de trabajo te parece más satisfactorio?",
      opciones: {
          "Tecnología": "Crear soluciones automatizadas",
          "Salud": "Salvar o mejorar vidas",
          "Arte": "Transmitir emociones",
          "Negocios": "Hacer crecer una empresa"
      }
  },
  {
      pregunta: "¿Cómo te describirías en grupo?",
      opciones: {
          "Tecnología": "El que soluciona los problemas técnicos",
          "Salud": "El que cuida y apoya a los demás",
          "Arte": "El creativo con ideas únicas",
          "Negocios": "El que organiza y dirige"
      }
  },
  {
      pregunta: "¿Qué preferirías aprender?",
      opciones: {
          "Tecnología": "Ciberseguridad o Inteligencia Artificial",
          "Salud": "Anatomía o primeros auxilios",
          "Arte": "Edición de video o fotografía",
          "Negocios": "Marketing o administración"
      }
  },
  {
      pregunta: "¿Cuál sería tu lugar ideal de trabajo?",
      opciones: {
          "Tecnología": "Una empresa de software",
          "Salud": "Un hospital o centro de salud",
          "Arte": "Un estudio de grabación o taller",
          "Negocios": "Una oficina de gestión"
      }
  },
  {
      pregunta: "¿Qué te motiva más?",
      opciones: {
          "Tecnología": "La innovación",
          "Salud": "El bienestar de los demás",
          "Arte": "La libertad de expresión",
          "Negocios": "Los logros económicos"
      }
  },
  {
      pregunta: "¿Qué prefieres leer?",
      opciones: {
          "Tecnología": "Revistas de ciencia y tecnología",
          "Salud": "Artículos sobre nutrición o salud",
          "Arte": "Poesía o narrativa visual",
          "Negocios": "Noticias financieras"
      }
  },
  {
      pregunta: "¿Qué tipo de voluntariado harías?",
      opciones: {
          "Tecnología": "Enseñar computación a niños",
          "Salud": "Acompañar enfermos o donar sangre",
          "Arte": "Pintar murales en escuelas",
          "Negocios": "Ayudar en ferias de emprendimiento"
      }
  },
  {
      pregunta: "¿Qué actividad harías en tu tiempo libre?",
      opciones: {
          "Tecnología": "Construir algo con Arduino",
          "Salud": "Ejercicio o cuidar tu salud",
          "Arte": "Dibujar o grabar videos",
          "Negocios": "Jugar Monopoly o leer sobre finanzas"
      }
  },
  {
      pregunta: "¿Qué te gustaría inventar?",
      opciones: {
          "Tecnología": "Un dispositivo inteligente",
          "Salud": "Una cura o tratamiento",
          "Arte": "Una nueva técnica artística",
          "Negocios": "Un modelo de negocio exitoso"
      }
  },
  {
      pregunta: "¿Con qué personaje te identificas más?",
      opciones: {
          "Tecnología": "Un ingeniero o científico",
          "Salud": "Un doctor o terapeuta",
          "Arte": "Un artista famoso",
          "Negocios": "Un empresario exitoso"
      }
  },
  {
      pregunta: "¿Qué tipo de app te gustaría crear?",
      opciones: {
          "Tecnología": "Automatización o productividad",
          "Salud": "Seguimiento médico o dieta",
          "Arte": "Edición o diseño",
          "Negocios": "Control financiero"
      }
  },
  {
      pregunta: "¿Cuál sería tu club ideal en la universidad?",
      opciones: {
          "Tecnología": "Club de robótica",
          "Salud": "Club de salud y bienestar",
          "Arte": "Club de cine o teatro",
          "Negocios": "Club de emprendedores"
      }
  },
  {
      pregunta: "¿Cuál de estas frases te representa más?",
      opciones: {
          "Tecnología": "Todo problema tiene una solución técnica",
          "Salud": "Cuidar de otros me hace feliz",
          "Arte": "Ver el mundo con otros ojos",
          "Negocios": "Cada oportunidad es un negocio"
      }
  },
  {
      pregunta: "¿Qué tipo de problemas te gustan?",
      opciones: {
          "Tecnología": "Rompecabezas y algoritmos",
          "Salud": "Diagnósticos y tratamientos",
          "Arte": "Expresivos y emocionales",
          "Negocios": "Estrategias de mercado"
      }
  },
  {
      pregunta: "¿Cuál de estos eventos te gustaría más asistir?",
      opciones: {
          "Tecnología": "Conferencia de programación",
          "Salud": "Foro de medicina",
          "Arte": "Festival de arte",
          "Negocios": "Cumbre de emprendedores"
      }
  }
];

let actual = 0;
const resultados = { "Tecnología": 0, "Salud": 0, "Arte": 0, "Negocios": 0 };

function mostrarPregunta() {
  const contenedor = document.getElementById("question-container");
  const prog = document.getElementById("progress-bar");

  if (actual >= preguntas.length) {
      guardarResultados();
      return;
  }

  prog.style.width = `${(actual / preguntas.length) * 100}%`;
  const q = preguntas[actual];
  let html = `<h2>${q.pregunta}</h2>`;
  for (let [area, texto] of Object.entries(q.opciones)) {
      html += `<button onclick="seleccionar('${area}')">${texto}</button><br>`;
  }
  contenedor.innerHTML = html;
}

function seleccionar(area) {
  resultados[area]++;
  actual++;
  mostrarPregunta();
}

function guardarResultados() {
  const nickname = localStorage.getItem("nickname") || "SinNombre";
  const datos = JSON.stringify(resultados);

  fetch("cgi-bin/guardar.py", {
      method: "POST",
      body: new URLSearchParams({ nickname: nickname, datos: datos })
  }).then(() => {
      mostrarResumen();
  });
}

function mostrarResumen() {
  const contenedor = document.getElementById("question-container");
  const prog = document.getElementById("progress-bar");
  prog.style.width = `100%`;

  let html = `<h2>¡Resultados de ${localStorage.getItem("nickname")}!</h2>`;
  let total = Object.values(resultados).reduce((a, b) => a + b, 0);

  for (let [area, valor] of Object.entries(resultados)) {
      let porcentaje = ((valor / total) * 100).toFixed(1);
      html += `<p><strong>${area}</strong>: ${porcentaje}%</p>
               <div style="background:#ddd;width:100%;border-radius:5px;">
                  <div style="width:${porcentaje}%;background:#4CAF50;color:white;padding:5px 0;border-radius:5px;">
                      ${porcentaje}%
                  </div>
               </div><br>`;
  }

  html += `<br><button onclick="window.location.href='cgi-bin/ver_resultados.py'">Ver resultados de otros usuarios</button>
`;
  document.getElementById("question-container").innerHTML = html;
  document.getElementById("next-button").style.display = "none";
}

mostrarPregunta();








