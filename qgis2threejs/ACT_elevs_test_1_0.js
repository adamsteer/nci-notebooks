// Qgis2threejs Project
project = new Q3D.Project({crs:"EPSG:28355",wgs84Center:{lat:-35.4361596983,lon:149.426925544},proj:"+proj=utm +zone=55 +south +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",title:"ACT_elevs_test_1",baseExtent:[690273.582572,6050762.15315,750328.792419,6100999.07255],rotation:0,zShift:0.0,width:100.0,zExaggeration:10.0});

// Layer 0
lyr = project.addLayer(new Q3D.DEMLayer({q:1,shading:true,type:"dem",name:"WCS1528164376559467504"}));
