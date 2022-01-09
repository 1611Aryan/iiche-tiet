import styled from "@emotion/styled"
import gif from "Media/Form/success.gif"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

const Success = () => {
  const navigate = useNavigate()

  useEffect(() => {
    setTimeout(() => {
      navigate("/")
    }, 5000)
  })

  return (
    <StyledSuccess>
      <img src={gif} alt="success" />
    </StyledSuccess>
  )
}

const StyledSuccess = styled.main`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #e7f3ff;
  display: grid;
  place-items: center;
  z-index: 99;
  img {
    max-width: 80%;
    max-height: 80%;
    object-fit: contain;
  }
`
export default Success
