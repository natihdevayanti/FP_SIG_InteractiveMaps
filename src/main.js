mapboxgl.accessToken = 'pk.eyJ1IjoibmF0aWhkZXZheWFudGkiLCJhIjoiY2t3MzdtNzlxMGpxZDJxbW5yYjViMnYzciJ9.qQJNita1qhlzW5dJ2ef9xg';

navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {enableHighAccuracy: true})

function successLocation(position){
    setupMap([position.coords.longitude, position.coords.latitude])
}
function errorLocation(){
setupMap([-8.676056120193426, 115.20693091500979])
}

function setupMap(center){
  // Ganti layer map
var layerList = document.getElementById('menu');
var inputs = layerList.getElementsByTagName('input');
function switchLayer(layer) {
  var layerId = layer.target.id;
  map.setStyle('mapbox://styles/mapbox/' + layerId);
}
 
for (var i = 0; i < inputs.length; i++) {
  inputs[i].onclick = switchLayer;
}  

  const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: center,
        zoom : 11.2
      });
      
  
const nav = new mapboxgl.NavigationControl();
map.addControl(nav);

var directions = new MapboxDirections({
    accessToken: mapboxgl.accessToken
  });
  
  map.addControl(directions, 'top-left');
  
var places =
{
    "features": [
      {
        "type": "Feature",
        "properties": {
          "description": "Pantai Serangan ini terletak di Pulau Serangan. Pantai ini atau banyak juga yang menyebut dengan Pulau Penyu. ",
          "image": "url(https://asset.kompas.com/crops/HmEk7Wsx4IXAkW_tkaPAbX7Dw20=/140x0:740x400/1070x713/data/photo/2018/07/26/1530445543.jpg)",
          "title": "Pantai Serangan",
          "address": "Jl. Pantai Serangan, Pulau Serangan, Kec. Denpasar Sel., Kota Denpasar, Bali",
          "tour": "Wisata Alam"
        },
        "geometry": {
          "coordinates": [
            115.241132,
            -8.741084
          ],
          "type": "Point"
        },
        "id": "0b6685510815e69fcdead67fdc90f95a"
      },
      {
        "type": "Feature",
        "properties": {
          "description": "Museum Agung Bung Karno adalah museum yang menyimpan peninggalan bersejarah yang berhubungan dengan Soekarno—presiden pertama Indonesia.",
          "image": "url(https://upload.wikimedia.org/wikipedia/commons/2/27/Museum_Agung_Bung_Karno.png)",
          "title": "Museum Agung Bung Karno",
          "address": "Jl. Raya Puputan No.80, Dangin Puri Klod, Kec. Denpasar Tim., Kota Denpasar, Bali",
          "tour": "Wisata Sejarah"
        },
        "geometry": {
          "coordinates": [
            115.225422,
            -8.672433
          ],
          "type": "Point"
        },
        "id": "4b13a855e4070d8afff5e9df341c7582"
      },
      {
        "type": "Feature",
        "properties": {
          "description": "Pura Agung Jagatnatha adalah pura paling besar di Kota Denpasar. Lokasinya di Jalan Mayor Wisnu serta sangat strategis yakni tepat di sebelah timur Lapangan Puputan Badung dan bersebelahan dengan Museum Bali.",
          "image": "url(https://lh5.googleusercontent.com/p/AF1QipOGXW6ZssgZksC2eeYHU4UJ_iDn3QFFGFbbrjuT=w408-h725-k-no)",
          "title": "Pura Agung Jagatnatha",
          "address": "Jl. Surapati, Dangin Puri, Kec. Denpasar Tim., Kota Denpasar, Bali",
          "tour": "Wisata Religi"
        },
        "geometry": {
          "coordinates": [
            115.218789,
            -8.656738
          ],
          "type": "Point"
        },
        "id": "57695af39172db2c3b1d2f1111d4fc1e"
      },
      {
        "type": "Feature",
        "properties": {
          "title": "Monumen Bajra Sandhi",
          "description": "Monumen Bajra Sandhi atau disebut juga Monumen Perjuangan Rakyat Bali adalah monumen perjuangan rakyat Bali yang terletak di Renon, Kota Denpasar, Bali. ",
          "tour": "Wisata Sejarah",
          "address": "Jl. Raya Puputan No.142, Panjer, Denpasar Selatan, Kota Denpasar, Bali",
          "image": "url(https://upload.wikimedia.org/wikipedia/commons/a/a2/Monumen-Bajra-Sandhi.jpg)"
        },
        "geometry": {
          "coordinates": [
            115.233896,
            -8.671727
          ],
          "type": "Point"
        },
        "id": "583d991e97709721d345b79126fb3197"
      },
      {
        "type": "Feature",
        "properties": {
          "description": "Pura Geria Anyar Tanah Kilap berada di wilayah Banjar Gelogor Carik Desa Pakraman Pemogan Kecamatan Denpasar Selatan, Bali.",
          "image": "url(https://www.kintamani.id/wp-content/uploads/Pura-Geria-Anyar-Tanah-Kilap-Denpasar-2.jpg)",
          "title": "Pura Griya Tanah Kilap",
          "address": "Jl. Griya Anyar No.104, Pemogan, Denpasar Selatan, Kota Denpasar, Bali",
          "tour": "Wisata Religi"
        },
        "geometry": {
          "coordinates": [
            115.187198,
            -8.720559
          ],
          "type": "Point"
        },
        "id": "6ae650d187a1a2a5a45756c82a485c25"
      },
      {
        "type": "Feature",
        "properties": {
          "description": "Pura Dalem Pengembak Mertasari, Sanur adalah salah satu pura yang dipilih masyarakat untuk melakukan ritual mandi suci atau sering disebut dengan melukat.",
          "image": "url(https://denpasarnow.com/wp-content/uploads/2021/06/puradalempengembak4.jpg)",
          "title": "Pura Mertasari",
          "address": "Jalan Pulau Mertasar, Kec. Denpasar Selatan, Kota Denpasar, Bali",
          "tour": "Wisata Religi"
        },
        "geometry": {
          "coordinates": [
            115.25069,
            -8.708844
          ],
          "type": "Point"
        },
        "id": "6d2f3052b4c0ba65f682bd2291d2fe0a"
      },
      {
        "type": "Feature",
        "properties": {
          "description": "Museum Le Mayeur ini terletak di tepi pantai Sanur, berupa bangunan dengan arsitektur Bali yang menampung kurang lebih 88 buah lukisan yang dibagi menjadi lima jenis koleksi berdasarkan media yang dipakai, yaitu Bagor (22 lukisan), Hard Boeard (25 lukisan), Trilek (6 lukisan), Kertas (7 lukisan) dan Kanvas (28 lukisan). ",
          "image": "url(https://statik.tempo.co/data/2020/11/07/id_978984/978984_720.jpg)",
          "title": "Museum Le Mayeur",
          "address": "Jl. Hang Tuah, Sanur Kaja, Denpasar Selatan, Kota Denpasar, Bali",
          "tour": "Wisata Sejarah"
        },
        "geometry": {
          "coordinates": [
            115.262562,
            -8.674766
          ],
          "type": "Point"
        },
        "id": "736dc3bb40cdb40c09b91e2c29b26304"
      },
      {
        "type": "Feature",
        "properties": {
          "description": "Sebagai pusat konservasi penyu, tempat ini menjadi alternatif destinasi wisata bagi masyarakat maupun wisatawan asing yang berkunjung ke Bali.",
          "image": "url(https://snorkelaroundtheworld.com/wp-content/uploads/2018/06/turtle-conservation-bali-index.jpg)",
          "title": "Turtle Conservation and Education Center",
          "address": "Jl. Tukad Punggawa, Serangan, Denpasar Selatan, Kota Denpasar, Bali",
          "tour": "Wisata Edukasi"
        },
        "geometry": {
          "coordinates": [
            115.238114,
            -8.724104
          ],
          "type": "Point"
        },
        "id": "9a748fc7b30dea9d109c41264024cb31"
      },
      {
        "type": "Feature",
        "properties": {
          "description": "Pura Sakenan adalah sebuah pura yang dibangun untuk peribadatan umat Hindu Bali. Pura ini termasuk dalam wilayah Denpasar, namun terletak di sebuah pulau kecil yang terpisah dari Bali tepatnya di Pulau Serangan.",
          "image": "url(https://lh5.googleusercontent.com/p/AF1QipPAL8ENVcRdTUkv7U1FIsex7Gyp1GprIuLjUGo2=w408-h306-k-no)",
          "title": "Pura Dalem Sakenan",
          "address": "Jl. Pulau Serangan, Serangan, Denpasar Selatan, Kota Denpasar, Bali",
          "tour": "Wisata Religi"
        },
        "geometry": {
          "coordinates": [
            115.229879,
            -8.725222
          ],
          "type": "Point"
        },
        "id": "9ca3dc75aa0060de7847273fdda5d5d0"
      },
      {
        "type": "Feature",
        "properties": {
          "description": "Hutan mangrove di Bali ini selain sebagai tempat wisata ataupun rekreasi, menjadi tempat penelitian dan juga belajar tentang konservasi hutan mangrove untuk melengkapi pengetahuan atau edukasi pengunjung. ",
          "image": "url(https://www.denpasarkota.go.id/uploads/berita/berita_203011081101_PesonaHutanMangrovediDenpasarSelatan.jpeg)",
          "title": "Mangrove Forest",
          "address": "Jl. Bypass Ngurah Rai No.KM. 21, Pemogan, Kuta, Kota Denpasar, Bali",
          "tour": "Wisata Edukasi"
        },
        "geometry": {
          "coordinates": [
            115.193153,
            -8.726109
          ],
          "type": "Point"
        },
        "id": "ad6e8933461256208a157f369410b2f0"
      },
      {
        "type": "Feature",
        "properties": {
          "description": "Objek Wisata Pantai Padang Galak di Kesiman Denpasar Bali adalah tempat wisata yang ramai dengan wisatawan pada hari biasa maupun hari liburan. Tempat ini sangat indah dan bisa memberikan sensasi yang berbeda dengan aktivitas kita sehari hari.",
          "image": "url(https://www.tempatwisata.pro/users_media/3150/Pantai%20Padang%20Galak.jpg)",
          "title": "Pantai Padang Galak",
          "address": "Jl. Padanggalak Sanur No.88, Kesiman Petilan, Kec. Denpasar Tim., Kota Denpasar, Bali",
          "tour": "Wisata Alam"
        },
        "geometry": {
          "coordinates": [
            115.261629,
            -8.663597
          ],
          "type": "Point"
        },
        "id": "ae0348bb32da33a45b310c42d7d8fbe1"
      },
      {
        "type": "Feature",
        "properties": {
          "description": "Desa Budaya Kertalangu merupakan obyek wisata yang terletak di tengah kota Denpasar. Menawarkan obyek wisata fisik dan non fisik berbasis tradisi budaya agraris masyarakat setempat. ",
          "image": "url(https://www.denpasarkota.go.id/uploads/berita/berita_202411091145_PesonaTersembunyidiBalikKeasrianDesaBudayaKertalangu.jpeg)",
          "title": "Desa Budaya Kertalangu",
          "address": "Jl. Bypass Ngurah Rai No.88, Kesiman Kertalangu, Kec. Denpasar Tim., Kota Denpasar, Bali",
          "tour": "Wisata Budaya"
        },
        "geometry": {
          "coordinates": [
            115.256315,
            -8.642312
          ],
          "type": "Point"
        },
        "id": "eef9409029a8d8e40f46d1cd30ecf788"
      },
      {
        "type": "Feature",
        "properties": {
          "description": "Museum Bali (dikenal juga sebagai Museum Unit Pelaksana Teknis Dinas Kebudayaan Bali) adalah museum negara yang berada di Kota Denpasar, Bali. ",
          "title": "Museum Bali",
          "tour": "Wisata Sejarah",
          "address": "Jl. Mayor Wisnu No.1, Dangin Puri, Kec. Denpasar Tim., Kota Denpasar, Bali",
          "image": "url(https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Bali_Museum.jpg/800px-Bali_Museum.jpg)"
        },
        "geometry": {
          "coordinates": [
            115.21868,
            -8.657579
          ],
          "type": "Point"
        },
        "id": "f00a4ba2cbeecd0e5d5bf3eb6732a6c3"
      },
      {
        "type": "Feature",
        "properties": {
          "description": "Kawasan Sanur Bali lebih dikenal wisatawan sebagai destinasi wisata pantai pasir putih yang lebih sepi dibandingkan dengan pantai Kuta, Legian dan Seminyak. ",
          "image": "url(https://www.water-sport-bali.com/wp-content/uploads/2013/01/Pantai-Sanur.jpg)",
          "title": "Pantai Sanur",
          "address": "Jalan Kusuma Sari No. 1, Sanur, Kec. Denpasar Sel., Kota Denpasar, Bali",
          "tour": "Wisata Alam"
        },
        "geometry": {
          "coordinates": [
            115.264311,
            -8.68265
          ],
          "type": "Point"
        },
        "id": "f9542fa6051b74648f1bb843cf33e4e7"
      },
      {
        "type": "Feature",
        "properties": {
          "description": "Konon katanya, disebut Tanah Kilap karena di lokasi ini ada sekelebat kilatan cahaya bertepatan ketika Danghyang Nirartha Moksa di Pura Uluwatu’.",
          "image": "url(https://lh5.googleusercontent.com/p/AF1QipNv1ck280PNkCtbnu6_TMCkNXuV665pQFcKz8HN=w408-h259-k-no)",
          "title": "Pura Luhur Candi Narmada Tanah Kilap",
          "address": "Pemogan, Denpasar Selatan, Denpasar City, Bali",
          "tour": "Wisata Religi"
        },
        "geometry": {
          "coordinates": [
            115.187972,
            -8.722519
          ],
          "type": "Point"
        },
        "id": "fac3b1fda8d7273e57722994c17a04db"
      }
    ],
    "type": "FeatureCollection"
  };
   

 places.features.forEach(function(place, i){
    place.properties.id = i;
    });

    map.on('load', function (e) {
    map.addSource("places", {
        "type": "geojson",
        "data": places
    });

    buildLocationList(places);
    addMarkers();
    });

    /**
     * Menambahkan marker pada setiap daftar tempat
    **/
    function addMarkers() {
    places.features.forEach(function(marker) {
        var el = document.createElement('div');
        el.id = "marker-" + marker.properties.id;
        el.className = 'marker';
        new mapboxgl.Marker(el, {offset: [0, -23]})
        .setLngLat(marker.geometry.coordinates)
        .addTo(map);
        el.addEventListener('click', function(e){
        flyToPlace(marker);
        createPopUp(marker);
        var activeItem = document.getElementsByClassName('active');
        e.stopPropagation();
        if (activeItem[0]) {
            activeItem[0].classList.remove('active');
        }
        var listing = document.getElementById('listing-' + marker.properties.id);
        listing.classList.add('active');
        });
    });
    }

    /**
     * Menambahkan daftar tempat wisata pada sidebar
    **/
    function buildLocationList(data) {
    data.features.forEach(function(place, i){
        var prop = place.properties;
        var listings = document.getElementById('listings');
        var listing = listings.appendChild(document.createElement('div'));
        listing.id = "listing-" + prop.id;
        listing.className = 'item';
        var link = listing.appendChild(document.createElement('a'));
        link.href = '#';
        link.className = 'title';
        link.id = "link-" + prop.id;
        link.innerHTML = prop.title;

        /* Menambahkan detail pada tiap data listing. */
        var details = listing.appendChild(document.createElement('div'));
        details.innerHTML = prop.tour;
        details.innerHTML += ' · ' + prop.address;

        link.addEventListener('click', function(e){
        for (var i=0; i < data.features.length; i++) {
            if (this.id === "link-" + data.features[i].properties.id) {
            var clickedListing = data.features[i];
            flyToPlace(clickedListing);
            createPopUp(clickedListing);
            }
        }
        var activeItem = document.getElementsByClassName('active');
        if (activeItem[0]) {
            activeItem[0].classList.remove('active');
        }
        this.parentNode.classList.add('active');
        });
    });
    }

    function flyToPlace(currentFeature) {
    map.flyTo({
        center: currentFeature.geometry.coordinates,
        zoom: 15
        });
    }
   /**
     * Membuat pop-Up
    **/
    function createPopUp(currentFeature) {
      var popUps = document.getElementsByClassName('mapboxgl-popup');
      if (popUps[0]) popUps[0].remove();
  
      var popup = new mapboxgl.Popup({closeOnClick: false})
          .setLngLat(currentFeature.geometry.coordinates)
          .setHTML('<h6>' + currentFeature.properties.title + '</h6>' + '<p>' + currentFeature.properties.description + '</p>')
          .addTo(map);
      }
 
  
