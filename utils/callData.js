const data = '../data/Data.json';

const getData = async () => {
    try {
        const response = await axios({
            url: data,
            method: 'GET'
        })
        console.log("response: ",response.data)
        return response.data;  
    }
    catch (error) {
        console.log(error);
    }
}

export {getData};