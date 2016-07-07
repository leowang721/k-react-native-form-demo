/**
 * @file Radio Example
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
    Radio,
    Option,
    OptionGroup,
} = kForm;

var Intro = require('./Intro');

var styles = require('./styles');

class RadioExample extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <View>
                <Intro lines={[
                    'Radio is like the input[type=radio] element in HTML.',
                    'there is 2 types:',
                    [
                        'normal',
                        'switch'
                    ]
                ]} />
                <Text style={styles.h1}>Normal Radio</Text>
                <Radio label="Normal Radio" selected="411">
                    <Option value="aaaaa" />
                    <Option value="bbbbb" />
                    <Option value="12" />
                    <Option value="411" />
                </Radio>

                <Text style={styles.h1}>Switch Radio</Text>
                <Radio label="Switch Radio" selected="411" type="switch" />
            </View>
        );
    }
}


RadioExample.propTypes = {
    // stage: React.PropTypes.string
};
RadioExample.defaultProps = {
    // stage: 'DEFAULT'
};


module.exports = RadioExample;