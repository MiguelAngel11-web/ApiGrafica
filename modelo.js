const axios = require('axios')
const modelDatos = {
    getXbox: async (req) => {
        console.log(req);
        return await axios.get(`https://kamel-6e19d.firebaseio.com/games.json?orderBy=%22consola%22&equalTo=%22Xbox%20One%22&print=pretty`)
            .then(data => data)
            .catch(err => { console.log(err); return err })

    },
    getNintendo: async(req) => {
        return await axios.get(`https://kamel-6e19d.firebaseio.com/games.json?orderBy=%22consola%22&equalTo=%22Nintendo%20Switch%22&print=pretty`)
        .then(data => data)
        .catch(err => { console.log(err); return err })
    },
      getPlay: async(req) => {
        return await axios.get(`https://kamel-6e19d.firebaseio.com/games.json?orderBy=%22consola%22&equalTo=%22Playstation%204%22&print=pretty`)
        .then(data => data)
        .catch(err => { console.log(err); return err })
    }
}
module.exports = modelDatos;
