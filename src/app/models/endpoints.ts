// Base URL for the Giphy API
export const BASE_URL = 'https://api.giphy.com/v1';

// Endpoint path for GIFs
export const GIFS = '/gifs';

// Endpoint path for Stickers
export const STICKERS = '/stickers';

// Object containing various Giphy API endpoints
export const ENDPOINTS = {
  SEARCH_GIFS: `${BASE_URL}${GIFS}/search`, // https://api.giphy.com/v1/gifs/search
  SEARCH_STICKERS: `${BASE_URL}${STICKERS}/search`, // https://api.giphy.com/v1/stickers/search
  TRENDING_GIFS: `${BASE_URL}${GIFS}/trending`, // https://api.giphy.com/v1/gifs/trending
  TRENDING_STICKERS: `${BASE_URL}${STICKERS}/trending`, // https://api.giphy.com/v1/stickers/trending
  GIF_BY_ID: `${BASE_URL}${GIFS}/`, // https://api.giphy.com/v1/gifs/<gif_id>
  STICKER_BY_ID: `${BASE_URL}${STICKERS}`, // https://api.giphy.com/v1/stickers/<sticker_id>
};
