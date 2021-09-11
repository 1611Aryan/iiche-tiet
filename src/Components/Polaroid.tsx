const Polaroid: React.FC<{ images: { imgSrc: string; type: string }[] }> = ({
  images,
}) => {
  return (
    <div>
      <picture>
        {images.map((image, index) => (
          <source srcSet={image.imgSrc} type={image.type} />
        ))}
        <img src={images[images.length - 1].imgSrc} alt="event" />
      </picture>
    </div>
  )
}

export default Polaroid
