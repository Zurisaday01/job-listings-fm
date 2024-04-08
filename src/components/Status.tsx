export const Status = ({ children, isNew, isFeatured }: StatusProps) => {
	if (isNew) {
		return (
			<div className='status status--new'>
				{children}
				{isNew && '!'}
			</div>
		);
	}

	if (isFeatured) {
		return (
			<div className='status status--featured'>
				{children}
				{isNew && '!'}
			</div>
		);
	}

	return null;
};
