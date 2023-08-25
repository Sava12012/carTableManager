import { StyledModal } from './ImageModal.styled.js'; // Import the StyledModal component
import CloseIcon from '@mui/icons-material/Close';

function ImageModal({ open, onClose, image }) {
    return (
        <StyledModal open={open} onClose={onClose}>
            <div className="modal-content">
                <CloseIcon className="close-button" onClick={onClose} />
                <img className="modal-image" src={image?.urls.regular} alt={image?.alt_description} />
            </div>
        </StyledModal>
    );
}

export default ImageModal;
