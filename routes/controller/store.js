const path = require("path");
const fs = require("fs");

//  Get the best sellers 

exports.bestSeller = async (req, res, next) => {
    
}
//  gets all items
exports.getItems = (req, res, next) => {
    Item.find()
      .then(products => {
        console.log(products);
        res.status(200).send(products);
      })
      .catch(err => console.log(err));
  };
  
  // gets a single item
  
  exports.getItem = (req, res, next) => {
    const id = req.params.id;
    Item.findById(id)
      .then(item => {
        console.log(item);
        res.status(200).send(item);
      })
      .catch(err => console.log(err));
  };