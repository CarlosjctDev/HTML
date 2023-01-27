<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <!-- En action especificamos a que archivo vamos enviar los datos y colocamos el metodo que vamos utilizar -->
    <form action="index2.php" method="POST">

        <label for="asignatura">Asignatura</label>
        <!-- Agregamos multiple para que se puedan añadir varias opciones y colocamos [] al name para convertirlo
            en un array. -->
        <select  id="asignatura" name="asignatura[]" multiple>
            <option value="Ingles">Ingles</option>
            <option value="Matematicas">Matematicas</option>
            <option value="Lenguaje">Lenguaje</option>
            <option value="Ciencia">Ciencia</option>
        </select>

        <br><br>

        <label for="opcion-1">
            <input type="checkbox" value="Manzana" id="opcion-1" name="frutas[]">
            Manzana
        </label>

        <label for="opcion-2">
            <input type="checkbox" value="Sandia" id="opcion-2" name="frutas[]">
            Sandia
        </label>
        
        <label for="opcion-3">
            <input type="checkbox" value="Fresa" id="opcion-3" name="frutas[]">
            Fresa
        </label>

        <br><br><br>

        <button type="submit">Enviar</button>
    </form>
    
</body>
</html>