const yup = require('yup');

module.exports.signUpValidate = async (req, res, next)=> {
  const { body } = req;

  const validationSchema = yup.object({
    firstName: yup.string().trim().min(1).max(64).required(),
    lastName: yup.string().trim().min(1).max(64).required(),
    email: yup.string().email().required(),
    password: yup.string().min(8).max(64).required()
  })

  try {
    req.body = await validationSchema.validate(body);
    next();
  }
  catch (error) {
    //res.status(400).send('Validation error');
    next(error); // обрываем цепочку и передаем управление специальному обработчику
  }
}