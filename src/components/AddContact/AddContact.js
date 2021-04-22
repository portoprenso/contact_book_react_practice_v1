import React, {useContext, useState} from 'react';
import { contactContext } from '../../contexts/ContactContext';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import SaveIcon from '@material-ui/icons/Save';
import Button from '@material-ui/core/Button';
import Typography from "@material-ui/core/Typography";
import {Link} from "react-router-dom";





const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
    button: {
        margin: theme.spacing(1),
    },
    container: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr"
    }
}));


const AddContact = () => {
    const classes = useStyles();
    const { postNewContact } = useContext(contactContext)
    const [newContact, setNewContact] = useState({
        name: '',
        surname: '',
        phone: '',
        mail: '',
        avatar: '',
        nickname: ''
    })
    const handleValues = async (e) => {
        let contactToAdd = {
            ...newContact,
            [e.target.name]: e.target.value
        }
        await setNewContact(contactToAdd)
    }

    return (
        <div className={classes.container}>
            <div></div>
            <form className={classes.root} noValidate autoComplete="off">
                <Typography variant="h4">To add new Contact - Fill in the fields and click "SAVE"</Typography>
                <TextField onChange={handleValues} value={newContact.name} name="name" id="outlined-basic" label="Name" variant="outlined" />
                <TextField onChange={handleValues} value={newContact.surname} name="surname" id="outlined-basic" label="Surname" variant="outlined" />
                <TextField onChange={handleValues} value={newContact.phone} name="phone" id="outlined-basic" type="number" label="Phone" variant="outlined" />
                <TextField onChange={handleValues} value={newContact.mail} name="mail" id="outlined-basic" label="E-Mail" variant="outlined" />
                <TextField onChange={handleValues} value={newContact.avatar} name="avatar" id="outlined-basic" label="Image URL" variant="outlined" />
                <TextField onChange={handleValues} value={newContact.nickname} name="nickname" id="outlined-basic" label="Nickname" variant="outlined" />
                <Link exact to="/">
                    <Button
                        onClick={() => postNewContact(newContact)}
                        variant="contained"
                        color="primary"
                        size="large"
                        className={classes.button}
                        startIcon={<SaveIcon />}
                    >
                        Save
                    </Button>
                </Link>
            </form>
            <div></div>
        </div>
    );
}

export default AddContact;