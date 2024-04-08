import { useMediaQuery } from 'usehooks-ts';
import { Status } from './Status';
import Tag from './Tag';

const Job = ({
	company,
	logo,
	new: isNew,
	featured: isFeatured,
	position,
	role,
	level,
	postedAt,
	contract,
	location,
	languages,
	tools,
}: IJob) => {
	const desktop = useMediaQuery('(min-width: 1140px'); //  breakpoint

	return (
		<div className='job'>
			{!desktop && (
				<div className='job__image-container'>
					<img className='job__image' src={logo} alt={position} />
				</div>
			)}

			<div
				className={`job__wrapper ${
					isNew && isFeatured ? 'job__wrapper--highlighted' : ''
				}`}>
				<div className='job__header'>
					{desktop ? (
						<div className='job__header-wrapper'>
							<div className='job__image-container'>
								<img className='job__image' src={logo} alt={position} />
							</div>
							<div className='job__header-desktop'>
								<div className='job__company-detail'>
									<h2 className='heading heading--secondary'>{company}</h2>
									<div className='job__status'>
										<Status isNew={isNew}>New</Status>
										<Status isFeatured={isFeatured}>Featured</Status>
									</div>
								</div>
								<h3 className='heading heading--secondary u-text-black'>
									{position}
								</h3>
								<div className='job__details'>
									<span>{postedAt}</span> <span className='dot'></span>{' '}
									<span>{contract}</span> <span className='dot'></span>
									<span>{location}</span>
								</div>
							</div>
						</div>
					) : (
						<>
							<div className='job__company-detail'>
								<h2 className='heading heading--secondary'>{company}</h2>
								<div className='job__status'>
									<Status isNew={isNew}>New</Status>
									<Status isFeatured={isFeatured}>Featured</Status>
								</div>
							</div>
							<h3 className='heading heading--secondary u-text-black'>
								{position}
							</h3>
							<div className='job__details'>
								<span>{postedAt}</span> <span className='dot'></span>{' '}
								<span>{contract}</span> <span className='dot'></span>
								<span>{location}</span>
							</div>
						</>
					)}
				</div>
				<div className='job__body'>
					<Tag>{role}</Tag>
					<Tag>{level}</Tag>
					{tools.map((tool: string, index: number) => (
						<Tag key={index}>{tool}</Tag>
					))}
					{languages.map((language: string, index: number) => (
						<Tag key={index}>{language}</Tag>
					))}
				</div>
			</div>
		</div>
	);
};
export default Job;
