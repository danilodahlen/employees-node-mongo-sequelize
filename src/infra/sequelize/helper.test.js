// run ../../../node_modules/.bin/mocha helper.test.js

const assert = require('assert');
const { findEmployee,
        addEmployee,
        updateEmployee,
        deleteEmployee,
        findPosition,
        addPosition,
        updatePosition,
        deletePosition } = require('./helper');

describe('Employees', function() {
      
    it('Find', async function() {
        EmployeeView = {};

        await findEmployee(EmployeeView).then(result => {
            assert.ok(true);
        }).catch(error => {
            assert.ok(false);
        });
    });

    it('Insert', async function() {
        EmployeeView = {
            fullname: "Augusto de Souza",
            nickname: "Augusto", 
            birthday: "1994-10-11",
            salary: 1200.00,
            namePosition: "Gerente",
            zipcode: "06462300",
            street: "Rua Américo Vespucio",
            number: "16",
            city: "Barueri",
            state: "SP"
        };

        await addEmployee(EmployeeView).then(result => {
            assert.ok(true);
        }).catch(error => {
            assert.ok(false);
        });
    });

    it('Update', async function() {
        EmployeeView = {
            _id: 48,
            fullname: "Augusto de Souza",
            nickname: "Augusto", 
            birthday: "1994-01-01",
            salary: 1200.00,
            namePosition: "Gerente",
            zipcode: "06462325",
            street: "Rua Jose Flavio",
            number: "32",
            city: "Barueri",
            state: "SP"
        };

        await updateEmployee(EmployeeView).then(result => {
            assert.ok(true);
        }).catch(error => {
            assert.ok(false);
        });
    });

    it('Delete', async function() {
        EmployeeView = {
            _id: 49
        };

        await deleteEmployee(EmployeeView).then(result => {
            assert.ok(true);
        }).catch(error => {
            assert.ok(false);
        });
    });
});


describe('Position', function() {

    it('Find', async function() {
        PositionView = {};

        await findPosition(PositionView).then(result => {
            assert.ok(true);
        }).catch(error => {
            assert.ok(false);
        });
    });

    it('Insert', async function() {
        PositionView = {
            namePosition: "Supervisor",
            percentCommission: 20.00
        };

        await addPosition(PositionView).then(result => {
            assert.ok(true);
        }).catch(error => {
            assert.ok(false);
        });
    });

    it('Update', async function() {
        PositionView = {
            _id: 2,
            namePosition: "Operario",
            percentCommission: 2.00
        };

        await updatePosition(PositionView).then(result => {
            assert.ok(true);
        }).catch(error => {
            assert.ok(false);
        });
    });

    it('Delete', async function() {
        EmployeeView = {
            _id: 4
        };

        await deletePosition(EmployeeView).then(result => {
            assert.ok(true);
        }).catch(error => {
            assert.ok(false);
        });
    });
});