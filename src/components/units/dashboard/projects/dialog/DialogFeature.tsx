import { IFeature } from "../data";

export default function Feature({ feature }: { feature: IFeature }) {
  return (
    <div className="px-4 py-8 border-b border-gray-200 last:border-0">
      <h3 className="mb-4 font-bold text-lg">{feature.title}</h3>

      <ul className="ml-2 space-y-6">
        <li>
          <h4 className="mb-2 text-md font-semibold">
            <span className="underline">{feature.type === "core" ? "핵심" : "담당"}</span> 기능
          </h4>
          <ul className="space-y-2 text-sm">
            {feature.tasks.map((item, index) => (
              <li key={index} className="flex gap-2">
                • {item}
              </li>
            ))}
          </ul>
        </li>

        {feature.difficult && (
          <li>
            <h4 className="mb-2 text-md font-semibold">어려웠던 점</h4>
            <ul className="space-y-2">
              <li className="flex flex-col sm:flex-row gap-1 text-sm">
                <span className="w-18 shrink-0">[원인 파악]</span>
                {feature.difficult.problem}
              </li>
              <li className="flex flex-col sm:flex-row gap-1 text-sm">
                <span className="w-18 shrink-0">[해결]</span>
                {feature.difficult.solve}
              </li>
            </ul>
          </li>
        )}

        {feature.retrospect && (
          <li className="text-sm">
            <h4 className="mb-2 text-md font-semibold">회고</h4>
            {feature.retrospect}
          </li>
        )}
      </ul>
    </div>
  );
}
