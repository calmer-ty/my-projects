import { JSX } from "react";

export interface IFeature {
  type: string;
  title: string;
  tasks: JSX.Element[];
  difficult?: {
    problem: string;
    solve: string;
  };
  retrospect?: string;
}

export const projects = [
  {
    id: "project-01",
    title: "Travel",
    desc: "나만의 여행 기록을 남기세요.",
    content: "Item 1 상세 내용",
    bgSrc: "images/travel-diary.jpg",
    source: "Image by Freepik",
    sourceUrl: "https://www.freepik.com/free-photo/woman-hand-with-hat-against-sky_4495967.htm#fromView=keyword&page=1&position=5&uuid=700cd5f2-ed87-4250-8d97-28698156c7c2&query=Sunny+travel+day",
  },
  {
    id: "project-02",
    title: "Vintage",
    desc: "빈티지 상품, 이제 한 곳에서 관리하세요.",
    content: "Item 2 상세 내용",
    bgSrc: "images/vintage-management.jpg",
    source: "Image by Freepik",
    sourceUrl:
      "https://kr.freepik.com/free-photo/spring-wardrobe-switch-high-angle_39701011.htm#fromView=keyword&page=1&position=0&uuid=ca36e39c-f635-41e2-bd5b-89a69185abab&query=%EB%B9%88%ED%8B%B0%EC%A7%80+%EC%9D%98%EB%A5%98+%EC%95%84%EC%9D%B4%EB%94%94%EC%96%B4",
  },
  {
    id: "project-03",
    title: "Real Estate",
    desc: "원하는 매물을 한눈에 확인하세요.",
    content: "Item 3 상세 내용",
    bgSrc: "images/real-estate.jpg",
    source: "Image by Freepik",
    sourceUrl: "https://kr.freepik.com/free-photo/man-looking-high-skyscrapers_4800868.htm",
  },
  {
    id: "project-04",
    title: "Market",
    desc: "다양한 상품을 구경해보세요.",
    content: "Item 4 상세 내용",
    bgSrc: "images/used-market.jpg",
    source: "Image by Freepik",
    sourceUrl:
      "https://kr.freepik.com/free-ai-image/scene-with-miscellaneous-items-being-sold-yard-sale-bargains_138697331.htm#fromView=keyword&page=1&position=39&uuid=48fd8ae7-d1ee-4f67-b4f5-17becd05a731&query=%ED%8B%B0%EC%85%94%EC%B8%A0+%ED%8C%90%EB%A7%A4+%EC%8B%9C%EC%9E%A5",
  },
  {
    id: "project-05",
    title: "Board",
    desc: "자신의 생각을 공유해보세요.",
    content: "Item 5 상세 내용",
    bgSrc: "images/free-board.jpg",
    source: "Image by Freepik",
    sourceUrl:
      "https://kr.freepik.com/free-photo/working-from-home-time-management-concept_17239290.htm#fromView=keyword&page=1&position=1&uuid=4015e440-ea39-42af-b471-1b9c8c254550&query=%EB%B2%BD%EC%A7%80%EB%A5%BC+%EB%B6%99%EC%9D%B4%EB%8A%94+%EB%B0%A9%EB%B2%95",
  },
];

