import React, {useContext, useEffect, useState} from 'react';
import { contactContext } from '../../contexts/ContactContext';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import SaveIcon from '@material-ui/icons/Save';
import Button from '@material-ui/core/Button';
import Typography from "@material-ui/core/Typography";
import {Link} from "react-router-dom";
import {useParams} from "react-router";


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



const EditContact = (props) => {
    const {id} = useParams()
    const classes = useStyles();
    const { contactDetails, getContactDetails, editContact } = useContext(contactContext)


    const [newContact, setNewContact] = useState({
        ...contactDetails
        // name: contactDetails.name,
        // surname: contactDetails.surname,
        // phone: contactDetails.phone,
        // mail: contactDetails.mail,
        // avatar: contactDetails.avatar,
        // nickname: contactDetails.nickname
    })
    useEffect(() => {
        getContactDetails(id)
        // setNewContact({...contactDetails})
        }, [contactDetails])

    const handleValues = (e) => {
        let contactToAdd = {
            ...newContact,
            [e.target.name]: e.target.value
        }
        setNewContact(contactToAdd)
    }

    return (
        <div className={classes.container}>
            <div></div>
            <form className={classes.root} noValidate autoComplete="off">
                <Typography variant="h4">Edit values in TextFields and click button "SAVE CHANGES"</Typography>
                <TextField onChange={handleValues} value={newContact.name} name="name" id="outlined-basic" label="Name" variant="outlined" />
                <TextField onChange={handleValues} value={newContact.surname} name="surname" id="outlined-basic" label="Surname" variant="outlined" />
                <TextField onChange={handleValues} value={newContact.phone} name="phone" id="outlined-basic" type="number" label="Phone" variant="outlined" />
                <TextField onChange={handleValues} value={newContact.mail} name="mail" id="outlined-basic" label="E-Mail" variant="outlined" />
                <TextField onChange={handleValues} value={newContact.avatar} name="avatar" id="outlined-basic" label="Image URL" variant="outlined" />
                <TextField onChange={handleValues} value={newContact.nickname} name="nickname" id="outlined-basic" label="Nickname" variant="outlined" />
                <Link exact to="/">
                    <Button
                        onClick={() => editContact(newContact, id)}
                        variant="contained"
                        color="primary"
                        size="large"
                        className={classes.button}
                        startIcon={<SaveIcon />}
                    >
                        Save changes
                    </Button>
                </Link>
            </form>
            <div></div>
        </div>
    );
}

export default EditContact;