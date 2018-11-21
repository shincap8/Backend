$(function () {
    $('.colContenido').append('<div id="resultados"></div>')
    $('#mostrarTodos').click(function (e) {
        e.preventDefault();
        $('#resultados').html("");
        $.ajax({
            url: "./todo.php",
            type: "POST",
            success: function (info) {
                var arreglo = JSON.parse(info)
                mostrarTodo(arreglo)
            }
        })
    })
})

function mostrarTodo(info) {
    $.each(info, function(i, data) {
        $('#resultados').append(
            '<div class="card itemMostrado"><img src="img/home.jpg"><div class="card-stacked"><p><strong>Direccion: </strong>'+data.Direccion+'</p><p><strong>Ciudad: </strong>'+data.Ciudad+'</p><p><strong>Teléfono: </strong>'+data.Telefono+'</p><p><strong>Código Postal: </strong>'+data.Codigo_Postal+'</p><p><strong>tipo: </strong>'+data.Tipo+'</p><p><strong>Precio: </strong><span class="precioTexto">'+data.Precio+'</span></p></div>'+data.Id+'</div>'
        )
    })
}