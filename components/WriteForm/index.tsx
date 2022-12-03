import React from 'react';
import dynamic from "next/dynamic";
import {Button, Input} from "@mui/material";
import styles from './WriteForm.module.scss';
import {TextsmsOutlined as MessageIcon} from "@mui/icons-material";

const Editor = dynamic(() => import('../Editor').then((m) => m.Editor),{ssr: false})

interface WriteFormProps {
    title?:string;
}

export const WriteForm: React.FC<WriteFormProps> = ({title}) => {
setTimeout
    return (
        <div>
            <Input classes={{root: styles.titleField}} placeholder="Заголовок" defaultValue={title}/>
        <div className={styles.editor}>
            <Editor />
        </div>
        <Button variant="contained" color="primary">
            <MessageIcon className="mr-10"/>
            Опубликовать
        </Button>

        </div>
    );
};