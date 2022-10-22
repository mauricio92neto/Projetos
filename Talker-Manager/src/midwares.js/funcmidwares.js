const fs = require('fs').promises;
const path = require('path');

const newPaths = path.resolve(__dirname, '..', 'talker.json');

async function redTalk() {
try {
  const dados = await fs.readFile(newPaths);
  return JSON.parse(dados);
} catch (err) {
  console.error(`Erro no cadastro :${err}`);
}
}

async function talkRed(dados) {
try {
  await fs.writeFile(newPaths, JSON.stringify(dados));
} catch (err) {
  console.error(`Erro ao digitar arquivo:${err}`);
}
}

async function newTalker(newPerson) {
  try {
      const newlist = await redTalk();
      const talkerUnid = { id: newlist.length + 1, ...newPerson };
      const listTalker = JSON.stringify([...newlist, talkerUnid]);
       await fs.writeFile(newPaths, listTalker);
      return talkerUnid;
  } catch (error) {
      console.error(`I/O Error: ${error}`);
  }
}

async function selectTalker(item, itemId) {
  try {
    const putList = await redTalk();
    const putId = putList.findIndex(({ id }) => id === Number(itemId));
    const selectId = { ...putList[putId], ...item };
    putList.splice(putId, 1, selectId);
    await talkRed(putList);
    return selectId;
  } catch (err) {
    console.log(`Can not edit ${err}`);
  }
}

module.exports = { redTalk, talkRed, newTalker, selectTalker };