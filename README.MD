
Questo repository contiene un'applicazione che raccoglie dati sulle concentrazioni di CO2 nell'atmosfera, la temperatura globale, l'anomalia del ghiaccio marino nell'emisfero settentrionale e meridionale. I dati vengono raccolti da diverse fonti e combinati in un unico oggetto JSON.

## Oggetto JSON 🚀
L'oggetto JSON prodotto finale contiene le seguenti proprietà:

- CO2: un oggetto che contiene i seguenti valori:
  - ACTUAL: la concentrazione di CO2 attuale in parti per milione (ppm)
  - ONEYEARAGO: la concentrazione di CO2 di un anno fa in ppm
  - DIFFERENCE: la differenza tra la concentrazione attuale e quella di un anno fa in ppm
  - TEXT: una stringa descrittiva che riassume i valori di ACTUAL e DIFFERENCE
  - NOTE: eventuali note aggiuntive sui dati
- GLOBALTEMPERATURE: la temperatura globale in gradi Celsius
- SEAICE_NH_5_Day_Anomaly: l'anomalia del ghiaccio marino nell'emisfero settentrionale in metri quadrati
- SEAICE_SH_5_Day_Anomaly: l'anomalia del ghiaccio marino nell'emisfero meridionale in metri quadrati
- TIMESTAMP: la data e l'ora in cui i dati sono stati raccolti in formato ISO 8601.

il file json è raggiungibile [qui](https://raw.githubusercontent.com/enbifa/Dati_Ecologist/master/data/data.json) ⬅️ ⬅️ ⬅️
## Risorse utilizzate
Scripps Institution of Oceanography, CO2 Program: https://scripps.ucsd.edu/programs/co2

Climate Reanalyzer, Today's Weather: https://climatereanalyzer.org/wx/todays-weather/

National Snow and Ice Data Center, Sea Ice Index: https://nsidc.org/data/seaice_index/

## Moduli utilizzati
text-from-image: utilizzato per estrarre il testo da un'immagine

csv-parser: utilizzato per elaborare i file CSV

fs: utilizzato per la gestione dei file

https: utilizzato per effettuare richieste HTTP

xlsx: utilizzato per leggere i file XLSX
