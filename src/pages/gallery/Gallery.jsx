import Header from '../../components/Header';
import HeaderImage from '../../images/header_bg_3.jpg';
import './gallery.css';

// Move images to "public/images/" and use static paths
const images = Array.from({ length: 15 }, (_, i) => `/images/gallery${i + 1}.jpg`);

const Gallery = () => {
  return (
    <>
      <Header title="Our Gallery" image={HeaderImage}>
        Browse through the photos and get inspired to reach your own fitness goals.
      </Header>
      <section className="gallery">
        <div className="container gallery__container">
          {images.map((image, index) => (
            <article key={index}>
              <img src={image} alt={`Gallery Image ${index + 1}`} />
            </article>
          ))}
        </div>
      </section>
    </>
  );
};

// ✅ Make sure you export the component
export default Gallery;
