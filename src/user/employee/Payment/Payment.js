import request from "../../component/common/axios";

export const save = async (data) => {
    return await request.post( 'payment/add' );
};

export const getAll = async () => {
    return await request.get( 'payment/getAll' );
}

export const getById = async (id) => {
    return await request.get( 'payment/getById', id );
}

export const checkValidate = async () => {
    return await request.get( "payment/checkValidate" );
}