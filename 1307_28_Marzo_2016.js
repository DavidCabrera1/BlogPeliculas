var htmldb_delete_message='"DELETE_CONFIRM_MSG"';

var centinela;
var arreglo_Externo=new Array();
//var arreglo_Interno=new Array();
var todo;

$(document).ready(function(){

 var localidad=$('#P2_LOCALIDAD').val();
 var bu= $('#P2_BU').val();
 var bodega=$('#P2_BODEGA').val();

Desplegar_Informacion();
});

function Desplegar_Informacion(){        

         $.ajax({type:'POST',
                 url:'wwv_flow.show',
                 data:{
                       p_arg_names:["P2_LOCALIDAD","P2_BU","P2_BODEGA"],
                       p_arg_values:[document.getElementById("P2_LOCALIDAD").value, document.getElementById("P2_BU").value, document.getElementById("P2_BODEGA").value],
                       p_flow_id:$('#pFlowId').attr("value"),   
           p_flow_step_id:$('#pFlowStepId').attr("value"),   
           p_instance:$('#pInstance').attr("value"),
                       p_request:'APPLICATION_PROCESS=GetInformation'},
                 datatype:'html',
                 success:
                    function(data, textStatus){
                            
                            $("#ajaxLoading").hide();
                            $('#DIVISION').empty();
                            //$('#P2_CADENA_JSON').val(data);
                              
                             //alert(data);
                             todo=eval("("+data+")");
               
                             Cuerpo_Tabla(todo);
                             Pinta_TextEditables();
                       }
         });
}

function Objetos(arg1,arg2){

         this.cabecera=arg1;
         this.captions=arg2;
}

