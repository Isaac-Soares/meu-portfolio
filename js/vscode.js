let pyodide;
const outputDiv = document.getElementById("output");
const runButton = document.getElementById("run-btn");
const editor = document.getElementById("editor");

// Criamos um decodificador para transformar os bytes do Python em texto legível (UTF-8)
const decodificador = new TextDecoder("utf-8");

// Coloriza o código base logo na abertura da página
if (window.Prism) {
  Prism.highlightElement(editor);
}

// 1. Inicializa o ambiente WebAssembly do Python
async function initPython() {
  try {
    pyodide = await loadPyodide();
    output.innerText = "Python 3.11 installed successfully!\nClick '▶ Run Code' to execute the script locally.";
    runButton.disabled = false;
  } catch (err) {
    outputDiv.innerText = "Erro crítico ao carregar interpretador Python: " + err;
  }
}

// 2. Executa o código capturando os logs do print()
async function rodarCodigoPython() {
  if (!pyodide) return;

  outputDiv.innerText = "Executando script...\n\n";
  runButton.disabled = true;

  // Garante que a colorização se mantenha firme antes do processo
  Prism.highlightElement(editor);

  // 🛠️ CORREÇÃO DA CAPTURA: Traduz os bytes e retorna o tamanho correto para o Python
  pyodide.setStdout({
    write: (buffer) => {
      const textoTraduzido = decodificador.decode(buffer);
      outputDiv.innerText += textoTraduzido;
      outputDiv.scrollTop = outputDiv.scrollHeight; // Auto-scroll do terminal
      return buffer.length; // 🔥 CRUCIAL: Diz ao Python quantos bytes foram processados para evitar o Errno 29
    }
  });
  
  pyodide.setStderr({
    write: (buffer) => {
      const textoErro = decodificador.decode(buffer);
      outputDiv.innerText += "❌ Erro de Sintaxe: " + textoErro;
      return buffer.length;
    }
  });

  try {
    const code = editor.innerText;
    await pyodide.runPythonAsync(code);
  } catch (err) {
    // Captura erros que acontecem fora do fluxo normal de Print
    outputDiv.innerText += "\n❌ Falha na Execução:\n" + err;
  } finally {
    runButton.disabled = false;
  }
}

// Reaplica a sintaxe colorida oficial quando o dev terminar de editar e clicar fora
editor.addEventListener('blur', () => {
  Prism.highlightElement(editor);
});

// Evento do clique no botão fixo superior
runButton.addEventListener("click", rodarCodigoPython);
runButton.disabled = true;

// Inicializa o download em segundo plano
initPython();