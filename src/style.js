export const style = {
  version: 8,
  name: "Monochrome",
  metadata: {
    "mapbox:type": "default",
    "mapbox:origin": "monochrome-dark-v1",
    "mapbox:autocomposite": true,
    "mapbox:groups": {
      "Transit, transit-labels": {
        name: "Transit, transit-labels",
        collapsed: false
      },
      "Administrative boundaries, admin": {
        name: "Administrative boundaries, admin",
        collapsed: false
      },
      "Land & water, built": {
        name: "Land & water, built",
        collapsed: false
      },
      "Transit, bridges": { name: "Transit, bridges", collapsed: false },
      "Transit, surface": { name: "Transit, surface", collapsed: false },
      "Road network, bridges": {
        name: "Road network, bridges",
        collapsed: false
      },
      "Road network, tunnels": {
        name: "Road network, tunnels",
        collapsed: false
      },
      "Road network, road-labels": {
        name: "Road network, road-labels",
        collapsed: false
      },
      "Buildings, built": { name: "Buildings, built", collapsed: false },
      "Natural features, natural-labels": {
        name: "Natural features, natural-labels",
        collapsed: false
      },
      "Road network, surface": {
        name: "Road network, surface",
        collapsed: false
      },
      "Road network, bridges-2": {
        name: "Road network, bridges-2",
        collapsed: false
      },
      "Place labels, place-labels": {
        name: "Place labels, place-labels",
        collapsed: false
      },
      "Road network, surface-case": {
        name: "Road network, surface-case",
        collapsed: false
      },
      "Point of interest labels, poi-labels": {
        name: "Point of interest labels, poi-labels",
        collapsed: false
      },
      "Road network, tunnels-case": {
        name: "Road network, tunnels-case",
        collapsed: false
      },
      "Road network, bridges-case": {
        name: "Road network, bridges-case",
        collapsed: false
      },
      "Transit, built": { name: "Transit, built", collapsed: false },
      "Road network, surface-icons": {
        name: "Road network, surface-icons",
        collapsed: false
      },
      "Land & water, land-and-water": {
        name: "Land & water, land-and-water",
        collapsed: false
      }
    },
    "mapbox:sdk-support": {
      js: "1.6.0",
      android: "7.4.0",
      ios: "4.11.0"
    },
    "mapbox:uiParadigm": "layers",
    "mapbox:decompiler": {
      id: "ck4skvfdt4noq1co2t468d50p",
      componentVersion: "0.4.1",
      propConfig: {
        buildings: {
          "color-base": "hsl(185, 5%, 97%)",
          houseNumbers: false
        },
        "land-and-water": {
          "color-base": "hsl(185, 5%, 97%)",
          transitionLandOnZoom: false
        },
        "natural-features": {
          "color-base": "hsl(185, 5%, 97%)",
          labelStyle: "Text only",
          density: 1
        },
        "point-of-interest-labels": {
          "color-base": "hsl(185, 5%, 97%)",
          labelStyle: "Text only",
          density: 1
        },
        "road-network": {
          "color-base": "hsl(185, 5%, 97%)",
          exits: false,
          railwayCrossings: false,
          oneWayArrows: false,
          polygonFeatures: false,
          shields: false,
          "icon-color-scheme": "monochrome"
        },
        "admin-boundaries": { "color-base": "hsl(185, 5%, 97%)" },
        "place-labels": { "color-base": "hsl(185, 5%, 97%)" },
        transit: {
          "color-base": "hsl(185, 5%, 97%)",
          aerialways: false,
          ferries: false,
          transitLabels: false,
          railwayStyle: "Solid",
          "icon-color-scheme": "monochrome"
        }
      },
      strata: [
        {
          id: "monochrome-dark-v1",
          order: [
            ["land-and-water", "land-and-water"],
            ["land-and-water", "built"],
            ["transit", "built"],
            ["buildings", "built"],
            ["road-network", "tunnels-case"],
            ["road-network", "tunnels"],
            ["transit", "ferries"],
            ["road-network", "surface-case"],
            ["road-network", "surface"],
            ["transit", "surface"],
            ["road-network", "surface-icons"],
            ["road-network", "bridges-case"],
            ["road-network", "bridges"],
            ["transit", "bridges"],
            ["road-network", "bridges-2"],
            ["road-network", "traffic-and-closures"],
            ["buildings", "extruded"],
            ["transit", "elevated"],
            ["admin-boundaries", "admin"],
            ["buildings", "building-labels"],
            ["road-network", "road-labels"],
            ["transit", "ferry-aerialway-labels"],
            ["natural-features", "natural-labels"],
            ["point-of-interest-labels", "poi-labels"],
            ["transit", "transit-labels"],
            ["place-labels", "place-labels"],
            "lib-users"
          ]
        }
      ],
      components: {
        "land-and-water": "0.4.1",
        buildings: "0.4.1",
        "road-network": "0.4.1",
        "admin-boundaries": "0.4.1",
        "natural-features": "0.4.1",
        "point-of-interest-labels": "0.4.1",
        transit: "0.4.1",
        "place-labels": "0.4.1"
      }
    }
  },
  center: [-0.16899047093454556, 51.62262707990189],
  zoom: 10.796619609660537,
  bearing: 0,
  pitch: 0,
  sources: {
    "mapbox://mapbox.mapbox-traffic-v1": {
      url: "mapbox://mapbox.mapbox-traffic-v1",
      type: "vector"
    },
    "mapbox://mapbox.mapbox-incidents-v1": {
      url: "mapbox://mapbox.mapbox-incidents-v1",
      type: "vector"
    },
    composite: {
      url:
        "mapbox://mapbox.mapbox-streets-v8,mapbox.mapbox-terrain-v2,0sumrich.bihfzdpa",
      type: "vector"
    }
  },
  sprite:
    "mapbox://sprites/0sumrich/ck4skvfdt4noq1co2t468d50p/b4igy7guih8ny0ob37c7310o5",
  glyphs: "mapbox://fonts/0sumrich/{fontstack}/{range}.pbf",
  layers: [
    {
      id: "land",
      type: "background",
      layout: {},
      paint: { "background-color": "hsl(185, 3%, 94%)" },
      metadata: {
        "mapbox:featureComponent": "land-and-water",
        "mapbox:group": "Land & water, land-and-water"
      }
    },
    {
      id: "landcover",
      type: "fill",
      source: "composite",
      "source-layer": "landcover",
      maxzoom: 7,
      layout: {},
      paint: {
        "fill-color": "hsl(185, 5%, 91%)",
        "fill-opacity": [
          "interpolate",
          ["exponential", 1.5],
          ["zoom"],
          2,
          0.3,
          7,
          0
        ],
        "fill-antialias": false
      },
      metadata: {
        "mapbox:featureComponent": "land-and-water",
        "mapbox:group": "Land & water, land-and-water"
      }
    },
    {
      minzoom: 5,
      layout: {},
      metadata: {
        "mapbox:featureComponent": "land-and-water",
        "mapbox:group": "Land & water, land-and-water"
      },
      filter: ["==", ["get", "class"], "national_park"],
      type: "fill",
      source: "composite",
      id: "national-park",
      paint: {
        "fill-color": "hsl(185, 7%, 89%)",
        "fill-opacity": [
          "interpolate",
          ["linear"],
          ["zoom"],
          5,
          0,
          6,
          0.5,
          10,
          0.5
        ]
      },
      "source-layer": "landuse_overlay"
    },
    {
      minzoom: 5,
      layout: {},
      metadata: {
        "mapbox:featureComponent": "land-and-water",
        "mapbox:group": "Land & water, land-and-water"
      },
      filter: [
        "match",
        ["get", "class"],
        ["park", "airport", "glacier", "pitch", "sand"],
        true,
        false
      ],
      type: "fill",
      source: "composite",
      id: "landuse",
      paint: {
        "fill-color": "hsl(185, 7%, 89%)",
        "fill-opacity": [
          "interpolate",
          ["linear"],
          ["zoom"],
          5,
          0,
          6,
          ["match", ["get", "class"], "glacier", 0.5, 1]
        ]
      },
      "source-layer": "landuse"
    },
    {
      id: "waterway",
      type: "line",
      source: "composite",
      "source-layer": "waterway",
      minzoom: 8,
      layout: {
        "line-cap": ["step", ["zoom"], "butt", 11, "round"],
        "line-join": "round"
      },
      paint: {
        "line-color": "hsl(185, 3%, 83%)",
        "line-width": [
          "interpolate",
          ["exponential", 1.3],
          ["zoom"],
          9,
          ["match", ["get", "class"], ["canal", "river"], 0.1, 0],
          20,
          ["match", ["get", "class"], ["canal", "river"], 8, 3]
        ],
        "line-opacity": ["interpolate", ["linear"], ["zoom"], 8, 0, 8.5, 1]
      },
      metadata: {
        "mapbox:featureComponent": "land-and-water",
        "mapbox:group": "Land & water, land-and-water"
      }
    },
    {
      id: "water",
      type: "fill",
      source: "composite",
      "source-layer": "water",
      layout: {},
      paint: { "fill-color": "hsl(185, 3%, 83%)" },
      metadata: {
        "mapbox:featureComponent": "land-and-water",
        "mapbox:group": "Land & water, land-and-water"
      }
    },
    {
      minzoom: 13,
      layout: {},
      metadata: {
        "mapbox:featureComponent": "land-and-water",
        "mapbox:group": "Land & water, built"
      },
      filter: [
        "all",
        ["==", ["geometry-type"], "Polygon"],
        ["==", ["get", "class"], "land"]
      ],
      type: "fill",
      source: "composite",
      id: "land-structure-polygon",
      paint: { "fill-color": "hsl(185, 3%, 94%)" },
      "source-layer": "structure"
    },
    {
      minzoom: 13,
      layout: { "line-cap": "round" },
      metadata: {
        "mapbox:featureComponent": "land-and-water",
        "mapbox:group": "Land & water, built"
      },
      filter: [
        "all",
        ["==", ["geometry-type"], "LineString"],
        ["==", ["get", "class"], "land"]
      ],
      type: "line",
      source: "composite",
      id: "land-structure-line",
      paint: {
        "line-width": [
          "interpolate",
          ["exponential", 1.99],
          ["zoom"],
          14,
          0.75,
          20,
          40
        ],
        "line-color": "hsl(185, 3%, 94%)"
      },
      "source-layer": "structure"
    },
    {
      minzoom: 11,
      layout: {},
      metadata: {
        "mapbox:featureComponent": "transit",
        "mapbox:group": "Transit, built"
      },
      filter: [
        "all",
        ["==", ["geometry-type"], "Polygon"],
        [
          "match",
          ["get", "type"],
          ["runway", "taxiway", "helipad"],
          true,
          false
        ]
      ],
      type: "fill",
      source: "composite",
      id: "aeroway-polygon",
      paint: {
        "fill-color": "hsl(185, 3%, 100%)",
        "fill-opacity": ["interpolate", ["linear"], ["zoom"], 11, 0, 11.5, 1]
      },
      "source-layer": "aeroway"
    },
    {
      minzoom: 9,
      layout: {},
      metadata: {
        "mapbox:featureComponent": "transit",
        "mapbox:group": "Transit, built"
      },
      filter: ["==", ["geometry-type"], "LineString"],
      type: "line",
      source: "composite",
      id: "aeroway-line",
      paint: {
        "line-color": "hsl(185, 3%, 100%)",
        "line-width": [
          "interpolate",
          ["exponential", 1.5],
          ["zoom"],
          9,
          ["match", ["get", "type"], "runway", 1, 0.5],
          18,
          ["match", ["get", "type"], "runway", 80, 20]
        ]
      },
      "source-layer": "aeroway"
    },
    {
      minzoom: 15,
      layout: {},
      metadata: {
        "mapbox:featureComponent": "buildings",
        "mapbox:group": "Buildings, built"
      },
      filter: [
        "all",
        ["!=", ["get", "type"], "building:part"],
        ["==", ["get", "underground"], "false"]
      ],
      type: "line",
      source: "composite",
      id: "building-outline",
      paint: {
        "line-color": "hsl(185, 0%, 84%)",
        "line-width": [
          "interpolate",
          ["exponential", 1.5],
          ["zoom"],
          15,
          0.75,
          20,
          3
        ],
        "line-opacity": ["interpolate", ["linear"], ["zoom"], 15, 0, 16, 1]
      },
      "source-layer": "building"
    },
    {
      minzoom: 15,
      layout: {},
      metadata: {
        "mapbox:featureComponent": "buildings",
        "mapbox:group": "Buildings, built"
      },
      filter: [
        "all",
        ["!=", ["get", "type"], "building:part"],
        ["==", ["get", "underground"], "false"]
      ],
      type: "fill",
      source: "composite",
      id: "building",
      paint: {
        "fill-color": [
          "interpolate",
          ["linear"],
          ["zoom"],
          15,
          "hsl(185, 2%, 90%)",
          16,
          "hsl(185, 0%, 90%)"
        ],
        "fill-opacity": ["interpolate", ["linear"], ["zoom"], 15, 0, 16, 1],
        "fill-outline-color": "hsl(185, 0%, 84%)"
      },
      "source-layer": "building"
    },
    {
      minzoom: 13,
      layout: {},
      metadata: {
        "mapbox:featureComponent": "road-network",
        "mapbox:group": "Road network, tunnels-case"
      },
      filter: [
        "all",
        ["==", ["get", "structure"], "tunnel"],
        [
          "step",
          ["zoom"],
          [
            "match",
            ["get", "class"],
            ["street", "street_limited", "primary_link", "track"],
            true,
            false
          ],
          14,
          [
            "match",
            ["get", "class"],
            [
              "street",
              "street_limited",
              "track",
              "primary_link",
              "secondary_link",
              "tertiary_link",
              "service"
            ],
            true,
            false
          ]
        ],
        ["==", ["geometry-type"], "LineString"]
      ],
      type: "line",
      source: "composite",
      id: "tunnel-street-minor-low",
      paint: {
        "line-width": [
          "interpolate",
          ["exponential", 1.5],
          ["zoom"],
          12,
          0.5,
          14,
          [
            "match",
            ["get", "class"],
            ["street", "street_limited", "primary_link"],
            2,
            "track",
            1,
            0.5
          ],
          18,
          [
            "match",
            ["get", "class"],
            ["street", "street_limited", "primary_link"],
            18,
            12
          ]
        ],
        "line-color": "hsl(185, 3%, 87%)",
        "line-opacity": ["step", ["zoom"], 1, 14, 0]
      },
      "source-layer": "road"
    },
    {
      minzoom: 13,
      layout: {},
      metadata: {
        "mapbox:featureComponent": "road-network",
        "mapbox:group": "Road network, tunnels-case"
      },
      filter: [
        "all",
        ["==", ["get", "structure"], "tunnel"],
        [
          "step",
          ["zoom"],
          [
            "match",
            ["get", "class"],
            ["street", "street_limited", "primary_link", "track"],
            true,
            false
          ],
          14,
          [
            "match",
            ["get", "class"],
            [
              "street",
              "street_limited",
              "track",
              "primary_link",
              "secondary_link",
              "tertiary_link",
              "service"
            ],
            true,
            false
          ]
        ],
        ["==", ["geometry-type"], "LineString"]
      ],
      type: "line",
      source: "composite",
      id: "tunnel-street-minor-case",
      paint: {
        "line-width": [
          "interpolate",
          ["exponential", 1.5],
          ["zoom"],
          12,
          0.75,
          20,
          2
        ],
        "line-color": "hsl(185, 1%, 100%)",
        "line-gap-width": [
          "interpolate",
          ["exponential", 1.5],
          ["zoom"],
          12,
          0.5,
          14,
          [
            "match",
            ["get", "class"],
            ["street", "street_limited", "primary_link"],
            2,
            "track",
            1,
            0.5
          ],
          18,
          [
            "match",
            ["get", "class"],
            ["street", "street_limited", "primary_link"],
            18,
            12
          ]
        ],
        "line-opacity": ["step", ["zoom"], 0, 14, 1],
        "line-dasharray": [3, 3]
      },
      "source-layer": "road"
    },
    {
      minzoom: 13,
      layout: {},
      metadata: {
        "mapbox:featureComponent": "road-network",
        "mapbox:group": "Road network, tunnels-case"
      },
      filter: [
        "all",
        ["==", ["get", "structure"], "tunnel"],
        [
          "match",
          ["get", "class"],
          ["primary", "secondary", "tertiary"],
          true,
          false
        ],
        ["==", ["geometry-type"], "LineString"]
      ],
      type: "line",
      source: "composite",
      id: "tunnel-primary-secondary-tertiary-case",
      paint: {
        "line-width": [
          "interpolate",
          ["exponential", 1.5],
          ["zoom"],
          10,
          ["match", ["get", "class"], "primary", 1, 0.75],
          18,
          2
        ],
        "line-color": "hsl(185, 1%, 100%)",
        "line-gap-width": [
          "interpolate",
          ["exponential", 1.5],
          ["zoom"],
          5,
          ["match", ["get", "class"], "primary", 0.75, 0.1],
          18,
          ["match", ["get", "class"], "primary", 32, 26]
        ],
        "line-dasharray": [3, 3]
      },
      "source-layer": "road"
    },
    {
      minzoom: 13,
      layout: {},
      metadata: {
        "mapbox:featureComponent": "road-network",
        "mapbox:group": "Road network, tunnels-case"
      },
      filter: [
        "all",
        ["==", ["get", "structure"], "tunnel"],
        [
          "match",
          ["get", "class"],
          ["motorway_link", "trunk_link"],
          true,
          false
        ],
        ["==", ["geometry-type"], "LineString"]
      ],
      type: "line",
      source: "composite",
      id: "tunnel-major-link-case",
      paint: {
        "line-width": [
          "interpolate",
          ["exponential", 1.5],
          ["zoom"],
          12,
          0.75,
          20,
          2
        ],
        "line-color": "hsl(185, 1%, 100%)",
        "line-gap-width": [
          "interpolate",
          ["exponential", 1.5],
          ["zoom"],
          12,
          0.5,
          14,
          2,
          18,
          18
        ],
        "line-dasharray": [3, 3]
      },
      "source-layer": "road"
    },
    {
      minzoom: 13,
      layout: {},
      metadata: {
        "mapbox:featureComponent": "road-network",
        "mapbox:group": "Road network, tunnels-case"
      },
      filter: [
        "all",
        ["==", ["get", "structure"], "tunnel"],
        ["match", ["get", "class"], ["motorway", "trunk"], true, false],
        ["==", ["geometry-type"], "LineString"]
      ],
      type: "line",
      source: "composite",
      id: "tunnel-motorway-trunk-case",
      paint: {
        "line-width": [
          "interpolate",
          ["exponential", 1.5],
          ["zoom"],
          10,
          1,
          18,
          2
        ],
        "line-color": "hsl(185, 1%, 100%)",
        "line-gap-width": [
          "interpolate",
          ["exponential", 1.5],
          ["zoom"],
          5,
          0.75,
          18,
          32
        ],
        "line-dasharray": [3, 3]
      },
      "source-layer": "road"
    },
    {
      minzoom: 14,
      layout: {},
      metadata: {
        "mapbox:featureComponent": "road-network",
        "mapbox:group": "Road network, tunnels-case"
      },
      filter: [
        "all",
        ["==", ["get", "structure"], "tunnel"],
        ["==", ["get", "class"], "construction"],
        ["==", ["geometry-type"], "LineString"]
      ],
      type: "line",
      source: "composite",
      id: "tunnel-construction",
      paint: {
        "line-width": [
          "interpolate",
          ["exponential", 1.5],
          ["zoom"],
          14,
          2,
          18,
          18
        ],
        "line-color": "hsl(185, 3%, 87%)",
        "line-dasharray": [
          "step",
          ["zoom"],
          ["literal", [0.4, 0.8]],
          15,
          ["literal", [0.3, 0.6]],
          16,
          ["literal", [0.2, 0.3]],
          17,
          ["literal", [0.2, 0.25]],
          18,
          ["literal", [0.15, 0.15]]
        ]
      },
      "source-layer": "road"
    },
    {
      minzoom: 13,
      layout: {},
      metadata: {
        "mapbox:featureComponent": "road-network",
        "mapbox:group": "Road network, tunnels"
      },
      filter: [
        "all",
        ["==", ["get", "structure"], "tunnel"],
        [
          "match",
          ["get", "class"],
          ["motorway_link", "trunk_link"],
          true,
          false
        ],
        ["==", ["geometry-type"], "LineString"]
      ],
      type: "line",
      source: "composite",
      id: "tunnel-major-link",
      paint: {
        "line-width": [
          "interpolate",
          ["exponential", 1.5],
          ["zoom"],
          12,
          0.5,
          14,
          2,
          18,
          18
        ],
        "line-color": "hsl(185, 3%, 87%)"
      },
      "source-layer": "road"
    },
    {
      minzoom: 13,
      layout: {},
      metadata: {
        "mapbox:featureComponent": "road-network",
        "mapbox:group": "Road network, tunnels"
      },
      filter: [
        "all",
        ["==", ["get", "structure"], "tunnel"],
        [
          "step",
          ["zoom"],
          [
            "match",
            ["get", "class"],
            ["street", "street_limited", "primary_link", "track"],
            true,
            false
          ],
          14,
          [
            "match",
            ["get", "class"],
            [
              "street",
              "street_limited",
              "track",
              "primary_link",
              "secondary_link",
              "tertiary_link",
              "service"
            ],
            true,
            false
          ]
        ],
        ["==", ["geometry-type"], "LineString"]
      ],
      type: "line",
      source: "composite",
      id: "tunnel-street-minor",
      paint: {
        "line-width": [
          "interpolate",
          ["exponential", 1.5],
          ["zoom"],
          12,
          0.5,
          14,
          [
            "match",
            ["get", "class"],
            ["street", "street_limited", "primary_link"],
            2,
            "track",
            1,
            0.5
          ],
          18,
          [
            "match",
            ["get", "class"],
            ["street", "street_limited", "primary_link"],
            18,
            12
          ]
        ],
        "line-color": "hsl(185, 3%, 87%)",
        "line-opacity": ["step", ["zoom"], 0, 14, 1]
      },
      "source-layer": "road"
    },
    {
      minzoom: 13,
      layout: {},
      metadata: {
        "mapbox:featureComponent": "road-network",
        "mapbox:group": "Road network, tunnels"
      },
      filter: [
        "all",
        ["==", ["get", "structure"], "tunnel"],
        [
          "match",
          ["get", "class"],
          ["primary", "secondary", "tertiary"],
          true,
          false
        ],
        ["==", ["geometry-type"], "LineString"]
      ],
      type: "line",
      source: "composite",
      id: "tunnel-primary-secondary-tertiary",
      paint: {
        "line-width": [
          "interpolate",
          ["exponential", 1.5],
          ["zoom"],
          5,
          ["match", ["get", "class"], "primary", 0.75, 0.1],
          18,
          ["match", ["get", "class"], "primary", 32, 26]
        ],
        "line-color": "hsl(185, 3%, 87%)"
      },
      "source-layer": "road"
    },
    {
      minzoom: 13,
      layout: {},
      metadata: {
        "mapbox:featureComponent": "road-network",
        "mapbox:group": "Road network, tunnels"
      },
      filter: [
        "all",
        ["==", ["get", "structure"], "tunnel"],
        ["match", ["get", "class"], ["motorway", "trunk"], true, false],
        ["==", ["geometry-type"], "LineString"]
      ],
      type: "line",
      source: "composite",
      id: "tunnel-motorway-trunk",
      paint: {
        "line-width": [
          "interpolate",
          ["exponential", 1.5],
          ["zoom"],
          5,
          0.75,
          18,
          32
        ],
        "line-color": "hsl(185, 3%, 87%)"
      },
      "source-layer": "road"
    },
    {
      minzoom: 15,
      layout: {
        "icon-image": "turning-circle-outline",
        "icon-size": [
          "interpolate",
          ["exponential", 1.5],
          ["zoom"],
          14,
          0.122,
          18,
          0.969,
          20,
          1
        ],
        "icon-allow-overlap": true,
        "icon-ignore-placement": true,
        "icon-padding": 0,
        "icon-rotation-alignment": "map"
      },
      metadata: {
        "mapbox:featureComponent": "road-network",
        "mapbox:group": "Road network, surface-case"
      },
      filter: [
        "all",
        ["==", ["geometry-type"], "Point"],
        [
          "match",
          ["get", "class"],
          ["turning_circle", "turning_loop"],
          true,
          false
        ]
      ],
      type: "symbol",
      source: "composite",
      id: "turning-feature-outline",
      paint: {},
      "source-layer": "road"
    },
    {
      minzoom: 13,
      layout: {
        "line-cap": ["step", ["zoom"], "butt", 14, "round"],
        "line-join": ["step", ["zoom"], "miter", 14, "round"]
      },
      metadata: {
        "mapbox:featureComponent": "road-network",
        "mapbox:group": "Road network, surface-case"
      },
      filter: [
        "all",
        [
          "step",
          ["zoom"],
          ["==", ["get", "class"], "track"],
          14,
          [
            "match",
            ["get", "class"],
            ["track", "secondary_link", "tertiary_link", "service"],
            true,
            false
          ]
        ],
        ["match", ["get", "structure"], ["none", "ford"], true, false],
        ["==", ["geometry-type"], "LineString"]
      ],
      type: "line",
      source: "composite",
      id: "road-minor-low",
      paint: {
        "line-width": [
          "interpolate",
          ["exponential", 1.5],
          ["zoom"],
          14,
          ["match", ["get", "class"], "track", 1, 0.5],
          18,
          12
        ],
        "line-color": "hsl(185, 3%, 100%)",
        "line-opacity": ["step", ["zoom"], 1, 14, 0]
      },
      "source-layer": "road"
    },
    {
      minzoom: 13,
      layout: {
        "line-cap": ["step", ["zoom"], "butt", 14, "round"],
        "line-join": ["step", ["zoom"], "miter", 14, "round"]
      },
      metadata: {
        "mapbox:featureComponent": "road-network",
        "mapbox:group": "Road network, surface-case"
      },
      filter: [
        "all",
        [
          "step",
          ["zoom"],
          ["==", ["get", "class"], "track"],
          14,
          [
            "match",
            ["get", "class"],
            ["track", "secondary_link", "tertiary_link", "service"],
            true,
            false
          ]
        ],
        ["match", ["get", "structure"], ["none", "ford"], true, false],
        ["==", ["geometry-type"], "LineString"]
      ],
      type: "line",
      source: "composite",
      id: "road-minor-case",
      paint: {
        "line-width": [
          "interpolate",
          ["exponential", 1.5],
          ["zoom"],
          12,
          0.75,
          20,
          2
        ],
        "line-color": "hsl(185, 0%, 90%)",
        "line-gap-width": [
          "interpolate",
          ["exponential", 1.5],
          ["zoom"],
          14,
          ["match", ["get", "class"], "track", 1, 0.5],
          18,
          12
        ],
        "line-opacity": ["step", ["zoom"], 0, 14, 1]
      },
      "source-layer": "road"
    },
    {
      minzoom: 11,
      layout: {
        "line-cap": ["step", ["zoom"], "butt", 14, "round"],
        "line-join": ["step", ["zoom"], "miter", 14, "round"]
      },
      metadata: {
        "mapbox:featureComponent": "road-network",
        "mapbox:group": "Road network, surface-case"
      },
      filter: [
        "all",
        [
          "match",
          ["get", "class"],
          ["street", "street_limited", "primary_link"],
          true,
          false
        ],
        ["match", ["get", "structure"], ["none", "ford"], true, false],
        ["==", ["geometry-type"], "LineString"]
      ],
      type: "line",
      source: "composite",
      id: "road-street-low",
      paint: {
        "line-width": [
          "interpolate",
          ["exponential", 1.5],
          ["zoom"],
          12,
          0.5,
          14,
          2,
          18,
          18
        ],
        "line-color": "hsl(185, 3%, 100%)",
        "line-opacity": ["step", ["zoom"], 1, 14, 0]
      },
      "source-layer": "road"
    },
    {
      minzoom: 11,
      layout: {
        "line-cap": ["step", ["zoom"], "butt", 14, "round"],
        "line-join": ["step", ["zoom"], "miter", 14, "round"]
      },
      metadata: {
        "mapbox:featureComponent": "road-network",
        "mapbox:group": "Road network, surface-case"
      },
      filter: [
        "all",
        [
          "match",
          ["get", "class"],
          ["street", "street_limited", "primary_link"],
          true,
          false
        ],
        ["match", ["get", "structure"], ["none", "ford"], true, false],
        ["==", ["geometry-type"], "LineString"]
      ],
      type: "line",
      source: "composite",
      id: "road-street-case",
      paint: {
        "line-width": [
          "interpolate",
          ["exponential", 1.5],
          ["zoom"],
          12,
          0.75,
          20,
          2
        ],
        "line-color": "hsl(185, 0%, 90%)",
        "line-gap-width": [
          "interpolate",
          ["exponential", 1.5],
          ["zoom"],
          12,
          0.5,
          14,
          2,
          18,
          18
        ],
        "line-opacity": ["step", ["zoom"], 0, 14, 1]
      },
      "source-layer": "road"
    },
    {
      minzoom: 8,
      layout: {
        "line-cap": ["step", ["zoom"], "butt", 14, "round"],
        "line-join": ["step", ["zoom"], "miter", 14, "round"]
      },
      metadata: {
        "mapbox:featureComponent": "road-network",
        "mapbox:group": "Road network, surface-case"
      },
      filter: [
        "all",
        ["match", ["get", "class"], ["secondary", "tertiary"], true, false],
        ["match", ["get", "structure"], ["none", "ford"], true, false],
        ["==", ["geometry-type"], "LineString"]
      ],
      type: "line",
      source: "composite",
      id: "road-secondary-tertiary-case",
      paint: {
        "line-width": [
          "interpolate",
          ["exponential", 1.5],
          ["zoom"],
          10,
          0.75,
          18,
          2
        ],
        "line-color": "hsl(185, 0%, 90%)",
        "line-gap-width": [
          "interpolate",
          ["exponential", 1.5],
          ["zoom"],
          5,
          0.1,
          18,
          26
        ],
        "line-opacity": ["step", ["zoom"], 0, 10, 1]
      },
      "source-layer": "road"
    },
    {
      minzoom: 7,
      layout: {
        "line-cap": ["step", ["zoom"], "butt", 14, "round"],
        "line-join": ["step", ["zoom"], "miter", 14, "round"]
      },
      metadata: {
        "mapbox:featureComponent": "road-network",
        "mapbox:group": "Road network, surface-case"
      },
      filter: [
        "all",
        ["==", ["get", "class"], "primary"],
        ["match", ["get", "structure"], ["none", "ford"], true, false],
        ["==", ["geometry-type"], "LineString"]
      ],
      type: "line",
      source: "composite",
      id: "road-primary-case",
      paint: {
        "line-width": [
          "interpolate",
          ["exponential", 1.5],
          ["zoom"],
          10,
          1,
          18,
          2
        ],
        "line-color": "hsl(185, 0%, 90%)",
        "line-gap-width": [
          "interpolate",
          ["exponential", 1.5],
          ["zoom"],
          5,
          0.75,
          18,
          32
        ],
        "line-opacity": ["step", ["zoom"], 0, 10, 1]
      },
      "source-layer": "road"
    },
    {
      minzoom: 10,
      layout: {
        "line-cap": ["step", ["zoom"], "butt", 14, "round"],
        "line-join": ["step", ["zoom"], "miter", 14, "round"]
      },
      metadata: {
        "mapbox:featureComponent": "road-network",
        "mapbox:group": "Road network, surface-case"
      },
      filter: [
        "all",
        [
          "match",
          ["get", "class"],
          ["motorway_link", "trunk_link"],
          true,
          false
        ],
        ["match", ["get", "structure"], ["none", "ford"], true, false],
        ["==", ["geometry-type"], "LineString"]
      ],
      type: "line",
      source: "composite",
      id: "road-major-link-case",
      paint: {
        "line-width": [
          "interpolate",
          ["exponential", 1.5],
          ["zoom"],
          12,
          0.75,
          20,
          2
        ],
        "line-color": "hsl(185, 0%, 90%)",
        "line-gap-width": [
          "interpolate",
          ["exponential", 1.5],
          ["zoom"],
          12,
          0.5,
          14,
          2,
          18,
          18
        ],
        "line-opacity": ["step", ["zoom"], 0, 11, 1]
      },
      "source-layer": "road"
    },
    {
      minzoom: 5,
      layout: {
        "line-cap": ["step", ["zoom"], "butt", 14, "round"],
        "line-join": ["step", ["zoom"], "miter", 14, "round"]
      },
      metadata: {
        "mapbox:featureComponent": "road-network",
        "mapbox:group": "Road network, surface-case"
      },
      filter: [
        "all",
        ["match", ["get", "class"], ["motorway", "trunk"], true, false],
        ["match", ["get", "structure"], ["none", "ford"], true, false],
        ["==", ["geometry-type"], "LineString"]
      ],
      type: "line",
      source: "composite",
      id: "road-motorway-trunk-case",
      paint: {
        "line-width": [
          "interpolate",
          ["exponential", 1.5],
          ["zoom"],
          10,
          1,
          18,
          2
        ],
        "line-color": "hsl(185, 0%, 90%)",
        "line-gap-width": [
          "interpolate",
          ["exponential", 1.5],
          ["zoom"],
          5,
          0.75,
          18,
          32
        ],
        "line-opacity": [
          "step",
          ["zoom"],
          ["match", ["get", "class"], "motorway", 1, 0],
          6,
          1
        ]
      },
      "source-layer": "road"
    },
    {
      minzoom: 14,
      layout: {},
      metadata: {
        "mapbox:featureComponent": "road-network",
        "mapbox:group": "Road network, surface-case"
      },
      filter: [
        "all",
        ["==", ["get", "class"], "construction"],
        ["match", ["get", "structure"], ["none", "ford"], true, false],
        ["==", ["geometry-type"], "LineString"]
      ],
      type: "line",
      source: "composite",
      id: "road-construction",
      paint: {
        "line-width": [
          "interpolate",
          ["exponential", 1.5],
          ["zoom"],
          14,
          2,
          18,
          18
        ],
        "line-color": "hsl(185, 3%, 100%)",
        "line-dasharray": [
          "step",
          ["zoom"],
          ["literal", [0.4, 0.8]],
          15,
          ["literal", [0.3, 0.6]],
          16,
          ["literal", [0.2, 0.3]],
          17,
          ["literal", [0.2, 0.25]],
          18,
          ["literal", [0.15, 0.15]]
        ]
      },
      "source-layer": "road"
    },
    {
      minzoom: 10,
      layout: {
        "line-cap": ["step", ["zoom"], "butt", 13, "round"],
        "line-join": ["step", ["zoom"], "miter", 13, "round"]
      },
      metadata: {
        "mapbox:featureComponent": "road-network",
        "mapbox:group": "Road network, surface"
      },
      filter: [
        "all",
        [
          "match",
          ["get", "class"],
          ["motorway_link", "trunk_link"],
          true,
          false
        ],
        ["match", ["get", "structure"], ["none", "ford"], true, false],
        ["==", ["geometry-type"], "LineString"]
      ],
      type: "line",
      source: "composite",
      id: "road-major-link",
      paint: {
        "line-width": [
          "interpolate",
          ["exponential", 1.5],
          ["zoom"],
          12,
          0.5,
          14,
          2,
          18,
          18
        ],
        "line-color": "hsl(185, 3%, 100%)"
      },
      "source-layer": "road"
    },
    {
      minzoom: 13,
      layout: {
        "line-cap": ["step", ["zoom"], "butt", 14, "round"],
        "line-join": ["step", ["zoom"], "miter", 14, "round"]
      },
      metadata: {
        "mapbox:featureComponent": "road-network",
        "mapbox:group": "Road network, surface"
      },
      filter: [
        "all",
        [
          "step",
          ["zoom"],
          ["==", ["get", "class"], "track"],
          14,
          [
            "match",
            ["get", "class"],
            ["track", "secondary_link", "tertiary_link", "service"],
            true,
            false
          ]
        ],
        ["match", ["get", "structure"], ["none", "ford"], true, false],
        ["==", ["geometry-type"], "LineString"]
      ],
      type: "line",
      source: "composite",
      id: "road-minor",
      paint: {
        "line-width": [
          "interpolate",
          ["exponential", 1.5],
          ["zoom"],
          14,
          ["match", ["get", "class"], "track", 1, 0.5],
          18,
          12
        ],
        "line-color": "hsl(185, 3%, 100%)",
        "line-opacity": ["step", ["zoom"], 0, 14, 1]
      },
      "source-layer": "road"
    },
    {
      minzoom: 11,
      layout: {
        "line-cap": ["step", ["zoom"], "butt", 14, "round"],
        "line-join": ["step", ["zoom"], "miter", 14, "round"]
      },
      metadata: {
        "mapbox:featureComponent": "road-network",
        "mapbox:group": "Road network, surface"
      },
      filter: [
        "all",
        [
          "match",
          ["get", "class"],
          ["street", "street_limited", "primary_link"],
          true,
          false
        ],
        ["match", ["get", "structure"], ["none", "ford"], true, false],
        ["==", ["geometry-type"], "LineString"]
      ],
      type: "line",
      source: "composite",
      id: "road-street",
      paint: {
        "line-width": [
          "interpolate",
          ["exponential", 1.5],
          ["zoom"],
          12,
          0.5,
          14,
          2,
          18,
          18
        ],
        "line-color": "hsl(185, 3%, 100%)",
        "line-opacity": ["step", ["zoom"], 0, 14, 1]
      },
      "source-layer": "road"
    },
    {
      minzoom: 8,
      layout: {
        "line-cap": ["step", ["zoom"], "butt", 14, "round"],
        "line-join": ["step", ["zoom"], "miter", 14, "round"]
      },
      metadata: {
        "mapbox:featureComponent": "road-network",
        "mapbox:group": "Road network, surface"
      },
      filter: [
        "all",
        ["match", ["get", "class"], ["secondary", "tertiary"], true, false],
        ["match", ["get", "structure"], ["none", "ford"], true, false],
        ["==", ["geometry-type"], "LineString"]
      ],
      type: "line",
      source: "composite",
      id: "road-secondary-tertiary",
      paint: {
        "line-width": [
          "interpolate",
          ["exponential", 1.5],
          ["zoom"],
          5,
          0.1,
          18,
          26
        ],
        "line-color": "hsl(185, 3%, 100%)"
      },
      "source-layer": "road"
    },
    {
      minzoom: 7,
      layout: {
        "line-cap": ["step", ["zoom"], "butt", 14, "round"],
        "line-join": ["step", ["zoom"], "miter", 14, "round"]
      },
      metadata: {
        "mapbox:featureComponent": "road-network",
        "mapbox:group": "Road network, surface"
      },
      filter: [
        "all",
        ["==", ["get", "class"], "primary"],
        ["match", ["get", "structure"], ["none", "ford"], true, false],
        ["==", ["geometry-type"], "LineString"]
      ],
      type: "line",
      source: "composite",
      id: "road-primary",
      paint: {
        "line-width": [
          "interpolate",
          ["exponential", 1.5],
          ["zoom"],
          5,
          0.75,
          18,
          32
        ],
        "line-color": "hsl(185, 3%, 100%)"
      },
      "source-layer": "road"
    },
    {
      id: "road-motorway-trunk",
      type: "line",
      source: "composite",
      "source-layer": "road",
      filter: [
        "all",
        ["match", ["get", "class"], ["motorway", "trunk"], true, false],
        ["match", ["get", "structure"], ["none", "ford"], true, false],
        ["==", ["geometry-type"], "LineString"]
      ],
      layout: {
        "line-cap": ["step", ["zoom"], "butt", 13, "round"],
        "line-join": ["step", ["zoom"], "miter", 13, "round"]
      },
      paint: {
        "line-width": [
          "interpolate",
          ["exponential", 1.5],
          ["zoom"],
          5,
          0.75,
          18,
          32
        ],
        "line-color": "hsl(185, 3%, 100%)"
      },
      metadata: {
        "mapbox:featureComponent": "road-network",
        "mapbox:group": "Road network, surface"
      }
    },
    {
      minzoom: 13,
      layout: { "line-join": "round" },
      metadata: {
        "mapbox:featureComponent": "transit",
        "mapbox:group": "Transit, surface"
      },
      filter: [
        "all",
        ["match", ["get", "class"], ["major_rail", "minor_rail"], true, false],
        ["match", ["get", "structure"], ["none", "ford"], true, false]
      ],
      type: "line",
      source: "composite",
      id: "road-rail",
      paint: {
        "line-color": "hsl(185, 0%, 90%)",
        "line-width": [
          "interpolate",
          ["exponential", 1.5],
          ["zoom"],
          14,
          0.5,
          20,
          1
        ]
      },
      "source-layer": "road"
    },
    {
      minzoom: 15,
      layout: {
        "icon-image": "turning-circle",
        "icon-size": [
          "interpolate",
          ["exponential", 1.5],
          ["zoom"],
          14,
          0.095,
          18,
          1
        ],
        "icon-allow-overlap": true,
        "icon-ignore-placement": true,
        "icon-padding": 0,
        "icon-rotation-alignment": "map"
      },
      metadata: {
        "mapbox:featureComponent": "road-network",
        "mapbox:group": "Road network, surface-icons"
      },
      filter: [
        "all",
        ["==", ["geometry-type"], "Point"],
        [
          "match",
          ["get", "class"],
          ["turning_circle", "turning_loop"],
          true,
          false
        ]
      ],
      type: "symbol",
      source: "composite",
      id: "turning-feature",
      paint: {},
      "source-layer": "road"
    },
    {
      minzoom: 13,
      layout: {
        "line-cap": ["step", ["zoom"], "butt", 14, "round"],
        "line-join": ["step", ["zoom"], "miter", 14, "round"]
      },
      metadata: {
        "mapbox:featureComponent": "road-network",
        "mapbox:group": "Road network, bridges-case"
      },
      filter: [
        "all",
        ["==", ["get", "structure"], "bridge"],
        [
          "step",
          ["zoom"],
          [
            "match",
            ["get", "class"],
            ["street", "street_limited", "primary_link", "track"],
            true,
            false
          ],
          14,
          [
            "match",
            ["get", "class"],
            [
              "street",
              "street_limited",
              "track",
              "primary_link",
              "secondary_link",
              "tertiary_link",
              "service"
            ],
            true,
            false
          ]
        ],
        ["==", ["geometry-type"], "LineString"]
      ],
      type: "line",
      source: "composite",
      id: "bridge-street-minor-low",
      paint: {
        "line-width": [
          "interpolate",
          ["exponential", 1.5],
          ["zoom"],
          12,
          0.5,
          14,
          [
            "match",
            ["get", "class"],
            ["street", "street_limited", "primary_link"],
            2,
            "track",
            1,
            0.5
          ],
          18,
          [
            "match",
            ["get", "class"],
            ["street", "street_limited", "primary_link"],
            18,
            12
          ]
        ],
        "line-color": "hsl(185, 3%, 100%)",
        "line-opacity": ["step", ["zoom"], 1, 14, 0]
      },
      "source-layer": "road"
    },
    {
      minzoom: 13,
      layout: { "line-join": "round" },
      metadata: {
        "mapbox:featureComponent": "road-network",
        "mapbox:group": "Road network, bridges-case"
      },
      filter: [
        "all",
        ["==", ["get", "structure"], "bridge"],
        [
          "step",
          ["zoom"],
          [
            "match",
            ["get", "class"],
            ["street", "street_limited", "primary_link", "track"],
            true,
            false
          ],
          14,
          [
            "match",
            ["get", "class"],
            [
              "street",
              "street_limited",
              "track",
              "primary_link",
              "secondary_link",
              "tertiary_link",
              "service"
            ],
            true,
            false
          ]
        ],
        ["==", ["geometry-type"], "LineString"]
      ],
      type: "line",
      source: "composite",
      id: "bridge-street-minor-case",
      paint: {
        "line-width": [
          "interpolate",
          ["exponential", 1.5],
          ["zoom"],
          12,
          0.75,
          20,
          2
        ],
        "line-color": "hsl(185, 0%, 90%)",
        "line-gap-width": [
          "interpolate",
          ["exponential", 1.5],
          ["zoom"],
          12,
          0.5,
          14,
          [
            "match",
            ["get", "class"],
            ["street", "street_limited", "primary_link"],
            2,
            "track",
            1,
            0.5
          ],
          18,
          [
            "match",
            ["get", "class"],
            ["street", "street_limited", "primary_link"],
            18,
            12
          ]
        ],
        "line-opacity": ["step", ["zoom"], 0, 14, 1]
      },
      "source-layer": "road"
    },
    {
      minzoom: 13,
      layout: { "line-join": "round" },
      metadata: {
        "mapbox:featureComponent": "road-network",
        "mapbox:group": "Road network, bridges-case"
      },
      filter: [
        "all",
        ["==", ["get", "structure"], "bridge"],
        [
          "match",
          ["get", "class"],
          ["primary", "secondary", "tertiary"],
          true,
          false
        ],
        ["==", ["geometry-type"], "LineString"]
      ],
      type: "line",
      source: "composite",
      id: "bridge-primary-secondary-tertiary-case",
      paint: {
        "line-width": [
          "interpolate",
          ["exponential", 1.5],
          ["zoom"],
          10,
          ["match", ["get", "class"], "primary", 1, 0.75],
          18,
          2
        ],
        "line-color": "hsl(185, 0%, 90%)",
        "line-gap-width": [
          "interpolate",
          ["exponential", 1.5],
          ["zoom"],
          5,
          ["match", ["get", "class"], "primary", 0.75, 0.1],
          18,
          ["match", ["get", "class"], "primary", 32, 26]
        ],
        "line-opacity": ["step", ["zoom"], 0, 10, 1]
      },
      "source-layer": "road"
    },
    {
      minzoom: 13,
      layout: { "line-join": "round" },
      metadata: {
        "mapbox:featureComponent": "road-network",
        "mapbox:group": "Road network, bridges-case"
      },
      filter: [
        "all",
        ["==", ["get", "structure"], "bridge"],
        [
          "match",
          ["get", "class"],
          ["motorway_link", "trunk_link"],
          true,
          false
        ],
        ["<=", ["get", "layer"], 1],
        ["==", ["geometry-type"], "LineString"]
      ],
      type: "line",
      source: "composite",
      id: "bridge-major-link-case",
      paint: {
        "line-width": [
          "interpolate",
          ["exponential", 1.5],
          ["zoom"],
          12,
          0.75,
          20,
          2
        ],
        "line-color": "hsl(185, 0%, 90%)",
        "line-gap-width": [
          "interpolate",
          ["exponential", 1.5],
          ["zoom"],
          12,
          0.5,
          14,
          2,
          18,
          18
        ]
      },
      "source-layer": "road"
    },
    {
      minzoom: 13,
      layout: { "line-join": "round" },
      metadata: {
        "mapbox:featureComponent": "road-network",
        "mapbox:group": "Road network, bridges-case"
      },
      filter: [
        "all",
        ["==", ["get", "structure"], "bridge"],
        ["match", ["get", "class"], ["motorway", "trunk"], true, false],
        ["<=", ["get", "layer"], 1],
        ["==", ["geometry-type"], "LineString"]
      ],
      type: "line",
      source: "composite",
      id: "bridge-motorway-trunk-case",
      paint: {
        "line-width": [
          "interpolate",
          ["exponential", 1.5],
          ["zoom"],
          10,
          1,
          18,
          2
        ],
        "line-color": "hsl(185, 0%, 90%)",
        "line-gap-width": [
          "interpolate",
          ["exponential", 1.5],
          ["zoom"],
          5,
          0.75,
          18,
          32
        ]
      },
      "source-layer": "road"
    },
    {
      minzoom: 14,
      layout: {},
      metadata: {
        "mapbox:featureComponent": "road-network",
        "mapbox:group": "Road network, bridges-case"
      },
      filter: [
        "all",
        ["==", ["get", "structure"], "bridge"],
        ["==", ["get", "class"], "construction"],
        ["==", ["geometry-type"], "LineString"]
      ],
      type: "line",
      source: "composite",
      id: "bridge-construction",
      paint: {
        "line-width": [
          "interpolate",
          ["exponential", 1.5],
          ["zoom"],
          14,
          2,
          18,
          18
        ],
        "line-color": "hsl(185, 3%, 100%)",
        "line-dasharray": [
          "step",
          ["zoom"],
          ["literal", [0.4, 0.8]],
          15,
          ["literal", [0.3, 0.6]],
          16,
          ["literal", [0.2, 0.3]],
          17,
          ["literal", [0.2, 0.25]],
          18,
          ["literal", [0.15, 0.15]]
        ]
      },
      "source-layer": "road"
    },
    {
      minzoom: 13,
      layout: { "line-cap": "round", "line-join": "round" },
      metadata: {
        "mapbox:featureComponent": "road-network",
        "mapbox:group": "Road network, bridges"
      },
      filter: [
        "all",
        ["==", ["get", "structure"], "bridge"],
        [
          "match",
          ["get", "class"],
          ["motorway_link", "trunk_link"],
          true,
          false
        ],
        ["<=", ["get", "layer"], 1],
        ["==", ["geometry-type"], "LineString"]
      ],
      type: "line",
      source: "composite",
      id: "bridge-major-link",
      paint: {
        "line-width": [
          "interpolate",
          ["exponential", 1.5],
          ["zoom"],
          12,
          0.5,
          14,
          2,
          18,
          18
        ],
        "line-color": "hsl(185, 3%, 100%)"
      },
      "source-layer": "road"
    },
    {
      minzoom: 13,
      layout: {
        "line-cap": ["step", ["zoom"], "butt", 14, "round"],
        "line-join": ["step", ["zoom"], "miter", 14, "round"]
      },
      metadata: {
        "mapbox:featureComponent": "road-network",
        "mapbox:group": "Road network, bridges"
      },
      filter: [
        "all",
        ["==", ["get", "structure"], "bridge"],
        [
          "step",
          ["zoom"],
          [
            "match",
            ["get", "class"],
            ["street", "street_limited", "primary_link", "track"],
            true,
            false
          ],
          14,
          [
            "match",
            ["get", "class"],
            [
              "street",
              "street_limited",
              "track",
              "primary_link",
              "secondary_link",
              "tertiary_link",
              "service"
            ],
            true,
            false
          ]
        ],
        ["==", ["geometry-type"], "LineString"]
      ],
      type: "line",
      source: "composite",
      id: "bridge-street-minor",
      paint: {
        "line-width": [
          "interpolate",
          ["exponential", 1.5],
          ["zoom"],
          12,
          0.5,
          14,
          [
            "match",
            ["get", "class"],
            ["street", "street_limited", "primary_link"],
            2,
            "track",
            1,
            0.5
          ],
          18,
          [
            "match",
            ["get", "class"],
            ["street", "street_limited", "primary_link"],
            18,
            12
          ]
        ],
        "line-color": "hsl(185, 3%, 100%)",
        "line-opacity": ["step", ["zoom"], 0, 14, 1]
      },
      "source-layer": "road"
    },
    {
      minzoom: 13,
      layout: {
        "line-cap": ["step", ["zoom"], "butt", 14, "round"],
        "line-join": ["step", ["zoom"], "miter", 14, "round"]
      },
      metadata: {
        "mapbox:featureComponent": "road-network",
        "mapbox:group": "Road network, bridges"
      },
      filter: [
        "all",
        ["==", ["get", "structure"], "bridge"],
        [
          "match",
          ["get", "class"],
          ["primary", "secondary", "tertiary"],
          true,
          false
        ],
        ["==", ["geometry-type"], "LineString"]
      ],
      type: "line",
      source: "composite",
      id: "bridge-primary-secondary-tertiary",
      paint: {
        "line-width": [
          "interpolate",
          ["exponential", 1.5],
          ["zoom"],
          5,
          ["match", ["get", "class"], "primary", 0.75, 0.1],
          18,
          ["match", ["get", "class"], "primary", 32, 26]
        ],
        "line-color": "hsl(185, 3%, 100%)"
      },
      "source-layer": "road"
    },
    {
      minzoom: 13,
      layout: { "line-cap": "round", "line-join": "round" },
      metadata: {
        "mapbox:featureComponent": "road-network",
        "mapbox:group": "Road network, bridges"
      },
      filter: [
        "all",
        ["==", ["get", "structure"], "bridge"],
        ["match", ["get", "class"], ["motorway", "trunk"], true, false],
        ["<=", ["get", "layer"], 1],
        ["==", ["geometry-type"], "LineString"]
      ],
      type: "line",
      source: "composite",
      id: "bridge-motorway-trunk",
      paint: {
        "line-width": [
          "interpolate",
          ["exponential", 1.5],
          ["zoom"],
          5,
          0.75,
          18,
          32
        ],
        "line-color": "hsl(185, 3%, 100%)"
      },
      "source-layer": "road"
    },
    {
      minzoom: 13,
      layout: { "line-join": "round" },
      metadata: {
        "mapbox:featureComponent": "transit",
        "mapbox:group": "Transit, bridges"
      },
      filter: [
        "all",
        ["==", ["get", "structure"], "bridge"],
        ["match", ["get", "class"], ["major_rail", "minor_rail"], true, false]
      ],
      type: "line",
      source: "composite",
      id: "bridge-rail",
      paint: {
        "line-color": "hsl(185, 0%, 90%)",
        "line-width": [
          "interpolate",
          ["exponential", 1.5],
          ["zoom"],
          14,
          0.5,
          20,
          1
        ]
      },
      "source-layer": "road"
    },
    {
      minzoom: 13,
      layout: { "line-join": "round" },
      metadata: {
        "mapbox:featureComponent": "road-network",
        "mapbox:group": "Road network, bridges-2"
      },
      filter: [
        "all",
        ["==", ["get", "structure"], "bridge"],
        [">=", ["get", "layer"], 2],
        [
          "match",
          ["get", "class"],
          ["motorway_link", "trunk_link"],
          true,
          false
        ],
        ["==", ["geometry-type"], "LineString"]
      ],
      type: "line",
      source: "composite",
      id: "bridge-major-link-2-case",
      paint: {
        "line-width": [
          "interpolate",
          ["exponential", 1.5],
          ["zoom"],
          12,
          0.75,
          20,
          2
        ],
        "line-color": "hsl(185, 0%, 90%)",
        "line-gap-width": [
          "interpolate",
          ["exponential", 1.5],
          ["zoom"],
          12,
          0.5,
          14,
          2,
          18,
          18
        ]
      },
      "source-layer": "road"
    },
    {
      minzoom: 13,
      layout: { "line-join": "round" },
      metadata: {
        "mapbox:featureComponent": "road-network",
        "mapbox:group": "Road network, bridges-2"
      },
      filter: [
        "all",
        ["==", ["get", "structure"], "bridge"],
        [">=", ["get", "layer"], 2],
        ["match", ["get", "class"], ["motorway", "trunk"], true, false],
        ["==", ["geometry-type"], "LineString"]
      ],
      type: "line",
      source: "composite",
      id: "bridge-motorway-trunk-2-case",
      paint: {
        "line-width": [
          "interpolate",
          ["exponential", 1.5],
          ["zoom"],
          10,
          1,
          18,
          2
        ],
        "line-color": "hsl(185, 0%, 90%)",
        "line-gap-width": [
          "interpolate",
          ["exponential", 1.5],
          ["zoom"],
          5,
          0.75,
          18,
          32
        ]
      },
      "source-layer": "road"
    },
    {
      minzoom: 13,
      layout: { "line-cap": "round", "line-join": "round" },
      metadata: {
        "mapbox:featureComponent": "road-network",
        "mapbox:group": "Road network, bridges-2"
      },
      filter: [
        "all",
        ["==", ["get", "structure"], "bridge"],
        [">=", ["get", "layer"], 2],
        [
          "match",
          ["get", "class"],
          ["motorway_link", "trunk_link"],
          true,
          false
        ],
        ["==", ["geometry-type"], "LineString"]
      ],
      type: "line",
      source: "composite",
      id: "bridge-major-link-2",
      paint: {
        "line-width": [
          "interpolate",
          ["exponential", 1.5],
          ["zoom"],
          12,
          0.5,
          14,
          2,
          18,
          18
        ],
        "line-color": "hsl(185, 3%, 100%)"
      },
      "source-layer": "road"
    },
    {
      minzoom: 13,
      layout: {
        "line-cap": ["step", ["zoom"], "butt", 14, "round"],
        "line-join": ["step", ["zoom"], "miter", 14, "round"]
      },
      metadata: {
        "mapbox:featureComponent": "road-network",
        "mapbox:group": "Road network, bridges-2"
      },
      filter: [
        "all",
        ["==", ["get", "structure"], "bridge"],
        [">=", ["get", "layer"], 2],
        ["match", ["get", "class"], ["motorway", "trunk"], true, false],
        ["==", ["geometry-type"], "LineString"]
      ],
      type: "line",
      source: "composite",
      id: "bridge-motorway-trunk-2",
      paint: {
        "line-width": [
          "interpolate",
          ["exponential", 1.5],
          ["zoom"],
          5,
          0.75,
          18,
          32
        ],
        "line-color": "hsl(185, 3%, 100%)"
      },
      "source-layer": "road"
    },
    {
      id: "admin-1-boundary-bg",
      type: "line",
      source: "composite",
      "source-layer": "admin",
      filter: [
        "all",
        ["==", ["get", "admin_level"], 1],
        ["==", ["get", "maritime"], "false"],
        ["match", ["get", "worldview"], ["all", "US"], true, false]
      ],
      layout: { "line-join": "bevel" },
      paint: {
        "line-color": [
          "interpolate",
          ["linear"],
          ["zoom"],
          8,
          "hsl(185, 0%, 84%)",
          16,
          "hsl(185, 0%, 84%)"
        ],
        "line-width": ["interpolate", ["linear"], ["zoom"], 7, 3.75, 12, 5.5],
        "line-opacity": ["interpolate", ["linear"], ["zoom"], 7, 0, 8, 0.75],
        "line-dasharray": [1, 0],
        "line-translate": [0, 0],
        "line-blur": ["interpolate", ["linear"], ["zoom"], 3, 0, 8, 3]
      },
      metadata: {
        "mapbox:featureComponent": "admin-boundaries",
        "mapbox:group": "Administrative boundaries, admin"
      }
    },
    {
      minzoom: 1,
      layout: {},
      metadata: {
        "mapbox:featureComponent": "admin-boundaries",
        "mapbox:group": "Administrative boundaries, admin"
      },
      filter: [
        "all",
        ["==", ["get", "admin_level"], 0],
        ["==", ["get", "maritime"], "false"],
        ["match", ["get", "worldview"], ["all", "US"], true, false]
      ],
      type: "line",
      source: "composite",
      id: "admin-0-boundary-bg",
      paint: {
        "line-width": ["interpolate", ["linear"], ["zoom"], 3, 3.5, 10, 8],
        "line-color": "hsl(185, 0%, 84%)",
        "line-opacity": ["interpolate", ["linear"], ["zoom"], 3, 0, 4, 0.5],
        "line-translate": [0, 0],
        "line-blur": ["interpolate", ["linear"], ["zoom"], 3, 0, 10, 2]
      },
      "source-layer": "admin"
    },
    {
      id: "admin-1-boundary",
      type: "line",
      source: "composite",
      "source-layer": "admin",
      filter: [
        "all",
        ["==", ["get", "admin_level"], 1],
        ["==", ["get", "maritime"], "false"],
        ["match", ["get", "worldview"], ["all", "US"], true, false]
      ],
      layout: { "line-join": "round", "line-cap": "round" },
      paint: {
        "line-dasharray": [
          "step",
          ["zoom"],
          ["literal", [2, 0]],
          7,
          ["literal", [2, 2, 6, 2]]
        ],
        "line-width": ["interpolate", ["linear"], ["zoom"], 7, 0.75, 12, 1.5],
        "line-opacity": ["interpolate", ["linear"], ["zoom"], 2, 0, 3, 1],
        "line-color": [
          "interpolate",
          ["linear"],
          ["zoom"],
          3,
          "hsl(185, 0%, 83%)",
          7,
          "hsl(185, 3%, 68%)"
        ]
      },
      metadata: {
        "mapbox:featureComponent": "admin-boundaries",
        "mapbox:group": "Administrative boundaries, admin"
      }
    },
    {
      minzoom: 1,
      layout: { "line-join": "round", "line-cap": "round" },
      metadata: {
        "mapbox:featureComponent": "admin-boundaries",
        "mapbox:group": "Administrative boundaries, admin"
      },
      filter: [
        "all",
        ["==", ["get", "admin_level"], 0],
        ["==", ["get", "disputed"], "false"],
        ["==", ["get", "maritime"], "false"],
        ["match", ["get", "worldview"], ["all", "US"], true, false]
      ],
      type: "line",
      source: "composite",
      id: "admin-0-boundary",
      paint: {
        "line-color": "hsl(185, 0%, 67%)",
        "line-width": ["interpolate", ["linear"], ["zoom"], 3, 0.5, 10, 2],
        "line-dasharray": [10, 0]
      },
      "source-layer": "admin"
    },
    {
      minzoom: 1,
      layout: { "line-join": "round" },
      metadata: {
        "mapbox:featureComponent": "admin-boundaries",
        "mapbox:group": "Administrative boundaries, admin"
      },
      filter: [
        "all",
        ["==", ["get", "disputed"], "true"],
        ["==", ["get", "admin_level"], 0],
        ["==", ["get", "maritime"], "false"],
        ["match", ["get", "worldview"], ["all", "US"], true, false]
      ],
      type: "line",
      source: "composite",
      id: "admin-0-boundary-disputed",
      paint: {
        "line-color": "hsl(185, 0%, 67%)",
        "line-width": ["interpolate", ["linear"], ["zoom"], 3, 0.5, 10, 2],
        "line-dasharray": [
          "step",
          ["zoom"],
          ["literal", [3.25, 3.25]],
          6,
          ["literal", [2.5, 2.5]],
          7,
          ["literal", [2, 2.25]],
          8,
          ["literal", [1.75, 2]]
        ]
      },
      "source-layer": "admin"
    },
    {
      minzoom: 10,
      layout: {
        "text-size": [
          "interpolate",
          ["linear"],
          ["zoom"],
          10,
          [
            "match",
            ["get", "class"],
            ["motorway", "trunk", "primary", "secondary", "tertiary"],
            10,
            [
              "motorway_link",
              "trunk_link",
              "primary_link",
              "secondary_link",
              "tertiary_link",
              "street",
              "street_limited"
            ],
            9,
            6.5
          ],
          18,
          [
            "match",
            ["get", "class"],
            ["motorway", "trunk", "primary", "secondary", "tertiary"],
            16,
            [
              "motorway_link",
              "trunk_link",
              "primary_link",
              "secondary_link",
              "tertiary_link",
              "street",
              "street_limited"
            ],
            14,
            13
          ]
        ],
        "text-max-angle": 30,
        "text-font": ["DIN Pro Regular", "Arial Unicode MS Regular"],
        "symbol-placement": "line",
        "text-padding": 1,
        "text-rotation-alignment": "map",
        "text-pitch-alignment": "viewport",
        "text-field": ["coalesce", ["get", "name_en"], ["get", "name"]],
        "text-letter-spacing": 0.01
      },
      metadata: {
        "mapbox:featureComponent": "road-network",
        "mapbox:group": "Road network, road-labels"
      },
      filter: [
        "step",
        ["zoom"],
        [
          "match",
          ["get", "class"],
          ["motorway", "trunk", "primary", "secondary", "tertiary"],
          true,
          false
        ],
        12,
        [
          "match",
          ["get", "class"],
          [
            "motorway",
            "trunk",
            "primary",
            "secondary",
            "tertiary",
            "street",
            "street_limited"
          ],
          true,
          false
        ],
        15,
        [
          "match",
          ["get", "class"],
          ["path", "pedestrian", "golf", "ferry", "aerialway"],
          false,
          true
        ]
      ],
      type: "symbol",
      source: "composite",
      id: "road-label",
      paint: {
        "text-color": "hsl(185, 3%, 47%)",
        "text-halo-color": "hsl(185, 1%, 100%)",
        "text-halo-width": 1,
        "text-halo-blur": 1
      },
      "source-layer": "road"
    },
    {
      minzoom: 13,
      layout: {
        "text-font": ["DIN Pro Italic", "Arial Unicode MS Regular"],
        "text-max-angle": 30,
        "symbol-spacing": [
          "interpolate",
          ["linear", 1],
          ["zoom"],
          15,
          250,
          17,
          400
        ],
        "text-size": ["interpolate", ["linear"], ["zoom"], 13, 12, 18, 16],
        "symbol-placement": "line",
        "text-pitch-alignment": "viewport",
        "text-field": ["coalesce", ["get", "name_en"], ["get", "name"]]
      },
      metadata: {
        "mapbox:featureComponent": "natural-features",
        "mapbox:group": "Natural features, natural-labels"
      },
      filter: [
        "all",
        ["match", ["get", "class"], ["canal", "river", "stream"], true, false],
        ["==", ["geometry-type"], "LineString"]
      ],
      type: "symbol",
      source: "composite",
      id: "waterway-label",
      paint: { "text-color": "hsl(185, 3%, 55%)" },
      "source-layer": "natural_label"
    },
    {
      minzoom: 4,
      layout: {
        "text-size": [
          "step",
          ["zoom"],
          ["step", ["get", "sizerank"], 18, 5, 12],
          17,
          ["step", ["get", "sizerank"], 18, 13, 12]
        ],
        "text-max-angle": 30,
        "text-field": ["coalesce", ["get", "name_en"], ["get", "name"]],
        "text-font": ["DIN Pro Medium", "Arial Unicode MS Regular"],
        "symbol-placement": "line-center",
        "text-pitch-alignment": "viewport"
      },
      metadata: {
        "mapbox:featureComponent": "natural-features",
        "mapbox:group": "Natural features, natural-labels"
      },
      filter: [
        "all",
        ["match", ["get", "class"], ["glacier", "landform"], true, false],
        ["==", ["geometry-type"], "LineString"],
        ["<=", ["get", "filterrank"], 1]
      ],
      type: "symbol",
      source: "composite",
      id: "natural-line-label",
      paint: {
        "text-halo-width": 0.5,
        "text-halo-color": "hsl(185, 1%, 100%)",
        "text-halo-blur": 0.5,
        "text-color": "hsl(185, 3%, 47%)"
      },
      "source-layer": "natural_label"
    },
    {
      minzoom: 4,
      layout: {
        "text-size": [
          "step",
          ["zoom"],
          ["step", ["get", "sizerank"], 18, 5, 12],
          17,
          ["step", ["get", "sizerank"], 18, 13, 12]
        ],
        "icon-image": "",
        "text-font": ["DIN Pro Medium", "Arial Unicode MS Regular"],
        "text-offset": ["literal", [0, 0]],
        "text-field": ["coalesce", ["get", "name_en"], ["get", "name"]]
      },
      metadata: {
        "mapbox:featureComponent": "natural-features",
        "mapbox:group": "Natural features, natural-labels"
      },
      filter: [
        "all",
        [
          "match",
          ["get", "class"],
          ["dock", "glacier", "landform", "water_feature", "wetland"],
          true,
          false
        ],
        ["==", ["geometry-type"], "Point"],
        ["<=", ["get", "filterrank"], 1]
      ],
      type: "symbol",
      source: "composite",
      id: "natural-point-label",
      paint: {
        "icon-opacity": [
          "step",
          ["zoom"],
          ["step", ["get", "sizerank"], 0, 5, 1],
          17,
          ["step", ["get", "sizerank"], 0, 13, 1]
        ],
        "text-halo-color": "hsl(185, 1%, 100%)",
        "text-halo-width": 0.5,
        "text-halo-blur": 0.5,
        "text-color": "hsl(185, 3%, 47%)"
      },
      "source-layer": "natural_label"
    },
    {
      id: "water-line-label",
      type: "symbol",
      metadata: {
        "mapbox:featureComponent": "natural-features",
        "mapbox:group": "Natural features, natural-labels"
      },
      source: "composite",
      "source-layer": "natural_label",
      filter: [
        "all",
        [
          "match",
          ["get", "class"],
          ["bay", "ocean", "reservoir", "sea", "water"],
          true,
          false
        ],
        ["==", ["geometry-type"], "LineString"]
      ],
      layout: {
        "text-size": [
          "interpolate",
          ["linear"],
          ["zoom"],
          7,
          ["step", ["get", "sizerank"], 24, 6, 18, 12, 12],
          10,
          ["step", ["get", "sizerank"], 18, 9, 12],
          18,
          ["step", ["get", "sizerank"], 18, 9, 16]
        ],
        "text-max-angle": 30,
        "text-letter-spacing": [
          "match",
          ["get", "class"],
          "ocean",
          0.25,
          ["sea", "bay"],
          0.15,
          0
        ],
        "text-font": ["DIN Pro Italic", "Arial Unicode MS Regular"],
        "symbol-placement": "line-center",
        "text-pitch-alignment": "viewport",
        "text-field": ["coalesce", ["get", "name_en"], ["get", "name"]]
      },
      paint: { "text-color": "hsl(185, 3%, 55%)" }
    },
    {
      id: "water-point-label",
      type: "symbol",
      source: "composite",
      "source-layer": "natural_label",
      filter: [
        "all",
        [
          "match",
          ["get", "class"],
          ["bay", "ocean", "reservoir", "sea", "water"],
          true,
          false
        ],
        ["==", ["geometry-type"], "Point"]
      ],
      layout: {
        "text-line-height": 1.3,
        "text-size": [
          "interpolate",
          ["linear"],
          ["zoom"],
          7,
          ["step", ["get", "sizerank"], 24, 6, 18, 12, 12],
          10,
          ["step", ["get", "sizerank"], 18, 9, 12]
        ],
        "text-font": ["DIN Pro Italic", "Arial Unicode MS Regular"],
        "text-field": ["coalesce", ["get", "name_en"], ["get", "name"]],
        "text-letter-spacing": [
          "match",
          ["get", "class"],
          "ocean",
          0.25,
          ["bay", "sea"],
          0.15,
          0.01
        ],
        "text-max-width": [
          "match",
          ["get", "class"],
          "ocean",
          4,
          "sea",
          5,
          ["bay", "water"],
          7,
          10
        ]
      },
      paint: { "text-color": "hsl(185, 3%, 55%)" },
      metadata: {
        "mapbox:featureComponent": "natural-features",
        "mapbox:group": "Natural features, natural-labels"
      }
    },
    {
      minzoom: 6,
      layout: {
        "text-size": [
          "step",
          ["zoom"],
          ["step", ["get", "sizerank"], 18, 5, 12],
          17,
          ["step", ["get", "sizerank"], 18, 13, 12]
        ],
        "icon-image": "",
        "text-font": ["DIN Pro Medium", "Arial Unicode MS Regular"],
        "text-offset": [0, 0],
        "text-anchor": [
          "step",
          ["zoom"],
          ["step", ["get", "sizerank"], "center", 5, "top"],
          17,
          ["step", ["get", "sizerank"], "center", 13, "top"]
        ],
        "text-field": ["coalesce", ["get", "name_en"], ["get", "name"]]
      },
      metadata: {
        "mapbox:featureComponent": "point-of-interest-labels",
        "mapbox:group": "Point of interest labels, poi-labels"
      },
      filter: [
        "<=",
        ["get", "filterrank"],
        ["+", ["step", ["zoom"], 0, 16, 1, 17, 2], 1]
      ],
      type: "symbol",
      source: "composite",
      id: "poi-label",
      paint: {
        "text-halo-color": "hsl(185, 1%, 100%)",
        "text-halo-width": 0.5,
        "text-halo-blur": 0.5,
        "text-color": [
          "step",
          ["zoom"],
          [
            "step",
            ["get", "sizerank"],
            "hsl(185, 3%, 68%)",
            5,
            "hsl(185, 3%, 59%)"
          ],
          17,
          [
            "step",
            ["get", "sizerank"],
            "hsl(185, 3%, 68%)",
            13,
            "hsl(185, 3%, 59%)"
          ]
        ]
      },
      "source-layer": "poi_label"
    },
    {
      id: "airport-label",
      type: "symbol",
      source: "composite",
      "source-layer": "airport_label",
      minzoom: 8,
      layout: {
        "text-line-height": 1.1,
        "text-size": ["step", ["get", "sizerank"], 18, 9, 12],
        "icon-image": [
          "step",
          ["get", "sizerank"],
          ["concat", ["get", "maki"], "-15"],
          9,
          ["concat", ["get", "maki"], "-11"]
        ],
        "text-font": ["DIN Pro Medium", "Arial Unicode MS Regular"],
        "text-offset": [0, 0.75],
        "text-rotation-alignment": "viewport",
        "text-anchor": "top",
        "text-field": [
          "step",
          ["get", "sizerank"],
          ["coalesce", ["get", "name_en"], ["get", "name"]],
          15,
          ["get", "ref"]
        ],
        "text-letter-spacing": 0.01,
        "text-max-width": 9
      },
      paint: {
        "text-color": "hsl(185, 3%, 47%)",
        "text-halo-color": "hsl(185, 1%, 100%)",
        "text-halo-width": 1
      },
      metadata: {
        "mapbox:featureComponent": "transit",
        "mapbox:group": "Transit, transit-labels"
      }
    },
    {
      minzoom: 10,
      layout: {
        "text-field": ["coalesce", ["get", "name_en"], ["get", "name"]],
        "text-transform": "uppercase",
        "text-font": ["DIN Pro Regular", "Arial Unicode MS Regular"],
        "text-letter-spacing": ["match", ["get", "type"], "suburb", 0.15, 0.1],
        "text-max-width": 7,
        "text-padding": 3,
        "text-size": [
          "interpolate",
          ["cubic-bezier", 0.5, 0, 1, 1],
          ["zoom"],
          11,
          ["match", ["get", "type"], "suburb", 11, 10.5],
          15,
          ["match", ["get", "type"], "suburb", 17, 16]
        ]
      },
      metadata: {
        "mapbox:featureComponent": "place-labels",
        "mapbox:group": "Place labels, place-labels"
      },
      maxzoom: 15,
      filter: [
        "all",
        ["==", ["get", "class"], "settlement_subdivision"],
        ["<=", ["get", "filterrank"], 4]
      ],
      type: "symbol",
      source: "composite",
      id: "settlement-subdivision-label",
      paint: {
        "text-halo-color": "hsl(185, 1%, 100%)",
        "text-halo-width": 1,
        "text-color": "hsl(185, 3%, 66%)",
        "text-halo-blur": 0.5
      },
      "source-layer": "place_label"
    },
    {
      layout: {
        "text-line-height": 1.1,
        "text-size": [
          "interpolate",
          ["cubic-bezier", 0.2, 0, 0.9, 1],
          ["zoom"],
          3,
          [
            "step",
            ["get", "symbolrank"],
            12,
            9,
            11,
            10,
            10.5,
            12,
            9.5,
            14,
            8.5,
            16,
            6.5,
            17,
            4
          ],
          13,
          [
            "step",
            ["get", "symbolrank"],
            25,
            9,
            23,
            10,
            21,
            11,
            19,
            12,
            18,
            13,
            17,
            15,
            15
          ]
        ],
        "icon-image": [
          "step",
          ["zoom"],
          [
            "case",
            ["==", ["get", "capital"], 2],
            "border-dot-13",
            ["step", ["get", "symbolrank"], "dot-11", 9, "dot-10", 11, "dot-9"]
          ],
          8,
          ""
        ],
        "text-font": ["DIN Pro Regular", "Arial Unicode MS Regular"],
        "text-justify": [
          "step",
          ["zoom"],
          [
            "match",
            ["get", "text_anchor"],
            ["left", "bottom-left", "top-left"],
            "left",
            ["right", "bottom-right", "top-right"],
            "right",
            "center"
          ],
          8,
          "center"
        ],
        "text-offset": [
          "step",
          ["zoom"],
          [
            "match",
            ["get", "capital"],
            2,
            [
              "match",
              ["get", "text_anchor"],
              "bottom",
              ["literal", [0, -0.3]],
              "bottom-left",
              ["literal", [0.3, -0.1]],
              "left",
              ["literal", [0.45, 0.1]],
              "top-left",
              ["literal", [0.3, 0.1]],
              "top",
              ["literal", [0, 0.3]],
              "top-right",
              ["literal", [-0.3, 0.1]],
              "right",
              ["literal", [-0.45, 0]],
              "bottom-right",
              ["literal", [-0.3, -0.1]],
              ["literal", [0, -0.3]]
            ],
            [
              "match",
              ["get", "text_anchor"],
              "bottom",
              ["literal", [0, -0.25]],
              "bottom-left",
              ["literal", [0.2, -0.05]],
              "left",
              ["literal", [0.4, 0.05]],
              "top-left",
              ["literal", [0.2, 0.05]],
              "top",
              ["literal", [0, 0.25]],
              "top-right",
              ["literal", [-0.2, 0.05]],
              "right",
              ["literal", [-0.4, 0.05]],
              "bottom-right",
              ["literal", [-0.2, -0.05]],
              ["literal", [0, -0.25]]
            ]
          ],
          8,
          ["literal", [0, 0]]
        ],
        "text-anchor": ["step", ["zoom"], ["get", "text_anchor"], 8, "center"],
        "text-field": ["coalesce", ["get", "name_en"], ["get", "name"]],
        "text-max-width": 7
      },
      metadata: {
        "mapbox:featureComponent": "place-labels",
        "mapbox:group": "Place labels, place-labels"
      },
      maxzoom: 15,
      filter: [
        "all",
        ["<=", ["get", "filterrank"], 3],
        ["==", ["get", "class"], "settlement"],
        [
          "step",
          ["zoom"],
          true,
          8,
          [">=", ["get", "symbolrank"], 11],
          10,
          [">=", ["get", "symbolrank"], 12],
          11,
          [">=", ["get", "symbolrank"], 13],
          12,
          [">=", ["get", "symbolrank"], 15],
          13,
          [">=", ["get", "symbolrank"], 11],
          14,
          [">=", ["get", "symbolrank"], 13]
        ]
      ],
      type: "symbol",
      source: "composite",
      id: "settlement-minor-label",
      paint: {
        "text-color": [
          "step",
          ["get", "symbolrank"],
          "hsl(185, 3%, 47%)",
          11,
          "hsl(185, 3%, 59%)",
          16,
          "hsl(185, 3%, 68%)"
        ],
        "text-halo-color": "hsl(185, 1%, 100%)",
        "text-halo-width": 1,
        "text-halo-blur": 1
      },
      "source-layer": "place_label"
    },
    {
      layout: {
        "text-line-height": 1.1,
        "text-size": [
          "interpolate",
          ["cubic-bezier", 0.2, 0, 0.9, 1],
          ["zoom"],
          8,
          ["step", ["get", "symbolrank"], 18, 9, 17, 10, 15],
          15,
          [
            "step",
            ["get", "symbolrank"],
            28,
            9,
            26,
            10,
            23,
            11,
            21,
            12,
            20,
            13,
            19,
            15,
            16
          ]
        ],
        "icon-image": [
          "step",
          ["zoom"],
          [
            "case",
            ["==", ["get", "capital"], 2],
            "border-dot-13",
            ["step", ["get", "symbolrank"], "dot-11", 9, "dot-10", 11, "dot-9"]
          ],
          8,
          ""
        ],
        "text-font": ["DIN Pro Medium", "Arial Unicode MS Regular"],
        "text-justify": [
          "step",
          ["zoom"],
          [
            "match",
            ["get", "text_anchor"],
            ["left", "bottom-left", "top-left"],
            "left",
            ["right", "bottom-right", "top-right"],
            "right",
            "center"
          ],
          8,
          "center"
        ],
        "text-offset": [
          "step",
          ["zoom"],
          [
            "match",
            ["get", "capital"],
            2,
            [
              "match",
              ["get", "text_anchor"],
              "bottom",
              ["literal", [0, -0.3]],
              "bottom-left",
              ["literal", [0.3, -0.1]],
              "left",
              ["literal", [0.45, 0.1]],
              "top-left",
              ["literal", [0.3, 0.1]],
              "top",
              ["literal", [0, 0.3]],
              "top-right",
              ["literal", [-0.3, 0.1]],
              "right",
              ["literal", [-0.45, 0]],
              "bottom-right",
              ["literal", [-0.3, -0.1]],
              ["literal", [0, -0.3]]
            ],
            [
              "match",
              ["get", "text_anchor"],
              "bottom",
              ["literal", [0, -0.25]],
              "bottom-left",
              ["literal", [0.2, -0.05]],
              "left",
              ["literal", [0.4, 0.05]],
              "top-left",
              ["literal", [0.2, 0.05]],
              "top",
              ["literal", [0, 0.25]],
              "top-right",
              ["literal", [-0.2, 0.05]],
              "right",
              ["literal", [-0.4, 0.05]],
              "bottom-right",
              ["literal", [-0.2, -0.05]],
              ["literal", [0, -0.25]]
            ]
          ],
          8,
          ["literal", [0, 0]]
        ],
        "text-anchor": ["step", ["zoom"], ["get", "text_anchor"], 8, "center"],
        "text-field": ["coalesce", ["get", "name_en"], ["get", "name"]],
        "text-max-width": 7
      },
      metadata: {
        "mapbox:featureComponent": "place-labels",
        "mapbox:group": "Place labels, place-labels"
      },
      maxzoom: 15,
      filter: [
        "all",
        ["<=", ["get", "filterrank"], 3],
        ["==", ["get", "class"], "settlement"],
        [
          "step",
          ["zoom"],
          false,
          8,
          ["<", ["get", "symbolrank"], 11],
          10,
          ["<", ["get", "symbolrank"], 12],
          11,
          ["<", ["get", "symbolrank"], 13],
          12,
          ["<", ["get", "symbolrank"], 15],
          13,
          [">=", ["get", "symbolrank"], 11],
          14,
          [">=", ["get", "symbolrank"], 13]
        ]
      ],
      type: "symbol",
      source: "composite",
      id: "settlement-major-label",
      paint: {
        "text-color": [
          "step",
          ["get", "symbolrank"],
          "hsl(185, 3%, 47%)",
          11,
          "hsl(185, 3%, 59%)",
          16,
          "hsl(185, 3%, 68%)"
        ],
        "text-halo-color": "hsl(185, 1%, 100%)",
        "text-halo-width": 1,
        "text-halo-blur": 1
      },
      "source-layer": "place_label"
    },
    {
      minzoom: 3,
      layout: {
        "text-size": [
          "interpolate",
          ["cubic-bezier", 0.85, 0.7, 0.65, 1],
          ["zoom"],
          4,
          ["step", ["get", "symbolrank"], 10, 6, 9.5, 7, 9],
          9,
          ["step", ["get", "symbolrank"], 24, 6, 18, 7, 14]
        ],
        "text-transform": "uppercase",
        "text-font": ["DIN Pro Bold", "Arial Unicode MS Bold"],
        "text-field": [
          "step",
          ["zoom"],
          [
            "step",
            ["get", "symbolrank"],
            ["coalesce", ["get", "name_en"], ["get", "name"]],
            5,
            ["coalesce", ["get", "abbr"], ["get", "name_en"], ["get", "name"]]
          ],
          5,
          ["coalesce", ["get", "name_en"], ["get", "name"]]
        ],
        "text-letter-spacing": 0.15,
        "text-max-width": 6
      },
      metadata: {
        "mapbox:featureComponent": "place-labels",
        "mapbox:group": "Place labels, place-labels"
      },
      maxzoom: 9,
      filter: ["==", ["get", "class"], "state"],
      type: "symbol",
      source: "composite",
      id: "state-label",
      paint: {
        "text-color": "hsl(185, 3%, 68%)",
        "text-halo-color": "hsl(185, 1%, 100%)",
        "text-halo-width": 1
      },
      "source-layer": "place_label"
    },
    {
      minzoom: 1,
      layout: {
        "icon-image": "",
        "text-field": ["coalesce", ["get", "name_en"], ["get", "name"]],
        "text-line-height": 1.1,
        "text-max-width": 6,
        "text-font": ["DIN Pro Medium", "Arial Unicode MS Regular"],
        "text-offset": ["literal", [0, 0]],
        "text-justify": [
          "step",
          ["zoom"],
          [
            "match",
            ["get", "text_anchor"],
            ["left", "bottom-left", "top-left"],
            "left",
            ["right", "bottom-right", "top-right"],
            "right",
            "center"
          ],
          7,
          "center"
        ],
        "text-size": [
          "interpolate",
          ["cubic-bezier", 0.2, 0, 0.7, 1],
          ["zoom"],
          1,
          ["step", ["get", "symbolrank"], 11, 4, 9, 5, 8],
          9,
          ["step", ["get", "symbolrank"], 28, 4, 22, 5, 21]
        ]
      },
      metadata: {
        "mapbox:featureComponent": "place-labels",
        "mapbox:group": "Place labels, place-labels"
      },
      maxzoom: 10,
      filter: ["==", ["get", "class"], "country"],
      type: "symbol",
      source: "composite",
      id: "country-label",
      paint: {
        "icon-opacity": [
          "step",
          ["zoom"],
          ["case", ["has", "text_anchor"], 1, 0],
          7,
          0
        ],
        "text-color": "hsl(185, 3%, 47%)",
        "text-halo-color": "hsl(185, 1%, 100%)",
        "text-halo-width": 1.25
      },
      "source-layer": "place_label"
    },
    {
      id: "lib-users",
      type: "fill",
      paint: {
        "fill-opacity": [
          "case",
          ["boolean", ["feature-state", "hover"], false],
          1,
          0.5
        ],
        "fill-color": [
          "interpolate",
          ["linear"],
          ["get", "Number of borrowers"],
          1,
          "hsl(0, 100%, 90%)",
          152.5,
          "hsl(0, 100%, 51%)",
          304,
          "hsl(0, 100%, 11%)"
        ]
      },
      layout: {},
      source: "composite",
      "source-layer": "final_boundaries-9rtkfq"
    }
  ],
  created: "2019-12-30T15:08:42.800Z",
  id: "ck4skvfdt4noq1co2t468d50p",
  modified: "2020-01-04T18:52:57.035Z",
  owner: "0sumrich",
  visibility: "private",
  draft: false
};
