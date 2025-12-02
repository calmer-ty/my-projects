import { SiFirebase, SiNextdotjs, SiReact, SiTailwindcss } from "react-icons/si";

export const tabs = [
  {
    icon: <SiReact size={22} />,
    label: "React",
    points: [
      {
        title: "SPA 구조",
        desc: "SPA 구조에서는 페이지 이동 시 전체 HTML을 새로 불러오지 않고, 필요한 컴포넌트만 렌더링합니다. 덕분에 브라우저 부담이 줄고 사용자는 빠른 속도를 체감할 수 있습니다.",
      },
      {
        title: "컴포넌트 재사용성",
        desc: "버튼, 카드, 모달 등 반복되는 UI를 여러 페이지에서 재사용할 수 있어 코드 중복을 줄이고 유지보수를 쉽게 하며 개발 생산성을 높일 수 있습니다.",
      },
      {
        title: "상태 관리",
        desc: "setState를 통해 변수값이 바뀌면 UI가 즉시 반영되고, props로 setState를 전달하면 다른 컴포넌트에서도 상태를 편리하게 제어할 수 있습니다.",
      },
      {
        title: "라이프사이클 활용",
        desc: "외부 API나 라이브러리를 사용할 때, DOM 요소가 아직 준비되지 않은 상태에서 호출되는 문제를 useEffect를 활용하여 안전하게 처리할 수 있습니다.",
      },
    ],
  },
  {
    icon: <SiNextdotjs size={22} />,
    label: "Next.js",
    points: [
      {
        title: "파일 기반 라우팅",
        desc: "React Router를 별도로 설정하지 않고 페이지 파일을 생성하면 자동으로 URL과 연결되어 라우팅이 간편합니다.",
      },
      {
        title: "서버 사이드 API 연동",
        desc: "Next.js 서버에서 외부 API를 대신 호출하여, 클라이언트에서 API Key를 노출하지 않고 CORS 문제 없이 안전하게 데이터를 사용할 수 있습니다.",
      },
    ],
  },
  {
    icon: <SiFirebase size={22} />,
    label: "Firebase",
    points: [
      {
        title: "빠른 백엔드 연결",
        desc: "Firestore 데이터베이스와 인증(Authentication) 기능을 빠르게 연동할 수 있어, 별도의 서버 구축 없이도 백엔드 기능을 구현할 수 있습니다.",
      },
      {
        title: "서버리스 배포",
        desc: "서버리스 환경으로 배포가 가능해 인프라 관리 부담을 줄일 수 있었고, 프로젝트 배포 속도를 높일 수 있습니다.",
      },
    ],
  },
  {
    icon: <SiTailwindcss size={22} />,
    label: "Tailwind CSS",
    points: [
      {
        title: "스타일 적용 간편",
        desc: "별도의 스타일 파일이나 함수 선언 없이 컴포넌트 내에서 바로 스타일을 적용할 수 있어 개발 속도가 빨랐습니다.",
      },
      {
        title: "컴포넌트 기반 디자인",
        desc: "Tailwind CSS 기반 UI 키트(예: shadcn)를 활용해 일관된 디자인을 손쉽게 구현할 수 있었습니다.",
      },
    ],
  },
];
