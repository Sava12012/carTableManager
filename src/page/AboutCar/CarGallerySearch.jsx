
import React, { useEffect, useState } from "react";
import { Title, StyledImage, StyledImageList, StyledImageListItem } from "./CarGallerySearch.styled.js";
import { searchUnsplash } from '../../API/unsplashAPI.js';

import ImageModal from '../../components/Modal/ImageModal.jsx';
import Loader from '../../components/Loader/Loader.jsx'
import SearchIcon from "../../components/SearchIcon/SearchIcon.jsx";
import {SearchInput} from "../../components/CarTable/CarTable.styled.jsx";


function CarGallerySearch() {
    const [searchedText, setSearchedText] = useState("");
    const [dataSource, setDataSource] = useState([]);
    const [loading, setLoading] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setLoading(true);
            searchUnsplash(searchedText).then((results) => {
                setLoading(false);
                setDataSource(results);
            });
        }, 1000);

        return () => clearTimeout(timeoutId);
    }, [searchedText]);

    return (
        <>
            <div style={{display: "flex", justifyContent: "center",
                alignItems: "center", gap: "20px"}}>
                <Title>Search</Title>
                <SearchIcon />
            </div>
    <div style={{display: "flex", justifyContent: "center",
            alignItems: "center", marginTop: "30px"}}>
        <SearchInput  type="text" placeholder="Search" onChange={(event) => {
            setSearchedText(event.target.value);
        }} />
    </div>


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

export default CarGallerySearch;
