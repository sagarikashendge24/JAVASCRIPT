var fs = require('fs');
const sr = require('readline-sync');
var axios = require('axios');
var url = "https://www.programmableweb.com/api/weatherbit-historical-agro-weather/sample-source-code";
axios.get(url)
    .then(resp => {
        let data = (resp.data)
        let my_json1 = JSON.stringify(data, null, 4)
        fs.writeFileSync("data.json", my_json1)})





// 