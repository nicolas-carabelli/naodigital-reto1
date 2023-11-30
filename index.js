exports.handler = async (event) => {
    console.log('Evento recibido:', JSON.stringify(event));
    return { statusCode: 200, body: '¡Esta es la función Lambda!' };
};



