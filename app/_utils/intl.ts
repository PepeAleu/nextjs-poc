import { siteMetadata } from "../_data/siteMetadata";

export function pluralize(count: number, singular: string, plural: string) {
	const intl = new Intl.PluralRules(siteMetadata.language, {
		type: "cardinal",
	});
	const pluralForm = intl.select(count);
	return pluralForm === "one" ? singular : plural;
}
