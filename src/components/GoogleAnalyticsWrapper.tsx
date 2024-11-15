'use client'

import { GoogleAnalytics } from "nextjs-google-analytics";

export default function GoogleAnalyticsWrapper() {
  return <GoogleAnalytics trackPageViews />;
} 