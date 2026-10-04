import type { FunctionComponent } from "react";
import type { IImageProps } from "./interfaces/IImageProps";

/** Lazy by default. The page's largest image above the fold takes `loading="eager"` and `fetchPriority="high"`. */
export const Image: FunctionComponent<IImageProps> = ({
    src,
    alt,
    width,
    height,
    loading = "lazy",
    decoding = "async",
    ...imageProps
}) => <img {...imageProps} src={src} alt={alt} width={width} height={height} loading={loading} decoding={decoding} />;
