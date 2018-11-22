$(function () {
    $('.colContenido').append('<div id="resultados"></div>')
    filtros()
    $('select').material_select();

    $('#mostrarTodos').click(function (e) {
        e.preventDefault();
        $('#resultados').html("");
        $.ajax({
            url: "./php/todo.php",
            type: "POST",
            success: function (info) {
                var arreglo = JSON.parse(info)
                mostrarTodo(arreglo)
            }
        })
    })
})



//Función para cargar todos los items del JSON al presionar el boton mostrar todos
function mostrarTodo(info) {
    $.each(info, function(i, data) {
        $('#resultados').append(
            '<div class="card itemMostrado"><img src="img/home.jpg"><div class="card-stacked"><p><strong>Direccion: </strong>'+data.Direccion+'</p><p><strong>Ciudad: </strong>'+data.Ciudad+'</p><p><strong>Teléfono: </strong>'+data.Telefono+'</p><p><strong>Código Postal: </strong>'+data.Codigo_Postal+'</p><p><strong>tipo: </strong>'+data.Tipo+'</p><p><strong>Precio: </strong><span class="precioTexto">'+data.Precio+'</span></p></div></div>'
        )
    })
}

//Función para alistar los filtros cuando cargue la página
function filtros() {
    $.ajax({
        url: "./php/todo.php",
        type: "POST",
        success: function (info) {
            var ciudades = []
            var tipos = []
            var arreglo = JSON.parse(info)
            $.each(arreglo, function (i, data) {
                ciudades[i] = data.Ciudad;
                tipos[i]=data.Tipo;
            });
            ciudades = eliminateDuplicates(ciudades)
            tipos = eliminateDuplicates(tipos)
            mostrarCiudades(ciudades)
            mostrarTipos(tipos)
        }
    })   
    $(document).ready(function () { $('#selectTipo').material_select(); }); 
}

function mostrarCiudades(arr) {
    for (i = 0; i < arr.length; i++) {
        $('#selectCiudad').append(
            '<option value="' + arr[i] +'">' + arr[i]+'</option>'
        )
    }
    $(document).ready(function () { $('#selectCiudad').material_select(); });
}

function mostrarTipos(arr) {
    for (i = 0; i < arr.length; i++) {
        $('#selectTipo').append(
            '<option value="' + arr[i] + '">' + arr[i] + '</option>'
        )
    }
    $(document).ready(function () { $('#selectTipo').material_select(); });
}



//Función para eliminar duplicados
function eliminateDuplicates(arr) {
    var i,
        len = arr.length,
        out = [],
        obj = {};

    for (i = 0; i < len; i++) {
        obj[arr[i]] = 0;
    }
    for (i in obj) {
        out.push(i);
    }
    return out;
}