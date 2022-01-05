function getDate(date: string) {
	return new Date(date);
}

export function getDateDay(date: string) {
	const d = `${getDate(date).getUTCDate()}`;
	if (d.length === 1) return `0${d}`;
	return d;
}

export function getDateMonth(date: string) {
	const d = `${getDate(date).getMonth() + 1}`;
	if (d.length === 1) return `0${d}`;
	return d;
}
