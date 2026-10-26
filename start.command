#!/bin/bash
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
cd "$DIR"

# Agar python3 mavjud bo'lsa, server orqali ochamiz, aks holda to'g'ridan-to'g'ri brauzerda ochiladi
if command -v python3 &>/dev/null; then
    python3 server.py
else
    open index.html
fi
