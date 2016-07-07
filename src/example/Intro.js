/**
 * @file Intro
 *
 * @author Leo Wang(leowang721@gmail.com)
 */

var _ = require('lodash');

var React = require('react-native');
var {
    Component,
    View,
    Text,
} = React;

var kCore = require('k-react-native-core');

var styles = require('./styles');

class Intro extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        var lines = getIntroLines(this.props.lines);
        return (
            <View style={styles.intro}>{lines}</View>
        );
    }
}


function getIntroLines(intro, showIndex) {

    if (!intro) {
        return;
    }

    if (!_.isArray(intro)) {
        intro = [intro];
    }

    return intro.map((eachLine, lineIndex) => {
        if (_.isArray(eachLine)) {
            return (
                <View key={kCore.util.uid()} style={{margin: 10}}>
                    {getIntroLines(eachLine, true)}
                </View>
            );
        }
        return (<Text key={kCore.util.uid()}>{showIndex ? (<Text>{lineIndex + 1}. </Text>) : ''}{eachLine}</Text>);
    });
}


Intro.propTypes = {
    // stage: React.PropTypes.string
};
Intro.defaultProps = {
    // stage: 'DEFAULT'
};


module.exports = Intro;