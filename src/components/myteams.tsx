import React  from 'react';
import { Get, MgtTemplateProps, People } from '@microsoft/mgt-react';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';

const myteams = () => {

   

    const MyMembers = (props: MgtTemplateProps) => {
        const MemberArray:string[] = [];
        console.log("Props DataContext Members: ", props.dataContext);
        const members = props.dataContext.value;
        console.log("Props Members: ", members);
        members.map(m => {MemberArray.push(m.mail)});
        return (
            <span className="members">
                <People userIds={MemberArray} showMax={10}>

                </People>
            </span>
        );
    };

    const MyChannels = (props: MgtTemplateProps) => {
        console.log("Props DataContext Channels: ", props.dataContext);
        const channels = props.dataContext.value;
        console.log("Props Teams: ", channels);
        return (
            <div>
                {channels.map(c => { return (<div className="channel">{c.displayName}</div>) })}
            </div>
        );
    };

    const MyTeams = (props: MgtTemplateProps) => {
        console.log("Props DataContext Teams: ", props.dataContext);
        const teams = props.dataContext.value;
        console.log("Props Teams: ", teams);
        return (<div>
            <Accordion>
                {teams.map(t => {
                    return (
                        <AccordionItem key={t.id}>
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                    <span className="teams">{t.displayName}</span>
                                     
                                        <Get resource={"/groups/" + t.id + "/members"}>
                                            <MyMembers template="default"></MyMembers>
                                        </Get>
                                    
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <Get resource={"/teams/" + t.id + "/channels"}>
                                    <MyChannels template="default"></MyChannels>
                                </Get>
                            </AccordionItemPanel>
                        </AccordionItem>
                    )
                })}
            </Accordion>
        </div>);
    };
    return (

        <Get resource="/me/joinedTeams" version="beta" max-pages="5" >
            <MyTeams template="default"></MyTeams>
        </Get>
    );
}
export default myteams;