<?php
    $inferior = $_POST['inferior'];
    $superior = $_POST['superior'];
    $file = file_get_contents("../data-1.json");
    $data = json_decode($file, true);
    $Filtro = [];

    for($i=0; $i<count($data); $i++){
        $precio = $data[$i]['Precio'];
        $precio = str_replace('$',"",$precio);
        $precio = str_replace(',', "", $precio);

        if (($inferior <= $precio) && ($precio <= $superior)) {
            $Filtro[] = $data[$i];
        }
    }

    echo json_encode($Filtro);

?>