import { ADD_TO_CART,ADD_TO_WISHLIST,REMOVE_FROM_CART, REMOVE_FROM_WISHLIST } from "../ActionTypes";

const reducers = (state: any[] = [], action: any) => {
    switch(action.type){
        case ADD_TO_CART:
            return [...state, action.payload];
        
        case REMOVE_FROM_CART:
            const deletedArray1=state.filter((item:any, index:any ) =>{
                return index !== action.payload;
            })
            return deletedArray1;

        default:
            return state;
        }

};

export default reducers;