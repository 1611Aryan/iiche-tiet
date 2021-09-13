const Picture: React.FC<{
  images: { imgSrc: string; type: string }[]
  loading?: "eager" | "lazy"
  decoding?: "async" | "auto"
}> = ({ images, loading = "eager", decoding = "auto" }) => {
  return (
    <picture>
      {images.map((image, index) => (
        <source key={index} srcSet={image.imgSrc} type={image.type} />
      ))}
      <img
        loading={loading}
        decoding={decoding}
        src={images[images.length - 1].imgSrc}
        alt="event"
        draggable={false}
      />
    </picture>
  )
}

export default Picture
