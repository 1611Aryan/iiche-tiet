const Picture: React.FC<{
  images: { imgSrc: string; type: string }[]
  className?: string
  loading?: "eager" | "lazy"
  decoding?: "async" | "auto"
  video?: boolean
  autoplay?: boolean
  loop?: boolean
}> = ({
  images,
  loading = "eager",
  decoding = "auto",
  video = false,
  autoplay = false,
  loop = false,
  className,
}) => {
  return images[0] ? (
    video ? (
      <video
        className={className}
        autoPlay={autoplay}
        loop={loop}
        controls={false}
      >
        <source src={images[0].imgSrc} type={images[0].type} />
      </video>
    ) : (
      <picture className={className}>
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
  ) : null
}

export default Picture