export const projectsData = [
  {
    id: "project-01",
    title: "트래블 다이어리",
    desc: "원하는 장소에 메모를 작성하고, 북마크별로 메모를 관리하여 나만의 여행을 지도에 기록해보세요!",
    date: "2025.06 ~ 업데이트 중",
    projectType: "팀 프로젝트",
    url: "https://travel-diary.hyerin.store",
    github: "https://github.com/calmer-ty/travel-diary",
    skills: [{ icon: "Google Maps", reason: "세계 지도의 데이터를 구현할 수 있는 것 중에 가장 접근성이 좋다고 생각하여 선정하였습니다." }],

    features: [
      {
        type: "responsible",
        title: "맵 데이터 시각화 및 관리",
        tasks: [
          <span key="01">
            사용자가 원하는 장소에 정보를 입력하고 <strong className="text-red-500">POI(Point of Interest)</strong> 데이터를 기반으로 저장
          </span>,
          <span key="02">생성된 마커를 클릭 시 모달창을 통해 데이터를 수정, 삭제 가능</span>,
        ],
        difficult: {
          problem: "기획 과정에서 지도 상 마커 렌더링 대상 데이터 선정이 핵심 과제였습니다.",
          solve: "팀원과 논의하며 마커 사용 방식을 검토했고, 구글 맵 문서의 POI(Point of Interest) 활용 방법을 참고하여 문제를 해결했습니다.",
        },
        retrospect: "맵에서는 다양한 데이터를 활용할 수 있음을 확인했고, 팀원들과의 원활한 소통이 작업 속도를 높이는 데 큰 도움이 되었습니다.",
      },
      {
        type: "responsible",
        title: "북마크별 기록 정렬",
        tasks: [
          <span key="01">
            사용자가 지도에서 기록했던 데이터들을 <strong className="text-red-500">북마크별</strong>로 정리하여 렌더링
          </span>,
          <span key="02">
            각 북마크 그룹을 열면 그 안에 포함된 데이터를 <strong className="text-red-500">날짜별</strong>로 확인 가능
          </span>,
        ],
        difficult: {
          problem: "북마크에 해당되는 데이터만 필터링하는 기능을 구현할 때, 어떤 방식으로 접근해야할지 감을 잡지 못했습니다.",
          solve: "지도 관련 플랫폼을 찾아 북마크 기능을 참고하고, AI 도구를 통해 실무에서 북마크 데이터를 어떻게 활용하는지 탐색하여 별도의 데이터 컬렉션을 생성하여 마커 데이터와 매칭했습니다.",
        },
        retrospect: "감이 잡히지 않는 기능을 구현할 때, 비슷한 기능을 제공하는 플랫폼과 실무에서 어떻게 활용하는지 조사하는 과정이 큰 도움이 된다는 점을 깨달았습니다.",
      },
      {
        type: "core",
        title: "북마크별 데이터 저장",
        tasks: [<span key="01">사용자가 북마크를 생성하여 원하는 장소에 메모와 함께 북마크를 설정</span>, <span key="02">북마크를 설정하면 추후 여행 기록 리스트에서 확인 가능</span>],
        difficult: {
          problem:
            "Firestore 데이터를 활용해 지도에 마커를 렌더링하고 북마크 데이터도 저장했습니다. 하지만 메모 수정 시 마커 데이터 북마크 값이 선택한 북마크 상태(state) 값에 의해 덮여쓰이는 문제가 발생했습니다.",
          solve:
            "상태 함수와 Firestore 북마크 값을 콘솔로 통해 동작 흐름을 살펴본 결과, 초기에 Firestore 값으로 북마크값이 들어와야하는데 여러 북마크를 누르면서 전에 선택한 상태 값으로 초기화 되고 있다는 점을 확인했습니다. 이후 useEffect를 통해 수정 시에 북마크 상태를 변경해주어 해결했습니다.",
        },
        retrospect: "Firestore 값으로 상태를 초기화해야 하는 시점을 놓쳤기 때문에 발생한 문제였습니다. 앞으로는 외부 데이터와 로컬 상태의 초기화 흐름을 더 명확히 구분해야겠다는 생각이 들었습니다.",
      },
      {
        type: "core",
        title: "여행 주의 국가 표시",
        tasks: [
          <span key="01">
            여행 주의 <strong className="text-red-500">단계별</strong>로 국가 리스트 정렬
          </span>,
          <span key="02">
            국가별 리스트 항목 클릭시 모달창으로 <strong className="text-red-500">세부 정보</strong> 제공
          </span>,
        ],
      },
    ],
    futurePlans: {
      title: "소비 패턴 분석하여 유료 제공",
      contents: [
        "여행 기록 시, 사용한 금액 데이터를 입력할 수 있는 Form을 추가할 예정입니다.",
        "POI 데이터를 활용해 장소 유형별로 소비 금액을 필터링하고, 그래프로 시각화하여 유료 기능으로 제공할 예정입니다.",
      ],
    },
  },
  {
    id: "project-02",
    title: "빈티지 노트",
    desc: "여러 국가에서 매입한 상품 정보들을 기록하고, 예상 수익을 계산해보세요!",
    date: "2025.05 ~ 2025.10",
    projectType: "개인 프로젝트",
    url: "https://vintage-manager.calmerproject.store",
    github: "https://github.com/calmer-ty/vintage-manager",
    skills: [{ icon: "환율 REST API", reason: "해외 상품들을 구매하기 위해서는 외국 통화와 환전을 거쳐야 하기 때문에 필수로 사용하였습니다." }],

    features: [
      {
        type: "core",
        title: "외국 통화 데이터 시각화",
        // tasks: [
        //   "사용자가 선택한 외국 통화 금액 입력 → 외부 환율 API 호출 → 원화 환산 후 외국 통화/원화 값 Firestore에 저장",
        //   "저장된 외국 통화/원화 데이터를 표 컴포넌트에서 시각화",
        //   "등급제에 따라 외국 통화 입력 기능 접근을 제한",
        //   "데이터는 대시보드에 활용",
        // ],
        tasks: [
          <span key="01">
            사용자가 선택한 외국 통화 금액 입력 → 외부 <strong className="text-red-500">환율 API</strong> 호출 → <strong className="text-red-500">원화 환산</strong> 후 외국 통화/원화 값 Firestore에
            저장
          </span>,
          <span key="02">
            저장된 외국 통화/원화 데이터를 <strong className="text-red-500">표</strong> 컴포넌트에서 시각화
          </span>,
          <span key="03">
            <strong className="text-red-500">등급</strong>에 따라 외국 통화 입력 기능 <strong className="text-red-500">접근 제한</strong>
          </span>,
          <span key="04">데이터는 대시보드에 활용</span>,
        ],
        difficult: {
          problem: "변동하는 통화 데이터와 원화로 환산해 저장할 때, 데이터 필드 구조가 복잡해 활용이 어려워 저장 로직을 자주 수정해야 했습니다.",
          solve: "사용 통화와 환산 금액 데이터를 함께 하나의 필드에 저장하는 방법을 AI 도구를 참고해 확인했습니다.",
        },
        retrospect: "프로젝트에서 필요한 데이터와 그 구조를 미리 설계하고 활용 방안을 고민하는 것이 중요하다는 점을 배웠습니다.",
      },
      {
        type: "core",
        title: "매입 관리 시스템",
        // tasks: [
        //   "상품 정보, 매입가, 부가 비용 등 데이터 입력 후 Firestore에 저장",
        //   "입력한 상품 데이터를 패키지 단위로 그룹화하여 저장 및 관리",
        //   "판매 등록 시 패키지 데이터를 일부 추출하여 판매 데이터로 전송 및 활용",
        // ],
        tasks: [
          <span key="01">상품 정보, 매입가, 부가 비용 등 데이터 입력 후 Firestore에 저장</span>,
          <span key="02">
            입력한 상품 데이터를 패키지 단위로 <strong className="text-red-500">그룹화</strong>하여 저장 및 관리
          </span>,
          <span key="02">
            판매 등록 시 패키지 데이터를 <strong className="text-red-500">일부 추출</strong>하여 판매 데이터로 <strong className="text-red-500">활용</strong>
          </span>,
        ],
        difficult: {
          problem: "매입 & 판매 기능을 따로 개발한 상태에서, 두 기능을 통합하는 과정에서 여러 번 수정이 필요했습니다.",
          solve: "별도 브랜치에서 통합 구현이 가능한지 확인하고, 연동 가능하다는 판단 후 두 기능을 성공적으로 통합했습니다.",
        },
        retrospect:
          "처음에는 매입 & 판매 기능이 각각 필요하다고 생각했습니다. 하지만 직접 사용해보면서 두 기능이 유기적으로 연결될 때 서비스가 훨씬 편리해진다는 점을 깨달았습니다. 이를 통해 사용자의 실제 이용 흐름을 고려한 기능 설계의 중요성을 느꼈습니다.",
      },
      {
        type: "core",
        title: "판매 관리 시스템",
        tasks: [
          <span key="01">매입 관리 Firestore에 저장된 상품 데이터를 추출 → 판매 데이터 형식으로 변환 후 저장</span>,
          <span key="02">
            판매가 및 부가 비용 입력 → 순이익 계산 후 Firestore에 저장 → <strong className="text-red-500">대시보드 차트</strong>로 시각화
          </span>,
          <span key="03">판매 상태 변경 시 Firestore 업데이트 → 대시보드에 데이터 반영</span>,
        ],
      },
    ],
  },
  {
    id: "project-03",
    title: "부동산 마켓",
    desc: "매물 실거래가를 확인하고, 자산 상승률과 매물 예상 가격 변동을 반영하여 원하는 매물의 매수 시기를 예측해보세요!",
    date: "2024.06 ~ 2025.01",
    projectType: "개인 프로젝트",
    url: "https://realestate.calmerproject.store",
    github: "https://github.com/calmer-ty/frontend-realestate",
    skills: [{ icon: "Naver Maps", reason: "국내 지도 서비스로 접근성이 뛰어나 국내 공공데이터를 활용하기 좋기에 Naver Maps를 선택했습니다." }],

    features: [
      {
        type: "core",
        title: "지도 기반 매물 시각화",
        tasks: [
          <span key="01">
            <strong className="text-red-500">실거래가 데이터</strong>를 기반으로 지도에 매물 정보를 마커로 표시
          </span>,
          <span key="02">
            <strong className="text-red-500">마커 클러스터링</strong>으로 근방 마커들을 최적화
          </span>,
          <span key="03">
            드롭다운 메뉴로 사용자가 <strong className="text-red-500">선택한 지역</strong>의 데이터만 조회하여 최적화
          </span>,
        ],
        difficult: {
          problem: "한 번에 모든 데이터를 가져와 마커가 많아지면서 렉 발생했습니다.",
          solve: "사용자가 선택한 지역만 로드하고 마커 클러스터링을 사용하여 최적화했습니다. → 로딩 속도 약 1분 → 약 4초로 단축.",
        },
        retrospect: "데이터 로딩 속도의 중요성을 체감했으며, 최적화 과정을 통해 효율적인 데이터 분할 방법을 익혔습니다. 이를 통해 사용자 경험을 개선하는 방법을 배울 수 있었습니다.",
      },
      {
        type: "core",
        title: "건물 유형 분류 및 API 활용",
        tasks: [
          <span key="01">
            <strong className="text-red-500">선택한 건물 유형</strong> 데이터만 조회하여 마커 렌더링
          </span>,
        ],
        difficult: {
          problem: "처음에 아파트 데이터만을 기준으로 작업하여, 이후 빌라나 오피스텔 데이터를 추가할 때 코드의 일관성을 유지하는 것이 어려웠습니다.",
          solve: "REST API의 데이터 구조를 분석하여 공통된 타입을 정의하고, 엔드포인트를 분기 처리하여 프로젝트의 확장성을 확보했습니다.",
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
    projectType: "개인 프로젝트",
    url: "",
    github: "https://github.com/calmer-ty/codecamp-frontend_portfolio",

    features: [
      {
        type: "core",
        title: "카카오 맵",
        tasks: [<span key="01">위/경도 값을 받아와 표시하거나, 사용자가 지도 안에 지역을 선택하면 주소 값과 위/경도를 표시</span>],
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
    projectType: "개인 프로젝트",
    url: "",
    github: "https://github.com/calmer-ty/codecamp-frontend_portfolio",

    features: [
      {
        type: "core",
        title: "카카오 맵",
        tasks: [<span key="01">특정 텍스트를 검색하여 원하는 게시글을 찾기</span>],
        difficult: {
          problem: "키워드 검색 기능을 커스텀 훅으로 분리했지만, 필요한 페이지의 상태 값을 받아오지 못했습니다",
          solve: "검색이 필요한 페이지에서 상태 변수를 정의하고, 상태 업데이트 함수를 커스텀 훅에 전달하여 내부에서 상태를 변경할 수 있도록 수정헸습니다",
        },
        retrospect: "다른 컴포넌트에서 상태 업데이트 함수를 props로 받아 처리 후에 값을 돌려주는 개념을 이해하고 이후 프로젝트에서 다양하게 활용할 수 있었습니다.",
      },
    ],
  },
];
