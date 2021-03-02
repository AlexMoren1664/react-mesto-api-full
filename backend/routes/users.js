const usersRouter = require('express').Router();
const { celebrate, Joi } = require('celebrate');
const validator = require('validator');
const controllers = require('../controllers/users');

usersRouter.get('/users/me', controllers.getUserInfo);
usersRouter.get('/users', controllers.getUsers);
usersRouter.get('/users/:id', controllers.getUser);

usersRouter.patch('/users/me', celebrate({
  body: Joi.object().keys({
    name: Joi.string().min(2).max(20),
    about: Joi.string().min(2).max(30),
  }),
}), controllers.updateUserProfile);

usersRouter.patch('/users/me/avatar', celebrate({
  body: Joi.object().keys({
    avatar: Joi.string().custom((value, helper) => {
      if (validator.isURL(value)) {
        return value;
      }
      return helper.message('Невалидный url');
    }),
  }),
}), controllers.updateUserAvatar);

usersRouter.post('/signup', controllers.createUser);
usersRouter.post('/signin', controllers.login);

module.exports = usersRouter;
