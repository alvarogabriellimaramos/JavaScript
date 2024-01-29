const mongose = require('mongoose');
mongose.Promise = global.Promise;
const ConfigDb = {
    useNewUrlParser: true,
};
const PASSWORD = 'YBDj2thgahx8h4zq'
mongose.connect(`mongodb+srv://alvarogabriel336:YBDj2thgahx8h4zq@teste.q0unlks.mongodb.net/`,ConfigDb).then(() => console.log('Conectado ao MongoDb'))
.catch(err => console.log(`Erro ao se conecta com o mongoDB ${err}`));

