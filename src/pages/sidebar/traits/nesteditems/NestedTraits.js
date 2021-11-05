import React, { useState } from 'react'
import { useStyles } from './Styles'
import { useSelector } from 'react-redux'
const NestedTraits = (props) => {
    const classes = useStyles();
    const state = useSelector((state) => state.nftReducer);
	const selectedItem = state.selectedTrait ? state.selectedTrait.value : '';
	let nestedItemStyle = '';
    return (
        <div>
            {props.listITems &&
                props.listITems.map((items, idx) => {
                    nestedItemStyle =
                        items.value === selectedItem
                            ? classes.selectedListItem
                            : classes.nestListItem
                    return (
                        <div
                            key={idx}
                            onClick={() => {
                                props.selectedTrait(items)
                            }}
                        >
                            <div className={nestedItemStyle}>
                                <div className={classes.nestedChild1}>
                                    <p className="text-start ms-1">
                                        {items.value}
                                    </p>
                                </div>
                            </div>
                        </div>
                    )
                })}
        </div>
    )
}
export default React.memo(NestedTraits)
