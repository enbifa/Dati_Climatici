
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


## File CSV CO2 Lineare

[Questo](https://enbifa.github.io/Dati_Climatici/CO2data_Linear.csv) file realizzato in modo lineare per DataWrapper secondo questo schema


Il formato è il seguente

|  | |  
| ------ | --------- |
| ACTUAL | 419.23 | 
| ONEYEARAGO | 419.18    |

## File CSV CO2 Media mobile degli ultimi sette giorni

[Questo](https://enbifa.github.io/Dati_Climatici/CO2data_MediaMobile.csv) file csv contiene i  dati che rappresentano la media mobile degli ultimi sette giorni paragonata alla media mobile a sette giorni dello stesso periodo dell'anno precedente.

Il formato è il seguente

| Date | 2023 | 2022 | 
| ------ | --------- |--------- |
| 01-24	| 419.73 | 419.26 | 

## File CSV CO2 con l'evoluzione della CO2 dal 1958

[Questo](https://enbifa.github.io/Dati_Climatici/c02_Evolution.csv) file csv contiene i dati che rappresentano l'evoluzione della CO2 dal 1958 ad oggi.

Il formato è il seguente

| Anno | Media | 
| ------ | --------- |
| 1958	| 315.30 | 

## File CSV Temperatura Globale

[Questo](https://enbifa.github.io/Dati_Climatici/TEMPdata.csv) file CSV contiene informazioni sulle temperature globali. Ogni riga contiene due colonne: GLOBALTEMPERATURE e TIMESTAMP.


| GLOBALTEMPERATURE | TIMESTAMP |
| ----------------- | --------- |
| 0.56              | 2023-02-02T16:21:13.043Z |


La colonna GLOBALTEMPERATURE indica la temperatura globale in gradi Celsius.
La colonna TIMESTAMP indica il timestamp associato ai dati, in formato ISO 8601.


## File CSV Scarto della temperatura

[Questo](https://enbifa.github.io/Dati_Climatici/Temp_Scarto_1.csv) file csv contiene i dati che rappresentano lo scarto della temperatura globale rispetto alla media nella giornata in corso.

Il formato è il seguente
|  | |  
| ------ | --------- |
| Oggi | 13.253 | 
| Media | 12.754    |
| Scarto | 0.68    |

## File CSV Evoluzione dello scarto della temperatura

[Questo](https://enbifa.github.io/Dati_Climatici/Temp_Scarto_2.csv) file csv contiene i dati che rappresentano l'evoluzione dello scarto dalla media globale nel corso dell'ultimo anno.

Il formato è il seguente

| data | scarto |
| ----------------- | --------- |
| 2022-02-12 | -0.36 | 

## File CSV Ghiaccio Marino
[Questo](https://enbifa.github.io/Dati_Climatici/SEAICEdata.csv) file CSV contiene i dati sull'anomalia dei ghiacci marini delle regioni settentrionali e meridionali e il timestamp associato.

| SEAICE_NH_5_Day_Anomaly | SEAICE_SH_5_Day_Anomaly | TIMESTAMP            |
|--------------------------|--------------------------|---------------------|
| -1.262                  | 2.299                    | 2023-02-02T16:21:13.043Z |


La colonna SEAICE_NH_5_Day_Anomaly indica l'anomalia dei ghiacci marini nella regione settentrionale, misurata in metri.
La colonna SEAICE_SH_5_Day_Anomaly indica l'anomalia dei ghiacci marini nella regione meridionale, misurata in metri.
La colonna TIMESTAMP indica il timestamp associato ai dati, in formato ISO 8601.

## File CSV Ghiaccio Marino n formato lineare
[Questo](https://enbifa.github.io/Dati_Climatici/SEAICEdata_Linear.csv) file realizzato in modo lineare per DataWrapper secondo questo schema


|  | |  
| ------ | --------- |
| SEAICE_NH_5_Day_Anomaly | -1.262  | 
| SEAICE_SH_5_Day_Anomaly | -1,171  |


## File CSV Ghiaccio Marino - scarto della media artico/antartide
[Questo](https://enbifa.github.io/Dati_Climatici/SEAICEdata_Linear.csv) file CSV contiene i dati sull'anomalia dei ghiacci marini delle regioni settentrionali e meridionali.

Il formato è il seguente

|  |  |
| ----------------- | --------- |
| SEAICE_NH_5_Day_Anomaly | -1.159 | 
| SEAICE_SH_5_Day_Anomaly | 1.958    |


## File CSV Ghiaccio Marino - somma degli scarti dei due emisferi
[Questo](https://enbifa.github.io/Dati_Climatici/SEAICE_graphic_1.csv) file CSV contiene i dati della somma degli scarti dei due emisferi.

Il formato è il seguente

| Data | Scarti |
| ----------------- | --------- |
| 2022-02-12 | -0.960 | 


## File CSV Ghiaccio Marino - somma dato giornaliero e l'estensione mediana 
[Questo](https://enbifa.github.io/Dati_Climatici/SEAICE_graphic_2.csv) file CSV contiene i dati della somma del dato giornaliero e l'estensione mediana tra il 1981.

Il formato è il seguente

| Data | Giornaliero	| Mediana 1981-2010|
| ----------------- | --------- |--------- |
| 2022-12-31 | 17.401	| 20.911 |

## Oggetto JSON 🚀
L'oggetto JSON (Array con un solo elemento) prodotto contiene le seguenti proprietà:

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

👉 File CSV relativo alla concentrazione di CO2 in formato lineare [qui](https://enbifa.github.io/Dati_Climatici/CO2data_Linear.csv) 

👉 File CSV CO2 Media mobile degli ultimi sette giorni [qui](https://enbifa.github.io/Dati_Climatici/CO2data_Linear.csv) 

👉 File CSV CO2 con l'evoluzione della CO2 dal 1958 [qui](https://enbifa.github.io/Dati_Climatici/c02_Evolution.csv) 

👉 File CSV relativo alla temperatura globale [qui](https://enbifa.github.io/Dati_Climatici/TEMPdata.csv) 

👉 File CSV Scarto della temperatura [qui](https://enbifa.github.io/Dati_Climatici/Temp_Scarto_1.csv) 

👉 File CSV Evoluzione dello scarto della temperatura [qui](https://enbifa.github.io/Dati_Climatici/Temp_Scarto_2.csv) 

👉 File CSV Ghiaccio Marino [qui](https://enbifa.github.io/Dati_Climatici/SEAICEdata.csv) 

👉 File CSV Ghiaccio Marino in formato lineare [qui](https://enbifa.github.io/Dati_Climatici/SEAICEdata_Linear.csv) 

👉 File CSV Ghiaccio Marino - scarto della media artico/antartide [qui](https://enbifa.github.io/Dati_Climatici/SEAICEdata_Linear.csv) 

👉 File CSV Ghiaccio Marino - somma degli scarti dei due emisferi [qui](https://enbifa.github.io/Dati_Climatici/SEAICE_graphic_1.csv) 

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
