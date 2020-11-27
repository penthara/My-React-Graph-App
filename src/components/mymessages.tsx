import React from 'react';
import { Get, Person,  MgtTemplateProps} from '@microsoft/mgt-react';
import { PersonViewType } from '@microsoft/mgt';

class mymessages extends React.Component {


    render(){
        const MyEmails = (props: MgtTemplateProps) => { 
            console.log ("Props DataContext: ",props.dataContext);
            const emails = props.dataContext.value;
            console.log ("Props Emails: ",emails);
            //return({emails.map(email=>{return(<li>{email.subject}</li>)})}); 
            return(<div>{emails.map(e=>{return(
            <div className="email" data-for="email in value">
              <h4>
                  {
                      e.sender.emailAddress.address.toLowerCase().includes("m365x138871.onmicrosoft.com")?
                      <Person userId={e.sender.emailAddress.address}  view={PersonViewType.oneline} avatarSize="small"></Person>:
                      <Person personQuery={e.sender.emailAddress.address}  view={PersonViewType.oneline} avatarSize="small"></Person>
                      
                  }
              </h4>
              <h3>{e.subject}</h3>
              <div className="preview">
                {e.bodyPreview}
              </div>
            </div>
            )})}</div>);
        
            };
    return (
        <Get resource="/me/messages" version="beta" max-pages="5" >
        <MyEmails template = "default"></MyEmails>
        </Get>
    );
    }
 }
 export default mymessages;