import EstablishEducationStudent from "../../intra/EducationStudent/EstablishEducationStudent";
import GetAllEducationStudent from "../../intra/EducationStudent/GetAllEducationStudent";
import { useState } from "react";
import Modal from "../common/Modal";

const EducationStudentPage = () => {
    const [ modalOpen, setModalOpen ] = useState( false );
    return (
        <div>
            <GetAllEducationStudent />
            { /* 해당 교육을 듣는 학생만 가져올 수 있도록 이 페이지를 가져올 때 값을 전달할 수 있는지 확인하기 */}
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