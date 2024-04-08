import { useEffect, useRef, useState } from 'react';
import FilterOption from './FilterOption';
import OptionsList from './OptionsList';
import Button from './Button';

const Filter = ({
	selectedValues,
	onSelectedValues,
	options,
	setOptions,
	setSelectedValues,
}: FilterProps) => {
	// check if the options are shown or not
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const filterRef = useRef<null | HTMLDivElement>(null);
	//filter(option => !selectedValues.includes(option))

	const selectOption = (option: SelectOption) => {
		if (!selectedValues.includes(option)) {
			//add the new option to the selected options
			onSelectedValues([...selectedValues, option]);
			// then remove it from the posible options
			setOptions((prevOptions: SelectOption[]) =>
				prevOptions.filter(o => o.value !== option.value)
			);
		} else {
			// delete the option from the selected options
			onSelectedValues(selectedValues.filter(o => o.value !== option.value));
			// add it to the posible options
			setOptions((prevOptions: SelectOption[]) => [...prevOptions, option]);
		}
	};

	useEffect(() => {
		const handler = (e: KeyboardEvent) => {
			if (e.target != filterRef.current) return;

			if (e.code == 'Enter') {
				setIsOpen(prev => !prev);
			}
		};
		filterRef.current?.addEventListener('keydown', handler);

		return () => {
			filterRef.current?.removeEventListener('keydown', handler);
		};
	}, [isOpen, options]);

	const handleClear = (e: React.MouseEvent<HTMLElement>) => {
		e.stopPropagation();
		// pass all the selected options to the posible options

		// // make a copy of the options
		setOptions(prevOptions => [...prevOptions, ...selectedValues]);

		// clear the selected options
		setSelectedValues([]);
	};

	const handleAddOptionFromList = (option: SelectOption) => {
		selectOption(option);
		setIsOpen(false);
	};

	return (
		<div className='filter-container'>
			<div
				className='filter'
				ref={filterRef}
				onBlur={() => setIsOpen(false)}
				onClick={() => setIsOpen(prev => !prev)}
				tabIndex={0}>
				<div className='filter__tags'>
					{selectedValues.map(option => (
						<FilterOption
							key={option.value}
							label={option.label}
							value={option.value}
							onSelectOption={(e: React.MouseEvent<HTMLElement>) => {
								e.stopPropagation();
								selectOption(option);
							}}
						/>
					))}
				</div>
				<Button onClick={handleClear}>Clear</Button>
			</div>
			<OptionsList
				isOpen={isOpen}
				options={options}
				onAddOption={handleAddOptionFromList}
			/>
		</div>
	);
};
export default Filter;
