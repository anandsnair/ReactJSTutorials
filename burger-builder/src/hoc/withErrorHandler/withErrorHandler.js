import React, {Component}from 'react';
import Modal from '../../components/UI/Model/Modal';
import Aux from '../Aux';

const withErrorHandler = (WrappedComponent, axios) => {
    return class extends Component {
        state = {
            error : null
        }

        componentWillMount() {
            this.reqInterceptors = axios.interceptors.request.use(request => {
                this.setState({error : null});
                return request;
            });

            this.respInterceptors = axios.interceptors.response.use(null, error => {
                this.setState({error : error});
                return error;
            });
        }


        componentWillUnmount() {
            axios.interceptors.request.eject(this.reqInterceptors);
            axios.interceptors.response.eject(this.respInterceptors);
        }

        errorConfirmedHandler=() => {
            this.setState({error : null});
        }
        render() {
            return (
                <Aux>
                    <Modal show={this.state.error}
                    closeBackDrop={this.errorConfirmedHandler}>
                    {this.state.error ? this.state.error.message : null}
                    </Modal>
                    <WrappedComponent {...this.props}/>
                </Aux>
            );
        }   
    }
}

export default withErrorHandler;