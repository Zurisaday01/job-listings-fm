import Filter from './Filter';
import Header from './Header';
import JobList from './JobList';
import jobsData from '../assets/data/data.json';
import { generateIdFromString } from '../helpers';
import { useState } from 'react';

const Home = () => {
	const [options, setOptions] = useState<SelectOption[]>(() => {
		const languages = new Set(jobsData.map(job => job.languages).flat());

		const optionsData = [...languages].map(language => {
			return { label: language, value: generateIdFromString(language) };
		});

		return optionsData;
	});

	const [selectedValues, setSelectedValues] = useState<SelectOption[]>([]);

	const handleSelectedValues = (options: SelectOption[]) => {
		setSelectedValues(options);
	};

	return (
		<main className='home'>
			<Header />
			<div className='home__container'>
				<Filter
					options={options}
					setOptions={setOptions}
					selectedValues={selectedValues}
					onSelectedValues={handleSelectedValues}
					setSelectedValues={setSelectedValues}
				/>
				<JobList selectedValues={selectedValues} />
			</div>
		</main>
	);
};
export default Home;
