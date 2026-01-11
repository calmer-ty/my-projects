import { JSX } from "react";

export interface IFeature {
  type: string;
  title: string;
  tasks: JSX.Element[];
  difficult?: {
    problem: JSX.Element;
    solve: JSX.Element;
  };
  retrospect?: JSX.Element;
}

interface IProjectsData {
  info: {
    id: string;
    title: string;
    desc: string;
    date: string;
    projectType: string;
    // contribution?: {
    //   plan: string;
    //   dev: string;
    //   design: string;
    // };
    contribution?: string;
  };

  skills: {
    frontend: string[];
    styles: string[];
    dataDeploy: string[];
    manager: {
      build: string[];
      state?: string[];
    };
    etc?: string[];
  };

  link: {
    github: string;
    url?: string;
  };

  features: IFeature[];

  futurePlans?: {
    title: string;
    contents: string[];
  };
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

export const projectsData: IProjectsData[] = [
  {
    info: {
      id: "project-01",
      title: "트래블 다이어리",
      desc: "원하는 장소에 메모를 작성하고, 북마크별로 메모를 관리하여 나만의 여행을 지도에 기록해보세요!",
      date: "2025.06 ~ 2025.11",
      projectType: "팀 프로젝트",
      contribution: "(기획 60%, 개발: 50%, 디자인: 30%)",
      // contribution: {
      //   plan: "60%",
      //   dev: "50%",
      //   design: "30%",
      // },
    },

    skills: {
      frontend: ["React(v19)", "Next.js(v15)"],
      styles: ["Tailwind CSS", "ShadCn"],
      dataDeploy: ["Firebase", "공공데이터 API, Vercel"],
      manager: {
        build: ["Yarn"],
        state: ["Context API"],
      },
      etc: ["Google Maps"],
    },

    link: {
      url: "https://travel-diary.hyerin.store",
      github: "https://github.com/calmer-ty/travel-diary",
    },

    features: [
      {
        type: "responsible",
        title: "맵 데이터 시각화 및 관리",
        tasks: [
          <p key="01">
            Google Maps API의 <strong className="text-blue-600">POI(Point of Interest)</strong>를 활용해 사용자 입력 정보를 구조화하여 저장
          </p>,
          <p key="02">
            마커 객체와 데이터베이스 ID를 매핑하여 <strong className="text-blue-600">모달 기반의 수정 및 삭제(CRUD)</strong> 기능 구현
          </p>,
        ],
        difficult: {
          problem: (
            <p key="01">
              복잡한 지도 환경에서 사용자에게 효율적인 <strong className="text-blue-600">데이터 관리 경험(UX)</strong>을 제공하는 것이 핵심 과제였습니다.
            </p>
          ),
          solve: (
            <p key="02">
              구글 맵 API 문서를 분석하여 <strong className="text-blue-600">POI 메타데이터</strong> 활용 방안을 도출했고, 이를 통해 마커와 사용자 기록을 안정적으로 연결했습니다.
            </p>
          ),
        },
        retrospect: (
          <p key="01">
            팀원과의 <strong className="text-blue-600">의사결정 프로세스</strong>를 통해 기술적 문제를 해결하며, 원활한 협업이 <strong className="text-blue-600">개발 생산성</strong>에 미치는 영향을
            깊이 깨달았습니다.
          </p>
        ),
      },
      {
        type: "responsible",
        title: "북마크 기반 데이터 계층화",
        tasks: [
          <p key="01">
            사용자 기록 데이터를 <strong className="text-blue-600">북마크 카테고리별</strong>로 분류하여 계층적 UI 렌더링
          </p>,
          <p key="02">
            각 그룹 내 데이터를 <strong className="text-blue-600">최신순/날짜별</strong>로 정렬하여 가독성 높은 리스트 제공
          </p>,
        ],
        difficult: {
          problem: (
            <p key="01">
              대량의 마커 데이터 속에서 특정 북마크 항목만 효율적으로 추출하기 위한 <strong className="text-blue-600">스키마 최적화</strong>가 핵심 과제였습니다.
            </p>
          ),
          solve: (
            <p key="02">
              지도 플랫폼의 북마크 기능을 가진 레퍼런스를 참고하여 <strong className="text-blue-600">별도의 데이터 컬렉션</strong>을 설계하고, 고유 ID 매칭을 통해 필요한 데이터만 필터링하는 구조를
              구현했습니다.
            </p>
          ),
        },
        retrospect: (
          <p key="02">
            기능 구현 전 <strong className="text-blue-600">벤치마킹과 레퍼런스 분석</strong>을 통해 최적의 아키텍처를 탐색하는 과정이 설계의 완성도를 높인다는 것을 확인했습니다.
          </p>
        ),
      },
      {
        type: "core",
        title: "북마크 데이터 정합성 유지",
        tasks: [
          <p key="01">
            사용자 지정 장소에 대한 <strong>메모 저장 및 북마크 설정</strong> 기능 구현
          </p>,
          <p key="02">
            저장된 북마크 데이터를 기반으로 <strong>여행 기록 리스트와 실시간 연동</strong>
          </p>,
        ],
        difficult: {
          problem: (
            <p key="01">
              마커 정보 수정 시, Firestore의 기존 데이터가 아닌 UI의 <strong className="text-blue-600">이전 상태값(State)</strong>이 덮어씌워지는
              <strong className="text-blue-600">데이터 정합성 문제</strong>가 발생했습니다.
            </p>
          ),
          solve: (
            <p key="02">
              콘솔 로그를 통해 <strong className="text-blue-600">데이터 흐름(Data Flow)</strong>을 추적한 결과, 수정 모달이 열릴 때 DB의 최신값이 아닌 로컬 상태의 초기값이 참조됨을 확인했습니다. 이를
              해결하기 위해 <code>useEffect</code>를 활용하여 모달 오픈 시점에 <strong className="text-blue-600">상태 초기화 로직</strong>을 추가해 해결했습니다.
            </p>
          ),
        },
        retrospect: (
          <p key="01">
            외부 데이터(Firestore)와 로컬 상태(React State) 간의 <strong className="text-blue-600">동기화 시점</strong>이 얼마나 중요한지 깨달았습니다. 앞으로는 컴포넌트 생명주기에 따른 데이터 흐름을
            설계 단계부터 더 면밀히 검토할 계획입니다.
          </p>
        ),
      },
      {
        type: "core",
        title: "여행 안전 정보 시각화",
        tasks: [
          <p key="01">
            국가별 여행 경보 데이터를 활용하여 위험 <strong className="text-blue-600">단계별 정렬</strong> 및 시각화
          </p>,
          <p key="02">
            국가 클릭 시 <strong className="text-blue-600">상세 지역</strong> 표시
          </p>,
        ],
      },
    ],

    futurePlans: {
      title: "비용 관리 기능 확장 및 데이터 수익화 모델",
      contents: [
        "여행 지출 기록을 위한 전용 폼(Form)을 추가하여, 기록 중심의 다이어리에서 '여행 가계부'로 서비스 범위 확장 예정",
        "POI(장소 정보)와 지출 데이터를 결합해 카테고리별 소비 패턴을 분석하고, 이를 차트로 시각화한 프리미엄 데이터 대시보드 제공 계획",
      ],
    },
  },
  {
    info: {
      id: "project-02",
      title: "빈티지 노트",
      desc: "여러 국가에서 매입한 상품 정보들을 기록하고, 예상 수익을 계산해보세요!",
      date: "2025.05 ~ 2025.10",
      projectType: "개인 프로젝트",
    },

    skills: {
      frontend: ["React(v19)", "Next.js(v15)"],
      styles: ["Tailwind CSS", "ShadCn"],
      dataDeploy: ["Firebase", "ExchangeRate API, Vercel"],
      manager: {
        build: ["Yarn"],
        state: ["Zustand"],
      },
    },

    link: {
      url: "https://vintage-manager.calmerproject.store",
      github: "https://github.com/calmer-ty/vintage-manager",
    },

    features: [
      {
        type: "core",
        title: "외화 데이터 관리 및 권한 제어",
        tasks: [
          <p key="01">
            저장된 외국 통화 및 원화 환산 데이터를 <strong className="text-blue-600">데이터 테이블</strong>로 구조화하여 시각화
          </p>,
          <p key="02">
            사용자 등급별 권한 로직을 적용하여 <strong className="text-blue-600">입력 기능 접근 제어</strong> 구현
          </p>,
          <p key="03">가공된 데이터를 대시보드 인터페이스에 연동하여 자산 흐름 파악 지원</p>,
        ],
        difficult: {
          problem: (
            <p key="01">
              외화 데이터와 환산 금액을 각각 관리하면서 발생하는 <strong className="text-blue-600">데이터 구조의 복잡성</strong>과 유지보수의 어려움을 겪었습니다.
            </p>
          ),
          solve: (
            <p key="02">
              통화 정보와 환산 로직을 통합 관리할 수 있는 <strong className="text-blue-600">객체 기반 스키마</strong>를 설계하여 데이터 필드 구조를 단순화하고 활용도를 높였습니다.
            </p>
          ),
        },
        retrospect: (
          <p key="01">
            확장성 있는 서비스를 위해 초기 <strong className="text-blue-600">데이터 모델링</strong> 단계에서 다양한 활용 사례를 검토하는 것이 개발 효율에 미치는 큰 영향을 깨달았습니다.
          </p>
        ),
      },
      {
        type: "core",
        title: "매입·판매 통합 관리 시스템",
        tasks: [
          <p key="01">
            개별 상품 데이터를 패키지 단위로 <strong className="text-blue-600">객체화하여 그룹 관리</strong> 기능 구현
          </p>,
          <p key="02">
            판매 등록 시 기존 매입 데이터를 <strong className="text-blue-600">참조(Reference)</strong>하여 데이터 재사용 및 자동 완성 구현
          </p>,
        ],
        difficult: {
          problem: (
            <p key="01">
              독립적으로 개발된 매입과 판매 모듈을 통합하는 과정에서 <strong className="text-blue-600">스키마 불일치</strong>로 인한 로직 충돌이 발생했습니다.
            </p>
          ),
          solve: (
            <p key="02">
              별도 브랜치에서 <strong className="text-blue-600">기능 통합 테스트</strong>를 거쳐 연동 가능성을 검증했으며, 매입 데이터를 판매 로직에 주입하는 방식으로 아키텍처를 재구성하여 문제를
              해결했습니다.
            </p>
          ),
        },
        retrospect: (
          <p key="01">
            단일 기능의 완성도보다 서비스 전체를 관통하는 <strong className="text-blue-600">유기적인 데이터 흐름(User Flow)</strong> 설계가 사용자 경험에 미치는 결정적인 영향을 학습했습니다.
          </p>
        ),
      },
      {
        type: "core",
        title: "판매 및 수익 관리 시스템",
        tasks: [
          <p key="01">
            Firestore의 매입 데이터를 참조하여 판매 발생 시 <strong className="text-blue-600">실시간 재고 및 판매 데이터 반영</strong>
          </p>,
          <p key="02">
            판매가와 부가 비용을 결합한 연산 로직을 통해 <strong className="text-blue-600">순이익 지표 산출 및 차트 시각화</strong>
          </p>,
          <p key="03">
            판매 상태(판매 중/완료)에 따른 <strong className="text-blue-600">조건부 렌더링</strong>을 적용하여 대시보드 현황판 구현
          </p>,
        ],
      },
    ],
  },
  {
    info: {
      id: "project-03",
      title: "부동산 실거래 지도",
      desc: "원하는 건물 유형과 지역을 선택하여 건물의 시세를 알아보고 시각화한 데이터를 참고해보세요.",
      date: "2025.12 ~ 2026.01",
      projectType: "개인 프로젝트",
    },

    skills: {
      frontend: ["React(v19)", "Next.js(v15)"],
      styles: ["Emotion"],
      dataDeploy: ["Firebase", "공공데이터 API, Vercel"],
      manager: {
        build: ["Yarn"],
        state: ["Context API"],
      },
      etc: ["Naver Maps, Chart.js"],
    },

    link: {
      url: "https://real-estate.calmerproject.store",
      github: "https://github.com/calmer-ty/real-estate_v2",
    },

    features: [
      {
        type: "core",
        title: "부동산 실거래 데이터 시각화",
        tasks: [
          <p key="01">
            국토교통부 실거래가 데이터를 기반으로 지도 UI에 <strong className="text-blue-600">매물 위치 마커 렌더링</strong>
          </p>,
          <p key="02">
            대량의 마커 렌더링 성능 최적화를 위한 <strong className="text-blue-600">마커 클러스터링(Clustering)</strong> 구현
          </p>,
        ],
        difficult: {
          problem: (
            <p key="01">
              지도 API 연동과 주소-좌표 변환(Geocoding) 로직이 한 곳에 얽혀 있어 <strong className="text-blue-600">코드 복잡도</strong>가 높고 유지보수가 어려운 문제가 있었습니다.
            </p>
          ),
          solve: (
            <p key="02">
              지도 표시 전용 컴포넌트를 분리하고, 좌표 변환 로직은 별도의 <strong className="text-blue-600">커스텀 훅(useGeocode)</strong>으로 모듈화하여 기능별 독립성을 확보했습니다.
            </p>
          ),
        },
        retrospect: (
          <p key="01">
            UI와 기능 로직을 분리하는 <strong className="text-blue-600">관심사 분리(Separation of Concerns)</strong>의 중요성을 체감했으며, 이는 코드의 가독성뿐만 아니라 디버깅 효율을 획기적으로
            높여주었습니다.
          </p>
        ),
      },
      {
        type: "core",
        title: "다양한 건물 데이터 통합 조회",
        tasks: [
          <p key="01">
            사용자가 선택한 <strong className="text-blue-600">건물 유형 및 지역 조건</strong>에 따른 맞춤형 데이터 필터링 구현
          </p>,
        ],
        difficult: {
          problem: (
            <p key="01">
              아파트 외에 빌라, 오피스텔 데이터를 추가하면서 각기 달랐던 <strong className="text-blue-600">스키마와 중복 로직</strong>으로 인해 유지보수 효율이 떨어지는 문제를 겪었습니다.
            </p>
          ),
          solve: (
            <p key="02">
              유형별로 나뉘어 있던 조회 로직을 <strong className="text-blue-600">하나의 공통 로직으로 통합</strong>하고, 데이터 규격을 일치시켜 새로운 데이터가 추가되어도 동일한 패턴으로 처리되도록
              개선했습니다.
            </p>
          ),
        },
        retrospect: (
          <p key="01">
            초기 설계 단계에서 <strong className="text-blue-600">데이터 확장성</strong>을 고려하는 것이 프로젝트의 지속 가능성에 얼마나 큰 영향을 미치는지 직접 체감할 수 있었습니다.
          </p>
        ),
      },
      {
        type: "core",
        title: "부동산 매물 상세 및 시각화",
        tasks: [
          <p key="01">
            선택된 매물의 면적, 준공 연도 등 <strong className="text-blue-600">전반적인 물리적 특성 및 제원 정보 제공</strong>
          </p>,
          <p key="02">
            실거래가 데이터를 기반으로 한 <strong className="text-blue-600">월별 거래가 평균 추이 그래프</strong> 시각화
          </p>,
          <p key="03">
            과거 체결된 실거래 데이터의 <strong className="text-blue-600">히스토리 리스트</strong> 구현
          </p>,
        ],
      },
    ],
  },
  {
    info: {
      id: "project-04",
      title: "중고 마켓 서비스",
      desc: "중고 상품을 등록하고 카카오 페이로 구매 테스트와 거래 장소를 카카오 지도로 확인해보세요!",
      date: "2024.02 ~ 2024.06",
      projectType: "개인 프로젝트",
    },

    skills: {
      frontend: ["React(v17)", "Next.js(v12)"],
      styles: ["Emotion"],
      dataDeploy: ["강의 제공 데이터셋 (GraphQL)"],
      manager: {
        build: ["Yarn"],
        state: ["recoil"],
      },
      etc: ["Naver Maps, Chart.js"],
    },

    link: {
      github: "https://github.com/calmer-ty/codecamp-frontend_portfolio",
    },

    features: [
      {
        type: "core",
        title: "카카오 맵 API 연동",
        tasks: [
          <p key="01">
            사용자 선택 위치의 좌표 기반 <strong className="text-blue-600">실시간 주소 변환 및 위치 마커 렌더링</strong> 기능 구현
          </p>,
        ],
        difficult: {
          problem: (
            <p key="01">
              컴포넌트 렌더링 시점과 지도 API 초기화 로직의 비동기적 특성으로 인해, <strong className="text-blue-600">DOM 컨테이너 참조 오류</strong>가 발생했습니다.
            </p>
          ),
          solve: (
            <p key="02">
              <strong className="text-blue-600">useEffect</strong> 훅을 활용해 컴포넌트 마운트 이후 지도가 생성되도록 실행 순서를 제어하여 런타임 에러를 해결했습니다.
            </p>
          ),
        },
        retrospect: (
          <p key="01">
            외부 라이브러리 연동 시 리액트의 <strong className="text-blue-600">렌더링 타이밍과 마운트 개념</strong>을 고려한 설계의 중요성을 깊이 이해하게 되었습니다.
          </p>
        ),
      },
    ],
  },
  {
    info: {
      id: "project-05",
      title: "자유 게시판 서비스",
      desc: "게시물을 등록, 관리하고 다른 사용자끼리 게시물을 공유해보세요!",
      date: "2024.02 ~ 2024.06",
      projectType: "개인 프로젝트",
    },

    skills: {
      frontend: ["React(v17)", "Next.js(v12)"],
      styles: ["Emotion"],
      dataDeploy: ["강의 제공 데이터셋 (GraphQL)"],
      manager: {
        build: ["Yarn"],
        state: ["recoil"],
      },
      etc: ["Naver Maps, Chart.js"],
    },

    link: {
      github: "https://github.com/calmer-ty/codecamp-frontend_portfolio",
    },

    features: [
      {
        type: "core",
        title: "키워드 검색 및 상태 관리",
        tasks: [
          <p key="01">
            사용자 입력 키워드에 따른 <strong className="text-blue-600">게시글 검색 및 지도 마커 동적 필터링</strong> 기능 구현
          </p>,
        ],
        difficult: {
          problem: (
            <p key="01">
              검색 로직을 커스텀 훅으로 분리했으나, 훅에서 처리된 결과 데이터를 <strong className="text-blue-600">상위 컴포넌트의 상태와 연동</strong>하는 데 어려움을 겪었습니다.
            </p>
          ),
          solve: (
            <p key="02">
              상태 업데이트 함수를 훅의 인자로 전달하여, <strong className="text-blue-600">훅 내부의 검색 결과가 부모 컴포넌트에 실시간으로 공유</strong>되도록 구조를 개선했습니다.
            </p>
          ),
        },
        retrospect: (
          <p key="01">
            컴포넌트와 훅 간의 <strong className="text-blue-600">데이터 흐름(Data Flow)</strong>을 명확히 설계하는 법을 익혔으며, 함수의 참조 전달을 통한 상태 관리의 효율성을 체감했습니다.
          </p>
        ),
      },
    ],
  },
];
