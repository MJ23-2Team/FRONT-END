import request from "../../component/common/axios";

export const save = async (data) => {
    return await request.post( 'educationStudent', data );
};

export const pass = async (data) => {
    return await request.post( 'educationStudent', JSON.stringify( data), {
        headers: {
            'Content-Type': 'application/json'
        }
    } );
};

export const getAll = async () => {
    return await request.get( 'educationstudent/getAll')
};