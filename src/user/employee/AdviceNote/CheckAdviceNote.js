import { getById } from "./AdviceNote";

export const checkAdviceNote = () => {
    let adviceNote = [];
    const customerid = parseInt( localStorage.getItem( "id" ) );
    getById(customerid).then( (res) => adviceNote = res.data );
    console.log( adviceNote );
    
};