import { createRevision } from "@/service/input-revision";
import { Dispatch, SetStateAction, useState } from "react";


/**
 * ステートが変わるたびに固有のIDをつける
 */
export default function useStateRev<S>(initialState: S | (() => S)): [S, Dispatch<SetStateAction<S>>, string] {
  const [state, setState] = useState(initialState)
  const [revision, setRevision] = useState(createRevision())

  const setWithRevision = (newState: SetStateAction<S>) => {
    setState(newState)
    setRevision(createRevision())
  }

  return [state, setWithRevision, revision]
}