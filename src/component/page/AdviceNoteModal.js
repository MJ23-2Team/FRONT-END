import CreateAdviceNote from "../../user/employee/AdviceNote/CreateAdviceNote";
import GetAdviceNote from "../../user/employee/AdviceNote/GetAdviceNote";


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