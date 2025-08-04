const ramos = [
  // SEMESTRE 1
  { id: "quimica", nombre: "Química General y Orgánica", desbloquea: ["bioquimica"] },
  { id: "lab_quimica", nombre: "Laboratorio de Química General y Orgánica", desbloquea: ["bioquimica"] },
  { id: "fisica", nombre: "Física Médica", desbloquea: [] },
  { id: "biocelular", nombre: "Biología Celular", desbloquea: ["histologia"] },
  { id: "lab_biocelular", nombre: "Laboratorio de Biología Celular", desbloquea: ["histologia"] },
  { id: "matematicas", nombre: "Matemáticas", desbloquea: ["estadistica"] },
  { id: "orientacion", nombre: "Orientación Profesional", desbloquea: [] },
  { id: "estrategias", nombre: "Estrategias para el Aprendizaje", desbloquea: [] },

  // SEMESTRE 2
  { id: "bioquimica", nombre: "Bioquímica General", desbloquea: ["fisiopatologia"] },
  { id: "lab_bioquimica", nombre: "Laboratorio de Bioquímica General", desbloquea: ["fisiopatologia"] },
  { id: "anato1", nombre: "Anatomía Veterinaria I", desbloquea: ["anato2"] },
  { id: "histologia", nombre: "Histología Veterinaria", desbloquea: ["fisiopatologia"] },
  { id: "bienestar", nombre: "Bienestar Animal", desbloquea: [] },
  { id: "zoologia", nombre: "Zoología Veterinaria", desbloquea: ["ecologia"] },
  { id: "ingles1", nombre: "Inglés Instrumental I", desbloquea: ["ingles2"] },

  // SEMESTRE 3
  { id: "fisio", nombre: "Fisiología Animal", desbloquea: ["reproduccion", "enfermedades"] },
  { id: "anato2", nombre: "Anatomía Veterinaria II", desbloquea: ["reproduccion"] },
  { id: "micro", nombre: "Microbiología General", desbloquea: ["enfermedades"] },
  { id: "inmuno", nombre: "Inmunología Veterinaria", desbloquea: ["enfermedades"] },
  { id: "ecologia", nombre: "Ecología", desbloquea: [] },
  { id: "ingles2", nombre: "Inglés Instrumental II", desbloquea: [] },
  { id: "genetica", nombre: "Genética Ganadera", desbloquea: ["sistemas"] },

  // SEMESTRE 4
  { id: "reproduccion", nombre: "Reproducción Animal", desbloquea: ["produccion"] },
  { id: "estadistica", nombre: "Análisis Estadístico", desbloquea: [] },
  { id: "sistemas", nombre: "Sistemas de Producción Animal", desbloquea: ["produccion"] },
  { id: "enfermedades", nombre: "Enfermedades Infecciosas", desbloquea: ["patologia"] },
  { id: "parasitologia", nombre: "Parasitología Veterinaria", desbloquea: ["clinica_menores"] },
  { id: "etologia", nombre: "Etología y Manejo Animal", desbloquea: [] },

  // SEMESTRE 5
  { id: "patologia", nombre: "Patología General Veterinaria", desbloquea: ["farmacologia"] },
  { id: "produccion", nombre: "Producción Animal", desbloquea: [] },
  { id: "farmacologia", nombre: "Farmacología General", desbloquea: ["toxicologia"] },
  { id: "salud_publica", nombre: "Salud Pública", desbloquea: ["epidemiologia"] },
  { id: "clinica_menores", nombre: "Clínica de Animales Menores I", desbloquea: ["clinica_menores2"] },

  // SEMESTRE 6
  { id: "toxicologia", nombre: "Toxicología Veterinaria", desbloquea: [] },
  { id: "clinica_menores2", nombre: "Clínica de Animales Menores II", desbloquea: [] },
  { id: "clinica_mayores", nombre: "Clínica de Animales Mayores", desbloquea: [] },
  { id: "epidemiologia", nombre: "Epidemiología Veterinaria", desbloquea: [] },
  { id: "biotecnologia", nombre: "Biotecnología Veterinaria", desbloquea: [] },

  // SEMESTRE 7
  { id: "diagnostico", nombre: "Diagnóstico por Imagen", desbloquea: [] },
  { id: "anestesia", nombre: "Anestesiología Veterinaria", desbloquea: [] },
  { id: "cirugia", nombre: "Cirugía Veterinaria", desbloquea: [] },
  { id: "industria", nombre: "Ind. de Productos de Origen Animal", desbloquea: ["inocuidad"] },
  { id: "gestion", nombre: "Gestión y Emprendimiento", desbloquea: [] },

  // SEMESTRE 8
  { id: "inocuidad", nombre: "Inocuidad Alimentaria", desbloquea: [] },
  { id: "medicina_poblacion", nombre: "Medicina de Poblaciones Animales", desbloquea: [] },
  { id: "electivo1", nombre: "Electivo Profesional I", desbloquea: [] },
  { id: "electivo2", nombre: "Electivo Profesional II", desbloquea: [] },

  // SEMESTRE 9
  { id: "internado1", nombre: "Internado Profesional I", desbloquea: ["internado2"] },
  { id: "seminario", nombre: "Seminario de Investigación", desbloquea: [] },

  // SEMESTRE 10
  { id: "internado2", nombre: "Internado Profesional II", desbloquea: [] }
];

let aprobados = JSON.parse(localStorage.getItem("aprobados") || "[]");

function renderMalla() {
  const container = document.getElementById("malla");
  container.innerHTML = "";

  ramos.forEach(ramo => {
    const requisitosCumplidos = ramo.desbloquea.every(id => aprobados.includes(id));
    const habilitado = requisitosCumplidos || aprobados.includes(ramo.id);

    const div = document.createElement("div");
    div.className = "ramo" + (aprobados.includes(ramo.id) ? " aprobado" : habilitado ? "" : " bloqueado");
    div.innerHTML = `
      <strong>${ramo.nombre}</strong><br>
      <button onclick="aprobar('${ramo.id}')">${aprobados.includes(ramo.id) ? "✅ Aprobado" : "Aprobar"}</button>
    `;
    container.appendChild(div);
  });
}

function aprobar(id) {
  if (!aprobados.includes(id)) {
    aprobados.push(id);
    localStorage.setItem("aprobados", JSON.stringify(aprobados));
    renderMalla();
  }
}

function reiniciarMalla() {
  localStorage.removeItem("aprobados");
  aprobados = [];
  renderMalla();
}

renderMalla();
