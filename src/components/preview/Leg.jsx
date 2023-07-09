const directions = ["eastbound", "westbound", "northbound", "southbound"];

// !!! allow selection of video, show corresponding segments on map
export default function Leg({ leg }) {
  return (
    <>
      {leg.name && <h3>{leg.name}</h3>}
      <div style={{ display: "flex" }}>
        {directions.map(
          (direction) =>
            leg.videos[direction] && (
              <span key={direction}>
                <h4 style={{ textTransform: "capitalize" }}>{direction}</h4>
                <div>
                  <iframe
                    width="300px"
                    height="220px"
                    src={leg.videos[direction]}
                    // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Embedded youtube"
                  />
                </div>
              </span>
            )
        )}
      </div>
    </>
  );
}
