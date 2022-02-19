import { makeStyles } from "@material-ui/core";

export const useHomeStyles = makeStyles((theme) => ({
  darkBlueBackground: {
    backgroundColor: theme.palette.primary.dark,
    color: "white",
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  lightBlueBackGround: {
    backgroundColor: theme.palette.primary.light,
    color: "white",
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  regularContainer: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  paperStyle: {
    padding: theme.spacing(4),
    [theme.breakpoints.down("xs")]: {
      padding: theme.spacing(1)
    }
  },
  headingStyle: {
    margin: theme.spacing(2)
  },
  colorfulHeadingStyle: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    color: theme.palette.primary.light,
  },
  contentTextStyle: {
    margin: theme.spacing(2)
  },
  listItemsStyle: {
    margin: theme.spacing(2),
  },
  buttonBoxStyle: {
    display: "flex",
    justifyContent: "center",
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(8),

  },
  shelterIcon: {
    color: theme.palette.success.main,
    margin: theme.spacing(1),
  },
  publicHousingListStyle: {
    width: "100%",
  },
  titleLinkStyle: {
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    color: "white",
    fontWeight: "bold",
    textDecoration: "underline",
    "&:hover": {
      color: "white",
      fontWeight: "bold",
      textDecoration: "underline",
    },
  },
  reportStyle: {
    padding: theme.spacing(3),
    [theme.breakpoints.down("xs")]: {
      padding: theme.spacing(0),
    },
  },
  reportHeading: {
    marginBottom: theme.spacing(3),
  },
  iconStyle: {
    width: "100%",
    padding: theme.spacing(2)
  }
}));
