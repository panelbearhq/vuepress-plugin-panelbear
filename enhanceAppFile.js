export default ({ router }) => {
  if ((process.env.NODE_ENV === 'production' || PANELBEAR_DEBUG) && PANELBEAR_SITE && typeof window !== 'undefined') {
    (function (w, d) {
      // Start loading script
      const s = d.createElement('script');
      s.async = true;
      s.src = `https://cdn.panelbear.com/analytics.js?site=${PANELBEAR_SITE}`;
      d.head.appendChild(s);

      // Prepare local command queue
      w.panelbear =
        w.panelbear ||
        function () {
          (w.panelbear.q = w.panelbear.q || []).push(arguments);
        };
    })(window, document);

    // Config site and disable autotrack, we'll hook into the router
    panelbear('config', { site: PANELBEAR_SITE, autoTrack: false, debug: PANELBEAR_DEBUG });

    // Hook into the Vue router
    router.afterEach(function (to) {
      // In case we need to override the current full path use: router.app.$withBase(to.fullPath)
      panelbear('track', 'Pageview');
    });
  }
};
