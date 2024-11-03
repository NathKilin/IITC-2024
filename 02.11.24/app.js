import express from 'express';
import mongoose from 'mongoose';
import jokesRouter from './routes/jokes.js';
import usersRouter from './routes/users.js';
import productsRouter from './routes/products.js';

const app = express(); // Inicialize o Express antes de usar middlewares e rotas

// Conectando ao MongoDB
mongoose.connect('mongodb://localhost:27017/playground_db')
  .then(() => console.log('Connected to MongoDB :)'))
  .catch((err) => console.error('MongoDB connection error :(', err));

// Middleware para interpretar JSON
app.use(express.json());

// Usando os roteadores
app.use('/jokes', jokesRouter);
app.use('/users', usersRouter);
app.use('/products', productsRouter);

// Middleware de tratamento de erros
app.use((err, req, res, next) => {
  if (err.name === 'ValidationError') {
    return res.status(400).json({ message: err.message });
  }
  res.status(500).json({ message: err.message });
});

// Iniciar o servidor
app.listen(3000, () => console.log('Server started on port 3000'));
