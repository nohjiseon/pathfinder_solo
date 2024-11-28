import { useState } from "react";
import { styled } from "styled-components";
import { DiaryData } from "../types/types";
import { RandomData } from "../types/types";
import SubWave from "../components/common/SubWave";
import RecommendCard from "../components/common/RecommendCard";
import RandomCard from "../components/RandomCard";
import Loading from "../components/common/Loading";
import AirPlane from "../assets/images/ic_air.png";
import Dice from "../assets/images/random-dice.png";
import BackCharacter from "../assets/images/character_02.png";

const Recommend = (): JSX.Element => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const recommendData = [
    {
      diaryId: 1,
      name: "홍길동",
      email: "test123@test.com",
      title: "빛가람 호수공원 나주에서 빠질 수 없는 여행지입니다!",
      content:
        '<img src="https://www.kric.go.kr/v2/UserFiles/Image/2021/07/20/pj210720_01.jpg" alt="빛가람"><p>전망대에서 내려다보이는 풍경이 너무 멋있습니다.사계절 어느 시간대에 와도 특유의 고즈넉하고, 평화로운 분위기를 제대로 만끽할 수 있는 곳이라 인상 깊어요.<br/>소중한 사람과 천천히 여유로운 시간을 보내고 싶다면 적극 추천합니다!</p>',
      area1: "전라남도",
      area2: "나주",
      recommendedCount: 0,
      scrapCount: 2,
      views: 1,
      createdAt: "2023-09-07T05:00:19.610172",
      modifiedAt: "2023-09-07T05:01:26.83374",
      recommend: false,
      scrap: false,
    },
    {
      diaryId: 2,
      name: "제주광",
      email: "test147@test.com",
      title: "새해를 맞아 다녀온 겨울 한라산",
      content:
        '<img src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDAxMDJfMTMg%2FMDAxNzA0MTQ2MzYyMzA3.biz4B9X_NZ2R6dsh1Andd6bNAMn6soC5xNhqShI8Yisg.5vLuMSHA-BkEYq_iiRIh43kccjHWEC_p7a8WXKRWSOwg.JPEG.mggm_%2FIMG_4694.JPG&type=sc960_832" alt="한라산"><p>새해를 맞아 새로운 사람이 되겠다는 마음가짐으로 한라산에 다녀왔어요! 한라산에 올라가려면 미리 예약을 해야하기에 혹시 계획이 있으시다면 꼭 예약을 하고 가셔야 합니다!</p>',
      area1: "제주도",
      area2: "제주시",
      recommendedCount: 0,
      scrapCount: 3,
      views: 1,
      createdAt: "2023-09-07T05:00:19.610172",
      modifiedAt: "2023-09-07T05:01:26.83374",
      recommend: false,
      scrap: false,
    },
    {
      diaryId: 3,
      name: "아무개",
      email: "test000@test.com",
      title: "삼척 장호항, 마치 해외에 온 듯한 기분이었습니다",
      content:
        '<img src="https://search.pstatic.net/common/?src=http%3A%2F%2Fcafefiles.naver.net%2FMjAyMDA3MDNfMjkz%2FMDAxNTkzNzM5NzIwODM1.7bLn8RERofWhWv-zB2GCM5oGPrFdRgOCo4TdNOomSl8g.y7YZHbmzGrkYuf90fOa1WEn748o3DzrIbAktP0l2Ol0g.JPEG%2FIMG_2706.JPG&type=sc960_832" alt="장호항"><p>삼척의 바다는 다른 지역의 바다와 다르게 물이 굉장히 맑고 투명해서 올때마다 기분이 너무 좋아지는 장소입니다. 투명카누와 스노클링도 굉장히 유명하다고 해요!</p>',
      area1: "강원도",
      area2: "삼척",
      recommendedCount: 0,
      scrapCount: 1,
      views: 1,
      createdAt: "2023-09-07T05:00:19.610172",
      modifiedAt: "2023-09-07T05:01:26.83374",
      recommend: false,
      scrap: false,
    },
  ];

  const randomData = [
    {
      contentId: 2748770,
      title: "석관정나루터",
      addr1: "전남 나주시 다시면 동당리 847",
      addr2: "",
      firstimage:
        "https://mblogthumb-phinf.pstatic.net/MjAyMjA2MTJfMjI1/MDAxNjU1MDIwNzYwNTEw.b_XwOVsF7bp5MvOHxB_auwHw7FB_3JfX5rsP-Ad4Tmwg.RyHnhgi1AlPN1Zokv2XYMeYeEugUpwHrFmn0Dha3CcIg.JPEG.mimoa88/%25EB%2582%2598%25EC%25A3%25BC_%25EA%25B0%2580%25EB%25B3%25BC%25EB%25A7%258C%25ED%2595%259C%25EA%25B3%25B3_%25EC%2584%259D%25EA%25B4%2580%25EC%25A0%2595_%25EB%2582%2598%25EB%25A3%25A8%25ED%2584%25B0_(9).jpg?type=w800",
    },
    {
      contentId: 134277,
      title: "예향한정식",
      addr1: "전라남도 나주시 나주천1길 79",
      addr2: "",
      firstimage: "http://tong.visitkorea.or.kr/cms/resource/39/1973639_image2_1.jpg",
    },
    {
      contentId: 126362,
      title: "불회사(나주)",
      addr1: "전라남도 나주시 다도면 다도로 1224-142",
      addr2: "(다도면)",
      firstimage: "http://tong.visitkorea.or.kr/cms/resource/86/2004986_image2_1.jpg",
    },
    {
      contentId: 2861581,
      title: "행운분식",
      addr1: "전라남도 나주시 나주로 142-3 구미식당",
      addr2: "",
      firstimage: "http://tong.visitkorea.or.kr/cms/resource/73/2861573_image2_1.JPG",
    },
    {
      contentId: 128145,
      title: "나주 목사내아",
      addr1: "전라남도 나주시 금성관길 13-10",
      addr2: "(금계동)",
      firstimage: "http://tong.visitkorea.or.kr/cms/resource/55/2515655_image2_1.jpg",
    },
    {
      contentId: 2741556,
      title: "자연애스토리",
      addr1: "전라남도 나주시 문평면 학교평전길 122",
      addr2: "",
      firstimage: "http://tong.visitkorea.or.kr/cms/resource/85/2741785_image2_1.JPG",
    },
  ];

  return (
    <MainCon>
      <SubWave />
      <RecommendCon>
        <RecommendBox>
          <img src={BackCharacter} className="character" />
          <Title>
            이번 여행지는 {recommendData.length > 0 ? recommendData[0].area2 : "어딘가"} 어떠세요?
          </Title>
          <SubTitle>추천 수 가장 높은 게시물</SubTitle>
          {isLoading ? (
            <Loading />
          ) : isError ? (
            <div>server Error...</div>
          ) : (
            <ul>
              {recommendData.map((item: DiaryData) => (
                <RecommendCard key={item.diaryId} data={item}></RecommendCard>
              ))}
            </ul>
          )}
        </RecommendBox>

        <RandomCon>
          <Title className="Type_Random">랜덤으로 떠나는 {recommendData[0].area2}여행</Title>
          {isLoading ? (
            <Loading />
          ) : isError ? (
            <div>server Error...</div>
          ) : (
            <ul>
              {randomData.map((item: RandomData, idx: number) => (
                <RandomCard key={idx} data={item}></RandomCard>
              ))}
            </ul>
          )}
        </RandomCon>
      </RecommendCon>
    </MainCon>
  );
};
export default Recommend;

