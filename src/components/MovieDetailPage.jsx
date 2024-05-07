import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

const DetailWrapper = styled.div``;
const PosterWrapper = styled.div``;
const PosterImg = styled.div``;
const OverviewWrapper = styled.div``;
const OverviewTitle = styled.h2``;
const AverageSpan = styled.span``;
const DateSpan = styled.span``;
const OverviewSpan = styled.span``;

function Detail() {
  let mvId2 = useLocation();
  console.log(mvId2);
  return (
    <>
      <DetailWrapper>
        <PosterWrapper>
          <PosterImg></PosterImg>
        </PosterWrapper>
        <OverviewWrapper>
          <OverviewTitle></OverviewTitle>
          <AverageSpan></AverageSpan>
          <DateSpan></DateSpan>
          <OverviewSpan></OverviewSpan>
        </OverviewWrapper>
      </DetailWrapper>
    </>
  );
}

export default Detail;
