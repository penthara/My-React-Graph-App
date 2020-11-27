import React from 'react';
import {Person,  MgtTemplateProps} from '@microsoft/mgt-react';

const welcome = () => {
    const MyUser = (props: MgtTemplateProps) => { 
        console.log ("Props DataContext Person: ",props.dataContext);
        const UserPerson = props.dataContext.person;
        console.log ("Props Person: ",UserPerson);
        //return({emails.map(email=>{return(<li>{email.subject}</li>)})}); 
        return(<div> {UserPerson.displayName} !</div>);
    
        };

    return (
        <div className="center">
            Welcome &nbsp;<b><Person personQuery="me">
                <MyUser template="default"></MyUser>
            </Person></b>
        </div>
    );
 }
 export default welcome;