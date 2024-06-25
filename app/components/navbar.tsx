import React from 'react';
import ImageSwitcher from "~/components/imageSwitcher";

const Navbar: React.FC = () => {
	return(
		<nav className="p-6">
			<ImageSwitcher lightImgSrc="brand_logo.svg" altText="No Code Atlas Brand Logo" />
		</nav>
	);
};

export default Navbar;