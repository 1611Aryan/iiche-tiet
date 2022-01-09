import styled from "@emotion/styled"

const InputBaseStyle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  gap: clamp(1rem, 2vw, 1.5rem);

  .option {
    label {
      margin-left: 0.5em;
    }
  }

  label {
    font-size: clamp(1.15rem, 2vw, 1.55rem);
    color: #fff;
    cursor: pointer;
  }

  input,
  textarea {
    padding: calc(var(--padding) / 4) calc(var(--padding) / 4);
    font-size: clamp(1rem, 2vw, 1.25rem);

    border-radius: 7px;
    background: #fff;
  }
  textarea {
    min-height: 25vh;
    resize: none;
  }
  @media only screen and (max-width: 500px) {
    input,
    textarea {
      border-radius: 2px;
    }
  }
`

export default InputBaseStyle
