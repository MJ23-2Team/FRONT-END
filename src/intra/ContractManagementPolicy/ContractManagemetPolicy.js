import request from "../../component/common/axios";

export const save = async (data) => {
    return await request.post( 'contractmanagementpolicy', data );
};

export const pass = async ( data ) => {
    return await request.post( 'contractmanagementpolicy', JSON.stringify(data), {
        headers: {
            'Content-Type': 'application/json'
        }
    });
};
export const getAll = async () => {
    return await request.get( 'contractmanagementpolicy/getAll' );
};