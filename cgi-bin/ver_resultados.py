#!/usr/bin/env python3
# -*- coding: utf-8 -*-

import cgi
import cgitb
import json
from collections import defaultdict

cgitb.enable()
print("Content-Type: text/html\n")

# Intentar abrir el archivo y leer los resultados
resultados_usuarios = defaultdict(lambda: defaultdict(int))  # Usamos defaultdict para manejar las sumas de valores

try:
    with open("usuarios_resultados.txt", "r", encoding="utf-8") as file:
        contenido = file.readlines()
except FileNotFoundError:
    contenido = []

# Mostrar el encabezado HTML
print("""
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Resultados de otros usuarios</title>
    <style>
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: linear-gradient(to right, #f2f2f2, #e6e6e6);
            padding: 30px;
            margin: 0;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
        }
        h1 {
            text-align: center;
            color: #333;
            margin-bottom: 20px;
        }
        .contenido {
            overflow-y: auto;
            max-height: calc(100vh - 120px);
            margin-bottom: 20px;
        }
        .resultado {
            background: #fff;
            border-radius: 12px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.1);
            padding: 20px;
            margin: 20px auto;
            max-width: 600px;
            animation: fadeIn 1s ease-in-out;
        }
        .barra {
            height: 22px;
            background-color: #4CAF50;
            border-radius: 6px;
            text-align: center;
            color: white;
            line-height: 22px;
            margin-bottom: 10px;
            transition: width 0.6s ease-in-out;
        }
        .etiqueta {
            font-weight: bold;
            margin-bottom: 5px;
        }
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
        }
        a {
            display: block;
            text-align: center;
            margin-top: 30px;
            font-weight: bold;
            color: #333;
            text-decoration: none;
        }
    </style>
</head>
<body>
<h1>Resultados de otros usuarios</h1>

<div class="contenido">
""")

# Procesar los resultados del archivo
if contenido:
    for linea in contenido:
        try:
            if ':' in linea:
                nombre, datos_json = linea.strip().split(":", 1)
                datos = json.loads(datos_json)
                
                # Sumar los resultados de cada usuario
                for area, valor in datos.items():
                    resultados_usuarios[nombre][area] += valor
        except Exception as e:
            continue

    # Ahora imprimir los resultados acumulados por cada usuario
    for nombre, datos in resultados_usuarios.items():
        total = sum(datos.values())
        print(f"<div class='resultado'><h3>👤 {nombre}</h3>")
        for area, valor in datos.items():
            porcentaje = (valor / total) * 100 if total > 0 else 0
            print(f"<div class='etiqueta'>{area}</div>")
            print(f"<div class='barra' style='width:{porcentaje:.1f}%'>{porcentaje:.1f}%</div>")
        print("</div>")
else:
    print("<p style='text-align:center;'>No hay resultados aún.</p>")

# Finalizar la página
print("""
</div>
<a href="../index.html">← Volver al inicio</a>
</body>
</html>
""")







