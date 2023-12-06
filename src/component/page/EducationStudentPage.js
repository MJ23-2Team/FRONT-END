import EstablishEducationStudent from "../../intra/educationStudent/EstablishEducationStudent"; 
import GetAllEducationStudent from "../../intra/educationStudent/GetAllEducationStudent";
import GetEducationStudentByEducationId from "../../intra/educationStudent/GetEducationStudentByEducationId";
import { useState } from "react";
import Modal from "../common/Modal";
import { useLocation } from "react-router-dom";

const EducationStudentPage = () => {
    const [ modalOpen, setModalOpen ] = useState( false );

    const location = useLocation();
    const education = location.state.education;

    return (
        <div>
            <GetEducationStudentByEducationId />
            { /* 해당 교육을 듣는 학생만 가져올 수 있도록 이 페이지를 가져올 때 값을 전달할 수 있는지 확인하기 */ }
            <input type="button" value="학생 추가" className="blueBtn" onClick={ () => setModalOpen( !modalOpen )} />
            { modalOpen && (
                <Modal closeModal={ () => setModalOpen( !modalOpen ) }>
                    <EstablishEducationStudent />
                </Modal>   
            )}
        </div>
    );
};

export default EducationStudentPage;