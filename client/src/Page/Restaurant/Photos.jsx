import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ImageViewer from "react-simple-image-viewer";

// components
import PhotoCollection from "../../Components/restaurant/PhotosCollection";
// redux actions
import { getImage } from "../../Redux/Reducer/Image/Image.action";

const Photos = () => {
  const [photos, setPhotos] = useState([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [CurrentImg, setCurrentImg] = useState(0);

  const reduxState = useSelector(
    (globalStore) => globalStore.restaurant.selectedRestaurant.restaurant
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (reduxState) {
      dispatch(getImage(reduxState?.photos)).then((data) => {
        const images = [];
        data.payload.image.images.map(({ location }) => images.push(location));
        setPhotos(images);
      });
    }
  }, []);
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
