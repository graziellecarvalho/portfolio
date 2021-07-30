import { ImageProps } from '@/typings/ImageProps';

/**
 * Return formatted image data
 * @param data Image data from API. It can be from ACF Image field or ImageObject class.
 * @param thumbSize Name of the thumb size to use. The full is returned if the required size is not found.
 */
export function formatImageData(data, thumbSize): ImageProps {
	if (data && data.sizes) {
		const hasThumb = thumbSize && data.sizes && data.sizes.hasOwnProperty(thumbSize);

		// ACF Image Field data
		if (data.hasOwnProperty('ID')) {
			return {
				src: hasThumb ? data.sizes[thumbSize] : data.url,
				alt: data.alt,
				width: hasThumb ? data.sizes[`${thumbSize}-width`] : data.width,
				height: hasThumb ? data.sizes[`${thumbSize}-height`] : data.height,
			};
		}

		// ImageObject data
		else {
			return {
				src: hasThumb ? data.sizes[thumbSize].url : data.url,
				alt: data.alt,
				width: hasThumb ? data.sizes[thumbSize].width : data.width,
				height: hasThumb ? data.sizes[thumbSize].height : data.height,
			};
		}
	} else {
		return null;
	}
}
