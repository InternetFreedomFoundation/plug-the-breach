export function formatDate(dateStr) {
  let breachDate;
  if (!dateStr) return 'Unconfirmed';

  const [day, month, year] = dateStr.split('/');
  const date = new Date(year, month - 1, day);
  const options = { day: 'numeric', month: 'long', year: 'numeric' };
  const formattedDate = date.toLocaleDateString('en-IN', options);
  return formattedDate;
}

export function formatUserCountInMillions(userCount) {
  if (!userCount) return 'Unconfirmed';
  if (userCount <= 1) return `${userCount} Million`;
  return `${userCount} Millions`;
}

export function formatBreachList(breaches) {
  return breaches.map((breach) => ({
    id: breach.id,
    company: breach.company,
    breachDate: formatDate(breach.breachDate),
    affectedUsersMn: formatUserCountInMillions(breach.affectedUsersMn),
  }));
}

/**
 * Maps the GraphQL array of objects to a new array of objects with simplified property
 * access by removing the need to include 'node' in the property path.
 * For instance, instead of '{{ breach.node.company }}', you can use '{{ breach.company }}'.
 */
export function mapEdgesToNodes(edges) {
  return edges.map((edge) => ({ ...edge.node }));
}
