export const projects = [
  {
    id: "project-01",
    title: "Travel",
    desc: "나만의 여행 기록을 남기세요.",
    content: "Item 1 상세 내용",
    bgSrc: "real-estate.jpg",
  },
  {
    id: "project-02",
    title: "Vintage",
    desc: "빈티지 아이템, 이제 한 곳에서 관리하세요.",
    content: "Item 1 상세 내용",
    bgSrc: "real-estate.jpg",
  },
  {
    id: "project-03",
    title: "Real Estate",
    desc: "원하는 매물을 한눈에 확인하세요.",
    content: "Item 1 상세 내용",
    bgSrc: "real-estate.jpg",
  },
  {
    id: "project-04",
    title: "Market",
    desc: "다양한 상품을 구경해보세요.",
    content: "Item 2 상세 내용",
    bgSrc: "used-market.jpg",
  },
  {
    id: "project-05",
    title: "Board",
    desc: "자신의 생각을 공유해보세요.",
    content: "Item 3 상세 내용",
    bgSrc: "free-board.jpg",
  },
];

export const projectsData = [
  {
    id: "project-01",
    title: "부동산 거래 서비스",
    bgSrc: "real-estate.jpg",
    desc: "REST API를 활용하여 매물 실거래가를 확인할 수 있으며, 자산 상승률과 매물 가격 변동을 반영하여 선택한 건물의 매수 시기를 예측할 수 있도록 돕는 서비스입니다.",
    date: "2024.06 ~ 2025.01",
    team: "개인 프로젝트",
    url: "https://realestate.calmerproject.store",
    github: "https://github.com/calmer-ty/frontend-real-estate",
    skill: ["React", "Next.js", "Emotion", "Firebase", "Naver Maps", "REST API"],

    features: [
      {
        title: "지도 기반 매물 시각화",
        core: [
          "REST API를 기반으로 지도에 매물 정보를 마커로 표시.",
          "마커 클러스터링으로 중복 마커 정리.",
          "정보창을 통해 건물의 간단한 주소 및 실거래가 제공.",
          "사용자가 선택한 지역의 데이터를 제공.",
          "매물 등록 여부에 따라 마커 색상 구분. (파란색: 있음 / 회색: 없음)",
        ],
        difficult: { problem: "한 번에 모든 데이터를 가져와 마커가 많아지면서 렉 발생.", solve: "사용자가 선택한 지역만 로드하도록 최적화. → 로딩 속도 1분 → 3초로 단축." },
        retrospect: "데이터 로딩 속도의 중요성을 체감했으며, 최적화 과정을 통해 효율적인 데이터 분할 방법을 익혔습니다. 이를 통해 사용자 경험을 개선하는 방법을 배울 수 있었습니다.",
      },
      {
        title: "건물 유형 분류 및 API 활용",
        core: ["아파트, 오피스텔, 빌라로 건물 유형을 구분.", "각 건물 유형에 맞는 REST API 호출을 통해 효율적으로 기능 추가."],
        difficult: {
          problem: "처음에 아파트 데이터만을 기준으로 작업하여, 이후 빌라나 오피스텔 데이터를 추가할 때 코드의 일관성을 유지하는 것이 어려웠음.",
          solve: "REST API의 데이터 구조를 분석하여 공통된 타입을 정의하고, 엔드포인트를 분기 처리하여 프로젝트의 확장성을 확보함.",
        },
        retrospect:
          "프로젝트 초기 설계 단계에서 확장 가능성을 충분히 고려하지 않아 예상치 못한 어려움을 겪었습니다. 이번 경험을 통해 기능 확장성을 고려하여 설계하는 것이 중요하다는 점을 깨달았습니다.",
      },
      {
        title: "구글 로그인",
        core: ["구글 계정과 연동하여 회원 관리", "로그인 후 매물 등록 및 조회 가능."],
        difficult: { problem: "NextAuth로 구현했지만, 배포 시 로그인이 안되는 문제 발생.", solve: "원인 파악이 어려워, Firebase Authentication으로 변경하여 로그인 문제를 해결." },
        retrospect: "배포 환경에서 예상치 못한 문제가 발생할 수 있음을 다시 한번 깨달았습니다.",
      },
    ],
  },
  {
    id: "project-02",
    title: "부동산 거래 서비스",
    bgSrc: "real-estate.jpg",
    desc: "REST API를 활용하여 매물 실거래가를 확인할 수 있으며, 자산 상승률과 매물 가격 변동을 반영하여 선택한 건물의 매수 시기를 예측할 수 있도록 돕는 서비스입니다.",
    date: "2024.06 ~ 2025.01",
    team: "개인 프로젝트",
    url: "https://realestate.calmerproject.store",
    github: "https://github.com/calmer-ty/frontend-real-estate",
    skill: ["React", "Next.js", "Emotion", "Firebase", "Naver Maps", "REST API"],

    features: [
      {
        title: "지도 기반 매물 시각화",
        core: [
          "REST API를 기반으로 지도에 매물 정보를 마커로 표시.",
          "마커 클러스터링으로 중복 마커 정리.",
          "정보창을 통해 건물의 간단한 주소 및 실거래가 제공.",
          "사용자가 선택한 지역의 데이터를 제공.",
          "매물 등록 여부에 따라 마커 색상 구분. (파란색: 있음 / 회색: 없음)",
        ],
        difficult: { problem: "한 번에 모든 데이터를 가져와 마커가 많아지면서 렉 발생.", solve: "사용자가 선택한 지역만 로드하도록 최적화. → 로딩 속도 1분 → 3초로 단축." },
        retrospect: "데이터 로딩 속도의 중요성을 체감했으며, 최적화 과정을 통해 효율적인 데이터 분할 방법을 익혔습니다. 이를 통해 사용자 경험을 개선하는 방법을 배울 수 있었습니다.",
      },
      {
        title: "건물 유형 분류 및 API 활용",
        core: ["아파트, 오피스텔, 빌라로 건물 유형을 구분.", "각 건물 유형에 맞는 REST API 호출을 통해 효율적으로 기능 추가."],
        difficult: {
          problem: "처음에 아파트 데이터만을 기준으로 작업하여, 이후 빌라나 오피스텔 데이터를 추가할 때 코드의 일관성을 유지하는 것이 어려웠음.",
          solve: "REST API의 데이터 구조를 분석하여 공통된 타입을 정의하고, 엔드포인트를 분기 처리하여 프로젝트의 확장성을 확보함.",
        },
        retrospect:
          "프로젝트 초기 설계 단계에서 확장 가능성을 충분히 고려하지 않아 예상치 못한 어려움을 겪었습니다. 이번 경험을 통해 기능 확장성을 고려하여 설계하는 것이 중요하다는 점을 깨달았습니다.",
      },
      {
        title: "구글 로그인",
        core: ["구글 계정과 연동하여 회원 관리", "로그인 후 매물 등록 및 조회 가능."],
        difficult: { problem: "NextAuth로 구현했지만, 배포 시 로그인이 안되는 문제 발생.", solve: "원인 파악이 어려워, Firebase Authentication으로 변경하여 로그인 문제를 해결." },
        retrospect: "배포 환경에서 예상치 못한 문제가 발생할 수 있음을 다시 한번 깨달았습니다.",
      },
    ],
  },
  {
    id: "project-03",
    title: "부동산 거래 서비스",
    bgSrc: "real-estate.jpg",
    desc: "REST API를 활용하여 매물 실거래가를 확인할 수 있으며, 자산 상승률과 매물 가격 변동을 반영하여 선택한 건물의 매수 시기를 예측할 수 있도록 돕는 서비스입니다.",
    date: "2024.06 ~ 2025.01",
    team: "개인 프로젝트",
    url: "https://realestate.calmerproject.store",
    github: "https://github.com/calmer-ty/frontend-real-estate",
    skill: ["React", "Next.js", "Emotion", "Firebase", "Naver Maps", "REST API"],

    features: [
      {
        title: "지도 기반 매물 시각화",
        core: [
          "REST API를 기반으로 지도에 매물 정보를 마커로 표시.",
          "마커 클러스터링으로 중복 마커 정리.",
          "정보창을 통해 건물의 간단한 주소 및 실거래가 제공.",
          "사용자가 선택한 지역의 데이터를 제공.",
          "매물 등록 여부에 따라 마커 색상 구분. (파란색: 있음 / 회색: 없음)",
        ],
        difficult: { problem: "한 번에 모든 데이터를 가져와 마커가 많아지면서 렉 발생.", solve: "사용자가 선택한 지역만 로드하도록 최적화. → 로딩 속도 1분 → 3초로 단축." },
        retrospect: "데이터 로딩 속도의 중요성을 체감했으며, 최적화 과정을 통해 효율적인 데이터 분할 방법을 익혔습니다. 이를 통해 사용자 경험을 개선하는 방법을 배울 수 있었습니다.",
      },
      {
        title: "건물 유형 분류 및 API 활용",
        core: ["아파트, 오피스텔, 빌라로 건물 유형을 구분.", "각 건물 유형에 맞는 REST API 호출을 통해 효율적으로 기능 추가."],
        difficult: {
          problem: "처음에 아파트 데이터만을 기준으로 작업하여, 이후 빌라나 오피스텔 데이터를 추가할 때 코드의 일관성을 유지하는 것이 어려웠음.",
          solve: "REST API의 데이터 구조를 분석하여 공통된 타입을 정의하고, 엔드포인트를 분기 처리하여 프로젝트의 확장성을 확보함.",
        },
        retrospect:
          "프로젝트 초기 설계 단계에서 확장 가능성을 충분히 고려하지 않아 예상치 못한 어려움을 겪었습니다. 이번 경험을 통해 기능 확장성을 고려하여 설계하는 것이 중요하다는 점을 깨달았습니다.",
      },
      {
        title: "구글 로그인",
        core: ["구글 계정과 연동하여 회원 관리", "로그인 후 매물 등록 및 조회 가능."],
        difficult: { problem: "NextAuth로 구현했지만, 배포 시 로그인이 안되는 문제 발생.", solve: "원인 파악이 어려워, Firebase Authentication으로 변경하여 로그인 문제를 해결." },
        retrospect: "배포 환경에서 예상치 못한 문제가 발생할 수 있음을 다시 한번 깨달았습니다.",
      },
    ],
  },
  {
    id: "project-04",
    title: "중고 마켓",
    bgSrc: "used-market.jpg",
    desc: "중고 상품을 등록하고 카카오 페이로 구매 테스트와 거래 장소를 카카오 지도로 볼 수 있는 서비스입니다.",
    date: "2024.02 ~ 2024.06",
    team: "개인 프로젝트",
    url: "",
    github: "https://github.com/calmer-ty/codecamp-frontend_portfolio",
    skill: ["React", "Next.js", "Emotion", "GraphQL", "Kakao Maps"],

    features: [
      {
        title: "카카오 맵",
        core: ["위/경도 값을 받아와 표시하거나, 사용자가 지도 안에 지역을 선택하면 주소 값과 위/경도를 표시할 수 있습니다."],
        difficult: {
          problem: "페이지가 렌더링되기 전에 지도 관련 코드가 실행되어, 지도 컨테이너가 존재하지 않아 오류 발생.",
          solve: "useEffect을 활용하여 지도가 마운트된 후 적절한 시점에 데이터 요청하도록 수정.",
        },
        retrospect: "렌더링 타이밍을 고려하지 않아 문제가 발생했지만, 이를 통해 useEffect의 동작 원리와 마운트 개념을 다시 한번 이해할 수 있었습니다.",
      },
    ],
  },
  {
    id: "project-05",
    title: "자유 게시판",
    bgSrc: "free-board.jpg",
    desc: "게시물을 등록, 관리하고 다른 사용자끼리 게시물을 공유할 수 있는 서비스입니다",
    date: "2024.02 ~ 2024.06",
    team: "개인 프로젝트",
    url: "",
    github: "https://github.com/calmer-ty/codecamp-frontend_portfolio",
    skill: ["React", "Next.js", "Emotion", "GraphQL"],

    features: [
      {
        title: "카카오 맵",
        core: ["위/경도 값을 받아와 표시하거나, 사용자가 지도 안에 지역을 선택하면 주소 값과 위/경도를 표시할 수 있습니다."],
        difficult: {
          problem: "페이지가 렌더링되기 전에 지도 관련 코드가 실행되어, 지도 컨테이너가 존재하지 않아 오류 발생.",
          solve: "useEffect을 활용하여 지도가 마운트된 후 적절한 시점에 데이터 요청하도록 수정.",
        },
        retrospect: "렌더링 타이밍을 고려하지 않아 문제가 발생했지만, 이를 통해 useEffect의 동작 원리와 마운트 개념을 다시 한번 이해할 수 있었습니다.",
      },
    ],
  },
];
