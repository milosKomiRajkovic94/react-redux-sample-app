import React, {Component} from 'react';

import {connect} from 'react-redux';

import {bindActionCreators} from 'redux';

import * as currentNumberActions from '../actions/currentNumberActions';

class InnerContainer extends Component{

    constructor(props){
        super(props);
        /* Uncomment if you want to use state */
        // this.state = {
        //     currentNumber: 0
        // }
        this.numberHasBeenInserted = this.numberHasBeenInserted.bind(this);
        this.increaseCurrentNumberByOne = this.increaseCurrentNumberByOne.bind(this);
        this.decreaseCurrentNumberByOne = this.decreaseCurrentNumberByOne.bind(this);
        this.resetNumber = this.resetNumber.bind(this);
    }

    resetNumber(){
        /* Uncomment if you want to use state instead of Redux action */
        // this.setState({
        //     currentNumber: 0
        // })
        // Or use Redux action
        this.props.currentNumberActions.setCurrentNumber(0);
    }

    increaseCurrentNumberByOne(){
        /* Uncomment if you want to use state instead of Redux action */
        // var{
        //     currentNumber
        // } = this.state;

        // this.setState({
        //     currentNumber: currentNumber + 1
        // })
        //Or use Redux action
        this.props.currentNumberActions.increaseCurrentNumberByOne();
    }

    decreaseCurrentNumberByOne(){
        /* Uncomment if you want to use state instead of Redux action */
        // var{
        //     currentNumber
        // } = this.state;

        // this.setState({
        //     currentNumber: currentNumber - 1
        // })
        //Or use Redux action
        this.props.currentNumberActions.decreaseCurrentNumberByOne();
    }

    numberHasBeenInserted(e){
        if(/^0/.test(e.target.value)){
            e.target.value = e.target.value.replace(/^0/, "");
        }

        /* Uncomment if you want to use state instead of Redux action */
        // this.setState({
        //     currentNumber: e.target.value ? e.target.value : 0
        // });
        this.props.currentNumberActions.setCurrentNumber(e.target.value ? e.target.value : 0);
    }

    render(){
        /* Swith to this.state if you are using state instead of Redux action */
        var{
            currentNumber
        } = this.props;

        return(
            <div
                className={'innerContainer'}
            >
                <div
                    className={'calculationToolsContainer'}
                >
                    <button 
                        onClick={() => this.decreaseCurrentNumberByOne()}
                        className={'minusButton'}
                    >
                        -
                    </button>
                    &nbsp; &nbsp; &nbsp; &nbsp;
                    <input onChange={(e) => this.numberHasBeenInserted(e)} value={currentNumber} type={'number'} align={"middle"} className={'inputField'} />
                    &nbsp; &nbsp; &nbsp; &nbsp;
                    <button
                        onClick={() => this.increaseCurrentNumberByOne()}
                        className={'plusButton'}
                    >
                        +
                    </button>
                </div>
                <div
                    className={'containerForResetButton'}
                >
                    <button
                        onClick={() => this.resetNumber(0)}
                        className={'resetButton'}
                    >
                        RESET
                    </button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        currentNumber: state.currentNumberReducer.currentNumber
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        currentNumberActions: bindActionCreators(currentNumberActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (InnerContainer);