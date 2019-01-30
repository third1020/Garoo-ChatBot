import React from 'react';
import {
    ActivityIndicator,
    AsyncStorage,
    StatusBar,
    StyleSheet,
    View,
    Text,
    Dimensions,
    Image,
} from 'react-native';
import {
    createSwitchNavigator,
    createStackNavigator,
    createAppContainer,
} from 'react-navigation';
import Add from '../navigation/Add';

import SelectImage from '../AbilityBot/SelectImage';


import ChatBot from 'react-native-chatbot';
import { Button } from 'react-native-elements';
import HomeScreen from '../navigation/HomeScreen';
import PropTypes from 'prop-types';
import { Icon } from 'react-native-elements'

class Hello extends React.Component {
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
      <Text>สวัสดีจ้า! {this.state.name} </Text>

    );
  }
}

Hello.propTypes = {
  steps: PropTypes.object,
};

Hello.defaultProps = {
  steps: undefined,
};






export default class Need_help extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: "Need_help",
      headerRight: (
        <Icon
raised
name='home'
color='#00aaff'
onPress={() => navigation.navigate('FirstOpApp')} />
                   )

    };
  };

    SelectImage = () => {
        this.props.navigation.navigate('SelectImage');
    };

    HomeScreen = () => {
          this.props.navigation.navigate('HomeScreen');
      };
      FirstOpApp = () => {
        this.props.navigation.navigate('FirstOpApp');
    };
    Thing = () => {
      this.props.navigation.navigate('Thing');
  };




    render() {
        return (
          <ChatBot
          handleEnd={this.Thing}
            steps={[
              {
                  id: '0',
                  component:(<Hello/>),
                  asMessage:true,
                  trigger: '1',
                },
            {
                id: '1',
                message: 'ฉันตรวจพบว่าคุณต้องการความช่วยเหลือ',
                trigger: '3',
              },
              {
                id: '3',
                message: 'คุณเป็น บุคคลทั่วไป หรือ บุคลากร/นักศึกษามหาวิทยาลัยธรรมศาสตร์',
                trigger: '4',
              },
              {
                id: '4',
                options: [
                  {value:'บุคคลทั่วไป',  label: 'บุคคลทั่วไป', trigger:'5_photo'},
                  {value:'บุคลากร/นักศึกษามหาวิทยาลัยธรรมศาสตร์',  label: 'บุคลากร/นักศึกษามหาวิทยาลัยธรรมศาสตร์', trigger:'6_photo'},
                ],
              },
              {
                id: '5_photo',
                component: (
                  <Image style={{ width: 340,height: 300,}} source={require('../assets/02.jpg')}/>
                ),
                trigger: '5',
              },
              {
                id: '5',
                message: 'สามารถโทรปรึกษากับพี่ๆผู้เชี่ยวชาญได้เลย ที่ 1323 สายด่วนสุขภาพจิต ฟรี! ได้ตลอด 24 ชม.เลยจ้า',
                trigger: '7',
              },
              {
                id: '6_photo',
                component: (

                  <Image style={{ width: 340,height: 300,}} source={require('../assets/01.jpg')}/>

                ),
                trigger: '99',
              },
              {
                id: '99',
                component: (

                  <Image style={{ width: 340,height: 300,}} source={require('../assets/02.jpg')}/>

                ),
                trigger: '6',
              },
              {
                id: '6',
                component: (
                  <Text>สำหรับนักศึกษามหาวิทยาลัยธรรมศาสตร์ สามารถติดต่อขอรับบริการได้ที่
                  ศูนย์บริการนักศึกษา ชั้นที่ 1{'\n'}
                  ณ ศูนย์การเรียนรู้เฉลิมพระเกียรติกรมหลวงนราธิวาสราชนครินทร์{'\n'}
                  มหาวิทยาลัยธรรมศาสตร์ ศูนย์รังสิต วันจันทร์ - วันศุกร์ เวลา 08.30 - 16.30 น.{'\n'}
                  ยกเว้นวันหยุดราชการ สามารถนัดหมายได้ที่ 02-564-4440 ต่อ 1282 , 6604{'\n'}
                  บริการ Hotline เวลา 22.00 - 04.00 น. เปิดให้บริการทุกวัน{'\n'}
                  เบอร์โทร 098-848-8421 , 094-330-2234</Text>
                ),
                trigger: '7',
              },
              {
                id: '7',
                options: [
                  { value:'โทรแล้วครับ', label: 'โทรแล้วครับ', end:true},
                  { value:'โทรแล้วค่ะ', label: 'โทรแล้วค่ะ', end:true},
                ],
              },


            ]}
        />
        );
    }
}
