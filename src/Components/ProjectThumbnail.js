import React from 'react';
import RichText from './RichText';
import { uuid } from 'uuidv4';
import { HeaderThree, SmallFlex } from '../Styles/type';
import { Projects } from '../Styles/layout';

const ProjectThumbnails = (props) => {
    console.log(props);
    return (
        <Projects>
            <HeaderThree>{props.project.fields.title}</HeaderThree>
            <img src={props.project.fields.thumbnail.fields.file.url} alt={props.project.fields.thumbnail.fields.title} />
            <div><RichText content={props.project.fields.description} /></div>
            <SmallFlex>
                {props.project.fields.technologies && props.project.fields.technologies.map((name) => <div key={uuid()}>{name}</div>)}
            </SmallFlex>
        </Projects>
    )
};

export default ProjectThumbnails;