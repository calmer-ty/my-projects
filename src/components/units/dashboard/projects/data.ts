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
    date: "2025.06 ~ 업데이트 중",
    team: "팀 프로젝트",
    url: "https://travel-diary.hyerin.store",
    github: "https://github.com/calmer-ty/travel-diary",
    skills: [{ icon: "Google Maps", reason: "세계 지도의 데이터를 구현할 수 있는 것 중에 가장 접근성이 좋다고 생각하여 선정하였습니다." }],

    features: [
      {
        title: "Google Maps을 활용한 데이터 시각화 및 관리",
        core: ["Google Maps의 POI(Point of Interest) 데이터를 통해 사용자가 원하는 장소에 마커를 렌더링합니다.", "추가로 생성된 마커 클릭 시 모달창을 통해 데이터를 수정, 삭제할 수 있습니다."],
        difficult: {
          problem: "기획 과정에서 지도 상 마커 렌더링 대상 데이터 선정이 핵심 과제였습니다.",
          solve: "팀원과 논의하며 마커 사용 방식을 검토했고, 구글 맵 문서의 POI(Point of Interest) 활용 방법을 참고하여 문제를 해결했습니다.",
        },
        retrospect: "맵에서는 다양한 데이터를 활용할 수 있음을 확인했고, 팀원들과의 원활한 소통이 작업 속도를 높이는 데 큰 도움이 되었습니다.",
      },
      {
        title: "북마크로 기록 정렬",
        core: ["북마크별로 사용자가 지도에서 기록했던 데이터들을 정리하여 렌더링합니다."],
        difficult: {
          problem: "북마크에 해당되는 데이터만 필터링하는 기능을 구현할 때, 어떤 방식으로 접근해야할지 감을 잡지 못했습니다..",
          solve: "지도 관련 플랫폼을 찾아 북마크 기능을 참고하고, AI 도구를 통해 실무에서 북마크 데이터를 어떻게 활용하는지 탐색하여 별도의 데이터 컬렉션을 생성하여 마커 데이터와 매칭했습니다.",
        },
        retrospect: "감이 잡히지 않는 기능을 구현할 때, 비슷한 기능을 제공하는 플랫폼과 실무에서 어떻게 활용하는지 조사하는 과정이 큰 도움이 된다는 점을 깨달았습니다.",
      },
    ],
  },
  {
    id: "project-02",
    title: "빈티지 노트",
    desc: "여러 국가에서 매입한 상품 정보들을 기록하고, 예상 수익을 계산해보세요!",
    date: "2025.05 ~ 2025.10",
    team: "개인 프로젝트",
    url: "https://vintage-manager.calmerproject.store",
    github: "https://github.com/calmer-ty/vintage-manager",
    skills: [{ icon: "환율 REST API", reason: "해외 상품들을 구매하기 위해서는 외국 통화와 환전을 거쳐야 하기 때문에 필수로 사용하였습니다." }],

    features: [
      {
        title: "외국 통화 데이터를 원화로 환산",
        core: ["사용한 통화 데이터와 원화로 환산한 데이터를 객체로 저장합니다."],
        difficult: {
          problem: "변동하는 통화 데이터와 원화로 환산해 저장할 때, 데이터 필드 구조가 복잡해 활용이 어려워 저장 로직을 자주 수정해야 했습니다.",
          solve: "사용 통화와 환산 금액 데이터를 함께 하나의 필드에 저장하는 방법을 AI 도구를 참고해 확인했습니다.",
        },
        retrospect: "프로젝트에서 필요한 데이터와 그 구조를 미리 설계하고 활용 방안을 고민하는 것이 중요하다는 점을 배웠습니다.",
      },
      {
        title: "입고 & 판매 관리 데이터 연동",
        core: ["입고 관리 데이터에서 판매에 필요한 데이터만 필터링하여 판매 관리 데이터에 저장합니다."],
        difficult: {
          problem: "입고와 판매 기능을 따로 개발한 상태에서, 두 기능을 통합하는 과정에서 여러 번 수정이 필요했습니다.",
          solve: "별도 브랜치에서 통합 구현이 가능한지 확인하고, 연동 가능하다는 판단 후 두 기능을 성공적으로 통합했습니다.",
        },
        retrospect:
          "처음에는 입고 & 판매 기능이 각각 필요하다고 생각했습니다. 하지만 직접 사용해보면서 두 기능이 유기적으로 연결될 때 서비스가 훨씬 편리해진다는 점을 깨달았습니다. 이를 통해 사용자의 실제 이용 흐름을 고려한 기능 설계의 중요성을 느꼈습니다.",
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
    // skills: ["React", "Next.js", "Emotion", "Firebase", "Naver Maps", "REST API"],
    skills: [{ icon: "Google Maps", reason: "구글 맵 API를 활용한 지도 표시 및 마커 관리 기능 구현" }],

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
    // skills: ["React", "Next.js", "Emotion", "GraphQL", "Kakao Maps"],
    skills: [{ icon: "Google Maps", reason: "구글 맵 API를 활용한 지도 표시 및 마커 관리 기능 구현" }],

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
    // skills: ["React", "Next.js", "Emotion", "GraphQL"],
    skills: [{ icon: "Google Maps", reason: "구글 맵 API를 활용한 지도 표시 및 마커 관리 기능 구현" }],

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
