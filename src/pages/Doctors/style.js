import styled from 'styled-components';

export const BookCard = styled.div `
	padding: 1rem;
	margin: 1rem 0;
	border-radius: 10px;
	background-color: var(--bs-white);
	box-shadow: 1px 1px 5px var(--border);
	.Title {
		font-weight: 600;
		line-height: 1;
		font-size: 1.125rem;
		color: var(--bs-dark);
		margin-bottom: 0;
	}
	.Subtitle {
		font-size: 0.875rem;
		color: var(--bs-secondary);
	}
`;

export const CalenderView = styled.div `
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: center;
	margin-top: 0.5rem;
`;

export const SingleDate = styled.div `
	border: 0;
	width: 50px;
	display: flex;
	flex-shrink: 0;
	text-align: center;
	align-items: center;
	font-size: 0.875rem;
	flex-direction: column;
	margin: 0.75rem 0.25rem;
	justify-content: center;
	padding: 7px;
	border-radius: 3px;
	background-color: var(--bs-white);
	.Week {
		line-height: 1.15;
	}
	.Date {
		font-size: 1rem !important;
		display: inline-flex;
		justify-content: center;
		align-items: center;
		line-height: 1;
		width: 35px;
		height: 35px;
		color: var(--bs-secondary);
		padding: 0.35rem;
		border-radius: 50%;
		font-family: monospace;
	}
	.Month {
		line-height: 1;
	}
	&.selected {
		font-weight: 600;
		color: var(--bs-primary);
		background-color: var(--bs-white);
		.Date {
			color: var(--bs-white);
			background: var(--bs-primary);
		}
	}
	&:hover {
		cursor: pointer;
		.Date {
			border: 1px solid var(--border);
		}
	}
	/* @media (min-width: 1400px) {
		width: 72px;
	}
	@media (min-width: 1200px) and (max-width: 1399px) {
		width: 62px;
	}
	@media (min-width: 769px) and (max-width: 991px) {
		width: 58px;
	}
	@media (max-width: 768px) {
		width: 35px;
		font-size: 0.975rem;
	}
	@media (max-width: 575px) {
		width: 38px;
		font-size: 0.975rem;
	}
	@media (max-width: 549px) {
		width: 35px;
		font-size: 0.975rem;
	} */
	@media (max-width: 425px) {
		width: 30px;
	}
	/* @media (max-width: 375px) {
		width: 30px;
		font-size: 0.775rem;
	} */
`;

export const SlotView = styled.div `
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	margin-top: 0.5rem;
`;

export const SingleSlot = styled.div `
	flex: calc(33.33% - 0.5rem);
	flex-grow: 0;
	display: flex;
	margin: 0.25rem;
	padding: 0.5rem;
	align-items: center;
	border-radius: 0.5rem;
	justify-content: center;
	border: 1px solid transparent;
	&.selected {
		border: 1px solid var(--bs-primary);
	}
	&:hover {
		cursor: pointer;
		transform: scale(1.025);
		&:not(.selected) {
			border: 1px solid var(--border);
		}
	}
	@media (max-width: 575px) {
		flex: calc(50% - 0.5rem);
	}
	@media (max-width: 410px) {
		flex: calc(100% - 0.5rem);
	}
`;