/**
 * Botão WhatsApp Flutuante
 * Hospedado em: https://raw.githubusercontent.com/danilocampos/whatsapp-floating-button/main/whatsapp-button.js
 * 
 * INSTRUÇÕES DE USO:
 * 
 * 1. Configure as variáveis ANTES de incluir este script:
 * <script>
 *   window.WHATSAPP_NUMBER = 'SEU_NUMERO_AQUI';   // Ex: 553438132026
 *   window.WHATSAPP_MESSAGE = 'Sua mensagem...';   // Opcional
 * </script>
 * 
 * 2. Depois inclua este script:
 * <script src="https://cdn.jsdelivr.net/gh/danilocampos/whatsapp-floating-button@main/whatsapp-button.js"></script>
 * 
 * OU use a URL com cache buster:
 * <script src="https://cdn.jsdelivr.net/gh/danilocampos/whatsapp-floating-button/whatsapp-button.js"></script>
 */

(function() {
    // Configurações
    const phoneNumber = window.WHATSAPP_NUMBER || '553438132026';
    const message = window.WHATSAPP_MESSAGE || '';

    // Carregar Font Awesome
    function loadFontAwesome() {
        if (!document.querySelector('link[href*="font-awesome"]')) {
            const link = document.createElement('link');
            link.rel = 'stylesheet';
            link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css';
            document.head.appendChild(link);
        }
    }

    // Carregar CSS
    function loadButtonCSS() {
        if (!document.querySelector('link[href*="whatsapp-button"]')) {
            const link = document.createElement('link');
            link.rel = 'stylesheet';
            link.href = 'https://cdn.jsdelivr.net/gh/danilocampos/whatsapp-floating-button@main/whatsapp-button.css';
            document.head.appendChild(link);
        }
    }

    // Criar elemento do botão
    function createButton() {
        const url = message 
            ? `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
            : `https://wa.me/${phoneNumber}`;

        const html = `
            <a href="${url}" id="wa_button" target="_blank" rel="noopener noreferrer" title="Fale conosco no WhatsApp">
                <div class="circlephone" style="transform-origin: center;"></div>
                <div class="circle-fill" style="transform-origin: center;"></div>
                <div class="img-circle" style="transform-origin: center;">
                    <div class="img-circleblock" style="transform-origin: center;">
                        <i class="fab fa-whatsapp"></i>
                    </div>
                </div>
            </a>
        `;

        const div = document.createElement('div');
        div.innerHTML = html;
        return div.firstElementChild;
    }

    // Inicializar
    function init() {
        loadFontAwesome();
        loadButtonCSS();
        
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', function() {
                document.body.appendChild(createButton());
            });
        } else {
            document.body.appendChild(createButton());
        }
    }

    // Iniciar
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
