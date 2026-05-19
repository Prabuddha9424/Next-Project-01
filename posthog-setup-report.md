<wizard-report>
# PostHog post-wizard report

The wizard has completed a deep integration of your project. PostHog analytics has been wired into the Dev Event Next.js app with client-side initialization via `instrumentation-client.ts`, a reverse proxy configured in `next.config.ts`, and event capture added to three key user interaction points. Exception tracking is enabled globally via `capture_exceptions: true`.

| Event Name | Description | File |
|---|---|---|
| `explore_events_clicked` | User clicked the 'Explore Events' CTA button on the home page | `app/components/ExploreButton.tsx` |
| `event_card_clicked` | User clicked on an event card to view event details (captures title, slug, location, date) | `app/components/EventCard.tsx` |
| `nav_link_clicked` | User clicked a navigation link in the navbar (captures label, href) | `app/components/Navbar.tsx` |

## Next steps

We've built some insights and a dashboard for you to keep an eye on user behavior, based on the events we just instrumented:

- [Analytics basics dashboard](/dashboard/1601768)
- [Explore Events Button Clicks](/insights/F9YZWok6) — daily trend of CTA clicks
- [Event Card Clicks Over Time](/insights/oPy0B8UC) — daily trend of event detail views
- [Nav Link Clicks by Label](/insights/qiuH5LPO) — bar chart of which nav links get the most clicks
- [Home to Event Discovery Funnel](/insights/MsWRX1D3) — conversion from CTA click to event card click
- [Top Clicked Events](/insights/jBUXV5ht) — which event listings attract the most interest

### Agent skill

We've left an agent skill folder in your project. You can use this context for further agent development when using Claude Code. This will help ensure the model provides the most up-to-date approaches for integrating PostHog.

</wizard-report>
