import {createTheme} from "@mui/material"

export const theme = createTheme({
    palette: {
        primary: {
            main: '#4683d9'
        }
    },
    components: {
        /*MuiInputBase: {
            styleOverrides: {
                root: {
                    borderRadius: 8
                }
            },
        },*/
        MuiDialog: {
                styleOverrides: {
                    paper: {
                        boxShadow: 'none'
                    },
            }
        },
        MuiButtonBase: {
            defaultProps: {
                disableRipple: true,
            },
        },
        MuiPaper: {
            styleOverrides: {
                rounded: {
                    borderRadius: 8
                }
            },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: '10px',
                    textTransform: 'inherit',
                    fontSize: 16,
                    transition: 'none',
                    '&:active': {
                        boxShadow:
                            '0 1px 1px rgb(0 0 0 / 15%), 0 4px 7px rgb(0 0 0 / 0%), 0 -1px 0 rgb(0 0 0 / 5%), -1px 0 0 rgb(0 0 0 / 5%), 1px 0 0 rgb(0 0 0 / 5%) !important',
                        transform: 'translateY(1px)',
                    }
                },
                contained: {
                    backgroundColor: 'white',
                    boxShadow: '0 1px 1px rgb(0 0 0 / 15%), 0 4px 7px rgb(0 0 0 / 5%), 0 -1px 0 rgb(0 0 0 / 5%), -1px 0 0 rgb(0 0 0 / 5%), 1px 0 0 rgb(0 0 0 / 5%)',
                    color: 'black',
                    '&:hover': {
                        backgroundColor: 'white',
                        boxShadow: '0 1px 1px rgb(0 0 0 / 18%), 0 4px 7px rgb(0 0 0 / 8%), 0 -1px 0 rgb(0 0 0 / 8%), -1px 0 0 rgb(0 0 0 / 5%), 1px 0 0 rgb(0 0 0 / 8%)',
                    }
                },
                containedPrimary: {
                    backgroundColor: '#fff',
                    '&:hover': {
                        backgroundColor: '#fff'
                    }
                }
            }
        }
    }
})