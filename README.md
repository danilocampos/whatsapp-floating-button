# 📱 Botão WhatsApp Flutuante

Um botão WhatsApp flutuante responsivo e animado, pronto para integrar em qualquer site!

## ⚡ Início Rápido

### Opção 1: Usar o Configurador (Recomendado) 🎨

1. Abra a [Página da Aplicação](https://danilocampos.github.io/whatsapp-floating-button/)
2. Digite seu número de WhatsApp
3. (Opcional) Digite uma mensagem padrão
4. Clique em "Gerar Código"
5. Copie e cole o código no seu site (antes de `</body>`)

### Opção 2: Copiar Código Direto 💻

```html
<!-- Font Awesome -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">

<!-- Botão WhatsApp -->
<script>
  window.WHATSAPP_NUMBER = 'SEU_NUMERO_AQUI';           // Ex: 5511987654321
  window.WHATSAPP_MESSAGE = 'Sua mensagem aqui';        // Opcional
</script>
<script src="https://cdn.jsdelivr.net/gh/danilocampos/whatsapp-floating-button@main/whatsapp-button.js"></script>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/danilocampos/whatsapp-floating-button@main/whatsapp-button.css">
```

## 📋 Estrutura de Arquivos

```
whatsapp-floating-button/
├── index.html                  # 🎨 Aplicação principal / Ferramenta visual para gerar código
├── whatsapp-button.css         # Estilos do botão
├── whatsapp-button.js          # Script principal
├── style.css                   # Estilos adicionais (obsoleto)
├── botao.html                  # HTML original do botão
└── README.md                   # Este arquivo
```

## 🔧 Configuração

### Número de WhatsApp

O número deve estar no **formato internacional**:

```
[CÓDIGO_PAÍS] + [DDD/AREA] + [NÚMERO]
```

**Exemplos:**
- 🇧🇷 Brasil: `55` + `11` + `98765-4321` = `5511987654321`
- 🇵🇹 Portugal: `351` + `912345678` = `351912345678`
- 🇺🇸 EUA: `1` + `202-555-1234` = `12025551234`
- 🇦🇷 Argentina: `54` + `11` + `12345678` = `541112345678`

### Mensagem Padrão (Opcional)

Se adicionar uma mensagem, ela será pré-preenchida no WhatsApp:

```javascript
window.WHATSAPP_MESSAGE = 'Olá! Gostaria de saber mais sobre seus serviços.';
```

## 🎨 Personalização

### Mudar a Cor

Edite o arquivo `whatsapp-button.css` e procure por `#25D366` (verde WhatsApp):

```css
.circlephone {
    border: 2px solid #007AFF;  /* Azul */
    /* ... */
}

.circle-fill {
    background-color: #007AFF;  /* Azul */
    /* ... */
}

.img-circle {
    background-color: #007AFF;  /* Azul */
    /* ... */
}
```

### Mudar a Posição

Por padrão, o botão fica no **canto inferior direito**. Para mover para a esquerda:

```css
#wa_button {
    left: 0px;        /* Mude de 'right' para 'left' */
    position: fixed;
    z-index: 999;
}
```

E também atualize as posições dos círculos em `whatsapp-button.css`.

### Aumentar/Diminuir Tamanho

Ajuste os valores de `width` e `height`:

```css
.circle-fill {
    width: 80px;    /* Aumentado de 100px */
    height: 80px;
    /* ... */
}

.img-circleblock i {
    font-size: 35px;  /* Aumentado de 40px */
}
```

## 🌐 Hospedagem dos Arquivos

Os arquivos CSS e JS são hospedados via jsDelivr:

```
https://cdn.jsdelivr.net/gh/danilocampos/whatsapp-floating-button@main/whatsapp-button.js
https://cdn.jsdelivr.net/gh/danilocampos/whatsapp-floating-button@main/whatsapp-button.css
```

Isso permite usar diretamente do GitHub sem necessidade de hospedar em seu servidor!

## ✨ Recursos

- ✅ Botão flutuante com animações suaves
- ✅ Ícone oficialWhatsApp (Font Awesome)
- ✅ Efeitos de onda ao redor do botão
- ✅ Responsivo em todos os dispositivos
- ✅ Fácil de personalizar
- ✅ Sem dependências complexas
- ✅ Compatível com todos os navegadores modernos
- ✅ Mensagem pré-preenchida opcional

## 🚀 Exemplo Completo

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Meu Site</title>
</head>
<body>
    <h1>Bem-vindo ao meu site!</h1>
    
    <!-- SEU CONTEÚDO AQUI -->

    <!-- Botão WhatsApp - COLE ANTES DE </body> -->
    <script>
        window.WHATSAPP_NUMBER = '5511987654321';
        window.WHATSAPP_MESSAGE = 'Olá! Gostaria de mais informações sobre...';
    </script>
    <script src="https://cdn.jsdelivr.net/gh/danilocampos/whatsapp-floating-button@main/whatsapp-button.js"></script>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/danilocampos/whatsapp-floating-button@main/whatsapp-button.css">
</body>
</html>
```

## 🔗 Links Úteis

- [Documentação WhatsApp Business](https://www.whatsapp.com/business/developers/)
- [Font Awesome - WhatsApp Icon](https://fontawesome.com/icons/whatsapp)
- [jsDelivr CDN](https://www.jsdelivr.com/)

## 📝 Licença

Livre para usar e modificar. Sem restrições!

## 🤝 Contribuições

Encontrou um bug ou tem uma sugestão? Abra uma issue no [GitHub](https://github.com/danilocampos/whatsapp-floating-button)!

---

**Feito com ❤️ para facilitar sua vida!**
