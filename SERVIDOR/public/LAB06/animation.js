const canvas = document.getElementById("meuCanvas");
const ctx = canvas.getContext("2d");

const imagem = new Image();
imagem.src = "https://www.kindpng.com/picc/m/85-859521_master-chief-helmet-png-transparent-png.png";
let mouseX = canvas.width / 2;
let mouseY = canvas.height / 2;

canvas.addEventListener("mousemove", (evento) => {
  const rect = canvas.getBoundingClientRect();
  mouseX = evento.clientX - rect.left;
  mouseY = evento.clientY - rect.top;
});

function desenhar() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  const imgLargura = 80;
  const imgAltura = 80;
  const x = mouseX - imgLargura / 2;
  const y = mouseY - imgAltura / 2;
  ctx.drawImage(imagem, x, y, imgLargura, imgAltura);
  requestAnimationFrame(desenhar);
}

imagem.onload = desenhar;
