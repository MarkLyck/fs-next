import styled from 'react-emotion'

export const AIReportsWrapper = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 850px) {
    flex-direction: column;
  }
`

export const AIReportsTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  padding: 24px 32px;
  @media (max-width: 850px) {
    margin-top: 16px;
    padding: 0;
  }
  @media (max-width: 480px) {
    width: 100%;
  }
`

export const AIScoreWrapper = styled.div`
  display: flex;
  @media (max-width: 1020px) {
    flex-direction: column;
  }
  @media (max-width: 480px) {
    width: 100%;
  }
`

export const AIScoreTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 380px;
  ul {
    padding: 16px 0;
    font-size: 0.9rem;
    color: ${props => props.theme.colors.black};
    li {
      position: relative;
      padding: 8px 16px;
      &::before {
        position: absolute;
        top: 50%;
        left: 0;
        transform: translateY(-50%);
        content: '';
        background: ${props => props.theme.colors.lightGray};
        height: 8px;
        width: 8px;
        border-radius: 50%;
      }
    }
  }
  @media (max-width: 1020px) {
    margin-top: 16px;
    width: 600px;
  }
  @media (max-width: 850px) {
    margin-top: 16px;
    width: 400px;
  }
  @media (max-width: 480px) {
    width: 100%;
  }
`

export const IconBackground = styled.div`
  height: 240px;
  width: 240px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${props => props.theme.colors.polar};
  border-radius: 4px;
  @media (max-width: 850px) {
    width: 100%;
  }
`

export const Bold = styled.span`
  font-weight: 500;
`
