import React, {Component} from 'react';
import PropTypes from 'prop-types'
import {connect} from 'react-redux';

import {start} from '../redux/actions';
import './matrix.css'


class Matrix extends Component {

    static propTypes = {
        data: PropTypes.array.isRequired,
    }

    render() {

        const {data} = this.props;

        const style = {
            'grid-template-columns': `repeat(${data.length}, ${100/data.length}%)`,
            'grid-template-rows': `repeat(${data.length}, ${100/data.length}%)`,
        }

        if(data.length === 0){
            return (
                <div>

                </div>
            );
        }
        else {
            return (
                <div className='wrapper cas' style={style}>
                    {data.map((index) => (
                        index.map((i, s) => <div className='box' key={s}>{i}</div>)
                    ))}
                </div>
            );
        }
    }
}

export default connect(
    state => ({data: state}),
    {start}
)(Matrix);
