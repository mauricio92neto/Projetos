const express = require('express');
const bodyParser = require('body-parser');
const { redTalk, newTalker, selectTalker, talkRed } = require('./midwares.js/funcmidwares');
const verifEmail = require('./midwares.js/verifEmail');
const verifSenha = require('./midwares.js/verifSenha');
const createToken = require('./random/token');
const addName = require('./midwares.js/addTalk');
const formPeople = require('./midwares.js/formPeople');
const agePeople = require('./midwares.js/agePeople');
const ratesValue = require('./midwares.js/ratesValue');
const tokenValida = require('./midwares.js/tokenValida');
const valueRates = require('./midwares.js/valueRates');

const app = express();
app.use(bodyParser.json());

const HTTP_OK_STATUS = 200;
const PORT = '3000';

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.listen(PORT, () => {
  console.log('Online');
});

app.get('/talker/search', tokenValida, async (req, res) => {
  const { q } = req.query;
  const newfil = await redTalk();
  const wiTalk = newfil.filter((item) => item.name.includes(q));
  res.status(200).json(wiTalk);
});

app.get('/talker', async (_req, res) => {
const cadastro = await redTalk();
res.status(200).json(cadastro);
});

app.get('/talker/:id', async (req, res) => {
  const { id } = req.params;
  const novoTalker = await redTalk();
  const talkerNews = novoTalker.find((item) => item.id === Number(id));
  if (talkerNews) {
    res.status(200).json(talkerNews);
  } else {
    res.status(404).json({ message: 'Pessoa palestrante não encontrada' });
  }
});

app.post('/login', verifSenha, verifEmail, async (req, res) => {
  const user = await redTalk();
  const newUser = req.body;
  user.push(newUser);
  const token = createToken();
  return res.status(200).json({ token });
});

app.post('/talker', tokenValida, formPeople, agePeople, addName, ratesValue, async (req, res) => {
  const newUserTalk = req.body;
  const talksNew = await newTalker(newUserTalk); 
   res.status(201).json(talksNew);
});

app.put('/talker/:id', tokenValida, formPeople,
agePeople, addName, valueRates, async (req, res) => {
  const putTalker = req.body;
  const { id } = req.params;
  const select = await selectTalker(putTalker, id);
  res.status(200).json(select);
}); 

app.delete('/talker/:id', tokenValida, async (req, res) => {
  const validId = Number(req.params.id);
  const novatalker = await redTalk();
  const people = novatalker.find((vlr) => vlr.id === validId);
  const peopleTalk = { ...novatalker };
  if (people) {
    const item = novatalker.indexOf(people);
    novatalker.splice(item, 1, peopleTalk);
  }
  await talkRed(novatalker);
  res.sendStatus(204);
});
