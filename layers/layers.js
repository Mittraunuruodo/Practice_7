var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_WB_countries_Admin0_10m_1 = new ol.format.GeoJSON();
var features_WB_countries_Admin0_10m_1 = format_WB_countries_Admin0_10m_1.readFeatures(json_WB_countries_Admin0_10m_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WB_countries_Admin0_10m_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WB_countries_Admin0_10m_1.addFeatures(features_WB_countries_Admin0_10m_1);
var lyr_WB_countries_Admin0_10m_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_WB_countries_Admin0_10m_1, 
                style: style_WB_countries_Admin0_10m_1,
                interactive: true,
                title: '<img src="styles/legend/WB_countries_Admin0_10m_1.png" /> WB_countries_Admin0_10m'
            });
var format_2_2 = new ol.format.GeoJSON();
var features_2_2 = format_2_2.readFeatures(json_2_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2_2.addFeatures(features_2_2);
var lyr_2_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_2_2, 
                style: style_2_2,
                interactive: true,
    title: 'Плотность населения, чел/км2<br />\
    <img src="styles/legend/2_2_0.png" /> 278 - 512<br />\
    <img src="styles/legend/2_2_1.png" /> 512 - 1014<br />\
    <img src="styles/legend/2_2_2.png" /> 1014 - 1433<br />\
    <img src="styles/legend/2_2_3.png" /> 1433 - 2361<br />\
    <img src="styles/legend/2_2_4.png" /> 2361 - 4503<br />'
        });
var format_2_3 = new ol.format.GeoJSON();
var features_2_3 = format_2_3.readFeatures(json_2_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2_3.addFeatures(features_2_3);
var lyr_2_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_2_3, 
                style: style_2_3,
                interactive: true,
    title: 'Площадь, км2<br />\
    <img src="styles/legend/2_3_0.png" /> 15 - 35<br />\
    <img src="styles/legend/2_3_1.png" /> 35 - 70<br />\
    <img src="styles/legend/2_3_2.png" /> 70 - 100<br />\
    <img src="styles/legend/2_3_3.png" /> 100 - 135<br />\
    <img src="styles/legend/2_3_4.png" /> 135 - 450<br />'
        });

