const reportWebVitals = onPerfEntry => {
  if (onPerfEntry && typeof onPerfEntry === 'function') {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry); // Report Cumulative Layout Shift (CLS)
      getFID(onPerfEntry); // Report First Input Delay (FID)
      getFCP(onPerfEntry); // Report First Contentful Paint (FCP)
      getLCP(onPerfEntry); // Report Largest Contentful Paint (LCP)
      getTTFB(onPerfEntry); // Report Time to First Byte (TTFB)
    });
  }
};

export default reportWebVitals;
