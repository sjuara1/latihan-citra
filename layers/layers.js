var wms_layers = [];

var format_setdaerahcitra_0 = new ol.format.GeoJSON();
var features_setdaerahcitra_0 = format_setdaerahcitra_0.readFeatures(json_setdaerahcitra_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_setdaerahcitra_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_setdaerahcitra_0.addFeatures(features_setdaerahcitra_0);
var lyr_setdaerahcitra_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_setdaerahcitra_0, 
                style: style_setdaerahcitra_0,
                interactive: true,
                title: '<img src="styles/legend/setdaerahcitra_0.png" /> set daerah citra'
            });
var lyr_Clippedmask_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "Clipped (mask)",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Clippedmask_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [12253079.344709, -829620.507995, 12334606.608686, -759898.800251]
                            })
                        });
var format_shpsampel_2 = new ol.format.GeoJSON();
var features_shpsampel_2 = format_shpsampel_2.readFeatures(json_shpsampel_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_shpsampel_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_shpsampel_2.addFeatures(features_shpsampel_2);
var lyr_shpsampel_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_shpsampel_2, 
                style: style_shpsampel_2,
                interactive: true,
                title: '<img src="styles/legend/shpsampel_2.png" /> shp sampel'
            });
var lyr_OUTPUT_class_3 = new ol.layer.Image({
                            opacity: 1,
                            title: "OUTPUT_class",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/OUTPUT_class_3.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [12253079.344709, -829620.507995, 12334606.608686, -759898.800251]
                            })
                        });
var format_Vectorized_4 = new ol.format.GeoJSON();
var features_Vectorized_4 = format_Vectorized_4.readFeatures(json_Vectorized_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Vectorized_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Vectorized_4.addFeatures(features_Vectorized_4);
var lyr_Vectorized_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Vectorized_4, 
                style: style_Vectorized_4,
                interactive: true,
    title: 'Vectorized<br />\
    <img src="styles/legend/Vectorized_4_0.png" /> <br />\
    <img src="styles/legend/Vectorized_4_1.png" /> 1<br />\
    <img src="styles/legend/Vectorized_4_2.png" /> 2<br />\
    <img src="styles/legend/Vectorized_4_3.png" /> 4<br />'
        });

lyr_setdaerahcitra_0.setVisible(true);lyr_Clippedmask_1.setVisible(true);lyr_shpsampel_2.setVisible(true);lyr_OUTPUT_class_3.setVisible(true);lyr_Vectorized_4.setVisible(true);
var layersList = [lyr_setdaerahcitra_0,lyr_Clippedmask_1,lyr_shpsampel_2,lyr_OUTPUT_class_3,lyr_Vectorized_4];
lyr_setdaerahcitra_0.set('fieldAliases', {'id': 'id', });
lyr_shpsampel_2.set('fieldAliases', {'id': 'id', });
lyr_Vectorized_4.set('fieldAliases', {'fid': 'fid', 'DN': 'DN', });
lyr_setdaerahcitra_0.set('fieldImages', {'id': '', });
lyr_shpsampel_2.set('fieldImages', {'id': '', });
lyr_Vectorized_4.set('fieldImages', {'fid': 'TextEdit', 'DN': 'Range', });
lyr_setdaerahcitra_0.set('fieldLabels', {'id': 'no label', });
lyr_shpsampel_2.set('fieldLabels', {'id': 'no label', });
lyr_Vectorized_4.set('fieldLabels', {'fid': 'no label', 'DN': 'no label', });
lyr_Vectorized_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});