module.exports = (app) => {
  const { router, controller } = app;
  router.get('/users/:id', controller.user.find_user);
  router.post('/users', controller.user.create_user);
}