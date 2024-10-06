<?php
// Conexión a la base de datos
$host = "localhost"; // Servidor de MySQL
$usuarioBD = "root"; // Usuario de MySQL (por defecto en XAMPP es 'root')
$contraseñaBD = ""; // Contraseña de MySQL (por defecto en XAMPP es vacío)
$nombreBD = "login"; // Nombre de la base de datos que creaste

// Crear conexión
$conexion = new mysqli($host, $usuarioBD, $contraseñaBD, $nombreBD);

// Verificar si la conexión falló
if ($conexion->connect_error){
    die("Conexión fallida: " . $conexion->connect_error);
}

// Obtener los datos del formulario
$username = $_POST['username'];
$password = $_POST['password'];

// Consulta a la base de datos para verificar el usuario y la contraseña
$query = "SELECT * FROM usuarios WHERE usuario = ? AND contraseña = ?";
$stmt = $conexion->prepare($query);
$stmt->bind_param("ss", $username, $password);
$stmt->execute();
$resultado = $stmt->get_result();

if ($resultado->num_rows > 0) {
    // Si las credenciales son correctas
    echo "Login exitoso. ¡Bienvenido!";
} else {
    // Si el login falla
    echo "Usuario o contraseña incorrectos.";
}

// Crear conexión
if ($_POST['accion'] == 'registrar_usuario') {
    // Lógica para guardar los datos del usuario en la base de datos
    $nombre = $_POST['nombre'];
    $numeroCel = $_POST['numero_cel'];
    $id = $_POST['id'];
    $cumpleanos = $_POST['cumpleanos'];

    // Inserta los datos en la tabla
    $query = "INSERT INTO datos_usuarios (nombre, numero_cel, id, cumpleanos) VALUES (?, ?, ?, ?)";
    $stmt = $conexion->prepare($query);
    $stmt->bind_param("ssiss", $nombre, $numeroCel, $id, $cumpleanos);

    if ($stmt->execute()) {
        echo "Usuario registrado con éxito";
    } else {
        echo "Error al registrar usuario: " . $stmt->error;
    }

    $stmt->close();
    $conexion->close();
}
$stmt->close();
$conexion->close();
?>



