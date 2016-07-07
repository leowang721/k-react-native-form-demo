/**
 * @file styles for app
 * @author Leo Wang(leowang721@gmail.com)
 */

var React = require('react-native');
var {
     StyleSheet
} = React;

var styles = StyleSheet.create({
    container: {
        position: 'absolute',
        paddingTop: 10,
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
    },
    navigatorBar: {
        backgroundColor: '#C6C6C6',
    },
    goBack: {
        position: 'absolute',
        left: 5,
        top: 10,
        fontSize: 15,
    },
    title: {
        fontSize: 16,
        padding: 10,
        fontWeight: 'bold',
        alignSelf: 'center'
    },
    list: {
        borderColor: '#C6C6C6',
    },
    item: {
        padding: 10,
        borderBottomWidth: 2,
        borderColor: '#C6C6C6',
    },
});

module.exports = styles;
