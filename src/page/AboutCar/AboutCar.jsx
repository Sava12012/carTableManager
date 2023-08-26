
import { useEffect, useState } from "react";
import { Title, StyledImage, StyledImageList, StyledImageListItem } from "./AboutCar.styled.jsx";
import { searchUnsplash } from '../../API/unsplashAPI.js';
import CenteredTextField from '../../components/CenteredTextField/CenteredTextField.jsx';
import ImageModal from '../../components/Modal/ImageModal.jsx';
import Loader from '../../components/Loader/Loader.jsx'

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

            <StyledImageList>
                {loading ? (
                    <Loader/>
                ) : (
                    dataSource.map((item) => (
                        <StyledImageListItem key={item.id}>
                            <StyledImage
                                src={item.urls.small}
                                alt={item.image}
                                loading="lazy"
                                onClick={() => setSelectedImage(item)}


                            />
                        </StyledImageListItem>
                    ))
                )}
            </StyledImageList>


            <ImageModal
                open={selectedImage !== null}
                onClose={() => setSelectedImage(null)}
                image={selectedImage}
                dataSource={dataSource}
            />
        </>
    );
}

export default AboutCar;
