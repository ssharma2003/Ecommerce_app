
import { ADD_TO_CART,ADD_TO_WISHLIST,REMOVE_FROM_CART, REMOVE_FROM_WISHLIST } from "../ActionTypes";

export const reducers2 = (state: any[] = [], action: any) => {
    switch(action.type){
        case ADD_TO_WISHLIST:
            return [...state, action.payload];

        case REMOVE_FROM_WISHLIST:
            const deletedArray2=state.filter((item:any, index:any ) =>{
                return index !== action.payload;
            })
        return deletedArray2;

        default:
            return state;
        }

};


            
        

