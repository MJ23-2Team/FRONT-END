import request from "../../../component/common/axios";

export const save = async (data) => {
    return await request.post( 'reward', data );
};
export const getAll = async () => {
    return await request.get( 'reward/getAll' );
};
export const getByCustomerId = async ( id ) => {
    return await request.get( 'reward/getByCustomerId?id='+id );
};
export const getContractByCustomerId = async ( customerId ) => {
    return await request.get( 'contract/getContractByCustomerId', customerId );
}
export const approve = async (id) => {
    return await request.get( 'reward/approve?id='+id+'&flag='+true );
};
export const deny = async (id) => {
    return await request.get( 'reward/approve?id='+id+'&flag='+false );
}
export const getById = async (id) => {
    return await request.get( 'reward/getByRewardId?id='+id );
}