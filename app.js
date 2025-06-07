"use strict";
const shift = 3;
function caesarCipher(text, encrypting) {
    return text.split('').map(char => {
        const code = char.charCodeAt(0);
        let base = 0;
        if (char >= 'A' && char <= 'Z') {
            base = 'A'.charCodeAt(0);
        }
        else if (char >= 'a' && char <= 'z') {
            base = 'a'.charCodeAt(0);
        }
        else {
            return char;
        }
        const offset = encrypting ? shift : -shift;
        return String.fromCharCode(((code - base + offset + 26) % 26) + base);
    }).join('');
}
function getInput() {
    return document.getElementById('inputText').value;
}
function setOutput(text) {
    document.getElementById('outputText').value = text;
}
function showCopyNotice() {
    const notice = document.getElementById('copyNotice');
    notice.style.display = 'block';
    setTimeout(() => (notice.style.display = 'none'), 2000);
}
// Asociar eventos al cargar
window.addEventListener('DOMContentLoaded', () => {
    document.getElementById('btnUpper').onclick = () => setOutput(getInput().toUpperCase());
    document.getElementById('btnLower').onclick = () => setOutput(getInput().toLowerCase());
    document.getElementById('btnEncrypt').onclick = () => setOutput(caesarCipher(getInput(), true));
    document.getElementById('btnDecrypt').onclick = () => setOutput(caesarCipher(getInput(), false));
    document.getElementById('btnInvert').onclick = () => setOutput(getInput().split('').reverse().join(''));
    document.getElementById('btnCopy').onclick = () => {
        const output = document.getElementById('outputText').value;
        navigator.clipboard.writeText(output).then(showCopyNotice);
    };
});
