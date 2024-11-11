<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Leo Is The Best</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
            text-align: center;
        }
        header {
            background-color: #333;
            color: white;
            padding: 20px;
        }
        main {
            padding: 20px;
        }
        button {
            padding: 10px 20px;
            font-size: 16px;
            background-color: #4CAF50;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
        }
        button:hover {
            background-color: #45a049;
        }
    </style>
</head>
<body>

    <header>
        <h1>Bienvenido a mi Página Web</h1>
    </header>

    <main>
        <p id="mensaje">Haz clic en el botón para cambiar el mensaje.</p>
        <button id="cambiarMensajeBtn">Cambiar Mensaje</button>
    </main>

    <footer>
        <p>&copy; 2024 Mi Página Web</p>
    </footer>

    <script>
        document.addEventListener('DOMContentLoaded', function () {
            const boton = document.getElementById('cambiarMensajeBtn');
            const mensaje = document.getElementById('mensaje');

            boton.addEventListener('click', function () {
                mensaje.textContent = '¡El mensaje ha cambiado! ¡Gracias por hacer clic!';
            });
        });
    </script>

</body>
</html>