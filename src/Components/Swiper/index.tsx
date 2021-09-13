import styled from "@emotion/styled"
import React, {
  Children,
  useState,
  useLayoutEffect,
  useRef,
  useEffect,
} from "react"

const Swipe: React.FC<{
  children: JSX.Element | JSX.Element[]
  loop?: boolean
  pagination?: boolean
}> = ({ children, loop = false, pagination = true }) => {
  const [length, setLength] = useState(1)
  const [position, setPosition] = useState(0)
  const [swipe, setSwipe] = useState({
    initial: { x: 0, time: 0 },
  })

  const sliderRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    setLength(Children.count(children))
  }, [children])

  const touchStart = (e: React.MouseEvent) => {
    setSwipe(swipe => ({
      initial: { x: e.clientX, time: new Date().getTime() },
    }))
  }

  const touchEnd = (e: React.MouseEvent) => {
    const dist = e.clientX - swipe.initial.x
    const timeDiff = new Date().getTime() - swipe.initial.time
    if (timeDiff > 80 && timeDiff < 500 && Math.abs(dist) > 75) {
      if (dist < 0)
        setPosition(position => (position === length - 1 ? 0 : position + 1))
      else setPosition(position => (position === 0 ? length - 1 : position - 1))
    }

    setSwipe(swipe => ({
      initial: {
        x: 0,
        time: 0,
      },
    }))
  }

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.style.setProperty("--position", position.toString())
    }
  }, [position])

  const paginate_clickHandler = (pos: number) => setPosition(pos)

  return (
    <StyledSwipe theme={{ length }}>
      <div
        ref={sliderRef}
        // onClick={clickHandler}
        className="swipeContainer"
        onMouseDown={touchStart}
        onMouseUp={touchEnd}
      >
        {children}
      </div>
      {pagination && (
        <ul className="pagination">
          {Array(length)
            .fill(null)
            .map((elem, index) => (
              <li
                key={index}
                className={position === index ? "active" : ""}
                onClick={() => paginate_clickHandler(index)}
              ></li>
            ))}
        </ul>
      )}
    </StyledSwipe>
  )
}

const StyledSwipe = styled.div<{
  theme: {
    length: number
  }
}>`
  --length: ${props => props.theme.length};

  width: 100vw;
  height: 100vh;
  overflow: hidden;

  position: relative;

  .swipeContainer {
    --position: 0;
    width: calc(var(--length) * 100%);
    height: 100%;

    transform: translate3d(calc(var(--position) * -100% / var(--length)), 0, 0);

    display: flex;

    transition: transform ease-in-out 200ms;

    > div {
      width: 100%;
      height: 100%;
      overflow: hidden;
      color: white;

      user-select: none;
    }
  }
  .pagination {
    position: absolute;
    left: 50%;
    bottom: 1rem;

    transform: translate(-50%);

    display: flex;
    justify-content: center;
    align-items: center;

    list-style-type: none;
    li + li {
      margin-left: 0.5rem;
    }

    li {
      --size: 10px;
      background: #fff;
      cursor: pointer;
      width: var(--size);
      height: var(--size);
      border-radius: 50%;

      transition: background ease 300ms;
    }

    .active {
      background: var(--primaryColor);
    }
  }
`

export default Swipe
