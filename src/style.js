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
      "Transit, bridges": {
        name: "Transit, bridges",
        collapsed: false
      },
      "Transit, surface": {
        name: "Transit, surface",
        collapsed: false
      },
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
      "Buildings, built": {
        name: "Buildings, built",
        collapsed: false
      },
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
      "Transit, built": {
        name: "Transit, built",
        collapsed: false
      },
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
        "admin-boundaries": {
          "color-base": "hsl(185, 5%, 97%)"
        },
        "place-labels": {
          "color-base": "hsl(185, 5%, 97%)"
        },
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
  center: [-0.18707522228521611, 51.625709090368986],
  zoom: 11.081885789949364,
  bearing: 0,
  pitch: 0,
  sprite:
    "mapbox://sprites/0sumrich/ck4skvfdt4noq1co2t468d50p/b4igy7guih8ny0ob37c7310o5",
  glyphs: "mapbox://fonts/0sumrich/{fontstack}/{range}.pbf",
  sources: {
    "mapbox://mapbox.mapbox-traffic-v1": {
      type: "vector",
      url: "mapbox://mapbox.mapbox-traffic-v1"
    },
    "mapbox://mapbox.mapbox-incidents-v1": {
      type: "vector",
      url: "mapbox://mapbox.mapbox-incidents-v1"
    },
    composite: {
      type: "vector",
      url:
        "mapbox://0sumrich.25k3foel,mapbox.mapbox-streets-v8,mapbox.mapbox-terrain-v2"
    },
    la: {
      type: "geojson",
      data: {
        type: "FeatureCollection",
        features: [
          {
            type: "Feature",
            geometry: {
              type: "LineString",
              coordinates: [
                [-0.199029938314097, 51.668203161376525],
                [-0.196639013960932, 51.6681430925472],
                [-0.196184172713469, 51.668526370133776],
                [-0.194877116637175, 51.66830216397771],
                [-0.196689871010208, 51.665478576588804],
                [-0.192555927543839, 51.66474600368934],
                [-0.191091827594294, 51.66389347753857],
                [-0.187815400981271, 51.667875984661244],
                [-0.185829309693543, 51.668506251026756],
                [-0.182110443559578, 51.668600714230706],
                [-0.185891083694433, 51.66283309957083],
                [-0.175553950446671, 51.66056787194619],
                [-0.165041715584015, 51.65822435518756],
                [-0.163504294906036, 51.65816615088901],
                [-0.160515318559911, 51.65675074256641],
                [-0.154787657877713, 51.65553054970324],
                [-0.154722782882244, 51.65502776026582],
                [-0.15378195658296, 51.65466407104238],
                [-0.153490292144939, 51.653303446637466],
                [-0.154230786078533, 51.65297517971468],
                [-0.154050991247479, 51.652561405409074],
                [-0.153501978809634, 51.652695751035566],
                [-0.152564578322234, 51.65146704609216],
                [-0.152270564327932, 51.64984560386918],
                [-0.151019481032727, 51.650075896449586],
                [-0.149919641031998, 51.64879245579583],
                [-0.152273975516642, 51.6479842503077],
                [-0.152383382731451, 51.64763976807859],
                [-0.151068338491476, 51.64720542205628],
                [-0.152168178443864, 51.64582263295208],
                [-0.151330207764412, 51.64528069471296],
                [-0.149174486680699, 51.64526112195878],
                [-0.149048033393841, 51.64417825235977],
                [-0.147920827555277, 51.64208145356085],
                [-0.145102578174885, 51.642646644315484],
                [-0.142319301536081, 51.63931324780089],
                [-0.13843793825733, 51.63651450512081],
                [-0.134534190303682, 51.634695440122094],
                [-0.134436718896719, 51.63397180593743],
                [-0.134003985877411, 51.63404091436852],
                [-0.133295269934678, 51.63326484889992],
                [-0.1313568598273, 51.632577570900175],
                [-0.129147276768588, 51.63226631619101],
                [-0.129803551555446, 51.63096029140875],
                [-0.130205651533001, 51.63102065024644],
                [-0.131147218407707, 51.62966250951988],
                [-0.130466835497026, 51.629377409916316],
                [-0.133536774220952, 51.62636076238739],
                [-0.13420620086432, 51.62398932745736],
                [-0.135070035623235, 51.62233586965996],
                [-0.135571868128686, 51.62239329873231],
                [-0.13546204149233, 51.62168925094821],
                [-0.140639590538747, 51.61773200300027],
                [-0.141291431209031, 51.61754629235325],
                [-0.142057370223235, 51.616158306775745],
                [-0.144536107594742, 51.61548441822037],
                [-0.138785614410406, 51.610192195820304],
                [-0.1434506524551, 51.60884617669557],
                [-0.143103506600652, 51.6063462012401],
                [-0.142090599884761, 51.604591047196195],
                [-0.1421409036762, 51.603287948408706],
                [-0.144199385657771, 51.601110185784385],
                [-0.144495064796318, 51.600126597708204],
                [-0.147000702709219, 51.599195004701244],
                [-0.15138599066662, 51.59745039271867],
                [-0.153030520778325, 51.59923069521369],
                [-0.153463600875163, 51.600870524056894],
                [-0.153312285502066, 51.602678307429734],
                [-0.154643781047763, 51.60413622850873],
                [-0.156141367790357, 51.605096767546605],
                [-0.155987250998171, 51.6054432500995],
                [-0.156367676220716, 51.605356604633336],
                [-0.161786563503232, 51.597476159813134],
                [-0.159675463877847, 51.59226527005336],
                [-0.158864004452629, 51.59237483968574],
                [-0.158689306344716, 51.59205376891263],
                [-0.159480845130241, 51.591579696883926],
                [-0.160273159858916, 51.58797718329063],
                [-0.158640577407262, 51.58797496025071],
                [-0.15870503195671, 51.58663071095841],
                [-0.157430033741605, 51.58656843605397],
                [-0.157182315697613, 51.586197657225874],
                [-0.157922075223614, 51.58621646471608],
                [-0.1579661538608, 51.58573336619887],
                [-0.1596429706729, 51.58446027328604],
                [-0.161350967906813, 51.5852729791779],
                [-0.16574670591534, 51.58322136109325],
                [-0.166215675085277, 51.58204169565733],
                [-0.166896098828117, 51.58195520812224],
                [-0.167219823495958, 51.581299324219074],
                [-0.166838420584901, 51.57865410235908],
                [-0.168088487178118, 51.57692640232941],
                [-0.169345647486203, 51.577426213828005],
                [-0.169753480053378, 51.576399350136484],
                [-0.1694840471559, 51.573981590781514],
                [-0.171181543111701, 51.57361239259299],
                [-0.171285290056077, 51.572429711799224],
                [-0.173461368606816, 51.571099457902946],
                [-0.173730961508166, 51.56991755775],
                [-0.174406903537118, 51.5692536464155],
                [-0.178078357792813, 51.57043115907187],
                [-0.178284595510799, 51.570036897559014],
                [-0.180974606398256, 51.569668574886265],
                [-0.180833813033346, 51.56943618729458],
                [-0.183567514128142, 51.568006482544966],
                [-0.183811407946478, 51.5674985911444],
                [-0.18616758887062, 51.56692085592126],
                [-0.189643377828476, 51.56525339057328],
                [-0.190371225981506, 51.56276563534663],
                [-0.19114033983406, 51.56163546185956],
                [-0.1923200038639, 51.56153853894816],
                [-0.194852004564886, 51.56048134807254],
                [-0.196919620713664, 51.56062104722616],
                [-0.196817790318361, 51.55918339959693],
                [-0.197623270476517, 51.55887924349754],
                [-0.197984673709569, 51.559115898530706],
                [-0.198479165491724, 51.55875930048511],
                [-0.198533270598432, 51.55815674260043],
                [-0.199660261843726, 51.55697985229276],
                [-0.199410043371803, 51.556192776449116],
                [-0.205815267344318, 51.55530533172621],
                [-0.205966149078882, 51.556419995442226],
                [-0.208845146654708, 51.55573110189622],
                [-0.210031157439332, 51.55675364858272],
                [-0.213501362550834, 51.555186112122335],
                [-0.218650256071725, 51.55941796556712],
                [-0.2206627302808, 51.56167320818137],
                [-0.222389883071192, 51.56329552748048],
                [-0.226720623083191, 51.56679342957186],
                [-0.228819097623936, 51.56796804776575],
                [-0.232235584755792, 51.5709528619123],
                [-0.233442530669313, 51.57197997579596],
                [-0.234586319134685, 51.57177058205876],
                [-0.235645024993498, 51.57226759349096],
                [-0.23540110033361, 51.572566966964665],
                [-0.235921980665297, 51.57230772644149],
                [-0.237664629281435, 51.572471492380686],
                [-0.237721589891249, 51.57211805054771],
                [-0.238175417106331, 51.57209968641518],
                [-0.238015035581118, 51.57176905891263],
                [-0.238866517192598, 51.572252138685066],
                [-0.239995642861699, 51.57208563535573],
                [-0.239969522948227, 51.57238828456636],
                [-0.241108475731707, 51.57211670786637],
                [-0.241374804606561, 51.57265664115839],
                [-0.242015584686237, 51.57280472372303],
                [-0.243645996259659, 51.57232466829147],
                [-0.244289016353002, 51.57256449349628],
                [-0.245241945959271, 51.57191421504344],
                [-0.246042471420845, 51.57218606033435],
                [-0.24671704831828, 51.57156847781297],
                [-0.246008960120933, 51.57095721024684],
                [-0.246559002746476, 51.569862973245655],
                [-0.246057793111482, 51.56983839763856],
                [-0.246554899794157, 51.569032022499634],
                [-0.247382626803308, 51.56897065076873],
                [-0.247083529142907, 51.56868112705993],
                [-0.247309859173543, 51.56846149842143],
                [-0.248552529330033, 51.5685286107188],
                [-0.249428362510507, 51.5689049687634],
                [-0.252663492019137, 51.571688643408194],
                [-0.25310129671253, 51.572577305979586],
                [-0.251355407452078, 51.57313580314116],
                [-0.252623144921135, 51.57492347144054],
                [-0.253597935907802, 51.57731554408985],
                [-0.254613030941617, 51.57948699634273],
                [-0.254334933097693, 51.58158435729662],
                [-0.251667912557268, 51.58345731592014],
                [-0.248284356722674, 51.58436364203349],
                [-0.252536530243034, 51.58854459616508],
                [-0.258039635496796, 51.5925767052851],
                [-0.259770205979661, 51.594174224092015],
                [-0.267155911513881, 51.6003703486532],
                [-0.274932627182354, 51.60697099294183],
                [-0.279367943663357, 51.610743580903986],
                [-0.282199745334011, 51.6133559268248],
                [-0.287565635562117, 51.6171516987757],
                [-0.303953962195683, 51.63146415184549],
                [-0.305462313046658, 51.63336798943039],
                [-0.305597677157911, 51.634117191135864],
                [-0.304482780394745, 51.63634733719673],
                [-0.303569689566782, 51.636458240164195],
                [-0.302746593192066, 51.63613251897475],
                [-0.302436414616259, 51.63635104039666],
                [-0.29987767300298, 51.63575830369704],
                [-0.29723276934667, 51.63573166675739],
                [-0.29615110457172, 51.63544351283779],
                [-0.294406538211774, 51.63564658491243],
                [-0.291891362340547, 51.636475068613365],
                [-0.287810611378942, 51.636509151489015],
                [-0.285523941741269, 51.636945175807064],
                [-0.283898038367505, 51.637791866038626],
                [-0.281414720238532, 51.63834273399078],
                [-0.278636569387813, 51.63832002286096],
                [-0.276498771328069, 51.63886506150843],
                [-0.273737222534417, 51.63867072754544],
                [-0.274200187947379, 51.63930428825241],
                [-0.273145811759153, 51.641190632828256],
                [-0.272890291736135, 51.64209598411418],
                [-0.270060920048074, 51.64208400764642],
                [-0.268270403644632, 51.64238313160118],
                [-0.268369906638191, 51.64383054207482],
                [-0.266791169655346, 51.64410758863346],
                [-0.265235110495673, 51.64401716872222],
                [-0.264382920242884, 51.643624206081256],
                [-0.263296213990688, 51.64483017657358],
                [-0.261628651700807, 51.64398901043065],
                [-0.260736767033487, 51.64267013698247],
                [-0.258406979886174, 51.64199086402012],
                [-0.257356709107825, 51.64182870867077],
                [-0.256196081140704, 51.64348852257145],
                [-0.255482697844717, 51.64328459380886],
                [-0.254069555168071, 51.64417809678656],
                [-0.251581594667769, 51.647949272694476],
                [-0.24988100803052, 51.65461143231835],
                [-0.250816087553238, 51.6548061073087],
                [-0.251275188845432, 51.65553591653119],
                [-0.250607575244082, 51.656053814233125],
                [-0.249372918270114, 51.656054298719866],
                [-0.247890488740447, 51.65524447443445],
                [-0.243649515307314, 51.6566855153924],
                [-0.241390114393385, 51.657201124696996],
                [-0.241018380582897, 51.65683227264449],
                [-0.239224049156006, 51.65739616966509],
                [-0.2379959392345, 51.657785994932496],
                [-0.238300488773912, 51.65824646835559],
                [-0.236702742615759, 51.658771912011346],
                [-0.234732016720667, 51.65899768324733],
                [-0.23425217370442, 51.65824951214671],
                [-0.228944026720489, 51.65997251546035],
                [-0.228513559616748, 51.65996242588797],
                [-0.228082807563121, 51.658588212964595],
                [-0.226487518443282, 51.65715864927654],
                [-0.22606892793393, 51.65762261939535],
                [-0.219825732446319, 51.66065743500183],
                [-0.219272297449528, 51.66079651663876],
                [-0.218919533997528, 51.66005830162477],
                [-0.213418068629271, 51.66237475790373],
                [-0.212159957462204, 51.66135028133313],
                [-0.207888601397595, 51.6628579166867],
                [-0.211158575635625, 51.66695157084222],
                [-0.209863519276418, 51.667559494279175],
                [-0.207984221181829, 51.6665911470251],
                [-0.205659210973254, 51.6685977798401],
                [-0.202254731348437, 51.66780205874877],
                [-0.202633160191303, 51.66931135020746],
                [-0.203377623597464, 51.67012304858467],
                [-0.199896403871687, 51.67016685847911],
                [-0.199029938314097, 51.668203161376525]
              ]
            },
            properties: {
              id: 0
            }
          }
        ]
      }
    }
  },
  layers: [
    {
      id: "land",
      type: "background",
      metadata: {
        "mapbox:featureComponent": "land-and-water",
        "mapbox:group": "Land & water, land-and-water"
      },
      paint: {
        "background-color": "hsl(185, 3%, 94%)"
      }
    },
    {
      id: "landcover",
      type: "fill",
      source: "composite",
      "source-layer": "landcover",
      metadata: {
        "mapbox:featureComponent": "land-and-water",
        "mapbox:group": "Land & water, land-and-water"
      },
      maxzoom: 7,
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
      }
    },
    {
      id: "national-park",
      type: "fill",
      source: "composite",
      "source-layer": "landuse_overlay",
      metadata: {
        "mapbox:featureComponent": "land-and-water",
        "mapbox:group": "Land & water, land-and-water"
      },
      minzoom: 5,
      filter: ["==", ["get", "class"], "national_park"],
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
      }
    },
    {
      id: "landuse",
      type: "fill",
      source: "composite",
      "source-layer": "landuse",
      metadata: {
        "mapbox:featureComponent": "land-and-water",
        "mapbox:group": "Land & water, land-and-water"
      },
      minzoom: 5,
      filter: [
        "match",
        ["get", "class"],
        ["park", "airport", "glacier", "pitch", "sand"],
        true,
        false
      ],
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
      }
    },
    {
      id: "waterway",
      type: "line",
      source: "composite",
      "source-layer": "waterway",
      metadata: {
        "mapbox:featureComponent": "land-and-water",
        "mapbox:group": "Land & water, land-and-water"
      },
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
      }
    },
    {
      id: "water",
      type: "fill",
      source: "composite",
      "source-layer": "water",
      metadata: {
        "mapbox:featureComponent": "land-and-water",
        "mapbox:group": "Land & water, land-and-water"
      },
      paint: {
        "fill-color": "hsl(185, 3%, 83%)"
      }
    },
    {
      id: "land-structure-polygon",
      type: "fill",
      source: "composite",
      "source-layer": "structure",
      metadata: {
        "mapbox:featureComponent": "land-and-water",
        "mapbox:group": "Land & water, built"
      },
      minzoom: 13,
      filter: [
        "all",
        ["==", ["geometry-type"], "Polygon"],
        ["==", ["get", "class"], "land"]
      ],
      paint: {
        "fill-color": "hsl(185, 3%, 94%)"
      }
    },
    {
      id: "land-structure-line",
      type: "line",
      source: "composite",
      "source-layer": "structure",
      metadata: {
        "mapbox:featureComponent": "land-and-water",
        "mapbox:group": "Land & water, built"
      },
      minzoom: 13,
      filter: [
        "all",
        ["==", ["geometry-type"], "LineString"],
        ["==", ["get", "class"], "land"]
      ],
      layout: {
        "line-cap": "round"
      },
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
      }
    },
    {
      id: "aeroway-polygon",
      type: "fill",
      source: "composite",
      "source-layer": "aeroway",
      metadata: {
        "mapbox:featureComponent": "transit",
        "mapbox:group": "Transit, built"
      },
      minzoom: 11,
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
      paint: {
        "fill-color": "hsl(185, 3%, 100%)",
        "fill-opacity": ["interpolate", ["linear"], ["zoom"], 11, 0, 11.5, 1]
      }
    },
    {
      id: "aeroway-line",
      type: "line",
      source: "composite",
      "source-layer": "aeroway",
      metadata: {
        "mapbox:featureComponent": "transit",
        "mapbox:group": "Transit, built"
      },
      minzoom: 9,
      filter: ["==", ["geometry-type"], "LineString"],
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
      }
    },
    {
      id: "building-outline",
      type: "line",
      source: "composite",
      "source-layer": "building",
      metadata: {
        "mapbox:featureComponent": "buildings",
        "mapbox:group": "Buildings, built"
      },
      minzoom: 15,
      filter: [
        "all",
        ["!=", ["get", "type"], "building:part"],
        ["==", ["get", "underground"], "false"]
      ],
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
      }
    },
    {
      id: "building",
      type: "fill",
      source: "composite",
      "source-layer": "building",
      metadata: {
        "mapbox:featureComponent": "buildings",
        "mapbox:group": "Buildings, built"
      },
      minzoom: 15,
      filter: [
        "all",
        ["!=", ["get", "type"], "building:part"],
        ["==", ["get", "underground"], "false"]
      ],
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
      }
    },
    {
      id: "tunnel-street-minor-low",
      type: "line",
      source: "composite",
      "source-layer": "road",
      metadata: {
        "mapbox:featureComponent": "road-network",
        "mapbox:group": "Road network, tunnels-case"
      },
      minzoom: 13,
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
      }
    },
    {
      id: "tunnel-street-minor-case",
      type: "line",
      source: "composite",
      "source-layer": "road",
      metadata: {
        "mapbox:featureComponent": "road-network",
        "mapbox:group": "Road network, tunnels-case"
      },
      minzoom: 13,
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
      }
    },
    {
      id: "tunnel-primary-secondary-tertiary-case",
      type: "line",
      source: "composite",
      "source-layer": "road",
      metadata: {
        "mapbox:featureComponent": "road-network",
        "mapbox:group": "Road network, tunnels-case"
      },
      minzoom: 13,
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
      }
    },
    {
      id: "tunnel-major-link-case",
      type: "line",
      source: "composite",
      "source-layer": "road",
      metadata: {
        "mapbox:featureComponent": "road-network",
        "mapbox:group": "Road network, tunnels-case"
      },
      minzoom: 13,
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
      }
    },
    {
      id: "tunnel-motorway-trunk-case",
      type: "line",
      source: "composite",
      "source-layer": "road",
      metadata: {
        "mapbox:featureComponent": "road-network",
        "mapbox:group": "Road network, tunnels-case"
      },
      minzoom: 13,
      filter: [
        "all",
        ["==", ["get", "structure"], "tunnel"],
        ["match", ["get", "class"], ["motorway", "trunk"], true, false],
        ["==", ["geometry-type"], "LineString"]
      ],
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
      }
    },
    {
      id: "tunnel-construction",
      type: "line",
      source: "composite",
      "source-layer": "road",
      metadata: {
        "mapbox:featureComponent": "road-network",
        "mapbox:group": "Road network, tunnels-case"
      },
      minzoom: 14,
      filter: [
        "all",
        ["==", ["get", "structure"], "tunnel"],
        ["==", ["get", "class"], "construction"],
        ["==", ["geometry-type"], "LineString"]
      ],
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
      }
    },
    {
      id: "tunnel-major-link",
      type: "line",
      source: "composite",
      "source-layer": "road",
      metadata: {
        "mapbox:featureComponent": "road-network",
        "mapbox:group": "Road network, tunnels"
      },
      minzoom: 13,
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
      }
    },
    {
      id: "tunnel-street-minor",
      type: "line",
      source: "composite",
      "source-layer": "road",
      metadata: {
        "mapbox:featureComponent": "road-network",
        "mapbox:group": "Road network, tunnels"
      },
      minzoom: 13,
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
      }
    },
    {
      id: "tunnel-primary-secondary-tertiary",
      type: "line",
      source: "composite",
      "source-layer": "road",
      metadata: {
        "mapbox:featureComponent": "road-network",
        "mapbox:group": "Road network, tunnels"
      },
      minzoom: 13,
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
      }
    },
    {
      id: "tunnel-motorway-trunk",
      type: "line",
      source: "composite",
      "source-layer": "road",
      metadata: {
        "mapbox:featureComponent": "road-network",
        "mapbox:group": "Road network, tunnels"
      },
      minzoom: 13,
      filter: [
        "all",
        ["==", ["get", "structure"], "tunnel"],
        ["match", ["get", "class"], ["motorway", "trunk"], true, false],
        ["==", ["geometry-type"], "LineString"]
      ],
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
      }
    },
    {
      id: "turning-feature-outline",
      type: "symbol",
      source: "composite",
      "source-layer": "road",
      metadata: {
        "mapbox:featureComponent": "road-network",
        "mapbox:group": "Road network, surface-case"
      },
      minzoom: 15,
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
      }
    },
    {
      id: "road-minor-low",
      type: "line",
      source: "composite",
      "source-layer": "road",
      metadata: {
        "mapbox:featureComponent": "road-network",
        "mapbox:group": "Road network, surface-case"
      },
      minzoom: 13,
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
      layout: {
        "line-cap": ["step", ["zoom"], "butt", 14, "round"],
        "line-join": ["step", ["zoom"], "miter", 14, "round"]
      },
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
      }
    },
    {
      id: "road-minor-case",
      type: "line",
      source: "composite",
      "source-layer": "road",
      metadata: {
        "mapbox:featureComponent": "road-network",
        "mapbox:group": "Road network, surface-case"
      },
      minzoom: 13,
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
      layout: {
        "line-cap": ["step", ["zoom"], "butt", 14, "round"],
        "line-join": ["step", ["zoom"], "miter", 14, "round"]
      },
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
      }
    },
    {
      id: "road-street-low",
      type: "line",
      source: "composite",
      "source-layer": "road",
      metadata: {
        "mapbox:featureComponent": "road-network",
        "mapbox:group": "Road network, surface-case"
      },
      minzoom: 11,
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
      layout: {
        "line-cap": ["step", ["zoom"], "butt", 14, "round"],
        "line-join": ["step", ["zoom"], "miter", 14, "round"]
      },
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
      }
    },
    {
      id: "road-street-case",
      type: "line",
      source: "composite",
      "source-layer": "road",
      metadata: {
        "mapbox:featureComponent": "road-network",
        "mapbox:group": "Road network, surface-case"
      },
      minzoom: 11,
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
      layout: {
        "line-cap": ["step", ["zoom"], "butt", 14, "round"],
        "line-join": ["step", ["zoom"], "miter", 14, "round"]
      },
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
      }
    },
    {
      id: "road-secondary-tertiary-case",
      type: "line",
      source: "composite",
      "source-layer": "road",
      metadata: {
        "mapbox:featureComponent": "road-network",
        "mapbox:group": "Road network, surface-case"
      },
      minzoom: 8,
      filter: [
        "all",
        ["match", ["get", "class"], ["secondary", "tertiary"], true, false],
        ["match", ["get", "structure"], ["none", "ford"], true, false],
        ["==", ["geometry-type"], "LineString"]
      ],
      layout: {
        "line-cap": ["step", ["zoom"], "butt", 14, "round"],
        "line-join": ["step", ["zoom"], "miter", 14, "round"]
      },
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
      }
    },
    {
      id: "road-primary-case",
      type: "line",
      source: "composite",
      "source-layer": "road",
      metadata: {
        "mapbox:featureComponent": "road-network",
        "mapbox:group": "Road network, surface-case"
      },
      minzoom: 7,
      filter: [
        "all",
        ["==", ["get", "class"], "primary"],
        ["match", ["get", "structure"], ["none", "ford"], true, false],
        ["==", ["geometry-type"], "LineString"]
      ],
      layout: {
        "line-cap": ["step", ["zoom"], "butt", 14, "round"],
        "line-join": ["step", ["zoom"], "miter", 14, "round"]
      },
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
      }
    },
    {
      id: "road-major-link-case",
      type: "line",
      source: "composite",
      "source-layer": "road",
      metadata: {
        "mapbox:featureComponent": "road-network",
        "mapbox:group": "Road network, surface-case"
      },
      minzoom: 10,
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
      layout: {
        "line-cap": ["step", ["zoom"], "butt", 14, "round"],
        "line-join": ["step", ["zoom"], "miter", 14, "round"]
      },
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
      }
    },
    {
      id: "road-motorway-trunk-case",
      type: "line",
      source: "composite",
      "source-layer": "road",
      metadata: {
        "mapbox:featureComponent": "road-network",
        "mapbox:group": "Road network, surface-case"
      },
      minzoom: 5,
      filter: [
        "all",
        ["match", ["get", "class"], ["motorway", "trunk"], true, false],
        ["match", ["get", "structure"], ["none", "ford"], true, false],
        ["==", ["geometry-type"], "LineString"]
      ],
      layout: {
        "line-cap": ["step", ["zoom"], "butt", 14, "round"],
        "line-join": ["step", ["zoom"], "miter", 14, "round"]
      },
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
      }
    },
    {
      id: "road-construction",
      type: "line",
      source: "composite",
      "source-layer": "road",
      metadata: {
        "mapbox:featureComponent": "road-network",
        "mapbox:group": "Road network, surface-case"
      },
      minzoom: 14,
      filter: [
        "all",
        ["==", ["get", "class"], "construction"],
        ["match", ["get", "structure"], ["none", "ford"], true, false],
        ["==", ["geometry-type"], "LineString"]
      ],
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
      }
    },
    {
      id: "road-major-link",
      type: "line",
      source: "composite",
      "source-layer": "road",
      metadata: {
        "mapbox:featureComponent": "road-network",
        "mapbox:group": "Road network, surface"
      },
      minzoom: 10,
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
      layout: {
        "line-cap": ["step", ["zoom"], "butt", 13, "round"],
        "line-join": ["step", ["zoom"], "miter", 13, "round"]
      },
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
      }
    },
    {
      id: "road-minor",
      type: "line",
      source: "composite",
      "source-layer": "road",
      metadata: {
        "mapbox:featureComponent": "road-network",
        "mapbox:group": "Road network, surface"
      },
      minzoom: 13,
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
      layout: {
        "line-cap": ["step", ["zoom"], "butt", 14, "round"],
        "line-join": ["step", ["zoom"], "miter", 14, "round"]
      },
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
      }
    },
    {
      id: "road-street",
      type: "line",
      source: "composite",
      "source-layer": "road",
      metadata: {
        "mapbox:featureComponent": "road-network",
        "mapbox:group": "Road network, surface"
      },
      minzoom: 11,
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
      layout: {
        "line-cap": ["step", ["zoom"], "butt", 14, "round"],
        "line-join": ["step", ["zoom"], "miter", 14, "round"]
      },
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
      }
    },
    {
      id: "road-secondary-tertiary",
      type: "line",
      source: "composite",
      "source-layer": "road",
      metadata: {
        "mapbox:featureComponent": "road-network",
        "mapbox:group": "Road network, surface"
      },
      minzoom: 8,
      filter: [
        "all",
        ["match", ["get", "class"], ["secondary", "tertiary"], true, false],
        ["match", ["get", "structure"], ["none", "ford"], true, false],
        ["==", ["geometry-type"], "LineString"]
      ],
      layout: {
        "line-cap": ["step", ["zoom"], "butt", 14, "round"],
        "line-join": ["step", ["zoom"], "miter", 14, "round"]
      },
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
      }
    },
    {
      id: "road-primary",
      type: "line",
      source: "composite",
      "source-layer": "road",
      metadata: {
        "mapbox:featureComponent": "road-network",
        "mapbox:group": "Road network, surface"
      },
      minzoom: 7,
      filter: [
        "all",
        ["==", ["get", "class"], "primary"],
        ["match", ["get", "structure"], ["none", "ford"], true, false],
        ["==", ["geometry-type"], "LineString"]
      ],
      layout: {
        "line-cap": ["step", ["zoom"], "butt", 14, "round"],
        "line-join": ["step", ["zoom"], "miter", 14, "round"]
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
      }
    },
    {
      id: "road-motorway-trunk",
      type: "line",
      source: "composite",
      "source-layer": "road",
      metadata: {
        "mapbox:featureComponent": "road-network",
        "mapbox:group": "Road network, surface"
      },
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
      }
    },
    {
      id: "road-rail",
      type: "line",
      source: "composite",
      "source-layer": "road",
      metadata: {
        "mapbox:featureComponent": "transit",
        "mapbox:group": "Transit, surface"
      },
      minzoom: 13,
      filter: [
        "all",
        ["match", ["get", "class"], ["major_rail", "minor_rail"], true, false],
        ["match", ["get", "structure"], ["none", "ford"], true, false]
      ],
      layout: {
        "line-join": "round"
      },
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
      }
    },
    {
      id: "turning-feature",
      type: "symbol",
      source: "composite",
      "source-layer": "road",
      metadata: {
        "mapbox:featureComponent": "road-network",
        "mapbox:group": "Road network, surface-icons"
      },
      minzoom: 15,
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
      }
    },
    {
      id: "bridge-street-minor-low",
      type: "line",
      source: "composite",
      "source-layer": "road",
      metadata: {
        "mapbox:featureComponent": "road-network",
        "mapbox:group": "Road network, bridges-case"
      },
      minzoom: 13,
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
      layout: {
        "line-cap": ["step", ["zoom"], "butt", 14, "round"],
        "line-join": ["step", ["zoom"], "miter", 14, "round"]
      },
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
      }
    },
    {
      id: "bridge-street-minor-case",
      type: "line",
      source: "composite",
      "source-layer": "road",
      metadata: {
        "mapbox:featureComponent": "road-network",
        "mapbox:group": "Road network, bridges-case"
      },
      minzoom: 13,
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
      layout: {
        "line-join": "round"
      },
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
      }
    },
    {
      id: "bridge-primary-secondary-tertiary-case",
      type: "line",
      source: "composite",
      "source-layer": "road",
      metadata: {
        "mapbox:featureComponent": "road-network",
        "mapbox:group": "Road network, bridges-case"
      },
      minzoom: 13,
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
      layout: {
        "line-join": "round"
      },
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
      }
    },
    {
      id: "bridge-major-link-case",
      type: "line",
      source: "composite",
      "source-layer": "road",
      metadata: {
        "mapbox:featureComponent": "road-network",
        "mapbox:group": "Road network, bridges-case"
      },
      minzoom: 13,
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
      layout: {
        "line-join": "round"
      },
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
      }
    },
    {
      id: "bridge-motorway-trunk-case",
      type: "line",
      source: "composite",
      "source-layer": "road",
      metadata: {
        "mapbox:featureComponent": "road-network",
        "mapbox:group": "Road network, bridges-case"
      },
      minzoom: 13,
      filter: [
        "all",
        ["==", ["get", "structure"], "bridge"],
        ["match", ["get", "class"], ["motorway", "trunk"], true, false],
        ["<=", ["get", "layer"], 1],
        ["==", ["geometry-type"], "LineString"]
      ],
      layout: {
        "line-join": "round"
      },
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
      }
    },
    {
      id: "bridge-construction",
      type: "line",
      source: "composite",
      "source-layer": "road",
      metadata: {
        "mapbox:featureComponent": "road-network",
        "mapbox:group": "Road network, bridges-case"
      },
      minzoom: 14,
      filter: [
        "all",
        ["==", ["get", "structure"], "bridge"],
        ["==", ["get", "class"], "construction"],
        ["==", ["geometry-type"], "LineString"]
      ],
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
      }
    },
    {
      id: "bridge-major-link",
      type: "line",
      source: "composite",
      "source-layer": "road",
      metadata: {
        "mapbox:featureComponent": "road-network",
        "mapbox:group": "Road network, bridges"
      },
      minzoom: 13,
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
      layout: {
        "line-cap": "round",
        "line-join": "round"
      },
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
      }
    },
    {
      id: "bridge-street-minor",
      type: "line",
      source: "composite",
      "source-layer": "road",
      metadata: {
        "mapbox:featureComponent": "road-network",
        "mapbox:group": "Road network, bridges"
      },
      minzoom: 13,
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
      layout: {
        "line-cap": ["step", ["zoom"], "butt", 14, "round"],
        "line-join": ["step", ["zoom"], "miter", 14, "round"]
      },
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
      }
    },
    {
      id: "bridge-primary-secondary-tertiary",
      type: "line",
      source: "composite",
      "source-layer": "road",
      metadata: {
        "mapbox:featureComponent": "road-network",
        "mapbox:group": "Road network, bridges"
      },
      minzoom: 13,
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
      layout: {
        "line-cap": ["step", ["zoom"], "butt", 14, "round"],
        "line-join": ["step", ["zoom"], "miter", 14, "round"]
      },
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
      }
    },
    {
      id: "bridge-motorway-trunk",
      type: "line",
      source: "composite",
      "source-layer": "road",
      metadata: {
        "mapbox:featureComponent": "road-network",
        "mapbox:group": "Road network, bridges"
      },
      minzoom: 13,
      filter: [
        "all",
        ["==", ["get", "structure"], "bridge"],
        ["match", ["get", "class"], ["motorway", "trunk"], true, false],
        ["<=", ["get", "layer"], 1],
        ["==", ["geometry-type"], "LineString"]
      ],
      layout: {
        "line-cap": "round",
        "line-join": "round"
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
      }
    },
    {
      id: "bridge-rail",
      type: "line",
      source: "composite",
      "source-layer": "road",
      metadata: {
        "mapbox:featureComponent": "transit",
        "mapbox:group": "Transit, bridges"
      },
      minzoom: 13,
      filter: [
        "all",
        ["==", ["get", "structure"], "bridge"],
        ["match", ["get", "class"], ["major_rail", "minor_rail"], true, false]
      ],
      layout: {
        "line-join": "round"
      },
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
      }
    },
    {
      id: "bridge-major-link-2-case",
      type: "line",
      source: "composite",
      "source-layer": "road",
      metadata: {
        "mapbox:featureComponent": "road-network",
        "mapbox:group": "Road network, bridges-2"
      },
      minzoom: 13,
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
      layout: {
        "line-join": "round"
      },
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
      }
    },
    {
      id: "bridge-motorway-trunk-2-case",
      type: "line",
      source: "composite",
      "source-layer": "road",
      metadata: {
        "mapbox:featureComponent": "road-network",
        "mapbox:group": "Road network, bridges-2"
      },
      minzoom: 13,
      filter: [
        "all",
        ["==", ["get", "structure"], "bridge"],
        [">=", ["get", "layer"], 2],
        ["match", ["get", "class"], ["motorway", "trunk"], true, false],
        ["==", ["geometry-type"], "LineString"]
      ],
      layout: {
        "line-join": "round"
      },
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
      }
    },
    {
      id: "bridge-major-link-2",
      type: "line",
      source: "composite",
      "source-layer": "road",
      metadata: {
        "mapbox:featureComponent": "road-network",
        "mapbox:group": "Road network, bridges-2"
      },
      minzoom: 13,
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
      layout: {
        "line-cap": "round",
        "line-join": "round"
      },
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
      }
    },
    {
      id: "bridge-motorway-trunk-2",
      type: "line",
      source: "composite",
      "source-layer": "road",
      metadata: {
        "mapbox:featureComponent": "road-network",
        "mapbox:group": "Road network, bridges-2"
      },
      minzoom: 13,
      filter: [
        "all",
        ["==", ["get", "structure"], "bridge"],
        [">=", ["get", "layer"], 2],
        ["match", ["get", "class"], ["motorway", "trunk"], true, false],
        ["==", ["geometry-type"], "LineString"]
      ],
      layout: {
        "line-cap": ["step", ["zoom"], "butt", 14, "round"],
        "line-join": ["step", ["zoom"], "miter", 14, "round"]
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
      }
    },
    {
      id: "admin-1-boundary-bg",
      type: "line",
      source: "composite",
      "source-layer": "admin",
      metadata: {
        "mapbox:featureComponent": "admin-boundaries",
        "mapbox:group": "Administrative boundaries, admin"
      },
      filter: [
        "all",
        ["==", ["get", "admin_level"], 1],
        ["==", ["get", "maritime"], "false"],
        ["match", ["get", "worldview"], ["all", "US"], true, false]
      ],
      layout: {
        "line-join": "bevel"
      },
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
      }
    },
    {
      id: "admin-0-boundary-bg",
      type: "line",
      source: "composite",
      "source-layer": "admin",
      metadata: {
        "mapbox:featureComponent": "admin-boundaries",
        "mapbox:group": "Administrative boundaries, admin"
      },
      minzoom: 1,
      filter: [
        "all",
        ["==", ["get", "admin_level"], 0],
        ["==", ["get", "maritime"], "false"],
        ["match", ["get", "worldview"], ["all", "US"], true, false]
      ],
      paint: {
        "line-width": ["interpolate", ["linear"], ["zoom"], 3, 3.5, 10, 8],
        "line-color": "hsl(185, 0%, 84%)",
        "line-opacity": ["interpolate", ["linear"], ["zoom"], 3, 0, 4, 0.5],
        "line-translate": [0, 0],
        "line-blur": ["interpolate", ["linear"], ["zoom"], 3, 0, 10, 2]
      }
    },
    {
      id: "admin-1-boundary",
      type: "line",
      source: "composite",
      "source-layer": "admin",
      metadata: {
        "mapbox:featureComponent": "admin-boundaries",
        "mapbox:group": "Administrative boundaries, admin"
      },
      filter: [
        "all",
        ["==", ["get", "admin_level"], 1],
        ["==", ["get", "maritime"], "false"],
        ["match", ["get", "worldview"], ["all", "US"], true, false]
      ],
      layout: {
        "line-join": "round",
        "line-cap": "round"
      },
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
      }
    },
    {
      id: "admin-0-boundary",
      type: "line",
      source: "composite",
      "source-layer": "admin",
      metadata: {
        "mapbox:featureComponent": "admin-boundaries",
        "mapbox:group": "Administrative boundaries, admin"
      },
      minzoom: 1,
      filter: [
        "all",
        ["==", ["get", "admin_level"], 0],
        ["==", ["get", "disputed"], "false"],
        ["==", ["get", "maritime"], "false"],
        ["match", ["get", "worldview"], ["all", "US"], true, false]
      ],
      layout: {
        "line-join": "round",
        "line-cap": "round"
      },
      paint: {
        "line-color": "hsl(185, 0%, 67%)",
        "line-width": ["interpolate", ["linear"], ["zoom"], 3, 0.5, 10, 2],
        "line-dasharray": [10, 0]
      }
    },
    {
      id: "admin-0-boundary-disputed",
      type: "line",
      source: "composite",
      "source-layer": "admin",
      metadata: {
        "mapbox:featureComponent": "admin-boundaries",
        "mapbox:group": "Administrative boundaries, admin"
      },
      minzoom: 1,
      filter: [
        "all",
        ["==", ["get", "disputed"], "true"],
        ["==", ["get", "admin_level"], 0],
        ["==", ["get", "maritime"], "false"],
        ["match", ["get", "worldview"], ["all", "US"], true, false]
      ],
      layout: {
        "line-join": "round"
      },
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
      }
    },
    {
      id: "road-label",
      type: "symbol",
      source: "composite",
      "source-layer": "road",
      metadata: {
        "mapbox:featureComponent": "road-network",
        "mapbox:group": "Road network, road-labels"
      },
      minzoom: 10,
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
      paint: {
        "text-color": "hsl(185, 3%, 47%)",
        "text-halo-color": "hsl(185, 1%, 100%)",
        "text-halo-width": 1,
        "text-halo-blur": 1
      }
    },
    {
      id: "waterway-label",
      type: "symbol",
      source: "composite",
      "source-layer": "natural_label",
      metadata: {
        "mapbox:featureComponent": "natural-features",
        "mapbox:group": "Natural features, natural-labels"
      },
      minzoom: 13,
      filter: [
        "all",
        ["match", ["get", "class"], ["canal", "river", "stream"], true, false],
        ["==", ["geometry-type"], "LineString"]
      ],
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
      paint: {
        "text-color": "hsl(185, 3%, 55%)"
      }
    },
    {
      id: "natural-line-label",
      type: "symbol",
      source: "composite",
      "source-layer": "natural_label",
      metadata: {
        "mapbox:featureComponent": "natural-features",
        "mapbox:group": "Natural features, natural-labels"
      },
      minzoom: 4,
      filter: [
        "all",
        ["match", ["get", "class"], ["glacier", "landform"], true, false],
        ["==", ["geometry-type"], "LineString"],
        ["<=", ["get", "filterrank"], 1]
      ],
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
      paint: {
        "text-halo-width": 0.5,
        "text-halo-color": "hsl(185, 1%, 100%)",
        "text-halo-blur": 0.5,
        "text-color": "hsl(185, 3%, 47%)"
      }
    },
    {
      id: "natural-point-label",
      type: "symbol",
      source: "composite",
      "source-layer": "natural_label",
      metadata: {
        "mapbox:featureComponent": "natural-features",
        "mapbox:group": "Natural features, natural-labels"
      },
      minzoom: 4,
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
      }
    },
    {
      id: "water-line-label",
      type: "symbol",
      source: "composite",
      "source-layer": "natural_label",
      metadata: {
        "mapbox:featureComponent": "natural-features",
        "mapbox:group": "Natural features, natural-labels"
      },
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
      paint: {
        "text-color": "hsl(185, 3%, 55%)"
      }
    },
    {
      id: "water-point-label",
      type: "symbol",
      source: "composite",
      "source-layer": "natural_label",
      metadata: {
        "mapbox:featureComponent": "natural-features",
        "mapbox:group": "Natural features, natural-labels"
      },
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
      paint: {
        "text-color": "hsl(185, 3%, 55%)"
      }
    },
    {
      id: "poi-label",
      type: "symbol",
      source: "composite",
      "source-layer": "poi_label",
      metadata: {
        "mapbox:featureComponent": "point-of-interest-labels",
        "mapbox:group": "Point of interest labels, poi-labels"
      },
      minzoom: 6,
      filter: [
        "<=",
        ["get", "filterrank"],
        ["+", ["step", ["zoom"], 0, 16, 1, 17, 2], 1]
      ],
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
      }
    },
    {
      id: "airport-label",
      type: "symbol",
      source: "composite",
      "source-layer": "airport_label",
      metadata: {
        "mapbox:featureComponent": "transit",
        "mapbox:group": "Transit, transit-labels"
      },
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
      }
    },
    {
      id: "settlement-subdivision-label",
      type: "symbol",
      source: "composite",
      "source-layer": "place_label",
      metadata: {
        "mapbox:featureComponent": "place-labels",
        "mapbox:group": "Place labels, place-labels"
      },
      minzoom: 10,
      maxzoom: 15,
      filter: [
        "all",
        ["==", ["get", "class"], "settlement_subdivision"],
        ["<=", ["get", "filterrank"], 4]
      ],
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
      paint: {
        "text-halo-color": "hsl(185, 1%, 100%)",
        "text-halo-width": 1,
        "text-color": "hsl(185, 3%, 66%)",
        "text-halo-blur": 0.5
      }
    },
    {
      id: "settlement-minor-label",
      type: "symbol",
      source: "composite",
      "source-layer": "place_label",
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
      }
    },
    {
      id: "settlement-major-label",
      type: "symbol",
      source: "composite",
      "source-layer": "place_label",
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
      }
    },
    {
      id: "state-label",
      type: "symbol",
      source: "composite",
      "source-layer": "place_label",
      metadata: {
        "mapbox:featureComponent": "place-labels",
        "mapbox:group": "Place labels, place-labels"
      },
      minzoom: 3,
      maxzoom: 9,
      filter: ["==", ["get", "class"], "state"],
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
      paint: {
        "text-color": "hsl(185, 3%, 68%)",
        "text-halo-color": "hsl(185, 1%, 100%)",
        "text-halo-width": 1
      }
    },
    {
      id: "country-label",
      type: "symbol",
      source: "composite",
      "source-layer": "place_label",
      metadata: {
        "mapbox:featureComponent": "place-labels",
        "mapbox:group": "Place labels, place-labels"
      },
      minzoom: 1,
      maxzoom: 10,
      filter: ["==", ["get", "class"], "country"],
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
      }
    },
    {
      id: "lib-users",
      type: "fill",
      source: "composite",
      "source-layer": "out",
      paint: {
        "fill-opacity": [
          "case",
          ["boolean", ["feature-state", "hover"], false],
          0.6,
          0.35
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
      }
    },
    {
      id: "la",
      type: "line",
      source: "la",
      layout: {
        "line-join": "round",
        "line-cap": "round"
      },
      paint: {
        "line-color": "#888",
        "line-width": 3
      }
    }
  ]
};
