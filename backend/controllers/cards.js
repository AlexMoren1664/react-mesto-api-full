const mongoose = require('mongoose');
const BadRequest = require('../errors/BadRequest');
const Forbidden = require('../errors/Conflict');
const NotFound = require('../errors/NotFound');
const Card = require('../models/card');

const getCards = (req, res, next) => {
  Card.find({})
    .then((cards) => {
      if (!cards) {
        throw new NotFound('Карточки не найдены');
      }
      res.status(200).send(cards);
    })
    .catch((err) => {
      next(err);
    });
};

const createCard = (req, res, next) => {
  const { name, link } = req.body;
  Card.create({ name, link, owner: req.user._id })
    .then((card) => {
      if (!card) {
        throw new BadRequest('Некорректные данные запроса');
      }
      res.send(card);
    })
    .catch((err) => {
      next(err);
    });
};

const deleteCard = (req, res, next) => {
  Card.findById(req.params.cardId)
    .orFail(() => {
      throw new Error('404');
    })
    .then((cardId) => {
      if (cardId.owner.toString() !== req.user._id) {
        throw new Forbidden('Нельзя удалить чужую карточку');
      }
      Card.findByIdAndRemove(cardId._id)
        .then(() => {
          res.send({ message: 'Карточка удалена' });
        });
    })
    .catch((err) => {
      if (err.message === '404') {
        throw new NotFound('Карточка не найдена');
      }
      if (err instanceof mongoose.CastError) {
        throw new BadRequest('Запрос не был обработан, неверные данные');
      }
      next(err);
    });
};

const likeCard = (req, res, next) => {
  Card.findByIdAndUpdate(req.params.cardId,
    { $addToSet: { likes: req.user._id } }, { new: true })
    .orFail(() => {
      throw new Error('404');
    })
    .then((card) => {
      res.send(card);
    })
    .catch((err) => {
      if (err.message === '404') {
        throw new NotFound('Карточка не найдена');
      }
      if (err instanceof mongoose.CastError) {
        throw new BadRequest('Запрос не был обработан, неверные данные');
      }
      next(err);
    });
};

const dislikeCard = (req, res, next) => {
  Card.findByIdAndUpdate(req.params.cardId, { $pull: { likes: req.user._id } }, { new: true })
    .orFail(() => {
      throw new Error('404');
    })
    .then((like) => {
      res.send(like);
    })
    .catch((err) => {
      if (err.message === '404') {
        throw new NotFound('Карточка не найдена');
      }
      if (err instanceof mongoose.CastError) {
        throw new BadRequest('Запрос не был обработан, неверные данные');
      }
      next(err);
    });
};

module.exports = {
  getCards,
  createCard,
  deleteCard,
  likeCard,
  dislikeCard,
};