function Cabecera_Caption(cabecera_jsn){

                var tabla = document.createElement("table");
                var div = document.getElementById("DIVISION"); 
                var cabecera = document.createElement('thead');
                var caption= document.createElement('caption');
                var textCaption=document.createTextNode("Metas");
                caption.appendChild(textCaption);

                 /*EN ESTE FOR, CREAMOS LA CABECERA DE LA QUIEBRE_GESTION_SIM*/
                 for (var head=0; head<1;head++) {
                      var fila=document.createElement('tr');

                      for(var col=0;col<14;col++){
                          var c=document.createElement('th');
                          var text='';

                          switch(col){
                                case 0:
                                    text=document.createTextNode(cabecera_jsn[0].arg0);
                                break;

                                case 1:
                                    text=document.createTextNode(cabecera_jsn[0].arg1);
                                break;

                                case 2:
                                    text=document.createTextNode(cabecera_jsn[0].arg2);
                                break;

                                case 3:
                                    text=document.createTextNode(cabecera_jsn[0].arg3);
                                break;

                                case 4:
                                    text=document.createTextNode(cabecera_jsn[0].arg4);
                                break;

                                case 5:
                                    text=document.createTextNode(cabecera_jsn[0].arg5);
                                break;

                                case 6:
                                    text=document.createTextNode(cabecera_jsn[0].arg6);
                                break;

                                case 7:
                                    text=document.createTextNode(cabecera_jsn[0].arg7);
                                break;

                                case 8:
                                    text=document.createTextNode(cabecera_jsn[0].arg8);
                                break;

                                case 9:
                                    text=document.createTextNode(cabecera_jsn[0].arg9);
                                break;

                                case 10:
                                    text=document.createTextNode(cabecera_jsn[0].arg10);
                                break;

                                case 11:
                                    text=document.createTextNode(cabecera_jsn[0].arg11);
                                break;

                                case 12:
                                    text=document.createTextNode(cabecera_jsn[0].arg12);
                                break;

                                default:
                                    text=document.createTextNode('');
                                break;
                          }

                          c.appendChild(text);
                          fila.appendChild(c);
                      }

                      cabecera.appendChild(fila);

                 }

                    var h = new Objetos(cabecera,caption);

                   return h;
         }


         function Cuerpo_Tabla(jsn){

                   arreglo_Externo.splice(0,arreglo_Externo.length); 

                  var cabecera_jsn=[{'arg0':'Anomes','arg1':'Modelo','arg2':'Nombre Modelo','arg3': ''+jsn[jsn.length-1].mes1+'','arg4': ''+jsn[jsn.length-1].mes2+'','arg5': ''+jsn[jsn.length-1].mes3+'','arg6':'Meta','arg7':'Limite inferior','arg8':'Limite superior','arg9':'Nueva meta','arg10':'Observación','arg11':'Usuario que modifico','arg12':'Fecha de modificacion'}];
                  //var cabecera_jsn=[{'arg0':'Anomes','arg1':'Modelo','arg2':'Nombre Modelo','arg3':'Mes 3','arg4':'Mes 2','arg5': 'Mes 1','arg6':'Meta','arg7':'Limite inferior','arg8':'Limite superior','arg9':'Nueva meta','arg10':'Observación','arg11':'Usuario que modifico','arg12':'Fecha de modificacion'}];
                  var tabla = document.createElement("table");
                  var tbody = document.createElement('tbody');                
                  var div = document.getElementById("DIVISION");  
                  var cabecera=Cabecera_Caption(cabecera_jsn);
                  tabla.appendChild(cabecera.captions);
                  tabla.appendChild(cabecera.cabecera);

                  for (var i=0;i<jsn.length-1;i++){
                       
                       window['fila'+i.toString()]=document.createElement('tr');
                       
                       window['id'+i.toString()]=document.createElement('td');                      
                       window['anomes'+i.toString()]=document.createElement('td');
                       window['modelo'+i.toString()]=document.createElement('td');
                       window['nombre_modelo'+i.toString()]=document.createElement('td');
                       window['mes_03'+i.toString()]=document.createElement('td'); 
                       window['mes_02'+i.toString()]=document.createElement('td');
                       window['mes_01'+i.toString()]=document.createElement('td');                       
                       window['meta'+i.toString()]=document.createElement('td');
                       window['lim_inf'+i.toString()]=document.createElement('td');
                       window['lim_sup'+i.toString()]=document.createElement('td');
                       window['nueva_meta'+i.toString()]=document.createElement('td');
                       window['observacion'+i.toString()]=document.createElement('td');
                       window['user_modifico'+i.toString()]=document.createElement('td');
                       window['fecha_modifico'+i.toString()]=document.createElement('td'); 

                       //AL ID LE ASIGNAMOS UN ID PARA LUEGO OCULTARLO MEDIANTE CSS
                       window['id'+i.toString()].id='OCULTAR';
                       
                       window['txt0'+i.toString()]=document.createElement("input");//ID COLUMNAS.. OCULTO
                       window['txt1'+i.toString()]=document.createElement("input");//anomes
                       window['txt2'+i.toString()]=document.createElement("input");//modelo
                       window['txt3'+i.toString()]=document.createElement("input");//nombre modelo
                       window['txt4'+i.toString()]=document.createElement("input");//mes 3
                       window['txt5'+i.toString()]=document.createElement("input");//mes 2
                       window['txt6'+i.toString()]=document.createElement("input");//mes 1
                       window['txt7'+i.toString()]=document.createElement("input");//meta
                       window['txt8'+i.toString()]=document.createElement("input");//lim_inf
                       window['txt9'+i.toString()]=document.createElement("input");//lim_superior
                       window['txt10'+i.toString()]=document.createElement("input");//nueva_meta
                       window['txt11'+i.toString()]=document.createElement("input");//observación
                       window['txt12'+i.toString()]=document.createElement("input");//user_modifico
                       window['txt13'+i.toString()]=document.createElement("input");//fecha_modifico


                       window['txt0'+i.toString()].type="text";
                       window['txt1'+i.toString()].type="text";
                       window['txt2'+i.toString()].type="text";
                       window['txt3'+i.toString()].type="text";
                       window['txt4'+i.toString()].type="text";
                       window['txt5'+i.toString()].type="text";
                       window['txt6'+i.toString()].type="text";
                       window['txt7'+i.toString()].type="text";
                       window['txt8'+i.toString()].type="text";
                       window['txt9'+i.toString()].type="text";
                       window['txt10'+i.toString()].type="text";
                       window['txt11'+i.toString()].type="text";
                       window['txt12'+i.toString()].type="text";
                       window['txt13'+i.toString()].type="text";
                       
                       window['txt0'+i.toString()].size='7';
                       window['txt1'+i.toString()].size='4';
                       window['txt2'+i.toString()].size='5';
                       window['txt3'+i.toString()].size='20';
                       window['txt4'+i.toString()].size='4';
                       window['txt5'+i.toString()].size='4';
                       window['txt6'+i.toString()].size='4';
                       window['txt7'+i.toString()].size='4';
                       window['txt8'+i.toString()].size='2';
                       window['txt9'+i.toString()].size='2';
                       window['txt10'+i.toString()].size='4';
                       window['txt11'+i.toString()].size='30';
                       window['txt12'+i.toString()].size='10';
                       window['txt13'+i.toString()].size='10';


                       //TRATAMOS DE COLOCAR TEXTO DE METAS EN NEGRITA
                       window['txt7'+i.toString()].style.fontWeight='bolder';

                       window['txt0'+i.toString()].value=jsn[i].id;
                       window['txt1'+i.toString()].value=jsn[i].anomes;
                       window['txt2'+i.toString()].value=jsn[i].modelo;
                       window['txt3'+i.toString()].value=jsn[i].nombre_modelo;  
                       window['txt4'+i.toString()].value=jsn[i].mes_03;
                       window['txt5'+i.toString()].value=jsn[i].mes_02;                       
                       window['txt6'+i.toString()].value=jsn[i].mes_01;
                       window['txt7'+i.toString()].value=jsn[i].meta;
                       window['txt8'+i.toString()].value=jsn[i].limite_inferior;  
                       window['txt9'+i.toString()].value=jsn[i].limite_superior;
                       window['txt10'+i.toString()].value=jsn[i].meta;
                       window['txt11'+i.toString()].value=jsn[i].observacion;
                       window['txt12'+i.toString()].value=jsn[i].user_modifico;
                       window['txt13'+i.toString()].value=jsn[i].fecha_modifico;

                       //arreglo_Externo.push(jsn[i].nueva_meta);//GUARDAMOS VALORES INICIALES PARA LUEGO COMPARAR CON LOS POSIBLES INTRDUCIDOS POR EL USUARIO..              
                       window['txt0'+i.toString()].readOnly=true;
                       window['txt1'+i.toString()].readOnly=true;
                       window['txt2'+i.toString()].readOnly=true;
                       window['txt3'+i.toString()].readOnly=true;
                       window['txt4'+i.toString()].readOnly=true;
                       window['txt5'+i.toString()].readOnly=true;
                       window['txt6'+i.toString()].readOnly=true;
                       window['txt7'+i.toString()].readOnly=true;
                       window['txt8'+i.toString()].readOnly=true;
                       window['txt9'+i.toString()].readOnly=true;
                       window['txt10'+i.toString()].readOnly=false;
                       window['txt11'+i.toString()].readOnly=false;
                       window['txt12'+i.toString()].readOnly=true;
                       window['txt13'+i.toString()].readOnly=true;

                       window['id'+i.toString()].appendChild(window['txt0'+i.toString()]);
                       window['anomes'+i.toString()].appendChild(window['txt1'+i.toString()]);
                       window['modelo'+i.toString()].appendChild(window['txt2'+i.toString()]);
                       window['nombre_modelo'+i.toString()].appendChild(window['txt3'+i.toString()]);
                       window['mes_03'+i.toString()].appendChild(window['txt4'+i.toString()]);
                       window['mes_02'+i.toString()].appendChild(window['txt5'+i.toString()]);                       
                       window['mes_01'+i.toString()].appendChild(window['txt6'+i.toString()]);
                       window['meta'+i.toString()].appendChild(window['txt7'+i.toString()]);
                       window['lim_inf'+i.toString()].appendChild(window['txt8'+i.toString()]);
                       window['lim_sup'+i.toString()].appendChild(window['txt9'+i.toString()]);
                       window['nueva_meta'+i.toString()].appendChild(window['txt10'+i.toString()]);
                       window['observacion'+i.toString()].appendChild(window['txt11'+i.toString()]);
                       window['user_modifico'+i.toString()].appendChild(window['txt12'+i.toString()]);
                       window['fecha_modifico'+i.toString()].appendChild(window['txt13'+i.toString()]);

                       window['fila'+i.toString()].appendChild(window['id'+i.toString()]);
                       window['fila'+i.toString()].appendChild(window['anomes'+i.toString()]);
                       window['fila'+i.toString()].appendChild(window['modelo'+i.toString()]);
                       window['fila'+i.toString()].appendChild(window['nombre_modelo'+i.toString()]);
                       window['fila'+i.toString()].appendChild(window['mes_03'+i.toString()]);
                       window['fila'+i.toString()].appendChild(window['mes_02'+i.toString()]);
                       window['fila'+i.toString()].appendChild(window['mes_01'+i.toString()]);                      
                       window['fila'+i.toString()].appendChild(window['meta'+i.toString()]);
                       window['fila'+i.toString()].appendChild(window['lim_inf'+i.toString()]);
                       window['fila'+i.toString()].appendChild(window['lim_sup'+i.toString()]);
                       window['fila'+i.toString()].appendChild(window['nueva_meta'+i.toString()]);
                       window['fila'+i.toString()].appendChild(window['observacion'+i.toString()]);
                       window['fila'+i.toString()].appendChild(window['user_modifico'+i.toString()]);
                       window['fila'+i.toString()].appendChild(window['fecha_modifico'+i.toString()]);

                       tbody.appendChild(window['fila'+i.toString()]);
                  }
                  
                  tabla.appendChild(tbody);
                  div.appendChild(tabla);

            }

