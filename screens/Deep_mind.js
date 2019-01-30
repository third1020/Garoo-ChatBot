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


import CheckSick from '../AbilityBot/CheckSick';
import PlaySound from '../AbilityBot/PlaySound';




import ChatBot from 'react-native-chatbot';
import { Button } from 'react-native-elements';
import HomeScreen from '../navigation/HomeScreen';
import PropTypes from 'prop-types';
import { Icon } from 'react-native-elements'

const { height,width } = Dimensions.get('window')

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

class Happy extends React.Component {
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
      <Text> ว้าว! ตอนนี้ฉันรู้สึกดีใจ และมีความสุข
มากๆเลย ที่ {this.state.name}เองก็มีความสุข น้องการุ
หวังว่า {this.state.name} จะแชร์ความรู้สึกดีๆ ให้น้องการุ
รับรู้อีกนะ 😁  </Text>

    );
  }
}

Happy.propTypes = {
  steps: PropTypes.object,
};

Happy.defaultProps = {
  steps: undefined,
};

class Relief extends React.Component {
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
      <Text>ฉันดีใจที่คุณสามารถผ่านมันมาได้นะ และ
หวังว่า {this.state.name}จะแชร์ความรู้สึกดีๆ ให้น้องการุ
รับรู้อีกนะ 😁 </Text>

    );
  }
}

Relief.propTypes = {
  steps: PropTypes.object,
};

Relief.defaultProps = {
  steps: undefined,
};

