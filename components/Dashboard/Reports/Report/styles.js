import styled from 'react-emotion'
import Box from 'ui-components/Box'

export const BesideSection = styled(Box)`
  padding: 12px;
  margin-bottom: 16px;
  justify-content: space-between;
`

export const BoldValue = styled.h2`
  font-weight: 500;
  min-width: 100px;
  color: ${props => props.theme.colors.black};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

export const Value = styled.h2`
  font-weight: 500;
  margin-left: 8px;
  color: ${props => props.theme.colors[props.valueColor]};
`

export const FadedValue = styled.h2`
  font-weight: 400;
  color: ${props => props.theme.colors.black};
  opacity: 0.5;
  margin-left: 16px;
`

export const ScoreSection = styled(BesideSection)`
  &:hover {
    cursor: pointer;
  }
`

export const ExpandedScore = styled(ScoreSection)`
  flex-direction: column;
`

export const Beside = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
`

export const HelpText = styled.p`
  color: ${props => props.theme.colors.gray};
  margin-top: 16px;
  margin-bottom: 8px;
  font-size: 0.8rem;
  font-weight: 500;
`