const MainCon = styled.main`
  position: relative;
  min-height: calc(100vh - 120px);
  padding: 35px 20px 70px;
`;

const RecommendCon = styled.div`
  min-width: 600px;
  min-height: 726px;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  background-color: rgba(255, 255, 255, 0.7);
  border-radius: 20px;
  padding: 50px 40px;
  box-shadow: 2px 4px 6px rgba(167, 167, 167, 0.15);
  border: 0.5px solid #eaeaea;
`;

const RecommendBox = styled.div`
  position: relative;
  .character {
    position: absolute;
    right: 20px;
    bottom: -50px;
    opacity: 0.5;
  }
`;

const Title = styled.strong`
  display: block;
  padding-bottom: 10px;
  margin-bottom: 24px;
  font-size: 30px;
  &:after {
    content: "";
    display: inline-block;
    width: 36px;
    height: 36px;
    background: url(${AirPlane}) no-repeat center / contain;
    vertical-align: middle;
    margin-left: 10px;
  }
  .Type_Random&:after {
    background-image: url(${Dice});
    vertical-align: top;
  }
`;

const ReloadBtn = styled.button`
  float: right;
  font-size: 18px;
  background-color: #ffc03f;
  border-radius: 4px;
  height: 40px;
  line-height: 40px;
  padding: 0 12px;
  font-weight: 300;
  > img {
    margin-left: 4px;
  }
`;

const SubTitle = styled.p`
  font-size: 20px;
  padding-bottom: 20px;
`;

const RandomCon = styled.div`
  margin-top: 50px;
  border-top: 1px solid #eaeaea;
  padding-top: 70px;
  ul {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: space-between;
  }
`;
