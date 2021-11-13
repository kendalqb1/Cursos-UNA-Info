import { cursos } from "./cursos";
const tbody = document.querySelector("#tbody");
const btn_estado = document.querySelector("#btn-estado");
const modal_title = document.querySelector("#modal-title");
const tbody_modal = document.querySelector("#tbody-modal");

const llenarTabla = () => {
  for (const curso of cursos) {
    tbody.innerHTML += `
    <tr class="row_table" value=${curso.codigo}>
      <td>${curso.codigo}</td>
      <td>${curso.nombre}</td>
      <td>${curso.creditos}</td>
      <td>${curso.requisitos}</td>
      <td>${curso.ciclo}</td>
      <td>${curso.bachillerato === 0 ? "No" : "Si"}</td>
      
    </tr>
    `;
  }
};

const cursosNoAprobados = (cursos, seleccionados) => {
  let cursosNoAprobados = [];
  for (const curso of cursos) {
    if (!seleccionados.includes(curso.codigo)) {
      cursosNoAprobados.push(curso);
    }
  }
  return cursosNoAprobados;
};

const cursosParaMatricular = (seleccionados, noAprobados) => {
  let cursosParaMatricular = [];
  let matriculable;
  for (const curso of noAprobados) {
    matriculable = true;
    for (const req of curso.requisitos) {
      if (!seleccionados.includes(req)) {
        matriculable = false;
      }
    }
    if (matriculable) {
      cursosParaMatricular.push(curso);
    }
  }
  return cursosParaMatricular;
};

btn_estado.addEventListener("click", () => {
  const seleccionados = document.querySelectorAll(".table-success");
  let codigos = [];
  for (const seleccionado of seleccionados) {
    codigos.push(seleccionado.getAttribute("value"));
  }
  const noAprobados = cursosNoAprobados(cursos, codigos);
  const paraMatriular = cursosParaMatricular(
    codigos,
    cursosNoAprobados(cursos, codigos)
  );
  modal_title.innerHTML = `
    <p>Cursos Restantes: ${noAprobados.length}</p> 
    <p>Cursos Matriculables: ${paraMatriular.length}</p>
  `;
  tbody_modal.innerHTML = "";
  for (const curso of paraMatriular) {
    tbody_modal.innerHTML += `
      <td>${curso.codigo}</td>
      <td>${curso.nombre}</td>
    `;
  }
});

function selectRow(e) {
  e.target.parentElement.classList.toggle("table-success");
}

const main = () => {
  llenarTabla();
};

main();

const rowTables = document.querySelectorAll(".row_table");
for (const rowTable of rowTables) {
  rowTable.addEventListener("click", selectRow);
}
