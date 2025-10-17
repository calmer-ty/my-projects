import { SiFirebase, SiGraphql, SiNaver, SiGooglemaps, SiNextdotjs, SiReact, SiStyledcomponents } from "react-icons/si";

// prettier-ignore
export const skillIcons: Record<string, React.ReactNode> = {
  "React": <SiReact className="text-sky-400" />,
  "Next.js": <SiNextdotjs className="text-black" />,
  "Emotion": <SiStyledcomponents className="text-pink-400" />,
  "Firebase": <SiFirebase className="text-yellow-400" />,
  "Naver Maps": <SiNaver className="text-green-600" />,
  "Google Maps": <SiGooglemaps className="text-green-600" />,
  "GraphQL": <SiGraphql className="text-pink-500" />
};
