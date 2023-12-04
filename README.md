# Bike Route Map

This is a single-page application which shows a map of (Metro) Vancouver with bike routes highlighted and relevant information/context, including videos when available.

![Screenshot](public/preview.png)

## Use

On GitHub Pages at [https://kr-matthews.github.io/bike-route-map](https://kr-matthews.github.io/bike-route-map).

## Features

### Current

- View bike routes on zoom-able map.
- Distinguish between certain types of bike route (standard, uncomfortable, elevated, underground, one-way, etc.).
- Select a route.
- View videos of selected route via embedded YouTube video (for most routes).
- Explanatory legend.

### Potential Future

See [enhancements](https://github.com/kr-matthews/bike-route-map/issues?q=is%3Aissue+is%3Aopen+label%3Aenhancement) on GitHub.

- More precise information about each segment (e.g. quiet local street, painted lane, physically separated lane, shared use path with pedestrians, etc.).

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
- There are 0 tests.
