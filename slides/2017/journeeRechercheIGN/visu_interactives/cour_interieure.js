// Qgis2threejs Project
project = new Q3D.Project({crs:"EPSG:3857",wgs84Center:{lat:48.5702000362,lon:7.76260580982},proj:"+proj=merc +a=6378137 +b=6378137 +lat_ts=0.0 +lon_0=0.0 +x_0=0.0 +y_0=0 +k=1.0 +units=m +nadgrids=@null +wktext  +no_defs",title:"cour_interieure",baseExtent:[863720.451932,6202012.21527,864538.200023,6202478.82506],rotation:0,zShift:0.0,width:100.0,zExaggeration:1.5});

// Layer 0
lyr = project.addLayer(new Q3D.DEMLayer({q:1,shading:true,type:"dem",name:"Flat Plane"}));
bl = lyr.addBlock({width:2,plane:{width:100.0,offsetX:0,offsetY:0,height:57.0603337612},m:0,sides:true,height:2}, false);
bl.data = [0,0,0,0];
lyr.stats = {max:0,min:0};
lyr.m[0] = {i:0,type:1,ds:1};

// Layer 1
lyr = project.addLayer(new Q3D.PolygonLayer({q:1,objType:"Extruded",type:"polygon",name:"run_-7813544670394276329out"}));
lyr.f[0] = {h:3.563189871,m:0,polygons:[[[[9.7105414105,-1.1892591695],[7.4752634855,-0.184944854045],[8.93291700154,3.07849778769],[11.1682003462,2.07417759512],[9.7105414105,-1.1892591695]]]],zs:[0.0]};
lyr.f[1] = {h:4.21752198583,m:1,polygons:[[[[-11.8498299362,1.54039653962],[-15.2327013455,3.01935319089],[-13.8608593783,6.17577124357],[-10.4779799463,4.69680595851],[-11.8498299362,1.54039653962]]]],zs:[0.0]};
lyr.f[2] = {h:3.50958421911,m:0,polygons:[[[[-12.4763866482,0.246418270542],[-15.8646241032,1.71295771513],[-15.2932614152,3.04081977214],[-11.9050203801,1.57427671455],[-12.4763866482,0.246418270542]]]],zs:[0.0]};
lyr.f[3] = {h:1.92665929705,m:2,polygons:[[[[-12.3178311807,-0.395650633957],[-13.5365457869,0.112264041354],[-13.1352220131,1.08091184441],[-11.9165065011,0.572996259245],[-12.3178311807,-0.395650633957]]]],zs:[0.0]};
lyr.f[4] = {h:3.85773007488,m:1,polygons:[[[[-14.4639970933,4.03189476369],[-15.5838490462,1.69018979139],[-17.6569074218,2.68742493154],[-16.5370591205,5.029134234],[-14.4639970933,4.03189476369]]]],zs:[0.0]};
lyr.f[5] = {h:3.75831580139,m:1,polygons:[[[[-13.641257343,5.9852803482],[-14.7570153546,4.08008436156],[-16.5001635505,5.10697123291],[-15.3844075455,7.01217102286],[-13.641257343,5.9852803482]]]],zs:[0.0]};
lyr.f[6] = {h:1.84262164674,m:2,polygons:[[[[-18.0643835907,2.00505082837],[-18.86032478,2.48805712291],[-17.4395611572,4.84315521589],[-16.6436188658,4.36014681748],[-18.0643835907,2.00505082837]]]],zs:[0.0]};
lyr.f[7] = {h:4.21749915884,m:1,polygons:[[[[-7.11559856894,5.06431947296],[-7.95679878844,5.44432041024],[-7.22026483879,7.08440708371],[-6.37906359923,6.70440499389],[-7.11559856894,5.06431947296]]]],zs:[0.0]};
lyr.f[8] = {h:4.12099560558,m:1,polygons:[[[[-4.58474790698,10.3838563848],[-5.53918955862,8.59451381083],[-8.02226223385,9.92681649929],[-7.06782332895,11.7161636556],[-4.58474790698,10.3838563848]]]],zs:[0.0]};
lyr.f[9] = {h:4.21751808871,m:1,polygons:[[[[-6.2526609244,6.78542514632],[-7.13820252706,7.04501823297],[-6.55798379151,9.03599793898],[-5.67244070395,8.77640371174],[-6.2526609244,6.78542514632]]]],zs:[0.0]};
lyr.f[10] = {h:1.83943744884,m:2,polygons:[[[[-6.31361608526,10.7161086113],[-7.16915886912,11.6593837938],[-6.4864864658,12.2822216052],[-5.63094378481,11.3389453367],[-6.31361608526,10.7161086113]]]],zs:[0.0]};
lyr.f[11] = {h:4.19428015128,m:1,polygons:[[[[9.48533210714,-1.07491695467],[8.00878334713,-4.46683324529],[6.01159255854,-3.59229323229],[7.48813623275,-0.200371455542],[9.48533210714,-1.07491695467]]]],zs:[0.0]};
lyr.f[12] = {h:4.21753183812,m:1,polygons:[[[[2.93725083095,-0.0361812388172],[2.17711809135,-1.74640505268],[0.243499039939,-0.881904610787],[1.00362933275,0.828322122158],[2.93725083095,-0.0361812388172]]]],zs:[0.0]};
lyr.f[13] = {h:4.21750576653,m:1,polygons:[[[[1.07292135968,0.946683215049],[-0.481852204158,-2.40983269598],[-2.24357494422,-1.58896408883],[-0.688805692734,1.76755673319],[1.07292135968,0.946683215049]]]],zs:[0.0]};
lyr.f[14] = {h:4.21753021615,m:1,polygons:[[[[-0.455763142244,-2.41251850114],[-1.28892845082,-4.25088267091],[-3.08604349267,-3.43160053946],[-2.25288061564,-1.59323358442],[-0.455763142244,-2.41251850114]]]],zs:[0.0]};
lyr.f[15] = {h:4.2175288413,m:1,polygons:[[[[0.753302825416,-5.12887632592],[-1.2645409683,-4.25499287108],[0.19290269499,-0.869783573115],[2.2107518277,-1.74367251045],[0.753302825416,-5.12887632592]]]],zs:[0.0]};
lyr.f[16] = {h:2.00697391343,m:2,polygons:[[[[0.356243797574,-4.74332296159],[-0.00464970981299,-5.59664122373],[-3.40192510241,-4.15134846263],[-3.04103398431,-3.29802790882],[0.356243797574,-4.74332296159]]]],zs:[0.0]};
lyr.f[17] = {h:2.29245285433,m:2,polygons:[[[[-7.17121656262,-2.46278455527],[-9.21039191595,-1.59830453976],[-8.85119770604,-0.746010626768],[-6.81202103962,-1.61049218922],[-7.17121656262,-2.46278455527]]]],zs:[0.0]};
lyr.f[18] = {h:2.13546886219,m:2,polygons:[[[[-5.18308173413,-3.36389601556],[-7.19204114415,-2.5121338526],[-6.83281191487,-1.65984912382],[-4.8238512004,-2.51161262941],[-5.18308173413,-3.36389601556]]]],zs:[0.0]};
lyr.f[19] = {h:4.07679655759,m:1,polygons:[[[[-1.76475186921,-1.35380717358],[-2.79159229161,-3.65930536445],[-5.66398834209,-2.37242048182],[-4.63715282571,-0.0669166194084],[-1.76475186921,-1.35380717358]]]],zs:[0.0]};
lyr.f[20] = {h:4.21751841339,m:1,polygons:[[[[-5.66877584067,-2.38995931054],[-8.94166124383,-0.933878061466],[-7.91177265519,1.39472772513],[-4.63888156285,-0.0613596094671],[-5.66877584067,-2.38995931054]]]],zs:[0.0]};
lyr.f[21] = {h:2.23081533697,m:2,polygons:[[[[-2.67277943095,-3.38242989555],[-3.06261322237,-4.22108832579],[-4.36031601966,-3.61431305301],[-3.97048319115,-2.77565348593],[-2.67277943095,-3.38242989555]]]],zs:[0.0]};
lyr.f[22] = {h:1.86342482835,m:2,polygons:[[[[10.3955278302,2.09732573317],[8.82002302555,2.95792253539],[9.26128762356,3.77052610945],[10.8367930794,2.90992802474],[10.3955278302,2.09732573317]]]],zs:[0.0]};
lyr.f[23] = {h:1.82279109814,m:2,polygons:[[[[-10.910749796,-0.331036058676],[-12.2018898296,-0.48575033759],[-12.3159316413,0.471584755495],[-11.0247904775,0.626299308539],[-10.910749796,-0.331036058676]]]],zs:[0.0]};
lyr.f[24] = {h:4.20775441612,m:1,polygons:[[[[-7.90898125729,1.39185319252],[-8.95903409533,-1.00481671696],[-12.3375045601,0.484132777121],[-11.2874577826,2.88080928667],[-7.90898125729,1.39185319252]]]],zs:[0.0]};
lyr.f[25] = {h:1.92793964715,m:2,polygons:[[[[-8.91911281838,-1.85039118391],[-10.838069787,-1.03247709032],[-10.2331649151,0.395116951337],[-8.31420586402,-0.422799301805],[-8.91911281838,-1.85039118391]]]],zs:[0.0]};
lyr.f[26] = {h:2.43584003508,m:3,polygons:[[[[1.34221208294,-6.01628085995],[0.190024359794,-5.52488596994],[0.662858667923,-4.40966368164],[1.81504737857,-4.90105940053],[1.34221208294,-6.01628085995]]]],zs:[0.0]};
lyr.f[27] = {h:4.2175271972,m:1,polygons:[[[[5.51139602556,-5.56496312701],[2.16830016182,-4.05013507611],[3.67883630403,-0.69680012341],[7.02194045474,-2.21163738472],[5.51139602556,-5.56496312701]]]],zs:[0.0]};
lyr.f[28] = {h:3.49136878912,m:0,polygons:[[[[4.87248583237,-7.08949012709],[1.50429132266,-5.57728901228],[2.18248187871,-4.05779119432],[5.55067998933,-5.5699967321],[4.87248583237,-7.08949012709]]]],zs:[0.0]};
lyr.f[29] = {h:4.21751947295,m:1,polygons:[[[[2.23918218776,-3.87462855144],[1.79437018619,-4.91051916911],[0.659260694891,-4.42022242891],[1.10407198119,-3.38433106812],[2.23918218776,-3.87462855144]]]],zs:[0.0]};
lyr.f[30] = {h:4.21752355942,m:1,polygons:[[[[2.27413837842,-3.89098639295],[1.10326486121,-3.38241951334],[2.56979864465,0.0139358794297],[3.74067497475,-0.494634182688],[2.27413837842,-3.89098639295]]]],zs:[0.0]};
lyr.f[31] = {h:1.85747285061,m:2,polygons:[[[[8.71698874036,-4.79373260168],[7.80987554237,-5.63035481834],[7.17069340555,-4.9332220058],[8.07780670538,-4.09659852589],[8.71698874036,-4.79373260168]]]],zs:[0.0]};
lyr.f[32] = {h:2.12463024913,m:2,polygons:[[[[6.93311917541,-8.45725964475],[4.37938884522,-7.32817946742],[5.44628874134,-4.90082001117],[8.00002371502,-6.02990507239],[6.93311917541,-8.45725964475]]]],zs:[0.0]};
lyr.f[33] = {h:1.89779483165,m:2,polygons:[[[[8.71913381001,-4.76991704676],[7.86955947997,-4.40915685841],[9.30832930289,-1.00089298743],[10.1579058483,-1.36165526552],[8.71913381001,-4.76991704676]]]],zs:[0.0]};
lyr.f[34] = {h:4.21752680928,m:1,polygons:[[[[8.09252131601,-4.10509866507],[6.82846590184,-6.99564022373],[4.89471562859,-6.14500198963],[6.15876667083,-3.25445587258],[8.09252131601,-4.10509866507]]]],zs:[0.0]};
lyr.f[35] = {h:4.21750817631,m:1,polygons:[[[[-0.6918229725,8.27158863951],[-1.61735264434,6.19072487559],[-4.25322419461,7.37003578925],[-3.32769859785,9.45090409186],[-0.6918229725,8.27158863951]]]],zs:[0.0]};
lyr.f[36] = {h:2.23295763417,m:2,polygons:[[[[-1.92591546289,9.15755151254],[-2.66214778261,8.59990219638],[-3.31217180984,9.46316257826],[-2.57593923693,10.0208127849],[-1.92591546289,9.15755151254]]]],zs:[0.0]};
lyr.f[37] = {h:1.99824295065,m:2,polygons:[[[[-11.8797889321,11.7309042905],[-12.7233757429,10.1288515214],[-13.6929804496,10.6424291131],[-12.849394678,12.2444834035],[-11.8797889321,11.7309042905]]]],zs:[0.0]};
lyr.f[38] = {h:3.95671669213,m:1,polygons:[[[[-9.75428213257,11.2926878254],[-11.000133345,9.20681432771],[-13.129714405,10.4862842601],[-11.8838656393,12.5721628673],[-9.75428213257,11.2926878254]]]],zs:[0.0]};
lyr.f[39] = {h:2.98990132915,m:4,polygons:[[[[-8.86496775159,13.0579269002],[-9.79292094645,11.3580448343],[-12.1245364067,12.6383747216],[-11.196585786,14.3382608129],[-8.86496775159,13.0579269002]]]],zs:[0.0]};
lyr.f[40] = {h:3.49559187405,m:0,polygons:[[[[-13.0474284954,7.47613400203],[-14.2223782109,9.03171933594],[-13.3982089581,9.65790213943],[-12.2232597494,8.10231500369],[-13.0474284954,7.47613400203]]]],zs:[0.0]};
lyr.f[41] = {h:1.81721154726,m:2,polygons:[[[[-12.6152401428,10.2232351034],[-12.884406659,9.1116370034],[-14.2179524653,9.43645445612],[-13.9487870589,10.5480532126],[-12.6152401428,10.2232351034]]]],zs:[0.0]};
lyr.f[42] = {h:4.21672188519,m:1,polygons:[[[[-6.78578966743,11.5390197661],[-7.70752157599,9.76442532045],[-10.2974623818,11.1175970163],[-9.37573357981,12.8921959034],[-6.78578966743,11.5390197661]]]],zs:[0.0]};
lyr.f[43] = {h:2.43755853486,m:3,polygons:[[[[-6.51689098066,12.0731053517],[-6.94338191311,11.2525562506],[-9.49822226058,12.588310732],[-9.07173292872,13.4088618717],[-6.51689098066,12.0731053517]]]],zs:[0.0]};
lyr.f[44] = {h:4.2174921971,m:1,polygons:[[[[3.55947557799,3.72963107512],[0.841252530235,5.16157185441],[1.75102993608,6.89879380056],[4.46925615558,5.46684842016],[3.55947557799,3.72963107512]]]],zs:[0.0]};
lyr.f[45] = {h:4.19851950248,m:1,polygons:[[[[9.25130103192,2.89065641312],[8.34148951072,1.16526410825],[5.74873645574,2.54051644733],[6.65854497665,4.26591295526],[9.25130103192,2.89065641312]]]],zs:[0.0]};
lyr.f[46] = {h:1.83756676811,m:2,polygons:[[[[9.36814426003,3.72688990434],[8.91890003577,2.85038369505],[6.47598589357,4.10987086203],[6.92522882931,4.98637891677],[9.36814426003,3.72688990434]]]],zs:[0.0]};
lyr.f[47] = {h:3.52800618564,m:0,polygons:[[[[7.03188753522,4.34153657296],[6.00807296807,2.4214799312],[3.29144847684,3.87859669232],[4.31525940497,5.79865851875],[7.03188753522,4.34153657296]]]],zs:[0.0]};
lyr.f[48] = {h:4.21751970477,m:1,polygons:[[[[-9.36438448133,6.46280422078],[-10.4345285741,4.25791499868],[-12.0109396197,5.02754673263],[-10.9407979872,7.23243909327],[-9.36438448133,6.46280422078]]]],zs:[0.0]};
lyr.f[49] = {h:4.21285294303,m:1,polygons:[[[[-10.9721285968,7.16415958],[-12.0520049728,4.94479147019],[-15.2182262854,6.49447539887],[-14.1383546911,8.71384985877],[-10.9721285968,7.16415958]]]],zs:[0.0]};
lyr.f[50] = {h:4.21750949044,m:1,polygons:[[[[-5.56680000054,4.30283531709],[-7.60918501288,5.23520793284],[-7.09939684849,6.35851358388],[-5.05701014931,5.42613903054],[-5.56680000054,4.30283531709]]]],zs:[0.0]};
lyr.f[51] = {h:4.20859562119,m:1,polygons:[[[[-2.88707609159,9.43451032359],[-4.54473008918,6.27580698119],[-6.5656521074,7.34262916899],[-4.90800239065,10.5013387438],[-2.88707609159,9.43451032359]]]],zs:[0.0]};
lyr.f[52] = {h:4.21752640403,m:1,polygons:[[[[-5.04147566663,5.32777042367],[-7.07065354423,6.38803531662],[-6.57576681007,7.34076888645],[-4.54658781022,6.2805021362],[-5.04147566663,5.32777042367]]]],zs:[0.0]};
lyr.f[53] = {h:1.83355504018,m:2,polygons:[[[[-3.4895150032,9.48004339856],[-5.05021829873,10.3181210942],[-4.55918324088,11.2379528031],[-2.99847899559,10.399873682],[-3.4895150032,9.48004339856]]]],zs:[0.0]};
lyr.f[54] = {h:1.88266290981,m:2,polygons:[[[[4.0738744835,6.57187911361],[3.60613202291,5.68238398792],[1.57283918747,6.75791061699],[2.04058043714,7.64740751114],[4.0738744835,6.57187911361]]]],zs:[0.0]};
lyr.f[55] = {h:3.07156720761,m:4,polygons:[[[[2.16857438252,7.15921615767],[1.58744561668,6.04958845084],[-1.336929546,7.59017342306],[-0.755802959897,8.69980429155],[2.16857438252,7.15921615767]]]],zs:[0.0]};
lyr.f[56] = {h:4.21752371092,m:1,polygons:[[[[1.64400699674,5.74608133924],[0.191022654678,4.3321397157],[-1.94619878715,6.54134883311],[-0.493214086584,7.9552962225],[1.64400699674,5.74608133924]]]],zs:[0.0]};
lyr.f[57] = {h:4.21752909348,m:1,polygons:[[[[0.884742149717,4.35804020646],[-0.215612303806,1.92446258397],[-1.62181914865,2.56404211693],[-0.52146721672,4.99762261806],[0.884742149717,4.35804020646]]]],zs:[0.0]};
lyr.m[0] = {c:0x2878b8,type:0};
lyr.m[1] = {c:0x08306b,type:0};
lyr.m[2] = {c:0xf7fbff,type:0};
lyr.m[3] = {c:0xc7dcef,type:0};
lyr.m[4] = {c:0x72b2d7,type:0};