function Pinta_TextEditables(){
         var n=$('#DIVISION :input');
         var aumenta=0;

         for (var j=0;j<n.length;j++){
             n[(11+aumenta)].style.background='#99FF99';//CAMBIAMOS COLOR A OBSERVACIONES PARA QUE EL USUARIO SEPA QUE ES EDITABLE
             n[(11+aumenta)].style.textAlign='left';//ALINEAMOS A LA IZQ. OBSERVACIONES
             n[(11+aumenta)].maxLength='250';//LIMITAMOS UN MÁXIMO DE 250 PARA ESCRIBIR EN EL CAMPO OBS.
             n[(11+aumenta)].placeholder='Observación';//ASIGNAMOS PLACEHOLDER A OBSERVACIONES PARA GUIA DEL USUARIO
             n[(10+aumenta)].style.background='#99FF99';//CAMBIAMOS COLOR A N. META PARA QUE EL USUARIO SEPA QUE ES EDITABLE
             n[(10+aumenta)].maxLength='4';//LIMITAMOS UN MÁXIMO DE 4 PARA ESCRIBIR EN EL CAMPO N. META.
             n[(10+aumenta)].placeholder='Meta';//PLACEHOLDER PARA NUEVA META.
                   
             aumenta=aumenta+14;
               }            
}

