import React, { useCallback, useEffect, useState } from 'react';
import { StyledModal } from './ImageModal.styled.js';
import CloseIcon from '@mui/icons-material/Close';

function ImageModal({ open, onClose, dataSource }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleKeyDown = useCallback((event) => {
        if (event.key === 'ArrowRight') {
            setCurrentIndex(prevIndex => (prevIndex + 1) % dataSource.length);
        } else if (event.key === 'ArrowLeft') {
            setCurrentIndex(prevIndex => (prevIndex - 1 + dataSource.length) % dataSource.length);
        }
    }, [currentIndex, dataSource.length]);

    useEffect(() => {
        if (open) {
            window.addEventListener('keydown', handleKeyDown);
        } else {
            window.removeEventListener('keydown', handleKeyDown);
        }

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [open, handleKeyDown]);

    return (
        <StyledModal open={open} onClose={onClose}>
            <div className="modal-content">
                <CloseIcon className="close-button" onClick={onClose} />
                <img className="modal-image" src={dataSource[currentIndex]?.urls.regular} alt={dataSource[currentIndex]?.alt} />
            </div>
        </StyledModal>
    );
}

export default ImageModal;
