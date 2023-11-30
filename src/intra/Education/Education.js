import request from "../../component/common/axios";

export const save = async (data) => {
    return await request.post( 'education/add', data );
};

export const getByEducationId = async (id) => {
    return await request.get( 'education/getById', id );
}
 
export const getAll = async () => {
    return await request.get( 'education/getAll' );
};