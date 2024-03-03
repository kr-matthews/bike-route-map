# Bike Route Map

This is a single-page application which shows a map of (Metro) Vancouver with bike routes highlighted and relevant information/context, including videos when available.

![Screenshot](public/preview.png)

## Use

On GitHub Pages at [https://kr-matthews.github.io/bike-route-map](https://kr-matthews.github.io/bike-route-map).

## Features

### Current

- Map of bike routes in Vancouver and many adjacent regions.
- Ability to zoom in (unlike many official city PDF maps).
- See exactly which segments are two-way and which are one-way.
- Distinguish between types of bike infrastructure (physically separated, quiet street, painted lane, shared lane, highway shoulder).
- Bridges and tunnels/undercover routes visually distinct.
- Select a route to see information (including distance and proportions of infrastructure), and embedded YouTube video(s) when available.
- Explanatory legend.
- Filter by infrastructure type (physically separated, painted, etc.) and/or by existence of a video.

### Potential Future

See [enhancements](https://github.com/kr-matthews/bike-route-map/issues?q=is%3Aissue+is%3Aopen+label%3Aenhancement) on GitHub.

- More routes in surrounding cities/areas.

## Original Intentions

Quick, clean, and simple implementation of a map with an easy-to-use data layer on top. Something of practical use to someone cycling in and around Vancouver.

## Focus

- Separation of data and logic.
- Clean code.
- Avoiding perfection when drawing out routes - add just enough to prevent any ambiguity or potential confusion.

## Flaws

See the [issues](https://github.com/kr-matthews/bike-route-map/issues) on GitHub, in addition to the following:

- UI is far from perfect, and potentially unintuitive in places.
- Data is all hard-coded into the frontend, rather than utilizing some sort of database.
- There are not enough tests.
- Unclear when an area has additional bike routes but they just haven't been added to this map (yet).
- Data can easily get out-of-date.
