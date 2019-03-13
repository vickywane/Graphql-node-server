import { gql } from 'apollo-server';

const TYPEDEFS = gql`
  
        type Test {
            _id:  String
            status : String
            number  : String 
        },  

        type Category {
            name: String ,
            description : String ,
        }

        type Reviews  {
            _id: String,
            date: String ,
            name: String ,
            comment: String , 
            # categories : [ Category ]
        }
         
        type Restaurants  {
            _id: String ,
            name: String ,
            description: String ,
            location: String, 
            hours: String, 
            meals: String, 
        }
 
        type Food  {
            _id: String ,
            name: String ,
            price: String ,
            image: String, 
            reviews : [ Reviews ]
        }

        type Query { 
            test:  [Test]  ,
            reviews:  [Reviews] ,   
            getReview (id :String) : Reviews
            restaurants: [Restaurants]
            restaurant (id : String) : Restaurants
            food : [ Food ]
        }     

        type Mutation { 
            addtest( 
                _id:  String
                status : String!
                number  : String 
            ): Test!  , 

            newReview(  
                _id: String,
                date: String ,
                name: String ,
                comment: String ,
            ): Reviews   , 
            
            addRestaurant(  
                _id: String ,
                name: String ,
                description: String ,
                location: String, 
                hours: String, 
                meals: String, 
            ): Restaurants   , 
              
            addFood(  
                _id: String ,
                name: String ,
                price: String ,
                
            ): Food   ,  
        }
`;

export default TYPEDEFS;

