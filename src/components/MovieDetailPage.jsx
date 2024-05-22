import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { fetchCredits } from '../../api';

const DetailWrapper = styled.div`
  background-image: url(${(props) => props.bgimg});
  background-position: center;
  background-repeat: repeat-x;
  background-size: cover;
  height: 100vh;
  width: 100vw;
`;
const PosterWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const PosterMvDiv = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const PosterImg = styled.div`
  background-image: url(${(props) => props.bgimg});
  background-size: contain;
  background-repeat: no-repeat;
  align-self: center;
  height: 70%;
  width: 60%;
`;
const OverviewWrapper = styled.div`
  width: 60%;
`;

const OverviewDiv = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  gap: 30px;
  font-weight: bold;
`;

const MvOverview = styled.h3`
  font-size: 20px;
`;

const OverviewTitle = styled.h2`
  font-size: 35px;
`;
const AverageSpan = styled.span`
  font-size: 20px;
`;
const DateSpan = styled.span`
  font-size: 20px;
`;
const OverviewSpan = styled.span`
  font-size: 15px;
`;

function Detail() {
  const mvDetail = useLocation().state;
  const voteStar = Math.floor(Number(mvDetail.vote_average));
  const [credit, setCredit] = useState([]);

  //credit 불러오기 데이터 가져오기까지는 함 이 뒤에는 귀찮
  useEffect(() => {
    fetchCredits(mvDetail.id).then((json) => setCredit(json));
  }, []);

  console.log(credit);

  //별점 만들기
  let star = '🌟';
  console.log(mvDetail);

  for (var i = 0; i < voteStar - 1; i++) {
    star += '🌟';
  }
  return (
    <>
      <DetailWrapper
        key={mvDetail.id}
        bgimg={`https://image.tmdb.org/t/p/original${mvDetail.backdrop_path}`}
      >
        <PosterWrapper>
          <PosterMvDiv>
            <PosterImg
              bgimg={`https://image.tmdb.org/t/p/original${mvDetail.poster_path}`}
            ></PosterImg>
          </PosterMvDiv>
          <OverviewWrapper>
            <OverviewDiv>
              <OverviewTitle>{mvDetail.title}</OverviewTitle>
              <AverageSpan>평점 {star}</AverageSpan>
              <DateSpan>개봉일 {mvDetail.release_date}</DateSpan>
              <MvOverview>줄거리</MvOverview>
              <OverviewSpan>{mvDetail.overview}</OverviewSpan>
            </OverviewDiv>
          </OverviewWrapper>
        </PosterWrapper>
      </DetailWrapper>
    </>
  );
}

export default Detail;
