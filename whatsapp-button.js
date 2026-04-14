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
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" style="width:38px;height:38px;display:block;flex-shrink:0;" aria-hidden="true">
                            <path fill="#ffffff" d="M16 0C7.164 0 0 7.163 0 16c0 2.822.736 5.476 2.027 7.789L0 32l8.418-2.004A15.93 15.93 0 0 0 16 32c8.836 0 16-7.163 16-16S24.836 0 16 0zm0 29.333a13.263 13.263 0 0 1-6.747-1.84l-.483-.287-4.998 1.19 1.27-4.847-.317-.499A13.229 13.229 0 0 1 2.667 16C2.667 8.636 8.636 2.667 16 2.667S29.333 8.636 29.333 16 23.364 29.333 16 29.333zm7.27-9.862c-.398-.199-2.355-1.162-2.72-1.294-.365-.133-.631-.199-.897.199-.266.398-1.03 1.294-1.262 1.56-.232.265-.465.298-.863.1-.398-.2-1.681-.619-3.202-1.977-1.183-1.056-1.982-2.36-2.214-2.758-.232-.398-.025-.613.174-.811.179-.178.398-.465.597-.698.199-.232.265-.398.398-.664.133-.265.067-.498-.033-.697-.1-.199-.897-2.162-1.229-2.96-.323-.778-.651-.672-.897-.685-.232-.012-.498-.015-.764-.015s-.697.1-1.063.498c-.365.398-1.394 1.362-1.394 3.324s1.428 3.855 1.627 4.12c.2.266 2.81 4.29 6.808 6.02.951.41 1.693.655 2.272.839.954.304 1.823.261 2.51.158.765-.114 2.355-.963 2.688-1.893.332-.93.332-1.727.232-1.893-.099-.166-.365-.265-.763-.465z"/>
                        </svg>
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
