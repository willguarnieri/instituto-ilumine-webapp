/** Mirrors Angular date pipe: dd.MM and hh:mm (12h style as in original). */
export function formatPostDate(iso: string): { date: string; time: string } {
  const d = new Date(iso);
  const day = String(d.getDate()).padStart(2, '0');
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const hours = d.getHours();
  const minutes = String(d.getMinutes()).padStart(2, '0');
  const hh = String(hours).padStart(2, '0');
  return {
    date: `${day}.${month}`,
    time: `${hh}:${minutes}`,
  };
}
