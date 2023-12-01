import request from "../../../component/common/axios";

export const save = async (data) => {
    return await request.post( 'reward', data );
};
export const getAll = async () => {
    return await request.get( 'reward/getAll' );
};
export const getByContractId = async ( contractId ) => {
    return await request.get( 'reward/getByContractId', contractId );
};
export const approve = async () => {
    return await request.get( 'reward/approve', true );
};
export const deny = async () => {
    return await request.get( 'reward/approve', false );
}