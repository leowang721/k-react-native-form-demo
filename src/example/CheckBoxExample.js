/**
 * @file CheckBox Example
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
    CheckBox,
    Option,
    OptionGroup,
} = kForm;

var Intro = require('./Intro');

var styles = require('./styles');

class CheckBoxExample extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <View>
                <Intro lines={[
                    'CheckBox is like the input[type=checkbox] element in HTML.',
                    'there is 2 types:',
                    [
                        'normal',
                        'switch'
                    ]
                ]} />
                <Text style={styles.h1}>Normal CheckBox</Text>
                <CheckBox label="Normal CheckBox" selected={['411']}>
                    <Option value="aaaaa" />
                    <Option value="bbbbb" />
                    <Option value="12" />
                    <Option value="411" />
                </CheckBox>
            </View>
        );
    }
}


CheckBoxExample.propTypes = {
    // stage: React.PropTypes.string
};
CheckBoxExample.defaultProps = {
    // stage: 'DEFAULT'
};


module.exports = CheckBoxExample;