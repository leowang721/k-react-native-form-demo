/**
 * @file App Main Entrance
 *
 * @author Leo Wang(leowang721@gmail.com)
 */

var React = require('react-native');
var {
    Component,
    View,
    Navigator,
} = React;

var style = require('./app.styles');
var List = require('./List');
var Example = require('./Example');

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <Navigator
                style={style.container}
                initialRoute={{title: 'Examples', type: 'list'}}
                renderScene={this.renderScene}
                configureScene={(route) => {
                    if (route.sceneConfig) {
                        return route.sceneConfig;
                    }
                    return Navigator.SceneConfigs.HorizontalSwipeJump;
                }} />
        );
    }
    renderScene(route, navigator) {
        if (route.type === 'list') {
            return (
                <List navigator={navigator} title={route.title} />
            );
        }

        return <Example navigator={navigator} route={route} />;
    }
}


App.propTypes = {
    // stage: React.PropTypes.string
};
App.defaultProps = {
    // stage: 'DEFAULT'
};


module.exports = App;