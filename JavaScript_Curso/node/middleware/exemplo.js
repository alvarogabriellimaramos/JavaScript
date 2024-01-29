const express = require('express');
const app = express();

// Middleware 1
app.use((req, res, next) => {
  console.log('Middleware 1');
  // Modificar a solicitação (se necessário)
  req.customData = 'Alguma informação customizada';
  // Passar para o próximo middleware
  next();
});

// Middleware 2
app.use((req, res, next) => {
  console.log('Middleware 2');
  // Realizar alguma lógica com base na solicitação modificada
  console.log('Dados customizados:', req.customData);
  // Não chamar next() neste middleware, encerrando a cadeia
  res.send('Resposta final');
});

// Middleware 3 (não será executado)
app.use((req, res, next) => {
  console.log('Middleware 3');
  // Este middleware não será alcançado porque o Middleware 2 encerrou a cadeia
});

// Iniciar o servidor
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor Express rodando na porta ${PORT}`);
});


// como o middleware 2 encerrou a cadeia o middleware tres não sera executado,isso por que o middleware 2 não chamou a função next() assim encerrado a cadeia