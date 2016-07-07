/**
 * @file 样式
 * @author Leo Wang(leowang721@gmail.com)
 */

var React = require('react-native');
var {
     StyleSheet
} = React;

var styles = StyleSheet.create({
    line: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    h1: {
        flex: 1,
        padding: 5,
        marginTop: 10,
        fontSize: 15,
        fontWeight: 'bold',
    },
    intro: {
        flex: 1,
        padding: 5
    }
});

module.exports = styles;
