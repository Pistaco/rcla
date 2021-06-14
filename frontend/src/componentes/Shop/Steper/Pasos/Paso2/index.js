import FormStep2 from "./FormStep2";
import {useEffect, useState} from "react";
import {Snackbar} from "@material-ui/core";
import {Alert} from "@material-ui/lab";
import IsSafe from "./isSafe";

const PasoDireccion = () => {
    const [open, setOpen] = useState()
    const [mensaje, setMensaje] = useState(false)
    const onClose = () => setOpen(false)
    const onOpen = () => setOpen(true)

    useEffect(() => {
        if (checkIfDataInLocalStorage()) {
            setMensaje(true)
        }
    },[open])
    const checkIfDataInLocalStorage = () => localStorage.getItem("formData")
    return <>
        {
            mensaje ?

                <IsSafe setMensaje={setMensaje}/> :
                <FormStep2 openAlert={onOpen}/>

        }
        <Snackbar onClose={onClose} open={open}>
            <Alert>
                AA
            </Alert>
        </Snackbar>
    </>
}


export default PasoDireccion