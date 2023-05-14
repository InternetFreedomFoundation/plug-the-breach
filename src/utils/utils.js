function formatDate(date) {
  const [day, month, year] = date.split('/');
  const dateObject = new Date(year, month - 1, day);
  const options = { day: 'numeric', month: 'long', year: 'numeric' };
  return dateObject.toLocaleDateString('en-IN', options);
}

function getDomainName(url) {
  return url.match(/^(?:https?:\/\/)?(?:www\.)?([^:\/\n?]+)/i)[1];
}

function formatDetails(str) {
  // Split the input string into an array of sentences using commas as the delimiter.
  const sentences = str.split(',');

  // Convert each sentence to sentence case and add bullet points and line breaks.
  const bulletPoints = sentences.map((sentence) => {
    // Capitalize the first letter of the sentence.
    const sentenceCase = sentence.trim().replace(/^\w/, (c) => c.toUpperCase());

    // Add a bullet point and line break to the sentence.
    return `• ${sentenceCase}<br>`;
  });

  // Combine all of the sentences into a single string.
  const formattedString = bulletPoints.join('');

  // Return the formatted string.
  return formattedString;
}

export function formatBreach(breach) {
  return {
    ...breach,
    breachDate: breach.breachDate ? formatDate(breach.breachDate) : 'UNCONFIRMED',
    affectedUsersMn: breach.affectedUsersMn ? `${breach.affectedUsersMn} Million` : 'UNCONFIRMED',
    details: breach.details ? formatDetails(breach.details) : 'UNAVAILABLE',
    acknowledgement: breach.acknowledgement ? breach.acknowledgement : 'UNCONFIRMED',
    mediaCoverage: breach.mediaCoverage ? getDomainName(breach.mediaCoverage) : 'UNAVAILABLE',
  };
}

export function formatBreachList(breaches) {
  return breaches.map((breach) => formatBreach(breach));
}

/**
 * Maps the GraphQL array of objects to a new array of objects with simplified property
 * access by removing the need to include 'node' in the property path.
 * For instance, instead of '{{ breach.node.company }}', you can use '{{ breach.company }}'.
 */
export function mapEdgesToNodes(edges) {
  return edges.map((edge) => ({ ...edge.node }));
}
