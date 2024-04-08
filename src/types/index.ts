import { Dispatch, ReactNode, SetStateAction } from 'react';

declare global {
	interface SelectOption {
		label: string;
		value: string | number;
	}

	interface MultipleSelectProps {
		value?: SelectOption[];
		onChange: (value: SelectOption[]) => void;
	}

	interface FilterOptionProps {
		label: string;
		value: string | number;
		onSelectOption: (e: React.MouseEvent<HTMLElement>) => void;
	}

	export interface IJob {
		id: number;
		company: string;
		logo: string;
		new: boolean;
		featured: boolean;
		position: string;
		role: string;
		level: string;
		postedAt: string;
		contract: string;
		location: string;
		languages: string[];
		tools: string[];
	}

	interface FilterProps {
		selectedValues: SelectOption[];
		options: SelectOption[];
		setOptions: Dispatch<SetStateAction<SelectOption[]>>;
		onSelectedValues: (options: SelectOption[]) => void;
		setSelectedValues: Dispatch<SetStateAction<SelectOption[]>>;
	}

	interface OptionsListProps {
		isOpen: boolean;
		options: SelectOption[];
		onAddOption: (option: SelectOption) => void;
	}

	interface StatusProps {
		children: ReactNode;
		isNew?: boolean;
		isFeatured?: boolean;
	}

	interface TagProps {
		children: ReactNode;
	}

	interface ButtonProps {
		children: ReactNode;
		onClick: (e: React.MouseEvent<HTMLElement>) => void;
	}
}
