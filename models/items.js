const { Schema, model} = require("mongoose");

const items = new Schema({
        bestseller : {
            type: String
        },
        itemName : {
            type: String, 
            required: true,
        }, 
        image : {
            type: String,
            required: true,
        },
        price : {
            type: String, 
            required: true,
        }
    }, 
    {
        timestamps : true,
    }
)
const Items = model("Items", items);
module.exports = Items;