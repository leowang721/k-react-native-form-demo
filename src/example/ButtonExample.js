/**
 * @file ButtonExample
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
    Button,
} = kForm;

var Intro = require('./Intro');

var styles = require('./styles');

class ButtonExample extends Component {
    constructor(props) {
        super(props);
        this.state = {
            buttonEventLabel: []
        };
    }
    render() {
        return (
            <View>
                <Intro lines={[
                    'Button is like the input[type=button] element in HTML.',
                    'there are 4 types:',
                    [
                        'normal, default type',
                        'submit, submit button, has its own style and default label, useful in form',
                        'reset, reset button, has its own style and default label, useful in form',
                        'icon, single icon as a buton, has its own style'
                    ]
                ]} />
                <Intro lines={[
                    'if you want buttons in one line, you should use flex styles.',
                    'you can check example: typed button: props.type=icon'
                ]} />

                <Text style={styles.h1}>Normal Button</Text>
                <Button label="Normal Button"></Button>

                <Text style={styles.h1}>Disabled Button</Text>
                <Button disabled={true} label="Disabled Button"></Button>

                <Text style={styles.h1}>Default Label is Empty</Text>
                <Button></Button>

                <Text style={styles.h1}>Custom Label: props.label</Text>
                <Button label="Custom Label"></Button>
                <Text style={styles.h1}>Custom Container style: props.style</Text>
                <Button label="Custom Container Style" style={{
                    backgroundColor: '#FC7EA3',
                    borderColor: '#FC7EA3',
                    borderRadius: 0,
                    marginHorizontal: 10,
                }}></Button>
                <Text style={styles.h1}>Custom Text style: props.labelStyle</Text>
                <Button label="Custom Label Style" labelStyle={{
                    color: 'red',
                    fontSize: 13
                }}></Button>
                <Text style={styles.h1}>Custom Icon: props.icon</Text>
                <Text style={styles.intro}>
                    you can use either unicode characters or a Component.
                </Text>
                <Button label="Custom Icon" icon="★"></Button>
                <Text style={styles.h1}>Custom Icon Style: props.iconStyle</Text>
                <Button label="Custom Icon" icon="★" iconStyle={{color: 'red'}}></Button>

                <Text style={styles.h1}>typed Button: props.type="submit"</Text>
                <Text style={styles.intro}>default label will be 'submit', useful in From</Text>
                <Button type="submit"></Button>
                <Text style={styles.h1}>typed Button: props.type="reset"</Text>
                <Text style={styles.intro}>default label will be 'reset', useful in From</Text>
                <Button type="reset"></Button>
                <Text style={styles.h1}>typed Button: props.type="icon"</Text>
                <Text style={styles.intro}>
                    if type is icon, then the shape of the button will be round,
                    use props.icon to set icon, you can use a single unicode character.
                </Text>
                <View style={styles.line}>
                    <Button type="icon" icon='☼'></Button>
                    <Button type="icon" icon='☻'></Button>
                    <Button type="icon" icon='☯'></Button>
                    <Button type="icon" icon='☸'></Button>
                    <Button type="icon" icon='❀'></Button>
                </View>
                <Text style={styles.intro}>
                    you can also use a Component such as react-native-vector-icons.
                </Text>

                <Text style={styles.h1}>Button Events</Text>
                <Text style={styles.intro}>press button below to see what happens, remember to try long press</Text>

                <View style={styles.line}>
                    <Button label="Press Me"
                        onPressIn={() => {this.updateEventLabel('onPressIn')}}
                        onPressOut={() => {this.updateEventLabel('onPressOut')}}
                        onPress={() => {this.updateEventLabel('onPress')}}
                        onLongPress={() => {this.updateEventLabel('onLongPress')}}
                    ></Button>
                    <Button icon="↻" label="clear logs" iconStyle={{transform: [{rotate: '75deg'}]}}
                        onPress={() => {this.setState({buttonEventLabel: []})}}/>
                </View>
                <ScrollView style={{height: 100, borderWidth: 0.5, margin: 10}}>
                    {
                        this.state.buttonEventLabel.map((text) => (
                            <Text style={{fontSize: 11}}>{text}</Text>
                        ))
                    }
                </ScrollView>
                <Text style={styles.intro}>
                    there is three attributes you can try yourself: 'delayPressIn', 'delayPressOut', 'delayLongPress'
                </Text>
            </View>
        );
    }

    updateEventLabel(value) {
        var label = this.state.buttonEventLabel;
        label.push(value);
        this.setState({
            buttonEventLabel: label
        });
    }
}


ButtonExample.propTypes = {
    // stage: React.PropTypes.string
};
ButtonExample.defaultProps = {
    // stage: 'DEFAULT'
};


module.exports = ButtonExample;