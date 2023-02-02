//leggi file json dall'url https://raw.githubusercontent.com/enbifa/Dati_Climatici/main/data.json

const axios = require('axios');
const { Octokit } = require("@octokit/rest");


const octokit = new Octokit({
    auth: "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",
});
const createCsvStringifier = require('csv-writer').createObjectCsvStringifier;
const csvStringifier = createCsvStringifier({
    header: [
      { id: "GLOBALTEMPERATURE", title: "GLOBALTEMPERATURE" },
      { id: "TIMESTAMP", title: "TIMESTAMP" }
    ]
});

async function readJSONFile() {
  try {
    const response = await axios.get('https://raw.githubusercontent.com/enbifa/Dati_Climatici/main/data.json');

    //cre
    const data = response.data;
    const TEMPdata = [
        {
        GLOBALTEMPERATURE: data.GLOBALTEMPERATURE,
        TIMESTAMP: data.TIMESTAMP

        },
    ];
   // csv.writeRecords(CO2data).then(() => console.log("The CSV file was written."));
    console.log(csvStringifier.getHeaderString());
    console.log(csvStringifier.stringifyRecords(TEMPdata));
    var stringa =csvStringifier.getHeaderString()
    stringa += csvStringifier.stringifyRecords(TEMPdata)

    updateTools(stringa,"data.json").then((tools) => {
      console.log(tools);
    });   

  } catch (error) {
    console.error(error);
  }
}

readJSONFile();

async function updateTools(tools, name,path) {
  try {
    // Recupera informazioni sul file toolstweeted.json
    octokit.repos.getContent({
      owner: "enbifa",
      repo: "Dati_Climatici",
      path: "TEMPdata.csv"
    }).then((data) => {
      console.log("data");
      console.log(data.data.sha);
      // Utilizza il "sha" recuperato per creare o aggiornare il file
      octokit.repos.createOrUpdateFileContents({
          owner: "enbifa",
          repo: "Dati_Climatici",
          name: "TEMPdata.csv",
          path: "TEMPdata.csv",
          message: "Update TEMPdata.csv",
          content: Buffer.from(tools).toString("base64"),
          sha: data.data.sha,
          committer: {
              name: "enbifa",
              email: "enbifaforfun@gmail.com"
          },
      });
      });
  } catch (err) {
      console.error(err);
  }
}
                                          