import React from 'react';
import {
    ActivityIndicator,
    AsyncStorage,
    StatusBar,
    StyleSheet,
    View,
    Text,
    Button,
    Image
} from 'react-native';
import {
    createSwitchNavigator,
    createStackNavigator,
    createAppContainer,
} from 'react-navigation';
import Add from '../navigation/Add';
import ChatBot from 'react-native-chatbot';
import PropTypes from 'prop-types';
import SelectImage from '../AbilityBot/SelectImage';
import { Icon } from 'react-native-elements'


class Behavioryou extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      askName: '',
    };
  }
  getName = async () => {
    try {
      var name = await AsyncStorage.getItem('Name');
          this.setState({
            name: name
          });
    } catch (error) {
      console.log(error);
    }
  }
  componentWillMount() {
    this.getName();

    var that = this;
}

  render() {

    return (
      <Text>ของวิเศษที่ดีที่สุดสำหรับฉันก็คือคุณยังไงหล่ะ {this.state.name}🥳</Text>

    );
  }
}
Behavioryou.propTypes = {
  steps: PropTypes.object,
};

Behavioryou.defaultProps = {
  steps: undefined,
};
class Behavior6 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      askName: '',
    };
  }
  getName = async () => {
    try {
      var name = await AsyncStorage.getItem('Name');
          this.setState({
            name: name
          });
    } catch (error) {
      console.log(error);
    }
  }
  componentWillMount() {
    this.getName();

    var that = this;
}

  render() {

    return (
      <Text>โอวเคจ้า{this.state.name} นี้ถือเป็นการบ้านระหว่างเรานะ</Text>

    );
  }
}
Behavior6.propTypes = {
  steps: PropTypes.object,
};

Behavior6.defaultProps = {
  steps: undefined,
};

class Behavior5 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      askName: '',
    };
  }
  getName = async () => {
    try {
      var name = await AsyncStorage.getItem('Name');
          this.setState({
            name: name
          });
    } catch (error) {
      console.log(error);
    }
  }
  componentWillMount() {
    this.getName();

    var that = this;
}

  render() {

    return (
      <Text>ใน 1 สัปดาห์นี้ฉันต้องการให้คุณทำกิจกรรมเพื่อผ่อนคลาย 3 อย่างซึ่งจะเป็นผลดีต่อการพัฒนาทางอารมณ์ของ{this.state.name} เอง </Text>

    );
  }
}
Behavior5.propTypes = {
  steps: PropTypes.object,
};

Behavior5.defaultProps = {
  steps: undefined,
};

class Behavior4 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      askName: '',
    };
  }
  getName = async () => {
    try {
      var name = await AsyncStorage.getItem('Name');
          this.setState({
            name: name
          });
    } catch (error) {
      console.log(error);
    }
  }
  componentWillMount() {
    this.getName();

    var that = this;
}

  render() {

    return (
      <Text>ของวิเศษวิเศษ ที่ดีที่สุดสำหรับฉัน ก็คือคุณอย่างไงหล่ะ{this.state.name} </Text>

    );
  }
}
Behavior4.propTypes = {
  steps: PropTypes.object,
};

Behavior4.defaultProps = {
  steps: undefined,
};


class Behavior3 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      askName: '',
    };
  }
  getName = async () => {
    try {
      var name = await AsyncStorage.getItem('Name');
          this.setState({
            name: name
          });
    } catch (error) {
      console.log(error);
    }
  }
  componentWillMount() {
    this.getName();

    var that = this;
}

  render() {

    return (
      <Text>คือ{this.state.name} อย่างไงหล่ะ! </Text>

    );
  }
}
Behavior3.propTypes = {
  steps: PropTypes.object,
};

Behavior3.defaultProps = {
  steps: undefined,
};
class Behavior1 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      askName: '',
    };
  }
  getName = async () => {
    try {
      var name = await AsyncStorage.getItem('Name');
          this.setState({
            name: name
          });
    } catch (error) {
      console.log(error);
    }
  }
  componentWillMount() {
    this.getName();

    var that = this;
}

  render() {

    return (
      <Text>ฉันเข้าใจความรู้สึกของคุณนะ {this.state.name} 🙂 </Text>

    );
  }
}

Behavior1.propTypes = {
  steps: PropTypes.object,
};

Behavior1.defaultProps = {
  steps: undefined,
};

