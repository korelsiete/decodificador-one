import cipherModule from "./scripts/cipherModule.js";

const inputText = document.getElementById("input-text");
const outputText = document.getElementById("output-text");
const encryptButton = document.getElementById("encrypt-button");
const decryptButton = document.getElementById("decrypt-button");
const copyButton = document.getElementById("copy-button");

function verifyText(text) {
  const regex = /^[a-z0-9\s]+$/;
  return regex.test(text);
}

encryptButton.addEventListener("click", () => {
  const text = inputText.value;
  if (verifyText(text)) {
    const encryptedText = cipherModule.encrypt(text);
    outputText.innerText = encryptedText;
    document.querySelector(".not-found-message").style.display = "none";
    outputText.style.display = "block";
    copyButton.style.display = "block";
  } else {
    Toastify({
      text: "Texto inválido, solo letras minúsculas y sin acentos",
      duration: 2000,
      className: "invalid-toast",
    }).showToast();
    document.querySelector(".not-found-message").style.display = "block";
    outputText.style.display = "none";
    copyButton.style.display = "none";
  }
});

decryptButton.addEventListener("click", () => {
  const text = inputText.value;
  if (verifyText(text)) {
    const decryptedText = cipherModule.decrypt(text);
    outputText.innerText = decryptedText;
    document.querySelector(".not-found-message").style.display = "none";
    outputText.style.display = "block";
    copyButton.style.display = "block";
  } else {
    Toastify({
      text: "Texto inválido, solo letras minúsculas y sin acentos",
      duration: 2000,
      className: "invalid-toast",
    }).showToast();
    document.querySelector(".not-found-message").style.display = "block";
    outputText.style.display = "none";
    copyButton.style.display = "none";
  }
});

copyButton.addEventListener("click", () => {
  navigator.clipboard
    .writeText(outputText.innerText)
    .then(
      Toastify({
        text: "Copiado!",
        duration: 2000,
        className: "copied-toast",
      }).showToast()
    )
    .catch((err) => console.log(err));
});
