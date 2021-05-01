import styled from "styled-components";

export const FlexCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
export const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
`

export const FlexColumnCenter = styled(FlexCenter)`
    flex-direction: column;
`

export const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
`

export const FlexRowCenter = styled(FlexCenter)`
    flex-direction: row;
`

export const FlexRowCenterSpaced = styled(FlexRowCenter)`
    
`

