function initMap() {
    var mapDiv = document.getElementById('map');
    var map = new google.maps.Map(mapDiv, {
        zoom: 7,
        center: {lat: 14.098163, lng: -87.204303},
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        mapTypeControl: false,
        zoomControl: true,
        zoomControlOptions: {
            position: google.maps.ControlPosition.LEFT_CENTER
        },
        scaleControl: true,
        streetViewControl: false
    });

   // ---------------------------------------------------------------- COLOREO -------------------------------------------------------------------------------//
  

   var P_MUN_0101 = new google.maps.Polygon({
    paths: [MUN_0101_1,MUN_0101_2],
    strokeColor: '#FF0000',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#FF0000',
    fillOpacity: 0.35 
    });

   var P_MUN_0102 = new google.maps.Polygon({
    paths: MUN_0102,
    strokeColor: '#FF0000',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#FF0000',
    fillOpacity: 0.35 
    });

   var P_MUN_0103 = new google.maps.Polygon({
    paths: MUN_0103,
    strokeColor: '#FF0000',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#FF0000',
    fillOpacity: 0.35 
    });

   var P_MUN_0104 = new google.maps.Polygon({
    paths: MUN_0104,
    strokeColor: '#FF0000',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#FF0000',
    fillOpacity: 0.35 
    });

   var P_MUN_0105 = new google.maps.Polygon({
    paths: [MUN_0105_1,MUN_0105_2],
    strokeColor: '#FF0000',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#FF0000',
    fillOpacity: 0.35 
    });

    var P_MUN_0106 = new google.maps.Polygon({
    paths: MUN_0106,
    strokeColor: '#FF0000',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#FF0000',
    fillOpacity: 0.35 
    });

    var P_MUN_0107 = new google.maps.Polygon({
    paths: MUN_0107,
    strokeColor: '#FF0000',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#FF0000',
    fillOpacity: 0.35 
    });

    var P_MUN_0108 = new google.maps.Polygon({
    paths: MUN_0108,
    strokeColor: '#FF0000',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#FF0000',
    fillOpacity: 0.35 
    });

    var P_MUN_0201 = new google.maps.Polygon({
    paths: [MUN_0201_1,MUN_0201_2,MUN_0201_3,MUN_0201_4,MUN_0201_5,MUN_0201_6],
    strokeColor: '#2d0aff',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#2d0aff',
    fillOpacity: 0.35 
    });

    var P_MUN_0202 = new google.maps.Polygon({
    paths: MUN_0202,
    strokeColor: '#2d0aff',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#2d0aff',
    fillOpacity: 0.35 
    });

    var P_MUN_0203 = new google.maps.Polygon({
    paths: MUN_0203,
    strokeColor: '#2d0aff',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#2d0aff',
    fillOpacity: 0.35 
    });

    var P_MUN_0204 = new google.maps.Polygon({
    paths: [MUN_0204_1,MUN_0204_2],
    strokeColor: '#2d0aff',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#2d0aff',
    fillOpacity: 0.35 
    });

    var P_MUN_0205 = new google.maps.Polygon({
    paths: MUN_0205,
    strokeColor: '#2d0aff',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#2d0aff',
    fillOpacity: 0.35 
    });

    var P_MUN_0206 = new google.maps.Polygon({
    paths: [MUN_0206_1,MUN_0206_2,MUN_0206_3,MUN_0206_4],
    strokeColor: '#2d0aff',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#2d0aff',
    fillOpacity: 0.35 
    });

    var P_MUN_0207 = new google.maps.Polygon({
    paths: MUN_0207,
    strokeColor: '#2d0aff',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#2d0aff',
    fillOpacity: 0.35 
    });


    var P_MUN_0208 = new google.maps.Polygon({
    paths: MUN_0208,
    strokeColor: '#2d0aff',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#2d0aff',
    fillOpacity: 0.35 
    });

    var P_MUN_0209 = new google.maps.Polygon({
    paths: MUN_0209,
    strokeColor: '#2d0aff',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#2d0aff',
    fillOpacity: 0.35 
    });

    var P_MUN_0210 = new google.maps.Polygon({
    paths: MUN_0210,
    strokeColor: '#2d0aff',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#2d0aff',
    fillOpacity: 0.35 
    });

    var P_MUN_0301 = new google.maps.Polygon({
    paths: MUN_0301,
    strokeColor: '#13a33f',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#13a33f',
    fillOpacity: 0.35 
    });

    var P_MUN_0302 = new google.maps.Polygon({
    paths: MUN_0302,
    strokeColor: '#13a33f',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#13a33f',
    fillOpacity: 0.35 
    });

    var P_MUN_0303 = new google.maps.Polygon({
    paths: MUN_0303,
    strokeColor: '#13a33f',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#13a33f',
    fillOpacity: 0.35 
    });

    var P_MUN_0304 = new google.maps.Polygon({
    paths: MUN_0304,
    strokeColor: '#13a33f',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#13a33f',
    fillOpacity: 0.35 
    });

    var P_MUN_0305 = new google.maps.Polygon({
    paths: MUN_0305,
    strokeColor: '#13a33f',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#13a33f',
    fillOpacity: 0.35 
    });

    var P_MUN_0306 = new google.maps.Polygon({
    paths: MUN_0306,
    strokeColor: '#13a33f',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#13a33f',
    fillOpacity: 0.35 
    });

    var P_MUN_0307 = new google.maps.Polygon({
    paths: MUN_0307,
    strokeColor: '#13a33f',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#13a33f',
    fillOpacity: 0.35 
    });

    var P_MUN_0308 = new google.maps.Polygon({
    paths: MUN_0308,
    strokeColor: '#13a33f',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#13a33f',
    fillOpacity: 0.35 
    });

    var P_MUN_0309 = new google.maps.Polygon({
    paths: MUN_0309,
    strokeColor: '#13a33f',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#13a33f',
    fillOpacity: 0.35 
    });

    var P_MUN_0310 = new google.maps.Polygon({
    paths: MUN_0310,
    strokeColor: '#13a33f',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#13a33f',
    fillOpacity: 0.35 
    });

    var P_MUN_0311 = new google.maps.Polygon({
    paths: MUN_0311,
    strokeColor: '#13a33f',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#13a33f',
    fillOpacity: 0.35 
    });

    var P_MUN_0312 = new google.maps.Polygon({
    paths: MUN_0312,
    strokeColor: '#13a33f',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#13a33f',
    fillOpacity: 0.35 
    });

    var P_MUN_0313 = new google.maps.Polygon({
    paths: MUN_0313,
    strokeColor: '#13a33f',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#13a33f',
    fillOpacity: 0.35 
    });

    var P_MUN_0314 = new google.maps.Polygon({
    paths: MUN_0314,
    strokeColor: '#13a33f',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#13a33f',
    fillOpacity: 0.35 
    });

    var P_MUN_0315 = new google.maps.Polygon({
    paths: MUN_0315,
    strokeColor: '#13a33f',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#13a33f',
    fillOpacity: 0.35 
    });

    var P_MUN_0316 = new google.maps.Polygon({
    paths: MUN_0316,
    strokeColor: '#13a33f',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#13a33f',
    fillOpacity: 0.35 
    });

    var P_MUN_0317 = new google.maps.Polygon({
    paths: [MUN_0317_1,MUN_0317_2],
    strokeColor: '#13a33f',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#13a33f',
    fillOpacity: 0.35 
    });

    var P_MUN_0318 = new google.maps.Polygon({
    paths: MUN_0318,
    strokeColor: '#13a33f',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#13a33f',
    fillOpacity: 0.35 
    });

    var P_MUN_0319 = new google.maps.Polygon({
    paths: MUN_0319,
    strokeColor: '#13a33f',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#13a33f',
    fillOpacity: 0.35 
    });

    var P_MUN_0320 = new google.maps.Polygon({
    paths: MUN_0320,
    strokeColor: '#13a33f',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#13a33f',
    fillOpacity: 0.35 
    });

    var P_MUN_0321 = new google.maps.Polygon({
    paths: MUN_0321,
    strokeColor: '#13a33f',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#13a33f',
    fillOpacity: 0.35 
    });

    var P_MUN_0401 = new google.maps.Polygon({
    paths: MUN_0401,
    strokeColor: '#da660b',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#da660b',
    fillOpacity: 0.35 
    });


    var P_MUN_0401 = new google.maps.Polygon({
    paths: MUN_0401,
    strokeColor: '#da660b',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#da660b',
    fillOpacity: 0.35 
    });


    var P_MUN_0401 = new google.maps.Polygon({
    paths: MUN_0401,
    strokeColor: '#da660b',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#da660b',
    fillOpacity: 0.35 
    });


    var P_MUN_0402 = new google.maps.Polygon({
    paths: MUN_0402,
    strokeColor: '#da660b',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#da660b',
    fillOpacity: 0.35 
    });


    var P_MUN_0403 = new google.maps.Polygon({
    paths: MUN_0403,
    strokeColor: '#da660b',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#da660b',
    fillOpacity: 0.35 
    });


    var P_MUN_0404 = new google.maps.Polygon({
    paths: MUN_0404,
    strokeColor: '#da660b',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#da660b',
    fillOpacity: 0.35 
    });


    var P_MUN_0405 = new google.maps.Polygon({
    paths: MUN_0405,
    strokeColor: '#da660b',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#da660b',
    fillOpacity: 0.35 
    });


    var P_MUN_0406 = new google.maps.Polygon({
    paths: MUN_0406,
    strokeColor: '#da660b',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#da660b',
    fillOpacity: 0.35 
    });


    var P_MUN_0407 = new google.maps.Polygon({
    paths: MUN_0407,
    strokeColor: '#da660b',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#da660b',
    fillOpacity: 0.35 
    });

    var P_MUN_0408 = new google.maps.Polygon({
    paths: MUN_0408,
    strokeColor: '#da660b',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#da660b',
    fillOpacity: 0.35 
    });

    var P_MUN_0409 = new google.maps.Polygon({
    paths: MUN_0409,
    strokeColor: '#da660b',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#da660b',
    fillOpacity: 0.35 
    }); 

    var P_MUN_0410 = new google.maps.Polygon({
    paths: MUN_0410,
    strokeColor: '#da660b',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#da660b',
    fillOpacity: 0.35 
    }); 

    var P_MUN_0411 = new google.maps.Polygon({
    paths: MUN_0411,
    strokeColor: '#da660b',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#da660b',
    fillOpacity: 0.35 
    }); 

    var P_MUN_0412 = new google.maps.Polygon({
    paths: MUN_0412,
    strokeColor: '#da660b',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#da660b',
    fillOpacity: 0.35 
    }); 

    var P_MUN_0413 = new google.maps.Polygon({
    paths: MUN_0413,
    strokeColor: '#da660b',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#da660b',
    fillOpacity: 0.35 
    }); 

    var P_MUN_0414 = new google.maps.Polygon({
    paths: MUN_0414,
    strokeColor: '#da660b',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#da660b',
    fillOpacity: 0.35 
    }); 

    var P_MUN_0415 = new google.maps.Polygon({
    paths: MUN_0415,
    strokeColor: '#da660b',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#da660b',
    fillOpacity: 0.35 
    }); 

    var P_MUN_0416 = new google.maps.Polygon({
    paths: MUN_0416,
    strokeColor: '#da660b',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#da660b',
    fillOpacity: 0.35 
    }); 

    var P_MUN_0417 = new google.maps.Polygon({
    paths: MUN_0417,
    strokeColor: '#da660b',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#da660b',
    fillOpacity: 0.35 
    }); 

    var P_MUN_0418 = new google.maps.Polygon({
    paths: MUN_0418,
    strokeColor: '#da660b',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#da660b',
    fillOpacity: 0.35 
    }); 

    var P_MUN_0419 = new google.maps.Polygon({
    paths: MUN_0419,
    strokeColor: '#da660b',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#da660b',
    fillOpacity: 0.35 
    }); 

    var P_MUN_0420 = new google.maps.Polygon({
    paths: MUN_0420,
    strokeColor: '#da660b',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#da660b',
    fillOpacity: 0.35 
    }); 

    var P_MUN_0421 = new google.maps.Polygon({
    paths: MUN_0421,
    strokeColor: '#da660b',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#da660b',
    fillOpacity: 0.35 
    }); 

    var P_MUN_0422 = new google.maps.Polygon({
    paths: MUN_0422,
    strokeColor: '#da660b',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#da660b',
    fillOpacity: 0.35 
    }); 

    var P_MUN_0423 = new google.maps.Polygon({
    paths: MUN_0423,
    strokeColor: '#da660b',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#da660b',
    fillOpacity: 0.35 
    }); 

    var P_MUN_0501 = new google.maps.Polygon({
    paths: MUN_0501,
    strokeColor: '#b00c78',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#b00c78',
    fillOpacity: 0.35 
    }); 

    var P_MUN_0502 = new google.maps.Polygon({
    paths: MUN_0502,
    strokeColor: '#b00c78',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#b00c78',
    fillOpacity: 0.35 
    }); 

    var P_MUN_0503 = new google.maps.Polygon({
    paths: MUN_0503,
    strokeColor: '#b00c78',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#b00c78',
    fillOpacity: 0.35 
    }); 

    var P_MUN_0504 = new google.maps.Polygon({
    paths: MUN_0504,
    strokeColor: '#b00c78',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#b00c78',
    fillOpacity: 0.35 
    }); 

    var P_MUN_0505 = new google.maps.Polygon({
    paths: MUN_0505,
    strokeColor: '#b00c78',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#b00c78',
    fillOpacity: 0.35 
    }); 

    var P_MUN_0506 = new google.maps.Polygon({
    paths: [MUN_0506_1,MUN_0506_2],
    strokeColor: '#b00c78',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#b00c78',
    fillOpacity: 0.35 
    }); 


    var P_MUN_0507 = new google.maps.Polygon({
    paths: MUN_0507,
    strokeColor: '#b00c78',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#b00c78',
    fillOpacity: 0.35 
    }); 

    var P_MUN_0508 = new google.maps.Polygon({
    paths: MUN_0508,
    strokeColor: '#b00c78',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#b00c78',
    fillOpacity: 0.35 
    }); 

    var P_MUN_0509 = new google.maps.Polygon({
    paths: MUN_0509,
    strokeColor: '#b00c78',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#b00c78',
    fillOpacity: 0.35 
    }); 

    var P_MUN_0510 = new google.maps.Polygon({
    paths: MUN_0510,
    strokeColor: '#b00c78',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#b00c78',
    fillOpacity: 0.35 
    }); 

    var P_MUN_0511 = new google.maps.Polygon({
    paths: MUN_0511,
    strokeColor: '#b00c78',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#b00c78',
    fillOpacity: 0.35 
    }); 

    var P_MUN_0512 = new google.maps.Polygon({
    paths: MUN_0512,
    strokeColor: '#b00c78',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#b00c78',
    fillOpacity: 0.35 
    }); 

    var P_MUN_0601 = new google.maps.Polygon({
    paths: [MUN_0601_1,MUN_0601_2],
    strokeColor: '#b00c78',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#b00c78',
    fillOpacity: 0.35 
    }); 

    var P_MUN_0602 = new google.maps.Polygon({
    paths: MUN_0602,
    strokeColor: '#b00c78',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#b00c78',
    fillOpacity: 0.35 
    }); 

    var P_MUN_0603 = new google.maps.Polygon({
    paths: MUN_0603,
    strokeColor: '#b00c78',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#b00c78',
    fillOpacity: 0.35 
    }); 

    var P_MUN_0604 = new google.maps.Polygon({
    paths: MUN_0604,
    strokeColor: '#b00c78',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#b00c78',
    fillOpacity: 0.35 
    }); 

    var P_MUN_0605 = new google.maps.Polygon({
    paths: MUN_0605,
    strokeColor: '#b00c78',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#b00c78',
    fillOpacity: 0.35 
    }); 

    var P_MUN_0606 = new google.maps.Polygon({
    paths: MUN_0606,
    strokeColor: '#b00c78',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#b00c78',
    fillOpacity: 0.35 
    }); 

    var P_MUN_0607 = new google.maps.Polygon({
    paths: [MUN_0607_1,MUN_0607_2,MUN_0607_3,MUN_0607_4,MUN_0607_5],
    strokeColor: '#b00c78',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#b00c78',
    fillOpacity: 0.35 
    }); 

    var P_MUN_0608 = new google.maps.Polygon({
    paths: MUN_0608,
    strokeColor: '#b00c78',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#b00c78',
    fillOpacity: 0.35 
    }); 

    var P_MUN_0609 = new google.maps.Polygon({
    paths: MUN_0609,
    strokeColor: '#b00c78',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#b00c78',
    fillOpacity: 0.35 
    }); 

    var P_MUN_0610 = new google.maps.Polygon({
    paths: MUN_0610,
    strokeColor: '#b00c78',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#b00c78',
    fillOpacity: 0.35 
    }); 

    var P_MUN_0611 = new google.maps.Polygon({
    paths: MUN_0611,
    strokeColor: '#b00c78',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#b00c78',
    fillOpacity: 0.35 
    }); 

    var P_MUN_0612 = new google.maps.Polygon({
    paths: MUN_0612,
    strokeColor: '#b00c78',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#b00c78',
    fillOpacity: 0.35 
    }); 

    var P_MUN_0613 = new google.maps.Polygon({
    paths: MUN_0613,
    strokeColor: '#b00c78',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#b00c78',
    fillOpacity: 0.35 
    }); 

    var P_MUN_0614 = new google.maps.Polygon({
    paths: MUN_0614,
    strokeColor: '#b00c78',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#b00c78',
    fillOpacity: 0.35 
    }); 

    var P_MUN_0615 = new google.maps.Polygon({
    paths: MUN_0615,
    strokeColor: '#b00c78',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#b00c78',
    fillOpacity: 0.35 
    }); 
    var P_MUN_0616 = new google.maps.Polygon({
    paths: MUN_0616,
    strokeColor: '#b00c78',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#b00c78',
    fillOpacity: 0.35 
    }); 

    var P_MUN_0701 = new google.maps.Polygon({
    paths: MUN_0701,
    strokeColor: '#da660b',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#da660b',
    fillOpacity: 0.35 
    }); 

    var P_MUN_0702 = new google.maps.Polygon({
    paths: MUN_0702,
    strokeColor: '#da660b',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#da660b',
    fillOpacity: 0.35 
    }); 

    var P_MUN_0703 = new google.maps.Polygon({
    paths: MUN_0703,
    strokeColor: '#da660b',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#da660b',
    fillOpacity: 0.35 
    }); 

    var P_MUN_0704 = new google.maps.Polygon({
    paths: MUN_0704,
    strokeColor: '#da660b',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#da660b',
    fillOpacity: 0.35 
    }); 

    var P_MUN_0705 = new google.maps.Polygon({
    paths: MUN_0705,
    strokeColor: '#da660b',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#da660b',
    fillOpacity: 0.35 
    }); 

    var P_MUN_0706 = new google.maps.Polygon({
    paths: MUN_0706,
    strokeColor: '#da660b',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#da660b',
    fillOpacity: 0.35 
    }); 

    var P_MUN_0707 = new google.maps.Polygon({
    paths: MUN_0707,
    strokeColor: '#da660b',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#da660b',
    fillOpacity: 0.35 
    }); 

    var P_MUN_0708 = new google.maps.Polygon({
    paths: MUN_0708,
    strokeColor: '#da660b',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#da660b',
    fillOpacity: 0.35 
    }); 

    var P_MUN_0709 = new google.maps.Polygon({
    paths: MUN_0709,
    strokeColor: '#da660b',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#da660b',
    fillOpacity: 0.35 
    }); 

    var P_MUN_0710 = new google.maps.Polygon({
    paths: MUN_0710,
    strokeColor: '#da660b',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#da660b',
    fillOpacity: 0.35 
    }); 

    var P_MUN_0711 = new google.maps.Polygon({
    paths: MUN_0711,
    strokeColor: '#da660b',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#da660b',
    fillOpacity: 0.35 
    }); 

    var P_MUN_0712 = new google.maps.Polygon({
    paths: MUN_0712,
    strokeColor: '#da660b',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#da660b',
    fillOpacity: 0.35 
    }); 

    var P_MUN_0713 = new google.maps.Polygon({
    paths: MUN_0713,
    strokeColor: '#da660b',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#da660b',
    fillOpacity: 0.35 
    }); 

    var P_MUN_0714 = new google.maps.Polygon({
    paths: MUN_0714,
    strokeColor: '#da660b',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#da660b',
    fillOpacity: 0.35 
    }); 

    var P_MUN_0715 = new google.maps.Polygon({
    paths: MUN_0715,
    strokeColor: '#da660b',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#da660b',
    fillOpacity: 0.35 
    }); 

    var P_MUN_0716 = new google.maps.Polygon({
    paths: MUN_0716,
    strokeColor: '#da660b',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#da660b',
    fillOpacity: 0.35 
    }); 

    var P_MUN_0717 = new google.maps.Polygon({
    paths: MUN_0717,
    strokeColor: '#da660b',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#da660b',
    fillOpacity: 0.35 
    }); 

    var P_MUN_0718 = new google.maps.Polygon({
    paths: MUN_0718,
    strokeColor: '#da660b',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#da660b',
    fillOpacity: 0.35 
    }); 

    var P_MUN_0719 = new google.maps.Polygon({
    paths: MUN_0719,
    strokeColor: '#da660b',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#da660b',
    fillOpacity: 0.35 
    }); 

    var P_MUN_0801 = new google.maps.Polygon({
    paths: MUN_0801,
    strokeColor: '#FF0000',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#FF0000',
    fillOpacity: 0.35 
    }); 

    var P_MUN_0802 = new google.maps.Polygon({
    paths: MUN_0802,
    strokeColor: '#FF0000',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#FF0000',
    fillOpacity: 0.35 
    }); 

    var P_MUN_0803 = new google.maps.Polygon({
    paths: MUN_0803,
    strokeColor: '#FF0000',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#FF0000',
    fillOpacity: 0.35 
    }); 

    var P_MUN_0804 = new google.maps.Polygon({
    paths: MUN_0804,
    strokeColor: '#FF0000',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#FF0000',
    fillOpacity: 0.35 
    }); 

    var P_MUN_0805 = new google.maps.Polygon({
    paths: MUN_0805,
    strokeColor: '#FF0000',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#FF0000',
    fillOpacity: 0.35 
    }); 

    var P_MUN_0806 = new google.maps.Polygon({
    paths: MUN_0806,
    strokeColor: '#FF0000',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#FF0000',
    fillOpacity: 0.35 
    }); 

    var P_MUN_0807 = new google.maps.Polygon({
    paths: MUN_0807,
    strokeColor: '#FF0000',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#FF0000',
    fillOpacity: 0.35 
    }); 

    var P_MUN_0808 = new google.maps.Polygon({
    paths: MUN_0808,
    strokeColor: '#FF0000',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#FF0000',
    fillOpacity: 0.35 
    }); 

    var P_MUN_0809 = new google.maps.Polygon({
    paths: MUN_0809,
    strokeColor: '#FF0000',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#FF0000',
    fillOpacity: 0.35 
    }); 

    var P_MUN_0810 = new google.maps.Polygon({
    paths: MUN_0810,
    strokeColor: '#FF0000',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#FF0000',
    fillOpacity: 0.35 
    }); 

    var P_MUN_0811 = new google.maps.Polygon({
    paths: MUN_0811,
    strokeColor: '#FF0000',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#FF0000',
    fillOpacity: 0.35 
    }); 

    var P_MUN_0812 = new google.maps.Polygon({
    paths: MUN_0812,
    strokeColor: '#FF0000',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#FF0000',
    fillOpacity: 0.35 
    }); 

    var P_MUN_0813 = new google.maps.Polygon({
    paths: MUN_0813,
    strokeColor: '#FF0000',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#FF0000',
    fillOpacity: 0.35 
    }); 

    var P_MUN_0814 = new google.maps.Polygon({
    paths: MUN_0814,
    strokeColor: '#FF0000',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#FF0000',
    fillOpacity: 0.35 
    }); 

    var P_MUN_0815 = new google.maps.Polygon({
    paths: MUN_0815,
    strokeColor: '#FF0000',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#FF0000',
    fillOpacity: 0.35 
    }); 

    var P_MUN_0816 = new google.maps.Polygon({
    paths: MUN_0816,
    strokeColor: '#FF0000',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#FF0000',
    fillOpacity: 0.35 
    });

    var P_MUN_0817 = new google.maps.Polygon({
    paths: MUN_0817,
    strokeColor: '#FF0000',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#FF0000',
    fillOpacity: 0.35 
    }); 

    var P_MUN_0818 = new google.maps.Polygon({
    paths: MUN_0818,
    strokeColor: '#FF0000',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#FF0000',
    fillOpacity: 0.35 
    }); 

    var P_MUN_0819 = new google.maps.Polygon({
    paths: MUN_0819,
    strokeColor: '#FF0000',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#FF0000',
    fillOpacity: 0.35 
    }); 

    var P_MUN_0820 = new google.maps.Polygon({
    paths: MUN_0820,
    strokeColor: '#FF0000',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#FF0000',
    fillOpacity: 0.35 
    }); 

    var P_MUN_0821 = new google.maps.Polygon({
    paths: MUN_0821,
    strokeColor: '#10357F',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#000000',
    fillOpacity: 0.35
    }); 
    P_MUN_0821.setMap(map);
    
    var P_MUN_0822 = new google.maps.Polygon({
    paths: [MUN_0822_1,MUN_0822_2],
    strokeColor: '#FF0000',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#FF0000',
    fillOpacity: 0.35 
    }); 

    var P_MUN_0823 = new google.maps.Polygon({
    paths: MUN_0823,
    strokeColor: '#FF0000',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#FF0000',
    fillOpacity: 0.35 
    });

    var P_MUN_0824 = new google.maps.Polygon({
    paths: MUN_0824,
    strokeColor: '#FF0000',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#FF0000',
    fillOpacity: 0.35 
    }); 

    var P_MUN_0825 = new google.maps.Polygon({
    paths: MUN_0825,
    strokeColor: '#FF0000',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#FF0000',
    fillOpacity: 0.35 
    }); 

    var P_MUN_0826 = new google.maps.Polygon({
    paths: MUN_0826,
    strokeColor: '#FF0000',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#FF0000',
    fillOpacity: 0.35 
    }); 

    var P_MUN_0827 = new google.maps.Polygon({
    paths: MUN_0827,
    strokeColor: '#FF0000',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#FF0000',
    fillOpacity: 0.35 
    });     

    var P_MUN_0828 = new google.maps.Polygon({
    paths: MUN_0828,
    strokeColor: '#FF0000',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#FF0000',
    fillOpacity: 0.35 
    });     

    var P_MUN_0901 = new google.maps.Polygon({
    paths: [MUN_0901_1,MUN_0901_2,MUN_0901_3,MUN_0901_4,MUN_0901_5,MUN_0901_6,MUN_0901_7,MUN_0901_8],
    strokeColor: '#FF0000',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#FF0000',
    fillOpacity: 0.35 
    });     

    var P_MUN_0902 = new google.maps.Polygon({
    paths: [MUN_0902_1,MUN_0902_2,MUN_0902_3,MUN_0902_4,MUN_0902_5,MUN_0902_6,MUN_0902_7],
    strokeColor: '#FF0000',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#FF0000',
    fillOpacity: 0.35 
    });     

    var P_MUN_0903 = new google.maps.Polygon({
    paths: [MUN_0903_1, MUN_0903_2],
    strokeColor: '#FF0000',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#FF0000',
    fillOpacity: 0.35 
    });     

    var P_MUN_0904 = new google.maps.Polygon({
    paths: [MUN_0904_1, MUN_0904_2,MUN_0904_3,MUN_0904_4,MUN_0904_5,MUN_0904_6,MUN_0904_7,MUN_0904_8],
    strokeColor: '#FF0000',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#FF0000',
    fillOpacity: 0.35 
    });     

    var P_MUN_0905 = new google.maps.Polygon({
    paths: [MUN_0905_1, MUN_0905_2],
    strokeColor: '#10357F',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#000000',
    fillOpacity: 0.35
    }); 
    P_MUN_0905.setMap(map);

    var P_MUN_0906 = new google.maps.Polygon({
    paths: [MUN_0906_1, MUN_0906_2,MUN_0906_3],
    strokeColor: '#10357F',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#000000',
    fillOpacity: 0.35
    }); 
    P_MUN_0906.setMap(map);


    var P_MUN_1001 = new google.maps.Polygon({
    paths: MUN_1001,
    strokeColor: '#2d0aff',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#2d0aff',
    fillOpacity: 0.35 
    }); 

    var P_MUN_1002 = new google.maps.Polygon({
    paths: MUN_1002,
    strokeColor: '#2d0aff',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#2d0aff',
    fillOpacity: 0.35 
    }); 

    var P_MUN_1003 = new google.maps.Polygon({
    paths: MUN_1003,
    strokeColor: '#2d0aff',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#2d0aff',
    fillOpacity: 0.35 
    }); 

    var P_MUN_1004 = new google.maps.Polygon({
    paths: MUN_1004,
    strokeColor: '#2d0aff',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#2d0aff',
    fillOpacity: 0.35 
    }); 

    var P_MUN_1005 = new google.maps.Polygon({
    paths: MUN_1005,
    strokeColor: '#2d0aff',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#2d0aff',
    fillOpacity: 0.35 
    }); 

    var P_MUN_1006 = new google.maps.Polygon({
    paths: MUN_1006,
    strokeColor: '#2d0aff',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#2d0aff',
    fillOpacity: 0.35 
    }); 

    var P_MUN_1007 = new google.maps.Polygon({
    paths: MUN_1007,
    strokeColor: '#2d0aff',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#2d0aff',
    fillOpacity: 0.35 
    }); 

    var P_MUN_1008 = new google.maps.Polygon({
    paths: MUN_1008,
    strokeColor: '#2d0aff',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#2d0aff',
    fillOpacity: 0.35 
    }); 

    var P_MUN_1009 = new google.maps.Polygon({
    paths: MUN_1009,
    strokeColor: '#2d0aff',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#2d0aff',
    fillOpacity: 0.35 
    }); 

    var P_MUN_1010 = new google.maps.Polygon({
    paths: MUN_1010,
    strokeColor: '#2d0aff',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#2d0aff',
    fillOpacity: 0.35 
    }); 

    var P_MUN_1011 = new google.maps.Polygon({
    paths: MUN_1011,
    strokeColor: '#2d0aff',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#2d0aff',
    fillOpacity: 0.35 
    }); 

    var P_MUN_1012 = new google.maps.Polygon({
    paths: MUN_1012,
    strokeColor: '#2d0aff',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#2d0aff',
    fillOpacity: 0.35 
    }); 

    var P_MUN_1013 = new google.maps.Polygon({
    paths: MUN_1013,
    strokeColor: '#2d0aff',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#2d0aff',
    fillOpacity: 0.35 
    }); 

    var P_MUN_1014 = new google.maps.Polygon({
    paths: MUN_1014,
    strokeColor: '#2d0aff',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#2d0aff',
    fillOpacity: 0.35 
    }); 

    var P_MUN_1015 = new google.maps.Polygon({
    paths: MUN_1015,
    strokeColor: '#2d0aff',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#2d0aff',
    fillOpacity: 0.35 
    }); 

    var P_MUN_1016 = new google.maps.Polygon({
    paths: MUN_1016,
    strokeColor: '#2d0aff',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#2d0aff',
    fillOpacity: 0.35 
    }); 

    var P_MUN_1017 = new google.maps.Polygon({
    paths: MUN_1017,
    strokeColor: '#2d0aff',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#2d0aff',
    fillOpacity: 0.35 
    }); 

    var P_MUN_1101 = new google.maps.Polygon({
    paths: [MUN_1101_1,MUN_1101_2,MUN_1101_3,MUN_1101_4,MUN_1101_5,MUN_1101_6,MUN_1101_7,MUN_1101_8,MUN_1101_9,MUN_1101_10,MUN_1101_11],
    strokeColor: '#13a33f',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#13a33f',
    fillOpacity: 0.35 
    }); 

    var P_MUN_1102 = new google.maps.Polygon({
    paths: [MUN_1102_1,MUN_1102_2,MUN_1102_3,MUN_1102_4,MUN_1102_5,MUN_1102_6],
    strokeColor: '#13a33f',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#13a33f',
    fillOpacity: 0.35 
    }); 

    var P_MUN_1103 = new google.maps.Polygon({
    paths: [MUN_1103_1,MUN_1103_2,MUN_1103_3,MUN_1103_4,MUN_1103_5,MUN_1103_6,MUN_1103_7,MUN_1103_8],
    strokeColor: '#13a33f',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#13a33f',
    fillOpacity: 0.35 
    }); 

    var P_MUN_1104 = new google.maps.Polygon({
    paths: [MUN_1104_1,MUN_1104_2,MUN_1104_3],
    strokeColor: '#13a33f',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#13a33f',
    fillOpacity: 0.35 
    }); 

    var P_MUN_1201 = new google.maps.Polygon({
    paths: MUN_1201,
    strokeColor: '#da660b',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#da660b',
    fillOpacity: 0.35 
    }); 

    var P_MUN_1202 = new google.maps.Polygon({
    paths: MUN_1202,
    strokeColor: '#10357F',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#000000',
    fillOpacity: 0.35 
    }); 
    P_MUN_1202.setMap(map);

    var P_MUN_1203 = new google.maps.Polygon({
    paths: MUN_1203,
    strokeColor: '#da660b',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#da660b',
    fillOpacity: 0.35 
    }); 

    var P_MUN_1204 = new google.maps.Polygon({
    paths: MUN_1204,
    strokeColor: '#da660b',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#da660b',
    fillOpacity: 0.35 
    }); 

    var P_MUN_1205 = new google.maps.Polygon({
    paths: MUN_1205,
    strokeColor: '#da660b',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#da660b',
    fillOpacity: 0.35 
    }); 

    var P_MUN_1206 = new google.maps.Polygon({
    paths: MUN_1206,
    strokeColor: '#da660b',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#000000',
    fillOpacity: 0.35 
    }); 


    var P_MUN_1207 = new google.maps.Polygon({
    paths: MUN_1207,
    strokeColor: '#da660b',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#da660b',
    fillOpacity: 0.35 
    }); 

    var P_MUN_1208 = new google.maps.Polygon({
    paths: MUN_1208,
    strokeColor: '#da660b',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#da660b',
    fillOpacity: 0.35 
    }); 

    var P_MUN_1209 = new google.maps.Polygon({
    paths: MUN_1209,
    strokeColor: '#da660b',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#da660b',
    fillOpacity: 0.35 
    }); 

    var P_MUN_1210 = new google.maps.Polygon({
    paths: MUN_1210,
    strokeColor: '#da660b',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#da660b',
    fillOpacity: 0.35 
    }); 

    var P_MUN_1211 = new google.maps.Polygon({
    paths: MUN_1211,
    strokeColor: '#da660b',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#da660b',
    fillOpacity: 0.35 
    }); 

    var P_MUN_1212 = new google.maps.Polygon({
    paths: MUN_1212,
    strokeColor: '#da660b',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#da660b',
    fillOpacity: 0.35 
    }); 

    var P_MUN_1213 = new google.maps.Polygon({
    paths: MUN_1213,
    strokeColor: '#da660b',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#da660b',
    fillOpacity: 0.35 
    }); 

    var P_MUN_1214 = new google.maps.Polygon({
    paths: MUN_1214,
    strokeColor: '#da660b',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#da660b',
    fillOpacity: 0.35 
    }); 

    var P_MUN_1215 = new google.maps.Polygon({
    paths: MUN_1215,
    strokeColor: '#da660b',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#da660b',
    fillOpacity: 0.35 
    }); 

    var P_MUN_1216 = new google.maps.Polygon({
    paths: MUN_1216,
    strokeColor: '#da660b',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#da660b',
    fillOpacity: 0.35 
    }); 

    var P_MUN_1217 = new google.maps.Polygon({
    paths: MUN_1217,
    strokeColor: '#da660b',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#da660b',
    fillOpacity: 0.35 
    }); 

    var P_MUN_1218 = new google.maps.Polygon({
    paths: MUN_1218,
    strokeColor: '#da660b',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#da660b',
    fillOpacity: 0.35 
    });     

    var P_MUN_1219 = new google.maps.Polygon({
    paths: MUN_1219,
    strokeColor: '#da660b',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#da660b',
    fillOpacity: 0.35 
    });     

    var P_MUN_1301 = new google.maps.Polygon({
    paths: MUN_1301,
    strokeColor: '#b00c78',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#b00c78',
    fillOpacity: 0.35 
    }); 

    var P_MUN_1302 = new google.maps.Polygon({
    paths: MUN_1302,
    strokeColor: '#b00c78',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#b00c78',
    fillOpacity: 0.35 
    }); 

    var P_MUN_1303 = new google.maps.Polygon({
    paths: MUN_1303,
    strokeColor: '#b00c78',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#b00c78',
    fillOpacity: 0.35 
    }); 
        
    var P_MUN_1304 = new google.maps.Polygon({
    paths: MUN_1304,
    strokeColor: '#b00c78',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#b00c78',
    fillOpacity: 0.35 
    });

    var P_MUN_1305 = new google.maps.Polygon({
    paths: MUN_1305,
    strokeColor: '#b00c78',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#b00c78',
    fillOpacity: 0.35 
    });

    var P_MUN_1306 = new google.maps.Polygon({
    paths: MUN_1306,
    strokeColor: '#b00c78',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#b00c78',
    fillOpacity: 0.35 
    });

    var P_MUN_1307 = new google.maps.Polygon({
    paths: MUN_1307,
    strokeColor: '#b00c78',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#b00c78',
    fillOpacity: 0.35 
    });

    var P_MUN_1308 = new google.maps.Polygon({
    paths: MUN_1308,
    strokeColor: '#b00c78',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#b00c78',
    fillOpacity: 0.35 
    });

    var P_MUN_1309 = new google.maps.Polygon({
    paths: MUN_1309,
    strokeColor: '#b00c78',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#b00c78',
    fillOpacity: 0.35 
    });

    var P_MUN_1310 = new google.maps.Polygon({
    paths: MUN_1310,
    strokeColor: '#b00c78',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#b00c78',
    fillOpacity: 0.35 
    });

    var P_MUN_1311 = new google.maps.Polygon({
    paths: MUN_1311,
    strokeColor: '#b00c78',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#b00c78',
    fillOpacity: 0.35 
    });

    var P_MUN_1312 = new google.maps.Polygon({
    paths: MUN_1312,
    strokeColor: '#b00c78',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#b00c78',
    fillOpacity: 0.35 
    });

    var P_MUN_1313 = new google.maps.Polygon({
    paths: MUN_1313,
    strokeColor: '#b00c78',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#b00c78',
    fillOpacity: 0.35 
    });

    var P_MUN_1314 = new google.maps.Polygon({
    paths: MUN_1314,
    strokeColor: '#b00c78',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#b00c78',
    fillOpacity: 0.35 
    });

    var P_MUN_1315 = new google.maps.Polygon({
    paths: MUN_1315,
    strokeColor: '#b00c78',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#b00c78',
    fillOpacity: 0.35 
    });

    var P_MUN_1316 = new google.maps.Polygon({
    paths: MUN_1316,
    strokeColor: '#b00c78',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#b00c78',
    fillOpacity: 0.35 
    });

    var P_MUN_1317 = new google.maps.Polygon({
    paths: MUN_1317,
    strokeColor: '#b00c78',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#b00c78',
    fillOpacity: 0.35 
    });

    var P_MUN_1318 = new google.maps.Polygon({
    paths: MUN_1318,
    strokeColor: '#b00c78',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#b00c78',
    fillOpacity: 0.35 
    });

    var P_MUN_1319 = new google.maps.Polygon({
    paths: MUN_1319,
    strokeColor: '#b00c78',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#b00c78',
    fillOpacity: 0.35 
    });


    var P_MUN_1320 = new google.maps.Polygon({
    paths: MUN_1320,
    strokeColor: '#b00c78',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#b00c78',
    fillOpacity: 0.35 
    });

    var P_MUN_1321 = new google.maps.Polygon({
    paths: MUN_1321,
    strokeColor: '#b00c78',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#b00c78',
    fillOpacity: 0.35 
    });

    var P_MUN_1322 = new google.maps.Polygon({
    paths: MUN_1322,
    strokeColor: '#b00c78',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#b00c78',
    fillOpacity: 0.35 
    });

    var P_MUN_1323 = new google.maps.Polygon({
    paths: MUN_1323,
    strokeColor: '#b00c78',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#b00c78',
    fillOpacity: 0.35 
    });

    var P_MUN_1324 = new google.maps.Polygon({
    paths: MUN_1324,
    strokeColor: '#b00c78',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#b00c78',
    fillOpacity: 0.35 
    });

    var P_MUN_1325 = new google.maps.Polygon({
    paths: MUN_1325,
    strokeColor: '#b00c78',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#b00c78',
    fillOpacity: 0.35 
    });

    var P_MUN_1326 = new google.maps.Polygon({
    paths: MUN_1326,
    strokeColor: '#b00c78',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#b00c78',
    fillOpacity: 0.35 
    });

    var P_MUN_1327 = new google.maps.Polygon({
    paths: MUN_1327,
    strokeColor: '#b00c78',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#b00c78',
    fillOpacity: 0.35 
    });

    var P_MUN_1328 = new google.maps.Polygon({
    paths: MUN_1328,
    strokeColor: '#b00c78',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#b00c78',
    fillOpacity: 0.35 
    });

    var P_MUN_1401 = new google.maps.Polygon({
    paths: MUN_1401,
    strokeColor: '#13a33f',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#13a33f',
    fillOpacity: 0.35 
    });

    var P_MUN_1402 = new google.maps.Polygon({
    paths: MUN_1402,
    strokeColor: '#13a33f',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#13a33f',
    fillOpacity: 0.35 
    });

    var P_MUN_1403 = new google.maps.Polygon({
    paths: MUN_1403,
    strokeColor: '#13a33f',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#13a33f',
    fillOpacity: 0.35 
    });

    var P_MUN_1404 = new google.maps.Polygon({
    paths: MUN_1404,
    strokeColor: '#13a33f',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#13a33f',
    fillOpacity: 0.35 
    });

    var P_MUN_1405 = new google.maps.Polygon({
    paths: MUN_1405,
    strokeColor: '#13a33f',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#13a33f',
    fillOpacity: 0.35 
    });     

    var P_MUN_1406 = new google.maps.Polygon({
    paths: MUN_1406,
    strokeColor: '#13a33f',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#13a33f',
    fillOpacity: 0.35 
    });

    var P_MUN_1407 = new google.maps.Polygon({
    paths: MUN_1407,
    strokeColor: '#13a33f',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#13a33f',
    fillOpacity: 0.35 
    });

    var P_MUN_1408 = new google.maps.Polygon({
    paths: MUN_1408,
    strokeColor: '#13a33f',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#13a33f',
    fillOpacity: 0.35 
    });

    var P_MUN_1409 = new google.maps.Polygon({
    paths: MUN_1409,
    strokeColor: '#13a33f',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#13a33f',
    fillOpacity: 0.35 
    });

    var P_MUN_1410 = new google.maps.Polygon({
    paths: MUN_1410,
    strokeColor: '#13a33f',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#13a33f',
    fillOpacity: 0.35 
    });

    var P_MUN_1411 = new google.maps.Polygon({
    paths: MUN_1411,
    strokeColor: '#13a33f',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#13a33f',
    fillOpacity: 0.35 
    });

    var P_MUN_1412 = new google.maps.Polygon({
    paths: MUN_1412,
    strokeColor: '#13a33f',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#13a33f',
    fillOpacity: 0.35 
    });

    var P_MUN_1413 = new google.maps.Polygon({
    paths: MUN_1413,
    strokeColor: '#10357F',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#000000',
    fillOpacity: 0.35
    }); 
    P_MUN_1413.setMap(map);

    var P_MUN_1414 = new google.maps.Polygon({
    paths: MUN_1414,
    strokeColor: '#13a33f',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#13a33f',
    fillOpacity: 0.35 
    });

    var P_MUN_1415 = new google.maps.Polygon({
    paths: MUN_1415,
    strokeColor: '#13a33f',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#13a33f',
    fillOpacity: 0.35 
    });

    var P_MUN_1416 = new google.maps.Polygon({
    paths: MUN_1416,
    strokeColor: '#13a33f',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#13a33f',
    fillOpacity: 0.35 
    });


   var P_MUN_1501= new google.maps.Polygon({
    paths: MUN_1501,
    strokeColor: '#13a33f',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#13a33f',
    fillOpacity: 0.35 
    });

   var P_MUN_1502= new google.maps.Polygon({
    paths: MUN_1502,
    strokeColor: '#13a33f',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#13a33f',
    fillOpacity: 0.35 
    });

   var P_MUN_1503= new google.maps.Polygon({
    paths: MUN_1503,
    strokeColor: '#13a33f',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#13a33f',
    fillOpacity: 0.35 
    });

   var P_MUN_1504 = new google.maps.Polygon({
    paths: MUN_1504,
    strokeColor: '#13a33f',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#13a33f',
    fillOpacity: 0.35 
    });

     var P_MUN_1505= new google.maps.Polygon({
    paths: MUN_1505,
    strokeColor: '#13a33f',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#13a33f',
    fillOpacity: 0.35 
    });

   var P_MUN_1506= new google.maps.Polygon({
    paths: MUN_1506,
    strokeColor: '#13a33f',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#13a33f',
    fillOpacity: 0.35 
    });

   var P_MUN_1507= new google.maps.Polygon({
    paths: MUN_1507,
    strokeColor: '#13a33f',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#13a33f',
    fillOpacity: 0.35 
    });

   var P_MUN_1508= new google.maps.Polygon({
    paths: MUN_1508,
    strokeColor: '#13a33f',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#13a33f',
    fillOpacity: 0.35 
    });

   var P_MUN_1509 = new google.maps.Polygon({
    paths: MUN_1509,
    strokeColor: '#13a33f',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#13a33f',
    fillOpacity: 0.35 
    });

     var P_MUN_1510= new google.maps.Polygon({
    paths: MUN_1510,
    strokeColor: '#13a33f',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#13a33f',
    fillOpacity: 0.35 
    });

   var P_MUN_1511= new google.maps.Polygon({
    paths: MUN_1511,
    strokeColor: '#13a33f',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#13a33f',
    fillOpacity: 0.35 
    });

   var P_MUN_1512= new google.maps.Polygon({
    paths: MUN_1512,
    strokeColor: '#13a33f',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#13a33f',
    fillOpacity: 0.35 
    });

   var P_MUN_1513= new google.maps.Polygon({
    paths: MUN_1513,
    strokeColor: '#13a33f',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#13a33f',
    fillOpacity: 0.35 
    });

   var P_MUN_1514= new google.maps.Polygon({
    paths: MUN_1514,
    strokeColor: '#13a33f',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#13a33f',
    fillOpacity: 0.35 
    });

   var P_MUN_1515 = new google.maps.Polygon({
    paths: MUN_1515,
    strokeColor: '#13a33f',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#13a33f',
    fillOpacity: 0.35 
    });

     var P_MUN_1516= new google.maps.Polygon({
    paths: MUN_1516,
    strokeColor: '#13a33f',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#13a33f',
    fillOpacity: 0.35 
    });

   var P_MUN_1517= new google.maps.Polygon({
    paths: MUN_1517,
    strokeColor: '#13a33f',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#13a33f',
    fillOpacity: 0.35 
    });

   var P_MUN_1518= new google.maps.Polygon({
    paths: MUN_1518,
    strokeColor: '#13a33f',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#13a33f',
    fillOpacity: 0.35 
    });

   var P_MUN_1519= new google.maps.Polygon({
    paths: MUN_1519,
    strokeColor: '#13a33f',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#13a33f',
    fillOpacity: 0.35 
    });

   var P_MUN_1520 = new google.maps.Polygon({
    paths: MUN_1520,
    strokeColor: '#13a33f',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#13a33f',
    fillOpacity: 0.35 
    });

     var P_MUN_1521= new google.maps.Polygon({
    paths: MUN_1521,
    strokeColor: '#13a33f',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#13a33f',
    fillOpacity: 0.35 
    });

   var P_MUN_1522= new google.maps.Polygon({
    paths: MUN_1522,
    strokeColor: '#13a33f',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#13a33f',
    fillOpacity: 0.35 
    });

    var P_MUN_1523= new google.maps.Polygon({
    paths: MUN_1523,
    strokeColor: '#13a33f',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#13a33f',
    fillOpacity: 0.35 
    });

   var P_MUN_1601= new google.maps.Polygon({
    paths: MUN_1601,
    strokeColor: '#FF0000',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#FF0000',
    fillOpacity: 0.35 
    });


    var P_MUN_1602= new google.maps.Polygon({
    paths: MUN_1602,
    strokeColor: '#FF0000',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#FF0000',
    fillOpacity: 0.35 
    });

   var P_MUN_1603= new google.maps.Polygon({
    paths: MUN_1603,
    strokeColor: '#FF0000',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#FF0000',
    fillOpacity: 0.35 
    });

     var P_MUN_1604= new google.maps.Polygon({
    paths: MUN_1604,
    strokeColor: '#FF0000',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#FF0000',
    fillOpacity: 0.35 
    });

   var P_MUN_1605= new google.maps.Polygon({
    paths: MUN_1605,
    strokeColor: '#FF0000',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#FF0000',
    fillOpacity: 0.35 
    });

    var P_MUN_1606= new google.maps.Polygon({
    paths: MUN_1606,
    strokeColor: '#FF0000',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#FF0000',
    fillOpacity: 0.35 
    });

   var P_MUN_1607= new google.maps.Polygon({
    paths: MUN_1607,
    strokeColor: '#FF0000',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#FF0000',
    fillOpacity: 0.35 
    });

     var P_MUN_1608= new google.maps.Polygon({
    paths: MUN_1608,
    strokeColor: '#FF0000',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#FF0000',
    fillOpacity: 0.35 
    });
   var P_MUN_1609= new google.maps.Polygon({
    paths: MUN_1609,
    strokeColor: '#FF0000',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#FF0000',
    fillOpacity: 0.35 
    });

     var P_MUN_1610= new google.maps.Polygon({
    paths: MUN_1610,
    strokeColor: '#FF0000',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#FF0000',
    fillOpacity: 0.35 
    });
   var P_MUN_1611= new google.maps.Polygon({
    paths: MUN_1611,
    strokeColor: '#FF0000',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#FF0000',
    fillOpacity: 0.35 
    });

    var P_MUN_1612= new google.maps.Polygon({
    paths: MUN_1612,
    strokeColor: '#FF0000',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#FF0000',
    fillOpacity: 0.35 
    });

   var P_MUN_1613= new google.maps.Polygon({
    paths: MUN_1613,
    strokeColor: '#FF0000',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#FF0000',
    fillOpacity: 0.35 
    });

     var P_MUN_1614= new google.maps.Polygon({
    paths: MUN_1614,
    strokeColor: '#FF0000',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#FF0000',
    fillOpacity: 0.35 
    });

   var P_MUN_1615= new google.maps.Polygon({
    paths: MUN_1615,
    strokeColor: '#FF0000',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#FF0000',
    fillOpacity: 0.35 
    });

    var P_MUN_1616= new google.maps.Polygon({
    paths: MUN_1616,
    strokeColor: '#FF0000',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#FF0000',
    fillOpacity: 0.35 
    });

   var P_MUN_1617= new google.maps.Polygon({
    paths: MUN_1617,
    strokeColor: '#FF0000',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#FF0000',
    fillOpacity: 0.35 
    });

     var P_MUN_1618= new google.maps.Polygon({
    paths: MUN_1618,
    strokeColor: '#FF0000',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#FF0000',
    fillOpacity: 0.35 
    });
   var P_MUN_1619= new google.maps.Polygon({
    paths: MUN_1619,
    strokeColor: '#FF0000',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#FF0000',
    fillOpacity: 0.35 
    });

     var P_MUN_1620= new google.maps.Polygon({
    paths: MUN_1620,
    strokeColor: '#FF0000',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#FF0000',
    fillOpacity: 0.35 
    });

    var P_MUN_1621= new google.maps.Polygon({
    paths: MUN_1621,
    strokeColor: '#FF0000',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#FF0000',
    fillOpacity: 0.35 
    });

    var P_MUN_1622= new google.maps.Polygon({
    paths: MUN_1622,
    strokeColor: '#FF0000',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#FF0000',
    fillOpacity: 0.35 
    });

    var P_MUN_1623= new google.maps.Polygon({
    paths: MUN_1623,
    strokeColor: '#10357F',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#000000',
    fillOpacity: 0.35
    }); 
    P_MUN_1623.setMap(map);

    var P_MUN_1624= new google.maps.Polygon({
    paths: MUN_1624,
    strokeColor: '#FF0000',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#FF0000',
    fillOpacity: 0.35 
    });

   var P_MUN_1625= new google.maps.Polygon({
    paths: MUN_1625,
    strokeColor: '#FF0000',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#FF0000',
    fillOpacity: 0.35 
    });

    var P_MUN_1626= new google.maps.Polygon({
    paths: MUN_1626,
    strokeColor: '#FF0000',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#FF0000',
    fillOpacity: 0.35 
    });

   var P_MUN_1627= new google.maps.Polygon({
    paths: MUN_1627,
    strokeColor: '#FF0000',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#FF0000',
    fillOpacity: 0.35 
    });

     var P_MUN_1628= new google.maps.Polygon({
    paths: MUN_1628,
    strokeColor: '#FF0000',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#FF0000',
    fillOpacity: 0.35 
    });

     var P_MUN_1701 = new google.maps.Polygon({
    paths: [MUN_1701_1,MUN_1701_2,MUN_1701_3,MUN_1701_4],
    strokeColor: '#2d0aff',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#2d0aff',
    fillOpacity: 0.35 
    });

     var P_MUN_1702 = new google.maps.Polygon({
    paths: [MUN_1702_1,MUN_1702_2,MUN_1702_3],
    strokeColor: '#2d0aff',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#2d0aff',
    fillOpacity: 0.35 
    });

     var P_MUN_1703 = new google.maps.Polygon({
    paths: [MUN_1703_1,MUN_1703_2,MUN_1703_3,MUN_1703_4,MUN_1703_5,MUN_1703_6,MUN_1703_7,MUN_1703_8,MUN_1703_9,MUN_1703_10,MUN_1703_11],
    strokeColor: '#2d0aff',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#2d0aff',
    fillOpacity: 0.35 
    });

     var P_MUN_1704= new google.maps.Polygon({
    paths: MUN_1704,
    strokeColor: '#2d0aff',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#2d0aff',
    fillOpacity: 0.35 
    });

     var P_MUN_1705= new google.maps.Polygon({
    paths: MUN_1705,
    strokeColor: '#2d0aff',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#2d0aff',
    fillOpacity: 0.35 
    });

     var P_MUN_1706= new google.maps.Polygon({
    paths: MUN_1706,
    strokeColor: '#2d0aff',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#2d0aff',
    fillOpacity: 0.35 
    });

     var P_MUN_1707= new google.maps.Polygon({
    paths: MUN_1707,
    strokeColor: '#2d0aff',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#2d0aff',
    fillOpacity: 0.35 
    });

     var P_MUN_1708= new google.maps.Polygon({
    paths: MUN_1708,
    strokeColor: '#2d0aff',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#2d0aff',
    fillOpacity: 0.35 
    });

     var P_MUN_1709 = new google.maps.Polygon({
    paths: [MUN_1709_1,MUN_1709_2,MUN_1709_3,MUN_1709_4,MUN_1709_5,MUN_1709_6,MUN_1709_7,MUN_1709_8],
    strokeColor: '#2d0aff',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#2d0aff',
    fillOpacity: 0.35 
    });


     var P_MUN_1801= new google.maps.Polygon({
    paths: MUN_1801,
    strokeColor: '#da660b',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#da660b',
    fillOpacity: 0.35 
    });


     var P_MUN_1802= new google.maps.Polygon({
    paths: MUN_1802,
    strokeColor: '#da660b',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#da660b',
    fillOpacity: 0.35 
    });


     var P_MUN_1803= new google.maps.Polygon({
    paths: MUN_1803,
    strokeColor: '#da660b',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#da660b',
    fillOpacity: 0.35 
    });

    var P_MUN_1804= new google.maps.Polygon({
    paths: MUN_1804,
    strokeColor: '#da660b',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#da660b',
    fillOpacity: 0.35 
    });


    var P_MUN_1805= new google.maps.Polygon({
    paths: MUN_1805,
    strokeColor: '#da660b',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#da660b',
    fillOpacity: 0.35 
    });


     var P_MUN_1806 = new google.maps.Polygon({
    paths: MUN_1806,
    strokeColor: '#da660b',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#da660b',
    fillOpacity: 0.35 
    });

     var P_MUN_1807= new google.maps.Polygon({
    paths: MUN_1807,
    strokeColor: '#da660b',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#da660b',
    fillOpacity: 0.35 
    });


     var P_MUN_1808= new google.maps.Polygon({
    paths: MUN_1808,
    strokeColor: '#da660b',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#da660b',
    fillOpacity: 0.35 
    });


     var P_MUN_1809= new google.maps.Polygon({
    paths: MUN_1809,
    strokeColor: '#da660b',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#da660b',
    fillOpacity: 0.35 
    });

     var P_MUN_1810= new google.maps.Polygon({
    paths: MUN_1810,
    strokeColor: '#da660b',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#da660b',
    fillOpacity: 0.35 
    });


     var P_MUN_1811= new google.maps.Polygon({
    paths: MUN_1811,
    strokeColor: '#da660b',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#da660b',
    fillOpacity: 0.35 
    });

	
	//-------------------------------------------------MARKETS-----------------------------------------------------------------//
for(var i=0;i<MUNICIPIO.length;i++)
    {
        eval(MUNICIPIO[i]).setMap(map);
        if (CUMPLIMIENTO[i])
        {
           CUMPLIMIENTO[i] = CUMPLIMIENTO[i].replace(",",".");
           //alert(MUNICIPIO[i]+" / "+CUMPLIMIENTO[i]);
        
        
        if (CUMPLIMIENTO[i] < 0 ) {

            eval(MUNICIPIO[i]).setOptions({fillColor: "#FF0000",strokeColor: '#10357F'});
            //10357F
        } else if (CUMPLIMIENTO[i] >= 0 && CUMPLIMIENTO[i] < 4.3)
        {
            eval(MUNICIPIO[i]).setOptions({fillColor: "#fff800",strokeColor: '#10357F'});
            
        } else if (CUMPLIMIENTO[i] >= 4.3)
        {
            eval(MUNICIPIO[i]).setOptions({fillColor: "#008000",strokeColor: '#10357F'});

        }
        else {
            eval(MUNICIPIO[i]).setOptions({fillColor: "#000000",strokeColor: '#10357F'});
        }}
    }


    var M_MUN_0101 = new google.maps.Marker({ 
    position: {lat: 15.679590, lng: -86.775251}, 
    map: map, 
    icon: 'icon2.png',
    title: 'LA CEIBA'
    });

    var M_MUN_0102 = new google.maps.Marker({ 
    position: {lat: 15.669788, lng: -86.945127},   
    map: map, 
    icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
    title: 'EL PORVENIR'
    });

    var M_MUN_0103 = new google.maps.Marker({ 
    position: {lat: 15.696518, lng: -87.257055},   
    map: map, 
    icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
    title: 'ESPARTA'
    });

    var M_MUN_0104 = new google.maps.Marker({ 
    position: {lat: 15.683124,  lng: -86.544055},  
    map: map, 
    icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
    title: 'JUTIAPA'
    });

    var M_MUN_0105 = new google.maps.Marker({ 
    position: {lat: 15.595871, lng: -87.172132}, 
    map: map, 
    icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
    title: 'LA MASICA'
    });

    var M_MUN_0106 = new google.maps.Marker({ 
    position: {lat: 15.650039, lng: -87.056956}, 
    map: map, 
    icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
    title: 'SAN FRANCISCO'
    });

    var M_MUN_0107 = new google.maps.Marker({ 
    position: {lat: 15.679074, lng: -87.577646}, 
    map: map, 
    icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
    title: 'TELA'
    });

    var M_MUN_0108 = new google.maps.Marker({ 
    position: {lat: 15.646349, lng: -87.362070},
    map: map,
    icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
    title: 'ARIZONA'
    });

    var M_MUN_0201 = new google.maps.Marker({
        position: {lat: 15.820538, lng: -85.931883},
        map: map, 
        icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
        title: 'TRUJILLO'
    });

    var M_MUN_0202 = new google.maps.Marker({
        position: {lat: 15.768341, lng: -86.341124}, 
        map: map,
        icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
        title: 'BALFATE'
    });

    var M_MUN_0203 = new google.maps.Marker({
        position: {lat: 15.592491, lng: -85.254851},
        map: map, 
        icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
        title: 'IRIONA'
    });

    var M_MUN_0204 = new google.maps.Marker({
        position: {lat: 15.785521, lng: -85.519896}, 
        map: map, 
        icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
        title: 'LIMON'
    });
    
    var M_MUN_0205 = new google.maps.Marker({
        position: {lat: 15.865456, lng: -86.107664},
        map: map,
        icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
        title: 'SANTA FE'
    });

    var M_MUN_0206 = new google.maps.Marker({
        position: {lat: 15.898496, lng: -85.686402},  
        map: map, 
        icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
        title: 'SANTA ROSA DE AGUAN'
    });

    var M_MUN_0207 = new google.maps.Marker({
        position: {lat: 15.474732, lng: -86.176329}, 
        map: map, 
        icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
        title: 'SABA'
    });

    var M_MUN_0208 = new google.maps.Marker({
        position: {lat: 15.649361, lng: -86.271086},
        map: map, 
        icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
        title: 'SONAGUERA'
    });
    
    var M_MUN_0209 = new google.maps.Marker({
        position: {lat: 15.555450, lng: -85.968962},
        map: map, 
        icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
        title: 'TOCOA'
    });
    
    var M_MUN_0210 = new google.maps.Marker({
        position: {lat: 15.710182, lng: -85.734129},
        map: map, 
        icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
        title: 'BONITO ORIENTAL'
    });
    
    var M_MUN_0301 = new google.maps.Marker({
        position: {lat: 14.480731, lng: -87.648217},
        map: map, 
        icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
        title: 'COMAYAGUA'
    });

    var M_MUN_0302 = new google.maps.Marker({
        position: {lat: 14.392956, lng: -87.712762}, 
        map: map,
        icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
        title: 'AJUTERIQUE'
    });

    var M_MUN_0303 = new google.maps.Marker({
        position: {lat: 14.604023, lng: -87.712762}, 
        map: map, 
        icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
        title: 'EL ROSARIO'
    });

    var M_MUN_0304 = new google.maps.Marker({
        position: {lat: 14.645548, lng: -87.409265}, 
        map: map, 
        icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
        title: 'ESQUIAS'
    });

    var M_MUN_0305 = new google.maps.Marker({
        position: {lat: 14.202082, lng: -87.712196}, 
        map: map, 
        icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
        title: 'HUMUYA'
    });

    var M_MUN_0306 = new google.maps.Marker({
        position: {lat: 14.751816, lng: -87.565820}, 
        map: map, 
        icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
        title: 'LA LIBERTAD'
    });

    var M_MUN_0307 = new google.maps.Marker({
        position: {lat: 14.153378, lng: -87.627896}, 
        map: map, 
        icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
        title: 'LAMANI'
    });

    var M_MUN_0308 = new google.maps.Marker({
        position: {lat: 14.708983, lng: -87.693536}, 
        map: map, 
        icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
        title: 'LA TRINIDAD'
    });

    var M_MUN_0309 = new google.maps.Marker({
        position: {lat: 14.354993, lng: -87.701903}, 
        map: map, 
        icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
        title: 'LEJAMANI'
    });

    var M_MUN_0310 = new google.maps.Marker({
        position: {lat: 14.815220, lng: -87.780053},  
        map: map,
        icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
        title: 'MEAMBAR'
    });

    var M_MUN_0311 = new google.maps.Marker({
        position: {lat: 14.856373, lng:  -87.476556},
        map: map, 
        icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
        title: 'MINAS DE ORO'
    });

    var M_MUN_0312 = new google.maps.Marker({
        position: {lat: 14.779039, lng: -87.653024}, 
        map: map,
        icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
        title: 'OJO DE AGUA'
    });

    var M_MUN_0313 = new google.maps.Marker({
        position: {lat: 14.637908, lng: -87.569940}, 
        map: map, 
        icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
        title: 'SAN JERONIMO'
    });

    var M_MUN_0314 = new google.maps.Marker({
        position: {lat: 14.687729, lng: -88.043725}, 
        map: map, 
        icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
        title: 'SAN JOSE DE COMAYAGUA'
    });

    var M_MUN_0315 = new google.maps.Marker({
        position: {lat: 14.812565, lng: -87.336480}, 
        map: map, 
        icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
        title: 'SAN JOSE DEL POTRERO'
    });

    var M_MUN_0316 = new google.maps.Marker({
        position: {lat: 14.750488, lng: -87.462823},  
        map: map, 
        icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
        title: 'SAN LUIS'
    });

    var M_MUN_0317 = new google.maps.Marker({
        position: {lat: 14.194245, lng: -87.771090},  
        map: map, 
        icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
        title: 'SAN SEBASTIAN'
    });

    var M_MUN_0318 = new google.maps.Marker({
        position: {lat: 14.613325, lng: -87.837731}, 
        map: map, 
        icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
        title: 'SIGUATEPEQUE'
    });

    var M_MUN_0319 = new google.maps.Marker({
        position: {lat: 14.301154, lng: -87.543847},
        map: map, 
        icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
        title: 'VILLA DE SAN ANTONIO'
    });

    var M_MUN_0320 = new google.maps.Marker({
        position: {lat: 14.874955, lng: -87.633111},
        map: map, 
        icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
        title: 'LAS LAJAS'
    });

    var M_MUN_0321 = new google.maps.Marker({
        position: {lat: 14.721996, lng: -87.956019},   
        map: map, 
        icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
        title: 'TAULABE'
    });

    var M_MUN_0401 = new google.maps.Marker({
        position: {lat: 14.778347, lng: -88.778533}, 
        map: map, 
        icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
        title: 'SANTA ROSA DE COPAN'
    });

    var M_MUN_0402 = new google.maps.Marker({
        position: {lat: 14.767642, lng: -89.068303}, 
        map: map, 
        icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
        title: 'CABANAS'
    });

    var M_MUN_0403 = new google.maps.Marker({
        position: {lat: 14.878578, lng: -88.900069 },  
        map: map, 
        icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
        title: 'CONCEPCION'
    });

    var M_MUN_0404 = new google.maps.Marker({
        position: {lat: 14.926152, lng: -89.146163},  
        map: map, 
        icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
        title: 'COPAN RUINAS'
    });

    var M_MUN_0405 = new google.maps.Marker({
        position: {lat: 14.533955, lng: -88.842358}, 
        map: map, 
        icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
        title: 'CORQUIN'
    });

    var M_MUN_0406 = new google.maps.Marker({
        position: {lat: 14.669631, lng: -88.848194}, 
        map: map, 
        icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
        title: 'CUCUYAGUA'
    });


    var M_MUN_0407 = new google.maps.Marker({
        position: {lat: 14.908439, lng: -88.854407},  
        map: map, 
        icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
        title: 'DOLORES'
    });

    var M_MUN_0408 = new google.maps.Marker({
        position: {lat: 14.857009, lng: -88.846854 },  
        map: map, 
        icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
        title: 'DULCE NOMBRE'
    });

    var M_MUN_0409 = new google.maps.Marker({
        position: {lat: 15.032129, lng: -88.994885},    
        map: map, 
        icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
        title: 'EL PARAISO'
    });

    var M_MUN_0410 = new google.maps.Marker({
        position: {lat: 15.160348, lng: -88.813582}, 
        map: map, 
        icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
        title: 'FLORIDA'
    });

    var M_MUN_0411 = new google.maps.Marker({
        position: {lat: 15.114923, lng: -88.741985},  
        map: map, 
        icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
        title: 'LA JIGUA'
    });

    var M_MUN_0412 = new google.maps.Marker({
        position: {lat: 14.683248, lng: -88.943295},  
        map: map, 
        icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
        title: 'LA UNION'
    });

    var M_MUN_0413 = new google.maps.Marker({
        position: {lat: 15.055828, lng: -88.692328},  
        map: map, 
        icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
        title: 'NUEVA ARCADIA'
    });

    var M_MUN_0414 = new google.maps.Marker({
        position: {lat: 14.815358, lng: -88.928565},   
        map: map, 
        icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
        title: 'SAN AGUSTIN'
    });

    var M_MUN_0415 = new google.maps.Marker({
        position: {lat: 15.033523, lng: -88.886334},  
        map: map, 
        icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
        title: 'SAN ANTONIO'
    });

    var M_MUN_0416 = new google.maps.Marker({
        position: {lat: 14.940936, lng: -88.899037}, 
        map: map, 
        icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
        title: 'SAN JERONIMO'
    });

    var M_MUN_0417 = new google.maps.Marker({
        position: {lat: 14.895743, lng: -88.713115},
        map: map, 
        icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
        title: 'SAN JOSE'
    });

    var M_MUN_0418 = new google.maps.Marker({
        position: {lat: 14.786978, lng: -88.694762},    
        map: map, 
        icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
        title: 'SAN JUAN DE OPOA'
    });

    var M_MUN_0419 = new google.maps.Marker({
        position: {lat: 14.978589, lng: -88.730437},   
        map: map, 
        icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
        title: 'SAN NICOLAS'
    });

    var M_MUN_0420 = new google.maps.Marker({
        position: {lat: 14.596217, lng: -88.805622},  
        map: map, 
        icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
        title: 'SAN PEDRO'
    });

    var M_MUN_0421 = new google.maps.Marker({
        position: {lat: 14.884025, lng: -89.026064},  
        map: map, 
        icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
        title: 'SANTA RITA'
    });

    var M_MUN_0422 = new google.maps.Marker({
        position: {lat: 14.930615, lng: -88.781248},  
        map: map, 
        icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
        title: 'TRINIDAD DE COPAN'
    });

    var M_MUN_0423 = new google.maps.Marker({
        position: {lat: 14.867446, lng: -88.777050}, 
        map: map, 
        icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
        title: 'VERACRUZ'
    });

    var M_MUN_0501 = new google.maps.Marker({
        position: {lat: 15.513218, lng: -88.111788}, 
        map: map, 
        icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
        title: 'SAN PEDRO SULA'
    });

    var M_MUN_0502 = new google.maps.Marker({
        position: {lat: 15.636692, lng: -87.946708}, 
        map: map, 
        icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
        title: 'CHOLOMA'
    });

    var M_MUN_0503 = new google.maps.Marker({
        position: {lat: 15.653991, lng: -88.121499}, 
        map: map, 
        icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
        title: 'OMOA'
    });
    
    var M_MUN_0504 = new google.maps.Marker({
        position: {lat: 15.258130, lng: -87.969603},  
        map: map, 
        icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
        title: 'PIMIENTA'
    });

    var M_MUN_0505 = new google.maps.Marker({
        position: {lat: 15.181639, lng: -87.953779},
        map: map, icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
        title: 'POTRERILLOS'
    });

    var M_MUN_0506 = new google.maps.Marker({
        position: {lat: 15.820337, lng: -87.848817},
        map: map, icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
        title: 'PUERTO CORTES'
    });

    var M_MUN_0507 = new google.maps.Marker({
        position: {lat: 15.113855, lng: -88.018287}, 
        map: map, icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
        title: 'SAN ANTONIO DE CORTES'
    });

    var M_MUN_0508 = new google.maps.Marker({
        position: {lat: 14.999518, lng: -87.983175},  
        map: map, icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
        title: 'SAN FRANCISCO DE YOJOA'
    });

    var M_MUN_0509 = new google.maps.Marker({
        position: {lat: 15.354601, lng: -87.894831},  
        map: map, icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
        title: 'SAN MANUEL'
    });

    var M_MUN_0510 = new google.maps.Marker({
        position: {lat: 14.989932, lng: -87.868032},    
        map: map, icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
        title: 'SANTA CRUZ DE YOJOA'
    });

    var M_MUN_0511 = new google.maps.Marker({
        position: {lat: 15.324898, lng: -88.034611},       
        map: map, icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
        title: 'VILLANUEVA'
    });

    var M_MUN_0512 = new google.maps.Marker({
        position: {lat: 15.470683, lng: -87.862786}, 
        map: map, icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
        title: 'LA LIMA'
    });

    var M_MUN_0601 = new google.maps.Marker({
        position: {lat: 13.291933, lng: -87.196854},   
        map: map, icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
        title: 'CHOLUTECA'
    });

    var M_MUN_0602 = new google.maps.Marker({
        position: {lat: 13.425546, lng: -87.016953},    
        map: map, icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
        title: 'APACILAGUA'
    });

    var M_MUN_0603 = new google.maps.Marker({
        position: {lat: 13.199190, lng: -86.956078},   
        map: map, icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
        title: 'CONCEPCION DE MARIA'
    });

    var M_MUN_0604 = new google.maps.Marker({
        position: {lat: 13.620962, lng: -86.801748 },  
        map: map, icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
        title: 'DUYURE'
    });

    var M_MUN_0605 = new google.maps.Marker({
        position: {lat: 13.302517, lng: -87.005072},   
        map: map, icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
        title: 'EL CORPUS'
    });

    var M_MUN_0606 = new google.maps.Marker({
        position: {lat: 13.072754, lng: -87.014871},     
        map: map, icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
        title: 'EL TRIUNFO'
    });

    var M_MUN_0607 = new google.maps.Marker({
        position: {lat: 13.237710, lng: -87.382796},       
        map: map, icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
        title: 'MARCOVIA'
    });

    var M_MUN_0608 = new google.maps.Marker({
        position: {lat: 13.551637, lng: -86.893506 },      
        map: map, icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
        title: 'MOROLICA'
    });

    var M_MUN_0609 = new google.maps.Marker({
        position: {lat: 13.155466, lng: -87.131085},    
        map: map, icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
        title: 'NAMASIGUE'
    });

    var M_MUN_0610 = new google.maps.Marker({
        position: {lat: 13.492220, lng: -87.140698},     
        map: map, icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
        title: 'OROCUINA'
    });

    var M_MUN_0611 = new google.maps.Marker({
        position: {lat: 13.547700, lng: -87.296141},      
        map: map, icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
        title: 'PESPIRE'
    });

    var M_MUN_0612 = new google.maps.Marker({
        position: {lat: 13.642857, lng: -87.339362},         
        map: map, icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
        title: 'SAN ANTONIO DE FLORES'
    });

    var M_MUN_0613 = new google.maps.Marker({
        position: {lat: 13.642857, lng: -87.263144},       
        map: map, icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
        title: 'SAN ISIDRO'
    });

    var M_MUN_0614 = new google.maps.Marker({
        position: {lat: 13.713911, lng: -87.426222},        
        map: map, icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
        title: 'SAN JOSE'
    });

    var M_MUN_0615 = new google.maps.Marker({
        position: {lat: 13.396606, lng: -86.816436},      
        map: map, icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
        title: 'SAN MARCOS DE COLON'
    });
 
    var M_MUN_0616 = new google.maps.Marker({
        position: {lat: 13.308430, lng: -87.089716},       
        map: map, icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
        title: 'SANTA ANA DE YUSGUARE'
    });

    var M_MUN_0701 = new google.maps.Marker({ 
    position: {lat: 13.9463, lng: -86.8181},
    map: map, icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
    title: 'YUSCARAN'
    });

    var M_MUN_0702 = new google.maps.Marker({ 
    position: {lat: 13.824120, lng: -86.701375},   
    map: map, icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
    title: 'ALAUCA'
    });

    var M_MUN_0703 = new google.maps.Marker({ 
    position: {lat: 14.093084, lng: -86.358051},  
    map: map, icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
    title: 'DANLI'
    });

    var M_MUN_0704 = new google.maps.Marker({ 
    position: {lat: 13.847437, lng: -86.526263},  
    map: map, icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
    title: 'EL PARAISO'
    });

    var M_MUN_0705 = new google.maps.Marker({ 
    position: {lat: 13.870789, lng: -86.938955},  
    map: map, icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
    title: 'GUINOPE'
    });

    var M_MUN_0706 = new google.maps.Marker({ 
    position: {lat: 14.0142, lng: -86.6767},
    map: map, icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
    title: 'JACALEAPA'
    });

    var M_MUN_0707 = new google.maps.Marker({ 
    position: {lat: 13.541908, lng: -87.066381},   
    map: map, icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
    title: 'LIURE'
    });

    var M_MUN_0708 = new google.maps.Marker({ 
    position: {lat: 14.137283, lng: -86.860677},  
    map: map, icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
    title: 'MOROCELI'
    });

    var M_MUN_0709 = new google.maps.Marker({ 
    position: {lat: 13.794781, lng: -86.826345 },   
    map: map, icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
    title: 'OROPOLI'
    });

    var M_MUN_0710 = new google.maps.Marker({ 
    position: {lat: 14.029390, lng: -86.756307},   
    map: map, icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
    title: 'POTRERILLOS'
    });

    var M_MUN_0711 = new google.maps.Marker({ 
    position: {lat: 13.709803, lng: -86.829248},   
    map: map, icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
    title: 'SAN ANTONIO DE FLORES'
    });

    var M_MUN_0712 = new google.maps.Marker({ 
    position: {lat: 13.735818, lng: -86.957651},  
    map: map, icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
    title: 'SAN LUCAS'
    });

    var M_MUN_0713 = new google.maps.Marker({ 
    position: {lat: 13.937441, lng: -86.654683},   
    map: map, icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
    title: 'SAN MATIAS'
    });

    var M_MUN_0714 = new google.maps.Marker({ 
    position: {lat: 13.611665, lng: -87.140458},   
    map: map, icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
    title: 'SOLEDAD'
    });

    var M_MUN_0715 = new google.maps.Marker({ 
    position: {lat: 14.279730, lng: -86.697255},   
    map: map, icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
    title: 'TEUPASENTI'
    });

    var M_MUN_0716 = new google.maps.Marker({ 
    position: {lat: 13.6563, lng: -87.0176},
    map: map, icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
    title: 'TEXIGUAT'
    });

    var M_MUN_0717 = new google.maps.Marker({ 
    position: {lat: 13.622343, lng: -86.964677},  
    map: map, icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
    title: 'VADO ANCHO'
    });

    var M_MUN_0718 = new google.maps.Marker({ 
    position: {lat: 13.738760, lng: -87.084523},  
    map: map, icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
    title: 'YAUYUPE'
    });

    var M_MUN_0719 = new google.maps.Marker({ 
    position: {lat: 14.039749, lng: -85.864795},   
    map: map, icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
    title: 'TROJES'
    });

    var M_MUN_0801 = new google.maps.Marker({
        position: {lat: 14.147822, lng: -87.236800}, 
        map: map, icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
        title: 'DISTRITO CENTRAL'
    });

    var M_MUN_0802 = new google.maps.Marker({
        position: {lat: 13.775071, lng: -87.482569}, 
        map: map, icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
        title: 'ALUBAREN'
    });

    var M_MUN_0803 = new google.maps.Marker({
        position: {lat: 14.516383, lng: -87.199722 }, 
        map: map, icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
        title: 'CEDROS'
    });

    var M_MUN_0804 = new google.maps.Marker({
        position: {lat: 13.814965, lng: -87.579681},  
        map: map, icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
        title: 'CURAREN'
    });

    var M_MUN_0805 = new google.maps.Marker({
        position: {lat: 14.731957, lng: -87.218698 }, 
        map: map, icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
        title: 'EL PORVENIR'
    });

    var M_MUN_0806 = new google.maps.Marker({
        position: {lat: 14.523695, lng: -86.890731}, 
        map: map, icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
        title: 'GUAIMACA'
    });

    var M_MUN_0807 = new google.maps.Marker({
        position: {lat: 13.698872, lng: -87.496536}, 
        map: map, icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
        title: 'LA LIBERTAD'
    });

    var M_MUN_0808 = new google.maps.Marker({
        position: {lat: 13.724034, lng: -87.334178},   
        map: map, icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
        title: 'LA VENTA'
    });

    var M_MUN_0809 = new google.maps.Marker({
        position: {lat: 14.035937, lng: -87.504592},   
        map: map, icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
        title: 'LEPATERIQUE'
    });


    var M_MUN_0810 = new google.maps.Marker({
        position: {lat: 13.865902, lng: -87.060491},  
        map: map, icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
        title: 'MARAITA'
    });

    var M_MUN_0811 = new google.maps.Marker({
        position: {lat: 14.910380, lng: -87.122348},  
        map: map, icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
        title: 'MARALE'
    });

    var M_MUN_0812 = new google.maps.Marker({
        position: {lat: 13.767781, lng: -87.166155},  
        map: map, icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
        title: 'NUEVA ARMENIA'
    });

    var M_MUN_0813 = new google.maps.Marker({
        position: {lat: 13.930662, lng: -87.324691},  
        map: map, icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
        title: 'OJOJONA'
    });

    var M_MUN_0814 = new google.maps.Marker({
        position: {lat: 14.741433, lng: -86.950865 }, 
        map: map, icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
        title: 'ORICA'
    });

    var M_MUN_0815 = new google.maps.Marker({
        position: {lat: 13.853008, lng: -87.435222},   
        map: map, icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
        title: 'REITOCA'
    });

    var M_MUN_0816 = new google.maps.Marker({
        position: {lat: 13.780118, lng: -87.257961},   
        map: map, icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
        title: 'SABANAGRANDE'
    });

    var M_MUN_0817 = new google.maps.Marker({
        position: {lat: 14.017207, lng: -86.991203}, 
        map: map, icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
        title: 'SAN ANTONIO DE ORIENTE'
    });

    var M_MUN_0818 = new google.maps.Marker({
        position: {lat: 13.884400, lng: -87.193292}, 
        map: map, icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
        title: 'SAN BUENAVENTURA'
    });

    var M_MUN_0819 = new google.maps.Marker({
        position: {lat: 14.736695, lng: -87.070900 }, 
        map: map, icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
        title: 'SAN IGNACIO'
    });

    var M_MUN_0820 = new google.maps.Marker({
        position: {lat: 14.279615, lng: -86.979995},  
        map: map, icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
        title: 'SAN JUAN DE FLORES'
    });

    var M_MUN_0821 = new google.maps.Marker({
        position: {lat: 13.746550, lng: -87.491917}, 
        map: map, icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
        title: 'SAN MIGUELITO'
    });

    var M_MUN_0822 = new google.maps.Marker({
        position: {lat: 13.923634, lng: -87.244681}, 
        map: map, icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
        title: 'SANTA ANA'
    });

    var M_MUN_0823 = new google.maps.Marker({
        position: {lat: 14.120522, lng: -87.102905},
        map: map, icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
        title: 'SANTA LUCIA'
    });

    var M_MUN_0824 = new google.maps.Marker({
        position: {lat: 14.394705, lng: -87.084365}, 
        map: map, icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
        title: 'TALANGA'
    });

    var M_MUN_0825 = new google.maps.Marker({
        position: {lat: 13.964541, lng: -87.076081}, 
        map: map, icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
        title: 'TATUMBA'
    });

    var M_MUN_0826 = new google.maps.Marker({
        position: {lat: 14.135837, lng: -87.034240},
        map: map, icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
        title: 'VALLE DE ANGELES'
    });

    var M_MUN_0827 = new google.maps.Marker({
        position: {lat: 14.189764, lng: -86.959396}, 
        map: map, icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
        title: 'VILLA DE SAN FRANCISCO'
    });

    var M_MUN_0828 = new google.maps.Marker({
        position: {lat: 14.532857, lng: -87.399975 }, 
        map: map, icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
        title: 'VALLECILLO'
    });

    var M_MUN_0901 = new google.maps.Marker({
        position: {lat: 15.114686, lng: -84.031070},   
        map: map, icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
        title: 'PUERTO LEMPIRA'
    });

    var M_MUN_0902 = new google.maps.Marker({
        position: {lat: 15.498812, lng: -84.676517},    
        map: map, icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
        title: 'BRUS LAGUNA'
    });

    var M_MUN_0903 = new google.maps.Marker({
        position: {lat: 15.390269, lng: -84.316714},     
        map: map, icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
        title: 'AHUAS'
    });

    var M_MUN_0904 = new google.maps.Marker({
        position: {lat: 15.750096, lng: -84.915469},     
        map: map, icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
        title: 'JUAN FRANCISCO BULNES'
    });

    var M_MUN_0905 = new google.maps.Marker({
        position: {lat: 15.085517, lng: -83.374637},      
        map: map, icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
        title: 'RAMON VILLEDA MORALES'
    });

    var M_MUN_0906 = new google.maps.Marker({
        position: {lat: 15.088169, lng: -84.563907},      
        map: map, icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
        title: 'WAMPUSIRPI'
    });


    var M_MUN_1001 = new google.maps.Marker({ 
    position: {lat: 14.248212, lng: -88.142353},      
    map: map, icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
    title: 'LA ESPERANZA'
    });


    var M_MUN_1002 = new google.maps.Marker({ 
    position: {lat: 13.985917, lng: -88.394213}, 
    map: map, icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
    title: 'CAMASCA'
    });

    var M_MUN_1003 = new google.maps.Marker({ 
    position: {lat: 13.9666, lng: -88.2733},
    map: map, icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
    title: 'COLOMONCAGUA'
    });

    var M_MUN_1004 = new google.maps.Marker({ 
    position: {lat: 14.023605, lng: -88.320413},   
    map: map, icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
    title: 'CONCEPCION'
    });

    var M_MUN_1005 = new google.maps.Marker({ 
    position: {lat: 14.239218, lng: -88.354734},    
    map: map, icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
    title: 'DOLORES'
    });

    var M_MUN_1006 = new google.maps.Marker({ 
    position: {lat: 14.400069, lng: -88.156321},   
    map: map, icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
    title: 'INTIBUCA'
    });

    var M_MUN_1007 = new google.maps.Marker({ 
    position: {lat: 14.521094, lng: -88.006804},    
    map: map, icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
    title: 'JESUS DE OTORO'
    });

    var M_MUN_1008 = new google.maps.Marker({ 
    position: {lat: 13.925647, lng: -88.370886},  
    map: map, icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
    title: 'MAGDALENA'
    });

    var M_MUN_1009 = new google.maps.Marker({ 
    position: {lat: 14.360055, lng: -87.991074},  
    map: map, icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
    title: 'MASAGUARA'
    });

    var M_MUN_1010 = new google.maps.Marker({ 
    position: {lat: 13.918361, lng: -88.466734},    
    map: map, icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
    title: 'SAN ANTONIO'
    });

    var M_MUN_1011 = new google.maps.Marker({ 
    position: {lat: 14.551184, lng: -88.111999},   
    map: map, icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
    title: 'SAN ISIDRO'
    });

    var M_MUN_1012 = new google.maps.Marker({ 
    position: {lat: 14.4036, lng: -88.391},
    map: map, icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
    title: 'SAN JUAN'
    });

    var M_MUN_1013 = new google.maps.Marker({ 
    position: {lat: 14.1113, lng: -88.2384},
    map: map, icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
    title: 'SAN MARCOS DE LA SIERRA'
    });

    var M_MUN_1014 = new google.maps.Marker({ 
    position: {lat: 14.325245, lng: -88.340657},   
    map: map, icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
    title: 'SAN MIGUELITO'
    });

    var M_MUN_1015 = new google.maps.Marker({ 
    position: {lat: 13.894261, lng: -88.410149},    
    map: map, icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
    title: 'SANTA LUCIA'
    });


    var M_MUN_1016 = new google.maps.Marker({ 
    position: {lat: 14.275568, lng: -88.242159},   
    map: map, icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
    title: 'YAMARANGUILA'
    });

    var M_MUN_1017 = new google.maps.Marker({ 
    position: {lat: 14.510037, lng: -88.288880},    
    map: map, icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
    title: 'SAN FRANCISCO DE OPALACA'
    });


    var M_MUN_1101 = new google.maps.Marker({
        position: {lat: 16.330093, lng: -86.526110},        
        map: map, icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
        title: 'ROATAN'
    });

    var M_MUN_1102 = new google.maps.Marker({
        position: {lat: 16.473462, lng: -85.875232},       
        map: map, icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
        title: 'GUANAJA'
    });

    var M_MUN_1103 = new google.maps.Marker({
        position: {lat: 16.410898, lng: -86.329791},        
        map: map, icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
        title: 'JOSE SANTOS GUARDIOLA'
    });

    var M_MUN_1104 = new google.maps.Marker({
        position: {lat: 16.096989, lng: -86.937681},        
        map: map, icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
        title: 'UTILA'
    });


    var M_MUN_1201 = new google.maps.Marker({ 
    position: {lat: 14.302863, lng: -87.752565},  
    map: map, icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
    title: 'LA PAZ'
    });

    var M_MUN_1202 = new google.maps.Marker({ 
    position: {lat: 13.957955, lng: -87.663866},   
    map: map, icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
    title: 'AGUAQUETERIQUE'
    });

 
    var M_MUN_1203 = new google.maps.Marker({ 
    position: {lat: 13.990714, lng: -88.024853},   
    map: map, icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
    title: 'CABANAS'
    });

    var M_MUN_1204 = new google.maps.Marker({ 
    position: {lat: 14.269790, lng: -87.679797},     
    map: map, icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
    title: 'CANE'
    });

    var M_MUN_1205 = new google.maps.Marker({ 
    position: {lat: 14.156179, lng: -87.947586},      
    map: map, icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
    title: 'CHINACLA'
    });

    var M_MUN_1206 = new google.maps.Marker({ 
    position: {lat: 14.074255, lng: -87.791876},  
    map: map, icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
    title: 'GUAJIQUIRO'
    });

    var M_MUN_1207 = new google.maps.Marker({ 
    position: {lat: 13.848373, lng: -87.659579},    
    map: map, icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png', 
    title: 'LAUTERIQUE'
    });

    var M_MUN_1208 = new google.maps.Marker({ 
    position: {lat: 14.1605, lng: -88.0311},
    map: map, icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
    title: 'MARCALA'
    });

    var M_MUN_1209 = new google.maps.Marker({ 
    position: {lat: 13.916996, lng: -87.782936},
    map: map, icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
    title: 'MERCEDES DE ORIENTE'
    });


    var M_MUN_1210 = new google.maps.Marker({ 
    position: {lat: 14.019617, lng: -87.873445},  
    map: map, icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
    title: 'OPATORO'
    });

    var M_MUN_1211 = new google.maps.Marker({ 
    position: {lat: 13.8775, lng: -87.705},
    map: map, icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
    title: 'SAN ANTONIO DEL NORTE'
    });

    var M_MUN_1212 = new google.maps.Marker({ 
    position: {lat: 14.209825, lng: -87.947794},   
    map: map, icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
    title: 'SAN JOSE'
    });

    var M_MUN_1213 = new google.maps.Marker({ 
    position: {lat: 13.941313, lng: -87.740827},  
    map: map, icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
    title: 'SAN JUAN'
    });

    var M_MUN_1214 = new google.maps.Marker({ 
    position: {lat: 14.235523, lng: -87.847291},   
    map: map, icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
    title: 'SAN PEDRO DE TUTULE'
    });

    var M_MUN_1215 = new google.maps.Marker({ 
    position: {lat: 14.001477, lng: -87.947176},  
    map: map, icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
    title: 'SANTA ANA'
    });

    var M_MUN_1216 = new google.maps.Marker({ 
    position: {lat: 14.043547, lng: -88.158368},   
    map: map, icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
    title: 'SANTA ELENA'
    });

    var M_MUN_1217 = new google.maps.Marker({ 
    position: {lat: 14.262817, lng: -87.915750},  
    map: map, icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
    title: 'SANTA MARIA'
    });


    var M_MUN_1218 = new google.maps.Marker({ 
    position: {lat: 14.348673, lng: -87.866746 },   
    map: map, icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
    title: 'SANTIAGO DE PURINGLA'
    });

    var M_MUN_1219 = new google.maps.Marker({ 
    position: {lat: 14.103431, lng: -88.085134},  
    map: map, icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
    title: 'YARULA'
    });

    var M_MUN_1301 = new google.maps.Marker({ 
    position: {lat: 14.5846, lng: -88.5838},
    map: map, icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
    title: 'GRACIAS'
    });

    var M_MUN_1302 = new google.maps.Marker({ 
    position: {lat: 14.489181, lng: -88.425314},  
    map: map, icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
    title: 'BELEN'
    });

    var M_MUN_1303 = new google.maps.Marker({ 
    position: {lat: 14.039931, lng: -88.560476 },       
    map: map, icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
    title: 'CANDELARIA'
    });

    var M_MUN_1304 = new google.maps.Marker({ 
    position: {lat: 14.297958, lng: -88.871669},   
    map: map, icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
    title: 'COLOLACA'
    });

    var M_MUN_1305 = new google.maps.Marker({ 
    position: {lat: 14.2332, lng: -88.4643},
    map: map, icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
    title: 'ERANDIQUE'
    });

    var M_MUN_1306 = new google.maps.Marker({ 
    position: {lat: 14.109245, lng: -88.560619},
    map: map, icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
    title: 'GUALCINCE'
    });

    var M_MUN_1307 = new google.maps.Marker({ 
    position: {lat: 14.217101, lng: -88.852443},    
    map: map, icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
    title: 'GUARITA'
    });


    var M_MUN_1308 = new google.maps.Marker({ 
    position: {lat: 14.446101, lng: -88.548079},   
    map: map, icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
    title: 'LA CAMPA'
    });


    var M_MUN_1309 = new google.maps.Marker({ 
    position: {lat: 14.6021, lng: -88.454},
    map: map, icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
    title: 'LA IGUALA'
    });

    var M_MUN_1310 = new google.maps.Marker({ 
    position: {lat: 14.669948, lng: -88.642454},   
    map: map, icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
    title: 'LAS FLORES'
    });

    var M_MUN_1311 = new google.maps.Marker({ 
    position: {lat: 14.782313, lng: -88.412214},    
    map: map, icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
    title: 'LA UNION'
    });

    var M_MUN_1312 = new google.maps.Marker({ 
    position: {lat: 14.0554, lng: -88.6902},
    map: map, icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
    title: 'LA VIRTUD'
    });

    var M_MUN_1313 = new google.maps.Marker({ 
    position: {lat: 14.7753, lng: -88.5921},
    map: map, icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
    title: 'LEPAERA'
    });

    var M_MUN_1314 = new google.maps.Marker({ 
    position: {lat: 14.0309, lng: -88.6135},
    map: map, icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
    title: 'MAPULACA'
    });

    var M_MUN_1315 = new google.maps.Marker({ 
    position: {lat: 14.0519, lng: -88.4587},
    map: map, icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
    title: 'PIRAERA'
    });

    var M_MUN_1316 = new google.maps.Marker({ 
    position: {lat: 14.223757, lng: -88.596324},  
    map: map, icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
    title: 'SAN ANDRES'
    });

    var M_MUN_1317 = new google.maps.Marker({ 
    position: {lat: 14.112908, lng: -88.369044},   
    map: map, icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
    title: 'SAN FRANCISCO'
    });

    var M_MUN_1318 = new google.maps.Marker({ 
    position: {lat: 14.134040, lng: -88.772466},    
    map: map, icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
    title: 'SAN JUAN GUARITA'
    });

    var M_MUN_1319 = new google.maps.Marker({ 
    position: {lat: 14.435, lng: -88.676},
    map: map, icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
    title: 'SAN MANUEL DE COLOHETE'
    });

    var M_MUN_1320 = new google.maps.Marker({ 
    position: {lat: 14.683932, lng: -88.369976},   
    map: map, icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
    title: 'SAN RAFAEL'
    });

    var M_MUN_1321 = new google.maps.Marker({ 
    position: {lat: 14.351182, lng: -88.750133}, 
    map: map, icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
    title: 'SAN SEBASTIAN'
    });

    var M_MUN_1322 = new google.maps.Marker({ 
    position: {lat: 14.344862, lng: -88.522166}, 
    map: map, icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
    title: 'SANTA CRUZ'
    });

    var M_MUN_1323 = new google.maps.Marker({ 
    position: {lat: 14.663448, lng: -88.725519},  
    map: map, icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
    title: 'TALGUA'
    });

    var M_MUN_1324 = new google.maps.Marker({ 
    position: {lat: 14.187099, lng: -88.732714},
    map: map, icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
    title: 'TAMBLA'
    });

    var M_MUN_1325 = new google.maps.Marker({ 
    position: {lat: 14.231031, lng: -88.730655},   
    map: map, icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
    title: 'TOMALA'
    });

    
    var M_MUN_1326 = new google.maps.Marker({ 
    position: {lat: 14.135834, lng: -88.703298},  
    map: map, icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
    title: 'VALLADOLID'
    });

    var M_MUN_1327 = new google.maps.Marker({ 
    position: {lat: 13.998174, lng: -88.561831},  
    map: map, icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
    title: 'VIRGINIA'
    });

    var M_MUN_1328 = new google.maps.Marker({ 
    position: {lat: 14.374463, lng: -88.586711},     
    map: map, icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
    title: 'SAN MARCOS DE CAIQUIN'
    });

    var M_MUN_1401 = new google.maps.Marker({ 
    position: {lat: 14.414505, lng: -89.225641},      
    map: map, icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
    title: 'OCOTEPEQUE'
    });

    var M_MUN_1402 = new google.maps.Marker({ 
    position: {lat: 14.470557, lng: -88.783076},    
    map: map, icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
    title: 'BELEN GUALCHO'
    });

    var M_MUN_1403 = new google.maps.Marker({ 
    position: {lat: 14.5184, lng: -89.2008},
    map: map, icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
    title: 'CONCEPCION'
    });

    var M_MUN_1404 = new google.maps.Marker({ 
    position: {lat: 14.5461, lng: -89.1325},
    map: map, icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
    title: 'DOLORES MERENDON'
    });

    var M_MUN_1405 = new google.maps.Marker({ 
    position: {lat: 14.575748, lng: -89.072499},  
    map: map, icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
    title: 'FRATERNIDAD'
    });

    var M_MUN_1406 = new google.maps.Marker({ 
    position: {lat: 14.651207, lng: -89.038816},   
    map: map, icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
    title: 'LA ENCARNACION'
    });

    var M_MUN_1407 = new google.maps.Marker({ 
    position: {lat: 14.479465, lng: -89.030821},  
    map: map, icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
    title: 'LA LABOR'
    });

    var M_MUN_1408 = new google.maps.Marker({ 
    position: {lat: 14.588633, lng: -88.963029},   
    map: map, icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
    title: 'LUCERNA'
    });

    var M_MUN_1409 = new google.maps.Marker({ 
    position: {lat: 14.296560, lng: -88.993743},  
    map: map, icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
    title: 'MERCEDES'
    });

    var M_MUN_1410 = new google.maps.Marker({ 
    position: {lat: 14.678147, lng: -89.087600},  
    map: map, icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
    title: 'SAN FERNANDO'
    });

    var M_MUN_1411 = new google.maps.Marker({ 
    position: {lat: 14.413637, lng: -88.986876},   
    map: map, icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
    title: 'SAN FRANCISCO DEL VALLE'
    });


    var M_MUN_1412 = new google.maps.Marker({ 
    position: {lat: 14.616747, lng: -89.131062},   
    map: map, icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
    title: 'SAN JORGE'
    });

    var M_MUN_1413 = new google.maps.Marker({ 
    position: {lat: 14.377722, lng: -88.909972},  
    map: map, icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
    title: 'SAN MARCOS'
    });

    var M_MUN_1414 = new google.maps.Marker({ 
    position: {lat: 14.483837, lng: -89.262883},   
    map: map, icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
    title: 'SANTA FE'
    });

    var M_MUN_1415 = new google.maps.Marker({ 
    position: {lat: 14.477471, lng: -88.918212},   
    map: map, icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
    title: 'SENSENTI'
    });

    var M_MUN_1416 = new google.maps.Marker({ 
    position: {lat: 14.446144, lng: -89.110416},  
    map: map, icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
    title: 'SINUAPA'
    });

    var M_MUN_1501 = new google.maps.Marker({ 
    position: {lat: 14.519751, lng: -86.302241}, 
    map: map, icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
    title: 'JUTICALPA'
    });

    var M_MUN_1502 = new google.maps.Marker({ 
    position: {lat: 14.455929, lng: -86.648311},  
    map: map, icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
    title: 'CAMPAMENTO'
    });

    var M_MUN_1503 = new google.maps.Marker({ 
    position: {lat: 14.628738, lng: -85.563411},  
    map: map, icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
    title: 'CATACAMAS'
    });

    var M_MUN_1504 = new google.maps.Marker({ 
    position: {lat: 14.652654, lng: -86.716975},   
    map: map, icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
    title: 'CONCORDIA'
    });

    var M_MUN_1505 = new google.maps.Marker({ 
    position: {lat: 15.077399, lng: -85.269527},  
    map: map, icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
    title: 'DULCE NOMBRE DE CULMI'
    });

    var M_MUN_1506 = new google.maps.Marker({ 
    position: {lat: 14.883713, lng: -86.705989},  
    map: map, icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
    title: 'EL ROSARIO'
    });

    var M_MUN_1507 = new google.maps.Marker({ 
    position: {lat: 15.265610, lng: -86.585139},  
    map: map, icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
    title: 'ESQUIPULAS DEL NORTE'
    });

    var M_MUN_1508 = new google.maps.Marker({ 
    position: {lat: 15.180803, lng: -86.071529},  
    map: map, icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
    title: 'GUALACO'
    });

    var M_MUN_1509 = new google.maps.Marker({ 
    position: {lat: 14.9124, lng: -86.2893},
    map: map, icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
    title: 'GUARIZAMA'
    });

    var M_MUN_1510 = new google.maps.Marker({ 
    position: {lat: 15.186767, lng: -86.376399},  
    map: map, icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
    title: 'GUATA'
    });

    var M_MUN_1511 = new google.maps.Marker({ 
    position: {lat: 14.7795, lng: -86.8681}, 
    map: map, icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
    title: 'GUAYAPE'
    });

    var M_MUN_1512 = new google.maps.Marker({ 
    position: {lat: 15.103918, lng: -86.554927}, 
    map: map, icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
    title: 'JANO'
    });

    var M_MUN_1513 = new google.maps.Marker({ 
    position: {lat: 15.107895, lng: -86.719722},  
    map: map, icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
    title: 'LA UNION'
    });

    var M_MUN_1514 = new google.maps.Marker({ 
    position: {lat: 15.123142, lng: -86.848811},   
    map: map, icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
    title: 'MANGULILE'
    });

    var M_MUN_1515 = new google.maps.Marker({ 
    position: {lat: 14.871768, lng: -86.445064},  
    map: map, icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
    title: 'MANTO'
    });

    var M_MUN_1516 = new google.maps.Marker({ 
    position: {lat: 14.818669, lng: -86.631831}, 
    map: map, icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
    title: 'SALAMA'
    });

    var M_MUN_1517 = new google.maps.Marker({ 
    position: {lat: 15.308491, lng: -85.679759},  
    map: map, icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
    title: 'SAN ESTEBAN'
    });

    var M_MUN_1518 = new google.maps.Marker({ 
    position: {lat: 14.601324, lng: -86.021708},  
    map: map, icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
    title: 'SAN FRANCISCO DE BECERRA'
    });

    var M_MUN_1519 = new google.maps.Marker({ 
    position: {lat: 14.860314, lng: -86.149424},  
    map: map, icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
    title: 'SAN FRANCISCO DE LA PAZ'
    });

    var M_MUN_1520 = new google.maps.Marker({ 
    position: {lat: 14.829948, lng: -85.955447},   
    map: map, icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
    title: 'SANTA MARIA DEL REAL'
    });

    var M_MUN_1521 = new google.maps.Marker({ 
    position: {lat: 14.754597, lng: -86.542529},  
    map: map, icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
    title: 'SILCA'
    });

    var M_MUN_1522 = new google.maps.Marker({ 
    position: {lat: 14.928496, lng: -86.813067},   
    map: map, icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
    title: 'YOCON'
    });

    var M_MUN_1523 = new google.maps.Marker({ 
    position: {lat: 14.323901, lng: -85.975359},  
    map: map, icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
    title: 'PATUCA'
    });

    var M_MUN_1601 = new google.maps.Marker({ 
    position: {lat: 14.899769, lng: -88.172495},  
    map: map, icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
    title: 'SANTA BARBARA'
    });

 
    var M_MUN_1602 = new google.maps.Marker({ 
    position: {lat: 14.834731, lng: -88.334544},   
    map: map, icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
    title: 'ARADA'
    });

    var M_MUN_1603 = new google.maps.Marker({ 
    position: {lat: 14.900851, lng: -88.494990},    
    map: map, icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
    title: 'ATIMA'
    });

    var M_MUN_1604 = new google.maps.Marker({ 
    position: {lat: 15.356813, lng: -88.579997},  
    map: map, icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
    title: 'AZACUALPA'
    });

    var M_MUN_1605 = new google.maps.Marker({ 
    position: {lat: 14.804633, lng: -88.185817},   
    map: map, icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
    title: 'CEGUACA'
    });

    var M_MUN_1606 = new google.maps.Marker({ 
    position: {lat: 15.051440, lng: -88.327359},   
    map: map, icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
    title: 'SAN JOSE DE COLINAS'
    });

    var M_MUN_1607 = new google.maps.Marker({ 
    position: {lat: 15.169437, lng: -88.147458},   
    map: map, icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
    title: 'CONCEPCION DEL NORTE'
    });

    var M_MUN_1608 = new google.maps.Marker({ 
    position: {lat: 14.800680, lng: -88.139516},   
    map: map, icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
    title: 'CONCEPCION DEL SUR'
    });

    var M_MUN_1609 = new google.maps.Marker({ 
    position: {lat: 15.089463, lng: -88.147089},  
    map: map, icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
    title: 'CHINDA'
    });

    var M_MUN_1610 = new google.maps.Marker({ 
    position: {lat: 14.755033, lng: -88.331352}, 
    map: map, icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
    title: 'EL NISPERO'
    });

    var M_MUN_1611 = new google.maps.Marker({ 
    position: {lat: 14.971422, lng: -88.171809},    
    map: map, icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
    title: 'GUALALA'
    });

    var M_MUN_1612 = new google.maps.Marker({ 
    position: {lat: 15.032440, lng: -88.131296},  
    map: map, icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
    title: 'ILAMA'
    });

    var M_MUN_1613 = new google.maps.Marker({ 
    position: {lat: 15.224486, lng: -88.553050},     
    map: map, icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
    title: 'MACUELIZO'
    });

    var M_MUN_1614 = new google.maps.Marker({ 
    position: {lat: 14.955687, lng: -88.611333},   
    map: map, icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
    title: 'NARANJITO'
    });

    var M_MUN_1615 = new google.maps.Marker({ 
    position: {lat: 14.954606, lng: -88.340352},   
    map: map, icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
    title: 'NUEVO CELILAC'
    });

    var M_MUN_1616 = new google.maps.Marker({ 
    position: {lat: 15.255419, lng: -88.211446},    
    map: map, icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
    title: 'PETOA'
    });

    var M_MUN_1617 = new google.maps.Marker({ 
    position: {lat: 15.065937, lng: -88.611583},   
    map: map, icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
    title: 'PROTECCION'
    });

    var M_MUN_1618 = new google.maps.Marker({ 
    position: {lat: 15.393663, lng: -88.361990 },  
    map: map, icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
    title: 'QUIMISTAN'
    });

    var M_MUN_1619 = new google.maps.Marker({ 
    position: {lat: 14.709617, lng: -88.190665},   
    map: map, icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
    title: 'SAN FRANCISCO DE OJUERA'
    });

    var M_MUN_1620 = new google.maps.Marker({ 
    position: {lat: 15.083652, lng: -88.470892},
    map: map, icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
    title: 'SAN LUIS'
    });

    var M_MUN_1621 = new google.maps.Marker({ 
    position: {lat: 15.243610, lng: -88.393208},   
    map: map, icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
    title: 'SAN MARCOS'
    });

    var M_MUN_1622 = new google.maps.Marker({ 
    position: {lat: 14.906405, lng: -88.359263},   
    map: map, icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
    title: 'SAN NICOLAS'
    });

    var M_MUN_1623 = new google.maps.Marker({ 
    position: {lat: 14.736370, lng: -88.089685},   
    map: map, icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
    title: 'SAN PEDRO ZACAPA'
    });

    var M_MUN_1624 = new google.maps.Marker({ 
    position: {lat: 14.738686, lng: -88.263636},
    map: map, icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
    title: 'SANTA RITA'
    });

    var M_MUN_1625 = new google.maps.Marker({ 
    position: {lat: 14.866589, lng: -88.289225},    
    map: map, icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
    title: 'SAN VICENTE CENTENARIO'
    });

    var M_MUN_1626 = new google.maps.Marker({ 
    position: {lat: 15.121716, lng: -88.254574},  
    map: map, icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
    title: 'TRINIDAD DE COPAN'
    });

    var M_MUN_1627 = new google.maps.Marker({ 
    position: {lat: 14.839796, lng: -88.053756},   
    map: map, icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
    title: 'LAS VEGAS'
    });

    var M_MUN_1628 = new google.maps.Marker({ 
    position: {lat: 15.258363, lng:  -88.666553},  
    map: map, icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
    title: 'NUEVA FRONTERA'
    });

    var M_MUN_1701 = new google.maps.Marker({
        position: {lat: 13.511092, lng: -87.533334},         
        map: map, icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
        title: 'NACAOME'
    });

    var M_MUN_1702 = new google.maps.Marker({
        position: {lat: 13.445654, lng: -87.699502},          
        map: map, icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
        title: 'ALIANZA'
    });

    var M_MUN_1703 = new google.maps.Marker({
        position: {lat: 13.271957, lng: -87.637704},         
        map: map, icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
        title: 'AMAPALA'
    });

    var M_MUN_1704 = new google.maps.Marker({
        position: {lat: 13.722465, lng: -87.692585},         
        map: map, icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
        title: 'ARAMECINA'
    });

    var M_MUN_1705 = new google.maps.Marker({
        position: {lat: 13.806879, lng: -87.684816},        
        map: map, icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
        title: 'CARIDAD'
    });


    var M_MUN_1706 = new google.maps.Marker({
        position: {lat: 13.598618, lng: -87.712205},           
        map: map, icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
        title: 'GOASCORAN'
    });

    var M_MUN_1707 = new google.maps.Marker({
        position: {lat: 13.649122, lng: -87.632524},         
        map: map, icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
        title: 'LANGUE'
    });

    var M_MUN_1708 = new google.maps.Marker({
        position: {lat: 13.656977, lng: -87.560927},            
        map: map, icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
        title: 'SAN FRANCISCO DE CORAY'
    });
 
    var M_MUN_1709 = new google.maps.Marker({
        position: {lat: 13.441427, lng: -87.407339},              
        map: map, icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
        title: 'SAN LORENZO'
    });

    var M_MUN_1801 = new google.maps.Marker({ 
    position: {lat: 15.243522, lng: -87.252154},    
    map: map, icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
    title: 'YORO'
    });

    var M_MUN_1802 = new google.maps.Marker({ 
    position: {lat: 15.332471, lng: -86.843952},  
    map: map, icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
    title: 'ARENAL'
    });

    var M_MUN_1803 = new google.maps.Marker({ 
    position: {lat: 15.368931, lng: -87.685975},   
    map: map, icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
    title: 'EL NEGRITO'
    });

    var M_MUN_1804 = new google.maps.Marker({ 
    position: {lat: 15.4072, lng: -87.7959},
    map: map, icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
    title: 'EL PROGRESO'
    });

    var M_MUN_1805 = new google.maps.Marker({ 
    position: {lat: 15.287972, lng: -86.973499},   
    map: map, icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
    title: 'JOCON'
    });

    var M_MUN_1806 = new google.maps.Marker({ 
    position: {lat: 15.331557, lng: -87.582138},  
    map: map, icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
    title: 'MORAZAN'
    });

    var M_MUN_1807 = new google.maps.Marker({ 
    position: {lat: 15.460868, lng: -86.596026},  
    map: map, icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
    title: 'OLANCHITO'
    });

    var M_MUN_1808 = new google.maps.Marker({ 
    position: {lat: 15.176849, lng: -87.817627},   
    map: map, icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
    title: 'SANTA RITA'
    });

    var M_MUN_1809 = new google.maps.Marker({ 
    position: {lat: 14.959438, lng: -87.291973},   
    map: map, icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
    title: 'SULACO'
    });

    var M_MUN_1810 = new google.maps.Marker({ 
    position: {lat: 15.099325, lng: -87.548013},  
    map: map, icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
    title: 'VICTORIA'
    });

    var M_MUN_1811 = new google.maps.Marker({ 
    position: {lat: 15.043631, lng: -87.318674},   
    map: map, icon : 'http://zkthemes.googlecode.com/svn/trunk/zkthemedemo/src/main/webapp/img/Centigrade-Widget-Icons/Bullet-10x10.png',
    title: 'YORITO'
    });

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var S_MUN_0101 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">LA CEIBA, ATLANTIDA</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[0]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[0]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[0]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[0]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_0101 = new google.maps.InfoWindow({
content: S_MUN_0101
});
google.maps.event.addListener(M_MUN_0101,"mouseover",function(){
W_MUN_0101.open(map, M_MUN_0101);
});
google.maps.event.addListener(M_MUN_0101,"mouseout",function(){
W_MUN_0101.close();
});
var S_MUN_0102 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">EL PORVENIR, ATLANTIDA</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[1]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[1]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[1]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[1]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_0102 = new google.maps.InfoWindow({
content: S_MUN_0102
});
google.maps.event.addListener(M_MUN_0102,"mouseover",function(){
W_MUN_0102.open(map, M_MUN_0102);
});
google.maps.event.addListener(M_MUN_0102,"mouseout",function(){
W_MUN_0102.close();
});
var S_MUN_0103 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">ESPARTA, ATLANTIDA</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[2]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[2]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[2]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[2]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_0103 = new google.maps.InfoWindow({
content: S_MUN_0103
});
google.maps.event.addListener(M_MUN_0103,"mouseover",function(){
W_MUN_0103.open(map, M_MUN_0103);
});
google.maps.event.addListener(M_MUN_0103,"mouseout",function(){
W_MUN_0103.close();
});
var S_MUN_0104 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">JUTIAPA, ATLANTIDA</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[3]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[3]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[3]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[3]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_0104 = new google.maps.InfoWindow({
content: S_MUN_0104
});
google.maps.event.addListener(M_MUN_0104,"mouseover",function(){
W_MUN_0104.open(map, M_MUN_0104);
});
google.maps.event.addListener(M_MUN_0104,"mouseout",function(){
W_MUN_0104.close();
});
var S_MUN_0105 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">LA MASICA, ATLANTIDA</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[4]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[4]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[4]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[4]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_0105 = new google.maps.InfoWindow({
content: S_MUN_0105
});
google.maps.event.addListener(M_MUN_0105,"mouseover",function(){
W_MUN_0105.open(map, M_MUN_0105);
});
google.maps.event.addListener(M_MUN_0105,"mouseout",function(){
W_MUN_0105.close();
});
var S_MUN_0106 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">SAN FRANCISCO, ATLANTIDA</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[5]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[5]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[5]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[5]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_0106 = new google.maps.InfoWindow({
content: S_MUN_0106
});
google.maps.event.addListener(M_MUN_0106,"mouseover",function(){
W_MUN_0106.open(map, M_MUN_0106);
});
google.maps.event.addListener(M_MUN_0106,"mouseout",function(){
W_MUN_0106.close();
});
var S_MUN_0107 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">TELA, ATLANTIDA</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[6]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[6]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[6]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[6]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_0107 = new google.maps.InfoWindow({
content: S_MUN_0107
});
google.maps.event.addListener(M_MUN_0107,"mouseover",function(){
W_MUN_0107.open(map, M_MUN_0107);
});
google.maps.event.addListener(M_MUN_0107,"mouseout",function(){
W_MUN_0107.close();
});
var S_MUN_0108 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">ARIZONA, ATLANTIDA</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[7]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[7]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[7]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[7]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_0108 = new google.maps.InfoWindow({
content: S_MUN_0108
});
google.maps.event.addListener(M_MUN_0108,"mouseover",function(){
W_MUN_0108.open(map, M_MUN_0108);
});
google.maps.event.addListener(M_MUN_0108,"mouseout",function(){
W_MUN_0108.close();
});
var S_MUN_0201 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">TRUJILLO, COLON</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[8]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[8]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[8]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[8]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_0201 = new google.maps.InfoWindow({
content: S_MUN_0201
});
google.maps.event.addListener(M_MUN_0201,"mouseover",function(){
W_MUN_0201.open(map, M_MUN_0201);
});
google.maps.event.addListener(M_MUN_0201,"mouseout",function(){
W_MUN_0201.close();
});
var S_MUN_0202 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">BALFATE, COLON</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[9]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[9]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[9]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[9]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_0202 = new google.maps.InfoWindow({
content: S_MUN_0202
});
google.maps.event.addListener(M_MUN_0202,"mouseover",function(){
W_MUN_0202.open(map, M_MUN_0202);
});
google.maps.event.addListener(M_MUN_0202,"mouseout",function(){
W_MUN_0202.close();
});
var S_MUN_0203 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">IRIONA, COLON</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[10]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[10]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[10]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[10]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_0203 = new google.maps.InfoWindow({
content: S_MUN_0203
});
google.maps.event.addListener(M_MUN_0203,"mouseover",function(){
W_MUN_0203.open(map, M_MUN_0203);
});
google.maps.event.addListener(M_MUN_0203,"mouseout",function(){
W_MUN_0203.close();
});
var S_MUN_0204 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">LIMON, COLON</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[11]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[11]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[11]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[11]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_0204 = new google.maps.InfoWindow({
content: S_MUN_0204
});
google.maps.event.addListener(M_MUN_0204,"mouseover",function(){
W_MUN_0204.open(map, M_MUN_0204);
});
google.maps.event.addListener(M_MUN_0204,"mouseout",function(){
W_MUN_0204.close();
});
var S_MUN_0205 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">SANTA FE, COLON</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[12]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[12]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[12]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[12]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_0205 = new google.maps.InfoWindow({
content: S_MUN_0205
});
google.maps.event.addListener(M_MUN_0205,"mouseover",function(){
W_MUN_0205.open(map, M_MUN_0205);
});
google.maps.event.addListener(M_MUN_0205,"mouseout",function(){
W_MUN_0205.close();
});
var S_MUN_0206 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">SANTA ROSA DE AGUAN, COLON</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[13]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[13]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[13]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[13]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_0206 = new google.maps.InfoWindow({
content: S_MUN_0206
});
google.maps.event.addListener(M_MUN_0206,"mouseover",function(){
W_MUN_0206.open(map, M_MUN_0206);
});
google.maps.event.addListener(M_MUN_0206,"mouseout",function(){
W_MUN_0206.close();
});
var S_MUN_0207 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">SABA, COLON</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[14]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[14]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[14]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[14]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_0207 = new google.maps.InfoWindow({
content: S_MUN_0207
});
google.maps.event.addListener(M_MUN_0207,"mouseover",function(){
W_MUN_0207.open(map, M_MUN_0207);
});
google.maps.event.addListener(M_MUN_0207,"mouseout",function(){
W_MUN_0207.close();
});
var S_MUN_0208 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">SONAGUERA, COLON</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[15]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[15]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[15]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[15]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_0208 = new google.maps.InfoWindow({
content: S_MUN_0208
});
google.maps.event.addListener(M_MUN_0208,"mouseover",function(){
W_MUN_0208.open(map, M_MUN_0208);
});
google.maps.event.addListener(M_MUN_0208,"mouseout",function(){
W_MUN_0208.close();
});
var S_MUN_0209 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">TOCOA, COLON</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[16]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[16]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[16]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[16]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_0209 = new google.maps.InfoWindow({
content: S_MUN_0209
});
google.maps.event.addListener(M_MUN_0209,"mouseover",function(){
W_MUN_0209.open(map, M_MUN_0209);
});
google.maps.event.addListener(M_MUN_0209,"mouseout",function(){
W_MUN_0209.close();
});
var S_MUN_0210 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">BONITO ORIENTAL, COLON</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[17]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[17]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[17]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[17]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_0210 = new google.maps.InfoWindow({
content: S_MUN_0210
});
google.maps.event.addListener(M_MUN_0210,"mouseover",function(){
W_MUN_0210.open(map, M_MUN_0210);
});
google.maps.event.addListener(M_MUN_0210,"mouseout",function(){
W_MUN_0210.close();
});
var S_MUN_0301 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">COMAYAGUA, COMAYAGUA</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[18]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[18]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[18]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[18]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_0301 = new google.maps.InfoWindow({
content: S_MUN_0301
});
google.maps.event.addListener(M_MUN_0301,"mouseover",function(){
W_MUN_0301.open(map, M_MUN_0301);
});
google.maps.event.addListener(M_MUN_0301,"mouseout",function(){
W_MUN_0301.close();
});
var S_MUN_0302 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">AJUTERIQUE, COMAYAGUA</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[19]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[19]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[19]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[19]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_0302 = new google.maps.InfoWindow({
content: S_MUN_0302
});
google.maps.event.addListener(M_MUN_0302,"mouseover",function(){
W_MUN_0302.open(map, M_MUN_0302);
});
google.maps.event.addListener(M_MUN_0302,"mouseout",function(){
W_MUN_0302.close();
});
var S_MUN_0303 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">EL ROSARIO, COMAYAGUA</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[20]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[20]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[20]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[20]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_0303 = new google.maps.InfoWindow({
content: S_MUN_0303
});
google.maps.event.addListener(M_MUN_0303,"mouseover",function(){
W_MUN_0303.open(map, M_MUN_0303);
});
google.maps.event.addListener(M_MUN_0303,"mouseout",function(){
W_MUN_0303.close();
});
var S_MUN_0304 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">ESQUIAS, COMAYAGUA</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[21]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[21]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[21]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[21]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_0304 = new google.maps.InfoWindow({
content: S_MUN_0304
});
google.maps.event.addListener(M_MUN_0304,"mouseover",function(){
W_MUN_0304.open(map, M_MUN_0304);
});
google.maps.event.addListener(M_MUN_0304,"mouseout",function(){
W_MUN_0304.close();
});
var S_MUN_0305 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">HUMUYA, COMAYAGUA</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[22]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[22]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[22]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[22]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_0305 = new google.maps.InfoWindow({
content: S_MUN_0305
});
google.maps.event.addListener(M_MUN_0305,"mouseover",function(){
W_MUN_0305.open(map, M_MUN_0305);
});
google.maps.event.addListener(M_MUN_0305,"mouseout",function(){
W_MUN_0305.close();
});
var S_MUN_0306 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">LA LIBERTAD, COMAYAGUA</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[23]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[23]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[23]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[23]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_0306 = new google.maps.InfoWindow({
content: S_MUN_0306
});
google.maps.event.addListener(M_MUN_0306,"mouseover",function(){
W_MUN_0306.open(map, M_MUN_0306);
});
google.maps.event.addListener(M_MUN_0306,"mouseout",function(){
W_MUN_0306.close();
});
var S_MUN_0307 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">LAMANI, COMAYAGUA</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[24]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[24]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[24]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[24]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_0307 = new google.maps.InfoWindow({
content: S_MUN_0307
});
google.maps.event.addListener(M_MUN_0307,"mouseover",function(){
W_MUN_0307.open(map, M_MUN_0307);
});
google.maps.event.addListener(M_MUN_0307,"mouseout",function(){
W_MUN_0307.close();
});
var S_MUN_0308 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">LA TRINIDAD, COMAYAGUA</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[25]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[25]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[25]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[25]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_0308 = new google.maps.InfoWindow({
content: S_MUN_0308
});
google.maps.event.addListener(M_MUN_0308,"mouseover",function(){
W_MUN_0308.open(map, M_MUN_0308);
});
google.maps.event.addListener(M_MUN_0308,"mouseout",function(){
W_MUN_0308.close();
});
var S_MUN_0309 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">LEJAMANI, COMAYAGUA</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[26]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[26]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[26]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[26]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_0309 = new google.maps.InfoWindow({
content: S_MUN_0309
});
google.maps.event.addListener(M_MUN_0309,"mouseover",function(){
W_MUN_0309.open(map, M_MUN_0309);
});
google.maps.event.addListener(M_MUN_0309,"mouseout",function(){
W_MUN_0309.close();
});
var S_MUN_0310 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">MEAMBAR, COMAYAGUA</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[27]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[27]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[27]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[27]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_0310 = new google.maps.InfoWindow({
content: S_MUN_0310
});
google.maps.event.addListener(M_MUN_0310,"mouseover",function(){
W_MUN_0310.open(map, M_MUN_0310);
});
google.maps.event.addListener(M_MUN_0310,"mouseout",function(){
W_MUN_0310.close();
});
var S_MUN_0311 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">MINAS DE ORO, COMAYAGUA</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[28]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[28]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[28]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[28]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_0311 = new google.maps.InfoWindow({
content: S_MUN_0311
});
google.maps.event.addListener(M_MUN_0311,"mouseover",function(){
W_MUN_0311.open(map, M_MUN_0311);
});
google.maps.event.addListener(M_MUN_0311,"mouseout",function(){
W_MUN_0311.close();
});
var S_MUN_0312 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">OJOS DE AGUA, COMAYAGUA</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[29]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[29]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[29]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[29]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_0312 = new google.maps.InfoWindow({
content: S_MUN_0312
});
google.maps.event.addListener(M_MUN_0312,"mouseover",function(){
W_MUN_0312.open(map, M_MUN_0312);
});
google.maps.event.addListener(M_MUN_0312,"mouseout",function(){
W_MUN_0312.close();
});
var S_MUN_0313 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">SAN JERONIMO, COMAYAGUA</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[30]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[30]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[30]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[30]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_0313 = new google.maps.InfoWindow({
content: S_MUN_0313
});
google.maps.event.addListener(M_MUN_0313,"mouseover",function(){
W_MUN_0313.open(map, M_MUN_0313);
});
google.maps.event.addListener(M_MUN_0313,"mouseout",function(){
W_MUN_0313.close();
});
var S_MUN_0314 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">SAN JOSE DE COMAYAGUA, COMAYAGUA</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[31]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[31]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[31]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[31]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_0314 = new google.maps.InfoWindow({
content: S_MUN_0314
});
google.maps.event.addListener(M_MUN_0314,"mouseover",function(){
W_MUN_0314.open(map, M_MUN_0314);
});
google.maps.event.addListener(M_MUN_0314,"mouseout",function(){
W_MUN_0314.close();
});
var S_MUN_0315 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">SAN JOSE DEL POTRERO, COMAYAGUA</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[32]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[32]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[32]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[32]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_0315 = new google.maps.InfoWindow({
content: S_MUN_0315
});
google.maps.event.addListener(M_MUN_0315,"mouseover",function(){
W_MUN_0315.open(map, M_MUN_0315);
});
google.maps.event.addListener(M_MUN_0315,"mouseout",function(){
W_MUN_0315.close();
});
var S_MUN_0316 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">SAN LUIS, COMAYAGUA</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[33]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[33]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[33]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[33]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_0316 = new google.maps.InfoWindow({
content: S_MUN_0316
});
google.maps.event.addListener(M_MUN_0316,"mouseover",function(){
W_MUN_0316.open(map, M_MUN_0316);
});
google.maps.event.addListener(M_MUN_0316,"mouseout",function(){
W_MUN_0316.close();
});
var S_MUN_0317 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">SAN SEBASTIAN, COMAYAGUA</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[34]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[34]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[34]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[34]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_0317 = new google.maps.InfoWindow({
content: S_MUN_0317
});
google.maps.event.addListener(M_MUN_0317,"mouseover",function(){
W_MUN_0317.open(map, M_MUN_0317);
});
google.maps.event.addListener(M_MUN_0317,"mouseout",function(){
W_MUN_0317.close();
});
var S_MUN_0318 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">SIGUATEPEQUE, COMAYAGUA</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[35]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[35]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[35]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[35]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_0318 = new google.maps.InfoWindow({
content: S_MUN_0318
});
google.maps.event.addListener(M_MUN_0318,"mouseover",function(){
W_MUN_0318.open(map, M_MUN_0318);
});
google.maps.event.addListener(M_MUN_0318,"mouseout",function(){
W_MUN_0318.close();
});
var S_MUN_0319 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">VILLA DE SAN ANTONIO, COMAYAGUA</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[36]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[36]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[36]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[36]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_0319 = new google.maps.InfoWindow({
content: S_MUN_0319
});
google.maps.event.addListener(M_MUN_0319,"mouseover",function(){
W_MUN_0319.open(map, M_MUN_0319);
});
google.maps.event.addListener(M_MUN_0319,"mouseout",function(){
W_MUN_0319.close();
});
var S_MUN_0320 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">LAS LAJAS, COMAYAGUA</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[37]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[37]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[37]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[37]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_0320 = new google.maps.InfoWindow({
content: S_MUN_0320
});
google.maps.event.addListener(M_MUN_0320,"mouseover",function(){
W_MUN_0320.open(map, M_MUN_0320);
});
google.maps.event.addListener(M_MUN_0320,"mouseout",function(){
W_MUN_0320.close();
});
var S_MUN_0321 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">TAULABE, COMAYAGUA</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[38]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[38]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[38]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[38]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_0321 = new google.maps.InfoWindow({
content: S_MUN_0321
});
google.maps.event.addListener(M_MUN_0321,"mouseover",function(){
W_MUN_0321.open(map, M_MUN_0321);
});
google.maps.event.addListener(M_MUN_0321,"mouseout",function(){
W_MUN_0321.close();
});
var S_MUN_0401 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">SANTA ROSA DE COPAN, COPAN</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[39]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[39]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[39]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[39]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_0401 = new google.maps.InfoWindow({
content: S_MUN_0401
});
google.maps.event.addListener(M_MUN_0401,"mouseover",function(){
W_MUN_0401.open(map, M_MUN_0401);
});
google.maps.event.addListener(M_MUN_0401,"mouseout",function(){
W_MUN_0401.close();
});
var S_MUN_0402 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">CABAÑAS, COPAN</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[40]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[40]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[40]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[40]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_0402 = new google.maps.InfoWindow({
content: S_MUN_0402
});
google.maps.event.addListener(M_MUN_0402,"mouseover",function(){
W_MUN_0402.open(map, M_MUN_0402);
});
google.maps.event.addListener(M_MUN_0402,"mouseout",function(){
W_MUN_0402.close();
});
var S_MUN_0403 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">CONCEPCION, COPAN</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[41]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[41]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[41]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[41]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_0403 = new google.maps.InfoWindow({
content: S_MUN_0403
});
google.maps.event.addListener(M_MUN_0403,"mouseover",function(){
W_MUN_0403.open(map, M_MUN_0403);
});
google.maps.event.addListener(M_MUN_0403,"mouseout",function(){
W_MUN_0403.close();
});
var S_MUN_0404 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">COPAN RUINAS, COPAN</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[42]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[42]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[42]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[42]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_0404 = new google.maps.InfoWindow({
content: S_MUN_0404
});
google.maps.event.addListener(M_MUN_0404,"mouseover",function(){
W_MUN_0404.open(map, M_MUN_0404);
});
google.maps.event.addListener(M_MUN_0404,"mouseout",function(){
W_MUN_0404.close();
});
var S_MUN_0405 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">CORQUIN, COPAN</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[43]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[43]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[43]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[43]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_0405 = new google.maps.InfoWindow({
content: S_MUN_0405
});
google.maps.event.addListener(M_MUN_0405,"mouseover",function(){
W_MUN_0405.open(map, M_MUN_0405);
});
google.maps.event.addListener(M_MUN_0405,"mouseout",function(){
W_MUN_0405.close();
});
var S_MUN_0406 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">CUCUYAGUA, COPAN</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[44]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[44]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[44]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[44]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_0406 = new google.maps.InfoWindow({
content: S_MUN_0406
});
google.maps.event.addListener(M_MUN_0406,"mouseover",function(){
W_MUN_0406.open(map, M_MUN_0406);
});
google.maps.event.addListener(M_MUN_0406,"mouseout",function(){
W_MUN_0406.close();
});
var S_MUN_0407 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">DOLORES, COPAN</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[45]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[45]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[45]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[45]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_0407 = new google.maps.InfoWindow({
content: S_MUN_0407
});
google.maps.event.addListener(M_MUN_0407,"mouseover",function(){
W_MUN_0407.open(map, M_MUN_0407);
});
google.maps.event.addListener(M_MUN_0407,"mouseout",function(){
W_MUN_0407.close();
});
var S_MUN_0408 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">DULCE NOMBRE, COPAN</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[46]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[46]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[46]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[46]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_0408 = new google.maps.InfoWindow({
content: S_MUN_0408
});
google.maps.event.addListener(M_MUN_0408,"mouseover",function(){
W_MUN_0408.open(map, M_MUN_0408);
});
google.maps.event.addListener(M_MUN_0408,"mouseout",function(){
W_MUN_0408.close();
});
var S_MUN_0409 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">EL PARAISO, COPAN</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[47]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[47]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[47]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[47]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_0409 = new google.maps.InfoWindow({
content: S_MUN_0409
});
google.maps.event.addListener(M_MUN_0409,"mouseover",function(){
W_MUN_0409.open(map, M_MUN_0409);
});
google.maps.event.addListener(M_MUN_0409,"mouseout",function(){
W_MUN_0409.close();
});
var S_MUN_0410 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">FLORIDA, COPAN</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[48]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[48]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[48]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[48]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_0410 = new google.maps.InfoWindow({
content: S_MUN_0410
});
google.maps.event.addListener(M_MUN_0410,"mouseover",function(){
W_MUN_0410.open(map, M_MUN_0410);
});
google.maps.event.addListener(M_MUN_0410,"mouseout",function(){
W_MUN_0410.close();
});
var S_MUN_0411 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">LA JIGUA, COPAN</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[49]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[49]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[49]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[49]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_0411 = new google.maps.InfoWindow({
content: S_MUN_0411
});
google.maps.event.addListener(M_MUN_0411,"mouseover",function(){
W_MUN_0411.open(map, M_MUN_0411);
});
google.maps.event.addListener(M_MUN_0411,"mouseout",function(){
W_MUN_0411.close();
});
var S_MUN_0412 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">LA UNION, COPAN</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[50]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[50]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[50]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[50]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_0412 = new google.maps.InfoWindow({
content: S_MUN_0412
});
google.maps.event.addListener(M_MUN_0412,"mouseover",function(){
W_MUN_0412.open(map, M_MUN_0412);
});
google.maps.event.addListener(M_MUN_0412,"mouseout",function(){
W_MUN_0412.close();
});
var S_MUN_0413 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">NUEVA ARCADIA, COPAN</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[51]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[51]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[51]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[51]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_0413 = new google.maps.InfoWindow({
content: S_MUN_0413
});
google.maps.event.addListener(M_MUN_0413,"mouseover",function(){
W_MUN_0413.open(map, M_MUN_0413);
});
google.maps.event.addListener(M_MUN_0413,"mouseout",function(){
W_MUN_0413.close();
});
var S_MUN_0414 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">SAN AGUSTIN, COPAN</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[52]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[52]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[52]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[52]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_0414 = new google.maps.InfoWindow({
content: S_MUN_0414
});
google.maps.event.addListener(M_MUN_0414,"mouseover",function(){
W_MUN_0414.open(map, M_MUN_0414);
});
google.maps.event.addListener(M_MUN_0414,"mouseout",function(){
W_MUN_0414.close();
});
var S_MUN_0415 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">SAN ANTONIO, COPAN</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[53]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[53]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[53]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[53]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_0415 = new google.maps.InfoWindow({
content: S_MUN_0415
});
google.maps.event.addListener(M_MUN_0415,"mouseover",function(){
W_MUN_0415.open(map, M_MUN_0415);
});
google.maps.event.addListener(M_MUN_0415,"mouseout",function(){
W_MUN_0415.close();
});
var S_MUN_0416 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">SAN JERONIMO, COPAN</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[54]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[54]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[54]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[54]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_0416 = new google.maps.InfoWindow({
content: S_MUN_0416
});
google.maps.event.addListener(M_MUN_0416,"mouseover",function(){
W_MUN_0416.open(map, M_MUN_0416);
});
google.maps.event.addListener(M_MUN_0416,"mouseout",function(){
W_MUN_0416.close();
});
var S_MUN_0417 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">SAN JOSE, COPAN</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[55]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[55]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[55]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[55]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_0417 = new google.maps.InfoWindow({
content: S_MUN_0417
});
google.maps.event.addListener(M_MUN_0417,"mouseover",function(){
W_MUN_0417.open(map, M_MUN_0417);
});
google.maps.event.addListener(M_MUN_0417,"mouseout",function(){
W_MUN_0417.close();
});
var S_MUN_0418 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">SAN JUAN DE OPOA, COPAN</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[56]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[56]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[56]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[56]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_0418 = new google.maps.InfoWindow({
content: S_MUN_0418
});
google.maps.event.addListener(M_MUN_0418,"mouseover",function(){
W_MUN_0418.open(map, M_MUN_0418);
});
google.maps.event.addListener(M_MUN_0418,"mouseout",function(){
W_MUN_0418.close();
});
var S_MUN_0419 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">SAN NICOLAS, COPAN</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[57]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[57]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[57]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[57]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_0419 = new google.maps.InfoWindow({
content: S_MUN_0419
});
google.maps.event.addListener(M_MUN_0419,"mouseover",function(){
W_MUN_0419.open(map, M_MUN_0419);
});
google.maps.event.addListener(M_MUN_0419,"mouseout",function(){
W_MUN_0419.close();
});
var S_MUN_0420 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">SAN PEDRO, COPAN</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[58]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[58]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[58]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[58]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_0420 = new google.maps.InfoWindow({
content: S_MUN_0420
});
google.maps.event.addListener(M_MUN_0420,"mouseover",function(){
W_MUN_0420.open(map, M_MUN_0420);
});
google.maps.event.addListener(M_MUN_0420,"mouseout",function(){
W_MUN_0420.close();
});
var S_MUN_0421 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">SANTA RITA, COPAN</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[59]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[59]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[59]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[59]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_0421 = new google.maps.InfoWindow({
content: S_MUN_0421
});
google.maps.event.addListener(M_MUN_0421,"mouseover",function(){
W_MUN_0421.open(map, M_MUN_0421);
});
google.maps.event.addListener(M_MUN_0421,"mouseout",function(){
W_MUN_0421.close();
});
var S_MUN_0422 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">TRINIDAD, COPAN</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[60]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[60]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[60]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[60]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_0422 = new google.maps.InfoWindow({
content: S_MUN_0422
});
google.maps.event.addListener(M_MUN_0422,"mouseover",function(){
W_MUN_0422.open(map, M_MUN_0422);
});
google.maps.event.addListener(M_MUN_0422,"mouseout",function(){
W_MUN_0422.close();
});
var S_MUN_0423 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">VERACRUZ, COPAN</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[61]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[61]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[61]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[61]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_0423 = new google.maps.InfoWindow({
content: S_MUN_0423
});
google.maps.event.addListener(M_MUN_0423,"mouseover",function(){
W_MUN_0423.open(map, M_MUN_0423);
});
google.maps.event.addListener(M_MUN_0423,"mouseout",function(){
W_MUN_0423.close();
});
var S_MUN_0501 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">SAN PEDRO SULA, CORTES</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[62]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[62]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[62]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[62]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_0501 = new google.maps.InfoWindow({
content: S_MUN_0501
});
google.maps.event.addListener(M_MUN_0501,"mouseover",function(){
W_MUN_0501.open(map, M_MUN_0501);
});
google.maps.event.addListener(M_MUN_0501,"mouseout",function(){
W_MUN_0501.close();
});
var S_MUN_0502 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">CHOLOMA, CORTES</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[63]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[63]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[63]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[63]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_0502 = new google.maps.InfoWindow({
content: S_MUN_0502
});
google.maps.event.addListener(M_MUN_0502,"mouseover",function(){
W_MUN_0502.open(map, M_MUN_0502);
});
google.maps.event.addListener(M_MUN_0502,"mouseout",function(){
W_MUN_0502.close();
});
var S_MUN_0503 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">OMOA, CORTES</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[64]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[64]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[64]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[64]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_0503 = new google.maps.InfoWindow({
content: S_MUN_0503
});
google.maps.event.addListener(M_MUN_0503,"mouseover",function(){
W_MUN_0503.open(map, M_MUN_0503);
});
google.maps.event.addListener(M_MUN_0503,"mouseout",function(){
W_MUN_0503.close();
});
var S_MUN_0504 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">PIMIENTA, CORTES</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[65]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[65]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[65]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[65]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_0504 = new google.maps.InfoWindow({
content: S_MUN_0504
});
google.maps.event.addListener(M_MUN_0504,"mouseover",function(){
W_MUN_0504.open(map, M_MUN_0504);
});
google.maps.event.addListener(M_MUN_0504,"mouseout",function(){
W_MUN_0504.close();
});
var S_MUN_0505 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">POTRERILLOS, CORTES</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[66]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[66]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[66]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[66]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_0505 = new google.maps.InfoWindow({
content: S_MUN_0505
});
google.maps.event.addListener(M_MUN_0505,"mouseover",function(){
W_MUN_0505.open(map, M_MUN_0505);
});
google.maps.event.addListener(M_MUN_0505,"mouseout",function(){
W_MUN_0505.close();
});
var S_MUN_0506 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">PUERTO CORTES, CORTES</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[67]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[67]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[67]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[67]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_0506 = new google.maps.InfoWindow({
content: S_MUN_0506
});
google.maps.event.addListener(M_MUN_0506,"mouseover",function(){
W_MUN_0506.open(map, M_MUN_0506);
});
google.maps.event.addListener(M_MUN_0506,"mouseout",function(){
W_MUN_0506.close();
});
var S_MUN_0507 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">SAN ANTONIO DE CORTES, CORTES</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[68]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[68]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[68]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[68]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_0507 = new google.maps.InfoWindow({
content: S_MUN_0507
});
google.maps.event.addListener(M_MUN_0507,"mouseover",function(){
W_MUN_0507.open(map, M_MUN_0507);
});
google.maps.event.addListener(M_MUN_0507,"mouseout",function(){
W_MUN_0507.close();
});
var S_MUN_0508 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">SAN FRANCISCO DE YOJOA, CORTES</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[69]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[69]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[69]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[69]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_0508 = new google.maps.InfoWindow({
content: S_MUN_0508
});
google.maps.event.addListener(M_MUN_0508,"mouseover",function(){
W_MUN_0508.open(map, M_MUN_0508);
});
google.maps.event.addListener(M_MUN_0508,"mouseout",function(){
W_MUN_0508.close();
});
var S_MUN_0509 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">SAN MANUEL, CORTES</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[70]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[70]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[70]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[70]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_0509 = new google.maps.InfoWindow({
content: S_MUN_0509
});
google.maps.event.addListener(M_MUN_0509,"mouseover",function(){
W_MUN_0509.open(map, M_MUN_0509);
});
google.maps.event.addListener(M_MUN_0509,"mouseout",function(){
W_MUN_0509.close();
});
var S_MUN_0510 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">SANTA CRUZ DE YOJOA, CORTES</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[71]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[71]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[71]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[71]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_0510 = new google.maps.InfoWindow({
content: S_MUN_0510
});
google.maps.event.addListener(M_MUN_0510,"mouseover",function(){
W_MUN_0510.open(map, M_MUN_0510);
});
google.maps.event.addListener(M_MUN_0510,"mouseout",function(){
W_MUN_0510.close();
});
var S_MUN_0511 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">VILLANUEVA, CORTES</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[72]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[72]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[72]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[72]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_0511 = new google.maps.InfoWindow({
content: S_MUN_0511
});
google.maps.event.addListener(M_MUN_0511,"mouseover",function(){
W_MUN_0511.open(map, M_MUN_0511);
});
google.maps.event.addListener(M_MUN_0511,"mouseout",function(){
W_MUN_0511.close();
});
var S_MUN_0512 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">LA LIMA, CORTES</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[73]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[73]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[73]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[73]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_0512 = new google.maps.InfoWindow({
content: S_MUN_0512
});
google.maps.event.addListener(M_MUN_0512,"mouseover",function(){
W_MUN_0512.open(map, M_MUN_0512);
});
google.maps.event.addListener(M_MUN_0512,"mouseout",function(){
W_MUN_0512.close();
});
var S_MUN_0601 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">CHOLUTECA, CHOLUTECA</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[74]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[74]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[74]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[74]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_0601 = new google.maps.InfoWindow({
content: S_MUN_0601
});
google.maps.event.addListener(M_MUN_0601,"mouseover",function(){
W_MUN_0601.open(map, M_MUN_0601);
});
google.maps.event.addListener(M_MUN_0601,"mouseout",function(){
W_MUN_0601.close();
});
var S_MUN_0602 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">APACILAGUA, CHOLUTECA</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[75]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[75]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[75]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[75]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_0602 = new google.maps.InfoWindow({
content: S_MUN_0602
});
google.maps.event.addListener(M_MUN_0602,"mouseover",function(){
W_MUN_0602.open(map, M_MUN_0602);
});
google.maps.event.addListener(M_MUN_0602,"mouseout",function(){
W_MUN_0602.close();
});
var S_MUN_0603 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">CONCEPCION DE MARIA, CHOLUTECA</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[76]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[76]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[76]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[76]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_0603 = new google.maps.InfoWindow({
content: S_MUN_0603
});
google.maps.event.addListener(M_MUN_0603,"mouseover",function(){
W_MUN_0603.open(map, M_MUN_0603);
});
google.maps.event.addListener(M_MUN_0603,"mouseout",function(){
W_MUN_0603.close();
});
var S_MUN_0604 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">DUYURE, CHOLUTECA</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[77]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[77]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[77]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[77]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_0604 = new google.maps.InfoWindow({
content: S_MUN_0604
});
google.maps.event.addListener(M_MUN_0604,"mouseover",function(){
W_MUN_0604.open(map, M_MUN_0604);
});
google.maps.event.addListener(M_MUN_0604,"mouseout",function(){
W_MUN_0604.close();
});
var S_MUN_0605 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">EL CORPUS, CHOLUTECA</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[78]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[78]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[78]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[78]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_0605 = new google.maps.InfoWindow({
content: S_MUN_0605
});
google.maps.event.addListener(M_MUN_0605,"mouseover",function(){
W_MUN_0605.open(map, M_MUN_0605);
});
google.maps.event.addListener(M_MUN_0605,"mouseout",function(){
W_MUN_0605.close();
});
var S_MUN_0606 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">EL TRIUNFO, CHOLUTECA</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[79]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[79]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[79]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[79]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_0606 = new google.maps.InfoWindow({
content: S_MUN_0606
});
google.maps.event.addListener(M_MUN_0606,"mouseover",function(){
W_MUN_0606.open(map, M_MUN_0606);
});
google.maps.event.addListener(M_MUN_0606,"mouseout",function(){
W_MUN_0606.close();
});
var S_MUN_0607 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">MARCOVIA, CHOLUTECA</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[80]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[80]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[80]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[80]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_0607 = new google.maps.InfoWindow({
content: S_MUN_0607
});
google.maps.event.addListener(M_MUN_0607,"mouseover",function(){
W_MUN_0607.open(map, M_MUN_0607);
});
google.maps.event.addListener(M_MUN_0607,"mouseout",function(){
W_MUN_0607.close();
});
var S_MUN_0608 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">MOROLICA, CHOLUTECA</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[81]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[81]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[81]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[81]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_0608 = new google.maps.InfoWindow({
content: S_MUN_0608
});
google.maps.event.addListener(M_MUN_0608,"mouseover",function(){
W_MUN_0608.open(map, M_MUN_0608);
});
google.maps.event.addListener(M_MUN_0608,"mouseout",function(){
W_MUN_0608.close();
});
var S_MUN_0609 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">NAMASIGUE, CHOLUTECA</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[82]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[82]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[82]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[82]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_0609 = new google.maps.InfoWindow({
content: S_MUN_0609
});
google.maps.event.addListener(M_MUN_0609,"mouseover",function(){
W_MUN_0609.open(map, M_MUN_0609);
});
google.maps.event.addListener(M_MUN_0609,"mouseout",function(){
W_MUN_0609.close();
});
var S_MUN_0610 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">OROCUINA, CHOLUTECA</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[83]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[83]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[83]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[83]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_0610 = new google.maps.InfoWindow({
content: S_MUN_0610
});
google.maps.event.addListener(M_MUN_0610,"mouseover",function(){
W_MUN_0610.open(map, M_MUN_0610);
});
google.maps.event.addListener(M_MUN_0610,"mouseout",function(){
W_MUN_0610.close();
});
var S_MUN_0611 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">PESPIRE, CHOLUTECA</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[84]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[84]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[84]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[84]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_0611 = new google.maps.InfoWindow({
content: S_MUN_0611
});
google.maps.event.addListener(M_MUN_0611,"mouseover",function(){
W_MUN_0611.open(map, M_MUN_0611);
});
google.maps.event.addListener(M_MUN_0611,"mouseout",function(){
W_MUN_0611.close();
});
var S_MUN_0612 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">SAN ANTONIO DE FLORES, CHOLUTECA</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[85]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[85]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[85]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[85]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_0612 = new google.maps.InfoWindow({
content: S_MUN_0612
});
google.maps.event.addListener(M_MUN_0612,"mouseover",function(){
W_MUN_0612.open(map, M_MUN_0612);
});
google.maps.event.addListener(M_MUN_0612,"mouseout",function(){
W_MUN_0612.close();
});
var S_MUN_0613 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">SAN ISIDRO, CHOLUTECA</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[86]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[86]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[86]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[86]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_0613 = new google.maps.InfoWindow({
content: S_MUN_0613
});
google.maps.event.addListener(M_MUN_0613,"mouseover",function(){
W_MUN_0613.open(map, M_MUN_0613);
});
google.maps.event.addListener(M_MUN_0613,"mouseout",function(){
W_MUN_0613.close();
});
var S_MUN_0614 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">SAN JOSE, CHOLUTECA</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[87]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[87]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[87]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[87]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_0614 = new google.maps.InfoWindow({
content: S_MUN_0614
});
google.maps.event.addListener(M_MUN_0614,"mouseover",function(){
W_MUN_0614.open(map, M_MUN_0614);
});
google.maps.event.addListener(M_MUN_0614,"mouseout",function(){
W_MUN_0614.close();
});
var S_MUN_0615 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">SAN MARCOS DE COLON, CHOLUTECA</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[88]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[88]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[88]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[88]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_0615 = new google.maps.InfoWindow({
content: S_MUN_0615
});
google.maps.event.addListener(M_MUN_0615,"mouseover",function(){
W_MUN_0615.open(map, M_MUN_0615);
});
google.maps.event.addListener(M_MUN_0615,"mouseout",function(){
W_MUN_0615.close();
});
var S_MUN_0616 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">SANTA ANA DE YUSGUARE, CHOLUTECA</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[89]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[89]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[89]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[89]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_0616 = new google.maps.InfoWindow({
content: S_MUN_0616
});
google.maps.event.addListener(M_MUN_0616,"mouseover",function(){
W_MUN_0616.open(map, M_MUN_0616);
});
google.maps.event.addListener(M_MUN_0616,"mouseout",function(){
W_MUN_0616.close();
});
var S_MUN_0701 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">YUSCARAN, EL PARAISO</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[90]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[90]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[90]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[90]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_0701 = new google.maps.InfoWindow({
content: S_MUN_0701
});
google.maps.event.addListener(M_MUN_0701,"mouseover",function(){
W_MUN_0701.open(map, M_MUN_0701);
});
google.maps.event.addListener(M_MUN_0701,"mouseout",function(){
W_MUN_0701.close();
});
var S_MUN_0702 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">ALAUCA, EL PARAISO</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[91]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[91]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[91]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[91]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_0702 = new google.maps.InfoWindow({
content: S_MUN_0702
});
google.maps.event.addListener(M_MUN_0702,"mouseover",function(){
W_MUN_0702.open(map, M_MUN_0702);
});
google.maps.event.addListener(M_MUN_0702,"mouseout",function(){
W_MUN_0702.close();
});
var S_MUN_0703 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">DANLI, EL PARAISO</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[92]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[92]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[92]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[92]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_0703 = new google.maps.InfoWindow({
content: S_MUN_0703
});
google.maps.event.addListener(M_MUN_0703,"mouseover",function(){
W_MUN_0703.open(map, M_MUN_0703);
});
google.maps.event.addListener(M_MUN_0703,"mouseout",function(){
W_MUN_0703.close();
});
var S_MUN_0704 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">EL PARAISO, EL PARAISO</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[93]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[93]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[93]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[93]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_0704 = new google.maps.InfoWindow({
content: S_MUN_0704
});
google.maps.event.addListener(M_MUN_0704,"mouseover",function(){
W_MUN_0704.open(map, M_MUN_0704);
});
google.maps.event.addListener(M_MUN_0704,"mouseout",function(){
W_MUN_0704.close();
});
var S_MUN_0705 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">GUINOPE, EL PARAISO</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[94]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[94]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[94]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[94]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_0705 = new google.maps.InfoWindow({
content: S_MUN_0705
});
google.maps.event.addListener(M_MUN_0705,"mouseover",function(){
W_MUN_0705.open(map, M_MUN_0705);
});
google.maps.event.addListener(M_MUN_0705,"mouseout",function(){
W_MUN_0705.close();
});
var S_MUN_0706 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">JACALEAPA, EL PARAISO</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[95]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[95]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[95]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[95]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_0706 = new google.maps.InfoWindow({
content: S_MUN_0706
});
google.maps.event.addListener(M_MUN_0706,"mouseover",function(){
W_MUN_0706.open(map, M_MUN_0706);
});
google.maps.event.addListener(M_MUN_0706,"mouseout",function(){
W_MUN_0706.close();
});
var S_MUN_0707 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">LIURE, EL PARAISO</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[96]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[96]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[96]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[96]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_0707 = new google.maps.InfoWindow({
content: S_MUN_0707
});
google.maps.event.addListener(M_MUN_0707,"mouseover",function(){
W_MUN_0707.open(map, M_MUN_0707);
});
google.maps.event.addListener(M_MUN_0707,"mouseout",function(){
W_MUN_0707.close();
});
var S_MUN_0708 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">MOROCELI, EL PARAISO</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[97]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[97]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[97]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[97]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_0708 = new google.maps.InfoWindow({
content: S_MUN_0708
});
google.maps.event.addListener(M_MUN_0708,"mouseover",function(){
W_MUN_0708.open(map, M_MUN_0708);
});
google.maps.event.addListener(M_MUN_0708,"mouseout",function(){
W_MUN_0708.close();
});
var S_MUN_0709 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">OROPOLI, EL PARAISO</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[98]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[98]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[98]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[98]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_0709 = new google.maps.InfoWindow({
content: S_MUN_0709
});
google.maps.event.addListener(M_MUN_0709,"mouseover",function(){
W_MUN_0709.open(map, M_MUN_0709);
});
google.maps.event.addListener(M_MUN_0709,"mouseout",function(){
W_MUN_0709.close();
});
var S_MUN_0710 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">POTRERILLOS, EL PARAISO</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[99]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[99]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[99]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[99]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_0710 = new google.maps.InfoWindow({
content: S_MUN_0710
});
google.maps.event.addListener(M_MUN_0710,"mouseover",function(){
W_MUN_0710.open(map, M_MUN_0710);
});
google.maps.event.addListener(M_MUN_0710,"mouseout",function(){
W_MUN_0710.close();
});
var S_MUN_0711 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">SAN ANTONIO DE FLORES, EL PARAISO</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[100]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[100]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[100]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[100]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_0711 = new google.maps.InfoWindow({
content: S_MUN_0711
});
google.maps.event.addListener(M_MUN_0711,"mouseover",function(){
W_MUN_0711.open(map, M_MUN_0711);
});
google.maps.event.addListener(M_MUN_0711,"mouseout",function(){
W_MUN_0711.close();
});
var S_MUN_0712 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">SAN LUCAS, EL PARAISO</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[101]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[101]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[101]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[101]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_0712 = new google.maps.InfoWindow({
content: S_MUN_0712
});
google.maps.event.addListener(M_MUN_0712,"mouseover",function(){
W_MUN_0712.open(map, M_MUN_0712);
});
google.maps.event.addListener(M_MUN_0712,"mouseout",function(){
W_MUN_0712.close();
});
var S_MUN_0713 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">SAN MATIAS, EL PARAISO</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[102]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[102]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[102]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[102]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_0713 = new google.maps.InfoWindow({
content: S_MUN_0713
});
google.maps.event.addListener(M_MUN_0713,"mouseover",function(){
W_MUN_0713.open(map, M_MUN_0713);
});
google.maps.event.addListener(M_MUN_0713,"mouseout",function(){
W_MUN_0713.close();
});
var S_MUN_0714 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">SOLEDAD, EL PARAISO</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[103]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[103]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[103]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[103]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_0714 = new google.maps.InfoWindow({
content: S_MUN_0714
});
google.maps.event.addListener(M_MUN_0714,"mouseover",function(){
W_MUN_0714.open(map, M_MUN_0714);
});
google.maps.event.addListener(M_MUN_0714,"mouseout",function(){
W_MUN_0714.close();
});
var S_MUN_0715 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">TEUPASENTI, EL PARAISO</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[104]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[104]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[104]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[104]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_0715 = new google.maps.InfoWindow({
content: S_MUN_0715
});
google.maps.event.addListener(M_MUN_0715,"mouseover",function(){
W_MUN_0715.open(map, M_MUN_0715);
});
google.maps.event.addListener(M_MUN_0715,"mouseout",function(){
W_MUN_0715.close();
});
var S_MUN_0716 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">TEXIGUAT, EL PARAISO</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[105]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[105]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[105]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[105]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_0716 = new google.maps.InfoWindow({
content: S_MUN_0716
});
google.maps.event.addListener(M_MUN_0716,"mouseover",function(){
W_MUN_0716.open(map, M_MUN_0716);
});
google.maps.event.addListener(M_MUN_0716,"mouseout",function(){
W_MUN_0716.close();
});
var S_MUN_0717 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">VADO ANCHO, EL PARAISO</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[106]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[106]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[106]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[106]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_0717 = new google.maps.InfoWindow({
content: S_MUN_0717
});
google.maps.event.addListener(M_MUN_0717,"mouseover",function(){
W_MUN_0717.open(map, M_MUN_0717);
});
google.maps.event.addListener(M_MUN_0717,"mouseout",function(){
W_MUN_0717.close();
});
var S_MUN_0718 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">YAUYUPE, EL PARAISO</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[107]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[107]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[107]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[107]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_0718 = new google.maps.InfoWindow({
content: S_MUN_0718
});
google.maps.event.addListener(M_MUN_0718,"mouseover",function(){
W_MUN_0718.open(map, M_MUN_0718);
});
google.maps.event.addListener(M_MUN_0718,"mouseout",function(){
W_MUN_0718.close();
});
var S_MUN_0719 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">TROJES, EL PARAISO</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[108]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[108]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[108]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[108]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_0719 = new google.maps.InfoWindow({
content: S_MUN_0719
});
google.maps.event.addListener(M_MUN_0719,"mouseover",function(){
W_MUN_0719.open(map, M_MUN_0719);
});
google.maps.event.addListener(M_MUN_0719,"mouseout",function(){
W_MUN_0719.close();
});
var S_MUN_0801 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">DISTRITO CENTRAL, FRANCISCO MORAZAN</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[109]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[109]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[109]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[109]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_0801 = new google.maps.InfoWindow({
content: S_MUN_0801
});
google.maps.event.addListener(M_MUN_0801,"mouseover",function(){
W_MUN_0801.open(map, M_MUN_0801);
});
google.maps.event.addListener(M_MUN_0801,"mouseout",function(){
W_MUN_0801.close();
});
var S_MUN_0802 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">ALUBAREN, FRANCISCO MORAZAN</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[110]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[110]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[110]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[110]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_0802 = new google.maps.InfoWindow({
content: S_MUN_0802
});
google.maps.event.addListener(M_MUN_0802,"mouseover",function(){
W_MUN_0802.open(map, M_MUN_0802);
});
google.maps.event.addListener(M_MUN_0802,"mouseout",function(){
W_MUN_0802.close();
});
var S_MUN_0803 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">CEDROS, FRANCISCO MORAZAN</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[111]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[111]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[111]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[111]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_0803 = new google.maps.InfoWindow({
content: S_MUN_0803
});
google.maps.event.addListener(M_MUN_0803,"mouseover",function(){
W_MUN_0803.open(map, M_MUN_0803);
});
google.maps.event.addListener(M_MUN_0803,"mouseout",function(){
W_MUN_0803.close();
});
var S_MUN_0804 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">CURAREN, FRANCISCO MORAZAN</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[112]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[112]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[112]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[112]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_0804 = new google.maps.InfoWindow({
content: S_MUN_0804
});
google.maps.event.addListener(M_MUN_0804,"mouseover",function(){
W_MUN_0804.open(map, M_MUN_0804);
});
google.maps.event.addListener(M_MUN_0804,"mouseout",function(){
W_MUN_0804.close();
});
var S_MUN_0805 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">EL PORVENIR, FRANCISCO MORAZAN</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[113]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[113]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[113]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[113]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_0805 = new google.maps.InfoWindow({
content: S_MUN_0805
});
google.maps.event.addListener(M_MUN_0805,"mouseover",function(){
W_MUN_0805.open(map, M_MUN_0805);
});
google.maps.event.addListener(M_MUN_0805,"mouseout",function(){
W_MUN_0805.close();
});
var S_MUN_0806 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">GUAIMACA, FRANCISCO MORAZAN</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[114]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[114]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[114]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[114]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_0806 = new google.maps.InfoWindow({
content: S_MUN_0806
});
google.maps.event.addListener(M_MUN_0806,"mouseover",function(){
W_MUN_0806.open(map, M_MUN_0806);
});
google.maps.event.addListener(M_MUN_0806,"mouseout",function(){
W_MUN_0806.close();
});
var S_MUN_0807 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">LA LIBERTAD, FRANCISCO MORAZAN</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[115]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[115]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[115]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[115]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_0807 = new google.maps.InfoWindow({
content: S_MUN_0807
});
google.maps.event.addListener(M_MUN_0807,"mouseover",function(){
W_MUN_0807.open(map, M_MUN_0807);
});
google.maps.event.addListener(M_MUN_0807,"mouseout",function(){
W_MUN_0807.close();
});
var S_MUN_0808 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">LA VENTA, FRANCISCO MORAZAN</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[116]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[116]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[116]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[116]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_0808 = new google.maps.InfoWindow({
content: S_MUN_0808
});
google.maps.event.addListener(M_MUN_0808,"mouseover",function(){
W_MUN_0808.open(map, M_MUN_0808);
});
google.maps.event.addListener(M_MUN_0808,"mouseout",function(){
W_MUN_0808.close();
});
var S_MUN_0809 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">LEPATERIQUE, FRANCISCO MORAZAN</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[117]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[117]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[117]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[117]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_0809 = new google.maps.InfoWindow({
content: S_MUN_0809
});
google.maps.event.addListener(M_MUN_0809,"mouseover",function(){
W_MUN_0809.open(map, M_MUN_0809);
});
google.maps.event.addListener(M_MUN_0809,"mouseout",function(){
W_MUN_0809.close();
});
var S_MUN_0810 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">MARAITA, FRANCISCO MORAZAN</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[118]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[118]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[118]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[118]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_0810 = new google.maps.InfoWindow({
content: S_MUN_0810
});
google.maps.event.addListener(M_MUN_0810,"mouseover",function(){
W_MUN_0810.open(map, M_MUN_0810);
});
google.maps.event.addListener(M_MUN_0810,"mouseout",function(){
W_MUN_0810.close();
});
var S_MUN_0811 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">MARALE, FRANCISCO MORAZAN</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[119]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[119]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[119]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[119]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_0811 = new google.maps.InfoWindow({
content: S_MUN_0811
});
google.maps.event.addListener(M_MUN_0811,"mouseover",function(){
W_MUN_0811.open(map, M_MUN_0811);
});
google.maps.event.addListener(M_MUN_0811,"mouseout",function(){
W_MUN_0811.close();
});
var S_MUN_0812 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">NUEVA ARMENIA, FRANCISCO MORAZAN</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[120]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[120]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[120]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[120]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_0812 = new google.maps.InfoWindow({
content: S_MUN_0812
});
google.maps.event.addListener(M_MUN_0812,"mouseover",function(){
W_MUN_0812.open(map, M_MUN_0812);
});
google.maps.event.addListener(M_MUN_0812,"mouseout",function(){
W_MUN_0812.close();
});
var S_MUN_0813 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">OJOJONA, FRANCISCO MORAZAN</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[121]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[121]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[121]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[121]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_0813 = new google.maps.InfoWindow({
content: S_MUN_0813
});
google.maps.event.addListener(M_MUN_0813,"mouseover",function(){
W_MUN_0813.open(map, M_MUN_0813);
});
google.maps.event.addListener(M_MUN_0813,"mouseout",function(){
W_MUN_0813.close();
});
var S_MUN_0814 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">ORICA, FRANCISCO MORAZAN</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[122]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[122]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[122]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[122]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_0814 = new google.maps.InfoWindow({
content: S_MUN_0814
});
google.maps.event.addListener(M_MUN_0814,"mouseover",function(){
W_MUN_0814.open(map, M_MUN_0814);
});
google.maps.event.addListener(M_MUN_0814,"mouseout",function(){
W_MUN_0814.close();
});
var S_MUN_0815 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">REITOCA, FRANCISCO MORAZAN</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[123]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[123]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[123]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[123]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_0815 = new google.maps.InfoWindow({
content: S_MUN_0815
});
google.maps.event.addListener(M_MUN_0815,"mouseover",function(){
W_MUN_0815.open(map, M_MUN_0815);
});
google.maps.event.addListener(M_MUN_0815,"mouseout",function(){
W_MUN_0815.close();
});
var S_MUN_0816 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">SABANAGRANDE, FRANCISCO MORAZAN</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[124]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[124]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[124]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[124]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_0816 = new google.maps.InfoWindow({
content: S_MUN_0816
});
google.maps.event.addListener(M_MUN_0816,"mouseover",function(){
W_MUN_0816.open(map, M_MUN_0816);
});
google.maps.event.addListener(M_MUN_0816,"mouseout",function(){
W_MUN_0816.close();
});
var S_MUN_0817 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">SAN ANTONIO DE ORIENTE, FRANCISCO MORAZAN</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[125]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[125]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[125]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[125]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_0817 = new google.maps.InfoWindow({
content: S_MUN_0817
});
google.maps.event.addListener(M_MUN_0817,"mouseover",function(){
W_MUN_0817.open(map, M_MUN_0817);
});
google.maps.event.addListener(M_MUN_0817,"mouseout",function(){
W_MUN_0817.close();
});
var S_MUN_0818 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">SAN BUENAVENTURA, FRANCISCO MORAZAN</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[126]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[126]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[126]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[126]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_0818 = new google.maps.InfoWindow({
content: S_MUN_0818
});
google.maps.event.addListener(M_MUN_0818,"mouseover",function(){
W_MUN_0818.open(map, M_MUN_0818);
});
google.maps.event.addListener(M_MUN_0818,"mouseout",function(){
W_MUN_0818.close();
});
var S_MUN_0819 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">SAN IGNACIO, FRANCISCO MORAZAN</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[127]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[127]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[127]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[127]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_0819 = new google.maps.InfoWindow({
content: S_MUN_0819
});
google.maps.event.addListener(M_MUN_0819,"mouseover",function(){
W_MUN_0819.open(map, M_MUN_0819);
});
google.maps.event.addListener(M_MUN_0819,"mouseout",function(){
W_MUN_0819.close();
});
var S_MUN_0820 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">SAN JUAN DE FLORES, FRANCISCO MORAZAN</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[128]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[128]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[128]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[128]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_0820 = new google.maps.InfoWindow({
content: S_MUN_0820
});
google.maps.event.addListener(M_MUN_0820,"mouseover",function(){
W_MUN_0820.open(map, M_MUN_0820);
});
google.maps.event.addListener(M_MUN_0820,"mouseout",function(){
W_MUN_0820.close();
});
var S_MUN_0822 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">SANTA ANA, FRANCISCO MORAZAN</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[129]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[129]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[129]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[129]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_0822 = new google.maps.InfoWindow({
content: S_MUN_0822
});
google.maps.event.addListener(M_MUN_0822,"mouseover",function(){
W_MUN_0822.open(map, M_MUN_0822);
});
google.maps.event.addListener(M_MUN_0822,"mouseout",function(){
W_MUN_0822.close();
});
var S_MUN_0823 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">SANTA LUCIA, FRANCISCO MORAZAN</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[130]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[130]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[130]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[130]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_0823 = new google.maps.InfoWindow({
content: S_MUN_0823
});
google.maps.event.addListener(M_MUN_0823,"mouseover",function(){
W_MUN_0823.open(map, M_MUN_0823);
});
google.maps.event.addListener(M_MUN_0823,"mouseout",function(){
W_MUN_0823.close();
});
var S_MUN_0824 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">TALANGA, FRANCISCO MORAZAN</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[131]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[131]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[131]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[131]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_0824 = new google.maps.InfoWindow({
content: S_MUN_0824
});
google.maps.event.addListener(M_MUN_0824,"mouseover",function(){
W_MUN_0824.open(map, M_MUN_0824);
});
google.maps.event.addListener(M_MUN_0824,"mouseout",function(){
W_MUN_0824.close();
});
var S_MUN_0825 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">TATUMBLA, FRANCISCO MORAZAN</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[132]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[132]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[132]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[132]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_0825 = new google.maps.InfoWindow({
content: S_MUN_0825
});
google.maps.event.addListener(M_MUN_0825,"mouseover",function(){
W_MUN_0825.open(map, M_MUN_0825);
});
google.maps.event.addListener(M_MUN_0825,"mouseout",function(){
W_MUN_0825.close();
});
var S_MUN_0826 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">VALLE DE ANGELES, FRANCISCO MORAZAN</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[133]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[133]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[133]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[133]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_0826 = new google.maps.InfoWindow({
content: S_MUN_0826
});
google.maps.event.addListener(M_MUN_0826,"mouseover",function(){
W_MUN_0826.open(map, M_MUN_0826);
});
google.maps.event.addListener(M_MUN_0826,"mouseout",function(){
W_MUN_0826.close();
});
var S_MUN_0827 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">VILLA DE SAN FRANCISCO, FRANCISCO MORAZAN</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[134]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[134]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[134]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[134]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_0827 = new google.maps.InfoWindow({
content: S_MUN_0827
});
google.maps.event.addListener(M_MUN_0827,"mouseover",function(){
W_MUN_0827.open(map, M_MUN_0827);
});
google.maps.event.addListener(M_MUN_0827,"mouseout",function(){
W_MUN_0827.close();
});
var S_MUN_0828 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">VALLECILLO, FRANCISCO MORAZAN</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[135]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[135]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[135]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[135]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_0828 = new google.maps.InfoWindow({
content: S_MUN_0828
});
google.maps.event.addListener(M_MUN_0828,"mouseover",function(){
W_MUN_0828.open(map, M_MUN_0828);
});
google.maps.event.addListener(M_MUN_0828,"mouseout",function(){
W_MUN_0828.close();
});
var S_MUN_0901 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">PUERTO LEMPIRA, GRACIAS A DIOS</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[136]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[136]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[136]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[136]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_0901 = new google.maps.InfoWindow({
content: S_MUN_0901
});
google.maps.event.addListener(M_MUN_0901,"mouseover",function(){
W_MUN_0901.open(map, M_MUN_0901);
});
google.maps.event.addListener(M_MUN_0901,"mouseout",function(){
W_MUN_0901.close();
});
var S_MUN_0902 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">BRUS LAGUNA, GRACIAS A DIOS</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[137]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[137]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[137]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[137]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_0902 = new google.maps.InfoWindow({
content: S_MUN_0902
});
google.maps.event.addListener(M_MUN_0902,"mouseover",function(){
W_MUN_0902.open(map, M_MUN_0902);
});
google.maps.event.addListener(M_MUN_0902,"mouseout",function(){
W_MUN_0902.close();
});
var S_MUN_0903 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">AHUAS, GRACIAS A DIOS</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[138]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[138]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[138]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[138]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_0903 = new google.maps.InfoWindow({
content: S_MUN_0903
});
google.maps.event.addListener(M_MUN_0903,"mouseover",function(){
W_MUN_0903.open(map, M_MUN_0903);
});
google.maps.event.addListener(M_MUN_0903,"mouseout",function(){
W_MUN_0903.close();
});
var S_MUN_0904 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">JUAN FRANCISCO BULNES, GRACIAS A DIOS</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[139]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[139]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[139]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[139]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_0904 = new google.maps.InfoWindow({
content: S_MUN_0904
});
google.maps.event.addListener(M_MUN_0904,"mouseover",function(){
W_MUN_0904.open(map, M_MUN_0904);
});
google.maps.event.addListener(M_MUN_0904,"mouseout",function(){
W_MUN_0904.close();
});
var S_MUN_1001 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">LA ESPERANZA, INTIBUCA</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[140]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[140]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[140]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[140]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_1001 = new google.maps.InfoWindow({
content: S_MUN_1001
});
google.maps.event.addListener(M_MUN_1001,"mouseover",function(){
W_MUN_1001.open(map, M_MUN_1001);
});
google.maps.event.addListener(M_MUN_1001,"mouseout",function(){
W_MUN_1001.close();
});
var S_MUN_1002 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">CAMASCA, INTIBUCA</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[141]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[141]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[141]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[141]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_1002 = new google.maps.InfoWindow({
content: S_MUN_1002
});
google.maps.event.addListener(M_MUN_1002,"mouseover",function(){
W_MUN_1002.open(map, M_MUN_1002);
});
google.maps.event.addListener(M_MUN_1002,"mouseout",function(){
W_MUN_1002.close();
});
var S_MUN_1003 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">COLOMONCAGUA, INTIBUCA</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[142]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[142]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[142]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[142]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_1003 = new google.maps.InfoWindow({
content: S_MUN_1003
});
google.maps.event.addListener(M_MUN_1003,"mouseover",function(){
W_MUN_1003.open(map, M_MUN_1003);
});
google.maps.event.addListener(M_MUN_1003,"mouseout",function(){
W_MUN_1003.close();
});
var S_MUN_1004 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">CONCEPCION, INTIBUCA</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[143]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[143]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[143]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[143]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_1004 = new google.maps.InfoWindow({
content: S_MUN_1004
});
google.maps.event.addListener(M_MUN_1004,"mouseover",function(){
W_MUN_1004.open(map, M_MUN_1004);
});
google.maps.event.addListener(M_MUN_1004,"mouseout",function(){
W_MUN_1004.close();
});
var S_MUN_1005 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">DOLORES, INTIBUCA</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[144]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[144]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[144]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[144]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_1005 = new google.maps.InfoWindow({
content: S_MUN_1005
});
google.maps.event.addListener(M_MUN_1005,"mouseover",function(){
W_MUN_1005.open(map, M_MUN_1005);
});
google.maps.event.addListener(M_MUN_1005,"mouseout",function(){
W_MUN_1005.close();
});
var S_MUN_1006 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">INTIBUCA, INTIBUCA</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[145]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[145]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[145]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[145]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_1006 = new google.maps.InfoWindow({
content: S_MUN_1006
});
google.maps.event.addListener(M_MUN_1006,"mouseover",function(){
W_MUN_1006.open(map, M_MUN_1006);
});
google.maps.event.addListener(M_MUN_1006,"mouseout",function(){
W_MUN_1006.close();
});
var S_MUN_1007 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">JESUS DE OTORO, INTIBUCA</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[146]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[146]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[146]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[146]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_1007 = new google.maps.InfoWindow({
content: S_MUN_1007
});
google.maps.event.addListener(M_MUN_1007,"mouseover",function(){
W_MUN_1007.open(map, M_MUN_1007);
});
google.maps.event.addListener(M_MUN_1007,"mouseout",function(){
W_MUN_1007.close();
});
var S_MUN_1008 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">MAGDALENA, INTIBUCA</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[147]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[147]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[147]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[147]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_1008 = new google.maps.InfoWindow({
content: S_MUN_1008
});
google.maps.event.addListener(M_MUN_1008,"mouseover",function(){
W_MUN_1008.open(map, M_MUN_1008);
});
google.maps.event.addListener(M_MUN_1008,"mouseout",function(){
W_MUN_1008.close();
});
var S_MUN_1009 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">MASAGUARA, INTIBUCA</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[148]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[148]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[148]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[148]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_1009 = new google.maps.InfoWindow({
content: S_MUN_1009
});
google.maps.event.addListener(M_MUN_1009,"mouseover",function(){
W_MUN_1009.open(map, M_MUN_1009);
});
google.maps.event.addListener(M_MUN_1009,"mouseout",function(){
W_MUN_1009.close();
});
var S_MUN_1010 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">SAN ANTONIO, INTIBUCA</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[149]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[149]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[149]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[149]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_1010 = new google.maps.InfoWindow({
content: S_MUN_1010
});
google.maps.event.addListener(M_MUN_1010,"mouseover",function(){
W_MUN_1010.open(map, M_MUN_1010);
});
google.maps.event.addListener(M_MUN_1010,"mouseout",function(){
W_MUN_1010.close();
});
var S_MUN_1011 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">SAN ISIDRO, INTIBUCA</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[150]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[150]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[150]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[150]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_1011 = new google.maps.InfoWindow({
content: S_MUN_1011
});
google.maps.event.addListener(M_MUN_1011,"mouseover",function(){
W_MUN_1011.open(map, M_MUN_1011);
});
google.maps.event.addListener(M_MUN_1011,"mouseout",function(){
W_MUN_1011.close();
});
var S_MUN_1012 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">SAN JUAN, INTIBUCA</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[151]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[151]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[151]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[151]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_1012 = new google.maps.InfoWindow({
content: S_MUN_1012
});
google.maps.event.addListener(M_MUN_1012,"mouseover",function(){
W_MUN_1012.open(map, M_MUN_1012);
});
google.maps.event.addListener(M_MUN_1012,"mouseout",function(){
W_MUN_1012.close();
});
var S_MUN_1013 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">SAN MARCOS DE LA SIERRA, INTIBUCA</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[152]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[152]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[152]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[152]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_1013 = new google.maps.InfoWindow({
content: S_MUN_1013
});
google.maps.event.addListener(M_MUN_1013,"mouseover",function(){
W_MUN_1013.open(map, M_MUN_1013);
});
google.maps.event.addListener(M_MUN_1013,"mouseout",function(){
W_MUN_1013.close();
});
var S_MUN_1014 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">SAN MIGUEL GUANCAPLA, INTIBUCA</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[153]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[153]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[153]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[153]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_1014 = new google.maps.InfoWindow({
content: S_MUN_1014
});
google.maps.event.addListener(M_MUN_1014,"mouseover",function(){
W_MUN_1014.open(map, M_MUN_1014);
});
google.maps.event.addListener(M_MUN_1014,"mouseout",function(){
W_MUN_1014.close();
});
var S_MUN_1015 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">SANTA LUCIA, INTIBUCA</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[154]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[154]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[154]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[154]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_1015 = new google.maps.InfoWindow({
content: S_MUN_1015
});
google.maps.event.addListener(M_MUN_1015,"mouseover",function(){
W_MUN_1015.open(map, M_MUN_1015);
});
google.maps.event.addListener(M_MUN_1015,"mouseout",function(){
W_MUN_1015.close();
});
var S_MUN_1016 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">YAMARANGUILA, INTIBUCA</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[155]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[155]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[155]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[155]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_1016 = new google.maps.InfoWindow({
content: S_MUN_1016
});
google.maps.event.addListener(M_MUN_1016,"mouseover",function(){
W_MUN_1016.open(map, M_MUN_1016);
});
google.maps.event.addListener(M_MUN_1016,"mouseout",function(){
W_MUN_1016.close();
});
var S_MUN_1017 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">SAN FRANCISCO DE OPALACA, INTIBUCA</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[156]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[156]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[156]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[156]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_1017 = new google.maps.InfoWindow({
content: S_MUN_1017
});
google.maps.event.addListener(M_MUN_1017,"mouseover",function(){
W_MUN_1017.open(map, M_MUN_1017);
});
google.maps.event.addListener(M_MUN_1017,"mouseout",function(){
W_MUN_1017.close();
});
var S_MUN_1101 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">ROATAN, ISLAS DE LA BAHIA</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[157]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[157]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[157]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[157]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_1101 = new google.maps.InfoWindow({
content: S_MUN_1101
});
google.maps.event.addListener(M_MUN_1101,"mouseover",function(){
W_MUN_1101.open(map, M_MUN_1101);
});
google.maps.event.addListener(M_MUN_1101,"mouseout",function(){
W_MUN_1101.close();
});
var S_MUN_1102 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">GUANAJA, ISLAS DE LA BAHIA</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[158]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[158]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[158]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[158]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_1102 = new google.maps.InfoWindow({
content: S_MUN_1102
});
google.maps.event.addListener(M_MUN_1102,"mouseover",function(){
W_MUN_1102.open(map, M_MUN_1102);
});
google.maps.event.addListener(M_MUN_1102,"mouseout",function(){
W_MUN_1102.close();
});
var S_MUN_1103 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">JOSE SANTOS GUARDIOLA, ISLAS DE LA BAHIA</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[159]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[159]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[159]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[159]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_1103 = new google.maps.InfoWindow({
content: S_MUN_1103
});
google.maps.event.addListener(M_MUN_1103,"mouseover",function(){
W_MUN_1103.open(map, M_MUN_1103);
});
google.maps.event.addListener(M_MUN_1103,"mouseout",function(){
W_MUN_1103.close();
});
var S_MUN_1104 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">UTILA, ISLAS DE LA BAHIA</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[160]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[160]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[160]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[160]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_1104 = new google.maps.InfoWindow({
content: S_MUN_1104
});
google.maps.event.addListener(M_MUN_1104,"mouseover",function(){
W_MUN_1104.open(map, M_MUN_1104);
});
google.maps.event.addListener(M_MUN_1104,"mouseout",function(){
W_MUN_1104.close();
});
var S_MUN_1201 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">LA PAZ, LA PAZ</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[161]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[161]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[161]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[161]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_1201 = new google.maps.InfoWindow({
content: S_MUN_1201
});
google.maps.event.addListener(M_MUN_1201,"mouseover",function(){
W_MUN_1201.open(map, M_MUN_1201);
});
google.maps.event.addListener(M_MUN_1201,"mouseout",function(){
W_MUN_1201.close();
});
var S_MUN_1203 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">CABAÑAS, LA PAZ</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[162]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[162]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[162]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[162]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_1203 = new google.maps.InfoWindow({
content: S_MUN_1203
});
google.maps.event.addListener(M_MUN_1203,"mouseover",function(){
W_MUN_1203.open(map, M_MUN_1203);
});
google.maps.event.addListener(M_MUN_1203,"mouseout",function(){
W_MUN_1203.close();
});
var S_MUN_1204 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">CANE, LA PAZ</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[163]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[163]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[163]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[163]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_1204 = new google.maps.InfoWindow({
content: S_MUN_1204
});
google.maps.event.addListener(M_MUN_1204,"mouseover",function(){
W_MUN_1204.open(map, M_MUN_1204);
});
google.maps.event.addListener(M_MUN_1204,"mouseout",function(){
W_MUN_1204.close();
});
var S_MUN_1205 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">CHINACLA, LA PAZ</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[164]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[164]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[164]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[164]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_1205 = new google.maps.InfoWindow({
content: S_MUN_1205
});
google.maps.event.addListener(M_MUN_1205,"mouseover",function(){
W_MUN_1205.open(map, M_MUN_1205);
});
google.maps.event.addListener(M_MUN_1205,"mouseout",function(){
W_MUN_1205.close();
});
var S_MUN_1206 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">GUAJIQUIRO, LA PAZ</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[165]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[165]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[165]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[165]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_1206 = new google.maps.InfoWindow({
content: S_MUN_1206
});
google.maps.event.addListener(M_MUN_1206,"mouseover",function(){
W_MUN_1206.open(map, M_MUN_1206);
});
google.maps.event.addListener(M_MUN_1206,"mouseout",function(){
W_MUN_1206.close();
});
var S_MUN_1207 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">LAUTERIQUE, LA PAZ</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[166]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[166]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[166]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[166]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_1207 = new google.maps.InfoWindow({
content: S_MUN_1207
});
google.maps.event.addListener(M_MUN_1207,"mouseover",function(){
W_MUN_1207.open(map, M_MUN_1207);
});
google.maps.event.addListener(M_MUN_1207,"mouseout",function(){
W_MUN_1207.close();
});
var S_MUN_1208 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">MARCALA, LA PAZ</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[167]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[167]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[167]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[167]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_1208 = new google.maps.InfoWindow({
content: S_MUN_1208
});
google.maps.event.addListener(M_MUN_1208,"mouseover",function(){
W_MUN_1208.open(map, M_MUN_1208);
});
google.maps.event.addListener(M_MUN_1208,"mouseout",function(){
W_MUN_1208.close();
});
var S_MUN_1209 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">MERCEDES DE ORIENTE, LA PAZ</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[168]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[168]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[168]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[168]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_1209 = new google.maps.InfoWindow({
content: S_MUN_1209
});
google.maps.event.addListener(M_MUN_1209,"mouseover",function(){
W_MUN_1209.open(map, M_MUN_1209);
});
google.maps.event.addListener(M_MUN_1209,"mouseout",function(){
W_MUN_1209.close();
});
var S_MUN_1210 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">OPATORO, LA PAZ</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[169]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[169]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[169]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[169]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_1210 = new google.maps.InfoWindow({
content: S_MUN_1210
});
google.maps.event.addListener(M_MUN_1210,"mouseover",function(){
W_MUN_1210.open(map, M_MUN_1210);
});
google.maps.event.addListener(M_MUN_1210,"mouseout",function(){
W_MUN_1210.close();
});
var S_MUN_1211 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">SAN ANTONIO DEL NORTE, LA PAZ</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[170]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[170]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[170]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[170]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_1211 = new google.maps.InfoWindow({
content: S_MUN_1211
});
google.maps.event.addListener(M_MUN_1211,"mouseover",function(){
W_MUN_1211.open(map, M_MUN_1211);
});
google.maps.event.addListener(M_MUN_1211,"mouseout",function(){
W_MUN_1211.close();
});
var S_MUN_1212 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">SAN JOSE, LA PAZ</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[171]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[171]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[171]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[171]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_1212 = new google.maps.InfoWindow({
content: S_MUN_1212
});
google.maps.event.addListener(M_MUN_1212,"mouseover",function(){
W_MUN_1212.open(map, M_MUN_1212);
});
google.maps.event.addListener(M_MUN_1212,"mouseout",function(){
W_MUN_1212.close();
});
var S_MUN_1213 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">SAN JUAN, LA PAZ</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[172]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[172]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[172]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[172]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_1213 = new google.maps.InfoWindow({
content: S_MUN_1213
});
google.maps.event.addListener(M_MUN_1213,"mouseover",function(){
W_MUN_1213.open(map, M_MUN_1213);
});
google.maps.event.addListener(M_MUN_1213,"mouseout",function(){
W_MUN_1213.close();
});
var S_MUN_1214 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">SAN PEDRO DE TUTULE, LA PAZ</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[173]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[173]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[173]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[173]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_1214 = new google.maps.InfoWindow({
content: S_MUN_1214
});
google.maps.event.addListener(M_MUN_1214,"mouseover",function(){
W_MUN_1214.open(map, M_MUN_1214);
});
google.maps.event.addListener(M_MUN_1214,"mouseout",function(){
W_MUN_1214.close();
});
var S_MUN_1215 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">SANTA ANA, LA PAZ</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[174]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[174]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[174]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[174]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_1215 = new google.maps.InfoWindow({
content: S_MUN_1215
});
google.maps.event.addListener(M_MUN_1215,"mouseover",function(){
W_MUN_1215.open(map, M_MUN_1215);
});
google.maps.event.addListener(M_MUN_1215,"mouseout",function(){
W_MUN_1215.close();
});
var S_MUN_1216 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">SANTA ELENA, LA PAZ</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[175]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[175]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[175]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[175]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_1216 = new google.maps.InfoWindow({
content: S_MUN_1216
});
google.maps.event.addListener(M_MUN_1216,"mouseover",function(){
W_MUN_1216.open(map, M_MUN_1216);
});
google.maps.event.addListener(M_MUN_1216,"mouseout",function(){
W_MUN_1216.close();
});
var S_MUN_1217 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">SANTA MARIA, LA PAZ</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[176]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[176]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[176]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[176]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_1217 = new google.maps.InfoWindow({
content: S_MUN_1217
});
google.maps.event.addListener(M_MUN_1217,"mouseover",function(){
W_MUN_1217.open(map, M_MUN_1217);
});
google.maps.event.addListener(M_MUN_1217,"mouseout",function(){
W_MUN_1217.close();
});
var S_MUN_1218 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">SANTIAGO DE PURINGLA, LA PAZ</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[177]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[177]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[177]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[177]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_1218 = new google.maps.InfoWindow({
content: S_MUN_1218
});
google.maps.event.addListener(M_MUN_1218,"mouseover",function(){
W_MUN_1218.open(map, M_MUN_1218);
});
google.maps.event.addListener(M_MUN_1218,"mouseout",function(){
W_MUN_1218.close();
});
var S_MUN_1219 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">YARULA, LA PAZ</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[178]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[178]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[178]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[178]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_1219 = new google.maps.InfoWindow({
content: S_MUN_1219
});
google.maps.event.addListener(M_MUN_1219,"mouseover",function(){
W_MUN_1219.open(map, M_MUN_1219);
});
google.maps.event.addListener(M_MUN_1219,"mouseout",function(){
W_MUN_1219.close();
});
var S_MUN_1301 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">GRACIAS, LEMPIRA</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[179]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[179]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[179]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[179]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_1301 = new google.maps.InfoWindow({
content: S_MUN_1301
});
google.maps.event.addListener(M_MUN_1301,"mouseover",function(){
W_MUN_1301.open(map, M_MUN_1301);
});
google.maps.event.addListener(M_MUN_1301,"mouseout",function(){
W_MUN_1301.close();
});
var S_MUN_1302 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">BELEN, LEMPIRA</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[180]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[180]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[180]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[180]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_1302 = new google.maps.InfoWindow({
content: S_MUN_1302
});
google.maps.event.addListener(M_MUN_1302,"mouseover",function(){
W_MUN_1302.open(map, M_MUN_1302);
});
google.maps.event.addListener(M_MUN_1302,"mouseout",function(){
W_MUN_1302.close();
});
var S_MUN_1303 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">CANDELARIA, LEMPIRA</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[181]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[181]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[181]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[181]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_1303 = new google.maps.InfoWindow({
content: S_MUN_1303
});
google.maps.event.addListener(M_MUN_1303,"mouseover",function(){
W_MUN_1303.open(map, M_MUN_1303);
});
google.maps.event.addListener(M_MUN_1303,"mouseout",function(){
W_MUN_1303.close();
});
var S_MUN_1304 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">COLOLACA, LEMPIRA</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[182]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[182]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[182]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[182]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_1304 = new google.maps.InfoWindow({
content: S_MUN_1304
});
google.maps.event.addListener(M_MUN_1304,"mouseover",function(){
W_MUN_1304.open(map, M_MUN_1304);
});
google.maps.event.addListener(M_MUN_1304,"mouseout",function(){
W_MUN_1304.close();
});
var S_MUN_1305 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">ERANDIQUE, LEMPIRA</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[183]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[183]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[183]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[183]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_1305 = new google.maps.InfoWindow({
content: S_MUN_1305
});
google.maps.event.addListener(M_MUN_1305,"mouseover",function(){
W_MUN_1305.open(map, M_MUN_1305);
});
google.maps.event.addListener(M_MUN_1305,"mouseout",function(){
W_MUN_1305.close();
});
var S_MUN_1306 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">GUALCINCE, LEMPIRA</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[184]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[184]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[184]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[184]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_1306 = new google.maps.InfoWindow({
content: S_MUN_1306
});
google.maps.event.addListener(M_MUN_1306,"mouseover",function(){
W_MUN_1306.open(map, M_MUN_1306);
});
google.maps.event.addListener(M_MUN_1306,"mouseout",function(){
W_MUN_1306.close();
});
var S_MUN_1307 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">GUARITA, LEMPIRA</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[185]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[185]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[185]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[185]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_1307 = new google.maps.InfoWindow({
content: S_MUN_1307
});
google.maps.event.addListener(M_MUN_1307,"mouseover",function(){
W_MUN_1307.open(map, M_MUN_1307);
});
google.maps.event.addListener(M_MUN_1307,"mouseout",function(){
W_MUN_1307.close();
});
var S_MUN_1308 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">LA CAMPA, LEMPIRA</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[186]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[186]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[186]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[186]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_1308 = new google.maps.InfoWindow({
content: S_MUN_1308
});
google.maps.event.addListener(M_MUN_1308,"mouseover",function(){
W_MUN_1308.open(map, M_MUN_1308);
});
google.maps.event.addListener(M_MUN_1308,"mouseout",function(){
W_MUN_1308.close();
});
var S_MUN_1309 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">LA IGUALA, LEMPIRA</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[187]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[187]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[187]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[187]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_1309 = new google.maps.InfoWindow({
content: S_MUN_1309
});
google.maps.event.addListener(M_MUN_1309,"mouseover",function(){
W_MUN_1309.open(map, M_MUN_1309);
});
google.maps.event.addListener(M_MUN_1309,"mouseout",function(){
W_MUN_1309.close();
});
var S_MUN_1310 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">LAS FLORES, LEMPIRA</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[188]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[188]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[188]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[188]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_1310 = new google.maps.InfoWindow({
content: S_MUN_1310
});
google.maps.event.addListener(M_MUN_1310,"mouseover",function(){
W_MUN_1310.open(map, M_MUN_1310);
});
google.maps.event.addListener(M_MUN_1310,"mouseout",function(){
W_MUN_1310.close();
});
var S_MUN_1311 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">LA UNION, LEMPIRA</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[189]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[189]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[189]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[189]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_1311 = new google.maps.InfoWindow({
content: S_MUN_1311
});
google.maps.event.addListener(M_MUN_1311,"mouseover",function(){
W_MUN_1311.open(map, M_MUN_1311);
});
google.maps.event.addListener(M_MUN_1311,"mouseout",function(){
W_MUN_1311.close();
});
var S_MUN_1312 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">LA VIRTUD, LEMPIRA</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[190]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[190]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[190]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[190]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_1312 = new google.maps.InfoWindow({
content: S_MUN_1312
});
google.maps.event.addListener(M_MUN_1312,"mouseover",function(){
W_MUN_1312.open(map, M_MUN_1312);
});
google.maps.event.addListener(M_MUN_1312,"mouseout",function(){
W_MUN_1312.close();
});
var S_MUN_1313 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">LEPAERA, LEMPIRA</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[191]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[191]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[191]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[191]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_1313 = new google.maps.InfoWindow({
content: S_MUN_1313
});
google.maps.event.addListener(M_MUN_1313,"mouseover",function(){
W_MUN_1313.open(map, M_MUN_1313);
});
google.maps.event.addListener(M_MUN_1313,"mouseout",function(){
W_MUN_1313.close();
});
var S_MUN_1314 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">MAPULACA, LEMPIRA</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[192]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[192]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[192]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[192]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_1314 = new google.maps.InfoWindow({
content: S_MUN_1314
});
google.maps.event.addListener(M_MUN_1314,"mouseover",function(){
W_MUN_1314.open(map, M_MUN_1314);
});
google.maps.event.addListener(M_MUN_1314,"mouseout",function(){
W_MUN_1314.close();
});
var S_MUN_1315 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">PIRAERA, LEMPIRA</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[193]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[193]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[193]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[193]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_1315 = new google.maps.InfoWindow({
content: S_MUN_1315
});
google.maps.event.addListener(M_MUN_1315,"mouseover",function(){
W_MUN_1315.open(map, M_MUN_1315);
});
google.maps.event.addListener(M_MUN_1315,"mouseout",function(){
W_MUN_1315.close();
});
var S_MUN_1316 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">SAN ANDRES, LEMPIRA</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[194]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[194]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[194]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[194]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_1316 = new google.maps.InfoWindow({
content: S_MUN_1316
});
google.maps.event.addListener(M_MUN_1316,"mouseover",function(){
W_MUN_1316.open(map, M_MUN_1316);
});
google.maps.event.addListener(M_MUN_1316,"mouseout",function(){
W_MUN_1316.close();
});
var S_MUN_1317 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">SAN FRANCISCO, LEMPIRA</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[195]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[195]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[195]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[195]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_1317 = new google.maps.InfoWindow({
content: S_MUN_1317
});
google.maps.event.addListener(M_MUN_1317,"mouseover",function(){
W_MUN_1317.open(map, M_MUN_1317);
});
google.maps.event.addListener(M_MUN_1317,"mouseout",function(){
W_MUN_1317.close();
});
var S_MUN_1318 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">SAN JUAN GUARITA, LEMPIRA</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[196]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[196]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[196]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[196]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_1318 = new google.maps.InfoWindow({
content: S_MUN_1318
});
google.maps.event.addListener(M_MUN_1318,"mouseover",function(){
W_MUN_1318.open(map, M_MUN_1318);
});
google.maps.event.addListener(M_MUN_1318,"mouseout",function(){
W_MUN_1318.close();
});
var S_MUN_1319 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">SAN MANUEL DE COLOHETE, LEMPIRA</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[197]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[197]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[197]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[197]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_1319 = new google.maps.InfoWindow({
content: S_MUN_1319
});
google.maps.event.addListener(M_MUN_1319,"mouseover",function(){
W_MUN_1319.open(map, M_MUN_1319);
});
google.maps.event.addListener(M_MUN_1319,"mouseout",function(){
W_MUN_1319.close();
});
var S_MUN_1320 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">SAN RAFAEL, LEMPIRA</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[198]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[198]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[198]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[198]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_1320 = new google.maps.InfoWindow({
content: S_MUN_1320
});
google.maps.event.addListener(M_MUN_1320,"mouseover",function(){
W_MUN_1320.open(map, M_MUN_1320);
});
google.maps.event.addListener(M_MUN_1320,"mouseout",function(){
W_MUN_1320.close();
});
var S_MUN_1321 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">SAN SEBASTIAN, LEMPIRA</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[199]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[199]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[199]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[199]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_1321 = new google.maps.InfoWindow({
content: S_MUN_1321
});
google.maps.event.addListener(M_MUN_1321,"mouseover",function(){
W_MUN_1321.open(map, M_MUN_1321);
});
google.maps.event.addListener(M_MUN_1321,"mouseout",function(){
W_MUN_1321.close();
});
var S_MUN_1322 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">SANTA CRUZ, LEMPIRA</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[200]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[200]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[200]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[200]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_1322 = new google.maps.InfoWindow({
content: S_MUN_1322
});
google.maps.event.addListener(M_MUN_1322,"mouseover",function(){
W_MUN_1322.open(map, M_MUN_1322);
});
google.maps.event.addListener(M_MUN_1322,"mouseout",function(){
W_MUN_1322.close();
});
var S_MUN_1323 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">TALGUA, LEMPIRA</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[201]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[201]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[201]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[201]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_1323 = new google.maps.InfoWindow({
content: S_MUN_1323
});
google.maps.event.addListener(M_MUN_1323,"mouseover",function(){
W_MUN_1323.open(map, M_MUN_1323);
});
google.maps.event.addListener(M_MUN_1323,"mouseout",function(){
W_MUN_1323.close();
});
var S_MUN_1324 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">TAMBLA, LEMPIRA</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[202]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[202]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[202]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[202]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_1324 = new google.maps.InfoWindow({
content: S_MUN_1324
});
google.maps.event.addListener(M_MUN_1324,"mouseover",function(){
W_MUN_1324.open(map, M_MUN_1324);
});
google.maps.event.addListener(M_MUN_1324,"mouseout",function(){
W_MUN_1324.close();
});
var S_MUN_1325 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">TOMALA, LEMPIRA</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[203]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[203]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[203]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[203]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_1325 = new google.maps.InfoWindow({
content: S_MUN_1325
});
google.maps.event.addListener(M_MUN_1325,"mouseover",function(){
W_MUN_1325.open(map, M_MUN_1325);
});
google.maps.event.addListener(M_MUN_1325,"mouseout",function(){
W_MUN_1325.close();
});
var S_MUN_1326 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">VALLADOLID, LEMPIRA</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[204]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[204]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[204]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[204]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_1326 = new google.maps.InfoWindow({
content: S_MUN_1326
});
google.maps.event.addListener(M_MUN_1326,"mouseover",function(){
W_MUN_1326.open(map, M_MUN_1326);
});
google.maps.event.addListener(M_MUN_1326,"mouseout",function(){
W_MUN_1326.close();
});
var S_MUN_1327 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">VIRGINIA, LEMPIRA</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[205]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[205]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[205]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[205]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_1327 = new google.maps.InfoWindow({
content: S_MUN_1327
});
google.maps.event.addListener(M_MUN_1327,"mouseover",function(){
W_MUN_1327.open(map, M_MUN_1327);
});
google.maps.event.addListener(M_MUN_1327,"mouseout",function(){
W_MUN_1327.close();
});
var S_MUN_1328 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">SAN MARCOS DE CAIQUIN, LEMPIRA</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[206]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[206]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[206]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[206]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_1328 = new google.maps.InfoWindow({
content: S_MUN_1328
});
google.maps.event.addListener(M_MUN_1328,"mouseover",function(){
W_MUN_1328.open(map, M_MUN_1328);
});
google.maps.event.addListener(M_MUN_1328,"mouseout",function(){
W_MUN_1328.close();
});
var S_MUN_1401 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">OCOTEPEQUE, OCOTEPEQUE</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[207]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[207]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[207]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[207]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_1401 = new google.maps.InfoWindow({
content: S_MUN_1401
});
google.maps.event.addListener(M_MUN_1401,"mouseover",function(){
W_MUN_1401.open(map, M_MUN_1401);
});
google.maps.event.addListener(M_MUN_1401,"mouseout",function(){
W_MUN_1401.close();
});
var S_MUN_1402 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">BELEN GUALCHO, OCOTEPEQUE</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[208]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[208]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[208]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[208]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_1402 = new google.maps.InfoWindow({
content: S_MUN_1402
});
google.maps.event.addListener(M_MUN_1402,"mouseover",function(){
W_MUN_1402.open(map, M_MUN_1402);
});
google.maps.event.addListener(M_MUN_1402,"mouseout",function(){
W_MUN_1402.close();
});
var S_MUN_1403 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">CONCEPCION, OCOTEPEQUE</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[209]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[209]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[209]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[209]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_1403 = new google.maps.InfoWindow({
content: S_MUN_1403
});
google.maps.event.addListener(M_MUN_1403,"mouseover",function(){
W_MUN_1403.open(map, M_MUN_1403);
});
google.maps.event.addListener(M_MUN_1403,"mouseout",function(){
W_MUN_1403.close();
});
var S_MUN_1404 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">DOLORES MERENDON, OCOTEPEQUE</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[210]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[210]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[210]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[210]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_1404 = new google.maps.InfoWindow({
content: S_MUN_1404
});
google.maps.event.addListener(M_MUN_1404,"mouseover",function(){
W_MUN_1404.open(map, M_MUN_1404);
});
google.maps.event.addListener(M_MUN_1404,"mouseout",function(){
W_MUN_1404.close();
});
var S_MUN_1405 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">FRATERNIDAD, OCOTEPEQUE</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[211]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[211]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[211]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[211]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_1405 = new google.maps.InfoWindow({
content: S_MUN_1405
});
google.maps.event.addListener(M_MUN_1405,"mouseover",function(){
W_MUN_1405.open(map, M_MUN_1405);
});
google.maps.event.addListener(M_MUN_1405,"mouseout",function(){
W_MUN_1405.close();
});
var S_MUN_1406 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">LA ENCARNACION, OCOTEPEQUE</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[212]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[212]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[212]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[212]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_1406 = new google.maps.InfoWindow({
content: S_MUN_1406
});
google.maps.event.addListener(M_MUN_1406,"mouseover",function(){
W_MUN_1406.open(map, M_MUN_1406);
});
google.maps.event.addListener(M_MUN_1406,"mouseout",function(){
W_MUN_1406.close();
});
var S_MUN_1407 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">LA LABOR, OCOTEPEQUE</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[213]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[213]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[213]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[213]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_1407 = new google.maps.InfoWindow({
content: S_MUN_1407
});
google.maps.event.addListener(M_MUN_1407,"mouseover",function(){
W_MUN_1407.open(map, M_MUN_1407);
});
google.maps.event.addListener(M_MUN_1407,"mouseout",function(){
W_MUN_1407.close();
});
var S_MUN_1408 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">LUCERNA, OCOTEPEQUE</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[214]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[214]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[214]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[214]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_1408 = new google.maps.InfoWindow({
content: S_MUN_1408
});
google.maps.event.addListener(M_MUN_1408,"mouseover",function(){
W_MUN_1408.open(map, M_MUN_1408);
});
google.maps.event.addListener(M_MUN_1408,"mouseout",function(){
W_MUN_1408.close();
});
var S_MUN_1409 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">MERCEDES, OCOTEPEQUE</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[215]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[215]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[215]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[215]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_1409 = new google.maps.InfoWindow({
content: S_MUN_1409
});
google.maps.event.addListener(M_MUN_1409,"mouseover",function(){
W_MUN_1409.open(map, M_MUN_1409);
});
google.maps.event.addListener(M_MUN_1409,"mouseout",function(){
W_MUN_1409.close();
});
var S_MUN_1410 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">SAN FERNANDO, OCOTEPEQUE</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[216]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[216]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[216]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[216]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_1410 = new google.maps.InfoWindow({
content: S_MUN_1410
});
google.maps.event.addListener(M_MUN_1410,"mouseover",function(){
W_MUN_1410.open(map, M_MUN_1410);
});
google.maps.event.addListener(M_MUN_1410,"mouseout",function(){
W_MUN_1410.close();
});
var S_MUN_1411 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">SAN FRANCISCO DEL VALLE, OCOTEPEQUE</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[217]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[217]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[217]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[217]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_1411 = new google.maps.InfoWindow({
content: S_MUN_1411
});
google.maps.event.addListener(M_MUN_1411,"mouseover",function(){
W_MUN_1411.open(map, M_MUN_1411);
});
google.maps.event.addListener(M_MUN_1411,"mouseout",function(){
W_MUN_1411.close();
});
var S_MUN_1412 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">SAN JORGE, OCOTEPEQUE</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[218]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[218]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[218]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[218]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_1412 = new google.maps.InfoWindow({
content: S_MUN_1412
});
google.maps.event.addListener(M_MUN_1412,"mouseover",function(){
W_MUN_1412.open(map, M_MUN_1412);
});
google.maps.event.addListener(M_MUN_1412,"mouseout",function(){
W_MUN_1412.close();
});
var S_MUN_1414 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">SANTA FE, OCOTEPEQUE</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[219]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[219]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[219]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[219]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_1414 = new google.maps.InfoWindow({
content: S_MUN_1414
});
google.maps.event.addListener(M_MUN_1414,"mouseover",function(){
W_MUN_1414.open(map, M_MUN_1414);
});
google.maps.event.addListener(M_MUN_1414,"mouseout",function(){
W_MUN_1414.close();
});
var S_MUN_1415 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">SENSENTI, OCOTEPEQUE</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[220]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[220]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[220]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[220]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_1415 = new google.maps.InfoWindow({
content: S_MUN_1415
});
google.maps.event.addListener(M_MUN_1415,"mouseover",function(){
W_MUN_1415.open(map, M_MUN_1415);
});
google.maps.event.addListener(M_MUN_1415,"mouseout",function(){
W_MUN_1415.close();
});
var S_MUN_1416 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">SINUAPA, OCOTEPEQUE</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[221]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[221]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[221]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[221]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_1416 = new google.maps.InfoWindow({
content: S_MUN_1416
});
google.maps.event.addListener(M_MUN_1416,"mouseover",function(){
W_MUN_1416.open(map, M_MUN_1416);
});
google.maps.event.addListener(M_MUN_1416,"mouseout",function(){
W_MUN_1416.close();
});
var S_MUN_1501 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">JUTICALPA, OLANCHO</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[222]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[222]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[222]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[222]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_1501 = new google.maps.InfoWindow({
content: S_MUN_1501
});
google.maps.event.addListener(M_MUN_1501,"mouseover",function(){
W_MUN_1501.open(map, M_MUN_1501);
});
google.maps.event.addListener(M_MUN_1501,"mouseout",function(){
W_MUN_1501.close();
});
var S_MUN_1502 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">CAMPAMENTO, OLANCHO</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[223]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[223]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[223]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[223]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_1502 = new google.maps.InfoWindow({
content: S_MUN_1502
});
google.maps.event.addListener(M_MUN_1502,"mouseover",function(){
W_MUN_1502.open(map, M_MUN_1502);
});
google.maps.event.addListener(M_MUN_1502,"mouseout",function(){
W_MUN_1502.close();
});
var S_MUN_1503 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">CATACAMAS, OLANCHO</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[224]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[224]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[224]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[224]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_1503 = new google.maps.InfoWindow({
content: S_MUN_1503
});
google.maps.event.addListener(M_MUN_1503,"mouseover",function(){
W_MUN_1503.open(map, M_MUN_1503);
});
google.maps.event.addListener(M_MUN_1503,"mouseout",function(){
W_MUN_1503.close();
});
var S_MUN_1504 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">CONCORDIA, OLANCHO</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[225]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[225]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[225]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[225]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_1504 = new google.maps.InfoWindow({
content: S_MUN_1504
});
google.maps.event.addListener(M_MUN_1504,"mouseover",function(){
W_MUN_1504.open(map, M_MUN_1504);
});
google.maps.event.addListener(M_MUN_1504,"mouseout",function(){
W_MUN_1504.close();
});
var S_MUN_1505 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">DULCE NOMBRE DE CULMI, OLANCHO</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[226]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[226]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[226]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[226]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_1505 = new google.maps.InfoWindow({
content: S_MUN_1505
});
google.maps.event.addListener(M_MUN_1505,"mouseover",function(){
W_MUN_1505.open(map, M_MUN_1505);
});
google.maps.event.addListener(M_MUN_1505,"mouseout",function(){
W_MUN_1505.close();
});
var S_MUN_1506 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">EL ROSARIO, OLANCHO</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[227]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[227]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[227]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[227]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_1506 = new google.maps.InfoWindow({
content: S_MUN_1506
});
google.maps.event.addListener(M_MUN_1506,"mouseover",function(){
W_MUN_1506.open(map, M_MUN_1506);
});
google.maps.event.addListener(M_MUN_1506,"mouseout",function(){
W_MUN_1506.close();
});
var S_MUN_1507 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">ESQUIPULAS DEL NORTE, OLANCHO</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[228]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[228]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[228]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[228]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_1507 = new google.maps.InfoWindow({
content: S_MUN_1507
});
google.maps.event.addListener(M_MUN_1507,"mouseover",function(){
W_MUN_1507.open(map, M_MUN_1507);
});
google.maps.event.addListener(M_MUN_1507,"mouseout",function(){
W_MUN_1507.close();
});
var S_MUN_1508 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">GUALACO, OLANCHO</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[229]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[229]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[229]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[229]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_1508 = new google.maps.InfoWindow({
content: S_MUN_1508
});
google.maps.event.addListener(M_MUN_1508,"mouseover",function(){
W_MUN_1508.open(map, M_MUN_1508);
});
google.maps.event.addListener(M_MUN_1508,"mouseout",function(){
W_MUN_1508.close();
});
var S_MUN_1509 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">GUARIZAMA, OLANCHO</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[230]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[230]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[230]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[230]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_1509 = new google.maps.InfoWindow({
content: S_MUN_1509
});
google.maps.event.addListener(M_MUN_1509,"mouseover",function(){
W_MUN_1509.open(map, M_MUN_1509);
});
google.maps.event.addListener(M_MUN_1509,"mouseout",function(){
W_MUN_1509.close();
});
var S_MUN_1510 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">GUATA, OLANCHO</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[231]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[231]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[231]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[231]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_1510 = new google.maps.InfoWindow({
content: S_MUN_1510
});
google.maps.event.addListener(M_MUN_1510,"mouseover",function(){
W_MUN_1510.open(map, M_MUN_1510);
});
google.maps.event.addListener(M_MUN_1510,"mouseout",function(){
W_MUN_1510.close();
});
var S_MUN_1511 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">GUAYAPE, OLANCHO</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[232]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[232]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[232]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[232]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_1511 = new google.maps.InfoWindow({
content: S_MUN_1511
});
google.maps.event.addListener(M_MUN_1511,"mouseover",function(){
W_MUN_1511.open(map, M_MUN_1511);
});
google.maps.event.addListener(M_MUN_1511,"mouseout",function(){
W_MUN_1511.close();
});
var S_MUN_1512 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">JANO, OLANCHO</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[233]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[233]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[233]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[233]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_1512 = new google.maps.InfoWindow({
content: S_MUN_1512
});
google.maps.event.addListener(M_MUN_1512,"mouseover",function(){
W_MUN_1512.open(map, M_MUN_1512);
});
google.maps.event.addListener(M_MUN_1512,"mouseout",function(){
W_MUN_1512.close();
});
var S_MUN_1513 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">LA UNION, OLANCHO</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[234]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[234]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[234]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[234]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_1513 = new google.maps.InfoWindow({
content: S_MUN_1513
});
google.maps.event.addListener(M_MUN_1513,"mouseover",function(){
W_MUN_1513.open(map, M_MUN_1513);
});
google.maps.event.addListener(M_MUN_1513,"mouseout",function(){
W_MUN_1513.close();
});
var S_MUN_1514 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">MANGULILE, OLANCHO</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[235]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[235]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[235]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[235]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_1514 = new google.maps.InfoWindow({
content: S_MUN_1514
});
google.maps.event.addListener(M_MUN_1514,"mouseover",function(){
W_MUN_1514.open(map, M_MUN_1514);
});
google.maps.event.addListener(M_MUN_1514,"mouseout",function(){
W_MUN_1514.close();
});
var S_MUN_1515 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">MANTO, OLANCHO</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[236]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[236]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[236]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[236]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_1515 = new google.maps.InfoWindow({
content: S_MUN_1515
});
google.maps.event.addListener(M_MUN_1515,"mouseover",function(){
W_MUN_1515.open(map, M_MUN_1515);
});
google.maps.event.addListener(M_MUN_1515,"mouseout",function(){
W_MUN_1515.close();
});
var S_MUN_1516 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">SALAMA, OLANCHO</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[237]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[237]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[237]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[237]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_1516 = new google.maps.InfoWindow({
content: S_MUN_1516
});
google.maps.event.addListener(M_MUN_1516,"mouseover",function(){
W_MUN_1516.open(map, M_MUN_1516);
});
google.maps.event.addListener(M_MUN_1516,"mouseout",function(){
W_MUN_1516.close();
});
var S_MUN_1517 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">SAN ESTEBAN, OLANCHO</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[238]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[238]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[238]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[238]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_1517 = new google.maps.InfoWindow({
content: S_MUN_1517
});
google.maps.event.addListener(M_MUN_1517,"mouseover",function(){
W_MUN_1517.open(map, M_MUN_1517);
});
google.maps.event.addListener(M_MUN_1517,"mouseout",function(){
W_MUN_1517.close();
});
var S_MUN_1518 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">SAN FRANCISCO DE BECERRA, OLANCHO</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[239]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[239]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[239]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[239]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_1518 = new google.maps.InfoWindow({
content: S_MUN_1518
});
google.maps.event.addListener(M_MUN_1518,"mouseover",function(){
W_MUN_1518.open(map, M_MUN_1518);
});
google.maps.event.addListener(M_MUN_1518,"mouseout",function(){
W_MUN_1518.close();
});
var S_MUN_1519 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">SAN FRANCISCO DE LA PAZ, OLANCHO</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[240]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[240]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[240]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[240]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_1519 = new google.maps.InfoWindow({
content: S_MUN_1519
});
google.maps.event.addListener(M_MUN_1519,"mouseover",function(){
W_MUN_1519.open(map, M_MUN_1519);
});
google.maps.event.addListener(M_MUN_1519,"mouseout",function(){
W_MUN_1519.close();
});
var S_MUN_1520 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">SANTA MARIA DEL REAL, OLANCHO</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[241]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[241]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[241]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[241]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_1520 = new google.maps.InfoWindow({
content: S_MUN_1520
});
google.maps.event.addListener(M_MUN_1520,"mouseover",function(){
W_MUN_1520.open(map, M_MUN_1520);
});
google.maps.event.addListener(M_MUN_1520,"mouseout",function(){
W_MUN_1520.close();
});
var S_MUN_1521 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">SILCA, OLANCHO</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[242]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[242]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[242]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[242]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_1521 = new google.maps.InfoWindow({
content: S_MUN_1521
});
google.maps.event.addListener(M_MUN_1521,"mouseover",function(){
W_MUN_1521.open(map, M_MUN_1521);
});
google.maps.event.addListener(M_MUN_1521,"mouseout",function(){
W_MUN_1521.close();
});
var S_MUN_1522 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">YOCON, OLANCHO</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[243]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[243]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[243]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[243]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_1522 = new google.maps.InfoWindow({
content: S_MUN_1522
});
google.maps.event.addListener(M_MUN_1522,"mouseover",function(){
W_MUN_1522.open(map, M_MUN_1522);
});
google.maps.event.addListener(M_MUN_1522,"mouseout",function(){
W_MUN_1522.close();
});
var S_MUN_1523 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">PATUCA, OLANCHO</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[244]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[244]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[244]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[244]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_1523 = new google.maps.InfoWindow({
content: S_MUN_1523
});
google.maps.event.addListener(M_MUN_1523,"mouseover",function(){
W_MUN_1523.open(map, M_MUN_1523);
});
google.maps.event.addListener(M_MUN_1523,"mouseout",function(){
W_MUN_1523.close();
});
var S_MUN_1601 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">SANTA BARBARA, SANTA BARBARA</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[245]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[245]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[245]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[245]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_1601 = new google.maps.InfoWindow({
content: S_MUN_1601
});
google.maps.event.addListener(M_MUN_1601,"mouseover",function(){
W_MUN_1601.open(map, M_MUN_1601);
});
google.maps.event.addListener(M_MUN_1601,"mouseout",function(){
W_MUN_1601.close();
});
var S_MUN_1602 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">ARADA, SANTA BARBARA</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[246]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[246]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[246]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[246]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_1602 = new google.maps.InfoWindow({
content: S_MUN_1602
});
google.maps.event.addListener(M_MUN_1602,"mouseover",function(){
W_MUN_1602.open(map, M_MUN_1602);
});
google.maps.event.addListener(M_MUN_1602,"mouseout",function(){
W_MUN_1602.close();
});
var S_MUN_1603 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">ATIMA, SANTA BARBARA</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[247]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[247]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[247]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[247]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_1603 = new google.maps.InfoWindow({
content: S_MUN_1603
});
google.maps.event.addListener(M_MUN_1603,"mouseover",function(){
W_MUN_1603.open(map, M_MUN_1603);
});
google.maps.event.addListener(M_MUN_1603,"mouseout",function(){
W_MUN_1603.close();
});
var S_MUN_1604 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">AZACUALPA, SANTA BARBARA</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[248]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[248]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[248]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[248]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_1604 = new google.maps.InfoWindow({
content: S_MUN_1604
});
google.maps.event.addListener(M_MUN_1604,"mouseover",function(){
W_MUN_1604.open(map, M_MUN_1604);
});
google.maps.event.addListener(M_MUN_1604,"mouseout",function(){
W_MUN_1604.close();
});
var S_MUN_1605 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">CEGUACA, SANTA BARBARA</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[249]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[249]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[249]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[249]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_1605 = new google.maps.InfoWindow({
content: S_MUN_1605
});
google.maps.event.addListener(M_MUN_1605,"mouseover",function(){
W_MUN_1605.open(map, M_MUN_1605);
});
google.maps.event.addListener(M_MUN_1605,"mouseout",function(){
W_MUN_1605.close();
});
var S_MUN_1606 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">SAN JOSE DE COLINAS, SANTA BARBARA</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[250]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[250]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[250]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[250]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_1606 = new google.maps.InfoWindow({
content: S_MUN_1606
});
google.maps.event.addListener(M_MUN_1606,"mouseover",function(){
W_MUN_1606.open(map, M_MUN_1606);
});
google.maps.event.addListener(M_MUN_1606,"mouseout",function(){
W_MUN_1606.close();
});
var S_MUN_1607 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">CONCEPCION DEL NORTE, SANTA BARBARA</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[251]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[251]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[251]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[251]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_1607 = new google.maps.InfoWindow({
content: S_MUN_1607
});
google.maps.event.addListener(M_MUN_1607,"mouseover",function(){
W_MUN_1607.open(map, M_MUN_1607);
});
google.maps.event.addListener(M_MUN_1607,"mouseout",function(){
W_MUN_1607.close();
});
var S_MUN_1608 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">CONCEPCION DEL SUR, SANTA BARBARA</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[252]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[252]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[252]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[252]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_1608 = new google.maps.InfoWindow({
content: S_MUN_1608
});
google.maps.event.addListener(M_MUN_1608,"mouseover",function(){
W_MUN_1608.open(map, M_MUN_1608);
});
google.maps.event.addListener(M_MUN_1608,"mouseout",function(){
W_MUN_1608.close();
});
var S_MUN_1609 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">CHINDA, SANTA BARBARA</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[253]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[253]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[253]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[253]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_1609 = new google.maps.InfoWindow({
content: S_MUN_1609
});
google.maps.event.addListener(M_MUN_1609,"mouseover",function(){
W_MUN_1609.open(map, M_MUN_1609);
});
google.maps.event.addListener(M_MUN_1609,"mouseout",function(){
W_MUN_1609.close();
});
var S_MUN_1610 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">EL NISPERO, SANTA BARBARA</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[254]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[254]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[254]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[254]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_1610 = new google.maps.InfoWindow({
content: S_MUN_1610
});
google.maps.event.addListener(M_MUN_1610,"mouseover",function(){
W_MUN_1610.open(map, M_MUN_1610);
});
google.maps.event.addListener(M_MUN_1610,"mouseout",function(){
W_MUN_1610.close();
});
var S_MUN_1611 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">GUALALA, SANTA BARBARA</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[255]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[255]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[255]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[255]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_1611 = new google.maps.InfoWindow({
content: S_MUN_1611
});
google.maps.event.addListener(M_MUN_1611,"mouseover",function(){
W_MUN_1611.open(map, M_MUN_1611);
});
google.maps.event.addListener(M_MUN_1611,"mouseout",function(){
W_MUN_1611.close();
});
var S_MUN_1612 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">ILAMA, SANTA BARBARA</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[256]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[256]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[256]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[256]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_1612 = new google.maps.InfoWindow({
content: S_MUN_1612
});
google.maps.event.addListener(M_MUN_1612,"mouseover",function(){
W_MUN_1612.open(map, M_MUN_1612);
});
google.maps.event.addListener(M_MUN_1612,"mouseout",function(){
W_MUN_1612.close();
});
var S_MUN_1613 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">MACUELIZO, SANTA BARBARA</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[257]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[257]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[257]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[257]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_1613 = new google.maps.InfoWindow({
content: S_MUN_1613
});
google.maps.event.addListener(M_MUN_1613,"mouseover",function(){
W_MUN_1613.open(map, M_MUN_1613);
});
google.maps.event.addListener(M_MUN_1613,"mouseout",function(){
W_MUN_1613.close();
});
var S_MUN_1614 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">NARANJITO, SANTA BARBARA</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[258]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[258]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[258]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[258]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_1614 = new google.maps.InfoWindow({
content: S_MUN_1614
});
google.maps.event.addListener(M_MUN_1614,"mouseover",function(){
W_MUN_1614.open(map, M_MUN_1614);
});
google.maps.event.addListener(M_MUN_1614,"mouseout",function(){
W_MUN_1614.close();
});
var S_MUN_1615 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">NUEVO CELILAC, SANTA BARBARA</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[259]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[259]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[259]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[259]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_1615 = new google.maps.InfoWindow({
content: S_MUN_1615
});
google.maps.event.addListener(M_MUN_1615,"mouseover",function(){
W_MUN_1615.open(map, M_MUN_1615);
});
google.maps.event.addListener(M_MUN_1615,"mouseout",function(){
W_MUN_1615.close();
});
var S_MUN_1616 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">PETOA, SANTA BARBARA</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[260]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[260]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[260]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[260]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_1616 = new google.maps.InfoWindow({
content: S_MUN_1616
});
google.maps.event.addListener(M_MUN_1616,"mouseover",function(){
W_MUN_1616.open(map, M_MUN_1616);
});
google.maps.event.addListener(M_MUN_1616,"mouseout",function(){
W_MUN_1616.close();
});
var S_MUN_1617 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">PROTECCION, SANTA BARBARA</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[261]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[261]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[261]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[261]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_1617 = new google.maps.InfoWindow({
content: S_MUN_1617
});
google.maps.event.addListener(M_MUN_1617,"mouseover",function(){
W_MUN_1617.open(map, M_MUN_1617);
});
google.maps.event.addListener(M_MUN_1617,"mouseout",function(){
W_MUN_1617.close();
});
var S_MUN_1618 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">QUIMISTAN, SANTA BARBARA</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[262]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[262]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[262]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[262]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_1618 = new google.maps.InfoWindow({
content: S_MUN_1618
});
google.maps.event.addListener(M_MUN_1618,"mouseover",function(){
W_MUN_1618.open(map, M_MUN_1618);
});
google.maps.event.addListener(M_MUN_1618,"mouseout",function(){
W_MUN_1618.close();
});
var S_MUN_1619 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">SAN FRANCISCO DE OJUERA, SANTA BARBARA</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[263]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[263]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[263]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[263]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_1619 = new google.maps.InfoWindow({
content: S_MUN_1619
});
google.maps.event.addListener(M_MUN_1619,"mouseover",function(){
W_MUN_1619.open(map, M_MUN_1619);
});
google.maps.event.addListener(M_MUN_1619,"mouseout",function(){
W_MUN_1619.close();
});
var S_MUN_1620 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">SAN LUIS, SANTA BARBARA</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[264]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[264]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[264]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[264]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_1620 = new google.maps.InfoWindow({
content: S_MUN_1620
});
google.maps.event.addListener(M_MUN_1620,"mouseover",function(){
W_MUN_1620.open(map, M_MUN_1620);
});
google.maps.event.addListener(M_MUN_1620,"mouseout",function(){
W_MUN_1620.close();
});
var S_MUN_1621 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">SAN MARCOS, SANTA BARBARA</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[265]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[265]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[265]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[265]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_1621 = new google.maps.InfoWindow({
content: S_MUN_1621
});
google.maps.event.addListener(M_MUN_1621,"mouseover",function(){
W_MUN_1621.open(map, M_MUN_1621);
});
google.maps.event.addListener(M_MUN_1621,"mouseout",function(){
W_MUN_1621.close();
});
var S_MUN_1622 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">SAN NICOLAS, SANTA BARBARA</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[266]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[266]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[266]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[266]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_1622 = new google.maps.InfoWindow({
content: S_MUN_1622
});
google.maps.event.addListener(M_MUN_1622,"mouseover",function(){
W_MUN_1622.open(map, M_MUN_1622);
});
google.maps.event.addListener(M_MUN_1622,"mouseout",function(){
W_MUN_1622.close();
});
var S_MUN_1624 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">SANTA RITA, SANTA BARBARA</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[267]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[267]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[267]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[267]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_1624 = new google.maps.InfoWindow({
content: S_MUN_1624
});
google.maps.event.addListener(M_MUN_1624,"mouseover",function(){
W_MUN_1624.open(map, M_MUN_1624);
});
google.maps.event.addListener(M_MUN_1624,"mouseout",function(){
W_MUN_1624.close();
});
var S_MUN_1625 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">SAN VICENTE CENTENARIO, SANTA BARBARA</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[268]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[268]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[268]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[268]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_1625 = new google.maps.InfoWindow({
content: S_MUN_1625
});
google.maps.event.addListener(M_MUN_1625,"mouseover",function(){
W_MUN_1625.open(map, M_MUN_1625);
});
google.maps.event.addListener(M_MUN_1625,"mouseout",function(){
W_MUN_1625.close();
});
var S_MUN_1626 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">TRINIDAD, SANTA BARBARA</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[269]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[269]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[269]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[269]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_1626 = new google.maps.InfoWindow({
content: S_MUN_1626
});
google.maps.event.addListener(M_MUN_1626,"mouseover",function(){
W_MUN_1626.open(map, M_MUN_1626);
});
google.maps.event.addListener(M_MUN_1626,"mouseout",function(){
W_MUN_1626.close();
});
var S_MUN_1627 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">LAS VEGAS, SANTA BARBARA</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[270]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[270]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[270]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[270]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_1627 = new google.maps.InfoWindow({
content: S_MUN_1627
});
google.maps.event.addListener(M_MUN_1627,"mouseover",function(){
W_MUN_1627.open(map, M_MUN_1627);
});
google.maps.event.addListener(M_MUN_1627,"mouseout",function(){
W_MUN_1627.close();
});
var S_MUN_1628 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">NUEVA FRONTERA, SANTA BARBARA</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[271]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[271]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[271]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[271]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_1628 = new google.maps.InfoWindow({
content: S_MUN_1628
});
google.maps.event.addListener(M_MUN_1628,"mouseover",function(){
W_MUN_1628.open(map, M_MUN_1628);
});
google.maps.event.addListener(M_MUN_1628,"mouseout",function(){
W_MUN_1628.close();
});
var S_MUN_1701 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">NACAOME, VALLE</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[272]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[272]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[272]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[272]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_1701 = new google.maps.InfoWindow({
content: S_MUN_1701
});
google.maps.event.addListener(M_MUN_1701,"mouseover",function(){
W_MUN_1701.open(map, M_MUN_1701);
});
google.maps.event.addListener(M_MUN_1701,"mouseout",function(){
W_MUN_1701.close();
});
var S_MUN_1702 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">ALIANZA, VALLE</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[273]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[273]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[273]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[273]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_1702 = new google.maps.InfoWindow({
content: S_MUN_1702
});
google.maps.event.addListener(M_MUN_1702,"mouseover",function(){
W_MUN_1702.open(map, M_MUN_1702);
});
google.maps.event.addListener(M_MUN_1702,"mouseout",function(){
W_MUN_1702.close();
});
var S_MUN_1703 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">AMAPALA, VALLE</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[274]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[274]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[274]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[274]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_1703 = new google.maps.InfoWindow({
content: S_MUN_1703
});
google.maps.event.addListener(M_MUN_1703,"mouseover",function(){
W_MUN_1703.open(map, M_MUN_1703);
});
google.maps.event.addListener(M_MUN_1703,"mouseout",function(){
W_MUN_1703.close();
});
var S_MUN_1704 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">ARAMECINA, VALLE</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[275]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[275]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[275]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[275]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_1704 = new google.maps.InfoWindow({
content: S_MUN_1704
});
google.maps.event.addListener(M_MUN_1704,"mouseover",function(){
W_MUN_1704.open(map, M_MUN_1704);
});
google.maps.event.addListener(M_MUN_1704,"mouseout",function(){
W_MUN_1704.close();
});
var S_MUN_1705 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">CARIDAD, VALLE</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[276]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[276]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[276]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[276]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_1705 = new google.maps.InfoWindow({
content: S_MUN_1705
});
google.maps.event.addListener(M_MUN_1705,"mouseover",function(){
W_MUN_1705.open(map, M_MUN_1705);
});
google.maps.event.addListener(M_MUN_1705,"mouseout",function(){
W_MUN_1705.close();
});
var S_MUN_1706 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">GOASCORAN, VALLE</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[277]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[277]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[277]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[277]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_1706 = new google.maps.InfoWindow({
content: S_MUN_1706
});
google.maps.event.addListener(M_MUN_1706,"mouseover",function(){
W_MUN_1706.open(map, M_MUN_1706);
});
google.maps.event.addListener(M_MUN_1706,"mouseout",function(){
W_MUN_1706.close();
});
var S_MUN_1707 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">LANGUE, VALLE</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[278]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[278]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[278]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[278]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_1707 = new google.maps.InfoWindow({
content: S_MUN_1707
});
google.maps.event.addListener(M_MUN_1707,"mouseover",function(){
W_MUN_1707.open(map, M_MUN_1707);
});
google.maps.event.addListener(M_MUN_1707,"mouseout",function(){
W_MUN_1707.close();
});
var S_MUN_1708 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">SAN FRANCISCO DE CORAY, VALLE</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[279]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[279]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[279]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[279]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_1708 = new google.maps.InfoWindow({
content: S_MUN_1708
});
google.maps.event.addListener(M_MUN_1708,"mouseover",function(){
W_MUN_1708.open(map, M_MUN_1708);
});
google.maps.event.addListener(M_MUN_1708,"mouseout",function(){
W_MUN_1708.close();
});
var S_MUN_1709 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">SAN LORENZO, VALLE</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[280]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[280]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[280]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[280]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_1709 = new google.maps.InfoWindow({
content: S_MUN_1709
});
google.maps.event.addListener(M_MUN_1709,"mouseover",function(){
W_MUN_1709.open(map, M_MUN_1709);
});
google.maps.event.addListener(M_MUN_1709,"mouseout",function(){
W_MUN_1709.close();
});
var S_MUN_1801 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">YORO, YORO</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[281]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[281]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[281]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[281]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_1801 = new google.maps.InfoWindow({
content: S_MUN_1801
});
google.maps.event.addListener(M_MUN_1801,"mouseover",function(){
W_MUN_1801.open(map, M_MUN_1801);
});
google.maps.event.addListener(M_MUN_1801,"mouseout",function(){
W_MUN_1801.close();
});
var S_MUN_1802 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">ARENAL, YORO</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[282]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[282]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[282]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[282]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_1802 = new google.maps.InfoWindow({
content: S_MUN_1802
});
google.maps.event.addListener(M_MUN_1802,"mouseover",function(){
W_MUN_1802.open(map, M_MUN_1802);
});
google.maps.event.addListener(M_MUN_1802,"mouseout",function(){
W_MUN_1802.close();
});
var S_MUN_1803 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">EL NEGRITO, YORO</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[283]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[283]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[283]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[283]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_1803 = new google.maps.InfoWindow({
content: S_MUN_1803
});
google.maps.event.addListener(M_MUN_1803,"mouseover",function(){
W_MUN_1803.open(map, M_MUN_1803);
});
google.maps.event.addListener(M_MUN_1803,"mouseout",function(){
W_MUN_1803.close();
});
var S_MUN_1804 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">EL PROGRESO, YORO</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[284]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[284]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[284]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[284]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_1804 = new google.maps.InfoWindow({
content: S_MUN_1804
});
google.maps.event.addListener(M_MUN_1804,"mouseover",function(){
W_MUN_1804.open(map, M_MUN_1804);
});
google.maps.event.addListener(M_MUN_1804,"mouseout",function(){
W_MUN_1804.close();
});
var S_MUN_1805 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">JOCON, YORO</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[285]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[285]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[285]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[285]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_1805 = new google.maps.InfoWindow({
content: S_MUN_1805
});
google.maps.event.addListener(M_MUN_1805,"mouseover",function(){
W_MUN_1805.open(map, M_MUN_1805);
});
google.maps.event.addListener(M_MUN_1805,"mouseout",function(){
W_MUN_1805.close();
});
var S_MUN_1806 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">MORAZAN, YORO</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[286]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[286]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[286]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[286]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_1806 = new google.maps.InfoWindow({
content: S_MUN_1806
});
google.maps.event.addListener(M_MUN_1806,"mouseover",function(){
W_MUN_1806.open(map, M_MUN_1806);
});
google.maps.event.addListener(M_MUN_1806,"mouseout",function(){
W_MUN_1806.close();
});
var S_MUN_1807 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">OLANCHITO, YORO</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[287]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[287]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[287]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[287]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_1807 = new google.maps.InfoWindow({
content: S_MUN_1807
});
google.maps.event.addListener(M_MUN_1807,"mouseover",function(){
W_MUN_1807.open(map, M_MUN_1807);
});
google.maps.event.addListener(M_MUN_1807,"mouseout",function(){
W_MUN_1807.close();
});
var S_MUN_1808 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">SANTA RITA, YORO</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[288]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[288]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[288]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[288]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_1808 = new google.maps.InfoWindow({
content: S_MUN_1808
});
google.maps.event.addListener(M_MUN_1808,"mouseover",function(){
W_MUN_1808.open(map, M_MUN_1808);
});
google.maps.event.addListener(M_MUN_1808,"mouseout",function(){
W_MUN_1808.close();
});
var S_MUN_1809 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">SULACO, YORO</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[289]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[289]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[289]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[289]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_1809 = new google.maps.InfoWindow({
content: S_MUN_1809
});
google.maps.event.addListener(M_MUN_1809,"mouseover",function(){
W_MUN_1809.open(map, M_MUN_1809);
});
google.maps.event.addListener(M_MUN_1809,"mouseout",function(){
W_MUN_1809.close();
});
var S_MUN_1810 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">VICTORIA, YORO</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[290]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[290]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[290]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[290]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_1810 = new google.maps.InfoWindow({
content: S_MUN_1810
});
google.maps.event.addListener(M_MUN_1810,"mouseover",function(){
W_MUN_1810.open(map, M_MUN_1810);
});
google.maps.event.addListener(M_MUN_1810,"mouseout",function(){
W_MUN_1810.close();
});
var S_MUN_1811 = '<div id="content">'+
'<div id="siteNotice">'+
'<h4 id="firstHeading" class="firstHeading">YORITO, YORO</h4>'+
'<div id="bodyContent">'+
'<table style = "width: 100%">'+
'<tr><td>Porcentaje</td><td style="text-align:right">'+PORCENTAJE[291]+' %</td></tr>'+
'<tr><td>2014</td><td style="text-align:right">L. '+((ANIO_2015[291]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>2015</td><td style="text-align:right">L. '+((ANIO_2016[291]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr>'+
'<tr><td>YOY</td><td style="text-align:right">L. '+((YOY[291]/1000000).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' M.</td></tr></table>'+
'</div>'+
'</div>';
var W_MUN_1811 = new google.maps.InfoWindow({
content: S_MUN_1811
});
google.maps.event.addListener(M_MUN_1811,"mouseover",function(){
W_MUN_1811.open(map, M_MUN_1811);
});
google.maps.event.addListener(M_MUN_1811,"mouseout",function(){
W_MUN_1811.close();
});
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    // Create the legend and display on the map
    var legend = document.createElement('div');
    legend.id = 'legend';
    var content = [];
    content.push('<h3>Crecimiento Pais<br><center>4.3 %</center></h3>');
    content.push('<p><div class="color red"></div>X < 0</p>');
    content.push('<p><div class="color yellow"></div>X >= 0 , X < 4.3</p>');
    content.push('<p><div class="color green"></div>X >= 4.3</p>');
    content.push('<p><div class="color black"></div>No Definido</p>');
    legend.innerHTML = content.join('');
    legend.index = 1;
    map.controls[google.maps.ControlPosition.RIGHT_BOTTOM].push(legend);

    // Create the legend and display on the map
    var legend1 = document.createElement('div');
    legend1.id = 'legend1';
    var content1 = [];
    content1.push('<h1>CARGA + VASTRIX YOY FEBRERO 2016</h1>');
    legend1.innerHTML = content1.join('');

    legend1.index = 1;
    map.controls[google.maps.ControlPosition.TOP_CENTER].push(legend1);
}

