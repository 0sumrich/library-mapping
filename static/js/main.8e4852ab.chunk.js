(this["webpackJsonplib-map"]=this["webpackJsonplib-map"]||[]).push([[0],{40:function(e,t,r){e.exports=r(52)},45:function(e,t,r){},51:function(e,t,r){},52:function(e,t,r){"use strict";r.r(t);var a=r(0),n=r.n(a),i=r(9),o=r.n(i),l=(r(45),r(11)),c=r(3),s=r(2),p=function(e){var t=e.coordinates;return n.a.createElement(s.c,{type:"line",id:"la",layout:{"line-join":"round","line-cap":"round"},paint:{"line-color":"#888","line-width":3}},n.a.createElement(s.a,{coordinates:t}))},u=function(e){var t=e.feature,r=e.mouse;return t&&r?n.a.createElement(s.d,{coordinates:[r.lng,r.lat],offset:15},n.a.createElement("p",null,t.properties.LSOA11NM),n.a.createElement("p",null,"Number of borrowers: ".concat(t.properties["Number of borrowers"])),n.a.createElement("p",null,t.properties.description)):null},y=Object(s.e)({accessToken:"pk.eyJ1IjoiMHN1bXJpY2giLCJhIjoiY2s0ZWh6ZWkzMGN5YTNlbzdmbGQybmd0YyJ9.EnAACiaJim37TfLDFGOmUQ"}),d=function(e,t){return[{source:"composite",sourceLayer:"out",id:e},{hover:t}]},m=function(e){var t=e.la,r=(e.mapStyle,e.libraries),i=Object(a.useState)(null),o=Object(c.a)(i,2),m=o[0],b=o[1],h=Object(a.useState)(null),g=Object(c.a)(h,2),f=g[0],v=g[1],E=null,L=t.features[0],F=L.properties,x=F.centroid,w=F.bounds;return n.a.createElement(y,{style:"mapbox://styles/0sumrich/ck55oh8go05ks1cqqi7lavhcq",containerStyle:{height:"100vh",width:"100vw"},onMouseMove:function(e,t){var r=e.queryRenderedFeatures(t.point,{layers:["lib-users"]});if(b(t.lngLat),r.length>0){var a=r[0];v(a);var n=a.id;E!==n&&E&&e.setFeatureState.apply(e,Object(l.a)(d(E,!1))),e.setFeatureState.apply(e,Object(l.a)(d(n,!0))),E=n}else E&&e.setFeatureState.apply(e,Object(l.a)(d(E,!1))),E=null,v(null)},center:x,fitBounds:w,fitBoundsOptions:{padding:73}},n.a.createElement(p,{coordinates:L.geometry.coordinates[0]}),n.a.createElement(u,{feature:f,mouse:m}),n.a.createElement(s.b,{data:r,circleLayout:{},circlePaint:{"circle-radius":3}}))},b=r(10),h=r.n(b),g=r(4);var f=function(e,t){for(var r,a=g.c("#legend"),n=5,i=5,o=5,l=5,c=a.node().getBoundingClientRect().width-l-i,s=50-n-o,p=a.append("svg").attr("width",c).attr("height",s).append("g").attr("transform","translate(".concat(l,", ").concat(n,")")),u=g.b().domain([0,c/2]).range([0,1]),y=g.b().domain([c/2,c]).range([0,1]),d=function(t){return g.a(e[1],e[2])(y(t))},m=0;m<c;m++){var b={x:m,y:0,width:1,height:s/2,fill:m<c/2?(r=m,g.a(e[0],e[1])(u(r))):d(m)};p.append("rect").attr("x",b.x).attr("y",b.y).attr("width",b.width).attr("height",b.height).attr("fill",b.fill)}p.append("text").attr("x",0).attr("y",10+s/2).attr("class","legend-text").text(t[0]),p.append("text").attr("x",c/2).attr("y",10+s/2).attr("class","legend-text").attr("text-anchor","middle").text(t[1]),p.append("text").attr("x",c-5).attr("y",10+s/2).attr("class","legend-text").attr("text-anchor","end").text(t[2])},v="https://api.mapbox.com/styles/v1/0sumrich/".concat("ck55oh8go05ks1cqqi7lavhcq","?access_token=").concat("pk.eyJ1IjoiMHN1bXJpY2giLCJhIjoiY2s0ZWh6ZWkzMGN5YTNlbzdmbGQybmd0YyJ9.EnAACiaJim37TfLDFGOmUQ"),E=function(){var e=Object(a.useState)(!1),t=Object(c.a)(e,2),r=t[0],i=t[1];Object(a.useEffect)((function(){!function(){var e,t,r,a,n;h.a.async((function(i){for(;;)switch(i.prev=i.next){case 0:return i.prev=0,i.next=3,h.a.awrap(fetch(v));case 3:return e=i.sent,i.next=6,h.a.awrap(e.json());case 6:t=i.sent,r=t.layers[73].paint["fill-color"],a=[r[4],r[6],r[8]],n=[r[3],r[5],r[7]],f(a,n),i.next=16;break;case 13:i.prev=13,i.t0=i.catch(0),console.log(i.t0);case 16:case"end":return i.stop()}}),null,null,[[0,13]])}()}),[]);return n.a.createElement("div",{id:"legend",className:r?"hidden":null},n.a.createElement("p",null,"Number of members in each area"),n.a.createElement("div",{className:"span",onClick:function(){return i(!r)}},n.a.createElement("img",{className:"icon",src:"close.png",height:"10px",width:"10px"})))},L=(r(51),function(){return n.a.createElement("div",{className:"title-container"},n.a.createElement("h1",null,"Barnet Libraries"),n.a.createElement("p",null,"Users in Lower Layer Super Output Areas"))}),F=function(e){var t=e.la,r=e.libraries;return n.a.createElement("main",null,n.a.createElement(L,null),n.a.createElement(m,{la:t,libraries:r}),n.a.createElement(E,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(n.a.createElement(F,{la:{type:"FeatureCollection",crs:{type:"name",properties:{name:"urn:ogc:def:crs:OGC:1.3:CRS84"}},features:[{type:"Feature",properties:{LAD13CD:"E09000003",LAD13CDO:"00AC",LAD13NM:"Barnet",LAD13NMW:null,centroid:[-.2100087245492908,51.61601927459769],bounds:[[-.305597677157911,51.555186112122335],[-.129147276768588,51.67016685847911]]},geometry:{type:"Polygon",coordinates:[[[-.199029938314097,51.668203161376525],[-.196639013960932,51.6681430925472],[-.196184172713469,51.668526370133776],[-.194877116637175,51.66830216397771],[-.196689871010208,51.665478576588804],[-.192555927543839,51.66474600368934],[-.191091827594294,51.66389347753857],[-.187815400981271,51.667875984661244],[-.185829309693543,51.668506251026756],[-.182110443559578,51.668600714230706],[-.185891083694433,51.66283309957083],[-.175553950446671,51.66056787194619],[-.165041715584015,51.65822435518756],[-.163504294906036,51.65816615088901],[-.160515318559911,51.65675074256641],[-.154787657877713,51.65553054970324],[-.154722782882244,51.65502776026582],[-.15378195658296,51.65466407104238],[-.153490292144939,51.653303446637466],[-.154230786078533,51.65297517971468],[-.154050991247479,51.652561405409074],[-.153501978809634,51.652695751035566],[-.152564578322234,51.65146704609216],[-.152270564327932,51.64984560386918],[-.151019481032727,51.650075896449586],[-.149919641031998,51.64879245579583],[-.152273975516642,51.6479842503077],[-.152383382731451,51.64763976807859],[-.151068338491476,51.64720542205628],[-.152168178443864,51.64582263295208],[-.151330207764412,51.64528069471296],[-.149174486680699,51.64526112195878],[-.149048033393841,51.64417825235977],[-.147920827555277,51.64208145356085],[-.145102578174885,51.642646644315484],[-.142319301536081,51.63931324780089],[-.13843793825733,51.63651450512081],[-.134534190303682,51.634695440122094],[-.134436718896719,51.63397180593743],[-.134003985877411,51.63404091436852],[-.133295269934678,51.63326484889992],[-.1313568598273,51.632577570900175],[-.129147276768588,51.63226631619101],[-.129803551555446,51.63096029140875],[-.130205651533001,51.63102065024644],[-.131147218407707,51.62966250951988],[-.130466835497026,51.629377409916316],[-.133536774220952,51.62636076238739],[-.13420620086432,51.62398932745736],[-.135070035623235,51.62233586965996],[-.135571868128686,51.62239329873231],[-.13546204149233,51.62168925094821],[-.140639590538747,51.61773200300027],[-.141291431209031,51.61754629235325],[-.142057370223235,51.616158306775745],[-.144536107594742,51.61548441822037],[-.138785614410406,51.610192195820304],[-.1434506524551,51.60884617669557],[-.143103506600652,51.6063462012401],[-.142090599884761,51.604591047196195],[-.1421409036762,51.603287948408706],[-.144199385657771,51.601110185784385],[-.144495064796318,51.600126597708204],[-.147000702709219,51.599195004701244],[-.15138599066662,51.59745039271867],[-.153030520778325,51.59923069521369],[-.153463600875163,51.600870524056894],[-.153312285502066,51.602678307429734],[-.154643781047763,51.60413622850873],[-.156141367790357,51.605096767546605],[-.155987250998171,51.6054432500995],[-.156367676220716,51.605356604633336],[-.161786563503232,51.597476159813134],[-.159675463877847,51.59226527005336],[-.158864004452629,51.59237483968574],[-.158689306344716,51.59205376891263],[-.159480845130241,51.591579696883926],[-.160273159858916,51.58797718329063],[-.158640577407262,51.58797496025071],[-.15870503195671,51.58663071095841],[-.157430033741605,51.58656843605397],[-.157182315697613,51.586197657225874],[-.157922075223614,51.58621646471608],[-.1579661538608,51.58573336619887],[-.1596429706729,51.58446027328604],[-.161350967906813,51.5852729791779],[-.16574670591534,51.58322136109325],[-.166215675085277,51.58204169565733],[-.166896098828117,51.58195520812224],[-.167219823495958,51.581299324219074],[-.166838420584901,51.57865410235908],[-.168088487178118,51.57692640232941],[-.169345647486203,51.577426213828005],[-.169753480053378,51.576399350136484],[-.1694840471559,51.573981590781514],[-.171181543111701,51.57361239259299],[-.171285290056077,51.572429711799224],[-.173461368606816,51.571099457902946],[-.173730961508166,51.56991755775],[-.174406903537118,51.5692536464155],[-.178078357792813,51.57043115907187],[-.178284595510799,51.570036897559014],[-.180974606398256,51.569668574886265],[-.180833813033346,51.56943618729458],[-.183567514128142,51.568006482544966],[-.183811407946478,51.5674985911444],[-.18616758887062,51.56692085592126],[-.189643377828476,51.56525339057328],[-.190371225981506,51.56276563534663],[-.19114033983406,51.56163546185956],[-.1923200038639,51.56153853894816],[-.194852004564886,51.56048134807254],[-.196919620713664,51.56062104722616],[-.196817790318361,51.55918339959693],[-.197623270476517,51.55887924349754],[-.197984673709569,51.559115898530706],[-.198479165491724,51.55875930048511],[-.198533270598432,51.55815674260043],[-.199660261843726,51.55697985229276],[-.199410043371803,51.556192776449116],[-.205815267344318,51.55530533172621],[-.205966149078882,51.556419995442226],[-.208845146654708,51.55573110189622],[-.210031157439332,51.55675364858272],[-.213501362550834,51.555186112122335],[-.218650256071725,51.55941796556712],[-.2206627302808,51.56167320818137],[-.222389883071192,51.56329552748048],[-.226720623083191,51.56679342957186],[-.228819097623936,51.56796804776575],[-.232235584755792,51.5709528619123],[-.233442530669313,51.57197997579596],[-.234586319134685,51.57177058205876],[-.235645024993498,51.57226759349096],[-.23540110033361,51.572566966964665],[-.235921980665297,51.57230772644149],[-.237664629281435,51.572471492380686],[-.237721589891249,51.57211805054771],[-.238175417106331,51.57209968641518],[-.238015035581118,51.57176905891263],[-.238866517192598,51.572252138685066],[-.239995642861699,51.57208563535573],[-.239969522948227,51.57238828456636],[-.241108475731707,51.57211670786637],[-.241374804606561,51.57265664115839],[-.242015584686237,51.57280472372303],[-.243645996259659,51.57232466829147],[-.244289016353002,51.57256449349628],[-.245241945959271,51.57191421504344],[-.246042471420845,51.57218606033435],[-.24671704831828,51.57156847781297],[-.246008960120933,51.57095721024684],[-.246559002746476,51.569862973245655],[-.246057793111482,51.56983839763856],[-.246554899794157,51.569032022499634],[-.247382626803308,51.56897065076873],[-.247083529142907,51.56868112705993],[-.247309859173543,51.56846149842143],[-.248552529330033,51.5685286107188],[-.249428362510507,51.5689049687634],[-.252663492019137,51.571688643408194],[-.25310129671253,51.572577305979586],[-.251355407452078,51.57313580314116],[-.252623144921135,51.57492347144054],[-.253597935907802,51.57731554408985],[-.254613030941617,51.57948699634273],[-.254334933097693,51.58158435729662],[-.251667912557268,51.58345731592014],[-.248284356722674,51.58436364203349],[-.252536530243034,51.58854459616508],[-.258039635496796,51.5925767052851],[-.259770205979661,51.594174224092015],[-.267155911513881,51.6003703486532],[-.274932627182354,51.60697099294183],[-.279367943663357,51.610743580903986],[-.282199745334011,51.6133559268248],[-.287565635562117,51.6171516987757],[-.303953962195683,51.63146415184549],[-.305462313046658,51.63336798943039],[-.305597677157911,51.634117191135864],[-.304482780394745,51.63634733719673],[-.303569689566782,51.636458240164195],[-.302746593192066,51.63613251897475],[-.302436414616259,51.63635104039666],[-.29987767300298,51.63575830369704],[-.29723276934667,51.63573166675739],[-.29615110457172,51.63544351283779],[-.294406538211774,51.63564658491243],[-.291891362340547,51.636475068613365],[-.287810611378942,51.636509151489015],[-.285523941741269,51.636945175807064],[-.283898038367505,51.637791866038626],[-.281414720238532,51.63834273399078],[-.278636569387813,51.63832002286096],[-.276498771328069,51.63886506150843],[-.273737222534417,51.63867072754544],[-.274200187947379,51.63930428825241],[-.273145811759153,51.641190632828256],[-.272890291736135,51.64209598411418],[-.270060920048074,51.64208400764642],[-.268270403644632,51.64238313160118],[-.268369906638191,51.64383054207482],[-.266791169655346,51.64410758863346],[-.265235110495673,51.64401716872222],[-.264382920242884,51.643624206081256],[-.263296213990688,51.64483017657358],[-.261628651700807,51.64398901043065],[-.260736767033487,51.64267013698247],[-.258406979886174,51.64199086402012],[-.257356709107825,51.64182870867077],[-.256196081140704,51.64348852257145],[-.255482697844717,51.64328459380886],[-.254069555168071,51.64417809678656],[-.251581594667769,51.647949272694476],[-.24988100803052,51.65461143231835],[-.250816087553238,51.6548061073087],[-.251275188845432,51.65553591653119],[-.250607575244082,51.656053814233125],[-.249372918270114,51.656054298719866],[-.247890488740447,51.65524447443445],[-.243649515307314,51.6566855153924],[-.241390114393385,51.657201124696996],[-.241018380582897,51.65683227264449],[-.239224049156006,51.65739616966509],[-.2379959392345,51.657785994932496],[-.238300488773912,51.65824646835559],[-.236702742615759,51.658771912011346],[-.234732016720667,51.65899768324733],[-.23425217370442,51.65824951214671],[-.228944026720489,51.65997251546035],[-.228513559616748,51.65996242588797],[-.228082807563121,51.658588212964595],[-.226487518443282,51.65715864927654],[-.22606892793393,51.65762261939535],[-.219825732446319,51.66065743500183],[-.219272297449528,51.66079651663876],[-.218919533997528,51.66005830162477],[-.213418068629271,51.66237475790373],[-.212159957462204,51.66135028133313],[-.207888601397595,51.6628579166867],[-.211158575635625,51.66695157084222],[-.209863519276418,51.667559494279175],[-.207984221181829,51.6665911470251],[-.205659210973254,51.6685977798401],[-.202254731348437,51.66780205874877],[-.202633160191303,51.66931135020746],[-.203377623597464,51.67012304858467],[-.199896403871687,51.67016685847911],[-.199029938314097,51.668203161376525]]]}}]},libraries:{type:"FeatureCollection",features:[{type:"Feature",geometry:{type:"Point",coordinates:[-.229028,51.588619]},properties:{library:"Hendon Library"}},{type:"Feature",geometry:{type:"Point",coordinates:[-.16759,51.593929]},properties:{library:"East Finchley Library"}},{type:"Feature",geometry:{type:"Point",coordinates:[-.263219871,51.603204078]},properties:{library:"Burnt Oak Library"}},{type:"Feature",geometry:{type:"Point",coordinates:[-.204752954,51.65607394]},properties:{library:"Chipping Barnet Library"}},{type:"Feature",geometry:{type:"Point",coordinates:[-.161600463,51.6444384]},properties:{library:"East Barnet Library"}},{type:"Feature",geometry:{type:"Point",coordinates:[-.273996976,51.616294758]},properties:{library:"Edgware Library"}},{type:"Feature",geometry:{type:"Point",coordinates:[-.201727357,51.57479125]},properties:{library:"Golders Green Library"}},{type:"Feature",geometry:{type:"Point",coordinates:[-.245778,51.597438]},properties:{library:"Colindale Library"}},{type:"Feature",geometry:{type:"Point",coordinates:[-.24299973,51.615344847]},properties:{library:"Mill Hill Library"}},{type:"Feature",geometry:{type:"Point",coordinates:[-.175998832,51.618618547]},properties:{library:"North Finchley Library"}},{type:"Feature",geometry:{type:"Point",coordinates:[-.149067988,51.630377142]},properties:{library:"Osidge Library"}},{type:"Feature",geometry:{type:"Point",coordinates:[-.148018992,51.600463711]},properties:{library:"South Friern Library"}},{type:"Feature",geometry:{type:"Point",coordinates:[-.19516,51.59992]},properties:{library:"Finchley Church End Library"}},{type:"Feature",geometry:{type:"Point",coordinates:[-.20078133,51.5622378]},properties:{library:"Childs Hill Library"}}]}}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[40,1,2]]]);
//# sourceMappingURL=main.8e4852ab.chunk.js.map