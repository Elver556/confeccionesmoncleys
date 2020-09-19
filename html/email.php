<?php

if (isset($_POST['enviar'])) {
    if (!empty($_POST['nombre']) && !empty($_POST['apellido']) 
        && !empty($_POST['email']) && !empty($_POST['mensaje'])) {
        $nombre = $_POST['nombre'];
        $apellido = $_POST['apellido'];
        $emai = $_POST['email'];
        $mensaje = $_POST['mensaje'];
        $header = "From: noreply@example.com" . "\r\n";
        $header = "Reply-To: confeccionesmoncleys@gmail.com" . "\r\n";
        $header = "X-Mailer: PHP/". phpversion();
        $mail = @mail($email, $nombre, $mensaje, $header);

        if ($mail) {
            echo "<h4>Enviado Exitosamente</h4>";
        }
    }
}


