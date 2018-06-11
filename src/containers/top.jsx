import {connect} from 'react-redux';

import App from '../components/App';
import {start} from '../redux/actions';


export default connect(
    state => ({data: state}),
    {start}
)(App);