//DESPUES DE ACTUALIZAR SE LLAMA A ESTA FUNCION PARA INABILITAR LOS INPUT DE LAS METAS
function Pinta_TextNoEditables(){
  var n=$('#DIVISION :input');
  var aumenta = 0;

  for(var j=0; j<n.length; j++){
    n[(11+aumenta)].style.background='#99FF99';
    n[(11+aumenta)].style.textAlign='left';
    n[(11+aumenta)].maxLength='250';
    n[(11+aumenta)].placeholder='Observación';
    n[(11+aumenta)].readOnly=true;
    n[(10+aumenta)].style.background='#99FF99';
    n[(10+aumenta)].maxLength='4';
    n[(10+aumenta)].placeholder='Meta';
    n[(10+aumenta)].readOnly=true;
    aumenta = aumenta + 14;
  }
}

 function HabilitarMetas(){
    var n=$('#DIVISION :input');
  var aumenta = 0;

  for(var j=0; j<n.length; j++){
    n[(11+aumenta)].readOnly=false;
    n[(10+aumenta)].readOnly=false;
    aumenta = aumenta + 14;
  }
 }

function Fuera_Limite(arg1,arg2,arg3){//ARGUMENTO 1 ES EL VALOR INGRESADO POR EL USUARIO,ARG2 LIM_INF Y ARG3 LIM_SUP
         
          var bool=false;

          if(arg1<arg2){
            bool=true;
           }

          if(arg1>arg3){
            bool=true;
           }

          return bool;
}
  
