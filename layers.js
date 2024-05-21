var wms_layers = [];


        var lyr_CartoLight_0 = new ol.layer.Tile({
            'title': 'Carto Light',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.pn'
            })
        });
var format_Circumscriptii_Scolare_ADIZMB_1 = new ol.format.GeoJSON();
var features_Circumscriptii_Scolare_ADIZMB_1 = format_Circumscriptii_Scolare_ADIZMB_1.readFeatures(json_Circumscriptii_Scolare_ADIZMB_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Circumscriptii_Scolare_ADIZMB_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Circumscriptii_Scolare_ADIZMB_1.addFeatures(features_Circumscriptii_Scolare_ADIZMB_1);
var lyr_Circumscriptii_Scolare_ADIZMB_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Circumscriptii_Scolare_ADIZMB_1, 
                style: style_Circumscriptii_Scolare_ADIZMB_1,
                popuplayertitle: "Circumscriptii_Scolare_ADIZMB",
                interactive: false,
    title: 'Circumscriptii_Scolare_ADIZMB<br />\
    <img src="styles/legend/Circumscriptii_Scolare_ADIZMB_1_0.png" /> 4061100027<br />\
    <img src="styles/legend/Circumscriptii_Scolare_ADIZMB_1_1.png" /> 4061100036<br />\
    <img src="styles/legend/Circumscriptii_Scolare_ADIZMB_1_2.png" /> 4061100045<br />\
    <img src="styles/legend/Circumscriptii_Scolare_ADIZMB_1_3.png" /> 4061100054<br />\
    <img src="styles/legend/Circumscriptii_Scolare_ADIZMB_1_4.png" /> 4061100072<br />\
    <img src="styles/legend/Circumscriptii_Scolare_ADIZMB_1_5.png" /> 4061100099<br />\
    <img src="styles/legend/Circumscriptii_Scolare_ADIZMB_1_6.png" /> 4061100104<br />\
    <img src="styles/legend/Circumscriptii_Scolare_ADIZMB_1_7.png" /> 4061100113<br />\
    <img src="styles/legend/Circumscriptii_Scolare_ADIZMB_1_8.png" /> 4061100149<br />\
    <img src="styles/legend/Circumscriptii_Scolare_ADIZMB_1_9.png" /> 4061100176<br />\
    <img src="styles/legend/Circumscriptii_Scolare_ADIZMB_1_10.png" /> 4061100194<br />\
    <img src="styles/legend/Circumscriptii_Scolare_ADIZMB_1_11.png" /> 4061100262<br />\
    <img src="styles/legend/Circumscriptii_Scolare_ADIZMB_1_12.png" /> 4061100298<br />\
    <img src="styles/legend/Circumscriptii_Scolare_ADIZMB_1_13.png" /> 4061100312<br />\
    <img src="styles/legend/Circumscriptii_Scolare_ADIZMB_1_14.png" /> 4061100339<br />\
    <img src="styles/legend/Circumscriptii_Scolare_ADIZMB_1_15.png" /> 4061100348<br />\
    <img src="styles/legend/Circumscriptii_Scolare_ADIZMB_1_16.png" /> 4061100357<br />\
    <img src="styles/legend/Circumscriptii_Scolare_ADIZMB_1_17.png" /> 4061100416<br />\
    <img src="styles/legend/Circumscriptii_Scolare_ADIZMB_1_18.png" /> 4061100425<br />\
    <img src="styles/legend/Circumscriptii_Scolare_ADIZMB_1_19.png" /> 4061100443<br />\
    <img src="styles/legend/Circumscriptii_Scolare_ADIZMB_1_20.png" /> 4061100452<br />\
    <img src="styles/legend/Circumscriptii_Scolare_ADIZMB_1_21.png" /> 4061100488<br />\
    <img src="styles/legend/Circumscriptii_Scolare_ADIZMB_1_22.png" /> 4061100511<br />\
    <img src="styles/legend/Circumscriptii_Scolare_ADIZMB_1_23.png" /> 4061100529<br />\
    <img src="styles/legend/Circumscriptii_Scolare_ADIZMB_1_24.png" /> 4061100556<br />\
    <img src="styles/legend/Circumscriptii_Scolare_ADIZMB_1_25.png" /> 4061100592<br />\
    <img src="styles/legend/Circumscriptii_Scolare_ADIZMB_1_26.png" /> 4061100606<br />\
    <img src="styles/legend/Circumscriptii_Scolare_ADIZMB_1_27.png" /> 4061100624<br />\
    <img src="styles/legend/Circumscriptii_Scolare_ADIZMB_1_28.png" /> 4061100633<br />\
    <img src="styles/legend/Circumscriptii_Scolare_ADIZMB_1_29.png" /> 4061100642<br />\
    <img src="styles/legend/Circumscriptii_Scolare_ADIZMB_1_30.png" /> 4061100651<br />\
    <img src="styles/legend/Circumscriptii_Scolare_ADIZMB_1_31.png" /> 4061100696<br />\
    <img src="styles/legend/Circumscriptii_Scolare_ADIZMB_1_32.png" /> 4061100719<br />\
    <img src="styles/legend/Circumscriptii_Scolare_ADIZMB_1_33.png" /> 4061100746<br />\
    <img src="styles/legend/Circumscriptii_Scolare_ADIZMB_1_34.png" /> 4061100755<br />\
    <img src="styles/legend/Circumscriptii_Scolare_ADIZMB_1_35.png" /> 4061100782<br />\
    <img src="styles/legend/Circumscriptii_Scolare_ADIZMB_1_36.png" /> 4061100814<br />\
    <img src="styles/legend/Circumscriptii_Scolare_ADIZMB_1_37.png" /> 4061100832<br />\
    <img src="styles/legend/Circumscriptii_Scolare_ADIZMB_1_38.png" /> 4061100895<br />\
    <img src="styles/legend/Circumscriptii_Scolare_ADIZMB_1_39.png" /> 4061100936<br />\
    <img src="styles/legend/Circumscriptii_Scolare_ADIZMB_1_40.png" /> 4061100945<br />\
    <img src="styles/legend/Circumscriptii_Scolare_ADIZMB_1_41.png" /> 4061100999<br />\
    <img src="styles/legend/Circumscriptii_Scolare_ADIZMB_1_42.png" /> 4061101064<br />\
    <img src="styles/legend/Circumscriptii_Scolare_ADIZMB_1_43.png" /> 4061101073<br />\
    <img src="styles/legend/Circumscriptii_Scolare_ADIZMB_1_44.png" /> 4061101105<br />\
    <img src="styles/legend/Circumscriptii_Scolare_ADIZMB_1_45.png" /> 4061101114<br />\
    <img src="styles/legend/Circumscriptii_Scolare_ADIZMB_1_46.png" /> 4061101123<br />\
    <img src="styles/legend/Circumscriptii_Scolare_ADIZMB_1_47.png" /> 4061101168<br />\
    <img src="styles/legend/Circumscriptii_Scolare_ADIZMB_1_48.png" /> 4061101195<br />\
    <img src="styles/legend/Circumscriptii_Scolare_ADIZMB_1_49.png" /> 4061101209<br />\
    <img src="styles/legend/Circumscriptii_Scolare_ADIZMB_1_50.png" /> 4061101218<br />\
    <img src="styles/legend/Circumscriptii_Scolare_ADIZMB_1_51.png" /> 4061101236<br />\
    <img src="styles/legend/Circumscriptii_Scolare_ADIZMB_1_52.png" /> 4061101245<br />\
    <img src="styles/legend/Circumscriptii_Scolare_ADIZMB_1_53.png" /> 4061101263<br />\
    <img src="styles/legend/Circumscriptii_Scolare_ADIZMB_1_54.png" /> 4061101272<br />\
    <img src="styles/legend/Circumscriptii_Scolare_ADIZMB_1_55.png" /> 4061101322<br />\
    <img src="styles/legend/Circumscriptii_Scolare_ADIZMB_1_56.png" /> 4061101331<br />\
    <img src="styles/legend/Circumscriptii_Scolare_ADIZMB_1_57.png" /> 4061101367<br />\
    <img src="styles/legend/Circumscriptii_Scolare_ADIZMB_1_58.png" /> 4061101417<br />\
    <img src="styles/legend/Circumscriptii_Scolare_ADIZMB_1_59.png" /> 4061101426<br />\
    <img src="styles/legend/Circumscriptii_Scolare_ADIZMB_1_60.png" /> 4061101435<br />\
    <img src="styles/legend/Circumscriptii_Scolare_ADIZMB_1_61.png" /> 4061101453<br />\
    <img src="styles/legend/Circumscriptii_Scolare_ADIZMB_1_62.png" /> 4061101462<br />\
    <img src="styles/legend/Circumscriptii_Scolare_ADIZMB_1_63.png" /> 4061101471<br />\
    <img src="styles/legend/Circumscriptii_Scolare_ADIZMB_1_64.png" /> 4061101489<br />\
    <img src="styles/legend/Circumscriptii_Scolare_ADIZMB_1_65.png" /> 4061101539<br />\
    <img src="styles/legend/Circumscriptii_Scolare_ADIZMB_1_66.png" /> 4061101557<br />\
    <img src="styles/legend/Circumscriptii_Scolare_ADIZMB_1_67.png" /> 4061101566<br />\
    <img src="styles/legend/Circumscriptii_Scolare_ADIZMB_1_68.png" /> 4061101584<br />\
    <img src="styles/legend/Circumscriptii_Scolare_ADIZMB_1_69.png" /> 4061101661<br />\
    <img src="styles/legend/Circumscriptii_Scolare_ADIZMB_1_70.png" /> 4061101679<br />\
    <img src="styles/legend/Circumscriptii_Scolare_ADIZMB_1_71.png" /> 4061101697<br />\
    <img src="styles/legend/Circumscriptii_Scolare_ADIZMB_1_72.png" /> 4061101702<br />\
    <img src="styles/legend/Circumscriptii_Scolare_ADIZMB_1_73.png" /> 4061101711<br />\
    <img src="styles/legend/Circumscriptii_Scolare_ADIZMB_1_74.png" /> 4061101774<br />\
    <img src="styles/legend/Circumscriptii_Scolare_ADIZMB_1_75.png" /> 4061101792<br />\
    <img src="styles/legend/Circumscriptii_Scolare_ADIZMB_1_76.png" /> 4061101842<br />\
    <img src="styles/legend/Circumscriptii_Scolare_ADIZMB_1_77.png" /> 4061101869<br />\
    <img src="styles/legend/Circumscriptii_Scolare_ADIZMB_1_78.png" /> 4061101878<br />\
    <img src="styles/legend/Circumscriptii_Scolare_ADIZMB_1_79.png" /> 4061101887<br />\
    <img src="styles/legend/Circumscriptii_Scolare_ADIZMB_1_80.png" /> 4061101901<br />\
    <img src="styles/legend/Circumscriptii_Scolare_ADIZMB_1_81.png" /> 4061101964<br />\
    <img src="styles/legend/Circumscriptii_Scolare_ADIZMB_1_82.png" /> 4061101991<br />\
    <img src="styles/legend/Circumscriptii_Scolare_ADIZMB_1_83.png" /> 4061102002<br />\
    <img src="styles/legend/Circumscriptii_Scolare_ADIZMB_1_84.png" /> 4061102047<br />\
    <img src="styles/legend/Circumscriptii_Scolare_ADIZMB_1_85.png" /> 4061102065<br />\
    <img src="styles/legend/Circumscriptii_Scolare_ADIZMB_1_86.png" /> 4061102092<br />\
    <img src="styles/legend/Circumscriptii_Scolare_ADIZMB_1_87.png" /> 4061102133<br />\
    <img src="styles/legend/Circumscriptii_Scolare_ADIZMB_1_88.png" /> 4061102142<br />\
    <img src="styles/legend/Circumscriptii_Scolare_ADIZMB_1_89.png" /> 4061102187<br />\
    <img src="styles/legend/Circumscriptii_Scolare_ADIZMB_1_90.png" /> 4061102196<br />\
    <img src="styles/legend/Circumscriptii_Scolare_ADIZMB_1_91.png" /> 4061102197<br />\
    <img src="styles/legend/Circumscriptii_Scolare_ADIZMB_1_92.png" /> 4061102219<br />\
    <img src="styles/legend/Circumscriptii_Scolare_ADIZMB_1_93.png" /> 4061102228<br />\
    <img src="styles/legend/Circumscriptii_Scolare_ADIZMB_1_94.png" /> 4061102237<br />\
    <img src="styles/legend/Circumscriptii_Scolare_ADIZMB_1_95.png" /> 4061102255<br />\
    <img src="styles/legend/Circumscriptii_Scolare_ADIZMB_1_96.png" /> 4061102282<br />\
    <img src="styles/legend/Circumscriptii_Scolare_ADIZMB_1_97.png" /> 4061102305<br />\
    <img src="styles/legend/Circumscriptii_Scolare_ADIZMB_1_98.png" /> 4061102314<br />\
    <img src="styles/legend/Circumscriptii_Scolare_ADIZMB_1_99.png" /> 4061102323<br />\
    <img src="styles/legend/Circumscriptii_Scolare_ADIZMB_1_100.png" /> 4061102395<br />\
    <img src="styles/legend/Circumscriptii_Scolare_ADIZMB_1_101.png" /> 4061102418<br />\
    <img src="styles/legend/Circumscriptii_Scolare_ADIZMB_1_102.png" /> 4061102427<br />\
    <img src="styles/legend/Circumscriptii_Scolare_ADIZMB_1_103.png" /> 4061102436<br />\
    <img src="styles/legend/Circumscriptii_Scolare_ADIZMB_1_104.png" /> 4061102472<br />\
    <img src="styles/legend/Circumscriptii_Scolare_ADIZMB_1_105.png" /> 4061102504<br />\
    <img src="styles/legend/Circumscriptii_Scolare_ADIZMB_1_106.png" /> 4061102531<br />\
    <img src="styles/legend/Circumscriptii_Scolare_ADIZMB_1_107.png" /> 4061102585<br />\
    <img src="styles/legend/Circumscriptii_Scolare_ADIZMB_1_108.png" /> 4061102635<br />\
    <img src="styles/legend/Circumscriptii_Scolare_ADIZMB_1_109.png" /> 4061102644<br />\
    <img src="styles/legend/Circumscriptii_Scolare_ADIZMB_1_110.png" /> 4061102653<br />\
    <img src="styles/legend/Circumscriptii_Scolare_ADIZMB_1_111.png" /> 4061102689<br />\
    <img src="styles/legend/Circumscriptii_Scolare_ADIZMB_1_112.png" /> 4061102712<br />\
    <img src="styles/legend/Circumscriptii_Scolare_ADIZMB_1_113.png" /> 4061102748<br />\
    <img src="styles/legend/Circumscriptii_Scolare_ADIZMB_1_114.png" /> 4061102757<br />\
    <img src="styles/legend/Circumscriptii_Scolare_ADIZMB_1_115.png" /> 4061102793<br />\
    <img src="styles/legend/Circumscriptii_Scolare_ADIZMB_1_116.png" /> 4061102825<br />\
    <img src="styles/legend/Circumscriptii_Scolare_ADIZMB_1_117.png" /> 4061102834<br />\
    <img src="styles/legend/Circumscriptii_Scolare_ADIZMB_1_118.png" /> 4061102852<br />\
    <img src="styles/legend/Circumscriptii_Scolare_ADIZMB_1_119.png" /> 4061102861<br />\
    <img src="styles/legend/Circumscriptii_Scolare_ADIZMB_1_120.png" /> 4061102879<br />\
    <img src="styles/legend/Circumscriptii_Scolare_ADIZMB_1_121.png" /> 4061102897<br />\
    <img src="styles/legend/Circumscriptii_Scolare_ADIZMB_1_122.png" /> 4061102965<br />\
    <img src="styles/legend/Circumscriptii_Scolare_ADIZMB_1_123.png" /> 4061102983<br />\
    <img src="styles/legend/Circumscriptii_Scolare_ADIZMB_1_124.png" /> 4061102992<br />\
    <img src="styles/legend/Circumscriptii_Scolare_ADIZMB_1_125.png" /> 4061103003<br />\
    <img src="styles/legend/Circumscriptii_Scolare_ADIZMB_1_126.png" /> 4061103048<br />\
    <img src="styles/legend/Circumscriptii_Scolare_ADIZMB_1_127.png" /> 4061103093<br />\
    <img src="styles/legend/Circumscriptii_Scolare_ADIZMB_1_128.png" /> 4061103107<br />\
    <img src="styles/legend/Circumscriptii_Scolare_ADIZMB_1_129.png" /> 4061103116<br />\
    <img src="styles/legend/Circumscriptii_Scolare_ADIZMB_1_130.png" /> 4061103161<br />\
    <img src="styles/legend/Circumscriptii_Scolare_ADIZMB_1_131.png" /> 4061103188<br />\
    <img src="styles/legend/Circumscriptii_Scolare_ADIZMB_1_132.png" /> 4061103274<br />\
    <img src="styles/legend/Circumscriptii_Scolare_ADIZMB_1_133.png" /> 4061103283<br />\
    <img src="styles/legend/Circumscriptii_Scolare_ADIZMB_1_134.png" /> 4061103292<br />\
    <img src="styles/legend/Circumscriptii_Scolare_ADIZMB_1_135.png" /> 4061103324<br />\
    <img src="styles/legend/Circumscriptii_Scolare_ADIZMB_1_136.png" /> 4061103333<br />\
    <img src="styles/legend/Circumscriptii_Scolare_ADIZMB_1_137.png" /> 4061103369<br />\
    <img src="styles/legend/Circumscriptii_Scolare_ADIZMB_1_138.png" /> 4061103401<br />\
    <img src="styles/legend/Circumscriptii_Scolare_ADIZMB_1_139.png" /> 4061103428<br />\
    <img src="styles/legend/Circumscriptii_Scolare_ADIZMB_1_140.png" /> 4061103473<br />\
    <img src="styles/legend/Circumscriptii_Scolare_ADIZMB_1_141.png" /> 4061103505<br />\
    <img src="styles/legend/Circumscriptii_Scolare_ADIZMB_1_142.png" /> 4061103514<br />\
    <img src="styles/legend/Circumscriptii_Scolare_ADIZMB_1_143.png" /> 4061103532<br />\
    <img src="styles/legend/Circumscriptii_Scolare_ADIZMB_1_144.png" /> 4061103568<br />\
    <img src="styles/legend/Circumscriptii_Scolare_ADIZMB_1_145.png" /> 4061103595<br />\
    <img src="styles/legend/Circumscriptii_Scolare_ADIZMB_1_146.png" /> 4061103618<br />\
    <img src="styles/legend/Circumscriptii_Scolare_ADIZMB_1_147.png" /> 4061103636<br />\
    <img src="styles/legend/Circumscriptii_Scolare_ADIZMB_1_148.png" /> 4061103672<br />\
    <img src="styles/legend/Circumscriptii_Scolare_ADIZMB_1_149.png" /> 4061103681<br />\
    <img src="styles/legend/Circumscriptii_Scolare_ADIZMB_1_150.png" /> 4061103713<br />\
    <img src="styles/legend/Circumscriptii_Scolare_ADIZMB_1_151.png" /> 4061103722<br />\
    <img src="styles/legend/Circumscriptii_Scolare_ADIZMB_1_152.png" /> 4061103731<br />\
    <img src="styles/legend/Circumscriptii_Scolare_ADIZMB_1_153.png" /> 4061103758<br />\
    <img src="styles/legend/Circumscriptii_Scolare_ADIZMB_1_154.png" /> 4061103776<br />\
    <img src="styles/legend/Circumscriptii_Scolare_ADIZMB_1_155.png" /> 4061103785<br />\
    <img src="styles/legend/Circumscriptii_Scolare_ADIZMB_1_156.png" /> 4061103794<br />\
    <img src="styles/legend/Circumscriptii_Scolare_ADIZMB_1_157.png" /> 4061103808<br />\
    <img src="styles/legend/Circumscriptii_Scolare_ADIZMB_1_158.png" /> 4061103889<br />\
    <img src="styles/legend/Circumscriptii_Scolare_ADIZMB_1_159.png" /> 4061103898<br />\
    <img src="styles/legend/Circumscriptii_Scolare_ADIZMB_1_160.png" /> 4061103948<br />\
    <img src="styles/legend/Circumscriptii_Scolare_ADIZMB_1_161.png" /> 4061103975<br />\
    <img src="styles/legend/Circumscriptii_Scolare_ADIZMB_1_162.png" /> 4061103993<br />\
    <img src="styles/legend/Circumscriptii_Scolare_ADIZMB_1_163.png" /> 4061104004<br />\
    <img src="styles/legend/Circumscriptii_Scolare_ADIZMB_1_164.png" /> 4061104013<br />\
    <img src="styles/legend/Circumscriptii_Scolare_ADIZMB_1_165.png" /> 4061104022<br />\
    <img src="styles/legend/Circumscriptii_Scolare_ADIZMB_1_166.png" /> 4061104031<br />\
    <img src="styles/legend/Circumscriptii_Scolare_ADIZMB_1_167.png" /> 4061104058<br />\
    <img src="styles/legend/Circumscriptii_Scolare_ADIZMB_1_168.png" /> 4061104067<br />\
    <img src="styles/legend/Circumscriptii_Scolare_ADIZMB_1_169.png" /> 4061104094<br />\
    <img src="styles/legend/Circumscriptii_Scolare_ADIZMB_1_170.png" /> 4061104108<br />\
    <img src="styles/legend/Circumscriptii_Scolare_ADIZMB_1_171.png" /> 4061104126<br />\
    <img src="styles/legend/Circumscriptii_Scolare_ADIZMB_1_172.png" /> 4061104144<br />\
    <img src="styles/legend/Circumscriptii_Scolare_ADIZMB_1_173.png" /> 4061104153<br />\
    <img src="styles/legend/Circumscriptii_Scolare_ADIZMB_1_174.png" /> 4061104162<br />\
    <img src="styles/legend/Circumscriptii_Scolare_ADIZMB_1_175.png" /> 4061106051<br />\
    <img src="styles/legend/Circumscriptii_Scolare_ADIZMB_1_176.png" /> <br />'
        });
