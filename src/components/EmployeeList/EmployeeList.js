import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {selectEmployees} from "../../store/emploee/selector";
import {loadEmployees} from "../../store/emploee/actions";
import {selectLoadind} from "../../store/app/selector";


const EmployeeList = () => {
    const dispatch = useDispatch()
    const employees = useSelector(selectEmployees)

    if(!employees.length){
        return <button
            className="btn btn-primary"
            onClick={()=>dispatch(loadEmployees())}
        >Загрузить сотрудников</button>
    }
    return (
            <>
            {employees.length > 0 ? employees.map(user => {
                return (
                    <div className="card" key={user.id}>
                        <div className="card-body">
                            <h5 className="card-title">{user.name}</h5>
                        </div>
                    </div>
                )
            }) : <div>список пуст</div>}
            </>
    )
}

export default EmployeeList