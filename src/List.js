/**
 * @file List
 *
 * @author Leo Wang(leowang721@gmail.com)
 */

var React = require('react-native');
var {
    Component,
    ScrollView,
    Text,
    View,
    TouchableOpacity,
} = React;

var styles = require('./app.styles');

class List extends Component {
    constructor(props) {
        super(props);

        this.state = {
            dataSource: [
                {
                    title: 'Button',
                    component: require('./example/ButtonExample')
                },
                {
                    title: 'Select',
                    component: require('./example/SelectExample')
                },
                {
                    title: 'Radio',
                    component: require('./example/RadioExample')
                },
                {
                    title: 'CheckBox',
                    component: require('./example/CheckBoxExample')
                },
                {
                    title: 'TextInput',
                    component: require('./example/TextInputExample')
                },
                {
                    title: 'TextArea',
                    component: require('./example/TextAreaExample')
                },
            ]
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.navigatorBar}>
                    <Text style={styles.title}>{this.props.title}</Text>
                </View>
                <View style={styles.list}>
                    {
                        this.state.dataSource.map((item, index) => {
                            return (
                                <TouchableOpacity key={index} onPress={() => {
                                    this.props.navigator.push(item);
                                }}>
                                    <View style={styles.item}>
                                        <Text>{item.title}</Text>
                                    </View>
                                </TouchableOpacity>
                            );
                        })
                    }
                </View>
            </View>
        );
    }
}


List.propTypes = {
    // stage: React.PropTypes.string
};
List.defaultProps = {
    // stage: 'DEFAULT'
};

module.exports = List;