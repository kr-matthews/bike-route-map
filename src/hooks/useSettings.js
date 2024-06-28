import { DEFAULT_TILE_LAYER } from "../utils/map";
import useSavedState from "./useSavedState";

const DEFAULT_VIDEO_SPEED = 4;

export default function useSettings() {
  // tiles

  const [tileLayerKey, setTileLayerKey] = useSavedState(
    "tile_layer",
    DEFAULT_TILE_LAYER
  );

  // videos

  const [defaultSpeed, setDefaultSpeed] = useSavedState(
    "video_speed",
    DEFAULT_VIDEO_SPEED
  );
  return {
    tileLayerKey,
    setTileLayerKey,
    defaultSpeed,
    setDefaultSpeed,
  };
}
