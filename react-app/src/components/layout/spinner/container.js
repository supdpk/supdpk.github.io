import React, { useState } from 'react';
import { connect } from 'react-redux';
import Spinner from './index';

export const mapStateToProps = state => {
    return {
        IsLoading: state,
    };
};

export const mapDispatchToProps = (dispatch) => {
    return {
        show: () => { 
            return dispatch({ type: 'SHOW' })
        },
        hide: () => dispatch({ type: 'HIDE' })
    }
};

export const SpinnerContainer = connect(mapStateToProps, mapDispatchToProps)(Spinner);
