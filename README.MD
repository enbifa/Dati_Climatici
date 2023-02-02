
Questo repository contiene un'applicazione che raccoglie dati sulle concentrazioni di CO2 nell'atmosfera, la temperatura globale, l'anomalia del ghiaccio marino nell'emisfero settentrionale e meridionale. I dati vengono raccolti da diverse fonti, inseriti in tre file csv e combinati in un unico oggetto JSON.


## File CSV CO2 

[Questo](https://enbifa.github.io/Dati_Climatici/CO2data.csv)  file csv contiene i  dati che rappresentano la quantità di CO2 presente nell'atmosfera, confrontata con quella di un anno fa. 

| ACTUAL | ONEYEARAGO | DIFFERENCE | TEXT | NOTE | TIMESTAMP |
| ------ | --------- | ---------- | ---- | ---- | ----------|
| 419.23 | 419.18    | 0.05       | ultimo dato 419.23 ppm (0.05 ppm in più di un anno fa) | | 2023-02-02T16:21:13.043Z |


La colonna "ACTUAL" contiene l'ultimo dato conosciuto sulle emissioni.
La colonna "ONEYEARAGO" contiene la quantità di un anno fa. 
La colonna "DIFFERENCE" mostra la differenza tra i due valori. 
La colonna "TEXT" fornisce una descrizione sintetica dei dati.
La colonna "NOTE" è riservata per eventuali note o commenti. 
La colonna "TIMESTAMP" indica il timestamp associato ai dati, in formato ISO 8601.

## File CSV Temperatura Globale

[Questo](https://enbifa.github.io/Dati_Climatici/TEMPedata.csv) file CSV contiene informazioni sulle temperature globali. Ogni riga contiene due colonne: GLOBALTEMPERATURE e TIMESTAMP.


| GLOBALTEMPERATURE | TIMESTAMP |
| ----------------- | --------- |
| 0.56              | 2023-02-02T16:21:13.043Z |


La colonna GLOBALTEMPERATURE indica la temperatura globale in gradi Celsius.
La colonna TIMESTAMP indica il timestamp associato ai dati, in formato ISO 8601.

## File CSV Ghiaccio Marino
[Questo](https://enbifa.github.io/Dati_Climatici/SEAICEdata.csv) file CSV contiene i dati sull'anomalia dei ghiacci marini delle regioni settentrionali e meridionali e il timestamp associato.

| SEAICE_NH_5_Day_Anomaly | SEAICE_SH_5_Day_Anomaly | TIMESTAMP            |
|--------------------------|--------------------------|---------------------|
| -1.262                  | 2.299                    | 2023-02-02T16:21:13.043Z |


La colonna SEAICE_NH_5_Day_Anomaly indica l'anomalia dei ghiacci marini nella regione settentrionale, misurata in metri.
La colonna SEAICE_SH_5_Day_Anomaly indica l'anomalia dei ghiacci marini nella regione meridionale, misurata in metri.
La colonna TIMESTAMP indica il timestamp associato ai dati, in formato ISO 8601.

## Oggetto JSON 🚀
L'oggetto JSON prodotto contiene le seguenti proprietà:

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

## File

👉 File CSV relativo alla concentrazione di CO2 [qui](https://enbifa.github.io/Dati_Climatici/CO2data.csv) 

👉 File CSV relativo alla temperatura globale [qui](https://enbifa.github.io/Dati_Climatici/TEMPedata.csv) 

👉 File CSV relativo al ghiaccio marino [qui](https://enbifa.github.io/Dati_Climatici/SEAICEdata.csv) 

👊 Il file json è raggiungibile [qui](https://enbifa.github.io/Dati_Climatici/data.json) 

I file sono aggiornati due volte al giorno (9 e 16 UTC)
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