var format_Baze_Sportive_Bucureti_1991_2023baze_sportive_bucureti_1991_2023_2 = new ol.format.GeoJSON();
var features_Baze_Sportive_Bucureti_1991_2023baze_sportive_bucureti_1991_2023_2 = format_Baze_Sportive_Bucureti_1991_2023baze_sportive_bucureti_1991_2023_2.readFeatures(json_Baze_Sportive_Bucureti_1991_2023baze_sportive_bucureti_1991_2023_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Baze_Sportive_Bucureti_1991_2023baze_sportive_bucureti_1991_2023_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Baze_Sportive_Bucureti_1991_2023baze_sportive_bucureti_1991_2023_2.addFeatures(features_Baze_Sportive_Bucureti_1991_2023baze_sportive_bucureti_1991_2023_2);
var lyr_Baze_Sportive_Bucureti_1991_2023baze_sportive_bucureti_1991_2023_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Baze_Sportive_Bucureti_1991_2023baze_sportive_bucureti_1991_2023_2, 
                style: style_Baze_Sportive_Bucureti_1991_2023baze_sportive_bucureti_1991_2023_2,
                popuplayertitle: "Baze_Sportive_București_1991_2023 — baze_sportive_bucureti_1991_2023",
                interactive: false,
                title: '<img src="styles/legend/Baze_Sportive_Bucureti_1991_2023baze_sportive_bucureti_1991_2023_2.png" /> Baze_Sportive_București_1991_2023 — baze_sportive_bucureti_1991_2023'
            });
