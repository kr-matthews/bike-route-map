import { Fragment, useContext } from "react";
import { Pane, TileLayer } from "react-leaflet";
import { TILE_LAYERS } from "../../utils/map";
import { SettingContext } from "../../App";

export default function PanesAndTiles() {
  const { tileLayerKey } = useContext(SettingContext);

  return (
    <Fragment>
      <Pane name="elevated-2" style={{ zIndex: 334 }} />
      <Pane name="elevated-2-arrow" style={{ zIndex: 333 }} />
      <Pane name="elevated-2-adj" style={{ zIndex: 332 }} />
      <Pane name="elevated-2-adj-arrow" style={{ zIndex: 331 }} />
      <Pane name="elevated-2-border" style={{ zIndex: 330 }} />
      <Pane name="elevated-1" style={{ zIndex: 324 }} />
      <Pane name="elevated-1-arrow" style={{ zIndex: 323 }} />
      <Pane name="elevated-1-adj" style={{ zIndex: 322 }} />
      <Pane name="elevated-1-adj-arrow" style={{ zIndex: 321 }} />
      <Pane name="elevated-1-border" style={{ zIndex: 320 }} />
      <Pane name="shared" style={{ zIndex: 313 }} />
      <Pane name="shared-arrow" style={{ zIndex: 312 }} />
      <Pane name="solo" style={{ zIndex: 311 }} />
      <Pane name="solo-arrow" style={{ zIndex: 310 }} />
      <Pane name="underground-1-border" style={{ zIndex: 304 }} />
      <Pane name="underground-1" style={{ zIndex: 303 }} />
      <Pane name="underground-1-arrow" style={{ zIndex: 302 }} />
      <Pane name="underground-1-adj" style={{ zIndex: 301 }} />
      <Pane name="underground-1-adj-arrow" style={{ zIndex: 300 }} />
      <Pane name="location" style={{ zIndex: 299 }} />

      <TileLayer
        attribution={TILE_LAYERS[tileLayerKey].attribution}
        url={TILE_LAYERS[tileLayerKey].url}
      />
    </Fragment>
  );
}
