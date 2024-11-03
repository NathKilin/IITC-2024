import express from 'express';
import Joke from '../models/Joke.model.js';

const router = express.Router();

// GET Todos os Jokes
router.get('/', async (req, res) => {
  try {
    const jokes = await Joke.find();
    res.json(jokes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET Joke por ID
router.get('/:id', async (req, res) => {
  try {
    const joke = await Joke.findById(req.params.id);
    if (!joke) return res.status(404).json({ message: 'Joke not found' });
    res.json(joke);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// POST Criar um novo Joke
router.post('/', async (req, res) => {
  const joke = new Joke({
    setup: req.body.setup,
    punchline: req.body.punchline,
  });
  try {
    const newJoke = await joke.save();
    res.status(201).json(newJoke);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// PUT Atualizar um Joke
router.put('/:id', async (req, res) => {
  try {
    const joke = await Joke.findById(req.params.id);
    if (!joke) return res.status(404).json({ message: 'Joke not found' });
    joke.setup = req.body.setup ?? joke.setup;
    joke.punchline = req.body.punchline ?? joke.punchline;
    const updatedJoke = await joke.save();
    res.json(updatedJoke);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// DELETE Joke
router.delete('/:id', async (req, res) => {
  try {
    const joke = await Joke.findById(req.params.id);
    if (!joke) return res.status(404).json({ message: 'Joke not found' });
    await joke.remove();
    res.json({ message: 'Deleted Joke' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
