import request from "../../../component/common/axios";

export const save = async (data) => {
    return await request.post( 'reward', data );
};
export const getAll = async () => {
    return await request.get( 'reward/getAll' );
};
export const getByCustomerId = async ( customerId ) => {
    return await request.get( 'reward/getByCustomerId?id='+customerId );
};
export const getContractByCustomerId = async ( customerId ) => {
    return await request.get( 'contract/getContractByCustomerId?customerId='+customerId );
}
export const approve = async () => {
    return await request.get( 'reward/approve', true );
};
export const deny = async () => {
    return await request.get( 'reward/approve', false );
}