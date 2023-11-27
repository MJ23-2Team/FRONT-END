import request from "../../component/common/axios";

export const save = async (data) => {
    return await request.post( 'AdviceNote', data );
};

export const pass = async (data) => {
    return await request.post( 'AdviceNote/pass', JSON.stringify( data ), {
        headers: {
            'Content-Type': 'application/json'
        }
    } );
};
export const getById = async () => {
    return await request.get( 'AdviceNote/getById' );
}