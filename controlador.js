const modelDatos = require('./modelo');
const ctrlDatos = {
    ApiXbox: async (req, res) => {
        const data = await modelDatos.getXbox();
        //console.log("----->", data); //tiene muchas mas informacion que la que necesito
        console.log("Xbox:", data.data);
        res.json(data.data); //la respuesta del servidor se genera aqui
    },
    ApiNintendo: async (req,res) => {
        const data = await modelDatos.getNintendo();
        console.log("Nintendo:", data.data);
        res.json(data.data); //la respuesta del servidor se genera aqui
    },
    ApiPlay: async (req,res) => {
        const data = await modelDatos.getPlay();
        console.log("Play:", data.data);
        res.json(data.data); //la respuesta del servidor se genera aqui
    }
}
module.exports = ctrlDatos