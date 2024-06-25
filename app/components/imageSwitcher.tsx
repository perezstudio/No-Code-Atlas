import React from "react";

interface ImageSwitcherProps {
  lightImgSrc: string;
  darkImgSrc?: string;
  altText: string;
}

const ImageSwitcher: React.FC<ImageSwitcherProps> = ({
  lightImgSrc,
  darkImgSrc,
  altText,
}) => {
  return (
	<div>
	  {darkImgSrc ? (
		<>
		  {/* Light mode image */}
		  <img
			src={`/${lightImgSrc}`}
			alt={altText}
			className="block dark:hidden"
		  />
		  {/* Dark mode image */}
		  <img
			src={`/${darkImgSrc}`}
			alt={altText}
			className="hidden dark:block"
		  />
		</>
	  ) : (
		<img src={lightImgSrc} alt={altText} className="block" />
	  )}
	</div>
  );
};

export default ImageSwitcher;
