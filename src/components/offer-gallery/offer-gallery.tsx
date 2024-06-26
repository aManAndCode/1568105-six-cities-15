import { DEFAULT_ZERO, MAX_IMAGES_OFFER } from '../../const';
type OfferGalleryProps = {
  images: string[];
}

export default function OfferGallery ({ images }: OfferGalleryProps): JSX.Element {
  return (
    <div className="offer__gallery">
      {images.slice(DEFAULT_ZERO, MAX_IMAGES_OFFER).map((image: string) => (
        <div className="offer__image-wrapper" key={image}>
          {image && <img className="offer__image" src={image} alt="Photo studio" />}
        </div>
      ))}
    </div>
  );
}
