import { Fragment } from "react";
import { Pane, TileLayer } from "react-leaflet";
import { TILE_LAYER } from "../../utils/map";

export default function PanesAndTiles() {
  return (
    <Fragment>
      <Pane name="elevated-2" style={{ zIndex: 311 }} />
      <Pane name="elevated-2-adj" style={{ zIndex: 310 }} />
      <Pane name="elevated-2-border" style={{ zIndex: 309 }} />
      <Pane name="elevated-1" style={{ zIndex: 308 }} />
      <Pane name="elevated-1-adj" style={{ zIndex: 307 }} />
      <Pane name="elevated-1-border" style={{ zIndex: 306 }} />
      <Pane name="shared" style={{ zIndex: 305 }} />
      <Pane name="solo" style={{ zIndex: 304 }} />
      <Pane name="underground-1-border" style={{ zIndex: 303 }} />
      <Pane name="underground-1" style={{ zIndex: 301 }} />
      <Pane name="underground-1-adj" style={{ zIndex: 300 }} />

      <TileLayer attribution={TILE_LAYER.attribution} url={TILE_LAYER.url} />
    </Fragment>
  );
}
