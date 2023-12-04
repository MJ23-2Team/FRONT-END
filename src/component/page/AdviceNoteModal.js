import CreateAdviceNote from "../../user/employee/adviceNote/CreateAdviceNote";
import GetAdviceNote from "../../user/employee/adviceNote/GetAdviceNote";


const AdviceNoteModal = ( setAdviceModalOpen ) => {
    const closeModal = () => {
        setAdviceModalOpen( false );
    }
    
      return (
        <div>
            <CreateAdviceNote />
            <GetAdviceNote />
        </div>
      );
};

export default AdviceNoteModal;