import styled from "@emotion/styled"

const DesignedBy = () => {
  return (
    <StyledDiv>
      <span>
        Made with&nbsp;<span className="heart">♥️</span>&nbsp;By&nbsp;
        <a target="_blank" href="https://github.com/1611Aryan" rel="noreferrer">
          Aryan Gupta
        </a>
      </span>
    </StyledDiv>
  )
}

const StyledDiv = styled.div`
  width: 100%;
  padding: calc(var(--padding) / 3);
  text-align: center;
  background: #000;
  color: lightgray;

  font-size: clamp(0.9rem, 1.2vw, 1.1rem);

  .heart {
    display: inline-block;
    color: red;
    animation: pulse 500ms ease-in-out infinite alternate;
  }

  @keyframes pulse {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(1.1);
    }
  }
`

export default DesignedBy
