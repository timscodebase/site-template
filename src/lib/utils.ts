type DateStyle = Intl.DateTimeFormatOptions['dateStyle']

export const formatDate = (date: string, dateStyle: DateStyle = 'medium', locales = 'en') => {
	// Safari is mad about dashes in the date
	const dateToFormat = new Date(date.replaceAll('-', '/'))
	const dateFormatter = new Intl.DateTimeFormat(locales, { dateStyle })
	return dateFormatter.format(dateToFormat)
}

export const slugify = (text: string) => {
	return text
		.toString()
		.trim()
		.toLowerCase()
		.replace(/\s+/g, '-')
		.replace(/[^\w-]+/g, '')
		.replace(/--+/g, '-')
		.replace(/^-+/, '')
		.replace(/-+$/, '')
}
