import { useEffect, useState } from "react";
import { get_gifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {
  const [images, setImages] = useState([]);
  const [is_loading, setIs_loading] = useState(true);

  const get_images = async () => {
    const new_images = await get_gifs(category);
    setImages(new_images);
    setIs_loading(false);
  };

  useEffect(() => {
    get_images();
  }, []);
  return {
    images,
    is_loading,
  };
};
