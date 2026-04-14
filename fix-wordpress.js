/**
 * Script para corrigir o botão WhatsApp no WordPress
 * Injeta o CSS correto quando a página carrega
 * 
 * Adicionar este script ANTES de whatsapp-button.js:
 * <script src="https://cdn.jsdelivr.net/gh/danilocampos/whatsapp-floating-button@main/fix-wordpress.js"></script>
 */

(function() {
  // Aguardar o DOM estar pronto
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', fixWhatsApp);
  } else {
    fixWhatsApp();
  }

  function fixWhatsApp() {
    // Remover CSS antigo (de commit específico)
    const oldLink = document.querySelector('link[href*="whatsapp-button.css"][href*="@24d1b2b"]');
    if (oldLink) {
      oldLink.remove();
    }

    // Adicionar CSS novo (versão @main)
    const newLink = document.createElement('link');
    newLink.rel = 'stylesheet';
    newLink.href = 'https://cdn.jsdelivr.net/gh/danilocampos/whatsapp-floating-button@main/whatsapp-button.css';
    document.head.appendChild(newLink);

    // Aguardar um pouco para a CSS carregar e então reaplicar estilos ao botão
    setTimeout(function() {
      const button = document.querySelector('#wa_button');
      if (button) {
        // Forçar recalcular estilos
        button.style.display = 'flex';
        button.style.width = '170px';
        button.style.height = '170px';
      }
    }, 100);
  }
})();
