beforeEach('clear and add', function(done) {

  models.sequelize.query('SET FOREIGN_KEY_CHECKS = 0')
    .then(function(){
      models.sequelize.options.maxConcurrentQueries = 1;
      return models.sequelize.sync({ force: false });
    })
    .then(function(){
      return models.sequelize.query('SET FOREIGN_KEY_CHECKS = 1');
    })
    .then(function() {
	  let user = {
    	email: 'susan@example.com',
    	password: bcrypt.hashSync("fakepassword123", bcrypt.genSaltSync(10))
  	   }
      return models.User
        .create(user);
    })
    .then(function(data) {
      console.log('data.dataValues.id ==> ', data.dataValues.id);
      return data.dataValues.id;
    })
    .then(function(UserId) {
      return models.Context
        .bulkCreate([{
          name: 'Home',
          UserId
        }, {
          name: 'Work',
          UserId
        }, {
          name: 'Phone',
          UserId
        }, {
          name: 'Computer',
          UserId
        }])
    })
    .then(function(data) {
      console.log('data ==> ', data);
      return Promise.resolve(done());
    })
    .catch(function(error) {
      console.log(error);
      return Promise.reject(done());
    });
});
