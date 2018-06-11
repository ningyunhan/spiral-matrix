import React, { Component } from 'react';
import PropTypes from "prop-types";

import './app.css'
import Matrix from './matrix'


class App extends Component {


    static propTypes = {
        data: PropTypes.array.isRequired,
    }

    handleClick = () => {
        const input = this.input.value * 1;
        const reg = /^\d+$/;

        if(!reg.test(input)) {
            alert("A positive integer is required");
            this.input.value = '';
            return;
        }
        else if(input === 0) {
            alert("A positive integer is required");
            this.input.value = '';
            return;
        }
        else if(input > 15) {
            alert("Input number must be less than 15");
            this.input.value = '';
            return;
        }

        this.createMatrix(input);
        this.input.value = '';
    }

    createMatrix = (n) => {
        let res = new Array(n);
        for(let i = 0; i < n; i++){
            res[i] = new Array(n);
        }
        let cb = 0, ce = n - 1;
        let rb = 0, re = n - 1;
        let count = 1;

        while(cb <= ce && rb <= re) {
            for(let i = cb; i <= ce; i++) {
                res[rb][i] = count;
                count++;
            }
            rb++;
            for(let i = rb; i <= re; i++) {
                res[i][ce] = count;
                count++;
            }
            ce--;
            if(rb <= re) {
                for(let i = ce; i >= cb; i--) {
                    res[re][i] = count;
                    count++;
                }
                re--;
            }

            if(cb <= ce) {
                for(let i = re; i >= rb; i--) {
                    res[i][cb] = count;
                    count++;
                }
                cb++;
            }
        }

        this.props.start(res);
    };




    render() {
        return (
            <div>
                <div className="input-group re">
                    <div className="input-group-prepend">
                        <button className="btn btn-outline-secondary bbb" type="button" onClick={this.handleClick}>Create</button>
                    </div>&nbsp;&nbsp;&nbsp;
                    <input type="text" className="form-control bb" placeholder="" aria-label="" aria-describedby="basic-addon1" ref={input => this.input = input}/>
                </div>
                <Matrix />
            </div>
        );
    }
}

export default App;
