import { useState, useEffect, useMemo } from "react";
import { getAll } from "./Reward";
import Modal from "../../../component/common/Modal";
import AboutEmployeeRewardPage from "../../../component/page/AboutEmployeeRewardPage";

const GetAllRewards = () => {
    const [ rewards, setRewards ] = useState( [] );
    const [ select, setSelect ] = useState( [] );
    const [ modalOpen, setModalOpen ] = useState( false );

    useEffect( () => {
        getAll().then( (res) => { setRewards( res.data )});
    }, [] );

    const clickEvent = ( item ) => {
      setModalOpen( !modalOpen );
      setSelect( item.rewardID );
    }

    const headers = [
        {
            text: "신청자",
            value: "customerName"
        },
        {
            text: "신청 날짜",
            value: "appliDate",
        },
        {
            text: "상태",
            value: "appliResult",
        },
        {
            text: "내용",
            value: "content",
        }
    ];
    const tableData = useMemo( () => rewards, [rewards] );
    const headerKey = headers.map( (header) => header.value );
    console.log( rewards );
    return (
      <>
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
                      <td key={key + index} onClick={ () => clickEvent( item ) } >
                        {item[key]}
                      </td>
                    )
                  }
                </tr>
              ))
            }
          </tbody>
        </table>
        { modalOpen && (
          <Modal closeModal={ () => setModalOpen( !modalOpen ) }>
            <AboutEmployeeRewardPage id={select} />
          </Modal>
        )}
      </>
    );
};
export default GetAllRewards;