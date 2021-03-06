import styled from "@emotion/styled"

const FormLoader = () => {
  return (
    <StyledFormLoader>
      <div className="loader">
        <div></div>
        <div></div>
      </div>
    </StyledFormLoader>
  )
}

const StyledFormLoader = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #000c;
  display: grid;
  place-items: center;
  z-index: 10;
  .loader {
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;

    transform: scale(2);

    div {
      position: absolute;
      border: 4px solid #fff;
      opacity: 1;
      border-radius: 50%;
      animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
    }
    div:nth-of-type(2) {
      animation-delay: -0.5s;
    }
    @keyframes lds-ripple {
      0% {
        top: 36px;
        left: 36px;
        width: 0;
        height: 0;
        opacity: 1;
      }
      100% {
        top: 0px;
        left: 0px;
        width: 72px;
        height: 72px;
        opacity: 0;
      }
    }
  }
`

export default FormLoader
