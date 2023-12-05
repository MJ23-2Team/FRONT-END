import request from "../../../component/common/axios";
 
export const save = async (data) => {
    return await request.post( 'advicenote', data );
};

export const getById = async ( customerid ) => {
    return await request.get( 'advicenote/getByCustomerId?id=' +  customerid );
};