<template>
  <div class="layout">
    <header class="p-8 bg-white-100 shadow-md h-107" id="header">
      <div
        class="container mx-auto px-4 flex flex-row justify-between left-0 top-0 bg-white"
        id="header-inner"
      >
        <div class="flex" id="header-logo">
          <p class="flex justify-center items-center">
            <g-link to="/">
              <!-- {{ $static.metadata.siteName }} -->
              <img src="../assets/ptb_logo.svg"></img>
            </g-link>
          </p>
        </div>
        <div class="flex flex-row" id="header-right">
          <p class="flex justify-center items-center">
            <g-link to="/blog/intro/">About</g-link>
          </p>

          <p class="flex justify-center items-center">
            <g-link to="/blog/tracker-methodology">Methodology</g-link>
          </p>

          <button class="open-tracker-btn">
            <g-link to="/tracker">Open Tracker</g-link>
          </button>
        </div>
      </div>
    </header>
    <main id="main">
      <div class="container mx-auto px-2 md:px-8">
        <slot />
      </div>
    </main>
    <footer class="flex lg:flex-row md:flex-col justify-center items-center">
      <div class="container mx-auto flex flex-row justify-between">
        <div>
          <h1>Plug The Breach</h1>
          <p>A project by the Internet Freedom Foundation</p>
        </div>
        <div>
          <h1>Quick Links</h1>
          <p>About Plug The Breach</p>
          <p>Tracker Methodology</p>
        </div>
        <div>
          <h1>Social Media</h1>
          <div class="container mx-auto flex flex-col">
            <p>Twitter</p>
            <p>Youtube</p>
            <p>Instagram</p>
            <p>Linkedin</p>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style>
body {
  font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif;
  margin: 0;
  padding: 0;
  line-height: 1.5;
  font-style: normal;
  font-family: "Space Grotesk";
}
#main {
  background: #eefdf8;
}
#header {
  min-width: 100%;
}
/* #header-inner {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
} */
#header-logo {
  min-width: 20%;
}
#header-right {
  min-width: 40%;
  justify-content: space-around;
  font-weight: 500;
  color: #236858;
  font-size: 22px;
}
/* p {
} */
.open-tracker-btn {
  display: flex;
  flex-direction: row;
  justify-content: center;
  color: #eefdf8;
  padding: 10px 20px 10px 20px;
  background: #033a2d;
  border-radius: 8px;
  font-weight: 500;
  max-width: 150px;
  cursor: pointer;
  font-size: 18px;
}

footer {
  height: 30vh;
}
</style>
