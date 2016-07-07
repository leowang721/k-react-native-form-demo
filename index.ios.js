/**
 * Sample KReactNativeForm
 * https://github.com/leowang721/k-react-native-form
 */
'use strict';

var React = require('react-native');
var {
    AppRegistry,
} = React;

var App = require('./src/App');

var KFormSample = React.createClass({
    render: function() {
        return (
            <App />
        );
    }
});

AppRegistry.registerComponent('KFormSample', () => KFormSample);

