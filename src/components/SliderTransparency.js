import React from 'react';
import Slider from 'material-ui/Slider';
/**
 * The `defaultValue` property sets the initial position of the slider.
 * The slider appearance changes when not at the starting position.
 */
const SliderTransparency = (props) => (
    <Slider defaultValue={props.transparency} onChange={props.update} sliderStyle={{margin:'auto',pointerEvents:'all'}} axis='y' style={{height:'400px', paddingTop:"30px"}}
        data-tip={`Opacity`}
        data-offset="{'top': -30}"
        />
);

export default SliderTransparency;
