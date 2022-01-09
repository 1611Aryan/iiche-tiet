import styled from "@emotion/styled"
import { Link } from "react-router-dom"

const Notification: React.FC<{
  notification: {
    message: string
    link: string
  }
}> = ({ notification }) => {
  return (
    <StyledNotifcation>
      <h1>{notification.message}</h1>
      <Link to={notification.link}>
        <button>Navigate</button>
      </Link>
    </StyledNotifcation>
  )
}

const StyledNotifcation = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  padding: clamp(0.5rem, 1.5vw, 1rem) var(--padding);
  background: var(--bg);
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fffd;
  z-index: 10;
  h1 {
    font-weight: 400;
    font-size: clamp(0.8rem, 1vw, 1.2rem);
  }
  button {
    padding: calc(var(--padding) / 5);
    border-radius: 4px;
    background: #c30d3b;
    color: #fff;
    font-weight: 400;
    font-size: clamp(0.7rem, 1vw, 1.2rem);
  }
`
export default Notification
