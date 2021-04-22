import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage'
import AddContact from './components/AddContact/AddContact'
import ContactContextProvider from './contexts/ContactContext';
import Header from "./components/Header/Header";

const Routes = () => {
    return (
        <ContactContextProvider>
        <BrowserRouter>
            <Header />
            <Switch>
                <Route exact path="/" component={HomePage}/>
                <Route exact path="/add_contact" component={AddContact}/>
            </Switch>
        </BrowserRouter>
        </ContactContextProvider>
    );
};

export default Routes;