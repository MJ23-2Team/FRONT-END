import { useState, useEffect, useMemo } from 'react';
import { getAll } from "./Payment";

const GetAllPayment = () => {
    const [ payments, setPayments ] = useState( [] );

    useEffect( () => {
        getAll().then( (res) => { setPayments( res.data ); } );
    }, [] );

    const headers = [
        {
            text: "고객 이름",
            value: "customer_name"
        },
        {
            text: "가입 상품",
            value: "contract_insurance"
        },
        {
            text: "납부 금액",
            value: "amount"
        },
        {
            text: "납부 기간",
            value: "duration"
        },
        {
            text: "만료 날짜",
            value: "expire_date"
        },
        {
            text: "납부 여부",
            value: "result"
        }
    ];

    const tableData = useMemo( () => payments, [payments] );
    const headerKey = headers.map( (header) => header.value );
    return (
        <table>
          <thead>
            <tr>
            {
                headers.map((header) => 
                <th key={header.text}>
                    {header.text}
                </th> 
                )
            }
            </tr>
          </thead>
          <tbody>
            {
              tableData.map((item, index) => (
                <tr key={index}>
                  { 
                    headerKey.map((key) => 
                      <td key={key + index}>
                        {item[key]}
                      </td>
                    )
                  }
                </tr>
              ))
            }
          </tbody>
        </table>
    );
};
export default GetAllPayment;