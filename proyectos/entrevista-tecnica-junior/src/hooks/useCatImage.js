const API_RANDOM_IMAGE = 'https://cataas.com/cat/says/'
import axios from "axios";
import { useEffect, useState } from "react";

export const useCatImage = ({ fact }) => {
    const [image, setImage] = useState();

    useEffect(()=>{
    if(!fact) return 

    const firstWorld = fact.split(' ').slice(0, 1).join(' ')
    console.log(firstWorld);

    axios.get(`${API_RANDOM_IMAGE}${firstWorld}`)
    .then((response) => {
      const {config} = response
      const url = config.url
      setImage(url)
    })
    
  }, [fact]);

  return { image }
}