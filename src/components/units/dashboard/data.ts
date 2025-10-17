export const projects = [
  {
    id: "project-01",
    title: "Travel",
    desc: "나만의 여행 기록을 남기세요.",
    content: "Item 1 상세 내용",
    bgSrc: "travel-diary.jpg",
  },
  {
    id: "project-02",
    title: "Vintage",
    desc: "빈티지 상품, 이제 한 곳에서 관리하세요.",
    content: "Item 2 상세 내용",
    bgSrc: "vintage-management.jpg",
  },
  {
    id: "project-03",
    title: "Real Estate",
    desc: "원하는 매물을 한눈에 확인하세요.",
    content: "Item 3 상세 내용",
    bgSrc: "real-estate.jpg",
  },
  {
    id: "project-04",
    title: "Market",
    desc: "다양한 상품을 구경해보세요.",
    content: "Item 4 상세 내용",
    bgSrc: "used-market.jpg",
  },
  {
    id: "project-05",
    title: "Board",
    desc: "자신의 생각을 공유해보세요.",
    content: "Item 5 상세 내용",
    bgSrc: "free-board.jpg",
  },
];

export const projectsData = [
  {
    id: "project-01",
    title: "트래블 다이어리",
    desc: "원하는 장소에 마커를 통해 메모를 작성하고, 북마크별로 메모를 관리하여 나만의 여행을 지도에 기록해보세요!",
    date: "2025.06 ~ 2025.09",
    team: "팀 프로젝트",
    url: "https://travel-diary.hyerin.store",
    github: "https://github.com/calmer-ty/travel-diary",
    skill: ["React", "Next.js", "Firebase", "Google Maps", "ShadCn"],

    features: [
      {
        title: "[개인 작업] 구글 맵을 활용한 마커 표시 및 관리",
        core: ["구글 맵의 POI(Point of Interest)을 활용하여 사용자가 원하는 장소에 마커를 추가.", "마커 클릭 시 정보창을 통해 메모 등록 / 수정 / 삭제 가능."],
        difficult: {
          problem: "기획 단계에서 지도 마커를 어떠한 데이터의 타겟으로 표시해야 할지 어려움이 있었습니다.",
          solve: "팀원끼리 이 문제에 대해 의논하면서 마커를 사용해보고 구글 맵 문서에서 POI를 활용할 수 있다는 점을 통해 해결했습니다.",
        },
        retrospect: "맵에는 다양한 데이터들을 활용할 수 있다는 점을 알았고, 팀원들과 원활한 소통이 작업 속도를 끌어올릴 수 있다고 생각했습니다.",
      },
      {
        title: "[개인 작업] 북마크 설정에 따라 기록 리스트 필터링",
        core: ["북마크별로 원하는 기록 리스트로 확인 가능."],
        difficult: {
          problem: "리스트 페이지에서 북마크에 해당되는 데이터만 필터링해 보여주는 기능을 구현하는 과정에서 어려움이 있었습니다.",
          solve: "북마크 데이터를 별도로 생성하여 마커 데이터와 매칭했습니다.",
        },
        retrospect: "데이터 필터링 기능을 구현할 때, 추가 데이터를 생성해야 한다는 점을 고려해야 함을 깨달았습니다.",
      },
    ],
  },
  {
    id: "project-02",
    title: "빈티지 노트",
    desc: "여러 국가에서 매입한 상품 정보들을 기록하고, 예상 수익을 계산해보세요!",
    date: "2024.05 ~ 2025.09",
    team: "개인 프로젝트",
    url: "https://vintage-manager.calmerproject.store",
    github: "https://github.com/calmer-ty/vintage-manager",
    skill: ["React", "Next.js", "Firebase", "REST API", "ShadCn"],

    features: [
      {
        title: "환율을 반영한 가격 변환",
        core: ["물품을 구매할 때 사용한 화폐를 원화로 환산하여 데이터 등록.", "환율 API를 활용하여 실시간 환율 반영."],
        difficult: {
          problem: "하루하루 변동하는 외국 통화 데이터를 어떻게 저장하고 관리할지 고민했습니다.",
          solve: "직접 프로젝트를 사용해보며 사용한 통화를 셀렉트로 선택하고, 그 데이터를 환율 정보와 함께 저장할 수 있도록 구현했습니다.",
        },
        retrospect: "단순히 기능을 구현하는 것보다, 데이터를 어떤 구조로 저장하고 활용할지 미리 설계하는 것이 중요하다는 점을 느꼈습니다.",
      },
      {
        title: "입고 & 판매 관리 기능 연동",
        core: ["매입한 상품을 기록한 뒤 사용자 설정을 통해 판매 데이터로 이동."],
        difficult: {
          problem: "판매 / 매입 기능을 따로 작업한 상태에서, 둘의 기능을 조합하는 과정에서 많은 수정이 필요했습니다.",
          solve: "2가지 기능을 염두하여 매입 기능을 먼저 별도 브랜치에서 구현하고, 이후 판매 기능과 연동했습니다.",
        },
        retrospect:
          "처음에는 매입과 판매 기능이 단순히 각각 필요하다고만 생각했습니다. 하지만 직접 사용해보면서 두 기능이 유기적으로 연결될 때 서비스가 훨씬 편리해진다는 점을 깨달았습니다. 이를 통해 사용자의 실제 이용 흐름을 고려한 기능 설계의 중요성을 느꼈습니다.",
      },
    ],
  },
  {
    id: "project-03",
    title: "부동산 마켓",
    desc: "매물 실거래가를 확인하고, 자산 상승률과 매물 예상 가격 변동을 반영하여 원하는 매물의 매수 시기를 예측해보세요!",
    date: "2024.06 ~ 2025.01",
    team: "개인 프로젝트",
    url: "https://realestate.calmerproject.store",
    github: "https://github.com/calmer-ty/frontend-real-estate",
    skill: ["React", "Next.js", "Emotion", "Firebase", "Naver Maps", "REST API"],

    features: [
      {
        title: "지도 기반 매물 시각화",
        core: ["실거래가 데이터를 기반으로 지도에 매물 정보를 마커로 표시.", "마커 클러스터링으로 중복 마커 정리.", "사용자가 선택한 지역의 데이터를 제공."],
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
    ],
  },
  {
    id: "project-04",
    title: "중고 마켓 서비스",
    desc: "중고 상품을 등록하고 카카오 페이로 구매 테스트와 거래 장소를 카카오 지도로 확인해보세요!",
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
    title: "자유 게시판 서비스",
    desc: "게시물을 등록, 관리하고 다른 사용자끼리 게시물을 공유해보세요!",
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
