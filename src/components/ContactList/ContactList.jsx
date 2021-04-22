import React from 'react';
import { contactContext } from '../../contexts/ContactContext';
import { useContext, useEffect } from "react"
import Button from '@material-ui/core/Button'
import Avatar from '@material-ui/core/Avatar'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import EditContact from '../EditContact/EditContact'
import { makeStyles } from '@material-ui/core/styles';
import './ContactList.css'
import {BrowserRouter, Switch, Route, Link} from "react-router-dom";


const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    small: {
      width: theme.spacing(3),
      height: theme.spacing(3),
    },
    large: {
      width: theme.spacing(12),
      height: theme.spacing(12),
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
      },
      title: {
        fontSize: 14,
      },
      pos: {
        marginBottom: 12,
      },    
  }));
  



const ContactList = () => {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;
    const { contactsData, getContacts, deleteContact, getContactDetails } = useContext(contactContext);

    useEffect(() => {
        getContacts()
    }, [])

    return (
        <BrowserRouter>
                        <Route exact path={`/details/:id`} component={EditContact} />
            {contactsData.map(item => {
                return (
                    <Switch>
                    <div className="contact-roll">
                        <div></div>
                            <div className="contact-card">
                            <Card className={classes.root}>
                                <CardContent>
                                    <Avatar className={classes.large} alt={item.name} src={item.avatar} />
                                </CardContent>
                                <Typography variant="div" component="div">
                                <Typography className={classes.pos} color="textSecondary">
                                    <Typography variant="h5" component="h2">
                                        {item.name} {item.surname}
                                    </Typography>
                                    <Typography variant="subtitle1" component="subtitle1">
                                        {item.nickname ? (`Nickname: ${item.nickname}`) : (`Nickname: ${item.nickname}`)}
                                    </Typography>
                                    </Typography>
                                        Phone: {item.phone}
                                        <br></br>
                                        EMail: {item.mail}
                                    </Typography>
                                <CardActions>
                                <div className="btn-container">
                                    <Button onClick={() => deleteContact(item.id)} variant="contained" color="secondary">Send this dude to hell</Button>
                                    <br></br>
                                    <Link exact to={`/details/${item.id}`}><Button variant="contained" color="primary">CRIPPLE HIM!!!</Button></Link>
                                </div>
                                </CardActions>
                            </Card>
                            </div>
                        <div></div>
                    </div>

                    </Switch>
                )
            })}
        </BrowserRouter>
    );
};

export default ContactList;