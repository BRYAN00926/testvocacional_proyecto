#!/usr/bin/env python3
# -*- coding: utf-8 -*-

import cgi
import cgitb
import json

cgitb.enable()
print("Content-Type: text/html\n")

try:
    with open("usuarios_resultados.txt", "r", encoding="utf-8") as file:
        contenido = file.readlines()
except FileNotFoundError:
    contenido = []

print("""
<html>
<head>
    <title>Resultados de Otros Usuarios</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background: #f9f9f9;
            padding: 30px;
        }
        .resultado {
            background: white;
            border-radius: 12px;
            box-shadow: 0 0 10px rgba(0,0,0,0.2);
            padding: 20px;
            margin-bottom: 20px;
        }
        .barra {
            height: 20px;
            background-color: #4CAF50;
            border-radius: 5px;
            text-align: center;
            color: white;
            line-height: 20px;
            margin-bottom: 5px;
        }
        .etiqueta {
            font-weight: bold;
            margin-top: 10px;
        }
    </style>
</head>
<body>
<h1>Resultados de otros usuarios</h1>
""")

if contenido:
    for linea in contenido:
        try:
            nombre, datos_json = linea.strip().split(":", 1)
            datos = json.loads(datos_json)
            total = sum(datos.values())
            print(f"<div class='resultado'><h3>{nombre}</h3>")
            for area, valor in datos.items():
                porcentaje = (valor / total) * 100 if total > 0 else 0
                print(f"<div class='etiqueta'>{area}</div>")
                print(f"<div class='barra' style='width:{porcentaje}%'> {porcentaje:.1f}% </div>")
            print("</div>")
        except Exception as e:
            continue
else:
    print("<p>No hay resultados aún.</p>")

print("</body></html>")















