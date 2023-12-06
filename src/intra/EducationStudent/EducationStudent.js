import request from "../../component/common/axios";

export const save = async (data) => {
    console.log( data );
    return await request.post( 'educationStudent/add', data );
};

export const getAll = async () => {
    return await request.get( 'educationStudent/getAll');
};

export const getById = async (id) => {
    return await request.get( 'educationStudent/getById?id='+id );
}

export const getEducationStudentByEducationID = async (id) => {
    return await request.get( 'educationStudent/getByEducationId?id=' + id );
}