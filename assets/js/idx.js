const _0xda97a5=_0x1200;(function(_0x468927,_0x5b9995){const _0x5056b0=_0x1200,_0x1c0750=_0x468927();while(!![]){try{const _0x302639=parseInt(_0x5056b0(0x167))/0x1*(-parseInt(_0x5056b0(0x153))/0x2)+-parseInt(_0x5056b0(0x184))/0x3+parseInt(_0x5056b0(0x164))/0x4+parseInt(_0x5056b0(0x181))/0x5+parseInt(_0x5056b0(0x109))/0x6*(-parseInt(_0x5056b0(0x113))/0x7)+parseInt(_0x5056b0(0x12f))/0x8+-parseInt(_0x5056b0(0x140))/0x9;if(_0x302639===_0x5b9995)break;else _0x1c0750['push'](_0x1c0750['shift']());}catch(_0x40e69f){_0x1c0750['push'](_0x1c0750['shift']());}}}(_0x12e5,0xc0616));let debug=!![];const questions=[[_0xda97a5(0x127),_0xda97a5(0x168),'Tierra','Fuego',_0xda97a5(0x129),_0xda97a5(0x180),_0xda97a5(0x132),_0xda97a5(0x159),'particles,\x20hurricane,\x20wind,\x20force'],['¿Que\x20ciudad\x20te\x20gustaría\x20explorar?',_0xda97a5(0x14a),'Cyberpunk',_0xda97a5(0x142),_0xda97a5(0x11d),_0xda97a5(0x15c),'post\x20apocalyptic\x20world,\x20dystopian\x20universe,\x20highly\x20technological\x20society,\x20dark\x20and\x20violent','technological,\x20innovative,\x20futuristic,\x20modern\x20technology',_0xda97a5(0x178)],['¿Con\x20que\x20figura\x20geométrica\x20te\x20identificas?',_0xda97a5(0x14b),'Circulo',_0xda97a5(0x11e),'Rombo',_0xda97a5(0x17c),'sphere,\x20circle,\x20round,\x20no\x20corners,\x20ball,\x20illuminated',_0xda97a5(0x15b),_0xda97a5(0x115)],[_0xda97a5(0x182),_0xda97a5(0x106),_0xda97a5(0x145),_0xda97a5(0x10c),_0xda97a5(0x134),_0xda97a5(0x157),_0xda97a5(0x173),_0xda97a5(0x15d),_0xda97a5(0x13b)]];function getPrompt(){return findAnswer(0x0)+',\x20'+findAnswer(0x1)+',\x20'+findAnswer(0x2)+',\x20'+findAnswer(0x3);}pantallaActual=_0xda97a5(0x176);let pantallas={'bienvenida':document['getElementById'](_0xda97a5(0x154)),'registro':document[_0xda97a5(0x111)](_0xda97a5(0x15e)),'inicioSesion':document[_0xda97a5(0x111)](_0xda97a5(0x124)),'chooseFlow':document['getElementById'](_0xda97a5(0x16c)),'mayorEdad':document[_0xda97a5(0x111)](_0xda97a5(0x133)),'howtoQuiz':document['getElementById'](_0xda97a5(0x183)),'quiz':document[_0xda97a5(0x111)]('Quiz'),'loadBot':document['getElementById'](_0xda97a5(0x16f)),'chooseImagen':document[_0xda97a5(0x111)](_0xda97a5(0x120)),'imagenFinal':document[_0xda97a5(0x111)]('ImagenFinal'),'startTicket':document[_0xda97a5(0x111)](_0xda97a5(0x107)),'regTicket':document[_0xda97a5(0x111)](_0xda97a5(0x121)),'recuerda':document[_0xda97a5(0x111)]('Recuerda'),'eventoParti':document[_0xda97a5(0x111)](_0xda97a5(0x160))};for(let p in pantallas){pantallas[p][_0xda97a5(0x12d)]='internal',pantallas[p][_0xda97a5(0x14c)][_0xda97a5(0x11f)]=_0xda97a5(0x104);}pantallas[pantallaActual][_0xda97a5(0x14c)][_0xda97a5(0x11f)]=_0xda97a5(0x16e);function changePantalla(_0x1f1d92){const _0x255b48=_0xda97a5;if(_0x1f1d92==_0x255b48(0x143))flowState=!![];if(_0x1f1d92==_0x255b48(0x15a))flowState=![];pantallas[pantallaActual]['style']['display']=_0x255b48(0x104),pantallas[_0x1f1d92]['style'][_0x255b48(0x11f)]=_0x255b48(0x16e),pantallaActual=_0x1f1d92;if(_0x1f1d92==_0x255b48(0x143)||_0x1f1d92==_0x255b48(0x177)||_0x1f1d92==_0x255b48(0x148)||_0x1f1d92==_0x255b48(0x139)||_0x1f1d92==_0x255b48(0x15a))staticReturnButton[_0x255b48(0x14c)]['display']=_0x255b48(0x16e);else staticReturnButton[_0x255b48(0x14c)]['display']='none';}let flowState=!![];const staticReturnButton=document[_0xda97a5(0x111)]('staticReturn');staticReturnButton[_0xda97a5(0x14c)][_0xda97a5(0x11f)]=_0xda97a5(0x104);function changeFlow(){const _0x575063=_0xda97a5;flowState=!flowState,changePantalla(flowState?_0x575063(0x143):_0x575063(0x15a)),staticReturnButton[_0x575063(0x110)]=flowState?_0x575063(0x156):'./assets/img/Flujo-Tickets/botón_botella.png';}selectedImg='',document['getElementById'](_0xda97a5(0x165))[_0xda97a5(0x10d)](_0xda97a5(0x10f),()=>{const _0x57f2a4=_0xda97a5;checkForm()?changePantalla(_0x57f2a4(0x161)):window[_0x57f2a4(0x125)](_0x57f2a4(0x169));});function checkForm(){const _0x4ccbd6=_0xda97a5;return document[_0x4ccbd6(0x111)]('formNombre')[_0x4ccbd6(0x13e)][_0x4ccbd6(0x118)]>0x0&&document['getElementById']('formCorreo')['value'][_0x4ccbd6(0x118)]>0x0&&document[_0x4ccbd6(0x111)](_0x4ccbd6(0x158))['value']['length']>0x0;}console['log'](_0xda97a5(0x174)),document[_0xda97a5(0x111)](_0xda97a5(0x135))[_0xda97a5(0x10d)](_0xda97a5(0x10f),()=>{const _0x48c5f5=_0xda97a5;document['getElementById']('mayorCheck')[_0x48c5f5(0x175)]&&changePantalla(_0x48c5f5(0x177));}),QuizQuestion=document[_0xda97a5(0x111)](_0xda97a5(0x17b)),QuizBtns=new Array(),QuizBtns[_0xda97a5(0x16d)](document[_0xda97a5(0x111)](_0xda97a5(0x16b))),QuizBtns[_0xda97a5(0x16d)](document['getElementById'](_0xda97a5(0x12b))),QuizBtns['push'](document['getElementById'](_0xda97a5(0x150))),QuizBtns[_0xda97a5(0x16d)](document[_0xda97a5(0x111)](_0xda97a5(0x126)));let _bk=_0xda97a5(0x14f);var currentQst=0x0,respuestas=new Array();function nextQuestion(){const _0x1bec83=_0xda97a5;preguntaImgElem[_0x1bec83(0x110)]=_0x1bec83(0x105)+(currentQst+0x1)+_0x1bec83(0x14d),QuizQuestion[_0x1bec83(0x13d)]=questions[currentQst][0x0];for(let _0x27de47=0x0;_0x27de47<QuizBtns[_0x1bec83(0x118)];_0x27de47++)QuizBtns[_0x27de47][_0x1bec83(0x13d)]=questions[currentQst][_0x27de47+0x1];}let preguntaImgElem=document[_0xda97a5(0x111)](_0xda97a5(0x10b));preguntaImgElem[_0xda97a5(0x110)]=_0xda97a5(0x11c);for(var cnt=0x0;cnt<QuizBtns[_0xda97a5(0x118)];cnt++){QuizBtns[cnt]['addEventListener']('click',_0x1229e3=>{const _0x8367e2=_0xda97a5;respuestas[_0x8367e2(0x16d)](_0x1229e3['target']['innerHTML']),currentQst++,currentQst<questions['length']?nextQuestion():(cargarPrompt(),changePantalla(_0x8367e2(0x148)));});}function _0x1200(_0x571baf,_0x4c6833){const _0x12e5b7=_0x12e5();return _0x1200=function(_0x12009e,_0x1cd94e){_0x12009e=_0x12009e-0x104;let _0x1b6d08=_0x12e5b7[_0x12009e];return _0x1b6d08;},_0x1200(_0x571baf,_0x4c6833);}function d(_0x384ce9){const _0x500f7e=_0xda97a5;let _0x432b06='';for(let _0x42f3db=0x0;_0x42f3db<_0x384ce9['length'];_0x42f3db++){_0x432b06+=String['fromCharCode'](_0x384ce9[_0x500f7e(0x12c)](_0x42f3db)-0x2d);}return _0x432b06;}function _0x12e5(){const _0x46636f=['Descargar','Water,\x20liquid\x20effect,\x20bubbles','4603545RJhPGd','¿Que\x20tipo\x20de\x20super\x20poder\x20te\x20gustaría\x20tener?','HowToQuiz','975420FxcvLq','finished','none','./assets/img/3-Preguntas/pregunta_','Volar','StartTicket','createElement','12xxlbPU','Pronto\x20lo\x20tendrás\x20en\x20tus\x20manos','preguntaImg','Velocidad','addEventListener','\x0aSeed\x20=\x20','click','src','getElementById','Finished!','1369508EQnhTi','continueBoton','rhombus,\x20diamond,\x20poker\x20card,\x20geometry,\x20luck','json','En\x20unos\x20segundos\x20estará\x20listo','length','imagenFinal','yaCasiEsta','Zeec\u008fZ\u0091\u008f\u0093\u0090d\u0090\u008efd\u0093b\u008f','./assets/img/3-Preguntas/pregunta_1.png','Videogamer','Triangulo','display','ChooseImagen','RegistroTicket','log','La\x20espera\x20valdrá\x20la\x20pena','InicioSesion','alert','btn4','¿Con\x20que\x20elemento\x20te\x20identificas\x20más?','Comprar','Aire','margin-left:16%;','btn2','charCodeAt','className','Regresar','5962616kigbGW','15%','POST','rocks,\x20mountains,\x20land','SoyMayorDeEdad','Inteligencia','mayorBtn','https://api.tryleap.ai/api/v1/images/models/1e7737d7-545e-469f-857f-e4b46eaa151d/inferences/','GET','images','chooseImagen','then','Intelligent,\x20skillful,\x20technology,\x20mind,\x20knowledge','backgroundImage','innerHTML','value','error','12248343dImgtK','Clicked!\x20//\x20\x20\x20','Tecnologico','mayorEdad','Bearer\x20','Fuerza','catch','application/json','loadBot','botonQuiz','Futurista','Cuadrado','style','.png','state','a\u0090a\u0091f^abZc\u008e\u0092\u0090Za^\u008ee','btn3','margin-top:\x2038vw;\x20margin-right:\x200;\x20margin-left:\x2037%;','background-image:url(','10960vNnaIv','Bienvenida','Continuar','./assets/img/Flujo-Botella/boton_ticket.png','birds,\x20wind,\x20wings,\x20sky,\x20height,\x20fly','formTelefono','red\x20color,\x20hot,\x20sun,\x20dangerous,\x20energy,\x20strength,\x20clarity','startTicket','Triangle,\x20pyramid,\x20corners,\x20linear,\x20star,\x20point','Innovative,\x20Chaotic,\x20sustainable,\x20friendly\x20to\x20the\x20environment,\x20technology','speed,\x20swift,\x20fast,\x20flash,\x20lightning','Registro','append','EventoParti','chooseFlow','target','button','5279476RFpkwa','regBtn','\x20\x20//\x20\x20','22IdpHFp','Agua','No\x20se\x20llenaron\x20todos\x20los\x20datos\x20de\x20forma\x20correcta','not\x20yet','btn1','ChooseFlow','push','block','CreandoBotella','Prompt\x20=\x20','Creating\x20img\x20','people,\x20human,\x20asymmetric,\x20watermarks,\x20out\x20of\x20frame,\x20lowres,\x20text,\x20error,\x20cropped,\x20worst\x20quality,\x20low\x20quality,\x20jpeg\x20artifacts,\x20ugly,\x20duplicate,\x20morbid,\x20mutilated,\x20out\x20of\x20frame,\x20extra\x20fingers,\x20mutated\x20hands,\x20poorly\x20drawn\x20hands,\x20poorly\x20drawn\x20face,\x20mutation,\x20deformed,\x20blurry,\x20dehydrated,\x20bad\x20anatomy,\x20bad\x20proportions,\x20extra\x20limbs,\x20cloned\x20face,\x20disfigured,\x20gross\x20proportions,\x20malformed\x20limbs,\x20missing\x20arms,\x20missing\x20legs,\x20extra\x20arms,\x20extra\x20legs,\x20fused\x20fingers,\x20too\x20many\x20fingers,\x20long\x20neck,\x20username,\x20watermark,\x20signature','strength,\x20rude,\x20strong,\x20powerful,\x20skill,\x20power','regis','checked','bienvenida','howtoQuiz','neon\x20lights,\x20video\x20games,\x20black\x20abyss,\x20postcyberpunk,\x20TRON\x20Legacy,\x20neon\x20world','floor','En\x20un\x20abrir\x20y\x20cerrar\x20de\x20ojos\x20quedara','pregunta','box,\x20cubo,\x20neon,\x20geometry,\x20texture,\x20Cuboid','Ya\x20casi\x20terminamos,\x20gracias\x20por\x20esperar','mainImg'];_0x12e5=function(){return _0x46636f;};return _0x12e5();}function findAnswer(_0xa2f91d){return questions[_0xa2f91d][questions[_0xa2f91d]['findIndex'](_0x3f37cf=>_0x3f37cf==respuestas[_0xa2f91d])+0x4];}async function cargarPrompt(){const _0x1f966d=_0xda97a5;let _0x3dfb94=document[_0x1f966d(0x111)](_0x1f966d(0x11a));const _0x8a0d08=['Cargando,\x20por\x20favor\x20espera',_0x1f966d(0x117),'Preparándose\x20para\x20la\x20gran\x20revelación',_0x1f966d(0x123),_0x1f966d(0x10a),'Un\x20poco\x20mas,\x20estamos\x20en\x20ello',_0x1f966d(0x17a),_0x1f966d(0x17d)];_0x3dfb94[_0x1f966d(0x13d)]=_0x8a0d08[0x0];var _0x2378d3=getPrompt();let _0x3c71cf=parseInt(Date['now']())%0x2540be3ff;const _0x2ca614={'method':_0x1f966d(0x131),'headers':{'accept':_0x1f966d(0x147),'content-type':_0x1f966d(0x147),'authorization':_0x1f966d(0x144)+d(_bk)+d(_kb)},'body':JSON['stringify']({'prompt':_0x2378d3,'negativePrompt':_0x1f966d(0x172),'steps':0x1e,'width':0x200,'height':0x400,'numberOfImages':0x4,'promptStrength':0x7,'seed':_0x3c71cf,'enhancePrompt':!![],'upscaleBy':'x1','sampler':'ddim'})};var _0x2f785e='aa';await fetch('https://api.tryleap.ai/api/v1/images/models/8b1b897c-d66d-45a6-b8d7-8e32421d02cf\x09/inferences',_0x2ca614)[_0x1f966d(0x13a)](_0x94a0ec=>_0x94a0ec[_0x1f966d(0x116)]())[_0x1f966d(0x13a)](_0x202674=>{_0x2f785e=_0x202674['id'];})[_0x1f966d(0x146)](_0x1f281c=>console['error'](_0x1f281c));if(debug)console[_0x1f966d(0x122)](_0x1f966d(0x170)+_0x2378d3+_0x1f966d(0x10e)+_0x3c71cf);let _0x1ce17a='',_0x3ccd5c=new Array(),_0x495c64=0x0,_0x19606b=0x0;do{if(_0x495c64<=0x0){let _0x23014e=0x0;do{_0x23014e=Math[_0x1f966d(0x179)](Math['random']()*_0x8a0d08[_0x1f966d(0x118)]);}while(_0x19606b==_0x23014e);_0x3dfb94['innerHTML']=_0x8a0d08[_0x23014e],_0x19606b=_0x23014e,_0x495c64=0x5;}if(debug)console[_0x1f966d(0x122)](_0x1f966d(0x16a));const _0x4622f9={'method':_0x1f966d(0x137),'headers':{'accept':'application/json','authorization':'Bearer\x20'+d(_bk)+d(_kb)}};await fetch(_0x1f966d(0x136)+_0x2f785e,_0x4622f9)[_0x1f966d(0x13a)](_0x7cb86c=>_0x7cb86c[_0x1f966d(0x116)]())[_0x1f966d(0x13a)](_0x43d595=>{const _0xa7c9d8=_0x1f966d;_0x1ce17a=_0x43d595[_0xa7c9d8(0x14e)];for(let _0x467c99=0x0;_0x467c99<_0x43d595['images'][_0xa7c9d8(0x118)];_0x467c99++)_0x3ccd5c[_0xa7c9d8(0x16d)](_0x43d595[_0xa7c9d8(0x138)][_0x467c99]['uri']);})['catch'](_0x2f5597=>console[_0x1f966d(0x13f)](_0x2f5597)),await new Promise(_0x3ca97c=>setTimeout(_0x3ca97c,0xa)),_0x495c64--;}while(_0x1ce17a!=_0x1f966d(0x185));if(debug)console[_0x1f966d(0x122)](_0x1f966d(0x112));let _0x150282=0x0;_0x3ccd5c['forEach'](_0x2168cd=>{const _0x4690b6=_0x1f966d;if(debug)console[_0x4690b6(0x122)](_0x4690b6(0x171)+_0x150282);let _0x3bcf22=document[_0x4690b6(0x108)](_0x4690b6(0x163));_0x3bcf22[_0x4690b6(0x14c)]=_0x4690b6(0x152)+_0x2168cd+');'+(_0x150282==0x1?_0x4690b6(0x12a):'\x20'),_0x3bcf22[_0x4690b6(0x10d)](_0x4690b6(0x10f),_0x19ee70=>{const _0x4237e0=_0x4690b6;if(debug)console['log'](_0x4237e0(0x141)+selectedImg+_0x4237e0(0x166)+_0x19ee70[_0x4237e0(0x162)]['style'][_0x4237e0(0x13c)]);if(_0x19ee70[_0x4237e0(0x162)]['style'][_0x4237e0(0x13c)]!=selectedImg){let _0x49e7a1=_0x19ee70[_0x4237e0(0x162)][_0x4237e0(0x14c)][_0x4237e0(0x13c)];_0x19ee70[_0x4237e0(0x162)][_0x4237e0(0x14c)][_0x4237e0(0x13c)]=selectedImg,selectedImg=_0x49e7a1,document['getElementById'](_0x4237e0(0x17e))[_0x4237e0(0x14c)][_0x4237e0(0x13c)]=selectedImg;if(debug)console[_0x4237e0(0x122)](_0x2168cd);}}),_0x150282==0x0&&(_0x3bcf22['id']=_0x4690b6(0x17e),selectedImg=_0x3bcf22[_0x4690b6(0x14c)]['backgroundImage']),_0x3bcf22[_0x4690b6(0x12d)]=_0x150282==0x0?_0x4690b6(0x17e):'subImg',pantallas['chooseImagen']['append'](_0x3bcf22),_0x150282++;});let _0x1d0122=document['createElement'](_0x1f966d(0x163));_0x1d0122[_0x1f966d(0x12d)]=_0x1f966d(0x114),_0x1d0122[_0x1f966d(0x14c)]=_0x1f966d(0x151),_0x1d0122[_0x1f966d(0x13d)]=_0x1f966d(0x155),_0x1d0122['addEventListener'](_0x1f966d(0x10f),()=>{const _0x5c0402=_0x1f966d;document['getElementById']('imagenDetras')[_0x5c0402(0x14c)][_0x5c0402(0x13c)]=selectedImg,changePantalla(_0x5c0402(0x119));}),pantallas[_0x1f966d(0x139)]['append'](_0x1d0122),changePantalla('chooseImagen');}let _kb=_0xda97a5(0x11b);for(let x=0x0;x<0x3;x++){let _nw=document[_0xda97a5(0x108)](_0xda97a5(0x163));_nw[_0xda97a5(0x12d)]=_0xda97a5(0x149),_nw[_0xda97a5(0x14c)]['width']='20%',x==0x0?(_nw[_0xda97a5(0x14c)]['marginLeft']=_0xda97a5(0x130),_nw[_0xda97a5(0x13d)]=_0xda97a5(0x12e),_nw[_0xda97a5(0x10d)](_0xda97a5(0x10f),()=>{const _0xd9d72d=_0xda97a5;changePantalla(_0xd9d72d(0x139));})):(_nw[_0xda97a5(0x14c)]['marginLeft']='5%',_nw[_0xda97a5(0x13d)]=x==0x1?_0xda97a5(0x17f):_0xda97a5(0x128)),pantallas['imagenFinal'][_0xda97a5(0x15f)](_nw);}