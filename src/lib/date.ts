type DateStyle = Intl.DateTimeFormatOptions['dateStyle']

export function formatDate(date: string, dateStyle: DateStyle = 'full', locales = 'id') {
    const formater = new Intl.DateTimeFormat(locales, {dateStyle})
    return formater.format(new Date(date))
}