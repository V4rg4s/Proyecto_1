<?php
// Conexión a la base de datos
$host = "localhost"; 
$usuarioBD = "root"; 
$contraseñaBD = ""; 
$nombreBD = "login"; 

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

// Si las credenciales son correctas
if ($resultado->num_rows > 0) {
    echo "Login exitoso. ¡Bienvenido!";
} 

// Si el login falla
else {
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

//si los datos se guardan correctamente
if ($stmt->execute()) {
    echo "Usuario registrado con éxito";
} 

//si los datos no se guardan correctamente
else {
    echo "Error al registrar usuario: " . $stmt->error;
}

//salida
$stmt->close();
$conexion->close();
}
$stmt->close();
$conexion->close();
?>