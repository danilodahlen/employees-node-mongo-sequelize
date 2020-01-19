const { mongoose, Position, Employee } = require('./model');

const returnMessage = {
    error:[],
    data:[]
}

const findEmployee = async (EmployeeView) => {
await Employee.find( EmployeeView.fullname || EmployeeView.nickname ? {  $or:[{ "fullname": { $regex: `${EmployeeView.fullname}`, $options: 'i' }},{ "nickname": { $regex : `${EmployeeView.nickname}`, $options: 'i' }}] } : {})
    .then(findEmployee => {
        returnMessage.data.push(findEmployee);
    })
    .catch(errorEmployee => {
        throw new Error(errorEmployee);
    });

    return returnMessage;
}

const addEmployee = async (EmployeeView) => {
    let EmployeeSave = new Employee(EmployeeView);

    await EmployeeSave.save()
    .then(newEmployee => {
        returnMessage.data.push(newEmployee);
    })
    .catch(errorEmployee => {
        throw new Error(errorEmployee);
    });
    
    return returnMessage;
}

const updateEmployee = async (EmployeeView) => {
    await Employee.findOneAndUpdate(
        { _id: EmployeeView._id },
        { fullname: EmployeeView.fullname,
          nickname: EmployeeView.nickname,
          birthday: EmployeeView.birthday,
          salary: EmployeeView.salary,
          namePosition: EmployeeView.namePosition,
          zipcode: EmployeeView.zipcode,
          street: EmployeeView.street,
          number: EmployeeView.number,
          city: EmployeeView.city,
          state: EmployeeView.state },
        { new: true }
    ).then(updateEmployee => {
        returnMessage.data.push(updateEmployee);
    })
    .catch(errorEmployee => {
        throw new Error(errorEmployee);
    });

    return returnMessage;
}

const deleteEmployee = async (EmployeeView) => {
    await Employee.findOneAndRemove({ 
        _id: EmployeeView._id
    }).then(deleteEmployee => {
        returnMessage.data.push(deleteEmployee);
    })
    .catch(errorEmployee => {
        throw new Error(errorEmployee);
    });

    return returnMessage;
}

const findPosition = async (PositionView) => {
    await Position.find(PositionView.namePosition ? { $or:[{ "namePosition": { $regex: PositionView.namePosition, $options: 'i' }}] } : {})
    .then(findPosition => {
        returnMessage.data.push(findPosition);
    })
    .catch(errorPosition => {
        throw new Error(errorPosition);
    });

    return returnMessage;
}

const addPosition = async (PositionView) => {    
    let PositionSave = new Position(PositionView);
    
    await PositionSave.save()
    .then(newPosition => {
        returnMessage.data.push(newPosition);
    })
    .catch(errorPosition => {
        throw new Error(errorPosition);
    });
    
    return returnMessage;
}

const updatePosition = async (PositionView) => {
    await Position.findOneAndUpdate(
        { _id: PositionView._id },
        { namePosition: PositionView.namePosition,
          percentCommission: PositionView.percentCommission },
        { new: true }
    ).then(updatePosition => {
        returnMessage.data.push(updatePosition);
    })
    .catch(errorPosition => {
        throw new Error(errorPosition);
    });

    return returnMessage;
}

const deletePosition = async (PositionView) => {
    await Position.findOneAndRemove({ 
        _id: PositionView._id
    }).then(deletePosition => {
        returnMessage.data.push(deletePosition);
    })
    .catch(errorPosition => {
        throw new Error(errorPosition);
    });

    return returnMessage;
}

EmployeeView = {
    fullname: "Flavio" 
};

findEmployee(EmployeeView).then(result => {
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
}