lyr_OSMStandard_0.setVisible(true);lyr_WB_countries_Admin0_10m_1.setVisible(true);lyr_2_2.setVisible(true);lyr_2_3.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_WB_countries_Admin0_10m_1,lyr_2_2,lyr_2_3];
lyr_WB_countries_Admin0_10m_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'featurecla': 'featurecla', 'LEVEL': 'LEVEL', 'TYPE': 'TYPE', 'FORMAL_EN': 'FORMAL_EN', 'FORMAL_FR': 'FORMAL_FR', 'POP_EST': 'POP_EST', 'POP_RANK': 'POP_RANK', 'GDP_MD_EST': 'GDP_MD_EST', 'POP_YEAR': 'POP_YEAR', 'LASTCENSUS': 'LASTCENSUS', 'GDP_YEAR': 'GDP_YEAR', 'ECONOMY': 'ECONOMY', 'INCOME_GRP': 'INCOME_GRP', 'FIPS_10_': 'FIPS_10_', 'ISO_A2': 'ISO_A2', 'ISO_A3': 'ISO_A3', 'ISO_A3_EH': 'ISO_A3_EH', 'ISO_N3': 'ISO_N3', 'UN_A3': 'UN_A3', 'WB_A2': 'WB_A2', 'WB_A3': 'WB_A3', 'CONTINENT': 'CONTINENT', 'REGION_UN': 'REGION_UN', 'SUBREGION': 'SUBREGION', 'REGION_WB': 'REGION_WB', 'NAME_AR': 'NAME_AR', 'NAME_BN': 'NAME_BN', 'NAME_DE': 'NAME_DE', 'NAME_EN': 'NAME_EN', 'NAME_ES': 'NAME_ES', 'NAME_FR': 'NAME_FR', 'NAME_EL': 'NAME_EL', 'NAME_HI': 'NAME_HI', 'NAME_HU': 'NAME_HU', 'NAME_ID': 'NAME_ID', 'NAME_IT': 'NAME_IT', 'NAME_JA': 'NAME_JA', 'NAME_KO': 'NAME_KO', 'NAME_NL': 'NAME_NL', 'NAME_PL': 'NAME_PL', 'NAME_PT': 'NAME_PT', 'NAME_RU': 'NAME_RU', 'NAME_SV': 'NAME_SV', 'NAME_TR': 'NAME_TR', 'NAME_VI': 'NAME_VI', 'NAME_ZH': 'NAME_ZH', 'WB_NAME': 'WB_NAME', 'WB_RULES': 'WB_RULES', 'WB_REGION': 'WB_REGION', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_2_2.set('fieldAliases', {'id': 'id', 'Name': 'Название города', 'X': 'Широта', 'Y': 'Долгота', 'Populat': 'Население', 'Squ': 'Squ', 'Densi': 'Плотность населения', });
lyr_2_3.set('fieldAliases', {'id': 'id', 'Name': 'Название города', 'X': 'Широта', 'Y': 'Долгота', 'Populat': 'Численность населения', 'Squ': 'Площадь города', 'Densi': 'Densi', });
lyr_WB_countries_Admin0_10m_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'featurecla': 'TextEdit', 'LEVEL': 'Range', 'TYPE': 'TextEdit', 'FORMAL_EN': 'TextEdit', 'FORMAL_FR': 'TextEdit', 'POP_EST': 'TextEdit', 'POP_RANK': 'Range', 'GDP_MD_EST': 'TextEdit', 'POP_YEAR': 'Range', 'LASTCENSUS': 'Range', 'GDP_YEAR': 'Range', 'ECONOMY': 'TextEdit', 'INCOME_GRP': 'TextEdit', 'FIPS_10_': 'TextEdit', 'ISO_A2': 'TextEdit', 'ISO_A3': 'TextEdit', 'ISO_A3_EH': 'TextEdit', 'ISO_N3': 'TextEdit', 'UN_A3': 'TextEdit', 'WB_A2': 'TextEdit', 'WB_A3': 'TextEdit', 'CONTINENT': 'TextEdit', 'REGION_UN': 'TextEdit', 'SUBREGION': 'TextEdit', 'REGION_WB': 'TextEdit', 'NAME_AR': 'TextEdit', 'NAME_BN': 'TextEdit', 'NAME_DE': 'TextEdit', 'NAME_EN': 'TextEdit', 'NAME_ES': 'TextEdit', 'NAME_FR': 'TextEdit', 'NAME_EL': 'TextEdit', 'NAME_HI': 'TextEdit', 'NAME_HU': 'TextEdit', 'NAME_ID': 'TextEdit', 'NAME_IT': 'TextEdit', 'NAME_JA': 'TextEdit', 'NAME_KO': 'TextEdit', 'NAME_NL': 'TextEdit', 'NAME_PL': 'TextEdit', 'NAME_PT': 'TextEdit', 'NAME_RU': 'TextEdit', 'NAME_SV': 'TextEdit', 'NAME_TR': 'TextEdit', 'NAME_VI': 'TextEdit', 'NAME_ZH': 'TextEdit', 'WB_NAME': 'TextEdit', 'WB_RULES': 'TextEdit', 'WB_REGION': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_2_2.set('fieldImages', {'id': 'Hidden', 'Name': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'Populat': 'TextEdit', 'Squ': 'Hidden', 'Densi': 'TextEdit', });
lyr_2_3.set('fieldImages', {'id': 'Hidden', 'Name': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'Populat': 'TextEdit', 'Squ': 'TextEdit', 'Densi': 'Hidden', });
lyr_WB_countries_Admin0_10m_1.set('fieldLabels', {'OBJECTID': 'no label', 'featurecla': 'no label', 'LEVEL': 'no label', 'TYPE': 'no label', 'FORMAL_EN': 'no label', 'FORMAL_FR': 'no label', 'POP_EST': 'no label', 'POP_RANK': 'no label', 'GDP_MD_EST': 'no label', 'POP_YEAR': 'no label', 'LASTCENSUS': 'no label', 'GDP_YEAR': 'no label', 'ECONOMY': 'no label', 'INCOME_GRP': 'no label', 'FIPS_10_': 'no label', 'ISO_A2': 'no label', 'ISO_A3': 'no label', 'ISO_A3_EH': 'no label', 'ISO_N3': 'no label', 'UN_A3': 'no label', 'WB_A2': 'no label', 'WB_A3': 'no label', 'CONTINENT': 'no label', 'REGION_UN': 'no label', 'SUBREGION': 'no label', 'REGION_WB': 'no label', 'NAME_AR': 'no label', 'NAME_BN': 'no label', 'NAME_DE': 'no label', 'NAME_EN': 'no label', 'NAME_ES': 'no label', 'NAME_FR': 'no label', 'NAME_EL': 'no label', 'NAME_HI': 'no label', 'NAME_HU': 'no label', 'NAME_ID': 'no label', 'NAME_IT': 'no label', 'NAME_JA': 'no label', 'NAME_KO': 'no label', 'NAME_NL': 'no label', 'NAME_PL': 'no label', 'NAME_PT': 'no label', 'NAME_RU': 'no label', 'NAME_SV': 'no label', 'NAME_TR': 'no label', 'NAME_VI': 'no label', 'NAME_ZH': 'no label', 'WB_NAME': 'no label', 'WB_RULES': 'no label', 'WB_REGION': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_2_2.set('fieldLabels', {'Name': 'no label', 'X': 'no label', 'Y': 'no label', 'Populat': 'no label', 'Densi': 'no label', });
lyr_2_3.set('fieldLabels', {'Name': 'no label', 'X': 'no label', 'Y': 'no label', 'Populat': 'no label', 'Squ': 'no label', });
lyr_2_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});