import React, {useState} from "react";
import {connect} from "react-redux";
import "./Field.css";
import Brush from "./Brush";
import ColorHisory from "./ColorHistory";
import FieldSize from "./FieldSize";

const Field = (props) => {

    const {field, currentColor, changeColor, saveToHistory, changePixelColor, clearField} = props;




    return (
        <>
            <FieldSize/>
            <Brush/>
            <ColorHisory/>
<button onClick={clearField}>Clear gild</button>
            <input
                type="color"
                value={currentColor}
                onChange={(e) => changeColor(e.target.value)}
            />

            <div className="grid">
                {field.map((el, i) => (
                    <div
                        className="pixel"
                        style={{background: el.color}}
                        onClick={() => changePixelColor(i)}
                    >
                        {i}
                    </div>
                ))}
            </div>
        </>
    );
};

const mapStateToProps = (state) => ({
    field: state.field,
    currentColor: state.currentColor
})

const mapDispatchToProps = (dispatch) => ({

    changeColor: (color) => dispatch({
        type: 'CHANGE_CURRENT_COLOR',
        payload: {
            color
        }
    }),
    changePixelColor: (index) => dispatch({
        type: 'CHANGE_PIXEL_COLOR_AND_SAVE_TO_HISTORY',
        payload: {
            index
        }
    }),   clearField: () => dispatch({
        type: 'CLEAR_FIELD',
        payload: {

        }
    }),

})


export default connect(mapStateToProps, mapDispatchToProps)(Field);



