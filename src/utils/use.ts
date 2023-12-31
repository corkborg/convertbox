import { useEffect, DependencyList } from "react";

export function useEffectAsync(
  effect: () => any,
  deps?: DependencyList
) {
  useEffect(() => {
    effect();
  }, deps);
}