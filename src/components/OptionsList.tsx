const OptionsList = ({ isOpen, options, onAddOption }: OptionsListProps) => {
	return (
		<ul className={`options ${!isOpen ? 'hide' : ''}`}>
			{options.map(option => (
				<li
					className={`options__option`}
					onClick={(e: React.MouseEvent<HTMLElement>) => {
						e.stopPropagation();
						onAddOption(option);
					}}
					key={option.value}>
					{option.label}
				</li>
			))}
		</ul>
	);
};

export default OptionsList;
