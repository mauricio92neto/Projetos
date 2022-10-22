const ratesValue = (req, res, next) => {
  const { talk } = req.body;
  
   if (!talk.rate) {
    return res.status(400).json({ message: 'O campo "rate" é obrigatório' });
   }
   if (talk.rate <= 0 || talk.rate > 5) {
     return res.status(400).json({ message: 'O campo "rate" deve ser um inteiro de 1 à 5' });
  }
   
   next();
  };
  module.exports = ratesValue;