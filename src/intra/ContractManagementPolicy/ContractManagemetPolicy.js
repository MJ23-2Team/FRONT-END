import request from "../../component/common/axios";

export const save = async (data) => {
    return await request.post( 'contractmanagementpolicy', data );
};

export const getAll = async () => {
    return await request.get( 'contractmanagementpolicy/getAll' );
};