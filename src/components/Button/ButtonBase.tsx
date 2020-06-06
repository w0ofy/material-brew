import React from 'react';
import { ButtonBase as MuiButtonBase, ButtonBaseProps as MuiButtonBaseProps } from '@material-ui/core'

const ButtonBase = (props: MuiButtonBaseProps) => (
  <MuiButtonBase disableRipple {...props} />
);

export default ButtonBase;