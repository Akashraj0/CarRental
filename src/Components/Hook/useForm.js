import { useEffect, useReducer ,useState } from 'react'

const inital = { car: "", pickDate: "", PickLocation: "", DropLocation: "", DropDate: "" };
const Action = { CAR: 1, PICKDATE: 2, PICKLOCATION: 3, DROPLOCATION: 4, DROPDATE: 5 };
function formreducer(state, action) {
    switch (action.type) {
        case Action.CAR:
            return {
                ...state,
                car: action.payload,
            }
        case Action.PICKDATE:
            return {
                ...state,
                pickDate: action.payload,
            }
        case Action.PICKLOCATION:
            return {
                ...state,
                PickLocation: action.payload,
            }
        case Action.DROPLOCATION:
            return {
                ...state,
                DropLocation: action.payload,
            }
        case Action.DROPDATE:
            return {
                ...state,
                DropDate: action.payload,
            }
        default:
            return  state;
    }
}
const useForm = () => {
    const [form, dispatch] = useReducer(formreducer, inital);
    const [Formvalid,setFormvalid]=useState(false);
    useEffect(()=>{
        if(
            form.car &&
            form.pickDate&&
            form.PickLocation&&
            form.DropLocation&&
            form.DropDate
        )
        {
            setFormvalid(true);
        }
    },[form])
    const changecarHandler = (e) => {
        dispatch({type: Action.CAR, payload: e.target.value})
    }
    const changePDHandler = (e) => {
        dispatch({type: Action.PICKDATE, payload: e.target.value})
    }
    const changePLHandler = (e) => {
        dispatch({type: Action.PICKLOCATION, payload: e.target.value})
    }
    const changeDDHandler = (e) => {
        dispatch({type: Action.DROPDATE, payload: e.target.value})
    }
    const changeDLHandler = (e) => {
        dispatch({type: Action.DROPLOCATION, payload: e.target.value})
    }

    const submitHandler = (e) => {
        e.preventDefault();
        if(Formvalid)
        {
        console.log(form)
        }
    }
    return {
        form,
        changecarHandler,
        changePDHandler,
        changePLHandler,
        changeDDHandler,
        changeDLHandler,
        submitHandler
    };
};

export default useForm;