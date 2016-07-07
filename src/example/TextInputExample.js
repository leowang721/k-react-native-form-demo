/**
 * @file TextInputExample
 *
 * @author Leo Wang(leowang721@gmail.com)
 */

var React = require('react-native');
var {
    Component,
    ScrollView,
    Text,
    TouchableOpacity,
    View,
} = React;

var kForm = require('k-react-native-form');
var {
    TextInput,
} = kForm;

var Intro = require('./Intro');

var styles = require('./styles');

class TextInputExample extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <View>
                <Intro lines={[
                    'TextInput is like the input[type=text] in HTML.',
                ]} />
                <Text style={styles.h1}>Normal TextInput</Text>
                <TextInput label="Normal" />
            </View>
        );
    }
}


TextInputExample.propTypes = {
    // stage: React.PropTypes.string
};
TextInputExample.defaultProps = {
    // stage: 'DEFAULT'
};


module.exports = TextInputExample;