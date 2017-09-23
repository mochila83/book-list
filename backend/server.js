import express from 'express';
import mongodb from 'mongodb';

const app = express();
const dbUrl = 'mongodb://localhost/crudwithredux';

mongodb.MongoClient.connect(dbUrl, function(err, db){
    
    app.get('/api/books', (req, res) => {
        db.collection('books').find({}).toArray((err, books) => {
            res.json({ books });
        });
    });
    
    app.listen(8080, () => console.log('Server is running on localhost:8080'));

});


