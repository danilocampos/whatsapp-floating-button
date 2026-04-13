/**
 * Botão WhatsApp Flutuante
 * Fácil de integrar em qualquer site
 * 
 * Uso:
 * <script src="whatsapp-button.js"></script>
 * 
 * Ou configure com parâmetros:
 * <script>
 *   window.whatsappConfig = {
 *     phoneNumber: '55XXXXXXXXXXX',
 *     position: 'right', // 'left' ou 'right'
 *     message: 'Olá! Como posso ajudar?'
 *   };
 * </script>
 * <script src="whatsapp-button.js"></script>
 */

(function() {
    // Configuração padrão
    const config = window.whatsappConfig || {
        phoneNumber: '553438132026',
        position: 'right',
        message: ''
    };

    // Carregar Font Awesome
    function loadFontAwesome() {
        if (!document.querySelector('link[href*="font-awesome"]')) {
            const link = document.createElement('link');
            link.rel = 'stylesheet';
            link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css';
            document.head.appendChild(link);
        }
    }

    // Injetar CSS
    function injectCSS() {
        const style = document.createElement('style');
        const positionValue = config.position === 'left' ? 'left: 0px;' : 'right: 0px;';
        
        style.innerHTML = `
            #wa_button {
                bottom: 25px;
                ${positionValue}
                position: fixed;
                z-index: 999;
                text-decoration: none;
            }

            .wa-circlephone {
                box-sizing: content-box;
                -webkit-box-sizing: content-box;
                border: 2px solid #25D366;
                width: 150px;
                height: 150px;
                bottom: -25px;
                ${config.position === 'left' ? 'left: 10px;' : 'right: 10px;'}
                position: absolute;
                -webkit-border-radius: 100%;
                -moz-border-radius: 100%;
                border-radius: 100%;
                opacity: .5;
                -webkit-animation: wa-circle-anim 2.4s infinite ease-in-out !important;
                -moz-animation: wa-circle-anim 2.4s infinite ease-in-out !important;
                -ms-animation: wa-circle-anim 2.4s infinite ease-in-out !important;
                -o-animation: wa-circle-anim 2.4s infinite ease-in-out !important;
                animation: wa-circle-anim 2.4s infinite ease-in-out !important;
                -webkit-transition: all .5s;
                -moz-transition: all .5s;
                -o-transition: all .5s;
                transition: all 0.5s;
            }

            .wa-circle-fill {
                box-sizing: content-box;
                -webkit-box-sizing: content-box;
                background-color: #25D366;
                width: 100px;
                height: 100px;
                bottom: 0px;
                ${config.position === 'left' ? 'left: 35px;' : 'right: 35px;'}
                position: absolute;
                -webkit-border-radius: 100%;
                -moz-border-radius: 100%;
                border-radius: 100%;
                border: 2px solid transparent;
                -webkit-animation: wa-circle-fill-anim 2.3s infinite ease-in-out;
                -moz-animation: wa-circle-fill-anim 2.3s infinite ease-in-out;
                -ms-animation: wa-circle-fill-anim 2.3s infinite ease-in-out;
                -o-animation: wa-circle-fill-anim 2.3s infinite ease-in-out;
                animation: wa-circle-fill-anim 2.3s infinite ease-in-out;
                -webkit-transition: all .5s;
                -moz-transition: all .5s;
                -o-transition: all .5s;
                transition: all 0.5s;
            }

            .wa-img-circle {
                box-sizing: content-box;
                -webkit-box-sizing: content-box;
                background-color: #25D366;
                width: 72px;
                height: 72px;
                bottom: 14px;
                ${config.position === 'left' ? 'left: 49px;' : 'right: 49px;'}
                position: absolute;
                -webkit-border-radius: 100%;
                -moz-border-radius: 100%;
                border-radius: 100%;
                border: 2px solid transparent;
                opacity: .9;
                display: flex;
                align-items: center;
                justify-content: center;
            }

            .wa-img-circle:hover {
                opacity: 1;
            }

            .wa-img-circle i {
                font-size: 40px;
                color: white;
            }

            @keyframes wa-circle-anim {
                0% {
                    transform: rotate(0deg) scale(0.5) skew(1deg);
                    opacity: .1;
                }
                30% {
                    transform: rotate(0deg) scale(0.7) skew(1deg);
                    opacity: .5;
                }
                100% {
                    transform: rotate(0deg) scale(1) skew(1deg);
                    opacity: .1;
                }
            }

            @-webkit-keyframes wa-circle-anim {
                0% {
                    -webkit-transform: rotate(0deg) scale(0.5) skew(1deg);
                    -webkit-opacity: .1;
                }
                30% {
                    -webkit-transform: rotate(0deg) scale(0.7) skew(1deg);
                    -webkit-opacity: .5;
                }
                100% {
                    -webkit-transform: rotate(0deg) scale(1) skew(1deg);
                    -webkit-opacity: .1;
                }
            }

            @keyframes wa-circle-fill-anim {
                0% {
                    transform: rotate(0deg) scale(0.7) skew(1deg);
                    opacity: .2;
                }
                50% {
                    transform: rotate(0deg) scale(1) skew(1deg);
                    opacity: .2;
                }
                100% {
                    transform: rotate(0deg) scale(0.7) skew(1deg);
                    opacity: .2;
                }
            }

            @-webkit-keyframes wa-circle-fill-anim {
                0% {
                    -webkit-transform: rotate(0deg) scale(0.7) skew(1deg);
                    opacity: .2;
                }
                50% {
                    -webkit-transform: rotate(0deg) scale(1) skew(1deg);
                    opacity: .2;
                }
                100% {
                    -webkit-transform: rotate(0deg) scale(0.7) skew(1deg);
                    opacity: .2;
                }
            }
        `;
        
        document.head.appendChild(style);
    }

    // Criar elemento do botão
    function createButton() {
        const url = config.message 
            ? `https://wa.me/${config.phoneNumber}?text=${encodeURIComponent(config.message)}`
            : `https://wa.me/${config.phoneNumber}`;

        const html = `
            <a href="${url}" id="wa_button" target="_blank" rel="noopener noreferrer" title="Fale conosco no WhatsApp">
                <div class="wa-circlephone" style="transform-origin: center;"></div>
                <div class="wa-circle-fill" style="transform-origin: center;"></div>
                <div class="wa-img-circle" style="transform-origin: center;">
                    <i class="fab fa-whatsapp"></i>
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
        injectCSS();
        
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', function() {
                document.body.appendChild(createButton());
            });
        } else {
            document.body.appendChild(createButton());
        }
    }

    // Iniciar quando tudo estiver pronto
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
