const RESOLVERS = {
    Query: {

        test: async (parent, args, { Test }) => {
            const tests = await Test.find()

            return tests.map(test => {
                test._id = test._id.toString()

                return test
            })
        },

        reviews: async (parent, args, { Reviews }) => {
            const review = await Reviews.find()

            return review.map(review => {
                review._id = review._id.toString()

                return review 
            })
        },  

        restaurants: async (parent, args, { Restaurants }) => {
            const restaurant = await Restaurants.find()

            return restaurant.map(restaurant => {
                restaurant._id = restaurant._id.toString() 
                restaurant.meals = restaurant.meals.toString()
                return restaurant 
            })
        },

        restaurant: async (parent, args, { Restaurants }) => {
            const restaurant = await Restaurants.findById(args.id)
            return restaurant
        },

        getReview: async (parent, args, { Reviews }) => {
            const reviews = await Reviews.findById(args.id)
            return reviews
        }, 

        food: async (parent, args, { Food }) => {
            const food = await Food.find()

            return food.map(food  => {
                food._id = food._id.toString() 
                food.price = food.price.toString()
                return food 
            })
        },
    },


    Mutation: {
        addtest: async (parent, args, { Test }) => {
            const test = await new Test(args).save()
            test._id = test._id.toString()

            return test

        },
        newReview: async (parent, args, { Reviews }) => {
            const review = await new Reviews(args).save()
            review._id = review._id.toString()
            return review
        },
        addRestaurant: async (parent, args, { Restaurants }) => {
            const restaurant = await new Restaurants(args).save()
            restaurant._id = restaurant._id.toString()
            restaurant.hours = restaurant.hours.toString()
            return review
        },   

        addFood: async (parent, args, { Food }) => {
            const food = await new Food(args).save()
            food._id = food._id.toString()
            food.price = food.price.toString()
            return food
        },  
    }

}

export default RESOLVERS;