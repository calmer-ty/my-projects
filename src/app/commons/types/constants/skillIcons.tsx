import { SiFirebase, SiGraphql, SiNaver, SiNextdotjs, SiReact, SiStyledcomponents } from "react-icons/si";

// prettier-ignore
export const skillIcons: Record<string, React.ReactNode> = {
  "React": <SiReact className="text-sky-400" />,
  "Next.js": <SiNextdotjs className="text-black" />,
  "Emotion": <SiStyledcomponents className="text-pink-400" />,
  "Firebase": <SiFirebase className="text-yellow-400" />,
  "Naver Maps": <SiNaver className="text-green-600" />,
  "GraphQL": <SiGraphql className="text-pink-500" />,
  "REST API": <span className="font-mono text-xs">REST API</span>, // 예외 처리
  "Kakao Maps": <span className="font-mono text-xs text-yellow-600">Kakao</span>, // 예외 처리
};
