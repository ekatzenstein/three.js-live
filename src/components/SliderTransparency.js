import React from 'react';
import Slider from 'material-ui/Slider';
/**
 * The `defaultValue` property sets the initial position of the slider.
 * The slider appearance changes when not at the starting position.
 */
const SliderTransparency = (props) => (
  <div>
    <Slider defaultValue={props.default} onChange={props.update} sliderStyle={{marginBottom:'24px'}}/>
  </div>
);

export default SliderTransparency;
