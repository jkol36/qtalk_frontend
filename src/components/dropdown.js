import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import { grey } from '@material-ui/core/colors';

const useStyles = makeStyles(theme => ({
  root: {
    position: 'relative',
  }
}));

export default function Dropdown(props) {
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();

  const handleClick = () => {
    setOpen(prev => !prev);
  };

  const handleClickAway = () => {
    setOpen(false);
  };

  const fake = <div className={classes.fake} />;

  return (
    <div className={classes.root}>
      <ClickAwayListener onClickAway={handleClickAway}>
        <div>
          <Button color={props.color} onClick={handleClick}>{props.title}</Button>
          {open ? (
            <Paper className={classes.paper}>
                {props.children}
            </Paper>
          ) : null}
        </div>
      </ClickAwayListener>
    </div>
  );
}
