import jobs from '../assets/data/data.json';
import Job from './Job';

const JobList = ({ selectedValues }: { selectedValues: SelectOption[] }) => {
	const arrayOfValue: string[] = selectedValues.map(value => value.label);

	const filteredJobs = jobs.filter(j =>
		j.languages.some(language => arrayOfValue.includes(language))
	);

	return (
		<div className='job-list'>
			{arrayOfValue.length > 0
				? filteredJobs.map((job: IJob) => <Job key={job.id} {...job} />)
				: jobs.map((job: IJob) => <Job key={job.id} {...job} />)}
		</div>
	);
};
export default JobList;
