<?php
    $inferior = $_POST['inferior'];
    $superior = $_POST['superior'];
    $ciudad = $_POST['ciudad'];
    $tipo = $_POST['tipo'];
    $file = file_get_contents("../data-1.json");
    $data = json_decode($file, true);
    $Filtro = [];

    for($i=0; $i<count($data); $i++){
        $precio = $data[$i]['Precio'];
        $precio = str_replace('$',"",$precio);
        $precio = str_replace(',', "", $precio);

        if (($inferior <= $precio) && ($precio <= $superior)) {
            if ($ciudad == "" && $tipo == "") {
                $Filtro[] = $data[$i];
            }
            if ((($ciudad == $data[$i]['Ciudad']) && ($tipo == $data[$i]['Tipo'])) || (($ciudad == $data[$i]['Ciudad']) && ($tipo == "")) || (($ciudad == "") && ($tipo == $data[$i]['Tipo']))) {
                $Filtro[] = $data[$i];
            }
        }
    }

    echo json_encode($Filtro);

?>