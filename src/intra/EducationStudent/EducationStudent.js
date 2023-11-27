import request from "../../component/common/axios";

export const save = async (data) => {
    return await request.post( 'EducationStudent', data );
};

export const pass = async (data) => {
    return await request.post( 'EducationStudent', JSON.stringify( data), {
        headers: {
            'Content-Type': 'application/json'
        }
    } );
};

export const getAll = async () => {
    return await request.get( 'EducationStudent/getAll')
};