export default class Deep_mind extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: "Talk",
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
  Behavior = () => {
    this.props.navigation.navigate('Behavior');
};
Q9 = () => {
  this.props.navigation.navigate('Q9');
};




    render() {
        return (
          <ChatBot
          handleEnd={this.FirstOpApp}
            steps={[
              {
                  id: '0',
                  component:(<Hello/>),
                  asMessage:true,
                  trigger: 'HowYouFeel',
                },
                {
                  id: 'HowYouFeel',
                  message: 'ตอนนี้คุณรู้สึกอย่างไร?' ,
                  trigger: 'HowYouFeelChoice',
                },
                {
                  id: 'HowYouFeelChoice',
                  options: [
                    {value:'ดี', label: 'ดี😃', trigger: 'FeelGood' },
                    {value:'มีความสุข', label: 'มีความสุข😀', trigger: 'FeelGood' },
                    {value:'โล่งอก', label: 'โล่งอก😅', trigger: 'Feelrelief' },
                    {value:'เหนื่อย', label: 'เหนื่อย😴', trigger: 'Feelsad' },
                    {value:'นอนไม่หลับ', label: 'นอนไม่หลับ😵', trigger: 'HowToSleep' },
                    {value:'ป่วย', label: 'ป่วย🤒', trigger: 'FeelSick' },
                    {value:'เครียด', label: 'เครียด😤', trigger: 'FeelTired' },
                    {value:'ซึมเศร้า', label: 'ซึมเศร้า😞', trigger: 'FeelTired' },
                    {value:'วิตกกังวล', label: 'วิตกกังวล😱', trigger: 'FeelTired' },
                    {value:'โกรธ', label: 'โกรธ😡', trigger: 'FeelAngry' },
                    {value:'เหงา', label: 'เหงา😢', trigger: 'FeelLonely' },
                    {value:'เฉยๆ', label: 'เฉยๆ😐', trigger: 'FeelLonely' },
                    {value:'อื่นๆ', label: 'อื่นๆนอกเหนือจากนี้', trigger: 'FeelLonely' },
                  ],
                },
                /////
                {
                  id: 'Feelrelief',
                  message: 'ว้าว! บอกให้ฉันรู้ได้ไหมว่ามีเกิดขึ้น แล้วทำให้คุณรู้สึก{previousValue}' ,
                  trigger: 'Feelreliefstciker',
                },
                {
                  id: 'Feelreliefstciker',
                  component:(
                    <Text>
                    <Image style={{ width: 90,height: 100,}} source={require('../assets/garoo/Glad.png')}/>
                     {'\n'}
                     {'\n'}
                     {'\n'}
                    </Text>
                  ),
                  asMessage:true,
                  trigger: 'whyYouFeelTypeFeelrelief',
                },
                {
                  id: 'whyYouFeelTypeFeelrelief',
                  user: true,
                  validator: (word) => {
        if (word.includes("ช่วยด้วย")|| word.includes("SOS") || word.includes("Help") || word.includes("ทั้งหมดเป็นความผิดของฉัน")
        || word.includes("ผิดเอง")|| word.includes("ไม่อยากอยู่อีกต่อไป") || word.includes("อยากตาย")
        || word.includes("จะฆ่าตัวตาย") || word.includes("ไม่ไหวแล้ว") || word.includes("อยากเจ็บปวด")
        || word.includes("อยากทำร้ายตัวเอง")  == true) {
          this.props.navigation.navigate('Let_talk');
        }
        return true;
      },
                  trigger: 'WhyYouFeelTypeAnswerFeelrelief',
                },

                {
                  id: 'WhyYouFeelTypeAnswerFeelrelief',
                  component:(<Relief/>),
                  asMessage: true ,
                  trigger: 'ThankMindbot',
                },
                /////////
                {
                  id: 'FeelGood',
                  message: 'ฉันดีใจมาก ที่คุณรู้สึก{previousValue}บอกให้ฉันรู้ได้ไหมว่ามีอะไรเกิดขึ้น แล้วทำให้คุณรู้สึก{previousValue}' ,
                  trigger: 'FeelGoodstciker',
                },
                {
                  id: 'FeelGoodstciker',
                  component:(
                    <Text>
                    <Image style={{ width: 90,height: 100,}} source={require('../assets/garoo/Glad.png')}/>
                     {'\n'}
                     {'\n'}
                     {'\n'}
                    </Text>
                  ),
                  asMessage:true,
                  trigger: 'whyYouFeelType',
                },
                {
                  id: 'whyYouFeelType',
                  user: true,
                  validator: (word) => {
        if (word.includes("ช่วยด้วย")|| word.includes("SOS") || word.includes("Help") || word.includes("ทั้งหมดเป็นความผิดของฉัน")
        || word.includes("ผิดเอง")|| word.includes("ไม่อยากอยู่อีกต่อไป") || word.includes("อยากตาย")
        || word.includes("จะฆ่าตัวตาย") || word.includes("ไม่ไหวแล้ว") || word.includes("อยากเจ็บปวด")
        || word.includes("อยากทำร้ายตัวเอง")  == true) {
          this.props.navigation.navigate('Let_talk');
        }
        return true;
      },
                  trigger: 'WhyYouFeelTypeAnswer',
                },

                {
                  id: 'WhyYouFeelTypeAnswer',
                  component:(<Happy/>),
                  asMessage: true ,
                  trigger: 'ThankMindbot',
                },
                {
                  id: 'ThankMindbot',
                  options: [
                    {value:'ขอบคุณนะ น้องการุ!'  ,label: 'ขอบคุณนะ น้องการุ!', trigger: 'HowWasItNoqestion' },
                    {value:'Thank you Garoo!'  ,label: 'Thank you Garoo!', trigger: 'HowWasItNoqestion' },
                  ],
                },
                {
                  id: 'FeelTired',
                  message: 'คุณต้องการเข้ำรับการประเมินเบื้องต้นก่อนหรือไม' ,
                  trigger: 'ThankMindbot1',
                },
                {
                  id: 'ThankMindbot1',
                  options: [
                    {value:'ต้องการ', label: 'ต้องการ', trigger: 'Q9' },
                    {value:'ไม่ต้องการ', label: 'ไม่ต้องการ', trigger: 'startCBT' },
                  ],
                },
                {
                  id: 'Q9',
                  component: (<View>
                    <Button title="กดปุ่มนี้เพื่อเข้าทำแบบสอบถาม" onPress={this.Q9} />
                  </View>) ,

                },
                {
                  id: 'Feelsad',
                  message: 'ฉันหวังว่าคุณจะมีเวลาพักผ่อนบ้างนะ' ,
                  trigger: 'relex',
                },
                {
                  id: 'relex',
                  options: [
                    {value:'ขอบคุณครับ น้องการุ ', label: 'ขอบคุณครับ Garoo', trigger: 'giftbox' },
                    {value:'ขอบคุณค่ะ น้องการุ ', label: 'ขอบคุณครับ Garoo', trigger: 'giftbox' },
                    {value:'😭', label: '😭', trigger: 'giftbox' },

                  ],
                },
                {
                  id: 'giftbox',
                  message: 'ฉันมีของวิเศษซึ่งจะช่วยผ่อนคลายความเหนื่อยล้าให้คุณได้' ,
                  trigger: 'giftboxsticker',
                },
                {
                  id: 'giftboxsticker',
                  component: (
                    <Text>
                    <Image style={{ width: 90,height: 100,}} source={require('../assets/garoo/Tools.png')}/>
                     {'\n'}
                     {'\n'}
                     {'\n'}
                    </Text>
                  ),
                  asMessage: true,
                  trigger: 'TiredChoice',
                },
                {
                  id: 'TiredChoice',
                  options: [
                    {value:'ผ่อนคลายกล้ามเนื้อ', label: 'ผ่อนคลายกล้ามเนื้อ', trigger: 'RelaxMuscle' },
                    {value:'ดนตรีบำบัด', label: 'ดนตรีบำบัด', trigger: 'TherapyMusic' },
                  ],
                },
                {
                id: 'RelaxMuscle',
                component: (
                  <Image
                  style={{ width: 340,height: 300,}} source={require('../assets/image/relaxmuscle.jpg')}
                  />
                ),

                trigger: 'RelaxMuscleChoice',

              },
                  {
                    id: 'RelaxMuscleChoice',
                    options: [
                      {value:'เข้าใจแล้ว น้องการุ', label: 'เข้าใจแล้ว น้องการุ', trigger: 'HowWasItNoqestion' },
                    ],
                  },
                  {
                    id: 'TherapyMusic',
                    component: (<PlaySound/>),
                    trigger: 'TherapyMusicChoice',
                  },
                  {
                    id: 'TherapyMusicChoice',
                    options: [
                      {value:'เรียบร้อยแล้ว น้องการุ', label: 'เรียบร้อยแล้ว น้องการุ', trigger: 'HowWasItNoqestion' },
                    ],
                  },
                  {
                    id: 'HowToSleep',
                    component: (<Image style={{ width: 400,height: 400,}} source={{uri:'https://www.jeban.com/userfiles/uploads/2013/08/Sleep-01.jpg'} } />  ),
                    trigger: 'HowToSleepChoice',
                  },
                  {
                    id: 'HowToSleepChoice',
                    options: [
                      {value:'ฉันง่วงนอนแล้วล่ะ',  label: 'ฉันง่วงนอนแล้วล่ะ 😴', trigger: 'GoodNight' },
                      {value:'ฉันจะพยายามทำตามคำแนะนำนะ',  label: 'ฉันจะพยายามทำตามคำแนะนำนะ 👌', trigger: 'HowToSleep1' },
                    ],
                  },
                  {
                    id: 'GoodNight',
                    message: 'โอเคจ้า ฝันดีนะ แล้วพบกันใหม่วันพรุ่งนี้' ,
                    trigger: 'GoodNightChoice',

                  },
                  {
                    id: 'GoodNightChoice',
                    options: [
                      {value:'เข้าใจแล้วจ้า น้องการุ',  label: 'เข้าใจแล้วจ้า น้องการุุ', end: true },
                      {value:'ฝันดีนะ น้องการุ',  label: 'ฝันดีนะ น้องการุ', end: true },
                      {value:'Good Night Garoo !',  label: 'Good Night Garoo!', end: true },

                    ],
                  },

                  {
                    id: 'HowToSleep1',
                    message: 'บางทีการคุยกับฉันบนหน้าจออาจจะทำให้คุณหลับยากยิ่งขึ้น ฉันจึงอยากให้คุณหลีกเลี่ยงกิจกรรมอื่นๆ บนหน้าจอของคุณบ้างนะ 😟' ,
                    trigger: 'GoodNightChoice',
                  },
                  {
                    id: 'FeelSick',
                    message: 'ฉันขอให้คุณหายจากอาการป่วยในเร็ววันนะ' ,
                    trigger: 'FeelSickChoice',
                  },

                  {
                    id: 'FeelSickChoice',
                    options: [
                      {value:'ขอบคุณนะ น้องการุ', label: 'ขอบคุณนะ น้องการุ', trigger:'NeedHelp1'},
                      {value:' Thanks Garoo!', label: ' Thanks Garoo!', trigger:'NeedHelp1'},
                      {value:'😷', label: '😷', trigger:'NeedHelp1'},
                    ],
                  },
                  {
                    id: 'NeedHelp1',
                    message: 'คุณต้องการให้น้องการุช่วยอะไรไหม?' ,
                    trigger: 'NeedHelpChoice',
                  },
                  {
                    id: 'NeedHelpChoice',
                    options: [
                      {value:'ฉันแค่อยากเล่าให้ฟังเฉยๆ', label: 'ฉันแค่อยากเล่าให้ฟังเฉยๆ', trigger:'NeedHelp'},
                      {value:'ฉันอยากรู้สึกดีขึ้น',  label: 'ฉันอยากรู้สึกดีขึ้น', trigger:'WantToFeelGood'},
                    ],
                  },
                  {
                    id: 'WantToFeelGood',
                    component: (<Text>เทคนิคที่ทำให้รู้สึกดีขึ้นยามป่วย {'\n'}
                                      1. ทานของอุ่นๆ{'\n'}
                                      2. ทานผักและผลไม้เป็นประจำ โดยเฉพาะผลไม้รสเปรี้ยว เช่น ส้ม สัปปะรด{'\n'}
                                      3. นอนพักผ่อนให้เพียงพอ{'\n'}
                                      4. ปรับอิริยาบถ หรือ ขยับร่างกายทุก 3ชั่วโมง{'\n'}
                                      5. อย่าลืมรับประทานยาให้ตรงเวลา{'\n'}
                                  </Text>),
                    trigger: 'WantToFeelGoodChoice',
                  },
                  {
                    id: 'WantToFeelGoodChoice',
                    options: [
                      {value:'เข้าใจแล้ว น้องการุ', label: 'เข้าใจแล้ว น้องการุ', trigger:'WantToFeelGoodSum'},
                    ],
                  },
                  {
                    id: 'WantToFeelGoodSum',
                    message: 'ฉันหวังว่าเทคนิคเหล่านี้จะช่วยให้คุณรู้สึกดีขึ้นและขอให้คุณหายป่วยแล้วกลับมาแข็งแรงในเร็ววันนะ 💪' ,
                    trigger: 'HowWasItNoqestion',
                  },
                  {
                    id: 'NeedHelp',
                    message: 'คุณสามารถเล่าให้ฉันฟังได้เลยนะ ฉันพร้อมรับฟังคุณทุกเมื่อ' ,
                    trigger: 'tellStory1',
                  },
                  {
                    id: 'tellStory1',
                      user: true,
                      trigger: 'caretellStory',//trigger: 'userName',
                    },

                    {
                      id: 'tellStory2',
                        component:(<CheckSick/>),
                        trigger: 'caretellStory',//trigger: 'userName',
                      },
                    {
                      id: 'caretellStory',
                      options: [
                        {value:'ต้องการ', label: 'ต้องการ', trigger:'startCBT'},
                        {value:'ไม่ต้องการ', label: 'ไม่ต้องการ', trigger:'FeelSick2'},
                      ],
                    },

                    {
                      id: 'FeelSick2',
                      message: 'ฉันขอให้คุณหายป่วย กลับมาแข็งแรงในเร็ววันนะ 💪' ,
                      trigger: 'HowWasItNoqestion',
                    },
                    {
                      id: 'FeelAngry',
                      message: 'ฉันมีของวิเศษ 2 ชิ้นซึ่งช่วยลดอัตราการเต้นของหัวใจคุณ และช่วยให้คุณสงบมากยิ่งขึ้น' ,
                      trigger: 'FeelAngry1',
                    },
                    {
                      id: 'FeelAngry1',
                      component:(
                        <Text>
                        <Image style={{ width: 90,height: 100,}} source={require('../assets/garoo/Tools.png')}/>
                         {'\n'}
                         {'\n'}
                         {'\n'}
                        </Text>

                      ),
                      asMessage:true,
                      trigger: 'FeelAngryChoice',
                    },
                    {
                      id: 'FeelAngryChoice',
                      options: [
                        {value:'ฝึกการหายใจ', label: 'ฝึกการหายใจ', trigger:'BreathPrac'},
                        {value:'นั่งสมาธิ', label: 'นั่งสมาธิ', trigger:'Meditation'},
                      ],
                    },
                    {
                      id: 'Meditation',
                      message: 'ขั้นตอนแรก ฉันอยากให้คุณนั่งบนพื้น หรือนั่งบนเก้าอี้ก็ได้' ,
                      trigger: 'MeditationChoice',
                    },
                    {
                      id: 'Meditation1',
                      message: 'หลังจากนั้นเอามือขวาทับมือซ้ายไว้ตรงบริเวณตัก แบบนี้จ้า' ,
                      trigger: 'samati',
                    },
                    {
                      id: 'samati',
                      component: (<Image style={{ width,height: 300,}} source={{uri:'https://www.amarinbabyandkids.com/app/uploads/2017/02/%E0%B8%99%E0%B8%B1%E0%B9%88%E0%B8%87%E0%B8%AA%E0%B8%A1%E0%B8%B2%E0%B8%98%E0%B8%B4-22-1024x683.jpg'} } />),
                      trigger: 'MeditationChoice1',

                    },
                    {
                      id: 'Meditation2',
                      message: 'หลับตาแล้วทำจิตใจให้สงบประมาณ 10 นาทีนะ ⏱️' ,
                      trigger: 'MeditationChoice2',
                    },
                    {
                      id: 'Meditation3',
                      message: 'ฉันหวังว่าของวิเศษของฉันจะช่วยให้จิตใจของคุณสงบมากขึ้นนะ' ,
                      trigger: 'Meditation4',
                    },
                    {
                      id: 'Meditation4',
                      message: 'ฉันอยากให้คุณรู้ว่าบางทีอารมณ์โกรธอาจจะทำให้คุณขาดสติจนทำให้ปัญหาบานปลาย สิ่งที่ฉันทำได้คือการช่วยให้คุณสงบ และมีสติที่เพียบพร้อมต่อการแก้ไขปัญหาที่คุณเผชิญอยู่ตรงหน้า' ,
                      trigger: 'Meditation5',
                    },
                    {
                      id: 'Meditation5',
                      message: 'ฉันขอให้คุณผ่านพ้นปัญหาเหล่านี้ไปได้ด้วยดี อย่างที่ฉันพูดทุกครั้งฉันจะอยู่เคียงข้างคุณเสมอ 👌' ,
                      trigger: 'Meditation5Choice',
                    },
                    {
                      id: 'Meditation5Choice',
                      options: [
                        {value:'ขอบใจจ้า น้องการุ',  label: 'ขอบใจจ้า น้องการุ', trigger:'HowWasItNoqestion'},
                        {value:'Thanks Garoo!ุ', label: 'Thanks Garoo!', trigger:'HowWasItNoqestion'},
                        {value:'😡', label: '😡', trigger:'HowWasItNoqestion'},
                      ],
                    },
                    {
                      id: 'MeditationChoice',
                      options: [
                        {value:'ขั้นตอนต่อไป',  label: 'ขั้นตอนต่อไป', trigger:'Meditation1'},
                      ],
                    },
                    {
                      id: 'MeditationChoice1',
                      options: [
                        {value:'ขั้นตอนต่อไป', label: 'ขั้นตอนต่อไป', trigger:'Meditation2'},
                      ],
                    },
                    {
                      id: 'MeditationChoice2',
                      options: [
                        {value:'เริ่มเลย น้องการุ', label: 'เริ่มเลย น้องการุ', trigger:'Meditation3'},
                      ],
                    },


                    {
                      id: 'BreathPrac',
                      message: 'นำเข้าสู่ Feature ฝึกการหายใจของ App Mindmood' ,
                      trigger: 'BreathPracChoice',
                    },
                    {
                      id: 'BreathPracChoice',
                      options: [
                        {value:'ส่วนนี้ต้องเอาข้อมูลมาจากแอพหลัก แต่ตอนนี้ยังไม่มีข้อมูลจึงตัดจบก่อน', label: 'ส่วนนี้ต้องเอาข้อมูลมาจากแอพหลัก แต่ตอนนี้ยังไม่มีข้อมูลจึงตัดจบก่อน', end:true},
                      ],
                    },
                    {
                      id: 'FeelLonely',
                      message: 'ฉันเข้าใจคุณนะ ฉันรู้ว่ามันไม่ใช่ความรู้สึกที่ดีเลย' ,
                      trigger: 'FeelLonelyChoice',
                    },
                    {
                      id: 'FeelLonelyChoice',
                      options: [
                        {value:'ขอบใจจ้า น้องการุ', label: 'ขอบใจจ้า น้องการ', trigger:'FeelLonely2'},
                        {value:'Thanks Garoo!', label: 'Thanks Garoo!ุ', trigger:'FeelLonely2'},
                        {value:'😢', label: '😢', trigger:'FeelLonely2'},
                      ]
                    },
                    {
                      id: 'FeelLonely2',
                      message: 'แต่ในขณะเดียวกัน ฉันก็พบความพิเศษบางอย่างที่อยู่ในตัวคุณ 😊' ,
                      trigger: 'FeelLonelyChoice2',
                    },
                    {
                      id: 'FeelLonelyChoice2',
                      options: [
                        {value:'คืออะไรเหรอ?', label: 'คืออะไรเหรอ?', trigger:'FeelLonely3'},
                      ],
                    },
                    {
                      id: 'FeelLonely3',
                      message: 'ก็คือ ให้คุณค่ากับความสัมพันธ์ต่อเพื่อนและคนที่คุณรัก และนั่นแหละคือสิ่งที่ฉันสัมผัสได้จากตัวคุณ' ,
                      trigger: 'FeelLonelyChoice3',
                    },
                    {
                      id: 'FeelLonelyChoice3',
                      options: [
                        {value:'emoji_99', label: '😳', trigger:'FeelLonely4'},
                        {value:'emoji_98', label: '😢', trigger:'FeelLonely4'},
                      ],
                    },
                    {
                      id: 'FeelLonely4',
                      message: 'คุณต้องการให้ฉันช่วยอะไรคุณไหม?' ,
                      trigger: 'FeelLonelyChoice4',
                    },
                    {
                      id: 'FeelLonelyChoice4',
                      options: [
                        {value:'ฉันอยากรู้สึกดีขึ้น', label: 'ฉันอยากรู้สึกดีขึ้น', trigger:'Behavior'},
                        {value:'ฉันแค่อยากเล่าให้ฟังเฉยๆ', label: 'ฉันแค่อยากเล่าให้ฟังเฉยๆ', trigger:'FeelLonely5'},
                      ],
                    },
                    {
                      id: 'FeelLonely5',
                      message: 'คุณสามารถเล่าให้ฉันฟังได้เลยจ้า ✏️' ,
                      trigger: 'FeelLonelyType',
                    },
                    {
                      id: 'FeelLonelyType',
                        user: true,
                        trigger: 'FeelLonelySum',
                      },
                      {
                        id: 'FeelLonelySum',
                        message: 'ฉันหวังว่าเมื่อถึงเวลาจะมีใครสักคนที่เห็นคุณค่าในตัวคุณ เหมือนที่ฉันเห็นนะ' ,
                        trigger: 'HowWasItNoqestion',
                      },
                      {
                        id: 'HowWasItNoqestion',
                        message: 'คุณรู้สึกยังไงที่ได้คุยกับฉันในวันนี้' ,
                        trigger: 'HowWasItChoiceNoqestion',
                      },
                      {
                        id: 'HowWasItChoiceNoqestion',
                          options: [
                            {value:'emoji_4',  label: '👍', trigger: 'feedbackreplyNoqestion' },
                            {value:'emoji_5',  label: '👎', trigger: 'feedbackreplyNoqestion' },
                          ],
                        },
                        {
                          id: 'feedbackreplyNoqestion',
                          message: 'ขอบคุณสำหรับการติชม ฉันมีความสุขทุกครั้งที่ได้เป็นเพื่อนดูแลใจของคุณ 😊' ,
                          trigger: 'feedbackemojiNoqestion',
                        },
                        {
                          id: 'feedbackemojiNoqestion',
                            options: [
                              {value:'emoji_1',  label: '❤️', trigger: 'seeuNoqestion' },
                            ],
                          },
                            {
                              id: 'seeuNoqestion',
                              message: 'แล้วพบกันอีกนะ  😊' ,
                              end: true,
                            },
                            {
                              id: 'startCBT',
                              component: (<Button title="startCBT" onPress={this.Thing}/>),

                            },
                            {
                              id: 'Behavior',
                              component: (<Button title="มาทำกิจกรรมกันเถอะ" onPress={this.Behavior}/>),

                            },


            ]}
        />
        );
    }
}
