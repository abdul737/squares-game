import React from "react";
import { Button, makeStyles } from "@material-ui/core";
import { useHistory } from "react-router";
import { ROUTES } from "../constants";

interface INavigationButtonProps {
  path: ROUTES;
  children: React.ReactNode;
  onClick?: () => void
  variant?: "text" | "outlined" | "contained";
  size?: "medium" | "large" | "small";
  color?: "inherit" | "primary" | "secondary" | "default";
}

const useStyles = makeStyles((theme) => ({
  menuButton: {
    width: theme.spacing(25),
  },
}))

export const NavigationButton: React.FC<INavigationButtonProps> = ({
  path,
  children,
  onClick,
  variant = 'contained',
  size = 'large',
  color,
}) => {
  const history = useHistory();
  const classes = useStyles();

  const handleClick = () => {
    history.push(path)
    onClick && onClick()
  }

  return (
    <Button
      onClick={handleClick}
      className={classes.menuButton}
      variant={variant}
      size={size}
      color={color}
    >
      {children}
    </Button>
  )
}