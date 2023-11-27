import request from "../../component/common/axios";

export const save = async (data) => {
    return await request.post( 'Reward', data );
};

export const pass = async (data) => {
    return await request.post( 'Reward/pass', JSON.stringify(data), {
        headers: {
            'Content-Type': 'application/json'
        }
    } );
};
export const getAll = async () => {
    return await request.get( 'Reward/getAll' );
};
export const getByCustomerId = async ( customerId ) => {
    return await request.get( 'Reward/getByCustomerId', customerId );
};
export const approve = async () => {
    return await request.get( 'Reward/approve', true );
};
export const deny = async () => {
    return await request.get( 'Reward/approve', false );
}