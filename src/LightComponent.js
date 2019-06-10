import React, { Component} from 'react';
import { connect } from 'react-redux';

export class LightComponent extends Component {
   
    render() { 
        const { light, dispatch } = this.props;
        return ( 
            <div>
            <p>{light}</p>
            <button onClick={() => dispatch({ type: 'SWITCH'})}>
                switch
            </button>
            </div>
         );
    }
}

const mapStateToProps = state => ({
    light: state

});

const LightContainer = connect(mapStateToProps)(LightComponent)
 
export default LightContainer ;