
const DEFAULT_DATE_LOCALE = "en-US";
const DEFAULT_DATE_OPTIONS = {
  day: "numeric",
  month: "long"
};

export function formatDate(
  date,
  locale = DEFAULT_DATE_LOCALE,
  options = DEFAULT_DATE_OPTIONS
) {
  return new Date(date).toLocaleDateString(locale, options);
}
