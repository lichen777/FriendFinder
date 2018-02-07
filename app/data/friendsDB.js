const { Client } = require('pg')
var friends = require('../data/friends')

const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: true
})

var database = {
  sync = function () {
    client.connect()
    var query = client.query('drop table if exists friends')
    client.query('create table friends(id serial, name varchar(50), photo varchar(50))', (err, res) => {
        console.log('Created table friends')
        console.log('Filling it with people')
    })
    friends.map(function (friends) {
        return client.query(new pg.Query("insert into friends(name, photo) values('" + friends.name + "', '" + friends.age + "')"))
    })
        .pop()
        .on('end', function () {
            console.log('Inserted' + friends.length + 'people')
            client.end()
        })
  }
}

module.exports = database
