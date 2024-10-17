var faker = require('faker')
var cpf = require('gerador-validador-cpf')

export default {

    deliver: function() {

        var firstName = faker.name.firstName()
        var lastName = faker.name.lastName()

        var data = {
            name: `${firstName} ${lastName}`,
            cpf: cpf.generate(),
            email: faker.internet.email(firstName),
            whatsapp: '92999999999',
            address: {
                postalcode: '69080710',
                street: 'Rua Flávio Costa',
                number: '1000',
                details: 'Mercadinho Ceará',
                district: 'Coroado',
                city_state: 'Manaus/AM'
            },
            delivery_method: 'Moto',
            cnh: 'cnh-digital.jpg'
        }

        return data  
    }

}

