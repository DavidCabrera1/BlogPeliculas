$(document).ready(function(){

    //Jquery DataTable
    $("#tabla").dataTable();
    //$("#tabla2").dataTable();

    // Dar el foco al recuadro del código
    $("#codigo").focus();
    // -----------------------------
    // Al hacer clic en el botón para buscar
    $("#cargar").click(function()
    {
        // Enviar la petición mediante POST
         $.ajax({
             async: true,
             type: "POST",
             dataType: "json",
             contentType: "application/x-www-form-urlencoded; charset=UTF-8",
             url: "js/datos.php",
             beforeSend: antesEnvio,
             success: mostrarDatos,
             timeout: 4000,
             error: errorEnvio
         });
            return false;
        });
    });
// -----------------------------
// Antes de enviar los datos
 function antesEnvio() {
    $("#log").text("Se procesa la funcion 'antesEnvio()' antes de enviarse los datos...");
}
// -----------------------------
// En caso de error
 function errorEnvio() {
    $("#log").text("Ha ocurrido un error!");
}
// -----------------------------
// Carga los datos recibidos en los cuadros de texto
 function mostrarDatos( aDatos )
{
    var html;
    html = "<p>Se encontraron [" + aDatos.length + "] registro(s)</p>";
    html += "<table id='tabla2' class='table table-bordered table-hover' data-role='datatable'  sdata-auto-width='false'>";
    html +=     "<thead>";
    html +=         "<tr>";
    html +=             "<th>Nombre</th>";
    html +=             "<th>Apellido 1</th>";
    html +=             "<th>Apellido 2</th>";
    html +=             "<th>F/Nacimiento</th>";
    html +=             "<th>Cuota</th>";
    html +=             "<th>Editar</th>";
    html +=         "</tr>";
    html +=     "</thead>";
    //footer de la tabla
    html +=     "<tfoot>";
    html +=         "<tr>";
    html +=             "<th>Nombre</th>";
    html +=             "<th>Apellido 1</th>";
    html +=             "<th>Apellido 2</th>";
    html +=             "<th>F/Nacimiento</th>";
    html +=             "<th>Cuota</th>";
    html +=             "<th>Editar</th>";
    html +=         "</tr>";
    html +=     "</tfoot>";

    //valores de la tabla
    for( var i=0; i < aDatos.length; i++ )
    {
        html += "<tr>";
            html += "<td>" + aDatos[i].nombre    + "</td>";
            html += "<td>" + aDatos[i].apellido1 + "</td>";
            html += "<td>" + aDatos[i].apellido2 + "</td>";
            html += "<td>" + aDatos[i].fnac      + "</td>";
            html += "<td>" + aDatos[i].cuota     + "</td>";
            html += "<td class='align-center'>" + 
                        '<button type="button" class="btn btn-danger" onclick="Editar()" data-toggle="modal" data-target="#myModal"><span class="glyphicon glyphicon-pencil"></span></button>'+
                        '<button type="button" class="btn btn-primary" onclick="Actualizar()"><span class="glyphicon glyphicon-floppy-disk"></span></button>'    
                    + "</td>";
                    
        html += "</tr>";
    }
    html += "</table>";

    $("#resultado").html( html );
    $("#tabla2").dataTable();
}
