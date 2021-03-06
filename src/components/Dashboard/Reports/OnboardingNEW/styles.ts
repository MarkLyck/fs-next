import styled from '@emotion/styled'

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
  width: 100%;
  max-width: 400px;
  padding: 24px 32px;
  @media (max-width: 850px) {
    margin-top: 16px;
    padding: 0;
    max-width: 600px;
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
    color: ${(props: any) => props.theme.colors.black};
    li {
      position: relative;
      padding: 8px 16px;
      &::before {
        position: absolute;
        top: 50%;
        left: 0;
        transform: translateY(-50%);
        content: '';
        background: ${(props: any) => props.theme.colors.lightGray};
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
    width: 100%;
  }
  @media (max-width: 480px) {
    width: 100%;
  }
`

export const IconBackground = styled.div`
  height: 256px;
  width: 240px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props: any) => props.theme.colors.lightGray};
  border-radius: 4px;
  border 1px solid ${(props: any) => props.theme.colors.border};
  @media (max-width: 850px) {
    width: 100%;
  }
`

export const LegendName = styled.span`
  font-weight: 500;
  color: ${(props: any) => props.theme.colors[props.color]};
`

export const ReportIcon = styled.span`
  margin: 16px 0 0 24px;

  svg {
    height: 100%;
  }
`
