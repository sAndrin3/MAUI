import React, {useState} from 'react';
import GridWrapper from "../../components/common/GridWrapper/GridWrapper";
import UserTable from "../../components/UserTable/UserTable";
import BasicCard from "../../components/common/BasicCard/BasicCard";
import BasicSnackBar from "../../components/common/BasicSnackBar/BasicSnackBar";

const Storage = () => {

    const [open, setOpen] = useState(false);

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    return (
        <GridWrapper>
            <BasicCard
                content={<UserTable onError={() => setOpen(true)} />}
            />
            <BasicSnackBar
                open={open}
                severity="error"
                message="Data couldn't be fetched"
                onClose={handleClose}
            />
        </GridWrapper>
    )
}

export default Storage;