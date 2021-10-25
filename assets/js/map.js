window.onload = function () {
    mapboxgl.accessToken =
        'pk.eyJ1IjoibmF0aGFuYWVsaXNhbWFwcGVyIiwiYSI6ImNrODNiZzdoZTA4Y2gzZ281YmJiMHNwOWIifQ.d2ntY86sJ7DR7011dUJ2cw';
    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/nathanaelisamapper/cku35o63u0ccs18mno2qb0wel',
        center: [-0.118092, 51.509865],
        minZoom: 3,
        bearing: 15,
        zoom: 7
    });

    const zoomThreshold = 11;
    const zoomMid = 8;
    const zoomMin = 5;

    map.on('load', () => {
        map.addSource('mc', {
            'type': 'geojson',
            'data': 'data/mc.geojson'
        });

        map.addLayer({
            'id': 'mc_value',
            'source': 'mc',
            'maxzoom': 8,
            'minzoom': 5,
            'type': 'fill',
            'paint': {
                'fill-color': [
                    'interpolate',
                    ['linear'],
                    ['get', 'senticent_polarity'],
                    -0.01549,
                    '#d9ed92',
                    0.05870,
                    '#b5e48c',
                    0.11758,
                    '#99d98c',
                    0.13783,
                    '#52b69a',
                    0.17332,
                    '#34a0a4',
                    0.55357,
                    '#168aad'
                ],
                'fill-opacity': 0.75
            }
        }, );

        // map.addLayer({
        //     'id': 'outline',
        //     'maxzoom':11,
        //     'minzoom': 9.1,
        //     'type': 'line',
        //     'source': 'mc',
        //     'layout': {},
        //     'paint': {
        //         'line-color': '#000',
        //         'line-width': 3
        //     }
        // });

        map.addSource('oc', {
            'type': 'geojson',
            'data': 'data/oc.geojson'
        });

        map.addLayer({
            'maxzoom': 11,
            'minzoom': 8,
            'id': 'oc',
            'source': 'oc',
            'type': 'fill',
            // only include features for which the "isCounty"
            // property is "true"
            'paint': {
                'fill-color': [
                    'interpolate',
                    ['linear'],
                    ['get', 'senticent_polarity'],
                    -0.03899,
                    '#d9ed92',
                    0.07205,
                    '#b5e48c',
                    0.11972,
                    '#99d98c',
                    0.14414,
                    '#52b69a',
                    0.17022,
                    '#34a0a4',
                    0.63468,
                    '#168aad'
                ],

                'fill-opacity': 0.75
            }
        });


        map.addSource('wb', {
            'type': 'geojson',
            'data': 'data/wb.geojson'
        });

        map.addLayer({
            'id': 'wb_value',
            'source': 'wb',
            'maxzoom': 14,
            'minzoom': 11,
            'type': 'fill',
            'paint': {
                'fill-color': [
                    'interpolate',
                    ['linear'],
                    ['get', 'senticent_polarity'],
                    -0.01549,
                    '#d9ed92',
                    0.05870,
                    '#b5e48c',
                    0.11758,
                    '#99d98c',
                    0.13783,
                    '#52b69a',
                    0.17332,
                    '#34a0a4',
                    0.55357,
                    '#168aad'
                ],
                'fill-opacity': 0.75
            }
        }, );
    });