// Layer 2
lyr = project.addLayer(new Q3D.PolygonLayer({q:1,name:"parcelle",objType:"Overlay",am:"relative",type:"polygon",sbm:"absolute"}));
lyr.f[0] = {split_polygons:[[[[9.3910079619,3.75879245242],[11.5780609692,2.55691505575],[11.9795491239,2.37345802508],[9.62502025503,-2.8945222938],[8.84126452474,-4.63254145701],[6.25339787963,-3.49851575405],[6.91573693503,-1.96651726562],[7.56929753994,-0.467196855191],[9.3910079619,3.75879245242]]]],h:0.0,m:0,polygons:[[[[9.3910079619,3.75879245242],[11.5780609692,2.55691505575],[11.9795491239,2.37345802508],[9.62502025503,-2.8945222938],[8.84126452474,-4.63254145701],[6.25339787963,-3.49851575405],[6.91573693503,-1.96651726562],[7.56929753994,-0.467196855191],[9.3910079619,3.75879245242]]]],mb:1};
lyr.f[1] = {split_polygons:[[[[4.62876554066,6.33086086771],[4.46864035332,5.99045954449],[3.13861896197,3.00659633352],[2.73144120244,2.12063744692],[0.258073933494,3.41604516641],[2.12950364543,7.48639130383],[2.20305134911,7.65380421077],[4.62876554066,6.33086086771]]]],h:0.0,m:0,polygons:[[[[4.62876554066,6.33086086771],[4.46864035332,5.99045954449],[3.13861896197,3.00659633352],[2.73144120244,2.12063744692],[0.258073933494,3.41604516641],[2.12950364543,7.48639130383],[2.20305134911,7.65380421077],[4.62876554066,6.33086086771]]]],mb:1};
lyr.f[2] = {split_polygons:[[[[0.138632457529,8.78458464918],[2.20305134911,7.65380421077],[2.12950364543,7.48639130383],[0.258073933494,3.41604516641],[-1.13838549375,0.356099951263],[-1.70679465729,0.613315391741],[-6.58350363425,2.78646188028],[-5.0563364015,5.69846449841],[-4.88206307962,5.62823411883],[-2.65247964417,4.67126587716],[-0.367647580445,9.04599645208],[0.138632457529,8.78458464918]]]],h:0.0,m:0,polygons:[[[[0.138632457529,8.78458464918],[2.20305134911,7.65380421077],[2.12950364543,7.48639130383],[0.258073933494,3.41604516641],[-1.13838549375,0.356099951263],[-1.70679465729,0.613315391741],[-6.58350363425,2.78646188028],[-5.0563364015,5.69846449841],[-4.88206307962,5.62823411883],[-2.65247964417,4.67126587716],[-0.367647580445,9.04599645208],[0.138632457529,8.78458464918]]]],mb:1};
lyr.f[3] = {split_polygons:[[[[-13.4285054858,-0.00879159560277],[-15.9468679105,1.06668714213],[-13.8734881228,5.98892963241],[-13.5277620079,5.82795483639],[-11.7280454493,5.04423660215],[-10.5188824307,4.51118499196],[-10.4376454649,4.48470859572],[-10.9604935421,3.23214298985],[-12.5183072918,-0.386952607706],[-13.4285054858,-0.00879159560277]]]],h:0.0,m:0,polygons:[[[[-13.4285054858,-0.00879159560277],[-15.9468679105,1.06668714213],[-13.8734881228,5.98892963241],[-13.5277620079,5.82795483639],[-11.7280454493,5.04423660215],[-10.5188824307,4.51118499196],[-10.4376454649,4.48470859572],[-10.9604935421,3.23214298985],[-12.5183072918,-0.386952607706],[-13.4285054858,-0.00879159560277]]]],mb:1};
lyr.f[4] = {split_polygons:[[[[-16.186619623,6.99469636006],[-15.8136892263,6.86390221652],[-15.7397625698,7.03765859743],[-14.2341524271,6.11261617927],[-13.8734881228,5.98892963241],[-15.9468679105,1.06668714213],[-18.6392434708,2.20362043355],[-18.9849691867,2.36459304291],[-16.186619623,6.99469636006]]]],h:0.0,m:0,polygons:[[[[-16.186619623,6.99469636006],[-15.8136892263,6.86390221652],[-15.7397625698,7.03765859743],[-14.2341524271,6.11261617927],[-13.8734881228,5.98892963241],[-15.9468679105,1.06668714213],[-18.6392434708,2.20362043355],[-18.9849691867,2.36459304291],[-16.186619623,6.99469636006]]]],mb:1};
lyr.f[5] = {split_polygons:[[[[-8.32297205222,3.55225484942],[-10.4376454649,4.48470859572],[-10.5188824307,4.51118499196],[-9.55850100649,6.39759825593],[-8.67586071175,8.22354958745],[-6.57275180153,12.3737883203],[-4.38669730178,11.192655736],[-8.32297205222,3.55225484942]]]],h:0.0,m:0,polygons:[[[[-8.32297205222,3.55225484942],[-10.4376454649,4.48470859572],[-10.5188824307,4.51118499196],[-9.55850100649,6.39759825593],[-8.67586071175,8.22354958745],[-6.57275180153,12.3737883203],[-4.38669730178,11.192655736],[-8.32297205222,3.55225484942]]]],mb:1};
lyr.f[6] = {split_polygons:[[[[0.258073933494,3.41604516641],[2.73144120244,2.12063744692],[3.22856305997,1.84222885771],[-1.77467448435,-1.01263518395],[-1.13838549375,0.356099951263],[0.258073933494,3.41604516641]]],[[[3.22856305997,1.84222885771],[3.46145763872,1.7117983604],[3.02925441717,0.673801182047],[1.81365688309,-2.19938189336],[0.717893453403,-4.7515383548],[0.242779034357,-5.82401706211],[-3.30198164609,-4.29805895431],[-1.77467448435,-1.01263518395],[3.22856305997,1.84222885771]]]],h:0.0,m:0,polygons:[[[[0.258073933494,3.41604516641],[2.73144120244,2.12063744692],[3.46145763872,1.7117983604],[3.02925441717,0.673801182047],[1.81365688309,-2.19938189336],[0.717893453403,-4.7515383548],[0.242779034357,-5.82401706211],[-3.30198164609,-4.29805895431],[-1.13838549375,0.356099951263],[0.258073933494,3.41604516641]]]],mb:1};
lyr.f[7] = {split_polygons:[[[[-6.58350363425,2.78646188028],[-1.70679465729,0.613315391741],[-1.13838549375,0.356099951263],[-1.77467448435,-1.01263518395],[-5.74413688297,-3.27762367713],[-9.11552768564,-1.84699745407],[-7.07199889398,3.00064268845],[-6.58350363425,2.78646188028]]],[[[-1.77467448435,-1.01263518395],[-3.30198164609,-4.29805895431],[-4.04554069257,-3.99841114871],[-5.74413688297,-3.27762367713],[-1.77467448435,-1.01263518395]]]],h:0.0,m:0,polygons:[[[[-6.58350363425,2.78646188028],[-1.70679465729,0.613315391741],[-1.13838549375,0.356099951263],[-3.30198164609,-4.29805895431],[-4.04554069257,-3.99841114871],[-9.11552768564,-1.84699745407],[-7.07199889398,3.00064268845],[-6.58350363425,2.78646188028]]]],mb:1};
lyr.f[8] = {split_polygons:[[[[-10.4376454649,4.48470859572],[-8.32297205222,3.55225484942],[-7.07199889398,3.00064268845],[-9.11552768564,-1.84699745407],[-12.5183072918,-0.386952607706],[-10.9604935421,3.23214298985],[-10.4376454649,4.48470859572]]]],h:0.0,m:0,polygons:[[[[-10.4376454649,4.48470859572],[-8.32297205222,3.55225484942],[-7.07199889398,3.00064268845],[-9.11552768564,-1.84699745407],[-12.5183072918,-0.386952607706],[-10.9604935421,3.23214298985],[-10.4376454649,4.48470859572]]]],mb:1};
lyr.f[9] = {split_polygons:[[[[3.46145763872,1.7117983604],[5.16866509846,0.791254991296],[7.53394350376,-0.472818702304],[7.5425614539,-0.453181311649],[7.56929753994,-0.467196855191],[6.91573693503,-1.96651726562],[6.25339787963,-3.49851575405],[4.47597482153,-7.56354915533],[0.242779034357,-5.82401706211],[0.717893453403,-4.7515383548],[1.81365688309,-2.19938189336],[3.02925441717,0.673801182047],[3.46145763872,1.7117983604]]]],h:0.0,m:0,polygons:[[[[3.46145763872,1.7117983604],[5.16866509846,0.791254991296],[7.53394350376,-0.472818702304],[7.5425614539,-0.453181311649],[7.56929753994,-0.467196855191],[6.91573693503,-1.96651726562],[6.25339787963,-3.49851575405],[4.47597482153,-7.56354915533],[0.242779034357,-5.82401706211],[0.717893453403,-4.7515383548],[1.81365688309,-2.19938189336],[3.02925441717,0.673801182047],[3.46145763872,1.7117983604]]]],mb:1};
lyr.f[10] = {split_polygons:[[[[4.47597482153,-7.56354915533],[6.25339787963,-3.49851575405],[8.84126452474,-4.63254145701],[7.0010022007,-8.63310812294],[4.47597482153,-7.56354915533]]]],h:0.0,m:0,polygons:[[[[4.47597482153,-7.56354915533],[6.25339787963,-3.49851575405],[8.84126452474,-4.63254145701],[7.0010022007,-8.63310812294],[4.47597482153,-7.56354915533]]]],mb:1};
lyr.f[11] = {split_polygons:[[[[-0.367647580445,9.04599645208],[-2.65247964417,4.67126587716],[-4.88206307962,5.62823411883],[-5.0563364015,5.69846449841],[-2.66184797945,10.2607097915],[-0.367647580445,9.04599645208]]]],h:0.0,m:0,polygons:[[[[-0.367647580445,9.04599645208],[-2.65247964417,4.67126587716],[-4.88206307962,5.62823411883],[-5.0563364015,5.69846449841],[-2.66184797945,10.2607097915],[-0.367647580445,9.04599645208]]]],mb:1};
lyr.f[12] = {split_polygons:[[[[-13.7769314691,10.8876733848],[-11.3447886168,14.9161585802],[-11.1489202832,14.7960840777],[-8.81234379493,13.5469912976],[-9.64593652358,11.9959158888],[-10.9522430821,9.41806835718],[-13.7769314691,10.8876733848]]]],h:0.0,m:0,polygons:[[[[-13.7769314691,10.8876733848],[-11.3447886168,14.9161585802],[-11.1489202832,14.7960840777],[-8.81234379493,13.5469912976],[-9.64593652358,11.9959158888],[-10.9522430821,9.41806835718],[-13.7769314691,10.8876733848]]]],mb:1};
lyr.f[13] = {split_polygons:[[[[-13.7769314691,10.8876733848],[-10.9522430821,9.41806835718],[-8.67586071175,8.22354958745],[-9.55850100649,6.39759825593],[-13.1366762726,8.00194679743],[-14.5690763705,8.87800093878],[-14.8793672967,9.10048478149],[-13.7769314691,10.8876733848]]]],h:0.0,m:0,polygons:[[[[-13.7769314691,10.8876733848],[-10.9522430821,9.41806835718],[-8.67586071175,8.22354958745],[-9.55850100649,6.39759825593],[-13.1366762726,8.00194679743],[-14.5690763705,8.87800093878],[-14.8793672967,9.10048478149],[-13.7769314691,10.8876733848]]]],mb:1};
lyr.f[14] = {split_polygons:[[[[-8.67586071175,8.22354958745],[-10.9522430821,9.41806835718],[-9.6424106759,11.9940765213],[-8.81234379493,13.5469912976],[-6.57275180153,12.3737883203],[-8.67586071175,8.22354958745]]]],h:0.0,m:0,polygons:[[[[-8.67586071175,8.22354958745],[-10.9522430821,9.41806835718],[-9.6424106759,11.9940765213],[-8.81234379493,13.5469912976],[-6.57275180153,12.3737883203],[-8.67586071175,8.22354958745]]]],mb:1};
lyr.f[15] = {split_polygons:[[[[6.51327892487,3.71649869333],[6.94249705085,4.65027432107],[7.09965194882,4.99403753404],[7.94939408709,4.53595079809],[6.51327892487,3.71649869333]]],[[[9.3910079619,3.75879245242],[7.56929753994,-0.467196855191],[7.5425614539,-0.453181311649],[7.53394350376,-0.472818702304],[5.16866509846,0.791254991296],[6.51327892487,3.71649869333],[7.94939408709,4.53595079809],[9.3910079619,3.75879245242]]]],h:0.0,m:0,polygons:[[[[9.3910079619,3.75879245242],[7.56929753994,-0.467196855191],[7.5425614539,-0.453181311649],[7.53394350376,-0.472818702304],[5.16866509846,0.791254991296],[6.94249705085,4.65027432107],[7.09965194882,4.99403753404],[9.3910079619,3.75879245242]]]],mb:1};
lyr.f[16] = {split_polygons:[[[[7.09965194882,4.99403753404],[6.94249705085,4.65027432107],[6.51327892487,3.71649869333],[3.22856305997,1.84222885771],[2.73144120244,2.12063744692],[3.13861896197,3.00659633352],[4.46864035332,5.99045954449],[4.62876554066,6.33086086771],[7.09965194882,4.99403753404]]],[[[6.51327892487,3.71649869333],[5.16866509846,0.791254991296],[3.46145763872,1.7117983604],[3.22856305997,1.84222885771],[6.51327892487,3.71649869333]]]],h:0.0,m:0,polygons:[[[[7.09965194882,4.99403753404],[6.94249705085,4.65027432107],[5.16866509846,0.791254991296],[3.46145763872,1.7117983604],[2.73144120244,2.12063744692],[3.13861896197,3.00659633352],[4.46864035332,5.99045954449],[4.62876554066,6.33086086771],[7.09965194882,4.99403753404]]]],mb:1};
lyr.f[17] = {split_polygons:[[[[-14.5690763705,8.87800093878],[-13.1366762726,8.00194679743],[-9.55850100649,6.39759825593],[-10.5188824307,4.51118499196],[-11.7280454493,5.04423660215],[-13.5277620079,5.82795483639],[-13.8734881228,5.98892963241],[-14.2341524271,6.11261617927],[-15.7397625698,7.03765859743],[-15.8136892263,6.86390221652],[-16.186619623,6.99469636006],[-14.8793672967,9.10048478149],[-14.5690763705,8.87800093878]]]],h:0.0,m:0,polygons:[[[[-14.5690763705,8.87800093878],[-13.1366762726,8.00194679743],[-9.55850100649,6.39759825593],[-10.5188824307,4.51118499196],[-11.7280454493,5.04423660215],[-13.5277620079,5.82795483639],[-13.8734881228,5.98892963241],[-14.2341524271,6.11261617927],[-15.7397625698,7.03765859743],[-15.8136892263,6.86390221652],[-16.186619623,6.99469636006],[-14.8793672967,9.10048478149],[-14.5690763705,8.87800093878]]]],mb:1};
lyr.f[18] = {split_polygons:[[[[-4.38669730178,11.192655736],[-2.66184797945,10.2607097915],[-5.0563364015,5.69846449841],[-6.58350363425,2.78646188028],[-7.07199889398,3.00064268845],[-8.32297205222,3.55225484942],[-4.38669730178,11.192655736]]]],h:0.0,m:0,polygons:[[[[-4.38669730178,11.192655736],[-2.66184797945,10.2607097915],[-5.0563364015,5.69846449841],[-6.58350363425,2.78646188028],[-7.07199889398,3.00064268845],[-8.32297205222,3.55225484942],[-4.38669730178,11.192655736]]]],mb:1};
lyr.m[0] = {c:0xe6e6e6,type:0,ds:1};
lyr.m[1] = {c:0x000000,type:2};

// Base64 encoded images