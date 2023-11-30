import EstablishEducation from "../../intra/Education/EstablishEducation";
import GetAllEducation from "../../intra/Education/GetAllEducation";
import { useState } from "react";
import Modal from "../common/Modal";

const EducationPage = () => {
    // About Modal
    const [ modalOpen, setModalOpen ] = useState( false );

    return ( 
        <div>
            <GetAllEducation />
            <input type="button" value="교육 생성" className="blueBtn" onClick={ () => setModalOpen(!modalOpen)}/>
            { modalOpen && (
                <Modal closeModal={ () => setModalOpen( !modalOpen ) }>
                    <EstablishEducation />
                </Modal>
            )}
        </div> 
    );
};
export default EducationPage;