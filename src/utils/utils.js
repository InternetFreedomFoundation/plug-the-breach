function formatDate(date) {
  let day;
  let month;
  let year;

  const dateParts = date.split('/');
  if (dateParts.length === 3) {
    day = parseInt(dateParts[0], 10);
    month = parseInt(dateParts[1], 10);
    year = parseInt(dateParts[2], 10);
  } else if (dateParts.length === 2) {
    month = parseInt(dateParts[0], 10);
    year = parseInt(dateParts[1], 10);
  } else {
    year = parseInt(dateParts, 10);
  }

  let dateObject;
  let dateString;

  if (day && month && year) {
    dateObject = new Date(year, month - 1, day);
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    dateString = dateObject.toLocaleDateString('en-IN', options);
  } else if (month && year) {
    dateObject = new Date(year, month - 1);
    const options = { month: 'long', year: 'numeric' };
    dateString = dateObject.toLocaleDateString('en-IN', options);
  } else if (year) {
    dateObject = new Date(year, 0);
    const options = { year: 'numeric' };
    dateString = dateObject.toLocaleDateString('en-IN', options);
  } else {
    dateObject = null;
    dateString = 'Invalid date';
  }

  return {
    dateString,
    dateObject,
  };
}

function getDomainName(url) {
  // eslint-disable-next-line no-useless-escape
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
    company: breach.company ? breach.company : 'UNAVAILABLE',
    breachDate: breach.breachDate ? formatDate(breach.breachDate).dateString : 'NOT DISCLOSED',
    affectedUsersMn: breach.affectedUsersMn ? `${breach.affectedUsersMn} Million` : 'NOT DISCLOSED',
    details: breach.details ? formatDetails(breach.details) : 'NOT DISCLOSED',
    acknowledgement: breach.acknowledgement ? breach.acknowledgement : 'NOT DISCLOSED',
    noticeStatement: breach.noticeStatement ? breach.noticeStatement : 'NOT DISCLOSED',
    grievanceRedressal: breach.grievanceRedressal ? breach.grievanceRedressal : 'NOT DISCLOSED',
    mediaCoverage: breach.mediaCoverage ? getDomainName(breach.mediaCoverage) : 'NOT DISCLOSED',
  };
}

export function formatBreachList(breaches, sortKey = 'breachDate', sortOrder = 'desc', limit = Infinity) {
  const sortedBreaches = [...breaches];

  switch (sortKey) {
    case 'company':
      sortedBreaches.sort((a, b) => {
        const companyA = a.company ? a.company.toLowerCase() : '';
        const companyB = b.company ? b.company.toLowerCase() : '';

        if (sortOrder === 'asc') return companyA.localeCompare(companyB);
        if (sortOrder === 'desc') return companyB.localeCompare(companyA);
        return companyA.localeCompare(companyB);
      });
      break;

    case 'breachDate':
      sortedBreaches.sort((a, b) => {
        const breachDateA = a.breachDate ? formatDate(a.breachDate).dateObject : null;
        const breachDateB = b.breachDate ? formatDate(b.breachDate).dateObject : null;

        if (!breachDateA && !breachDateB) return 0;
        if (!breachDateA) return 1;
        if (!breachDateB) return -1;

        if (sortOrder === 'asc') return breachDateA - breachDateB;
        if (sortOrder === 'desc') return breachDateB - breachDateA;
        return breachDateA - breachDateB;
      });
      break;

    default:
      break;
  }

  if (limit !== Infinity) {
    return sortedBreaches.slice(0, limit).map((breach) => formatBreach(breach));
  }

  return sortedBreaches.map((breach) => formatBreach(breach));
}

/**
 * Maps the GraphQL array of objects to a new array of objects with simplified property
 * access by removing the need to include 'node' in the property path.
 * For instance, instead of '{{ breach.node.company }}', you can use '{{ breach.company }}'.
 */
export function mapEdgesToNodes(edges) {
  return edges.map((edge) => ({ ...edge.node }));
}
