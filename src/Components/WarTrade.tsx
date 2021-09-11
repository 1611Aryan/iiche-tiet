import styled from "@emotion/styled"

const WarTrade = () => {
  return (
    <StyledWarTrade>
      <h1>WarTrade</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit voluptates
        beatae corrupti numquam fugit laborum recusandae praesentium ipsum, enim
        aut aliquid distinctio magni doloribus alias? Doloremque blanditiis
        placeat consequuntur itaque! Nihil nam ratione excepturi non hic eius
        aut consectetur magni illo officiis, libero incidunt natus, dolor esse.
        At consequuntur eius commodi qui expedita temporibus non, totam
        distinctio eveniet. Reprehenderit, dolor?
      </p>
    </StyledWarTrade>
  )
}

const StyledWarTrade = styled.section`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h1 {
    font-family: var(--cursive);
    font-size: 4rem;
  }
  p {
    margin-top: 2rem;
    width: 60%;
    font-size: 1.3rem;
    text-align: center;
  }
`

export default WarTrade
