import request from "../../component/common/axios";

export const save = async (data) => {
    return await request.post( 'educationStudent', data );
};

export const getAll = async () => {
    return await request.get( 'educationStudent/getAll')
};