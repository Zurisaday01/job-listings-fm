import IMAGES from '../assets/images/Images';
import { useMediaQuery } from '../hooks/useMediaQuery';

const Header = () => {
	const desktop = useMediaQuery('(min-width: 800px)'); // large breakpoint

	return (
		<header className='header'>
			<img
				className='header__image'
				src={desktop ? IMAGES.bgHeaderDesktop : IMAGES.bgHeaderMobile}
				alt='background'
			/>
		</header>
	);
};
export default Header;