export default class SelfHarm_NoNeed extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: "Behavior",
      headerRight: (
        <Icon
raised
name='home'
color='#00aaff'
onPress={() => navigation.navigate('FirstOpApp')} />
                   )

    };
  };

    FirstOpApp = () => {
      this.props.navigation.navigate('FirstOpApp');
  };
  Thing = () => {
    this.props.navigation.navigate('Thing');
};
SelectImage = () => {
  this.props.navigation.navigate('SelectImage');
};

    render() {
        return (
          <ChatBot
          handleEnd={this.Thing}
                steps={[
                  //Behavior บำบัดพฤติกรรม
                  {
                    id: 'Behavior',
                    message: 'เมื่อคุณรู้สึกแย่หรือจิตกกังวล คุณจะขาดแรงจูงใจจนไม่อยากจะทำกิจกรรมอย่างอื่นเลย' ,
                    trigger: 'BehaviorChoice',
                  },
                  {
                    id: 'BehaviorChoice',
                    options: [
                      {value:'ใช่ฉันเลย น้องการุ', label: 'ใช่ฉันเลย น้องการุ', trigger:'Behavior1'},
                      {value:'ฉันคิดว่านั่นไม่ใช่ฉันแล้วล่ะ น้องการุ', label: 'ฉันคิดว่านั่นไม่ใช่ฉันแล้วล่ะ น้องการุ', end:true},
                    ],
                  },

                  {
                    id: 'Behavior1',
                    component: (<Behavior1/>),
                    asMessage:true,
                    trigger: 'Behavior2',
                  },
                  {
                    id: 'Behavior2',
                    message: 'คราวนี้ ฉันอาจจะใช้ของวิเศษที่ดีที่สุดของฉันแล้วล่ะ 🤔' ,
                    trigger: 'Behavior2sticker',
                  },
                  {
                    id: 'Behavior2sticker',
                    component:(
                      <Text>
                      <Image style={{ width: 90,height: 100,}} source={require('../assets/garoo/Tools.png')}/>
                       {'\n'}
                       {'\n'}
                       {'\n'}
                      </Text>
                     ) ,
                    asMessage:true,
                    trigger: 'BehaviorChoice2',
                  },
                  {
                    id: 'BehaviorChoice2',
                    options: [
                      {value:'คืออะไรเหรอ?', label: 'คืออะไรเหรอ?', trigger:'Behavior3'},
                      {value:'เซอไพรส์ฉันสิ', label: 'เซอไพรส์ฉันสิ', trigger:'Behavior4'},
                    ],
                  },
                  {
                    id: 'Behavior3',
                    component: (<Behavior3/>),
                    asMessage:true,
                    trigger: 'Behavior5',
                  },
                  {
                    id: 'Behavior4',
                    component: (<Behavior4/>),
                    asMessage:true,
                    trigger: 'BehaviorChoice4',
                  },
                  {
                    id: 'BehaviorChoice4',
                    options: [
                      {value:'emoji_97', label: '😳', trigger:'Behavioryou'},
                      {value:'emoji_96', label: '😂', trigger:'Behavioryou'},
                    ],
                  },
                  {
                    id: 'Behavioryou',
                    message: 'ฉันทำไม่ได้แน่เลยถ้าขาดคุณไป' ,
                    trigger: 'BehaviorChoiceyou',
                  },

                  {
                    id: 'BehaviorChoiceyou',
                    options: [
                      {value:'emoji_456546', label: '🤗', trigger:'Behavioryou1'},
                      {value:'emoji_95655', label: '😚', trigger:'Behavioryou1'},
                    ],
                  },
                  {
                    id: 'Behavioryou1',
                    component:(<Behavioryou/>),
                    asMessage:true,
                    trigger: 'Behavior5',
                  },
                  {
                    id: 'BehaviorChoiceyou1',
                    options: [
                      {value:'emoji_45656646', label: '😨', trigger:'Behavior5'},
                      {value:'emoji_95658775', label: '😚', trigger:'Behavior5'},
                    ],
                  },

                  {
                    id: 'Behavior5',
                    component: (<Behavior5/>),
                    asMessage:true,
                    trigger: 'SelectImage',
                  },


                  {
                    id: 'SelectImage',
                    component: (<Button title="คลิ๊กเพื่อเลือกกิจกรรม" onPress={this.SelectImage}/>),

                    trigger: 'checkselect',
                  },
                  {
                    id: 'checkselect',
                    options: [
                      { value:'เลือกกิจกรรมแล้ว', label: 'เลือกกิจกรรมแล้ว',trigger: 'Behavior6'},
                      { value:'ยังไม่ได้เลือกกิจกรรมแล้ว', label: 'ยังไม่ได้เลือกกิจกรรมแล้ว', trigger: 'SelectImage'},
                    ],
                  },

                  {
                    id: 'Behavior6',
                    component: (<Behavior6/>),
                    asMessage:true,
                    trigger: 'Behavior7',
                  },
                  {
                    id: 'Behavior7',
                    message:'แล้วฉันจะมาตรวจการบ้านในอีก 1 สัปดาห์นะ',
                    trigger: 'ThankGaroo',
                  },
                  {
                    id: 'ThankGaroo',
                    options: [

                      { value:'ขอบคุณค่ะ น้องการุ', label: 'แล้วพบกันอีกนะ น้องการุ', end:true},
                    ],
                  },



                ]}
            />
        );
    }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