// filter group
var filterGroup = document.getElementById('filter-group');
var tourTypes = []; // stores types of tourist spot
var markerList = []; // stores element for each feature

// menambahkan markers on map
places.features.forEach(function(marker) {
    // elemen untuk masing-masing fitur
    var el = document.createElement('div');
    el.className = 'marker';
    el.style.backgroundImage = marker.properties.image;
    el.style.fontSize = 0;
    el.textContent = marker.properties.tour;
   
    // popup
    var popup = new mapboxgl.Popup({
                        offset: 50,
                        closeButton: false})
                .setHTML('<h6>' + marker.properties.title + '</h6>' + '<p>' + marker.properties.description + '</p>');
            
    // menampilkan popup on hover
    el.addEventListener('mouseenter', () => {
        popup.addTo(map);
        el.style.width = '80px';
        el.style.height = '80px';
        el.style.zIndex = '10';    
    });
    el.addEventListener('mouseleave', () => {
        popup.remove();
        el.style.width = '40px';
        el.style.height = '40px';  
        el.style.zIndex = '0';    
    });

    // make a marker for each feature and add to the map
    new mapboxgl.Marker(el)
        .setLngLat(marker.geometry.coordinates)
        .setPopup(popup)
        .addTo(map);
    
    markerList.push(el);
    //untuk hide sesuai dengan pilihan marker yang ada
    if(!(tourTypes.includes(marker.properties.tour))){
        tourTypes.push(marker.properties.tour);

        // menambahkan checkbox dan label elemen
        var input = document.createElement('input');
        input.type = 'checkbox';
        input.checked = true;
        filterGroup.appendChild(input);

        var label = document.createElement('label');
        label.textContent = marker.properties.tour;
        filterGroup.appendChild(label);

        label.addEventListener('click', (e) => {
            var vis = input.checked? "hidden" : "visible";
            for (let i = 0; i < markerList.length; i++) {
                if(!(label.textContent.localeCompare(markerList[i].textContent))){
                    markerList[i].style.visibility = vis;
                }
            }
            input.checked = !input.checked; 
        });
    }
});

}