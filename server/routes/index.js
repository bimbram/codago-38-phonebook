const express = require('express');
const router = express.Router();
const Phonebook = require('../models/phonebook')

/* GET home page. */
//READ
router.get('/', function(req, res) {
  Phonebook.find({}, function(err, phonebookData) {
    if(err) {
      res.json({'ERROR': err});
    } else {
      res.json(phonebookData);
    }
  });
});

//ADD
router.post('/', function(req, res) {
  let phonebook = new Phonebook({
    name: req.body.name,
    phone: req.body.phone
  });

  phonebook.save(function(err, phonebookData) {
    if(err) {
      res.json({'ERROR': err})
    } else {
      res.json({
        id: phonebookData._id,
        name: phonebookData.name,
        phone: phonebookData.phone
      });
    }
  });
});


//EDIT
router.put('/:id', function(req, res) {
  Phonebook.findById(req.params.id, function(err, phonebookData) {
    if(err) {
      res.json({'ERROR': err});
    } else {
      phonebookData.name = req.body.name;
      phonebookData.phone = req.body.phone;
      phonebookData.save(function(err) {
        if(err) {
          res.json({'ERROR': err})
        } else {
          res.json({
            id: phonebookData._id,
            name: phonebookData.name,
            phone: phonebookData.phone
          });
        }
      });
    }
  });
});

//DELETE
router.delete('/:id', function(req, res) {
  Phonebook.findById(req.params.id, function(err, phonebookData) {
    if(err) {
      res.json({'ERROR': err});
    } else {
      phonebookData.remove(function(err) {
        if(err) {
          res.json({'ERROR': err});
        } else {
          res.json({
            id: phonebookData._id,
            name: phonebookData.name,
            phone: phonebookData.phone
          })
        }
      });
    }
  });
});

//BROWSE
router.post('/search', function(req, res) {
  let filterQuery = {}
  if(req.body.phone) {
    filterQuery['phone'] = {'$regex': req.body.phone, '$options': 'i'}
  }

  if(req.body.name) {
    filterQuery['name'] = {'$regex': req.body.name, '$options': 'i'}
  }
  console.log(filterQuery);
  Phonebook.find(filterQuery, function(err, phonebookData) {
    console.log(phonebookData);
    if(err) {
      res.json({'ERROR': err});
    } else {
      res.json(phonebookData)
    }
  })
})

module.exports = router;
