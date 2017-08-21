const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to DB');
    }
    console.log('Connected to MongoDB!');

    /* first step, insert Todos data
    db.collection('Todos').insertOne({
        text: 'something new',
        completed: false
    }, (err, result) => {
        if(err) {
            return console.log('unable to insert data', err);
        }

        console.log(JSON.stringify(result.ops, undefined, 2));
    });
    */

    // then insert Users data
    db.collection('Users').insertOne({
        name: 'GRP',
        age: 29,
        location: 'Bogor',
        university: 'UI'
    }, (err, result) => {
        if(err) {
            return console.log('unable to insert data', err);
        }

        console.log(JSON.stringify(result.ops, undefined, 2));
    });


    db.close();
});