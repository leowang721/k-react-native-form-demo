/**
 * @file TextAreaExample
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
    TextArea,
} = kForm;

var Intro = require('./Intro');

var styles = require('./styles');

class TextAreaExample extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <View>
                <Intro lines={[
                    'TextArea is like the textarea in HTML.',
                ]} />
                <Text style={styles.h1}>Normal TextArea</Text>
                <TextArea label="Normal" />
            </View>
        );
    }
}


TextAreaExample.propTypes = {
    // stage: React.PropTypes.string
};
TextAreaExample.defaultProps = {
    // stage: 'DEFAULT'
};


module.exports = TextAreaExample;