const Picture: React.FC<
  React.MediaHTMLAttributes<HTMLVideoElement> &
    React.ImgHTMLAttributes<HTMLImageElement> & {
      images: { imgSrc: string; type: string }[]
      className?: string
      video?: boolean
    }
> = ({
  images,
  loading = "eager",
  decoding = "auto",
  video = false,
  autoPlay = false,
  loop = false,
  className,
  controls = true,
  muted = true,
}) => {
  return images[0] ? (
    video ? (
      <video
        width={"500px"}
        height={"281px"}
        className={className}
        autoPlay={autoPlay}
        loop={loop}
        controls={controls}
        muted={muted}
        playsInline={true}
        preload={"metadata"}
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
