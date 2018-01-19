module.exports = {
  "development": {
    db: {
      connectionString: "mongodb://localhost:27017/quiz"
    },
    secret: "hgjgghgfhgjgfrtyrweryuiyyiooiujlklnbgggfsaaddv",
    morganLogsType: "tiny",
    httpPort: 3000,
  },

  // production config and keys
  "production": {
    db: {
      connectionString: "mongodb://localhost:27017/quiz"
    },
    secret: "hgjgghgfhgjgfrtyrwererttyuiyujlklnbgggfdaaddv",
    morganLogsType: "combined",
    httpPort: 3000,
  },
};
