import React, { useState } from "react";
import ImageViewer from "react-simple-image-viewer";

// components
import PhotoCollection from "../../Components/restaurant/PhotosCollection";

const Photos = () => {
  const [photos, setPhotos] = useState([
    "https://b.zmtcdn.com/data/pictures/chains/4/50714/caf2322a5ccd61e11b2c8ae43ed56727.jpg",
    "https://b.zmtcdn.com/data/pictures/chains/4/50714/ac920675f44becc0d846698796c421bd.jpg",
    "https://b.zmtcdn.com/data/pictures/chains/4/50714/8f4c852f9f948f91feb9dfbdb42b3388.jpg",
  ]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [CurrentImg, setCurrentImg] = useState(0);
  const closeViewer = () => setIsMenuOpen(false);

  const openViewer = () => setIsMenuOpen(true);

  return (
    <>
      {isMenuOpen && (
        <ImageViewer
          src={photos}
          currentIndex={CurrentImg}
          disableScroll={false}
          onClose={closeViewer}
        />
      )}

      <div className="flex flex-wrap gap-2">
        {photos.map((photo) => (
          <PhotoCollection image={photo} openViewer={openViewer} />
        ))}
      </div>
    </>
  );
};

export default Photos;
