# Interaktive Kreise App

Diese Anwendung ermöglicht das Hinzufügen und Verschieben von Kreisen auf einem Bild, während ihre Koordinaten manuell eingegeben werden können.

## Funktionen
- Hinzufügen eines Kreises zum Bild
- Verschieben eines Kreises per Drag & Drop
- Ändern der X- und Y-Koordinaten über Eingabefelder
- Auswahl eines Materials, das mit den Kreisen verknüpft ist

## Verwendete Technologien
- React.js
- CSS (für das Styling)

## Installation
### Voraussetzungen
- Node.js installiert
- Git installiert

### Installationsschritte
1. Repository klonen:
   ```sh
   git clone <URL_DER_REPO>
   ```
2. In das Projektverzeichnis wechseln:
   ```sh
   cd projektname
   ```
3. Abhängigkeiten installieren:
   ```sh
   npm install
   ```

## Projekt ausführen
Um die Anwendung im Entwicklungsmodus zu starten:
```sh
npm start
```
Die Anwendung ist unter `http://localhost:3000/` erreichbar.

## Projektstruktur
```
projektname/
│── src/
│   ├── components/
│   │   ├── MaterialSelection.js
│   ├── App.js
│   ├── index.js
│── public/
│   ├── img/
│   │   ├── product.png
│── package.json
│── README.md
```

## Nutzung
1. Klicken Sie auf "Kreis hinzufügen", um einen Kreis zum Bild hinzuzufügen.
2. Ziehen Sie den Kreis an die gewünschte Position.
3. Verwenden Sie die Eingabefelder, um die Koordinaten anzupassen.
4. Wählen Sie ein Material aus.

## Beitrag leisten
1. Forken Sie das Projekt
2. Erstellen Sie einen neuen Branch (`git checkout -b feature-xyz`)
3. Nehmen Sie Ihre Änderungen vor und committen Sie (`git commit -m 'Feature xyz hinzugefügt'`)
4. Pushen Sie den Branch (`git push origin feature-xyz`)
5. Erstellen Sie eine Pull Request



