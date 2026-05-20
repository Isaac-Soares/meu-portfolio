export function initDesktop() {
  const icons = document.querySelectorAll(".app-icon[data-app]");
  const closeWindowButtons = document.querySelectorAll(".close-window");

  // Abrir Janela ao clicar no Ícone
  icons.forEach(icon => {
    icon.addEventListener("click", () => {
      const appName = icon.getAttribute("data-app");
      const targetWindow = document.getElementById(`win-${appName}`);
      
      if (targetWindow) {
        targetWindow.classList.add("open");
      }
    });
  });

  // Fechar Janela ao clicar no X dela
  closeWindowButtons.forEach(button => {
    button.addEventListener("click", (e) => {
      const windowTarget = e.target.closest(".window-pixel");
      if (windowTarget) {
        windowTarget.classList.remove("open");
      }
    });
  });
}