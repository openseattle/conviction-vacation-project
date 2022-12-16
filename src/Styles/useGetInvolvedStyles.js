import { makeStyles } from "@mui/styles";

export default makeStyles(theme => ({
    regularContainerStyle: {
        marginTop: theme.spacing(8),
        marginBottom: theme.spacing(8),
        scrollMarginTop: "4em",
    },
    centerText: {
        textAlign: "center",
    },
    CTAButtonContainerStyle: {
        marginTop: theme.spacing(8),
        marginBottom: theme.spacing(8),
        display: "flex",
        justifyContent: "center",
    },
    CTAButtonSpaceStyle: {
        marginTop: theme.spacing(8),
        marginBottom: theme.spacing(8),
    },
    headingStyle: {
        marginTop: theme.spacing(8),
        marginBottom: theme.spacing(8),
    },
    volunteerTextStyle: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
        padding: theme.spacing(2),
    },
    dividerStyle: {
        marginTop: theme.spacing(8),
        marginBottom: theme.spacing(8),
    },
    donationImageStyle: {
        width: "100%",
    },
    partnerImageStyle: {
        width: "100%",
    },
    basicListStyle: {
        listStyleType: "disc",
        paddingLeft: theme.spacing(3),
        marginBottom: theme.spacing(3),
    },
    paperStyle: {
        padding: "3em",
        marginTop: theme.spacing(5),
        marginBottom: theme.spacing(5),
    },
    heroPanel: {
        direction: "row",
        justifyContent: "center",
        alignItems: "flex-start",
    },
    steps: {
        display: "inline-flex",
        justifyContent: "space-between",
        alignItems: "center",
        [theme.breakpoints.down("sm")]: {
            flexDirection: "column",
        },
    },
    stepIcon: {
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
    },
}));
