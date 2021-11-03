import React from 'react'
import FormControl from '@material-ui/core/FormControl'
import Input from '@material-ui/core/Input'
import { useStyles } from './Styles'

const IndexInput = (props) => {
    const classes = useStyles(props) 
    return (
        <div className={classes.inputRoot}>
            <FormControl>
                <Input
					disableUnderline={true}
                    placeholder={props.placeHolder}
                    className={classes.input}
                    value={props?.value ?  props?.value : ''}
                    onChange={(e)=>props?.onChange(e.target.value)}
                />
            </FormControl>
        </div>
    )
}
export default IndexInput
