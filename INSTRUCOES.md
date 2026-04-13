# 📱 Botão WhatsApp Flutuante - Instruções de Uso

## Como integrar em seu site

### Opção 1: Copiar e Colar (Recomendado)

Copie o código abaixo e cole **antes do fechamento da tag `</body>`** de seu site:

```html
<!-- Font Awesome -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">

<!-- Estilos do Botão WhatsApp -->
<style>
    #wa_button {
        bottom: 25px;
        right: 0px;
        position: fixed;
        z-index: 999;
    }

    .img-circle {
        background-color: #25D366;
        box-sizing: content-box;
        -webkit-box-sizing: content-box;
    }

    .circlephone {
        box-sizing: content-box;
        -webkit-box-sizing: content-box;
        border: 2px solid #25D366;
        width: 150px;
        height: 150px;
        bottom: -25px;
        right: 10px;
        position: absolute;
        -webkit-border-radius: 100%;
        -moz-border-radius: 100%;
        border-radius: 100%;
        opacity: .5;
        -webkit-animation: circle-anim 2.4s infinite ease-in-out !important;
        -moz-animation: circle-anim 2.4s infinite ease-in-out !important;
        -ms-animation: circle-anim 2.4s infinite ease-in-out !important;
        -o-animation: circle-anim 2.4s infinite ease-in-out !important;
        animation: circle-anim 2.4s infinite ease-in-out !important;
        -webkit-transition: all .5s;
        -moz-transition: all .5s;
        -o-transition: all .5s;
        transition: all 0.5s;
    }

    .circle-fill {
        box-sizing: content-box;
        -webkit-box-sizing: content-box;
        background-color: #25D366;
        width: 100px;
        height: 100px;
        bottom: 0px;
        right: 35px;
        position: absolute;
        -webkit-border-radius: 100%;
        -moz-border-radius: 100%;
        border-radius: 100%;
        border: 2px solid transparent;
        -webkit-animation: circle-fill-anim 2.3s infinite ease-in-out;
        -moz-animation: circle-fill-anim 2.3s infinite ease-in-out;
        -ms-animation: circle-fill-anim 2.3s infinite ease-in-out;
        -o-animation: circle-fill-anim 2.3s infinite ease-in-out;
        animation: circle-fill-anim 2.3s infinite ease-in-out;
        -webkit-transition: all .5s;
        -moz-transition: all .5s;
        -o-transition: all .5s;
        transition: all 0.5s;
    }

    .img-circle {
        box-sizing: content-box;
        -webkit-box-sizing: content-box;
        width: 72px;
        height: 72px;
        bottom: 14px;
        right: 49px;
        position: absolute;
        -webkit-border-radius: 100%;
        -moz-border-radius: 100%;
        border-radius: 100%;
        border: 2px solid transparent;
        opacity: .9;
    }

    .img-circleblock {
        box-sizing: content-box;
        -webkit-box-sizing: content-box;
        width: 72px;
        height: 72px;
        background-image: none !important;
        display: flex;
        align-items: center;
        justify-content: center;
        animation-name: none !important;
        -webkit-animation-name: none !important;
    }

    .img-circleblock i {
        font-size: 40px;
        color: white;
    }

    .img-circle:hover {
        opacity: 1;
    }

    @keyframes circle-anim {
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

    @-webkit-keyframes circle-anim {
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

    @keyframes circle-fill-anim {
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

    @-webkit-keyframes circle-fill-anim {
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
</style>

<!-- Botão WhatsApp Flutuante -->
<div>
    <a href="https://wa.me/553438132026" id="wa_button" target="_blank" rel="noopener noreferrer">
        <div class="circlephone" style="transform-origin: center;"></div>
        <div class="circle-fill" style="transform-origin: center;"></div>
        <div class="img-circle" style="transform-origin: center;">
            <div class="img-circleblock" style="transform-origin: center;">
                <i class="fab fa-whatsapp"></i>
            </div>
        </div>
    </a>
</div>
```

### ⚠️ Importante: Altere o número de WhatsApp

No código acima, encontre esta linha:
```html
<a href="https://wa.me/553438132026" id="wa_button" target="_blank" rel="noopener noreferrer">
```

E substitua `553438132026` pelo seu número de WhatsApp internacional (sem espaços ou caracteres especiais).

**Exemplos:**
- Brasil: `55` + `11` + `98765-4321` = `5511987654321`
- Portugal: `351` + `912345678` = `351912345678`
- EUA: `1` + `2025551234` = `12025551234`

---

### Opção 2: Usar um arquivo separado (whitSapp-button.js)

Crie um arquivo chamado `whatsapp-button.js`:

```javascript
(function() {
    // Criar link do Font Awesome
    const faLink = document.createElement('link');
    faLink.rel = 'stylesheet';
    faLink.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css';
    document.head.appendChild(faLink);

    // Inserir CSS
    const style = document.createElement('style');
    style.innerHTML = `
        #wa_button {
            bottom: 25px;
            right: 0px;
            position: fixed;
            z-index: 999;
        }
        /* ... rest of CSS ... */
    `;
    document.head.appendChild(style);

    // Inserir HTML quando documento estiver pronto
    document.addEventListener('DOMContentLoaded', function() {
        const html = '<div><a href="https://wa.me/553438132026" id="wa_button" target="_blank"><div class="circlephone"></div><div class="circle-fill"></div><div class="img-circle"><div class="img-circleblock"><i class="fab fa-whatsapp"></i></div></div></a></div>';
        document.body.innerHTML += html;
    });
})();
```

E no seu site, adicione:
```html
<script src="caminho/para/whatsapp-button.js"></script>
```

---

## Personalização

### Mudar a posição do botão

No CSS, altere estas propriedades:
- `bottom: 25px;` - distância da base
- `right: 0px;` - distância da direita

Exemplo (lado esquerdo):
```css
#wa_button {
    bottom: 25px;
    left: 0px;  /* mude de 'right' para 'left' */
    position: fixed;
    z-index: 999;
}
```

### Mudar a cor de fundo

Procure por `#25D366` (verde WhatsApp) e substitua pela cor desejada.

Exemplo (azul):
```css
background-color: #007AFF;
border: 2px solid #007AFF;
```

### Mudar o tamanho do botão

Altere os valores de `width` e `height` em `.circlephone`, `.circle-fill` e `.img-circle`.

---

## Testes

Após integrar, verifique:
- ✅ O botão aparece no canto inferior direito
- ✅ As animações funcionam
- ✅ O ícone está visível em branco
- ✅ Ao clicar, abre o WhatsApp
- ✅ Funciona em dispositivos móveis

---

## Suporte

Para mais informações, consulte:
- [WhatsApp Web Link](https://www.whatsapp.com/features/text-message-from-qr-code/)
- [Font Awesome Icons](https://fontawesome.com/icons/whatsapp)