var format_coli_PNT_2022_2023_3 = new ol.format.GeoJSON();
var features_coli_PNT_2022_2023_3 = format_coli_PNT_2022_2023_3.readFeatures(json_coli_PNT_2022_2023_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_coli_PNT_2022_2023_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_coli_PNT_2022_2023_3.addFeatures(features_coli_PNT_2022_2023_3);
var lyr_coli_PNT_2022_2023_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_coli_PNT_2022_2023_3, 
                style: style_coli_PNT_2022_2023_3,
                popuplayertitle: "Școli_PNT_2022_2023",
                interactive: false,
                title: '<img src="styles/legend/coli_PNT_2022_2023_3.png" /> Școli_PNT_2022_2023'
            });

lyr_CartoLight_0.setVisible(true);lyr_Circumscriptii_Scolare_ADIZMB_1.setVisible(true);lyr_Baze_Sportive_Bucureti_1991_2023baze_sportive_bucureti_1991_2023_2.setVisible(true);lyr_coli_PNT_2022_2023_3.setVisible(true);
var layersList = [lyr_CartoLight_0,lyr_Circumscriptii_Scolare_ADIZMB_1,lyr_Baze_Sportive_Bucureti_1991_2023baze_sportive_bucureti_1991_2023_2,lyr_coli_PNT_2022_2023_3];
lyr_Circumscriptii_Scolare_ADIZMB_1.set('fieldAliases', {'fid': 'fid', 'Trup': 'Trup', 'Denumire': 'Denumire', 'Nr_Schimbu': 'Nr_Schimbu', 'Schimb_1': 'Schimb_1', 'Schimb_2': 'Schimb_2', 'Schimb_3': 'Schimb_3', 'Nr_săli_o': 'Nr_săli_o', 'Laboratoar': 'Laboratoar', 'Săli_clas': 'Săli_clas', 'Personal_c': 'Personal_c', 'Personal_n': 'Personal_n', 'Personal_1': 'Personal_1', 'Sector': 'Sector', 'Adrese_Lim': 'Adrese_Lim', 'Cod_SIIIR': 'Cod_SIIIR', 'Observați': 'Observați', 'Autor': 'Autor', 'Dată_crea': 'Dată_crea', });
lyr_Baze_Sportive_Bucureti_1991_2023baze_sportive_bucureti_1991_2023_2.set('fieldAliases', {'fid': 'fid', 'Nume': 'Nume', 'AKA': 'AKA', 'Siruta': 'Siruta', 'Județ': 'Județ', 'UAT': 'UAT', 'Sector': 'Sector', 'Localitate': 'Localitate', 'Adresa': 'Adresa', 'Numar cadastral': 'Numar cadastral', 'Parcelă Completă': 'Parcelă Completă', 'Identificare plan cadastral 1991': 'Identificare plan cadastral 1991', 'Fost proprietar': 'Fost proprietar', 'Proprietar actual': 'Proprietar actual', 'Administrator': 'Administrator', 'Bunuri administrate': 'Bunuri administrate', 'Tip proprietate': 'Tip proprietate', 'Stare': 'Stare', 'Funcțiune actuală': 'Funcțiune actuală', 'În prezent găzduiește': 'În prezent găzduiește', 'Observatii / referinte (extras CF)': 'Observatii / referinte (extras CF)', 'Sarcini': 'Sarcini', 'Date referitoare la teren (extras CF)': 'Date referitoare la teren (extras CF)', 'Date referitoare la constructii (extras CF)': 'Date referitoare la constructii (extras CF)', 'PROPRIETAR': 'PROPRIETAR', });
lyr_coli_PNT_2022_2023_3.set('fieldAliases', {'POINT_X': 'POINT_X', 'POINT_Y': 'POINT_Y', 'CF': 'CF', 'SIIIR': 'SIIIR', 'Statutul': 'Statutul', 'Unit_înv': 'Unit_înv', 'Observ': 'Observ', 'Tip_unit': 'Tip_unit', 'Coduri': 'Coduri', 'Creșă': 'Creșă', 'Preșcolar': 'Preșcolar', 'Primar': 'Primar', 'Gimnazial': 'Gimnazial', 'Liceal': 'Liceal', 'Vocaționa': 'Vocaționa', 'Profes': 'Profes', 'Postliceal': 'Postliceal', 'Uni': 'Uni', 'Special': 'Special', 'Club': 'Club', 'Adresă': 'Adresă', 'Cod_poșta': 'Cod_poșta', 'Localitate': 'Localitate', 'Sector': 'Sector', 'E_mail': 'E_mail', 'Website': 'Website', 'Telefon': 'Telefon', 'Tip_propri': 'Tip_propri', 'Nr_elevi': 'Nr_elevi', 'Schimbul_1': 'Schimbul_1', 'Schimbul_2': 'Schimbul_2', 'Schimbul_3': 'Schimbul_3', 'Mod_funcț': 'Mod_funcț', 'Nr_schimb': 'Nr_schimb', 'Săli_clas': 'Săli_clas', 'Laborat': 'Laborat', 'Sală_mese': 'Sală_mese', 'Biblio': 'Biblio', 'Cămin': 'Cămin', 'Sală_spor': 'Sală_spor', 'Teren_ext': 'Teren_ext', 'Bazin_îno': 'Bazin_îno', 'Atelier': 'Atelier', 'Cab_medic': 'Cab_medic', 'Total_săl': 'Total_săl', 'Pers_cali': 'Pers_cali', 'Pers_necal': 'Pers_necal', 'Pers_neces': 'Pers_neces', 'Sursă_inf': 'Sursă_inf', 'Data_recep': 'Data_recep', 'Autor': 'Autor', });
lyr_Circumscriptii_Scolare_ADIZMB_1.set('fieldImages', {'fid': 'TextEdit', 'Trup': 'TextEdit', 'Denumire': 'TextEdit', 'Nr_Schimbu': 'TextEdit', 'Schimb_1': 'TextEdit', 'Schimb_2': 'TextEdit', 'Schimb_3': 'TextEdit', 'Nr_săli_o': 'TextEdit', 'Laboratoar': 'TextEdit', 'Săli_clas': 'TextEdit', 'Personal_c': 'TextEdit', 'Personal_n': 'TextEdit', 'Personal_1': 'TextEdit', 'Sector': 'TextEdit', 'Adrese_Lim': 'TextEdit', 'Cod_SIIIR': 'TextEdit', 'Observați': 'TextEdit', 'Autor': 'TextEdit', 'Dată_crea': 'TextEdit', });
lyr_Baze_Sportive_Bucureti_1991_2023baze_sportive_bucureti_1991_2023_2.set('fieldImages', {'fid': 'TextEdit', 'Nume': 'TextEdit', 'AKA': 'TextEdit', 'Siruta': 'Range', 'Județ': 'TextEdit', 'UAT': 'TextEdit', 'Sector': 'Range', 'Localitate': 'TextEdit', 'Adresa': 'TextEdit', 'Numar cadastral': 'TextEdit', 'Parcelă Completă': 'TextEdit', 'Identificare plan cadastral 1991': 'TextEdit', 'Fost proprietar': 'TextEdit', 'Proprietar actual': 'TextEdit', 'Administrator': 'TextEdit', 'Bunuri administrate': 'TextEdit', 'Tip proprietate': 'TextEdit', 'Stare': 'TextEdit', 'Funcțiune actuală': 'TextEdit', 'În prezent găzduiește': 'TextEdit', 'Observatii / referinte (extras CF)': 'TextEdit', 'Sarcini': 'TextEdit', 'Date referitoare la teren (extras CF)': 'TextEdit', 'Date referitoare la constructii (extras CF)': 'TextEdit', 'PROPRIETAR': 'TextEdit', });
lyr_coli_PNT_2022_2023_3.set('fieldImages', {'POINT_X': 'TextEdit', 'POINT_Y': 'TextEdit', 'CF': 'TextEdit', 'SIIIR': 'TextEdit', 'Statutul': 'TextEdit', 'Unit_înv': 'TextEdit', 'Observ': 'TextEdit', 'Tip_unit': 'TextEdit', 'Coduri': 'TextEdit', 'Creșă': 'TextEdit', 'Preșcolar': 'TextEdit', 'Primar': 'TextEdit', 'Gimnazial': 'TextEdit', 'Liceal': 'TextEdit', 'Vocaționa': 'TextEdit', 'Profes': 'TextEdit', 'Postliceal': 'TextEdit', 'Uni': 'TextEdit', 'Special': 'TextEdit', 'Club': 'TextEdit', 'Adresă': 'TextEdit', 'Cod_poșta': 'TextEdit', 'Localitate': 'TextEdit', 'Sector': 'TextEdit', 'E_mail': 'TextEdit', 'Website': 'TextEdit', 'Telefon': 'TextEdit', 'Tip_propri': 'TextEdit', 'Nr_elevi': 'TextEdit', 'Schimbul_1': 'TextEdit', 'Schimbul_2': 'TextEdit', 'Schimbul_3': 'TextEdit', 'Mod_funcț': 'TextEdit', 'Nr_schimb': 'TextEdit', 'Săli_clas': 'TextEdit', 'Laborat': 'TextEdit', 'Sală_mese': 'TextEdit', 'Biblio': 'TextEdit', 'Cămin': 'TextEdit', 'Sală_spor': 'TextEdit', 'Teren_ext': 'TextEdit', 'Bazin_îno': 'TextEdit', 'Atelier': 'TextEdit', 'Cab_medic': 'TextEdit', 'Total_săl': 'TextEdit', 'Pers_cali': 'TextEdit', 'Pers_necal': 'TextEdit', 'Pers_neces': 'TextEdit', 'Sursă_inf': 'TextEdit', 'Data_recep': 'TextEdit', 'Autor': 'TextEdit', });
lyr_Circumscriptii_Scolare_ADIZMB_1.set('fieldLabels', {'fid': 'no label', 'Trup': 'no label', 'Denumire': 'no label', 'Nr_Schimbu': 'no label', 'Schimb_1': 'no label', 'Schimb_2': 'no label', 'Schimb_3': 'no label', 'Nr_săli_o': 'no label', 'Laboratoar': 'no label', 'Săli_clas': 'no label', 'Personal_c': 'no label', 'Personal_n': 'no label', 'Personal_1': 'no label', 'Sector': 'no label', 'Adrese_Lim': 'no label', 'Cod_SIIIR': 'no label', 'Observați': 'no label', 'Autor': 'no label', 'Dată_crea': 'no label', });
lyr_Baze_Sportive_Bucureti_1991_2023baze_sportive_bucureti_1991_2023_2.set('fieldLabels', {'fid': 'hidden field', 'Nume': 'hidden field', 'AKA': 'hidden field', 'Siruta': 'hidden field', 'Județ': 'hidden field', 'UAT': 'hidden field', 'Sector': 'hidden field', 'Localitate': 'hidden field', 'Adresa': 'hidden field', 'Numar cadastral': 'hidden field', 'Parcelă Completă': 'hidden field', 'Identificare plan cadastral 1991': 'hidden field', 'Fost proprietar': 'hidden field', 'Proprietar actual': 'hidden field', 'Administrator': 'hidden field', 'Bunuri administrate': 'hidden field', 'Tip proprietate': 'hidden field', 'Stare': 'hidden field', 'Funcțiune actuală': 'hidden field', 'În prezent găzduiește': 'hidden field', 'Observatii / referinte (extras CF)': 'hidden field', 'Sarcini': 'hidden field', 'Date referitoare la teren (extras CF)': 'hidden field', 'Date referitoare la constructii (extras CF)': 'hidden field', 'PROPRIETAR': 'hidden field', });
lyr_coli_PNT_2022_2023_3.set('fieldLabels', {'POINT_X': 'hidden field', 'POINT_Y': 'hidden field', 'CF': 'hidden field', 'SIIIR': 'hidden field', 'Statutul': 'hidden field', 'Unit_înv': 'hidden field', 'Observ': 'hidden field', 'Tip_unit': 'hidden field', 'Coduri': 'hidden field', 'Creșă': 'hidden field', 'Preșcolar': 'hidden field', 'Primar': 'hidden field', 'Gimnazial': 'hidden field', 'Liceal': 'hidden field', 'Vocaționa': 'hidden field', 'Profes': 'hidden field', 'Postliceal': 'hidden field', 'Uni': 'hidden field', 'Special': 'hidden field', 'Club': 'hidden field', 'Adresă': 'hidden field', 'Cod_poșta': 'hidden field', 'Localitate': 'hidden field', 'Sector': 'hidden field', 'E_mail': 'hidden field', 'Website': 'hidden field', 'Telefon': 'hidden field', 'Tip_propri': 'hidden field', 'Nr_elevi': 'hidden field', 'Schimbul_1': 'hidden field', 'Schimbul_2': 'hidden field', 'Schimbul_3': 'hidden field', 'Mod_funcț': 'hidden field', 'Nr_schimb': 'hidden field', 'Săli_clas': 'hidden field', 'Laborat': 'hidden field', 'Sală_mese': 'hidden field', 'Biblio': 'no label', 'Cămin': 'no label', 'Sală_spor': 'no label', 'Teren_ext': 'no label', 'Bazin_îno': 'no label', 'Atelier': 'no label', 'Cab_medic': 'no label', 'Total_săl': 'no label', 'Pers_cali': 'no label', 'Pers_necal': 'no label', 'Pers_neces': 'no label', 'Sursă_inf': 'no label', 'Data_recep': 'no label', 'Autor': 'no label', });
lyr_coli_PNT_2022_2023_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});