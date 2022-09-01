<h1 align='center'>Bienvenido al repositorio de @delirius_bot-MD</h1>

<div align="center">
<img src = "https://i.postimg.cc/15sXXRmZ/xdd.jpg" alt="Darlyn" width="300" />
<p align="center">
 <img src="https://komarev.com/ghpvc/?username=darlyn1234&color=blue&label=Views" />
 </p>
<h1 align="center">@delirius_bot-MD</h1>
</div>

# Owner

- Cambiar numero del owner [Config](https://github.com/xzeera-id/Senkuu-MD/blob/main/lib/config.json)
- Archibco de la session [click aqui](https://github.com/xzeera-id/Senkuu-MD/tree/main/lib/database) & Nombre de la sesion: @delirius_bot

# Correr en heroku

WhatsApp Bot Multi Device

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/darlyn1234/delirius-bot-MD)

# Heroku Buildpack

| BuildPack       | LINK                                                                  |
| --------------- | --------------------------------------------------------------------- |
| **FFMPEG**      | [HERE](https://github.com/jonathanong/heroku-buildpack-ffmpeg-latest) |
| **IMAGEMAGICK** | [HERE](https://github.com/mcollina/heroku-buildpack-imagemagick.git)  |
| **Node.js**     | heroku/nodejs                                                         |
| **WEBP**        | [HERE](https://github.com/clhuang/heroku-buildpack-webp-binaries.git) |

## Instalacion en termux

### Clonar repositorio

```bash
> pkg install
> pkg upgrade
> pkg install git
> pkg install ffmpeg && pkg install libwebp
> pkg install nodejs
> git clone https://github.com/darlyn1234/delirius-bot-MD
> cd delirius-bot-MD
> npm install
> npm start
# Scan QR
```

### Requerimientos en PC

1.  [Nodejs](https://nodejs.org/en/download) 16x/17x
2.  [FFmpeg](https://ffmpeg.org)
3.  [libWebP](https://developers.google.com/speed/webp/download)

### Instalar ffmpeg

- Para usuarios de Windows, pueden ver el tutorial aquí [WikiHow](https://www.wikihow.com/Install-Ffmpeg-on-Windows)<br />
- Para usuarios de Linux, puede usar su propio administrador de paquetes. Por ejemplo :

```bash
# apt (Ubuntu)
apt install ffmpeg -y

# pacman (Arch Linux)
pacman -S ffmpeg
```

### Instalar libWebP

- Para los usuarios de Windows.

1.  Descargue libWebP para Windows desde [sini](https://developers.google.com/speed/webp/download)
2.  Extraer a C:\
3.  Cambie el nombre de la carpeta extraída a `libwebp`
4.  Abra PowerShell y ejecute el siguiente comando;

```cmd
setx /m PATH "C:\libwebp\bin;%PATH%"
```

> Si se instaló correctamente, verifique con el siguiente comando en el símbolo del sistema

```cmd
webpmux -version
```

```bash
# apt (Ubuntu)
apt install libwebp-dev -y

# pacman (Arch Linux)
pacman -S libwebp
```

### Clone Repo

```bash
# clonar repositorio
git clone --depth=1 https://github.com/darlyn1234/delirius-bot-MD

# Abrir la carpeta
cd delirius-bot-MD

# instalar modulos

npm install
# Opcion 2 :

yarn install

# si el error de la biblioteca @adiwajshing/baileys, ejecute el siguiente código

cd ./node_modules/@adiwajshing/baileys
npm install -g typescript
npm run build:tsc
```

### Start Bot

Ejecute el codigo QR<br />

```bash
npm start
```
