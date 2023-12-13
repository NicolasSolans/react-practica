import { useEffect, useState } from "react"
import { getNewFact } from "./getNewFact";

export const useCatFact = () => {
    const [fact, setFact] = useState();

    const refreshCat = () => {
      getNewFact().then(newFact => setFact(newFact))
    }

    useEffect(refreshCat, [])

  return { fact, refreshCat }
}