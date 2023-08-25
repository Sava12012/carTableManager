import { Title, StyledImage, StyledImageList } from "./AboutCar.styled.jsx";
import { ImageListItem, CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";
import { searchUnsplash } from '../../API/unsplashAPI.js';
import CenteredTextField from '../../components/CenteredTextField/CenteredTextField.jsx';
import ImageModal from '../../components/Modal/ImageModal.jsx';

function AboutCar() {
    const [searchedText, setSearchedText] = useState("");
    const [dataSource, setDataSource] = useState([]);
    const [loading, setLoading] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    useEffect(() => {
        setLoading(true);
        searchUnsplash(searchedText).then((results) => {
            setLoading(false);
            setDataSource(results);
        });
    }, [searchedText]);

    return (
        <>
            <Title>Search</Title>
            <CenteredTextField onChange={(event) => {
                setSearchedText(event.target.value);
            }} />
            <div>
                {loading && <CircularProgress />}
            </div>

            <StyledImageList>
                {dataSource.map((item) => (
                    <ImageListItem key={item.id}>
                        <StyledImage
                            src={item.urls.small}
                            alt={item.alt_description}
                            loading="lazy"
                            onClick={() => setSelectedImage(item)}
                        />
                    </ImageListItem>
                ))}
            </StyledImageList>

            <ImageModal
                open={selectedImage !== null}
                onClose={() => setSelectedImage(null)}
                image={selectedImage}
            />
        </>
    );
}

export default AboutCar;