function Verifica_Cambios(){
                            
              var arreglo_Interno = new Array();
              var Arreglo_Cambios = new Array();
              var centinela=0;
              var aumenta=0;
              var n=$('#DIVISION :input');
              var n_Entero=new Array();
              var numerico=true;
              var mayor_Que_Cero=true;
              var entre_Limites=true;
              var valor_antiguo=false;//PARA SABER QUE VALOR SE GUARDARÁ COMO NUEVA META, SI EL DADO POR EL USUARIO O EL QUE ESTABA
              var cad_Json='[';
              var intermedio=0;

              arreglo_Interno.splice(0,arreglo_Interno.length);
                            
              for (var l=0;l<n.length;l=l+14){
                 
                   if ( (isNaN(n[(10+l)].value)) || (n[(10+l)].value.trim()=='') ){//VALIDAMOS QUE N. META SEA NUMÉRICO
                      n[(10+l)].style.background='red';
                      n[(10+l)].style.color='#000000';
                      numerico=false;
                   }

                   else {
                         if ((n[(10+l)].value==0)){//VALIDAMOS QUE N. META SEA MAYOR QUE CERO
                             mayor_Que_Cero=true;
                             /*n[(10+l)].style.background='red';
                             n[(10+l)].style.color='#000000';*/
                         }

                         else {//LE DAMOS COLOR A FONDO DEL TEXTBOX                     
                               /* n[(10+l)].style.background='#99FF99';
                                n[(10+l)].style.color='#000000';*/
                              }                       
                         }

                  aumenta=aumenta+1;
                 }

              aumenta=0;

              if (!(numerico && mayor_Que_Cero)){
                  if (!numerico){//AQUI HACEMOS VALIDACIÓN DE QUE SEA NUMÉRICO 
                     //alert('Favor, cerciorarse de introducir valores numéricos en nueva metas!');
                          $("#Mensaje").css("display","none");
                          $("#warningMsg").css("display","none");
                          $("#dangerMsg").css("display","none");
                          $("#errorMsg").css("background-color","#FFCCBC");
                           $("#errorMsg h1").html("Favor, cerciorarse de introducir valores numéricos en nueva metas!");
                           $("#errorMsg").slideDown("slow").delay(10000).slideUp();
                        }

                  else {
                         if (!mayor_Que_Cero){//AQUI HACEMOS VALIDACIÓN DE QUE SEA MAYOR QUE CERO..
                             //alert('Favor, cerciorarse que el valor ingresado sea mayor que cero!');
                              $("#Mensaje").css("display","none");
                              $("#errorMsg").css("display","none");
                              $("#dangerMsg").css("display","none");
                              $("#warningMsg").css("background-color","#FFCCBC");
                              $("#warningMsg h1").html("Favor, cerciorarse que el valor ingresado sea mayor que cero!");
                              $("#warningMsg").slideDown("slow").delay(10000).slideUp();
                         }
                       }
                  }

              else {
                      while (centinela < n.length){//INGRESAMOS LOS VALORES NUEVA META QUE EL USUARIO DEJO AL CLICKEAR EL BOTÓN Y LOS GUARDAMOS EN UN ARREGLO..
                            intermedio=parseInt(n[(10+aumenta)].value,10);
                            arreglo_Interno.push(intermedio);
                            aumenta=aumenta+14;//AUMENTA 14 PARA QUE EL PRÓXIMO VALOR QUE 'AGARRE' SEA DE ESTA MISMA COLUMNA (N. META)
                            centinela=centinela+14;

                      };
 
                    aumenta=0;

                     for (var k=0;k<n.length;k=k+14){//VERIFICAREMOS QUE LA N. META SEA MAYOR LIM. INF Y MENOR QUE LIM SUP.
                         if (Fuera_Limite(parseInt(n[(10+k)].value,10), parseInt(n[(8+k)].value,10), parseInt(n[(9+k)].value,10))){
                              valor_antiguo=true;//ESTE NOS AYUDARÁ A SABER SI ES EL VALOR ANTIGUO QUE SE COLOCÓ COMO N. META
                              n[(10+k)].value=todo[aumenta].meta;//VOLVEMOS A COLOCAR EL VALOR ANTIGUO                            
                              
                              if ((n[(11+k)].value.trim()=='')){//SI EL USUARIO INGRESÓ UNA N.M. FUERA DE LIMITES FORZAMOS A QUE POR LO MENOS INGRESE UNA OBSERVACIÓN
                                 entre_Limites=false;
                                 n[(8+k)].style.background='red';//PINTAMOS LA FILA DONDE SE ORIGINÓ EL ERROR PARA GUIAR AL USUARIO
                                 n[(9+k)].style.background='red';
                                 n[(10+k)].style.background='red';
                                 n[(11+k)].style.background='red';
                              }
                            } 

                            aumenta++; //ESTE AUMENTA DE 1 EN 1 PORQUE VAMOS AVANZANDO DE 1 EN 1 EN CADA FILA DEL OBJETO JSON    
                        }

                     

                      if (entre_Limites){//VERIFICAMOS QUE EL USUARIO INGRESÓ N.M ENTRE LIMITES O EN SU DEFECTO UNA OBSERVACIÓN
                           var contador_Cambios=0;
                           var indice=0;
                           aumenta=0;


                           for (var w=0;w<arreglo_Interno.length;w++){

                               if ((arreglo_Interno[w]!=todo[w].nueva_meta) || (n[11+aumenta].value.trim()!=todo[w].observacion.trim())){//GUARDAMOS LOS INDICES QUE FUERON MODIFICADOS PARA SABER LAS FILAS DE LAS COLUMNAS MODIFICADAS.
                                   contador_Cambios++;
                                   Arreglo_Cambios.push(w);//SOLO GUARDAMOS LOS INDICES DEL ARREGLO INTERNO DE LOS CUALES SUS VALORES NO COINCIDIERON CON LOS VALORES ORIGINALES QUE LUEGO SERÁN MULTIPLICADAS POR 14 
                                  }

                               aumenta=aumenta+14;//AUMENTA 14 PARA QUE EL PRÓXIMO VALOR QUE 'AGARRE' SEA DE ESTA MISMA COLUMNA (N. META)
                           }
                          
                           aumenta=0;
                           while (contador_Cambios>0){//USAMOS UN WHILE PORQUE NO SIEMPRE HABRÁN CAMBIOS Y NO SIEMPRE TIENE QUE HACER ESTE PROCEDIMIENTO. 
                                  
                                  aumenta=Arreglo_Cambios[indice]*14;//MULTIPLICAMOS EL VALOR DE ARREGLO_CAMBIOS (EL INDICE OBTENIDO ANTERIORMENTE) POR 14

                                  cad_Json=cad_Json+'{ "id":"'+n[(0+aumenta)].value+'", "nueva_meta":'+n[(10+aumenta)].value+', "observacion":"'+n[(11+aumenta)].value+'", "valor_antiguo":"'+todo[(Arreglo_Cambios[indice])].nueva_meta+'"}';
                                  //EN LA LINEA ANTERIOR SE GUARDARON LOS DATOS EN UNA CADENA PARA LUEGO GUARDARLA EN :P2_DATOS Y CONVERTIR EN JSON EN EL PROCESO.

                                  if (!valor_antiguo){//SI VALOR NO ES EL VALOR ANTIGUO, SE COLOREA DE UN VERDE 'MÁS FUERTE' PARA QUE EL USUARIO SEPA QUE DATOS MODIFICO
                                      n[(8+aumenta)].style.background='#41C800';
                                      n[(9+aumenta)].style.background='#41C800';
                                      n[(10+aumenta)].style.background='#41C800';
                                      n[(11+aumenta)].style.background='#41C800';
                                  }

                                   if (contador_Cambios>1){//CON ESTA BIFURCACIÓN CONTROLAMOS DE SOLO COLOCAR UNA COMA (,) SOLO SI HAY MÁS DE UNA CAMBIO MÁS POR PROCESAR.
                                       cad_Json=cad_Json+',';
                                   }

                                  indice++;//AUMENTA EL INDICE PARA TOMAR EL PRÓXIMO VALOR DEL ARREGLO_CAMBIOS
                                  contador_Cambios--;//DISMINUIMOS CAMBIOS POR PROCESAR
                              } 

                            cad_Json=cad_Json+']';//CERRAMOS LA CADENA CON FORMA DE OBJETO JSON [{}..{}]

                           $('#P2_DATOS').val(cad_Json);//GUARDAMOS LA CADENA EN EL ITEM OCULTO DEL QUE LUEGO EL PROCESO TOMARÁ SU VALOR PARA CONVERTIRLO EN OBJETO JSON
                           //alert($('#P2_DATOS').val());

                           //alert("La revisión de meta ha concluido con éxito.");\
                            $("#dangerMsg").css("display","none");
                            $("#errorMsg").css("display","none");
                            $("#warningMsg").css("display","none");
                           $("#Mensaje").css("background-color","#DCEDC8");
                           $("#Mensaje h1").html("La revisión de meta ha concluido con éxito.");
                           $("#Mensaje").slideDown("slow").delay(5000).slideUp();                            

                           $.ajax({type:'POST',
                                   url:'wwv_flow.show',
                                   data: {  
                                    p_arg_names:["P2_DATOS","P2_LOCALIDAD","P2_BU","P2_BODEGA"],//ES PARA ESPECIFICAR QUE ITEMS SE UTILIZARÁ EN EL PROCESO. DE NO DECIRLO DE FORMA EXPLICITA, NO SE PODRÁN UTILIZAR ESTOS EN EL PROCESO.
                                    p_arg_values:[document.getElementById("P2_DATOS").value, document.getElementById("P2_LOCALIDAD").value, document.getElementById("P2_BU").value, document.getElementById("P2_BODEGA").value],//ESPECIFICAMOS LOS VALLORES DE CADA ITEMS (MISMO ORDEN).
                                    p_flow_id:$('#pFlowId').attr("value"),   
                                    p_flow_step_id:$('#pFlowStepId').attr("value"),   
                                    p_instance:$('#pInstance').attr("value"),                                                           
                                    p_request:"APPLICATION_PROCESS=UpdateInformation"
                                    },                         
                                    dataType: "html",                           
                                    success: 
                                      function(data2,textStatus){
                                                 $("#ajaxLoading").hide();
                                                        
                                                 $('#DIVISION').empty();//LIMPIAMOS EL DIV DONDE VA LA TABLA

                                                 //$('#P2_PRUEBA_MOSTRAR').val(data2);
                                     
                                                 var todo=eval("("+data2+")");//LA CADENA QUE VIENE DESDE EL PROCESO (ENVIADA COMO <p></p>) DESDE EL PROCESO
                                                                              //LO GUARDAMOS EN UNA VARIABLE, QUE CON LA AYUDA DE EVAL LO CONVERTIMOS EN OBJETO JSON
                                                                              //OJO CON LA FORMA DE CONVERSIÓN eval("("+data2+")") ESOS PARÉNTENSIS ENTRE COMILLAS 
                                                                              //SON NECESARIOS Y BÁSICOS. 
                                                 Cuerpo_Tabla(todo);
                                                 //Pinta_TextEditables();
                                                 Pinta_TextNoEditables();
                                                 //$("#Mensaje").fadeIn();
                                                 
                                                 }
                                });
                      }

                      else{
                           $("#Mensaje").css("display","none");
                           $("#errorMsg").css("display","none");
                           $("#warningMsg").css("display","none");
                           $("#dangerMsg").css("background-color","#FFCCBC");
                           $("#dangerMsg h1").html("Favor, cerciorarse que el valor ingresado se encuentre entre el limite superior e inferior. Si necesita introducir un valor fuera de este rango agregue una Observación de el por qué desea hacerlo.");
                           $("#dangerMsg").slideDown("slow").delay(8000).slideUp();
                           //alert('Favor, cerciorarse que el valor ingresado se encuentre entre el limite superior e inferior. Si necesita introducir un valor fuera de este rango agregue una Observación de el por qué desea hacerlo.');
                      }
                   }

      };