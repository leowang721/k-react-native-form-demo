/**
 * @file Example
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

var styles = require('./app.styles');

class Example extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.navigatorBar}>
                    <TouchableOpacity onPress={() => { this.props.navigator.pop(); }}>
                        <Text style={styles.goBack}>&lt; Back</Text>
                    </TouchableOpacity>
                    <Text style={styles.title}>{this.props.route.title} Examples</Text>
                </View>
                <ScrollView contentContainerStyle={{marginTop: 0, paddingBottom: 10}}>
                    {<this.props.route.component />}
                </ScrollView>
            </View>
        );
    }
}


Example.propTypes = {
    // stage: React.PropTypes.string
};
Example.defaultProps = {
    // stage: 'DEFAULT'
};


module.exports = Example;