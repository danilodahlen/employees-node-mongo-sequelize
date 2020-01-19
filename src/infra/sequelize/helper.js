const { Employee, Position, Op } = require('./model');
const returnMessage = {
    error:[],
    data:[]
}

const findEmployee = async (EmployeeView) => {
    await Employee.findAll(EmployeeView.nickname || EmployeeView.fullname ?
    {
        where: {
            [Op.or]: [ { 
                        nickname: 
                            { [Op.like]: `%${EmployeeView.nickname}%` }
                       },
                       {
                        fullname:
                            { [Op.like]: `%${EmployeeView.fullname}%` }
                       }
            ]
        }
    }: {})
    .then(findEmployee => {
        returnMessage.data.push(findEmployee);
    }).catch(errorEmployee => {
        throw new Error(errorEmployee);
    });

    return returnMessage;
}

const addEmployee = async (EmployeeView) => {  
    await Employee.create(EmployeeView)
    .then(newEmployee => {
        returnMessage.data.push(newEmployee);
    }).catch(errorEmployee => {
        throw new Error(errorEmployee);
    });
    
    return returnMessage;
}

const updateEmployee = async (EmployeeView) => {
    await Employee.update(EmployeeView, { 
        where: { _id: EmployeeView._id } 
    }).then(updatedEmployee => {
        returnMessage.data.push(updatedEmployee);
    }).catch(errorEmployee => {
        throw new Error(errorEmployee);
    });

    return returnMessage;
}

const deleteEmployee = async (EmployeeView) => {
    await Employee.destroy({ 
        where: { _id: EmployeeView._id } 
    }).then(deleteEmployee => {
        returnMessage.data.push(deleteEmployee);
    }).catch(errorEmployee => {
        throw new Error(errorEmployee);
    }); 

    return returnMessage;
}

const findPosition = async (PositionView) => {
    await Position.findAll(PositionView.namePosition ? 
        {
            where: {
                namePosition: {
                    [Op.like]: `%${PositionView.namePosition}%`
                }
            } 
        } : {})
    .then(findPosition => {
        returnMessage.data.push(findPosition);
    }).catch(errorPosition => {
        throw new Error(errorPosition);
    });

    return returnMessage;
}

const addPosition = async (PositionView) => {    
    await Position.create(PositionView)
    .then(newPosition => {
        returnMessage.data.push(newPosition);
    }).catch(errorPosition => {
        throw new Error(errorPosition);
    }); 

    return returnMessage;
}

const updatePosition = async (PositionView) => {
    await Position.update(PositionView, { 
        where: { _id: PositionView._id } 
    }).then(updatedPosition => {
        returnMessage.data.push(updatedPosition);
    }).catch(errorPosition => {
        throw new Error(errorPosition);
    });

    return returnMessage;
}

const deletePosition = async (PositionView) => {
    await Position.destroy({ 
        where: { _id: PositionView._id } 
    }).then(deletePosition => {
        returnMessage.data.push(deletePosition);
    }).catch(errorPosition => {
        throw new Error(errorPosition);
    });

    return returnMessage;
}

PositionView = {
    //fullname: "Danilo Dahlen de Araujo",
    namePosition: "Supervisor"
}

findPosition(PositionView).then(result => {
    console.log(result.data);
}).catch(error => {
    console.log(error);
});

module.exports = { 
    findEmployee,
    addEmployee,
    updateEmployee,
    deleteEmployee,
    findPosition,
    addPosition,
    updatePosition,
    deletePosition
};