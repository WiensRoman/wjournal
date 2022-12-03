import React from 'react';
import {
    AddOutlined as AddIcon,
    CheckOutlined as CheckIcon,
} from "@mui/icons-material";
import {Button} from "@mui/material";


export const FollowButton: React.FC = () => {
    const [followed, setFollowed] = React.useState(false);
    return (
        <Button
            onClick={() => setFollowed(!followed)}
            variant="contained"
            style={{minWidth: 30, width: 35, height: 30}}>
            {!followed ? <AddIcon/> : <CheckIcon style={{fontSize: 20, color: '#2ea83a'}}/>}
        </Button>
    );
};
