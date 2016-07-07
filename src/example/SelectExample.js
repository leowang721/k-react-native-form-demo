/**
 * @file SelectExample
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
    Select,
    Option,
    OptionGroup,
} = kForm;

var Intro = require('./Intro');

var styles = require('./styles');

class SelectExample extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <View>
                <Intro lines={[
                    'Select is like the select element in HTML.',
                ]} />
                <Text style={styles.h1}>Flat Select</Text>
                <Select label="Flat Select" selected="a12">
                    <OptionGroup>
                        <Option value="aaaaa" />
                        <Option value="bbbbb" />
                        <Option value="a12" icon="□▣" />
                    </OptionGroup>
                    <Option value="411" icon="□▣" />
                    <Option value="a31" type="radio" />
                    <Option value="wewew" />
                </Select>
                <Text style={styles.h1}>Flat Multiple Select</Text>
                <Select label="Flat Multiple Select" multiple={true} selected={['a12', '411']}>
                    <OptionGroup>
                        <Option value="aaaaa" />
                        <Option value="bbbbb" />
                        <Option value="a12" icon="□▣" />
                    </OptionGroup>
                    <OptionGroup>
                        <Option value="411" icon="□▣" />
                        <Option value="a31" type="radio" />
                        <Option value="wewew" />
                    </OptionGroup>
                </Select>
                <Text style={styles.h1}>Use props.labelStyle to set styles for select label</Text>
                <Select label="Default Icon" icon="㊐㊊" selected="a12"
                    labelStyle={{color: 'green'}}>
                    <OptionGroup>
                        <Option value="aaaaa" />
                        <Option value="bbbbb" />
                        <Option value="a12"/>
                    </OptionGroup>
                    <OptionGroup>
                        <Option value="411" />
                        <Option value="a31" />
                        <Option value="wewew" />
                    </OptionGroup>
                </Select>
                <Text style={styles.h1}>Use props.icon to set default icon</Text>
                <Intro lines={[
                    'we can use Option\'s property to custom icon',
                    'check out Option: a31',
                ]} />
                <Select label="Default Icon" icon="□▣" multiple={true} selected={['a12', '411']}>
                    <OptionGroup>
                        <Option value="aaaaa" />
                        <Option value="bbbbb" />
                        <Option value="a12"/>
                    </OptionGroup>
                    <OptionGroup>
                        <Option value="411" />
                        <Option value="a31" labelStyle={{color: 'red'}} iconStyle={{color: 'pink'}} />
                        <Option value="wewew" />
                    </OptionGroup>
                </Select>
            </View>
        );
    }
}


SelectExample.propTypes = {
    // stage: React.PropTypes.string
};
SelectExample.defaultProps = {
    // stage: 'DEFAULT'
};


module.exports = SelectExample;