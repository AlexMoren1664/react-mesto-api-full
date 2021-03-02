const cardsRouter = require('express').Router();
const { celebrate, Joi } = require('celebrate');
const validator = require('validator');
const controllers = require('../controllers/cards');

cardsRouter.get('/cards', controllers.getCards);

cardsRouter.post('/cards', celebrate({
  body: Joi.object().keys({
    name: Joi.string().required().min(1).max(20),
    link: Joi.string().required().custom((value, helper) => {
      if (validator.isURL(value)) {
        return value;
      }
      return helper.message('Невалидный url');
    }),
  }),
}), controllers.createCard);

cardsRouter.delete('/cards/:cardId', controllers.deleteCard);
cardsRouter.put('/cards/likes/:cardId', controllers.likeCard);
cardsRouter.delete('/cards/likes/:cardId', controllers.dislikeCard);

module.exports = cardsRouter;
