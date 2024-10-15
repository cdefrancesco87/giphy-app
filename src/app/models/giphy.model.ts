/**
 * Represents the response from the Giphy API.
 */
export interface GiphyApiResponse {
  data: GifObject[];
  meta: Meta;
  pagination: Pagination;
}

/**
 * Represents a GIF object returned by the Giphy API.
 */
export interface GifObject {
  type: string;
  id: string;
  url: string;
  slug: string;
  bitly_gif_url: string;
  bitly_url: string;
  embed_url: string;
  username: string;
  source: string;
  title: string;
  rating: string;
  content_url: string;
  source_tld: string;
  source_post_url: string;
  is_sticker: number;
  import_datetime: string;
  trending_datetime: string;
  images: Images;
  user?: User;
  analytics_response_payload: string;
  analytics: Analytics;
  alt_text: string;
}

/**
 * Represents the different image formats available for a GIF.
 */
export interface Images {
  original: ImageFormat;
  downsized: ImageFormat;
  downsized_large: ImageFormat;
  downsized_medium: ImageFormat;
  downsized_small: VideoFormat;
  downsized_still: ImageFormat;
  fixed_height: ImageFormat;
  fixed_height_downsampled: ImageFormat;
  fixed_height_small: ImageFormat;
  fixed_height_small_still: ImageFormat;
  fixed_height_still: ImageFormat;
  fixed_width: ImageFormat;
  fixed_width_downsampled: ImageFormat;
  fixed_width_small: ImageFormat;
  fixed_width_small_still: ImageFormat;
  fixed_width_still: ImageFormat;
  looping: VideoFormat;
  original_still: ImageFormat;
  original_mp4: VideoFormat;
  preview: VideoFormat;
  preview_gif: ImageFormat;
  preview_webp: ImageFormat;
  '480w_still': ImageFormat;
}

/**
 * Represents the format of an image.
 */
export interface ImageFormat {
  url: string;
  width: string;
  height: string;
  size?: string;
}

/**
 * Represents the format of a video.
 */
export interface VideoFormat {
  mp4: string;
  mp4_size?: string;
  width: string;
  height: string;
}

/**
 * Represents a user on Giphy.
 */
interface User {
  avatar_url: string;
  banner_image: string;
  banner_url: string;
  profile_url: string;
  username: string;
  display_name: string;
  description: string;
  instagram_url: string;
  website_url: string;
  is_verified: boolean;
}

/**
 * Represents analytics information for a GIF.
 */
interface Analytics {
  onload: AnalyticsEvent;
  onclick: AnalyticsEvent;
  onsent: AnalyticsEvent;
}

/**
 * Represents an analytics event.
 */
interface AnalyticsEvent {
  url: string;
}

/**
 * Represents metadata about the Giphy API response.
 */
interface Meta {
  status: number;
  msg: string;
  response_id: string;
}

/**
 * Represents pagination information for the Giphy API response.
 */
export interface Pagination {
  total_count: number;
  count: number;
  offset: number;
}
