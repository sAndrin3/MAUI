import * as React from 'react';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

const BasicSnackBar =({ open, onClose, severity, message }) => {

    return (
        <>
            <Snackbar
                open={open}
                autoHideDuration={6000}
                onClose={onClose}
            >
                <Alert
                    onClose={onClose}
                    severity={severity}
                >
                    {message}
                </Alert>
            </Snackbar>
        </>
    );
};

export default BasicSnackBar;
