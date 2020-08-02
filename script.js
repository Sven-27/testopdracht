mapboxgl.accessToken =
  "pk.eyJ1Ijoibm9vdHRpZSIsImEiOiJjazhlam1mbzYwMGhnM2hteDBqYmY3MjhrIn0.kCQAOHIeU4KMP4jE9B8AAg";

var map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/streets-v11",
  zoom: 6, // starting zoom
  center: {
    lng: 5.481366255741932,
    lat: 52.32616029382132,
  },
});

let prognose_years = [2020, 2025, 2030, 2035, 2040];

