import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware para ler formulários
app.use(express.urlencoded({ extended: true }));

// Pasta para arquivos estáticos (CSS, JS, imagens)
app.use(express.static(path.join(__dirname, "public")));

// Configuração do EJS
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Simulação de "banco de dados" em memória
const usuarios = [];

// Rotas HTML
app.get("/cadastra", (req, res) => {
  res.sendFile(path.join(__dirname, "html", "Cadastro.html"));
});

app.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "html", "login.html"));
});

// Recebe dados do cadastro
app.post("/enviar_cadastro", (req, res) => {
  const { nome, email, senha } = req.body;

  // Salva usuário em memória
  usuarios.push({ nome, email, senha });
  console.log("Novo cadastro:", { nome, email });

  // Redireciona para login com mensagem de sucesso
  res.redirect("/login?sucesso=true");
});

// Recebe dados do login
app.post("/fazer_login", (req, res) => {
  const { email, senha } = req.body;

  const usuario = usuarios.find(u => u.email === email && u.senha === senha);

  if (usuario) {
    res.render("resposta", {
      tipo: "login",
      nome: usuario.nome,
      status: "realizado com sucesso!"
    });
  } else {
    res.render("resposta", {
      tipo: "login",
      nome: email,
      status: "falhou. Usuário ou senha incorretos."
    });
  }
});

// Inicia o servidor
app.listen(80, () => console.log("Servidor rodando na porta 80 🚀"));
