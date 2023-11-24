exports.handler = async (event) => {
    const mensaje = 'Hola desde mi función Lambda';  
    const response = {
        statusCode: 200,
        body: JSON.stringify({ message: mensaje }),
    };
    return response;
};
