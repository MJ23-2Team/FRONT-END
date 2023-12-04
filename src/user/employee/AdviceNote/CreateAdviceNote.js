import { useState } from "react";
import { save } from "./AdviceNote";

const CreateAdviceNote = () => {
    const [ data, setData ] = useState( {} );
    const onHandleChangeData = (e) => {
        setData( prevData => ( { ...prevData, [e.target.name]: e.target.value }));
    };
    const onSubmitHandle = () => {
        if (data.content && data.contractid && data.customerid ) {
            save(data).then((res) =>
                alert(res.data.message));
        }else{
            alert("값을 입력해주세요");
        }
    }
};export default CreateAdviceNote;