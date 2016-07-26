// Qgis2threejs Project
project = new Q3D.Project({crs:"EPSG:28355",wgs84Center:{lat:-35.3175620835,lon:149.292691039},proj:"+proj=utm +zone=55 +south +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",title:"ACT_elevs_test_2",baseExtent:[682630.174095,6067755.51619,734207.741994,6110900.78416],rotation:0,zShift:0.0,width:100.0,zExaggeration:10.0});

// Layer 0
lyr = project.addLayer(new Q3D.DEMLayer({q:1,shading:true,type:"dem",name:"WCS1528164376559467504"}));