var centroids = {
    "type": "FeatureCollection",
    "name": "search_centroids",
    "crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
    "features": [
    { "type": "Feature", "properties": { "name": "Cove Brook" }, "geometry": { "type": "Point", "coordinates": [ -0.777824197810734, 51.286730599840162 ] } },
    { "type": "Feature", "properties": { "name": "Heath Lake" }, "geometry": { "type": "Point", "coordinates": [ -0.810130356767167, 51.380134016544304 ] } },
    { "type": "Feature", "properties": { "name": "Blackwater (Aldershot to Cove Brook confluence at Hawley)" }, "geometry": { "type": "Point", "coordinates": [ -0.731695468502199, 51.272744881754015 ] } },
    { "type": "Feature", "properties": { "name": "Vyne Stream" }, "geometry": { "type": "Point", "coordinates": [ -1.110053186520819, 51.297502709902815 ] } },
    { "type": "Feature", "properties": { "name": "Whitewater" }, "geometry": { "type": "Point", "coordinates": [ -0.95987791053389, 51.259603593699623 ] } },
    { "type": "Feature", "properties": { "name": "Barkham Brook" }, "geometry": { "type": "Point", "coordinates": [ -0.884040603903148, 51.391272781201643 ] } },
    { "type": "Feature", "properties": { "name": "Loddon (Sherfield on Loddon to Swallowfield)" }, "geometry": { "type": "Point", "coordinates": [ -1.010622429788765, 51.350242386642456 ] } },
    { "type": "Feature", "properties": { "name": "Hart (Crondall to Elvetham)" }, "geometry": { "type": "Point", "coordinates": [ -0.872730523617564, 51.254683640729432 ] } },
    { "type": "Feature", "properties": { "name": "Loddon (Basingstoke to River Lyde confluence at Hartley Wespall)" }, "geometry": { "type": "Point", "coordinates": [ -1.088523460430188, 51.262491322110883 ] } },
    { "type": "Feature", "properties": { "name": "Fleet Brook" }, "geometry": { "type": "Point", "coordinates": [ -0.826758675957193, 51.288225763741714 ] } },
    { "type": "Feature", "properties": { "name": "Blackwater (Bramshill to River Loddon confluence at Swallowfield)" }, "geometry": { "type": "Point", "coordinates": [ -0.951600219177477, 51.370362820926601 ] } },
    { "type": "Feature", "properties": { "name": "Hart (Elvetham to Hartley Wintney)" }, "geometry": { "type": "Point", "coordinates": [ -0.901727222123514, 51.321247736234803 ] } },
    { "type": "Feature", "properties": { "name": "Bow Brook (Pamber End to Bramley)" }, "geometry": { "type": "Point", "coordinates": [ -1.129804692908586, 51.317568806699967 ] } },
    { "type": "Feature", "properties": { "name": "Emm Brook" }, "geometry": { "type": "Point", "coordinates": [ -0.823707192791578, 51.399105662029534 ] } },
    { "type": "Feature", "properties": { "name": "Mytchett Lake" }, "geometry": { "type": "Point", "coordinates": [ -0.72003801713513, 51.280862221444309 ] } },
    { "type": "Feature", "properties": { "name": "Fleet Pond" }, "geometry": { "type": "Point", "coordinates": [ -0.824490651634396, 51.288410824457401 ] } },
    { "type": "Feature", "properties": { "name": "Blackwater (Hawley to Whitewater confluence at Bramshill)" }, "geometry": { "type": "Point", "coordinates": [ -0.825803564796282, 51.348198696640466 ] } },
    { "type": "Feature", "properties": { "name": "Twyford Brook" }, "geometry": { "type": "Point", "coordinates": [ -0.820030954706663, 51.460826540823327 ] } },
    { "type": "Feature", "properties": { "name": "Loddon (Hartley Wespall to Sherfield on Loddon)" }, "geometry": { "type": "Point", "coordinates": [ -1.010623398783386, 51.317093923975094 ] } },
    { "type": "Feature", "properties": { "name": "Addlestone Bourne (West End to Hale/Mill Bourne confluence at Mimbridge)" }, "geometry": { "type": "Point", "coordinates": [ -0.628955768120936, 51.330241236241051 ] } },
    { "type": "Feature", "properties": { "name": "East Clandon Stream" }, "geometry": { "type": "Point", "coordinates": [ -0.493229058135674, 51.264548380331711 ] } },
    { "type": "Feature", "properties": { "name": "Thorpe Park Lakes" }, "geometry": { "type": "Point", "coordinates": [ -0.516970233422809, 51.404189904736114 ] } },
    { "type": "Feature", "properties": { "name": "Whitmoor Common Pond" }, "geometry": { "type": "Point", "coordinates": [ -0.592225916195917, 51.275646909373059 ] } },
    { "type": "Feature", "properties": { "name": "Frensham Great Pond" }, "geometry": { "type": "Point", "coordinates": [ -0.791742708102333, 51.154743068854131 ] } },
    { "type": "Feature", "properties": { "name": "Frensham Little Pond" }, "geometry": { "type": "Point", "coordinates": [ -0.77244254537561, 51.165846042020974 ] } },
    { "type": "Feature", "properties": { "name": "North Wey at Alton" }, "geometry": { "type": "Point", "coordinates": [ -1.032258015926683, 51.157381859884097 ] } },
    { "type": "Feature", "properties": { "name": "Hollywater and Deadwater at Bordon" }, "geometry": { "type": "Point", "coordinates": [ -0.836656607747268, 51.075589632444633 ] } },
    { "type": "Feature", "properties": { "name": "Clasford Brook and Wood Street Brook" }, "geometry": { "type": "Point", "coordinates": [ -0.657172475762301, 51.248304916959036 ] } },
    { "type": "Feature", "properties": { "name": "South Wey (River Slea confluence to Tilford)" }, "geometry": { "type": "Point", "coordinates": [ -0.789758841398365, 51.151999592615375 ] } },
    { "type": "Feature", "properties": { "name": "Tillingbourne" }, "geometry": { "type": "Point", "coordinates": [ -0.456166778746535, 51.205812976083131 ] } },
    { "type": "Feature", "properties": { "name": "Chertsey Bourne (Virginia Water to Chertsey)" }, "geometry": { "type": "Point", "coordinates": [ -0.591389693739973, 51.405546810909485 ] } },
    { "type": "Feature", "properties": { "name": "Royal Brook" }, "geometry": { "type": "Point", "coordinates": [ -0.687184872801332, 51.150797085242566 ] } },
    { "type": "Feature", "properties": { "name": "Chertsey Bourne (Chertsey to River Thames confluence)" }, "geometry": { "type": "Point", "coordinates": [ -0.523735530697432, 51.381799751554411 ] } },
    { "type": "Feature", "properties": { "name": "Slea (Kingsley to Sleaford)" }, "geometry": { "type": "Point", "coordinates": [ -0.879816228686519, 51.143297240530515 ] } },
    { "type": "Feature", "properties": { "name": "North Wey (Alton to Tilford)" }, "geometry": { "type": "Point", "coordinates": [ -0.859439348909515, 51.193799342151912 ] } },
    { "type": "Feature", "properties": { "name": "Hale/Mill Bourne (Bagshot to Addlestone Bourne confluence near Chobham)" }, "geometry": { "type": "Point", "coordinates": [ -0.649330247437586, 51.361317088997701 ] } },
    { "type": "Feature", "properties": { "name": "South Wey (Haslemere to Bordon)" }, "geometry": { "type": "Point", "coordinates": [ -0.762070412724298, 51.090852596873681 ] } },
    { "type": "Feature", "properties": { "name": "Chertsey Bourne (Sunningdale to Virginia Water)" }, "geometry": { "type": "Point", "coordinates": [ -0.65351745796516, 51.390309458617757 ] } },
    { "type": "Feature", "properties": { "name": "Hoe Stream (Pirbright to River Wey confluence at Woking)" }, "geometry": { "type": "Point", "coordinates": [ -0.6085421207234, 51.288055370640301 ] } },
    { "type": "Feature", "properties": { "name": "Wey (Shalford to River Thames confluence at Weybridge)" }, "geometry": { "type": "Point", "coordinates": [ -0.528802045469083, 51.279268763833983 ] } },
    { "type": "Feature", "properties": { "name": "Wey Navigation (Pyrford reach)" }, "geometry": { "type": "Point", "coordinates": [ -0.571183047061668, 51.3214484044695 ] } },
    { "type": "Feature", "properties": { "name": "Boldermere" }, "geometry": { "type": "Point", "coordinates": [ -0.456321473372663, 51.314531114080161 ] } },
    { "type": "Feature", "properties": { "name": "Hoe Stream (Normandy to Pirbright)" }, "geometry": { "type": "Point", "coordinates": [ -0.66383569461838, 51.275548067824161 ] } },
    { "type": "Feature", "properties": { "name": "The Tarn" }, "geometry": { "type": "Point", "coordinates": [ -0.698834721640329, 51.203336238770866 ] } },
    { "type": "Feature", "properties": { "name": "Caker Stream" }, "geometry": { "type": "Point", "coordinates": [ -1.000587139589904, 51.088487157061941 ] } },
    { "type": "Feature", "properties": { "name": "Forest Mere" }, "geometry": { "type": "Point", "coordinates": [ -0.831864358309694, 51.062720714386217 ] } },
    { "type": "Feature", "properties": { "name": "Chertsey Bourne (Ascot to Virginia Water)" }, "geometry": { "type": "Point", "coordinates": [ -0.659098227685613, 51.412652516143829 ] } },
    { "type": "Feature", "properties": { "name": "The Moat at Egham" }, "geometry": { "type": "Point", "coordinates": [ -0.541289485298381, 51.417113982831502 ] } },
    { "type": "Feature", "properties": { "name": "Addlestone Bourne (Mill/Hale to Chertsey Bourne)" }, "geometry": { "type": "Point", "coordinates": [ -0.523843745097487, 51.356569547349714 ] } },
    { "type": "Feature", "properties": { "name": "Wey (Tilford to Shalford)" }, "geometry": { "type": "Point", "coordinates": [ -0.672006440251752, 51.193420582121412 ] } },
    { "type": "Feature", "properties": { "name": "Virginia Water" }, "geometry": { "type": "Point", "coordinates": [ -0.604656144410492, 51.411910821542392 ] } },
    { "type": "Feature", "properties": { "name": "Cranleigh Waters" }, "geometry": { "type": "Point", "coordinates": [ -0.495932279440803, 51.148344115540475 ] } },
    { "type": "Feature", "properties": { "name": "Cranmer Pond" }, "geometry": { "type": "Point", "coordinates": [ -0.868831793726801, 51.085306353187825 ] } },
    { "type": "Feature", "properties": { "name": "Stratford Brook" }, "geometry": { "type": "Point", "coordinates": [ -0.443220639619697, 51.270768792626114 ] } },
    { "type": "Feature", "properties": { "name": "Oakhanger Stream" }, "geometry": { "type": "Point", "coordinates": [ -0.914744894260808, 51.105260071089702 ] } },
    { "type": "Feature", "properties": { "name": "Woolmer Pond" }, "geometry": { "type": "Point", "coordinates": [ -0.87634068727309, 51.082287773494976 ] } },
    { "type": "Feature", "properties": { "name": "Teise and Lesser Teise" }, "geometry": { "type": "Point", "coordinates": [ 0.445662529212198, 51.131493580757756 ] } },
    { "type": "Feature", "properties": { "name": "Bartley Mill Stream" }, "geometry": { "type": "Point", "coordinates": [ 0.306658658099509, 51.081428390522817 ] } },
    { "type": "Feature", "properties": { "name": "Bewl" }, "geometry": { "type": "Point", "coordinates": [ 0.393782288551249, 51.068468552655844 ] } },
    { "type": "Feature", "properties": { "name": "Bewl Water" }, "geometry": { "type": "Point", "coordinates": [ 0.393760543491603, 51.068416553442034 ] } },
    { "type": "Feature", "properties": { "name": "Medway at Maidstone" }, "geometry": { "type": "Point", "coordinates": [ 0.484812794358051, 51.266147139784124 ] } },
    { "type": "Feature", "properties": { "name": "Bourne (Medway)" }, "geometry": { "type": "Point", "coordinates": [ 0.303719351632362, 51.262956790228522 ] } },
    { "type": "Feature", "properties": { "name": "Hilden Brook" }, "geometry": { "type": "Point", "coordinates": [ 0.241420247787985, 51.233589151817654 ] } },
    { "type": "Feature", "properties": { "name": "Loose Stream" }, "geometry": { "type": "Point", "coordinates": [ 0.558510436181058, 51.234678817495933 ] } },
    { "type": "Feature", "properties": { "name": "Ditton Stream" }, "geometry": { "type": "Point", "coordinates": [ 0.438603128625353, 51.281886313655129 ] } },
    { "type": "Feature", "properties": { "name": "Leybourne Stream" }, "geometry": { "type": "Point", "coordinates": [ 0.383608522897867, 51.304835454400781 ] } },
    { "type": "Feature", "properties": { "name": "Somerhill Stream" }, "geometry": { "type": "Point", "coordinates": [ 0.281769700899546, 51.163080214172055 ] } },
    { "type": "Feature", "properties": { "name": "Tudeley Brook" }, "geometry": { "type": "Point", "coordinates": [ 0.355910791801167, 51.15970562612241 ] } },
    { "type": "Feature", "properties": { "name": "Len" }, "geometry": { "type": "Point", "coordinates": [ 0.614518833548709, 51.258285102888998 ] } },
    { "type": "Feature", "properties": { "name": "Mereworth Stream" }, "geometry": { "type": "Point", "coordinates": [ 0.386839478698889, 51.259193517410388 ] } },
    { "type": "Feature", "properties": { "name": "Mid Medway from Eden Confluence to Yalding" }, "geometry": { "type": "Point", "coordinates": [ 0.326794105671844, 51.204910206948355 ] } },
    { "type": "Feature", "properties": { "name": "Alder Stream and Hammer Dyke" }, "geometry": { "type": "Point", "coordinates": [ 0.326381745237607, 51.174573371098525 ] } },
    { "type": "Feature", "properties": { "name": "Sherway" }, "geometry": { "type": "Point", "coordinates": [ 0.687284139635248, 51.187934000413399 ] } },
    { "type": "Feature", "properties": { "name": "Hammer Stream" }, "geometry": { "type": "Point", "coordinates": [ 0.592349840153439, 51.109982640855286 ] } },
    { "type": "Feature", "properties": { "name": "Upper Beult - High Halden and Bethersden Stream" }, "geometry": { "type": "Point", "coordinates": [ 0.743710646017817, 51.114872157074991 ] } },
    { "type": "Feature", "properties": { "name": "Tributary of Beult at Sutton Valance" }, "geometry": { "type": "Point", "coordinates": [ 0.599812941241253, 51.203753849688411 ] } },
    { "type": "Feature", "properties": { "name": "Beult at Yalding" }, "geometry": { "type": "Point", "coordinates": [ 0.448866639282525, 51.218542830353513 ] } },
    { "type": "Feature", "properties": { "name": "Marden Meadow Ponds" }, "geometry": { "type": "Point", "coordinates": [ 0.518700015098545, 51.173399659554818 ] } },
    { "type": "Feature", "properties": { "name": "Ray Brook" }, "geometry": { "type": "Point", "coordinates": [ -0.058470696178611, 51.179836758052282 ] } },
    { "type": "Feature", "properties": { "name": "Eden Brook" }, "geometry": { "type": "Point", "coordinates": [ -0.021267580426779, 51.155135790302467 ] } },
    { "type": "Feature", "properties": { "name": "Tributary of Eden at Four Elms" }, "geometry": { "type": "Point", "coordinates": [ 0.085208603698242, 51.225326292808916 ] } },
    { "type": "Feature", "properties": { "name": "Bough Beech Reservoir" }, "geometry": { "type": "Point", "coordinates": [ 0.137287665474488, 51.213043219777049 ] } },
    { "type": "Feature", "properties": { "name": "Gibbs Brook" }, "geometry": { "type": "Point", "coordinates": [ -0.060051686794705, 51.244516851284679 ] } },
    { "type": "Feature", "properties": { "name": "Bay Pond" }, "geometry": { "type": "Point", "coordinates": [ -0.062775665525723, 51.247861916365146 ] } },
    { "type": "Feature", "properties": { "name": "Hedgecourt Lake" }, "geometry": { "type": "Point", "coordinates": [ -0.06357614436157, 51.146374955339056 ] } },
    { "type": "Feature", "properties": { "name": "Friars Gate Stream" }, "geometry": { "type": "Point", "coordinates": [ 0.133874260893224, 51.066491501737183 ] } },
    { "type": "Feature", "properties": { "name": "Medway at Weir Wood" }, "geometry": { "type": "Point", "coordinates": [ 0.000112662663828, 51.098915728140888 ] } },
    { "type": "Feature", "properties": { "name": "Jarvis Brook" }, "geometry": { "type": "Point", "coordinates": [ 0.188265620926408, 51.0489047839881 ] } },
    { "type": "Feature", "properties": { "name": "Kent Water" }, "geometry": { "type": "Point", "coordinates": [ 0.091683979598745, 51.147833745798579 ] } },
    { "type": "Feature", "properties": { "name": "Upper Eridge Stream" }, "geometry": { "type": "Point", "coordinates": [ 0.235870388034021, 51.056064383601324 ] } },
    { "type": "Feature", "properties": { "name": "Mid Medway from Hartfield to Eden Confluence" }, "geometry": { "type": "Point", "coordinates": [ 0.15908071969591, 51.133215570078946 ] } },
    { "type": "Feature", "properties": { "name": "Pippingford Brook" }, "geometry": { "type": "Point", "coordinates": [ 0.07722009897601, 51.066104463519473 ] } },
    { "type": "Feature", "properties": { "name": "Weir Wood Reservoir" }, "geometry": { "type": "Point", "coordinates": [ -0.008300952922013, 51.095805100232141 ] } },
    { "type": "Feature", "properties": { "name": "Grom" }, "geometry": { "type": "Point", "coordinates": [ 0.220643441582042, 51.118372162528999 ] } },
    { "type": "Feature", "properties": { "name": "Shovelstrode Stream" }, "geometry": { "type": "Point", "coordinates": [ 0.061354705264152, 51.123265115395064 ] } },
    { "type": "Feature", "properties": { "name": "Evenlode (Compton Bk to Bledington Bk) and 4 Shires" }, "geometry": { "type": "Point", "coordinates": [ -1.67170520873855, 51.950180243466356 ] } },
    { "type": "Feature", "properties": { "name": "Glyme (Enstone to Dorn)" }, "geometry": { "type": "Point", "coordinates": [ -1.415936257080826, 51.899070759711229 ] } },
    { "type": "Feature", "properties": { "name": "Evenlode (Glyme to Thames)" }, "geometry": { "type": "Point", "coordinates": [ -1.376714567597922, 51.812362919720144 ] } },
    { "type": "Feature", "properties": { "name": "Dorn (Source to Glyme)" }, "geometry": { "type": "Point", "coordinates": [ -1.382335984343884, 51.928781498295912 ] } },
    { "type": "Feature", "properties": { "name": "Littlestock Stream to tributary of Evenlode at Shipton" }, "geometry": { "type": "Point", "coordinates": [ -1.631168923592652, 51.859051253611753 ] } },
    { "type": "Feature", "properties": { "name": "Bledington Brook (Source to Evenlode)" }, "geometry": { "type": "Point", "coordinates": [ -1.682645925578003, 51.915571805868233 ] } },
    { "type": "Feature", "properties": { "name": "Coldron and Taston Brooks" }, "geometry": { "type": "Point", "coordinates": [ -1.493472113834826, 51.902350259368276 ] } },
    { "type": "Feature", "properties": { "name": "Evenlode (Source to Four Shires S) and Longborough Stream" }, "geometry": { "type": "Point", "coordinates": [ -1.725897657297509, 51.982961011375629 ] } },
    { "type": "Feature", "properties": { "name": "Westcote Brook (source to Evenlode at Bledington)" }, "geometry": { "type": "Point", "coordinates": [ -1.674983152286342, 51.892095414602807 ] } },
    { "type": "Feature", "properties": { "name": "Sars Brook (source to Evenlode downstream Bledington)" }, "geometry": { "type": "Point", "coordinates": [ -1.575668803560794, 51.908989363137195 ] } },
    { "type": "Feature", "properties": { "name": "Cornwell Brook and tributaries (Source to Evenlode)" }, "geometry": { "type": "Point", "coordinates": [ -1.574431265197594, 51.948071213019269 ] } },
    { "type": "Feature", "properties": { "name": "Cornbury Park Lakes" }, "geometry": { "type": "Point", "coordinates": [ -1.486378200031419, 51.857013366850808 ] } },
    { "type": "Feature", "properties": { "name": "Little Compton Brook and tributaries (Source to Evenlode)" }, "geometry": { "type": "Point", "coordinates": [ -1.634271388589452, 51.968922075448972 ] } },
    { "type": "Feature", "properties": { "name": "Blenheim Lakes" }, "geometry": { "type": "Point", "coordinates": [ -1.365572303491899, 51.842855178648009 ] } },
    { "type": "Feature", "properties": { "name": "Windrush and tributaries (Little Rissington to Thames)" }, "geometry": { "type": "Point", "coordinates": [ -1.572654250463205, 51.807731135942134 ] } },
    { "type": "Feature", "properties": { "name": "Highmoor Brook at Brize Norton" }, "geometry": { "type": "Point", "coordinates": [ -1.568321229612122, 51.764420087435845 ] } },
    { "type": "Feature", "properties": { "name": "Leach (Source to Thames)" }, "geometry": { "type": "Point", "coordinates": [ -1.76851690232146, 51.782189918955716 ] } },
    { "type": "Feature", "properties": { "name": "Shill Brook and Tributaries" }, "geometry": { "type": "Point", "coordinates": [ -1.626406279443097, 51.767452248429549 ] } },
    { "type": "Feature", "properties": { "name": "Dikler (Wyck Rissington to Windrush) and Lower Eye" }, "geometry": { "type": "Point", "coordinates": [ -1.738669982986836, 51.883234914334402 ] } },
    { "type": "Feature", "properties": { "name": "Hazelford and Coombe Brook" }, "geometry": { "type": "Point", "coordinates": [ -1.675990624272059, 51.853295964667112 ] } },
    { "type": "Feature", "properties": { "name": "Broadwell Brook" }, "geometry": { "type": "Point", "coordinates": [ -1.643857016503563, 51.739499819317594 ] } },
    { "type": "Feature", "properties": { "name": "Eye (Source to Dikler)" }, "geometry": { "type": "Point", "coordinates": [ -1.799489690380397, 51.935172174608219 ] } },
    { "type": "Feature", "properties": { "name": "Wadley Stream (Source to Thames at Duxford)" }, "geometry": { "type": "Point", "coordinates": [ -1.522241025465704, 51.68560105208104 ] } },
    { "type": "Feature", "properties": { "name": "Sherbourne Brook" }, "geometry": { "type": "Point", "coordinates": [ -1.826319816160211, 51.858915145859811 ] } },
    { "type": "Feature", "properties": { "name": "Radcot Cut" }, "geometry": { "type": "Point", "coordinates": [ -1.569091988958015, 51.723661922361259 ] } },
    { "type": "Feature", "properties": { "name": "Farmoor Reservoir" }, "geometry": { "type": "Point", "coordinates": [ -1.356039517064587, 51.75235482096074 ] } },
    { "type": "Feature", "properties": { "name": "Filchhampstead Brook at Farmoor" }, "geometry": { "type": "Point", "coordinates": [ -1.333644067596713, 51.751195528421469 ] } },
    { "type": "Feature", "properties": { "name": "Chil and Limb Brooks (source to B4044)" }, "geometry": { "type": "Point", "coordinates": [ -1.410443709187413, 51.776613704149554 ] } },
    { "type": "Feature", "properties": { "name": "Chalvey Ditches" }, "geometry": { "type": "Point", "coordinates": [ -0.639903009443908, 51.545362383813426 ] } },
    { "type": "Feature", "properties": { "name": "Thames (Cookham to Egham)" }, "geometry": { "type": "Point", "coordinates": [ -0.619811683400922, 51.472183439148104 ] } },
    { "type": "Feature", "properties": { "name": "Thames (Egham to Teddington)" }, "geometry": { "type": "Point", "coordinates": [ -0.405001796012747, 51.403465868345947 ] } },
    { "type": "Feature", "properties": { "name": "Wraysbury Lake" }, "geometry": { "type": "Point", "coordinates": [ -0.556053795522504, 51.463049031105115 ] } },
    { "type": "Feature", "properties": { "name": "Bull Brook" }, "geometry": { "type": "Point", "coordinates": [ -0.726323039392584, 51.40532954346255 ] } },
    { "type": "Feature", "properties": { "name": "Roundmoor Ditch and Boveney Ditch" }, "geometry": { "type": "Point", "coordinates": [ -0.670070201778087, 51.521964400888031 ] } },
    { "type": "Feature", "properties": { "name": "Cut at west Bracknell" }, "geometry": { "type": "Point", "coordinates": [ -0.763038611679721, 51.402429194372665 ] } },
    { "type": "Feature", "properties": { "name": "Cut (Warfield to north Bracknell)" }, "geometry": { "type": "Point", "coordinates": [ -0.750461918992144, 51.429928571204798 ] } },
    { "type": "Feature", "properties": { "name": "Knight Reservoir" }, "geometry": { "type": "Point", "coordinates": [ -0.395449825273058, 51.399038646959042 ] } },
    { "type": "Feature", "properties": { "name": "Salthill Stream" }, "geometry": { "type": "Point", "coordinates": [ -0.601737667167026, 51.537538352797576 ] } },
    { "type": "Feature", "properties": { "name": "Maidenhead Ditch" }, "geometry": { "type": "Point", "coordinates": [ -0.729043784167642, 51.544324388841147 ] } },
    { "type": "Feature", "properties": { "name": "Cut (Binfield to River Thames confluence) and Maidenhead Ditch" }, "geometry": { "type": "Point", "coordinates": [ -0.752972130333647, 51.486299229021604 ] } },
    { "type": "Feature", "properties": { "name": "Bessborough Reservoir" }, "geometry": { "type": "Point", "coordinates": [ -0.388696915272894, 51.401456968101158 ] } },
    { "type": "Feature", "properties": { "name": "Englemere Pond" }, "geometry": { "type": "Point", "coordinates": [ -0.698048914752657, 51.40994979256044 ] } },
    { "type": "Feature", "properties": { "name": "Littleworth Ponds" }, "geometry": { "type": "Point", "coordinates": [ -0.650441629032394, 51.568472490629624 ] } },
    { "type": "Feature", "properties": { "name": "Quin" }, "geometry": { "type": "Point", "coordinates": [ 0.028747722102273, 51.965160407970949 ] } },
    { "type": "Feature", "properties": { "name": "Mimram (Codicote Bottom to Lee)" }, "geometry": { "type": "Point", "coordinates": [ -0.243208856714506, 51.841750426907218 ] } },
    { "type": "Feature", "properties": { "name": "Mimram (Whitwell to Codicote Bottom)" }, "geometry": { "type": "Point", "coordinates": [ -0.328075934325675, 51.905291943092266 ] } },
    { "type": "Feature", "properties": { "name": "Pincey Brook" }, "geometry": { "type": "Point", "coordinates": [ 0.231131597489211, 51.826574537095212 ] } },
    { "type": "Feature", "properties": { "name": "Lee (from Luton Hoo Lakes to Hertford)" }, "geometry": { "type": "Point", "coordinates": [ -0.210387414716753, 51.787858912736723 ] } },
    { "type": "Feature", "properties": { "name": "Stort and Navigation, B Stortford to Harlow" }, "geometry": { "type": "Point", "coordinates": [ 0.150685401052685, 51.832739807109341 ] } },
    { "type": "Feature", "properties": { "name": "Stort and Navigation, Harlow to Lee" }, "geometry": { "type": "Point", "coordinates": [ 0.086540429606086, 51.789306242373989 ] } },
    { "type": "Feature", "properties": { "name": "Lee Navigation (Hertford to Fieldes Weir)" }, "geometry": { "type": "Point", "coordinates": [ -0.033889327555366, 51.80344429426863 ] } },
    { "type": "Feature", "properties": { "name": "Fiddlers Brook" }, "geometry": { "type": "Point", "coordinates": [ 0.096741209955671, 51.821278882073379 ] } },
    { "type": "Feature", "properties": { "name": "Stort and Bourne Brook" }, "geometry": { "type": "Point", "coordinates": [ 0.153460317258041, 51.899969036212632 ] } },
    { "type": "Feature", "properties": { "name": "Rib (from confluence with Quin to Lee Navigation)" }, "geometry": { "type": "Point", "coordinates": [ -0.007702760548231, 51.861903294122349 ] } },
    { "type": "Feature", "properties": { "name": "Ash (from Meesden to confluence with Bury Green Brook)" }, "geometry": { "type": "Point", "coordinates": [ 0.091737443785861, 51.90230448634145 ] } },
    { "type": "Feature", "properties": { "name": "Stevenage Brook" }, "geometry": { "type": "Point", "coordinates": [ -0.182736479261219, 51.889596561311102 ] } },
    { "type": "Feature", "properties": { "name": "Stort (at Clavering)" }, "geometry": { "type": "Point", "coordinates": [ 0.128862041733967, 51.962429403123366 ] } },
    { "type": "Feature", "properties": { "name": "Lee (from Luton to Luton Hoo Lakes)" }, "geometry": { "type": "Point", "coordinates": [ -0.448430556270133, 51.90207449198352 ] } },
    { "type": "Feature", "properties": { "name": "Ash (from confluence with Bury Green Brook to Lee)" }, "geometry": { "type": "Point", "coordinates": [ 0.038124848060679, 51.830434688638029 ] } },
    { "type": "Feature", "properties": { "name": "Cannons Brook" }, "geometry": { "type": "Point", "coordinates": [ 0.092864275411476, 51.756710310388954 ] } },
    { "type": "Feature", "properties": { "name": "Beane (from confluence with Stevenage Brook to Lee)" }, "geometry": { "type": "Point", "coordinates": [ -0.084410637851708, 51.867666605912504 ] } },
    { "type": "Feature", "properties": { "name": "Old Basing Tertiaries" }, "geometry": { "type": "Point", "coordinates": [ -0.97226383331898, 51.260429690944903 ] } },
    { "type": "Feature", "properties": { "name": "Greenwich Tertiaries and Chalk" }, "geometry": { "type": "Point", "coordinates": [ 0.053132637616215, 51.487316625597799 ] } },
    { "type": "Feature", "properties": { "name": "South-West Chilterns Chalk" }, "geometry": { "type": "Point", "coordinates": [ -0.872790132224498, 51.589400766451604 ] } },
    { "type": "Feature", "properties": { "name": "West Kent Darent and Cray Chalk" }, "geometry": { "type": "Point", "coordinates": [ 0.193672548383497, 51.371527973648426 ] } },
    { "type": "Feature", "properties": { "name": "Burford Jurassic" }, "geometry": { "type": "Point", "coordinates": [ -1.773521203373829, 51.832232201332367 ] } },
    { "type": "Feature", "properties": { "name": "Chiltern Chalk Scarp" }, "geometry": { "type": "Point", "coordinates": [ -0.9311561602237, 51.667142664361315 ] } },
    { "type": "Feature", "properties": { "name": "Alton Chalk" }, "geometry": { "type": "Point", "coordinates": [ -0.942760537434757, 51.153314837607958 ] } },
    { "type": "Feature", "properties": { "name": "North Kent Tertiaries" }, "geometry": { "type": "Point", "coordinates": [ 0.788071923572264, 51.345311079715614 ] } },
    { "type": "Feature", "properties": { "name": "Effingham Tertiaries" }, "geometry": { "type": "Point", "coordinates": [ -0.485727208827473, 51.262236373468149 ] } },
    { "type": "Feature", "properties": { "name": "Upper Lee Chalk" }, "geometry": { "type": "Point", "coordinates": [ -0.105555557654342, 51.874197818407723 ] } },
    { "type": "Feature", "properties": { "name": "North Mymms Tertiaries" }, "geometry": { "type": "Point", "coordinates": [ 0.087459401089891, 51.833357358290826 ] } },
    { "type": "Feature", "properties": { "name": "Shrivenham Corallian" }, "geometry": { "type": "Point", "coordinates": [ -1.547214455061396, 51.647198099971426 ] } },
    { "type": "Feature", "properties": { "name": "Basingstoke Chalk" }, "geometry": { "type": "Point", "coordinates": [ -1.03472257011472, 51.238507675034874 ] } },
    { "type": "Feature", "properties": { "name": "Banbury Jurassic" }, "geometry": { "type": "Point", "coordinates": [ -1.361777715902169, 52.051013939068206 ] } },
    { "type": "Feature", "properties": { "name": "Bromley Tertiaries" }, "geometry": { "type": "Point", "coordinates": [ -0.022263333486991, 51.382380188530625 ] } },
    { "type": "Feature", "properties": { "name": "West Kent Tertiaries" }, "geometry": { "type": "Point", "coordinates": [ 0.09941320923507, 51.432462459992657 ] } },
    { "type": "Feature", "properties": { "name": "Headington Corallian" }, "geometry": { "type": "Point", "coordinates": [ -1.058071453749531, 51.800816749302435 ] } },
    { "type": "Feature", "properties": { "name": "Radlett Tertiaries" }, "geometry": { "type": "Point", "coordinates": [ -0.448773186029731, 51.619703051532731 ] } },
    { "type": "Feature", "properties": { "name": "Tackley Jurassic" }, "geometry": { "type": "Point", "coordinates": [ -1.246729866185409, 51.929545734341509 ] } },
    { "type": "Feature", "properties": { "name": "Thatcham Tertiaries" }, "geometry": { "type": "Point", "coordinates": [ -1.242477431262327, 51.414746565877969 ] } },
    { "type": "Feature", "properties": { "name": "Byfield Jurassic" }, "geometry": { "type": "Point", "coordinates": [ -1.225052395633004, 52.117839874000296 ] } },
    { "type": "Feature", "properties": { "name": "Chipping Norton Jurassic" }, "geometry": { "type": "Point", "coordinates": [ -1.607483525457761, 51.916929935608465 ] } },
    { "type": "Feature", "properties": { "name": "Vale of White Horse Chalk" }, "geometry": { "type": "Point", "coordinates": [ -1.50910500666701, 51.532031967161359 ] } },
    { "type": "Feature", "properties": { "name": "Twyford Tertiaries" }, "geometry": { "type": "Point", "coordinates": [ -0.692751197478439, 51.517165158875926 ] } },
    { "type": "Feature", "properties": { "name": "Farthinghoe Stream (Source to Cherwell) and tributaries" }, "geometry": { "type": "Point", "coordinates": [ -1.249366758055671, 52.065993067103008 ] } },
    { "type": "Feature", "properties": { "name": "Hanwell Brook" }, "geometry": { "type": "Point", "coordinates": [ -1.378086547634298, 52.120285487063633 ] } },
    { "type": "Feature", "properties": { "name": "Bloxham Brook (Source to Sor Brook)" }, "geometry": { "type": "Point", "coordinates": [ -1.377883101116036, 52.013926912390346 ] } },
    { "type": "Feature", "properties": { "name": "Cherwell (Source to Trafford Bridge)" }, "geometry": { "type": "Point", "coordinates": [ -1.224394311393269, 52.179602446558064 ] } },
    { "type": "Feature", "properties": { "name": "Bayswater Brook" }, "geometry": { "type": "Point", "coordinates": [ -1.196274579916052, 51.773858689837475 ] } },
    { "type": "Feature", "properties": { "name": "Sor Brook (Source to Broughton)" }, "geometry": { "type": "Point", "coordinates": [ -1.409998314954971, 52.09089793450056 ] } },
    { "type": "Feature", "properties": { "name": "Upper Swere (Source to Wigginton)" }, "geometry": { "type": "Point", "coordinates": [ -1.480179743414071, 51.976229713180395 ] } },
    { "type": "Feature", "properties": { "name": "Cherwell (Cropredy to Nell Bridge)" }, "geometry": { "type": "Point", "coordinates": [ -1.295182570115454, 52.055305709016835 ] } },
    { "type": "Feature", "properties": { "name": "Sor Brook  (Broughton to Cherwell)" }, "geometry": { "type": "Point", "coordinates": [ -1.336762468955648, 52.027946438581971 ] } },
    { "type": "Feature", "properties": { "name": "Ashby Brook (Source to Cherwell)" }, "geometry": { "type": "Point", "coordinates": [ -1.177045672023385, 52.144002061864271 ] } },
    { "type": "Feature", "properties": { "name": "Clayton and Wormleighton Brook, Source to Highfurlong Brook" }, "geometry": { "type": "Point", "coordinates": [ -1.334839652374986, 52.159181566064362 ] } },
    { "type": "Feature", "properties": { "name": "Cherwell (Ray to Thames) and Woodeaton Brook" }, "geometry": { "type": "Point", "coordinates": [ -1.246528650037917, 51.785963300496235 ] } },
    { "type": "Feature", "properties": { "name": "Tadmarton Stream (Source to Sor Brook)" }, "geometry": { "type": "Point", "coordinates": [ -1.446357605521276, 52.04199581180422 ] } },
    { "type": "Feature", "properties": { "name": "Swere (Wigginton to Cherwell)" }, "geometry": { "type": "Point", "coordinates": [ -1.370734346992279, 51.99541728731969 ] } },
    { "type": "Feature", "properties": { "name": "Grimsbury Reservoir" }, "geometry": { "type": "Point", "coordinates": [ -1.331225873512797, 52.075741139869109 ] } },
    { "type": "Feature", "properties": { "name": "Ockley Brook and Croughton Brook (Source to Cherwell)" }, "geometry": { "type": "Point", "coordinates": [ -1.210834755322448, 51.994955510412915 ] } },
    { "type": "Feature", "properties": { "name": "Cherwell (Nell Bridge to Bletchingdon)" }, "geometry": { "type": "Point", "coordinates": [ -1.292807457063235, 51.9250610494516 ] } },
    { "type": "Feature", "properties": { "name": "Gubbinshole and Broadmoor ditch to Ray (Oxon)" }, "geometry": { "type": "Point", "coordinates": [ -1.034771554372944, 51.903954350960035 ] } },
    { "type": "Feature", "properties": { "name": "Town Brook at Bicester" }, "geometry": { "type": "Point", "coordinates": [ -1.170781517629929, 51.919396095393374 ] } },
    { "type": "Feature", "properties": { "name": "Ray and tributaries NorthEast of Grendon Underwood" }, "geometry": { "type": "Point", "coordinates": [ -0.984364073576566, 51.890189231542458 ] } },
    { "type": "Feature", "properties": { "name": "Oxon Ray (upstream A41 to Cherwell) including Otmoor" }, "geometry": { "type": "Point", "coordinates": [ -1.146015908344178, 51.841841497052883 ] } },
    { "type": "Feature", "properties": { "name": "Summerstown Ditch and Launton and Cutters Brook" }, "geometry": { "type": "Point", "coordinates": [ -1.091232518990567, 51.899128756639101 ] } },
    { "type": "Feature", "properties": { "name": "Gallos Brook" }, "geometry": { "type": "Point", "coordinates": [ -1.24910988859231, 51.887004004972056 ] } },
    { "type": "Feature", "properties": { "name": "Langford Brook (Bicester to Ray inc Gagle Brook)" }, "geometry": { "type": "Point", "coordinates": [ -1.194433108556332, 51.897129862615685 ] } },
    { "type": "Feature", "properties": { "name": "Bletchingdon Stream" }, "geometry": { "type": "Point", "coordinates": [ -1.246532256797615, 51.840136074802352 ] } },
    { "type": "Feature", "properties": { "name": "Ludgershall Brook and Muswellhill Brook" }, "geometry": { "type": "Point", "coordinates": [ -1.045687333940397, 51.84704746813442 ] } },
    { "type": "Feature", "properties": { "name": "Northfield Brook (Source to Thames) at Sandford" }, "geometry": { "type": "Point", "coordinates": [ -1.191601622190486, 51.728260613654868 ] } },
    { "type": "Feature", "properties": { "name": "Moor Ditch and Ladygrove Ditch" }, "geometry": { "type": "Point", "coordinates": [ -1.26570535171388, 51.615079038713105 ] } },
    { "type": "Feature", "properties": { "name": "Letcombe Brook" }, "geometry": { "type": "Point", "coordinates": [ -1.444598795973174, 51.583461116186989 ] } },
    { "type": "Feature", "properties": { "name": "Stutfield Brook (source to Ock)" }, "geometry": { "type": "Point", "coordinates": [ -1.516990866226503, 51.600887414602028 ] } },
    { "type": "Feature", "properties": { "name": "Sandford Brook (source to Ock)" }, "geometry": { "type": "Point", "coordinates": [ -1.327139757788167, 51.69289988680633 ] } },
    { "type": "Feature", "properties": { "name": "Frilford and Marcham Brook" }, "geometry": { "type": "Point", "coordinates": [ -1.36641020814342, 51.694781385898452 ] } },
    { "type": "Feature", "properties": { "name": "Ginge Brook and Mill Brook" }, "geometry": { "type": "Point", "coordinates": [ -1.353148002532527, 51.58858434334185 ] } },
    { "type": "Feature", "properties": { "name": "Cow Common Brook and Portobello Ditch" }, "geometry": { "type": "Point", "coordinates": [ -1.364076064333538, 51.62480857530511 ] } },
    { "type": "Feature", "properties": { "name": "Childrey Brook and Norbrook at Common Barn" }, "geometry": { "type": "Point", "coordinates": [ -1.386503648301026, 51.636808424517831 ] } },
    { "type": "Feature", "properties": { "name": "Childrey and Woodhill Brooks" }, "geometry": { "type": "Point", "coordinates": [ -1.449198693595073, 51.611130856217279 ] } },
    { "type": "Feature", "properties": { "name": "Ock (to Cherbury Brook)" }, "geometry": { "type": "Point", "coordinates": [ -1.542096720309198, 51.627692385818854 ] } },
    { "type": "Feature", "properties": { "name": "Liden Brook, Swindon" }, "geometry": { "type": "Point", "coordinates": [ -1.708023774189769, 51.539016971441704 ] } },
    { "type": "Feature", "properties": { "name": "Ampney and Poulton Brooks (Source to Thames)" }, "geometry": { "type": "Point", "coordinates": [ -1.904914638870641, 51.734547571046463 ] } },
    { "type": "Feature", "properties": { "name": "Cole (Bower Bridge to Thames) including Coleshill" }, "geometry": { "type": "Point", "coordinates": [ -1.680460290536889, 51.645086341671607 ] } },
    { "type": "Feature", "properties": { "name": "Waterloo Ditch (East of Coleshill)" }, "geometry": { "type": "Point", "coordinates": [ -1.625831688730433, 51.634981905284498 ] } },
    { "type": "Feature", "properties": { "name": "Thames (Waterhaybridge to Cricklade) and Chelworth Brook" }, "geometry": { "type": "Point", "coordinates": [ -1.893924137582955, 51.639644365364013 ] } },
    { "type": "Feature", "properties": { "name": "Key (Source to Thames)" }, "geometry": { "type": "Point", "coordinates": [ -1.893053105862389, 51.600069381432291 ] } },
    { "type": "Feature", "properties": { "name": "Cerney Wick Brook (source to Thames)" }, "geometry": { "type": "Point", "coordinates": [ -1.949473814542223, 51.673803237470679 ] } },
    { "type": "Feature", "properties": { "name": "Churn  (Baunton to Cricklade)" }, "geometry": { "type": "Point", "coordinates": [ -1.934693061713686, 51.697065156688879 ] } },
    { "type": "Feature", "properties": { "name": "Coate Water" }, "geometry": { "type": "Point", "coordinates": [ -1.746297308061964, 51.537095845999062 ] } },
    { "type": "Feature", "properties": { "name": "Ray (Wiltshire) source to Lydiard Brook" }, "geometry": { "type": "Point", "coordinates": [ -1.807278599091797, 51.54096629277737 ] } },
    { "type": "Feature", "properties": { "name": "Thornhill Ditch and tributaries at Cotswolds Water Park" }, "geometry": { "type": "Point", "coordinates": [ -1.746453625493136, 51.726658693493235 ] } },
    { "type": "Feature", "properties": { "name": "Lenta Brook, East of Swindon" }, "geometry": { "type": "Point", "coordinates": [ -1.672518706204613, 51.553061832909627 ] } },
    { "type": "Feature", "properties": { "name": "Share ditch" }, "geometry": { "type": "Point", "coordinates": [ -1.774402747925349, 51.63640451872763 ] } },
    { "type": "Feature", "properties": { "name": "Swill Brook (source to Ashton Keynes)" }, "geometry": { "type": "Point", "coordinates": [ -2.024782607210942, 51.635148998358218 ] } },
    { "type": "Feature", "properties": { "name": "Elkstone Brook" }, "geometry": { "type": "Point", "coordinates": [ -2.019050091942095, 51.786276427593933 ] } },
    { "type": "Feature", "properties": { "name": "Coln (Source to Coln Rogers)" }, "geometry": { "type": "Point", "coordinates": [ -1.934484579378174, 51.854509392910195 ] } },
    { "type": "Feature", "properties": { "name": "Cotswold Water Park Lake 12" }, "geometry": { "type": "Point", "coordinates": [ -1.909331386872187, 51.670225301990818 ] } },
    { "type": "Feature", "properties": { "name": "Cole (source to Lenta Brook)" }, "geometry": { "type": "Point", "coordinates": [ -1.743028992396465, 51.549329840508001 ] } },
    { "type": "Feature", "properties": { "name": "Derry Brook" }, "geometry": { "type": "Point", "coordinates": [ -1.95638368820598, 51.611195042261294 ] } },
    { "type": "Feature", "properties": { "name": "Daglingworth Stream (Source to Churn)" }, "geometry": { "type": "Point", "coordinates": [ -2.022504397472058, 51.752573334332219 ] } },
    { "type": "Feature", "properties": { "name": "Bydemill Brook (Source to Thames)" }, "geometry": { "type": "Point", "coordinates": [ -1.740049293521859, 51.626222361224549 ] } },
    { "type": "Feature", "properties": { "name": "Haydon Wick Brook" }, "geometry": { "type": "Point", "coordinates": [ -1.79927347674904, 51.593467837972895 ] } },
    { "type": "Feature", "properties": { "name": "Thames (Kemble to Waterhay Bridge)" }, "geometry": { "type": "Point", "coordinates": [ -2.024129538504845, 51.697794105798607 ] } },
    { "type": "Feature", "properties": { "name": "Thames (Churn to Coln)" }, "geometry": { "type": "Point", "coordinates": [ -1.791591059719308, 51.657775198320245 ] } },
    { "type": "Feature", "properties": { "name": "Lydiard Brook" }, "geometry": { "type": "Point", "coordinates": [ -1.861438857189323, 51.563762865147211 ] } },
    { "type": "Feature", "properties": { "name": "Ver" }, "geometry": { "type": "Point", "coordinates": [ -0.424656259600065, 51.793564205608767 ] } },
    { "type": "Feature", "properties": { "name": "Pinn" }, "geometry": { "type": "Point", "coordinates": [ -0.427055383706613, 51.572117732294288 ] } },
    { "type": "Feature", "properties": { "name": "Misbourne" }, "geometry": { "type": "Point", "coordinates": [ -0.658244444179697, 51.673292886462768 ] } },
    { "type": "Feature", "properties": { "name": "Bulbourne" }, "geometry": { "type": "Point", "coordinates": [ -0.573140404966467, 51.766002563489977 ] } },
    { "type": "Feature", "properties": { "name": "Queen Mary Reservoir" }, "geometry": { "type": "Point", "coordinates": [ -0.459384988676745, 51.415842369923226 ] } },
    { "type": "Feature", "properties": { "name": "Gade (from confluence with Bulbourne to Chess)" }, "geometry": { "type": "Point", "coordinates": [ -0.465776609554694, 51.699340234350103 ] } },
    { "type": "Feature", "properties": { "name": "Staines Reservoir North" }, "geometry": { "type": "Point", "coordinates": [ -0.489757334506484, 51.451521646681037 ] } },
    { "type": "Feature", "properties": { "name": "King George VI Reservoir" }, "geometry": { "type": "Point", "coordinates": [ -0.502867612708452, 51.449277308287201 ] } },
    { "type": "Feature", "properties": { "name": "Upper Colne and Ellen Brook" }, "geometry": { "type": "Point", "coordinates": [ -0.315119134741506, 51.775901335775337 ] } },
    { "type": "Feature", "properties": { "name": "Horton Brook" }, "geometry": { "type": "Point", "coordinates": [ -0.53681319379299, 51.504864432691335 ] } },
    { "type": "Feature", "properties": { "name": "Broadwater Lake" }, "geometry": { "type": "Point", "coordinates": [ -0.494516511988768, 51.593662602256089 ] } },
    { "type": "Feature", "properties": { "name": "Alderbourne" }, "geometry": { "type": "Point", "coordinates": [ -0.621060144525619, 51.607298153930493 ] } },
    { "type": "Feature", "properties": { "name": "Heron Lake" }, "geometry": { "type": "Point", "coordinates": [ -0.532113911357062, 51.444584020709634 ] } },
    { "type": "Feature", "properties": { "name": "Colne Brook" }, "geometry": { "type": "Point", "coordinates": [ -0.511758788377338, 51.506115212696223 ] } },
    { "type": "Feature", "properties": { "name": "Queensmead" }, "geometry": { "type": "Point", "coordinates": [ -0.529526985895289, 51.438454501917057 ] } },
    { "type": "Feature", "properties": { "name": "Gade (Upper stretch Great Gaddesden to confluence with Bulbourne / GUC)" }, "geometry": { "type": "Point", "coordinates": [ -0.53225626362725, 51.798674139198447 ] } },
    { "type": "Feature", "properties": { "name": "Chess" }, "geometry": { "type": "Point", "coordinates": [ -0.609982657555249, 51.714479453920156 ] } },
    { "type": "Feature", "properties": { "name": "Wraysbury Reservoir" }, "geometry": { "type": "Point", "coordinates": [ -0.526086236089388, 51.461239867929848 ] } },
    { "type": "Feature", "properties": { "name": "The Queen Mother Reservoir" }, "geometry": { "type": "Point", "coordinates": [ -0.550391593045661, 51.482180144530112 ] } },
    { "type": "Feature", "properties": { "name": "Wraysbury No 2" }, "geometry": { "type": "Point", "coordinates": [ -0.54835798071272, 51.453213865999395 ] } },
    { "type": "Feature", "properties": { "name": "Mole (Hersham to R. Thames conf at East Molesey)" }, "geometry": { "type": "Point", "coordinates": [ -0.38825108230419, 51.380458586610345 ] } },
    { "type": "Feature", "properties": { "name": "Rythe" }, "geometry": { "type": "Point", "coordinates": [ -0.342927820217173, 51.358594639666038 ] } },
    { "type": "Feature", "properties": { "name": "Mole (Horley to Hersham)" }, "geometry": { "type": "Point", "coordinates": [ -0.305142638042459, 51.260526373847767 ] } },
    { "type": "Feature", "properties": { "name": "Black Pond" }, "geometry": { "type": "Point", "coordinates": [ -0.380874407064808, 51.347997401483589 ] } },
    { "type": "Feature", "properties": { "name": "Pipp Brook" }, "geometry": { "type": "Point", "coordinates": [ -0.359458701818455, 51.221527831564117 ] } },
    { "type": "Feature", "properties": { "name": "Downside Ditches and Bookham Brook" }, "geometry": { "type": "Point", "coordinates": [ -0.395248510288674, 51.281611971073282 ] } },
    { "type": "Feature", "properties": { "name": "Island Barn Reservoir" }, "geometry": { "type": "Point", "coordinates": [ -0.364684440678549, 51.390839698673858 ] } },
    { "type": "Feature", "properties": { "name": "Tanners Brook (Holmewood to River Mole confluence at Brockham)" }, "geometry": { "type": "Point", "coordinates": [ -0.310707464763163, 51.214575408911493 ] } },
    { "type": "Feature", "properties": { "name": "The Rye at Ashtead" }, "geometry": { "type": "Point", "coordinates": [ -0.303071185186474, 51.30687622284389 ] } },
    { "type": "Feature", "properties": { "name": "Tilgate Brook and Gatwick Stream at Crawley" }, "geometry": { "type": "Point", "coordinates": [ -0.167702064355553, 51.116712842236126 ] } },
    { "type": "Feature", "properties": { "name": "Burstow Stream" }, "geometry": { "type": "Point", "coordinates": [ -0.126594365016901, 51.155765738611535 ] } },
    { "type": "Feature", "properties": { "name": "Ifield Brook" }, "geometry": { "type": "Point", "coordinates": [ -0.225350760670083, 51.098881168969399 ] } },
    { "type": "Feature", "properties": { "name": "Stanford Brook" }, "geometry": { "type": "Point", "coordinates": [ -0.154520453047319, 51.089772946555932 ] } },
    { "type": "Feature", "properties": { "name": "Douster Pond" }, "geometry": { "type": "Point", "coordinates": [ -0.22392268730917, 51.094614663403561 ] } },
    { "type": "Feature", "properties": { "name": "Redhill Brook" }, "geometry": { "type": "Point", "coordinates": [ -0.139201883870167, 51.247735956578921 ] } },
    { "type": "Feature", "properties": { "name": "Mole upstream of Horley" }, "geometry": { "type": "Point", "coordinates": [ -0.206436573891878, 51.138696184354004 ] } },
    { "type": "Feature", "properties": { "name": "Salfords Stream (Redhill Brook confluence upstream)" }, "geometry": { "type": "Point", "coordinates": [ -0.104087083962071, 51.207868911741265 ] } },
    { "type": "Feature", "properties": { "name": "West Thurrock Lagoon" }, "geometry": { "type": "Point", "coordinates": [ 0.280814367842858, 51.465392920926313 ] } },
    { "type": "Feature", "properties": { "name": "Higham Marshes" }, "geometry": { "type": "Point", "coordinates": [ 0.476810793088026, 51.463687368424637 ] } },
    { "type": "Feature", "properties": { "name": "Allhallows Marshes" }, "geometry": { "type": "Point", "coordinates": [ 0.675818345597011, 51.466706182688384 ] } },
    { "type": "Feature", "properties": { "name": "MEDWAY" }, "geometry": { "type": "Point", "coordinates": [ 0.643490356912772, 51.411482316184532 ] } },
    { "type": "Feature", "properties": { "name": "SWALE" }, "geometry": { "type": "Point", "coordinates": [ 0.878546439425958, 51.362769086645528 ] } },
    { "type": "Feature", "properties": { "name": "Inkpen Stream (source to Kennet)" }, "geometry": { "type": "Point", "coordinates": [ -1.491640047170107, 51.383615375550015 ] } },
    { "type": "Feature", "properties": { "name": "West End Brook (tributary of Foudry Brook)" }, "geometry": { "type": "Point", "coordinates": [ -1.104010173225239, 51.36738185384899 ] } },
    { "type": "Feature", "properties": { "name": "Foudry Brook (West End Brook to M4)" }, "geometry": { "type": "Point", "coordinates": [ -1.000372931436939, 51.395084387982266 ] } },
    { "type": "Feature", "properties": { "name": "Clayhill Brook" }, "geometry": { "type": "Point", "coordinates": [ -1.061866639733552, 51.414358454408827 ] } },
    { "type": "Feature", "properties": { "name": "Middle Kennet (Marlborough to Hungerford)" }, "geometry": { "type": "Point", "coordinates": [ -1.620739004150888, 51.440241780722992 ] } },
    { "type": "Feature", "properties": { "name": "Burghfield Brook" }, "geometry": { "type": "Point", "coordinates": [ -1.033829325516926, 51.400398863679399 ] } },
    { "type": "Feature", "properties": { "name": "Shalbourne  (source to Kennet at Hungerford)" }, "geometry": { "type": "Point", "coordinates": [ -1.538528882329705, 51.37371248634436 ] } },
    { "type": "Feature", "properties": { "name": "Farnham Flint or Englefield Lagoon" }, "geometry": { "type": "Point", "coordinates": [ -1.012578801836048, 51.428197924573432 ] } },
    { "type": "Feature", "properties": { "name": "Penwood Stream" }, "geometry": { "type": "Point", "coordinates": [ -1.376330459745427, 51.337018118310787 ] } },
    { "type": "Feature", "properties": { "name": "Ameys Lake or Theale Lakes" }, "geometry": { "type": "Point", "coordinates": [ -1.057412024640286, 51.428085753582124 ] } },
    { "type": "Feature", "properties": { "name": "Aldbourne" }, "geometry": { "type": "Point", "coordinates": [ -1.632317859718308, 51.48756848599615 ] } },
    { "type": "Feature", "properties": { "name": "Milford Lake" }, "geometry": { "type": "Point", "coordinates": [ -1.353212534909805, 51.344406584937644 ] } },
    { "type": "Feature", "properties": { "name": "Silchester Brook" }, "geometry": { "type": "Point", "coordinates": [ -1.107912459894052, 51.346369004685279 ] } },
    { "type": "Feature", "properties": { "name": "Kennet and Holy Brook" }, "geometry": { "type": "Point", "coordinates": [ -1.081283682857968, 51.41056674602536 ] } },
    { "type": "Feature", "properties": { "name": "Og" }, "geometry": { "type": "Point", "coordinates": [ -1.750862228473996, 51.474630682191169 ] } },
    { "type": "Feature", "properties": { "name": "Kennet and Avon Canal and Dun above Hungerford" }, "geometry": { "type": "Point", "coordinates": [ -1.546678227448514, 51.410813820017374 ] } },
    { "type": "Feature", "properties": { "name": "Lambourn (Source to Newbury)" }, "geometry": { "type": "Point", "coordinates": [ -1.464163943818985, 51.497943676553255 ] } },
    { "type": "Feature", "properties": { "name": "Kingsclere Brook (Source to Enborne)" }, "geometry": { "type": "Point", "coordinates": [ -1.249430793100021, 51.331588598796102 ] } },
    { "type": "Feature", "properties": { "name": "Winterbourne" }, "geometry": { "type": "Point", "coordinates": [ -1.344413034126256, 51.482757822674117 ] } },
    { "type": "Feature", "properties": { "name": "Middle Kennet (Hungerford to Newbury)" }, "geometry": { "type": "Point", "coordinates": [ -1.443100298813213, 51.419781222478491 ] } },
    { "type": "Feature", "properties": { "name": "Upper Dun" }, "geometry": { "type": "Point", "coordinates": [ -1.603884475133448, 51.360341576179344 ] } },
    { "type": "Feature", "properties": { "name": "Earlstone Stream and  Burghclere Brook (source to Enborne)" }, "geometry": { "type": "Point", "coordinates": [ -1.3156266577314, 51.33730828978495 ] } },
    { "type": "Feature", "properties": { "name": "Froxfield Stream" }, "geometry": { "type": "Point", "coordinates": [ -1.657338630647743, 51.4000331727445 ] } },
    { "type": "Feature", "properties": { "name": "Wasing Wood Ponds" }, "geometry": { "type": "Point", "coordinates": [ -1.171408607705785, 51.371252941290003 ] } },
    { "type": "Feature", "properties": { "name": "Berrick Stream and Lady Brook" }, "geometry": { "type": "Point", "coordinates": [ -1.093741388652305, 51.639142768279811 ] } },
    { "type": "Feature", "properties": { "name": "Ewelme Stream (Source to Thames)" }, "geometry": { "type": "Point", "coordinates": [ -1.046088170291287, 51.614053918196731 ] } },
    { "type": "Feature", "properties": { "name": "Hamble Brook" }, "geometry": { "type": "Point", "coordinates": [ -0.899017952771233, 51.619112177318925 ] } },
    { "type": "Feature", "properties": { "name": "Wye (Source to High Wycombe fire station)" }, "geometry": { "type": "Point", "coordinates": [ -0.838852349007858, 51.656240209704649 ] } },
    { "type": "Feature", "properties": { "name": "Wye (High Wycombe fire station to Thames)" }, "geometry": { "type": "Point", "coordinates": [ -0.699248954679384, 51.614872312388833 ] } },
    { "type": "Feature", "properties": { "name": "Pang" }, "geometry": { "type": "Point", "coordinates": [ -1.230929930586068, 51.48788409951694 ] } },
    { "type": "Feature", "properties": { "name": "Thames (Reading to Cookham)" }, "geometry": { "type": "Point", "coordinates": [ -0.886353752901016, 51.556936745943396 ] } },
    { "type": "Feature", "properties": { "name": "Sulham Brook" }, "geometry": { "type": "Point", "coordinates": [ -1.081996916305052, 51.454707624233116 ] } },
    { "type": "Feature", "properties": { "name": "Hughenden Stream" }, "geometry": { "type": "Point", "coordinates": [ -0.768432845011204, 51.679224057376928 ] } },
    { "type": "Feature", "properties": { "name": "Cholsey Brook and tributaries" }, "geometry": { "type": "Point", "coordinates": [ -1.184003280127344, 51.567490241748935 ] } },
    { "type": "Feature", "properties": { "name": "Mill Brook and Bradfords Brook system,  Wallingford" }, "geometry": { "type": "Point", "coordinates": [ -1.223728229995551, 51.590746243081199 ] } },
    { "type": "Feature", "properties": { "name": "Dorton, Chearsley and Waddesdon Brooks" }, "geometry": { "type": "Point", "coordinates": [ -0.976632301541508, 51.815259711274614 ] } },
    { "type": "Feature", "properties": { "name": "Scotsgrove Brook (upstream Kingsey Cuttle Brook)" }, "geometry": { "type": "Point", "coordinates": [ -0.862181799351804, 51.768158988635115 ] } },
    { "type": "Feature", "properties": { "name": "Thame (Scotsgrove Brook to Thames)" }, "geometry": { "type": "Point", "coordinates": [ -1.094187476089587, 51.72706013562329 ] } },
    { "type": "Feature", "properties": { "name": "Baldon Brook (South of Oxford)" }, "geometry": { "type": "Point", "coordinates": [ -1.171089624252919, 51.699608339779665 ] } },
    { "type": "Feature", "properties": { "name": "Chinor Brook and Sydenham Brook" }, "geometry": { "type": "Point", "coordinates": [ -0.928590774654971, 51.705817667517593 ] } },
    { "type": "Feature", "properties": { "name": "Bear Brook and Wendover Brook" }, "geometry": { "type": "Point", "coordinates": [ -0.764120307806166, 51.792044790484013 ] } },
    { "type": "Feature", "properties": { "name": "Haseley Brook" }, "geometry": { "type": "Point", "coordinates": [ -1.050581112820477, 51.689610390487942 ] } },
    { "type": "Feature", "properties": { "name": "Stoke Brook Aylesbury" }, "geometry": { "type": "Point", "coordinates": [ -0.80528820496248, 51.786602616092225 ] } },
    { "type": "Feature", "properties": { "name": "Latchford Brook at Tetsworth" }, "geometry": { "type": "Point", "coordinates": [ -1.037313945987518, 51.717118702649472 ] } },
    { "type": "Feature", "properties": { "name": "Holton Brook and tributaries" }, "geometry": { "type": "Point", "coordinates": [ -1.12247218001791, 51.788732791375445 ] } },
    { "type": "Feature", "properties": { "name": "Cuttle Brook" }, "geometry": { "type": "Point", "coordinates": [ -0.966026332789399, 51.707118686578099 ] } },
    { "type": "Feature", "properties": { "name": "Hardwick Brook (Source to Thame)" }, "geometry": { "type": "Point", "coordinates": [ -0.805621735548716, 51.885360909380786 ] } },
    { "type": "Feature", "properties": { "name": "Lewknor Brook" }, "geometry": { "type": "Point", "coordinates": [ -0.990076508262247, 51.666298591794771 ] } },
    { "type": "Feature", "properties": { "name": "Fleet Marston Brook, Denham Brook,  Pitchcott Brook west" }, "geometry": { "type": "Point", "coordinates": [ -0.886528353186606, 51.857814141760628 ] } },
    { "type": "Feature", "properties": { "name": "Chalgrove Brook" }, "geometry": { "type": "Point", "coordinates": [ -1.037711917336197, 51.647578762898767 ] } },
    { "type": "Feature", "properties": { "name": "Lower Cray" }, "geometry": { "type": "Point", "coordinates": [ 0.171720099886794, 51.444207656921542 ] } },
    { "type": "Feature", "properties": { "name": "Shuttle" }, "geometry": { "type": "Point", "coordinates": [ 0.101122164759615, 51.444962797810739 ] } },
    { "type": "Feature", "properties": { "name": "Upper Cray" }, "geometry": { "type": "Point", "coordinates": [ 0.105799481073653, 51.361063039997887 ] } },
    { "type": "Feature", "properties": { "name": "Middle and Lower Darent" }, "geometry": { "type": "Point", "coordinates": [ 0.236749312790837, 51.370837236441247 ] } },
    { "type": "Feature", "properties": { "name": "Upper Darent" }, "geometry": { "type": "Point", "coordinates": [ 0.151678391831276, 51.279010312458652 ] } },
    { "type": "Feature", "properties": { "name": "Wandle (Carshalton Branch at Carshalton)" }, "geometry": { "type": "Point", "coordinates": [ -0.167991863626273, 51.34435743500422 ] } },
    { "type": "Feature", "properties": { "name": "Wandle (Croydon to Wandsworth) and the R. Gra" }, "geometry": { "type": "Point", "coordinates": [ -0.135699933043919, 51.340530076792298 ] } },
    { "type": "Feature", "properties": { "name": "Kempton Park East Reservoir" }, "geometry": { "type": "Point", "coordinates": [ -0.391670368902019, 51.42515742098972 ] } },
    { "type": "Feature", "properties": { "name": "Crane" }, "geometry": { "type": "Point", "coordinates": [ -0.407252961444164, 51.470435986649939 ] } },
    { "type": "Feature", "properties": { "name": "Yeading Brook" }, "geometry": { "type": "Point", "coordinates": [ -0.396643877222, 51.554014582625513 ] } },
    { "type": "Feature", "properties": { "name": "Portlane Brook" }, "geometry": { "type": "Point", "coordinates": [ -0.426367764169142, 51.429366078539225 ] } },
    { "type": "Feature", "properties": { "name": "Beverley Brook (Motspur Park to Thames) and Pyl Brook at West Barnes" }, "geometry": { "type": "Point", "coordinates": [ -0.232404146945288, 51.408012432096378 ] } },
    { "type": "Feature", "properties": { "name": "Marsh Dykes (Woolwich)" }, "geometry": { "type": "Point", "coordinates": [ 0.095023123421053, 51.483559101634299 ] } },
    { "type": "Feature", "properties": { "name": "Quaggy" }, "geometry": { "type": "Point", "coordinates": [ 0.040606308917886, 51.430653019809959 ] } },
    { "type": "Feature", "properties": { "name": "Ravensbourne (Catford to Deptford)" }, "geometry": { "type": "Point", "coordinates": [ -0.027450502851832, 51.452528691816582 ] } },
    { "type": "Feature", "properties": { "name": "Ravensbourne (Keston to Catford)" }, "geometry": { "type": "Point", "coordinates": [ 0.016992312068366, 51.358414323794634 ] } },
    { "type": "Feature", "properties": { "name": "Wealdstone Brook" }, "geometry": { "type": "Point", "coordinates": [ -0.306478450084295, 51.583278326273202 ] } },
    { "type": "Feature", "properties": { "name": "Silk Stream and Edgware Brook" }, "geometry": { "type": "Point", "coordinates": [ -0.273846468666916, 51.613635404043585 ] } },
    { "type": "Feature", "properties": { "name": "Lower Brent" }, "geometry": { "type": "Point", "coordinates": [ -0.317786689622431, 51.529940993830984 ] } },
    { "type": "Feature", "properties": { "name": "Dollis Brook and Upper Brent" }, "geometry": { "type": "Point", "coordinates": [ -0.20290870106163, 51.604481035864502 ] } },
    { "type": "Feature", "properties": { "name": "Bentley Priory" }, "geometry": { "type": "Point", "coordinates": [ -0.331992453822308, 51.621148764582223 ] } },
    { "type": "Feature", "properties": { "name": "Welsh Harp" }, "geometry": { "type": "Point", "coordinates": [ -0.247069843820094, 51.571149887893228 ] } },
    { "type": "Feature", "properties": { "name": "Lee (Tottenham Locks to Bow Locks/Three Mills Locks)" }, "geometry": { "type": "Point", "coordinates": [ -0.037800838654094, 51.565865930534919 ] } },
    { "type": "Feature", "properties": { "name": "King Georges Reservoir" }, "geometry": { "type": "Point", "coordinates": [ -0.017778307658799, 51.649650924320056 ] } },
    { "type": "Feature", "properties": { "name": "North Metropolitan pit" }, "geometry": { "type": "Point", "coordinates": [ -0.019098101095159, 51.712518390422012 ] } },
    { "type": "Feature", "properties": { "name": "Lea Navigation (Fieldes Weir to Enfield Lock)" }, "geometry": { "type": "Point", "coordinates": [ -0.012478213471916, 51.744719665403821 ] } },
    { "type": "Feature", "properties": { "name": "Seventy Acres" }, "geometry": { "type": "Point", "coordinates": [ -0.014053036341789, 51.708902423831752 ] } },
    { "type": "Feature", "properties": { "name": "Pymmes and Salmon Brooks - Deephams STW to Tottenham Locks" }, "geometry": { "type": "Point", "coordinates": [ -0.044661589823977, 51.611910176321238 ] } },
    { "type": "Feature", "properties": { "name": "Bowyers Water" }, "geometry": { "type": "Point", "coordinates": [ -0.022978921641773, 51.695792926071725 ] } },
    { "type": "Feature", "properties": { "name": "William Girling Reservoir" }, "geometry": { "type": "Point", "coordinates": [ -0.026168756740837, 51.630581238270615 ] } },
    { "type": "Feature", "properties": { "name": "Stoke Newington East Reservoir" }, "geometry": { "type": "Point", "coordinates": [ -0.085061702491248, 51.571369136855573 ] } },
    { "type": "Feature", "properties": { "name": "Banbury Reservoir" }, "geometry": { "type": "Point", "coordinates": [ -0.035431219364495, 51.603779159026104 ] } },
    { "type": "Feature", "properties": { "name": "Salmon Brook upstream Deephams STW" }, "geometry": { "type": "Point", "coordinates": [ -0.097200064551949, 51.65085288909065 ] } },
    { "type": "Feature", "properties": { "name": "Warwick Reservoir East" }, "geometry": { "type": "Point", "coordinates": [ -0.055396912916158, 51.579815729980119 ] } },
    { "type": "Feature", "properties": { "name": "Nazeing Brook" }, "geometry": { "type": "Point", "coordinates": [ 0.037146731559362, 51.732132885384907 ] } },
    { "type": "Feature", "properties": { "name": "Cobbins Brook" }, "geometry": { "type": "Point", "coordinates": [ 0.063790006891282, 51.703557295200355 ] } },
    { "type": "Feature", "properties": { "name": "Warwick Reservoir West" }, "geometry": { "type": "Point", "coordinates": [ -0.058067897341428, 51.576880540454404 ] } },
    { "type": "Feature", "properties": { "name": "Cheshunt Lake" }, "geometry": { "type": "Point", "coordinates": [ -0.01759962996365, 51.704419448841541 ] } },
    { "type": "Feature", "properties": { "name": "Moselle Brook" }, "geometry": { "type": "Point", "coordinates": [ -0.105393780498539, 51.59416997796437 ] } },
    { "type": "Feature", "properties": { "name": "Lockwood Reservoir" }, "geometry": { "type": "Point", "coordinates": [ -0.048526288492739, 51.594942868097299 ] } },
    { "type": "Feature", "properties": { "name": "Small River Lee (and tributaries)" }, "geometry": { "type": "Point", "coordinates": [ -0.051591861486298, 51.716368742217227 ] } },
    { "type": "Feature", "properties": { "name": "Ching Brook" }, "geometry": { "type": "Point", "coordinates": [ 0.007434483330405, 51.623405064311584 ] } },
    { "type": "Feature", "properties": { "name": "Lea Navigation Enfield Lock to Tottenham Locks" }, "geometry": { "type": "Point", "coordinates": [ -0.012530010162922, 51.644262258846659 ] } },
    { "type": "Feature", "properties": { "name": "Turkey Brook and Cuffley Brook" }, "geometry": { "type": "Point", "coordinates": [ -0.110456443528711, 51.695325748704576 ] } },
    { "type": "Feature", "properties": { "name": "Low Maynard Reservoir" }, "geometry": { "type": "Point", "coordinates": [ -0.049590223607089, 51.589377293804418 ] } },
    { "type": "Feature", "properties": { "name": "Walthamstow Reservoir No 4" }, "geometry": { "type": "Point", "coordinates": [ -0.047534418652326, 51.582115069028994 ] } },
    { "type": "Feature", "properties": { "name": "High Maynard Reservoir" }, "geometry": { "type": "Point", "coordinates": [ -0.046022183903993, 51.590507403340524 ] } },
    { "type": "Feature", "properties": { "name": "Hogsmill" }, "geometry": { "type": "Point", "coordinates": [ -0.266168300693026, 51.340746769205495 ] } },
    { "type": "Feature", "properties": { "name": "Epsom Stew Pond" }, "geometry": { "type": "Point", "coordinates": [ -0.302296386493295, 51.335198076668703 ] } },
    { "type": "Feature", "properties": { "name": "Gores Brook" }, "geometry": { "type": "Point", "coordinates": [ 0.137208357211432, 51.536401818018334 ] } },
    { "type": "Feature", "properties": { "name": "Southall Sewer and Runningwater Brook" }, "geometry": { "type": "Point", "coordinates": [ 0.240693896899578, 51.514110947699692 ] } },
    { "type": "Feature", "properties": { "name": "Cripsey Brook" }, "geometry": { "type": "Point", "coordinates": [ 0.182338497416475, 51.726930934934963 ] } },
    { "type": "Feature", "properties": { "name": "Ingrebourne" }, "geometry": { "type": "Point", "coordinates": [ 0.246783966702903, 51.594749640092886 ] } },
    { "type": "Feature", "properties": { "name": "Lower Roding (Loughton to Thames)" }, "geometry": { "type": "Point", "coordinates": [ 0.0551720261785, 51.605841462343285 ] } },
    { "type": "Feature", "properties": { "name": "Brookhouse Brook" }, "geometry": { "type": "Point", "coordinates": [ 0.121507575908905, 51.682908082516676 ] } },
    { "type": "Feature", "properties": { "name": "Rom (Bourne Brook to Ravensbourne)" }, "geometry": { "type": "Point", "coordinates": [ 0.174124368142727, 51.602382544510249 ] } },
    { "type": "Feature", "properties": { "name": "Beam and Ravensbourne" }, "geometry": { "type": "Point", "coordinates": [ 0.190499590068037, 51.561011737482197 ] } },
    { "type": "Feature", "properties": { "name": "Seven Kings Water" }, "geometry": { "type": "Point", "coordinates": [ 0.10665346402261, 51.582710514806848 ] } },
    { "type": "Feature", "properties": { "name": "Mayes Brook" }, "geometry": { "type": "Point", "coordinates": [ 0.11027051443875, 51.546389362271448 ] } },
    { "type": "Feature", "properties": { "name": "Brent Feeder Canal" }, "geometry": { "type": "Point", "coordinates": [ -0.26065331795269, 51.550882770824785 ] } },
    { "type": "Feature", "properties": { "name": "Grand Union Canal, Uxbridge to Hanwell Locks, Slough Arm, Paddington Arm" }, "geometry": { "type": "Point", "coordinates": [ -0.36300986785194, 51.520996225160225 ] } },
    { "type": "Feature", "properties": { "name": "Grand Union Canal, Wendover Arm (disused)" }, "geometry": { "type": "Point", "coordinates": [ -0.727911364191725, 51.784668612253213 ] } },
    { "type": "Feature", "properties": { "name": "Regents Canal, lower section" }, "geometry": { "type": "Point", "coordinates": [ -0.073470416278934, 51.532580621477031 ] } },
    { "type": "Feature", "properties": { "name": "Oxford Canal, summit to Aynho" }, "geometry": { "type": "Point", "coordinates": [ -1.312798619725325, 52.07439053454528 ] } },
    { "type": "Feature", "properties": { "name": "Oxford Canal, Aynho to Thrupp" }, "geometry": { "type": "Point", "coordinates": [ -1.288588852247281, 51.926519571605645 ] } },
    { "type": "Feature", "properties": { "name": "Boddington Feeder (Oxford Canal)" }, "geometry": { "type": "Point", "coordinates": [ -1.30538325218716, 52.163672222796848 ] } },
    { "type": "Feature", "properties": { "name": "Kennet and Avon Canal, Copse Lock to Reading" }, "geometry": { "type": "Point", "coordinates": [ -1.226262782885208, 51.400626550931392 ] } },
    { "type": "Feature", "properties": { "name": "Lower Duke of Northumberland's River" }, "geometry": { "type": "Point", "coordinates": [ -0.33916079764426, 51.46249711943365 ] } },
    { "type": "Feature", "properties": { "name": "Longford River" }, "geometry": { "type": "Point", "coordinates": [ -0.421436701213563, 51.446916247098116 ] } },
    { "type": "Feature", "properties": { "name": "Basingstoke Canal" }, "geometry": { "type": "Point", "coordinates": [ -0.753376724001477, 51.285253433204929 ] } },
    { "type": "Feature", "properties": { "name": "Jubilee River" }, "geometry": { "type": "Point", "coordinates": [ -0.650980967896115, 51.509487325830051 ] } },
    { "type": "Feature", "properties": { "name": "King George VI Reservoir water transfer" }, "geometry": { "type": "Point", "coordinates": [ -0.44211713272922, 51.423740224981245 ] } },
    { "type": "Feature", "properties": { "name": "Mardyke (West Tributary)" }, "geometry": { "type": "Point", "coordinates": [ 0.299859451502103, 51.568951634032608 ] } },
    { "type": "Feature", "properties": { "name": "Murston Lakes, angling lakes" }, "geometry": { "type": "Point", "coordinates": [ 0.771688895581092, 51.350150108373477 ] } },
    { "type": "Feature", "properties": { "name": "Alton_Chalk" }, "geometry": { "type": "Point", "coordinates": [ -0.942760537434264, 51.153314798522906 ] } },
    { "type": "Feature", "properties": { "name": "Banbury_Jurassic" }, "geometry": { "type": "Point", "coordinates": [ -1.361777715902509, 52.051013900830419 ] } },
    { "type": "Feature", "properties": { "name": "Basingstoke_Chalk" }, "geometry": { "type": "Point", "coordinates": [ -1.03472257011473, 51.238507636024686 ] } },
    { "type": "Feature", "properties": { "name": "Beult" }, "geometry": { "type": "Point", "coordinates": [ 0.63895875012498, 51.15335898495465 ] } },
    { "type": "Feature", "properties": { "name": "Beverley_Brook" }, "geometry": { "type": "Point", "coordinates": [ -0.232404146945375, 51.408012393243283 ] } },
    { "type": "Feature", "properties": { "name": "Brent_Canals_and_SWT" }, "geometry": { "type": "Point", "coordinates": [ -0.35323878511631, 51.523854734357229 ] } },
    { "type": "Feature", "properties": { "name": "Brent_Rivers_and_Lakes" }, "geometry": { "type": "Point", "coordinates": [ -0.279075267390183, 51.572347245620527 ] } },
    { "type": "Feature", "properties": { "name": "Burford_Jurassic" }, "geometry": { "type": "Point", "coordinates": [ -1.77205918047955, 51.83119778381306 ] } },
    { "type": "Feature", "properties": { "name": "Byfield_Jurassic" }, "geometry": { "type": "Point", "coordinates": [ -1.225052395630567, 52.117839835829152 ] } },
    { "type": "Feature", "properties": { "name": "Cherwell" }, "geometry": { "type": "Point", "coordinates": [ -1.313247612196534, 52.035056847121382 ] } },
    { "type": "Feature", "properties": { "name": "Cherwell_Canals_and_SWT" }, "geometry": { "type": "Point", "coordinates": [ -1.298383385696472, 51.970671871897068 ] } },
    { "type": "Feature", "properties": { "name": "Chiltern_Chalk_Scarp" }, "geometry": { "type": "Point", "coordinates": [ -0.931156160219206, 51.667142625747523 ] } },
    { "type": "Feature", "properties": { "name": "Chilterns_South" }, "geometry": { "type": "Point", "coordinates": [ -1.015931975177578, 51.559035197226301 ] } },
    { "type": "Feature", "properties": { "name": "Chilterns_South-West_Chalk" }, "geometry": { "type": "Point", "coordinates": [ -0.872790132225075, 51.589400727764499 ] } },
    { "type": "Feature", "properties": { "name": "Chipping_Norton_Jurassic" }, "geometry": { "type": "Point", "coordinates": [ -1.607951069196289, 51.916871886197519 ] } },
    { "type": "Feature", "properties": { "name": "Colne" }, "geometry": { "type": "Point", "coordinates": [ -0.478470677066062, 51.691513282482241 ] } },
    { "type": "Feature", "properties": { "name": "Colne_Canals_and_SWT" }, "geometry": { "type": "Point", "coordinates": [ -0.508861958683555, 51.642620560520399 ] } },
    { "type": "Feature", "properties": { "name": "Colne_GW" }, "geometry": { "type": "Point", "coordinates": [ -0.484903860429937, 51.654027598511774 ] } },
    { "type": "Feature", "properties": { "name": "Crane_Rivers_and_Lakes" }, "geometry": { "type": "Point", "coordinates": [ -0.406655851788258, 51.494830649659455 ] } },
    { "type": "Feature", "properties": { "name": "Crane_SWT" }, "geometry": { "type": "Point", "coordinates": [ -0.424585733528046, 51.455460627287295 ] } },
    { "type": "Feature", "properties": { "name": "Cray_and_Shuttle" }, "geometry": { "type": "Point", "coordinates": [ 0.107493269969036, 51.38282953960897 ] } },
    { "type": "Feature", "properties": { "name": "Darent" }, "geometry": { "type": "Point", "coordinates": [ 0.206930988915811, 51.344466949538386 ] } },
    { "type": "Feature", "properties": { "name": "Eden" }, "geometry": { "type": "Point", "coordinates": [ 0.025899483404408, 51.202262046814241 ] } },
    { "type": "Feature", "properties": { "name": "Effingham_Tertiaries" }, "geometry": { "type": "Point", "coordinates": [ -0.485727208826652, 51.262236334476789 ] } },
    { "type": "Feature", "properties": { "name": "Evenlode" }, "geometry": { "type": "Point", "coordinates": [ -1.526054860645689, 51.904813541270485 ] } },
    { "type": "Feature", "properties": { "name": "Greenwich_Tertiaries" }, "geometry": { "type": "Point", "coordinates": [ 0.053132637614686, 51.487316586823596 ] } },
    { "type": "Feature", "properties": { "name": "Headington_Corallian" }, "geometry": { "type": "Point", "coordinates": [ -1.058071453748411, 51.800816710816711 ] } },
    { "type": "Feature", "properties": { "name": "Hogsmill" }, "geometry": { "type": "Point", "coordinates": [ -0.266168300691822, 51.340746730289872 ] } },
    { "type": "Feature", "properties": { "name": "Kennet" }, "geometry": { "type": "Point", "coordinates": [ -1.473483721645939, 51.427444360846685 ] } },
    { "type": "Feature", "properties": { "name": "Kennet_Canals" }, "geometry": { "type": "Point", "coordinates": [ -1.385827635075892, 51.398420047159561 ] } },
    { "type": "Feature", "properties": { "name": "Kent_North_Chalk_and_Tertiaries" }, "geometry": { "type": "Point", "coordinates": [ 0.763173763059665, 51.309575425777162 ] } },
    { "type": "Feature", "properties": { "name": "Lee_Lower_Rivers_and_Lakes" }, "geometry": { "type": "Point", "coordinates": [ -0.050294017769928, 51.665996357191581 ] } },
    { "type": "Feature", "properties": { "name": "Lee_Upper" }, "geometry": { "type": "Point", "coordinates": [ -0.059589425982602, 51.871032919482111 ] } },
    { "type": "Feature", "properties": { "name": "Lee_Lower_Canals_and_SWT" }, "geometry": { "type": "Point", "coordinates": [ -0.066337977935078, 51.636828122910821 ] } },
    { "type": "Feature", "properties": { "name": "Lee_Upper_GW" }, "geometry": { "type": "Point", "coordinates": [ -0.078721489839296, 51.868543230140723 ] } },
    { "type": "Feature", "properties": { "name": "Loddon" }, "geometry": { "type": "Point", "coordinates": [ -0.907624184366598, 51.319838159099163 ] } },
    { "type": "Feature", "properties": { "name": "Loddon_Canals" }, "geometry": { "type": "Point", "coordinates": [ -0.753376724001394, 51.285253394235987 ] } },
    { "type": "Feature", "properties": { "name": "Mardyke" }, "geometry": { "type": "Point", "coordinates": [ 0.394898987743154, 51.526176219914269 ] } },
    { "type": "Feature", "properties": { "name": "Marsh_Dykes" }, "geometry": { "type": "Point", "coordinates": [ 0.095023123421345, 51.483559062856386 ] } },
    { "type": "Feature", "properties": { "name": "Medway_Middle" }, "geometry": { "type": "Point", "coordinates": [ 0.398794677135742, 51.242646872035479 ] } },
    { "type": "Feature", "properties": { "name": "Medway_Swale_Estuary" }, "geometry": { "type": "Point", "coordinates": [ 0.723174885428493, 51.394793405349915 ] } },
    { "type": "Feature", "properties": { "name": "Medway_Upper" }, "geometry": { "type": "Point", "coordinates": [ 0.117375228405589, 51.101909030636605 ] } },
    { "type": "Feature", "properties": { "name": "Mole_Lower_and_Rythe" }, "geometry": { "type": "Point", "coordinates": [ -0.319224620811578, 51.260791374358071 ] } },
    { "type": "Feature", "properties": { "name": "Mole_Upper_Trib" }, "geometry": { "type": "Point", "coordinates": [ -0.164055537482058, 51.160715576644975 ] } },
    { "type": "Feature", "properties": { "name": "Ock" }, "geometry": { "type": "Point", "coordinates": [ -1.367237139572633, 51.660362982593455 ] } },
    { "type": "Feature", "properties": { "name": "Old_Basing_Tertiaries" }, "geometry": { "type": "Point", "coordinates": [ -0.972263833322893, 51.260429651943262 ] } },
    { "type": "Feature", "properties": { "name": "Oxon_Ray" }, "geometry": { "type": "Point", "coordinates": [ -1.120727635587904, 51.875443705312108 ] } },
    { "type": "Feature", "properties": { "name": "Ravensbourne" }, "geometry": { "type": "Point", "coordinates": [ -0.001352717757785, 51.385704946787051 ] } },
    { "type": "Feature", "properties": { "name": "Roding_Beam_and_Ingrebourne" }, "geometry": { "type": "Point", "coordinates": [ 0.194397126741442, 51.660192224792219 ] } },
    { "type": "Feature", "properties": { "name": "Shrivenham_Corallian" }, "geometry": { "type": "Point", "coordinates": [ -1.547214455060832, 51.647198061338663 ] } },
    { "type": "Feature", "properties": { "name": "Tackley_Jurassic" }, "geometry": { "type": "Point", "coordinates": [ -1.246729866185656, 51.92954569598254 ] } },
    { "type": "Feature", "properties": { "name": "Teise" }, "geometry": { "type": "Point", "coordinates": [ 0.403307161341764, 51.117868014522791 ] } },
    { "type": "Feature", "properties": { "name": "Thame" }, "geometry": { "type": "Point", "coordinates": [ -0.928403519760273, 51.76708819004876 ] } },
    { "type": "Feature", "properties": { "name": "Thame_Canals" }, "geometry": { "type": "Point", "coordinates": [ -0.727911364191904, 51.784668573752114 ] } },
    { "type": "Feature", "properties": { "name": "Thames_Lower" }, "geometry": { "type": "Point", "coordinates": [ -0.641317159314793, 51.475887855593605 ] } },
    { "type": "Feature", "properties": { "name": "Thames_Lower_SWT" }, "geometry": { "type": "Point", "coordinates": [ -0.650980967896521, 51.509487287067721 ] } },
    { "type": "Feature", "properties": { "name": "Thames_Upper" }, "geometry": { "type": "Point", "coordinates": [ -1.878326330954973, 51.687996113582763 ] } },
    { "type": "Feature", "properties": { "name": "Thatcham_Tertiaries" }, "geometry": { "type": "Point", "coordinates": [ -1.242477431263358, 51.41474652702879 ] } },
    { "type": "Feature", "properties": { "name": "Tidal_Thames" }, "geometry": { "type": "Point", "coordinates": [ 0.672145732300491, 51.490089172529331 ] } },
    { "type": "Feature", "properties": { "name": "Twyford_Tertiaries" }, "geometry": { "type": "Point", "coordinates": [ -0.69275119747656, 51.517165120122506 ] } },
    { "type": "Feature", "properties": { "name": "Vale_of_White_Horse_Chalk" }, "geometry": { "type": "Point", "coordinates": [ -1.509105006663505, 51.532031928419457 ] } },
    { "type": "Feature", "properties": { "name": "Wandle" }, "geometry": { "type": "Point", "coordinates": [ -0.137588254985484, 51.340754110732142 ] } },
    { "type": "Feature", "properties": { "name": "West_Kent_and_Bromley_Tertiaries" }, "geometry": { "type": "Point", "coordinates": [ 0.021922120972377, 51.400594215983524 ] } },
    { "type": "Feature", "properties": { "name": "West_Kent_Darent_and_Cray_Chalk" }, "geometry": { "type": "Point", "coordinates": [ 0.193672548384017, 51.371527934769034 ] } },
    { "type": "Feature", "properties": { "name": "Wey" }, "geometry": { "type": "Point", "coordinates": [ -0.688718876866785, 51.213411577796222 ] } },
    { "type": "Feature", "properties": { "name": "White_Drain_and_Lakes" }, "geometry": { "type": "Point", "coordinates": [ 0.812324748297909, 51.322595137462933 ] } },
    { "type": "Feature", "properties": { "name": "Windrush" }, "geometry": { "type": "Point", "coordinates": [ -1.655435705425068, 51.809103200736438 ] } },
    { "type": "Feature", "properties": { "name": "Cherwell_and_Ray" }, "geometry": { "type": "Point", "coordinates": [ -1.25201907229179, 51.984451098651853 ] } },
    { "type": "Feature", "properties": { "name": "Colne" }, "geometry": { "type": "Point", "coordinates": [ -0.478470677066062, 51.691513282482241 ] } },
    { "type": "Feature", "properties": { "name": "Cotswolds" }, "geometry": { "type": "Point", "coordinates": [ -1.608117829471586, 51.844170618127798 ] } },
    { "type": "Feature", "properties": { "name": "Darent_and_Cray" }, "geometry": { "type": "Point", "coordinates": [ 0.176259491194704, 51.35631569901539 ] } },
    { "type": "Feature", "properties": { "name": "Essex_South" }, "geometry": { "type": "Point", "coordinates": [ 0.394876034252717, 51.52616401109853 ] } },
    { "type": "Feature", "properties": { "name": "Gloucestershire_and_the_Vale" }, "geometry": { "type": "Point", "coordinates": [ -1.699834986497715, 51.678601429651756 ] } },
    { "type": "Feature", "properties": { "name": "Kennet_and_Trib" }, "geometry": { "type": "Point", "coordinates": [ -1.473483721645939, 51.427444360846685 ] } },
    { "type": "Feature", "properties": { "name": "Kent_North" }, "geometry": { "type": "Point", "coordinates": [ 0.812277237577679, 51.322633239206695 ] } },
    { "type": "Feature", "properties": { "name": "Lee_Upper" }, "geometry": { "type": "Point", "coordinates": [ -0.059589425982602, 51.871032919482111 ] } },
    { "type": "Feature", "properties": { "name": "London" }, "geometry": { "type": "Point", "coordinates": [ -0.143212934067424, 51.501306723255141 ] } },
    { "type": "Feature", "properties": { "name": "Loddon_and_Trib" }, "geometry": { "type": "Point", "coordinates": [ -0.907624184366598, 51.319838159099163 ] } },
    { "type": "Feature", "properties": { "name": "Maidenhead_and_Sunbury" }, "geometry": { "type": "Point", "coordinates": [ -0.641317159314793, 51.475887855593605 ] } },
    { "type": "Feature", "properties": { "name": "Medway" }, "geometry": { "type": "Point", "coordinates": [ 0.372091437179229, 51.220781693244874 ] } },
    { "type": "Feature", "properties": { "name": "Mole" }, "geometry": { "type": "Point", "coordinates": [ -0.260838203232584, 51.223210345151394 ] } },
    { "type": "Feature", "properties": { "name": "Roding_Beam_and_Ingrebourne" }, "geometry": { "type": "Point", "coordinates": [ 0.190127701621824, 51.653923533293082 ] } },
    { "type": "Feature", "properties": { "name": "Thames_and_Chilterns_South" }, "geometry": { "type": "Point", "coordinates": [ -0.978170719905362, 51.649035158851603 ] } },
    { "type": "Feature", "properties": { "name": "Thames_AWB" }, "geometry": { "type": "Point", "coordinates": [ -0.683420831172196, 51.58328734138432 ] } },
    { "type": "Feature", "properties": { "name": "Thames_GW" }, "geometry": { "type": "Point", "coordinates": [ -0.753690404768893, 51.557141111333372 ] } },
    { "type": "Feature", "properties": { "name": "Thames_TraC" }, "geometry": { "type": "Point", "coordinates": [ 0.678169416862195, 51.470201134064105 ] } },
    { "type": "Feature", "properties": { "name": "Wey_and_Trib" }, "geometry": { "type": "Point", "coordinates": [ -0.688718876866785, 51.213411577796222 ] } }
    ]
    }
    
    function forwardGeocoder(query) {
        const matchingFeatures = [];
        for (const feature of centroids.features) {
        // Handle queries with different capitalization
        // than the source data by calling toLowerCase().
        if (
        feature.properties.name
        .toLowerCase()
        .includes(query.toLowerCase())
        ) {
        // Add a tree emoji as a prefix for custom
        // data results using carmen geojson format:
        // https://github.com/mapbox/carmen/blob/master/carmen-geojson.md
        feature['place_name'] = `🌊  ${feature.properties.name}`;
        feature['center'] = feature.geometry.coordinates;
        feature['place_type'] = ['park'];
        matchingFeatures.push(feature);
        }
        }
        return matchingFeatures;
        }


    map.on('click', 'oc', (e) => {
        // Copy coordinates array.
        new mapboxgl.Popup()
            .setLngLat(e.lngLat)
            .setHTML(e.features[0].properties.OC + "</br>" + e.features[0].properties.senticent_polarity)
            .addTo(map);
    });

    map.on('click', 'mc_value', (e) => {
        // Copy coordinates array.
        new mapboxgl.Popup()
            .setLngLat(e.lngLat)
            .setHTML(e.features[0].properties.MC + "</br>" + e.features[0].properties.senticent_polarity)
            .addTo(map);
    });

    map.on('click', 'wb_value', (e) => {
        // Copy coordinates array.
        new mapboxgl.Popup()
            .setLngLat(e.lngLat)
            .setHTML(e.features[0].properties.name + "</br>" + e.features[0].properties.senticent_polarity)
            .addTo(map);
    });

    map.on('mouseenter', 'oc', () => {
        map.getCanvas().style.cursor = 'pointer';
    });

    // Change it back to a pointer when it leaves.
    map.on('mouseleave', 'oc', () => {
        map.getCanvas().style.cursor = '';
    });

    map.on('mouseenter', 'mc', () => {
        map.getCanvas().style.cursor = 'pointer';
    });

    // Change it back to a pointer when it leaves.
    map.on('mouseleave', 'mc', () => {
        map.getCanvas().style.cursor = '';
    });

    // map.on('hover','mc', (e) => {

    // })
    const geocoder = new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl: mapboxgl,
        countries: 'gb',
        localGeocoder: forwardGeocoder
    });

    map.addControl(new mapboxgl.NavigationControl());
    
    document.getElementById('geocoder').appendChild(geocoder.onAdd(map));
    const ocLegendEl = document.getElementById('oc-legend');
    const mcLegendEl = document.getElementById('mc-legend');
    const riverLegendEl = document.getElementById('wb-legend');


    map.on('zoom', () => {


        if (map.getZoom() < 8) {
            ocLegendEl.style.display = 'none';
            riverLegendEl.style.display = 'none';
            mcLegendEl.style.display = 'block';
            document.getElementById("scale").innerHTML = "You are viewing at the Managment Catchment scale"
        } 
        
        
        if (map.getZoom() < 11 && map.getZoom() > 8) {
            ocLegendEl.style.display = 'block';
            mcLegendEl.style.display = 'none';
            riverLegendEl.style.display = 'none';
            document.getElementById("scale").innerHTML = "You are viewing at the Operational Catchment scale"
        }

        if (map.getZoom() > 11) {
            ocLegendEl.style.display = 'none';
            riverLegendEl.style.display = 'block';
            mcLegendEl.style.display = 'none';
            document.getElementById("scale").innerHTML = "You are viewing at the water body scale"
        }

    });
};