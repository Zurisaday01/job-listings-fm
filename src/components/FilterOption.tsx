import IMAGES from '../assets/images/Images';

const FilterOption = ({ label, onSelectOption }: FilterOptionProps) => {
	return (
		<div className='filter-option'>
			<span className='filter-option__label'>{label}</span>
			<button onClick={onSelectOption} className='filter-option__delete'>
				<img src={IMAGES.removeIcon} alt='Remove Icon' />
			</button>
		</div>
	);
};
export default FilterOption;
