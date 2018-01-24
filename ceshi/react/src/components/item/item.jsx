import React, { Component } from 'react';
// import { View, Text, StyleSheet } from 'react-native';

// create a component
var  Item = React.createClass({
    render() {
        var chose={
            width:"100px",
            height:'100px',
            float:"left",
            background:'red'
        }
        var style={
            width:"100px",
            height:'100px',
            float:"left",
            background:'gray'
        }
        return (
            <div style={this.props.num==this.props.choseNum?chose:style}>{this.props.num}</div>
        );
    }
}) 

export default Item;
