const BASE_URL = "https://jsonplaceholder.typicode.com";

/* //ej3
function cargarUsuarioPromesas() {
  console.log("Iniciando fetch con promesas...");

  fetch(`${BASE_URL}/users/10`)
    .then(function (response) {
      if (!response.ok) {
        throw new Error("Respuesta HTTP no OK: " + response.status);
      }
      return response.json();
    })
    .then(function (data) {
        console.log("ej3 - Usuario 10:");
        console.log("  name:", data.name);
        console.log("  username:", data.username);
        console.log("  email:", data.email, "\n");
    })
    .catch(function (error) {
        console.error("ej3 - Error al cargar usuario:", error.message);
    });
}
cargarUsuarioPromesas();


//ej4
async function cargarUsuarioAsync() {
    console.log("Iniciando fetch con async/await...");

  try {
    const response = await fetch(`${BASE_URL}/users/10`);
    if (!response.ok) {
        throw new Error("Respuesta HTTP no OK: " + response.status);
    }
    const data = await response.json();
    console.log("ej4 - Usuario 10:");
    console.log("  name:", data.name);
    console.log("  username:", data.username);
    console.log("  email:", data.email, "\n");
  } catch (error) {
    console.error("Error al cargar usuario:", error.message);
  }
}
cargarUsuarioAsync();


//ej5
function listarNombresPromesas() {
  console.log("Obteniendo todos los usuarios (promesas)...");

  fetch(`${BASE_URL}/users`)
    .then(function (response) {
      if (!response.ok) {
        throw new Error("Respuesta HTTP no OK: " + response.status);
      }
      return response.json();
    })
    .then(function (usuarios) {
        console.log("ej5 - Nombres de usuarios:");
      usuarios.forEach(function (u, i) {
        console.log(`  ${i}: ${u.name}`);
      });
      console.log("");
    })
    .catch(function (error) {
        console.error("Error al listar usuarios:", error.message);
    });
}
listarNombresPromesas();


//ej6
async function listarNombresAsync() {
  console.log("Obteniendo todos los usuarios (async/await)...");

  try {
    const response = await fetch(`${BASE_URL}/users`);
    if (!response.ok) {
        throw new Error("Respuesta HTTP no OK: " + response.status);
    }
    const usuarios = await response.json();
    console.log("ej6 - Nombres de usuarios:");
    usuarios.forEach(function (u, i) {
        console.log(`  ${i}: ${u.name}`);
    });
    console.log(""); 
} catch (error) {
    console.error("Error al listar usuarios:", error.message);
  }
}
listarNombresAsync();


//ej7
const btnCargarUsuarioPromesas = document.getElementById("btnCargarUsuarioPromesas");
const salidaUsuario = document.getElementById("salidaUsuario");

btnCargarUsuarioPromesas.addEventListener("click", function () {
    console.log("Click en botón (promesas)");
    
    fetch(`${BASE_URL}/users/2`)
    .then(function (response) {
        if (!response.ok) {
            throw new Error("Respuesta HTTP no OK: " + response.status);
        }
        return response.json();
    
    })
    .then(function (data) {
        console.log("ej7 - Usuario 2 recibido, actualizando DOM...");
        salidaUsuario.innerHTML =
        `<p><strong>Nombre:</strong> ${data.name}</p>` +
        `<p><strong>Email:</strong> ${data.email}</p>` +
        `<p><strong>Ciudad:</strong> ${data.address.city}</p>`;
    })
    .catch(function (error) {
        console.error("Error al cargar usuario:", error.message);
    });
});


//ej8
const btnCargarUsuarioAsync = document.getElementById("btnCargarUsuarioAsync");

btnCargarUsuarioAsync.addEventListener("click", async function () {
    console.log("Click en botón (async/await)");
    
    try {
        const response = await fetch(`${BASE_URL}/users/2`);
        if (!response.ok) {
            throw new Error("Respuesta HTTP no OK: " + response.status);
        }
        const data = await response.json();
        console.log("ej8 - Usuario 2 recibido, actualizando DOM...");
        
        salidaUsuario.innerHTML =
        `<p><strong>Nombre (async):</strong> ${data.name}</p>` +
        `<p><strong>Email (async):</strong> ${data.email}</p>` +
        `<p><strong>Ciudad (async):</strong> ${data.address.city}</p>`;
    } catch (error) {
        console.error("Error al cargar usuario:", error.message);
    }
});
*/


//ej10
const regexPasswordFuerte = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/;

function probarPassword(pw) {
  const esValida = regexPasswordFuerte.test(pw);
  console.log("ej10 password", pw, "válida?:", esValida);
}

probarPassword("Abc12345");
probarPassword("abc12345");
probarPassword("ABC12345");
probarPassword("Abcdefgh");

//ej11
const regexUrlSegura = /https:\/\/[^\s]+/g;

const textoUrls = "Visita https://es.wikipedia.org/wiki/Wikipedia:Portada o https://www.youtube.com/ y también http://inseguro.org/ruta";
const urlsEncontradas = textoUrls.match(regexUrlSegura) || [];

console.log("ej11 texto:", textoUrls);
console.log("ej11 URLs seguras encontradas:", urlsEncontradas);

//ej12
const regexQuitarTags = /<[^>]*>/g;

function quitarEtiquetas(html) {
  return html.replace(regexQuitarTags, "");
}
const htmlEjemplo = "<h1>Hola</h1><p>Esto es <strong>texto</strong></p>";
const sinTags = quitarEtiquetas(htmlEjemplo);

console.log("ej12 original:", htmlEjemplo);
console.log("ej12 sin etiquetas:", sinTags);

//ej13
const regexSepararOraciones = /[^.!?]+[.!?]?/g;

const textoOraciones = "Hola. Cómo estás? Bien!";
const partes = textoOraciones.match(regexSepararOraciones) || [];

console.log("ej13 texto original:", textoOraciones);
console.log("ej13 fragmentos:", partes);

//ej14
const regexFecha = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;

function probarFecha(fecha) {
  const esValida = regexFecha.test(fecha);
  console.log("ej14 fecha", fecha, "válida?:", esValida);
}

probarFecha("01/01/2024");
probarFecha("31/12/1999");
probarFecha("32/01/2024");
probarFecha("10/13/2024");
probarFecha("1/01/2024");
