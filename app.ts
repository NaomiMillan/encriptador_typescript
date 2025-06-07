const shift = 3;

function caesarCipher(text: string, encrypting: boolean): string {
  return text.split('').map(char => {
    const code = char.charCodeAt(0);
    let base = 0;

    if (char >= 'A' && char <= 'Z') {
      base = 'A'.charCodeAt(0);
    } else if (char >= 'a' && char <= 'z') {
      base = 'a'.charCodeAt(0);
    } else {
      return char;
    }

    const offset = encrypting ? shift : -shift;
    return String.fromCharCode(((code - base + offset + 26) % 26) + base);
  }).join('');
}

function getInput(): string {
  return (document.getElementById('inputText') as HTMLTextAreaElement).value;
}

function setOutput(text: string): void {
  (document.getElementById('outputText') as HTMLTextAreaElement).value = text;
}

function showCopyNotice(): void {
  const notice = document.getElementById('copyNotice')!;
  notice.style.display = 'block';
  setTimeout(() => (notice.style.display = 'none'), 2000);
}

// Asociar eventos al cargar
window.addEventListener('DOMContentLoaded', () => {
  (document.getElementById('btnUpper') as HTMLButtonElement).onclick = () =>
    setOutput(getInput().toUpperCase());

  (document.getElementById('btnLower') as HTMLButtonElement).onclick = () =>
    setOutput(getInput().toLowerCase());

  (document.getElementById('btnEncrypt') as HTMLButtonElement).onclick = () =>
    setOutput(caesarCipher(getInput(), true));

  (document.getElementById('btnDecrypt') as HTMLButtonElement).onclick = () =>
    setOutput(caesarCipher(getInput(), false));

  (document.getElementById('btnInvert') as HTMLButtonElement).onclick = () =>
    setOutput(getInput().split('').reverse().join(''));

  (document.getElementById('btnCopy') as HTMLButtonElement).onclick = () => {
    const output = (document.getElementById('outputText') as HTMLTextAreaElement).value;
    navigator.clipboard.writeText(output).then(showCopyNotice);
  };
});
