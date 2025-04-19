#!/usr/bin/env python3
# -*- coding: utf-8 -*-

import cgi
import cgitb
import json

cgitb.enable()
print("Content-Type: text/html\n")

form = cgi.FieldStorage()
nickname = form.getvalue("nickname")
datos = form.getvalue("datos")

if nickname and datos:
    with open("usuarios_resultados.txt", "a", encoding="utf-8") as file:
        file.write(f"{nickname}:{datos}\n")
    print("Datos guardados correctamente.")
else:
    print("Faltan datos.")







