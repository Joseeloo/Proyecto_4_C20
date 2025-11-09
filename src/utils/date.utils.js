export const isValidDate = (dateStr) => {
  if (!dateStr || typeof dateStr !== 'string') return false;
  const regex = /^\d{4}-\d{2}-\d{2}$/;
  if (!regex.test(dateStr)) return false;
  const date = new Date(dateStr);
  if (Number.isNaN(date.getTime())) return false;
  const [y, m, d] = dateStr.split('-');
  return (
    date.getUTCFullYear() === Number(y) &&
    date.getUTCMonth() + 1 === Number(m) &&
    date.getUTCDate() === Number(d)
  );
};

export const parseDate = (dateStr) => {
  if (!isValidDate(dateStr)) return null;
  return new Date(dateStr + 'T00:00:00Z');
};

export const isWithinRange = (fechaReserva, inicio, fin) => {
  const d = parseDate(fechaReserva);
  const start = parseDate(inicio);
  const end = parseDate(fin);
  if (!d || !start || !end) return false;
  return d.getTime() >= start.getTime() && d.getTime() <= end.getTime();
};
