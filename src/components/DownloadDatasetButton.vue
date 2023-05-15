<template>
  <button class="inline-flex
                items-center
                gap-4
                rounded-full
                bg-zinc-800
                px-5
                py-3
                text-white
                shadow-lg
                shadow-black/10
                transition
                duration-200
                ease-in
                hover:bg-zinc-700
                hover:text-white
                hover:shadow-lg
                hover:shadow-black/40
                focus:bg-zinc-800
                focus:shadow-md
                focus:shadow-black/10
                focus:outline-none
                focus:outline-2
                focus:outline-offset-0
                focus:outline-white" type="button"
    @click="downloadDataset()">
    <Icon class="" type="download" size="20" />
    Download Dataset
  </button>
</template>

<static-query>
query Breaches{
 breaches: allBreach {
    edges {
      node {
        company
        breachDate
        affectedUsersMn
        details
        acknowledgement
        mediaCoverage
      }
    }
  }
}
</static-query>

<script>
import Papa from 'papaparse';

export default {
  name: 'DownloadDatasetButton',
  methods: {
    downloadDataset() {
      const data = this.$static.breaches.edges.map((edge) => ({
        Company: edge.node.company,
        'Breach Date': edge.node.breachDate,
        'Affected Users (in Million)': edge.node.affectedUsersMn,
        Details: edge.node.details,
        Acknowledgement: edge.node.acknowledgement,
        'Media Coverage': edge.node.mediaCoverage,
      }));
      const csv = Papa.unparse(data);
      const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      const date = new Date();
      const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
      const dateString = date.toLocaleDateString('en-IN', options).replace(/\//g, '-');
      const fileName = `PlugTheBreach Dataset - ${dateString}.csv`;
      link.setAttribute('download', fileName);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    },
  },
};
</script>
