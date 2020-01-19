// run ../../../node_modules/.bin/mocha helper.test.js

const assert = require('assert');

const { findEmployee,
        addEmployee,
        updateEmployee,
        deleteEmployee,
        findPosition,
        addPosition,
        updatePosition,
        deletePosition } = require ('./helper');


describe('Employees', function() {

        it('Find', async function() { 
                EmployeeView = {
                       namePosition: "Gerente" 
                };

                await findEmployee(EmployeeView).then(result => {
                        assert.ok(true);
                }).catch(error => {
                        assert.ok(false);
                });
        });

        it('Insert', async function() { 
                EmployeeView = {
                        fullname: "Danilo Dahlen",
                        nickname: "Dahlen", 
                        birthday: "1994-07-08",
                        salary: 1200.00,
                        namePosition: "Cordenador",
                        zipcode: "06462300",
                        street: "Rua Américo Vespucio",
                        number: "169",
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
                        _id: "5dd2bd0ebceeb71b5ced6b38",
                        fullname: "Danilo Dahlen de Araujo",
                        nickname: "Dahlen", 
                        birthday: "1994-08-07",
                        salary: 1400.00,
                        namePosition: "Cordenador",
                        zipcode: "06462300",
                        street: "Rua Américo Vespucio",
                        number: "169",
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
                        _id: "5dd709daf7a53a38fc90d08f"
                };

                await deleteEmployee(EmployeeView).then(result => {
                        assert.ok(true);
                }).catch(error => {
                        assert.ok(false);
                });
        });
});

describe('Positions', function() {
        
        it('Find', async function() { 
                PositionView = {
                        namePosition: "Gerente" 
                };

                await findPosition(PositionView).then(result => {
                        assert.ok(true);
                }).catch(error => {
                        assert.ok(false);
                });
        });

        it('Insert', async function() { 
                PositionView = {
                        namePosition: "Supervisor",
                        percentCommission: 2.50
                };

                await addPosition(PositionView).then(result => {
                        assert.ok(true);
                }).catch(error => {
                        assert.ok(false);
                });
        });

        it('Update', async function() { 
                PositionView = {
                        _id: "5dcc9c253f44d2188077a7cc",
                        namePosition: "Gerente 2.0",
                        percentCommission: 2.25
                };

                await updatePosition(PositionView).then(result => {
                        assert.ok(true);
                }).catch(error => {
                        assert.ok(false);
                });
        });

        it('Delete', async function() { 
                PositionView = {
                        _id: "5dcdeb697dc6c33e08878b15"
                };

                await deletePosition(PositionView).then(result => {
                        assert.ok(true);
                }).catch(error => {
                        assert.ok(false);
                });
        });
}); 