export function pluralize(count: number, singular: string, plural: string) {
	const intl = new Intl.PluralRules('en', { type: 'cardinal' });
	const pluralForm = intl.select(count);
	return pluralForm === 'one' ? singular : plural;
}
