

    export const getGifs = async( category ) => {
      const url = `https://api.giphy.com/v1/gifs/search?api_key=keV3d0MLyiV5YTCME0xHQTUFgsdaRLK0&q=${ category }&limit=20`;
      const resp = await fetch( url);
      const { data } = await resp.json();

      const gifs = data.map ( img => ({
        id: img.id,
        title:img.title,
        url: img.images.downsized_medium.url
      }))

      

      return(gifs);
    }