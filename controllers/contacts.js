const { response } = require('express');
const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;

// Getting all the conctact fro the contact.json file
const getAllContact = async(req, res, next) => {
    const contacts = await mongodb.getDb().db('Guero').collection('Cobian').find();
    contacts.toArray().then((list) => {res.setHeader('Content-Type','application/json');
res.status(200).json(list)
});
}

const getSingle = async (req, res, next) => {
    const userId = new ObjectId(req.params.id);
    const result = await mongodb.getDb().db('Guero').collection('Cobian').find({ _id: userId });
    result.toArray().then((lists) => {res.setHeader('Content-Type', 'application/json');
      res.status(200).json(lists[0]);
    });
  };
module.exports={getAllContact, getSingle}