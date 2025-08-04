const ramosPorSemestre = {
  1: [
    { id: "quimica", nombre: "Química General y Orgánica", desbloquea: ["bioquimica"] },
    { id: "lab_quimica", nombre: "Lab Química General y Orgánica", desbloquea: ["bioquimica"] },
    { id: "fisica", nombre: "Física Médica", desbloquea: [] },
    { id: "biocelular", nombre: "Biología Celular", desbloquea: ["histologia"] },
    { id: "lab_biocelular", nombre: "Lab Biología Celular", desbloquea: ["histologia"] },
    { id: "matematicas", nombre: "Matemáticas", desbloquea: ["estadistica"] },
    { id: "orientacion", nombre: "Orientación Profesional", desbloquea: [] },
    { id: "estrategias", nombre: "Estrategias para el Aprendizaje", desbloquea: [] }
  ],
  2: [
    { id: "bioquimica", nombre: "Bioquímica General", desbloquea: ["fisiopatologia"] },
    { id: "lab_bioquimica", nombre: "Lab Bioquímica General", desbloquea: ["fisiopatologia"] },
    { id: "anato1", nombre: "Anatomía Vet I", desbloquea: ["anato2"] },
    { id: "histologia", nombre: "Histología Veterinaria", desbloquea: ["fisiopatologia"] },
    { id: "bienestar", nombre: "Bienestar Animal", desbloquea: [] },
    { id: "zoologia", nombre: "Zoología Veterinaria", desbloquea: ["ecologia"] },
    { id: "ingles1", nombre: "Inglés I", desbloquea: ["ingles2"] }
  ],
  3: [
    { id: "fisio", nombre: "Fisiología Animal", desbloquea: ["reproduccion", "enfermedades"] },
    { id: "anato2", nombre: "Anatomía Vet II", desbloquea: ["reproduccion"] },
    { id: "micro", nombre: "Microbiología", desbloquea: ["enfermedades"] },
    { id: "inmuno", nombre: "Inmunología", desbloquea: ["enfermedades"] },
    { id: "ecologia", nombre: "Ecología", desbloquea: [] },
    { id: "ingles2", nombre: "Inglés II", desbloquea: [] },
    { id: "genetica", nombre: "Genética Ganadera", desbloquea: ["sistemas"] }
  ],
  4: [
    { id: "reproduccion", nombre: "Reproducción Animal", desbloquea: ["produccion"] },
    { id: "estadistica", nombre: "Análisis Estadístico", desbloquea: [] },
    { id: "sistemas", nombre: "Sistemas de Producción", desbloquea: ["produccion"] },
    { id: "enfermedades", nombre: "Enfermedades Infecciosas", desbloquea: ["patologia"] },
    { id: "parasitologia", nombre: "Parasitología", desbloquea: ["clinica_menores"] },
    { id: "etologia", nombre: "Etología y Manejo", desbloquea: [] }
  ],
  5: [
    { id: "patologia", nombre: "Patología General", desbloquea: ["farmacologia"] },
    { id: "produccion", nombre: "Producción Animal", desbloquea: [] },
    { id: "farmacologia", nombre: "Farmacología", desbloquea: ["toxicologia"] },
    { id: "salud_publica", nombre: "Salud Pública", desbloquea: ["epidemiologia"] },
    { id: "clinica_menores", nombre: "Clínica Menores I", desbloquea: ["clinica_menores2"] }
  ],
  6: [
    { id: "toxicologia", nombre: "Toxicología", desbloquea: [] },
    { id: "clinica_menores2", nombre: "Clínica Menores II", desbloquea: [] },
    { id: "clinica_mayores", nombre: "Clínica Mayores", desbloquea: [] },
    { id: "epidemiologia", nombre: "Epidemiología", desbloquea: [] },
    { id: "biotecnologia", nombre: "Biotecnología", desbloquea: [] }
  ],
  7: [
    { id: "diagnostico", nombre: "Diagnóstico por Imagen", desbloquea: [] },
    { id: "anestesia", nombre: "Anestesiología", desbloquea: [] },
    { id: "cirugia", nombre: "Cirugía", desbloquea: [] },
    { id: "industria", nombre: "Ind. Productos Origen Animal", desbloquea: ["inocuidad"] },
    { id: "gestion", nombre: "Gestión y Emprendimiento", desbloquea: [] }
  ],
  8: [
    { id: "inocuidad", nombre: "Inocuidad Alimentaria", desbloquea: [] },
    { id: "medicina_poblacion", nombre: "Medicina de Poblaciones", desbloquea: [] },
    { id: "electivo1", nombre: "Electivo Profesional I", desbloquea: [] },
    { id: "electivo2", nombre: "Electivo Profesional II", desbloquea: [] }
  ],
  9: [
    { id: "internado1", nombre: "Internado Profesional I", desbloquea: ["internado2"] },
    { id: "seminario", nombre: "Seminario de Investigación", desbloquea: [] }
  ],
  10: [
    { id: "internado2", nombre: "Internado Profesional II", desbloquea: [] }
  ]
};

let aprobados = JSON.parse(localStorage.getItem("aprobados") || "[]");

function renderMalla() {
  const container = document.getElementById("malla");
  container.innerHTML = "";

  for (let semestre = 1; semestre <= 10; semestre++) {
    const bloque = document.createElement("div");
    bloque.className = "semestre-bloque";
    bloque.innerHTML = `<h2>📚 Semestre ${semestre}</h2>`;

    const fila = document.createElement("div");
    fila.className = "fila";

    ramosPorSemestre[semestre].forEach(ramo => {
      const requisitosCumplidos = ramo.desbloquea.every(id => aprobados.includes(id));
      const habilitado = requisitosCumplidos || aprobados.includes(ramo.id);
