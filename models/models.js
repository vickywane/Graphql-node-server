import mongoose from "mongoose";


const Test = mongoose.model('Test', {
    _id: String,
    status: String,
    number: String
})

const Reviews = mongoose.model('Reviews', {
    _id: String,
    date: String,
    name: String,
    comment: String
})

const Restaurants = mongoose.model('Restaurants', {
    _id: String,
    name: String,
    description: String,
    location: String,
    hours: String,
    meals: String,
})  

const Food = mongoose.model('Food', {
    _id: String,
    name: String,
    price: String,
    
})  

export {
    Test,
    Reviews,
    Restaurants, 
    Food
}  