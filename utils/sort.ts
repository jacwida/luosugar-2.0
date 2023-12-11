export function sortByDate(a: { date: string }, b: { date: string }): number {
  return new Date(b.date).getTime() - new Date(a.date).getTime();
}
