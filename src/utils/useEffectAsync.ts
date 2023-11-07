import { useEffect, DependencyList } from "react";

export default function useEffectAsync(
  effect: () => any,
  deps?: DependencyList
) {
  useEffect(() => {
    effect();
  }, deps);
}
