const usersRouter = require('express').Router();
const { celebrate, Joi } = require('celebrate');
const controllers = require('../controllers/users');

usersRouter.get('/users/me', controllers.getUserInfo);
usersRouter.get('/users', controllers.getUsers);

usersRouter.get('/users/:id', celebrate({
  params: Joi.object().keys({
    id: Joi.string().required().length(24).hex(),
  }),
}), controllers.getUser);

usersRouter.patch('/users/me', celebrate({
  body: Joi.object().keys({
    name: Joi.string().required().min(2).max(20),
    about: Joi.string().required().min(2).max(30),
  }),
}), controllers.updateUserProfile);

usersRouter.patch('/users/me/avatar', celebrate({
  body: Joi.object().keys({
    avatar: Joi.string().required().pattern(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/),
  }),
}), controllers.updateUserAvatar);

module.exports = usersRouter;
