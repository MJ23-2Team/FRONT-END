import CreateAdviceNote from "../../user/employee/AdviceNote/CreateAdviceNote";
import GetAdviceNote from "../../user/employee/AdviceNote/GetAdviceNote";


const AdviceNoteModal = ( setAdviceModalOpen ) => {
    const closeModal = () => {
        setAdviceModalOpen( false );
    }
    
      return (
        <div>
            <p>모달창입니다.</p>
        </div>
      );
};

export default AdviceNoteModal;