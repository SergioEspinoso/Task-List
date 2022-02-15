// Pedaço de código retirado da aula de revisão dos blocos 26 e 27;

const errorMiddleware = (err, req, res, _next) => {
  if (err.status) {
    return res.status(err.status).json({ message: err.message });
  }
  res.status(500).json({ message: 'Internal Server Error' });
};

module.exports = {
  errorMiddleware,
}; 