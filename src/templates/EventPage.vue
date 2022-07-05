<template>
  <Layout>
    <main class="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
      <div class="sm:text-left lg:text-left">
        <p
          class="py-4 text-4xl underline tracking-tight leading-10 font-extrabold text-emerald-900 sm:leading-none"
        >{{ $page.eventPage.company }}</p>
        <p
          class="text-2xl font-bold text-emerald-900 opacity-75"
        >Breach Size : {{ $page.eventPage.affectedMn }} Million Users</p>
        <div class="py-12 mx-auto max-w-4xl">
          <div class="p-3 bg-white border border-gray shadow-2xl overflow-hidden sm:rounded-lg">
            <div class="px-4 py-5 border-b border-gray-200 sm:px-6">
              <h3 class="text-lg leading-6 text-gray-900">Website Scan Results</h3>
              <p
                class="mt-1 max-w-2xl text-sm leading-5 text-emerald-900 underline"
              >{{ $page.eventPage.company }}</p>
            </div>
            <div>
              <dl>
                <div class="mt-2 bg-emerald-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt class="text-sm leading-5 font-medium text-gray-500">Name</dt>
                  <dd
                    class="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2"
                  >{{ $page.eventPage.company }}</dd>
                </div>
                <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt class="text-sm leading-5 font-medium text-gray-500">Wesbite address</dt>
                  <dd class="mt-1 text-sm leading-5 text-emerald-900 sm:mt-0 sm:col-span-2">
                    <a :href="$page.eventPage.website">{{$page.eventPage.website}}</a>
                  </dd>
                </div>
                <div class="bg-emerald-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt class="text-sm leading-5 font-medium text-gray-500">Valid HTTPS</dt>
                  <dd
                    class="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2"
                  >{{ $page.eventPage.date}}</dd>
                </div>

                <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt class="text-sm leading-5 font-medium text-gray-500">Available over HTTPS</dt>
                  <dd
                    class="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2"
                  >{{ $page.eventPage.id }}</dd>
                </div>
                <div class="bg-emerald-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt class="text-sm leading-5 font-medium text-gray-500">Defaults to HTTPS</dt>
                  <dd
                    class="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2"
                  >{{ $page.eventPage.date }}</dd>
                </div>
                <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt class="text-sm leading-5 font-medium text-gray-500">Valid HTTPS</dt>
                  <dd
                    class="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2"
                  >{{ $page.eventPage.path}}</dd>
                </div>
                <div class="bg-emerald-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt
                    class="text-sm leading-5 font-medium text-gray-500"
                  >Strict Transport Security (HSTS)</dt>
                  <dd
                    class="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2"
                  >{{ $page.eventPage.status}}</dd>
                </div>
                <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt
                    class="text-sm leading-5 font-medium text-gray-500"
                  >Strict Transport Security (HSTS) max-age over 18 weeks</dt>
                  <dd
                    class="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2"
                  >{{ $page.eventPage.status }}</dd>
                </div>
                <div class="bg-emerald-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt class="text-sm leading-5 font-medium text-gray-500">HSTS Preload-Ready</dt>
                  <dd
                    class="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2"
                  >{{ $page.eventPage.status }}</dd>
                </div>
              </dl>
            </div>
            <div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
              <div class="rounded-md shadow">
                <a
                  class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-emerald-800 hover:bg-emerald-900 focus:outline-none focus:border-emerald-800 focus:shadow-outline-emerald transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
                  target="_blank"
                  rel="noopener"
                  :href="$page.eventPage.website"
                >Visit Website</a>
              </div>
              <div class="mt-3 sm:mt-0 sm:ml-3">
                <g-link
                  class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-emerald-700 bg-emerald-100 hover:text-emerald-600 hover:bg-emerald-50 focus:outline-none focus:shadow-outline-emerald focus:border-emerald-300 transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
                  to="/tracker"
                >All Sites</g-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </Layout>
</template>

<page-query>
query ($id: ID!) {
  eventPage(id: $id) {
        id
        date
        notes
        status
        path
        company
        affectedMn
        website
        source
  }
}
</page-query>