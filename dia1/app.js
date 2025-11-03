//funcion de log mas general
function logMessage(message) {
  console.log(`[LOG] ${message}`);
}

// funcion de log categorizado
const Logger = {
  info: (msg) => console.log(`[INFO] ${new Date().toISOString()} - ${msg}`),
  warn: (msg) => console.warn(`[WARN] ${new Date().toISOString()} - ${msg}`),
  error: (msg) => console.error(`[ERROR] ${new Date().toISOString()} - ${msg}`),
  debug: (msg) => console.debug(`[DEBUG] ${new Date().toISOString()} - ${msg}`)
};

//prueba de las funciones
logMessage("LOG generico");
Logger.info("app iniciada");
Logger.warn("advertencia");
Logger.error("falló algo");
