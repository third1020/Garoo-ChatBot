import React from 'react';
import { StyleSheet, Text, View ,ActivityIndicator, AsyncStorage,Alert,Image} from 'react-native';
import ChatBot from 'react-native-chatbot';
import HomeScreen from './HomeScreen';
import SelfHarm_Normal from '../screens/SelfHarm_Normal';
import SelfHarm_NoNeed from '../screens/SelfHarm_NoNeed';
import SelfHarm_Danger from '../screens/SelfHarm_Danger';
import Checkword from '../AbilityBot/Checkword';
import CheckwordMood from '../AbilityBot/CheckwordMood';
import CheckFeel from '../AbilityBot/CheckFeel';
import CheckSick from '../AbilityBot/CheckSick';
import PlaySound from '../AbilityBot/PlaySound';
import { Button } from 'react-native-elements';
import { Icon } from 'react-native-elements'


import {
    createSwitchNavigator,
    createStackNavigator,
    createAppContainer,
} from 'react-navigation';

import PropTypes from 'prop-types';

class ShowResult extends React.Component {
    static navigationOptions = {
        title: 'ShowResult',
    };
    SelfHarm_Normal = () => {
        this.props.navigation.navigate('SelfHarm_Normal');
    };
    SelfHarm_NoNeed = () => {
        this.props.navigation.navigate('SelfHarm_NoNeed');
    };
    SelfHarm_Danger = () => {
        this.props.navigation.navigate('SelfHarm_Danger');
    };


    Score0() {
      this.setState({ trigger: true }, () => {

        this.props.triggerNextStep({value:"Score0",trigger:'Score0'});
      });
    }

    Score7_18() {
      this.setState({ trigger: true }, () => {

        this.props.triggerNextStep({value:"Score7_18",trigger:'Score7_18'});
      });
    }

    Score18Upper() {
      this.setState({ trigger: true }, () => {

        this.props.triggerNextStep({value:"Score18Upper",trigger:'Score18Upper'});
      });
    }



    constructor(props) {
    super(props);





    this.state = {

      selfHarmQuestionChoice: '',
      selfHarmQuestionChoice2: '',
      selfHarmQuestionChoice3: '',
      selfHarmQuestionChoice3_1: '',
      selfHarmQuestionChoice3_2:'',
      selfHarmQuestionChoice4: '',
      selfHarmQuestionChoice5: '',
      selfHarmQuestionChoice6: '',



    };
  }

  componentWillMount() {
    const { steps } = this.props;


    const { selfHarmQuestionChoice,selfHarmQuestionChoice2,
            selfHarmQuestionChoice3,selfHarmQuestionChoice3_1,selfHarmQuestionChoice3_2,
            selfHarmQuestionChoice4,selfHarmQuestionChoice5,selfHarmQuestionChoice6
            } = steps;

    this.setState({ selfHarmQuestionChoice,selfHarmQuestionChoice2,
            selfHarmQuestionChoice3,selfHarmQuestionChoice3_1,selfHarmQuestionChoice3_2,
            selfHarmQuestionChoice4,selfHarmQuestionChoice5,selfHarmQuestionChoice6
            });


                      score = selfHarmQuestionChoice.value+selfHarmQuestionChoice2.value+selfHarmQuestionChoice3.value
                              +selfHarmQuestionChoice4.value+selfHarmQuestionChoice5.value+selfHarmQuestionChoice3_1.value
                              +selfHarmQuestionChoice3_2.value+selfHarmQuestionChoice6.value;





                    if (score >= 0 && score < 7 ) {word =" จากการประเมินเบื้องต้นเราพบว่าคุณเป็นปกติ ไม่มีความเสี่ยงในภาวะซึมเศร้า"
                                                   ,advice="ควรดูแลสุขภาพจิตใจให้ดีแบบนี้ไปตลอด"


                                                     }//score =1-2

                    else if (score > 6 && score < 13 ) {word =" จากการประเมินเบื้องต้นเราพบว่าคุณมีภาวะ ซึมเศร้าเล็กน้อย"
                                                       ,advice="ควรได้รับกำรปรึกษาหรือการบำบัดรักษาทางจิตเวช"
                                                       // ,help="ฉันต้องกำรควำมช่วยเหลือ",
                                                       // nohelp="ฉันยังไม่ต้องกำรควำมช่วยเหลือ"
                                                     }//score =3-4

                    else if (score > 12 && score < 19) {word =" จากการประเมินเบื้องต้นเราพบว่าคุณมีสภาวะซึมเศร้าสูง"
                                                        ,advice="ต้องได้รับการปรึกษาและการบำบัดรักษาทางจิตเวช"
                                                                                        // ,help="ฉันต้องกำรควำมช่วยเหลือ",
                                                                                        // nohelp="ฉันยังไม่ต้องกำรควำมช่วยเหลือ"
                                                       }//score =5-9

                   else if (score >18 && score < 28) {word =" จากการประเมินเบื้องต้นเราพบว่าคุณมีภาวะซึมรุนแรง"
                                                      ,advice="ต้องได้รับการบำบัดรักษาทางจิตเวชอย่างเร่งด่วน"
                                                                                        // ,help="ฉันต้องกำรควำมช่วยเหลืออย่างเร่งด่วน",
                                                                                        // nohelp="ฉันต้องกำรควำมช่วยเหลือ"
                                                      }//score =10-16

                    else { word= "Error" }

  }

  render() {

    const { selfHarmQuestionChoice,selfHarmQuestionChoice2,
            selfHarmQuestionChoice3,selfHarmQuestionChoice3_1,
            selfHarmQuestionChoice4,selfHarmQuestionChoice5,selfHarmQuestionChoice6
            } = this.state;

   if(score >= 0 && score < 7){
     return (
           <View>
           <Text> คะแนนที่คุณได้คือ {score}{word} {'\n'}
                  คำแนะนำ :{advice}</Text>
                  <Button title="ดำเนินการต่อ" onPress={() =>this.Score0()} />

           </View>
   );
 } else if(score > 6 && score < 13){
   return (
         <View>
         <Text> คะแนนที่คุณได้คือ {score}{word} {'\n'}
                คำแนะนำ :{advice}</Text>
                <Button title="ดำเนินการต่อ" onPress={() =>this.Score7_18()} />

         </View>
 );

}else if(score > 12 && score < 19){
   return (
         <View>
         <Text> คะแนนที่คุณได้คือ {score}{word} {'\n'}
                คำแนะนำ :{advice}</Text>
                <Button title="ดำเนินการต่อ" onPress={() =>this.Score7_18()} />

         </View>
 );

 }else if(score > 18 && score < 28){
   return (
         <View>
         <Text> คะแนนที่คุณได้คือ {score}{word} {'\n'}
                คำแนะนำ :{advice}</Text>
                <Button title="ดำเนินการต่อ" onPress={() =>this.Score18Upper()} />

         </View>
 );

}else{
  return(
        <View>
        <Text> Error</Text>

        </View>
);
}

  }
}


ShowResult.propTypes = {
  steps: PropTypes.object,
};

ShowResult.defaultProps = {
  steps: undefined,
};

class Q9 extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: "9Q",
      headerRight: (
        <Icon
raised
name='home'
color='#00aaff'
onPress={() => navigation.navigate('FirstOpApp')} />
                   )

    };
  };


  SelfHarm_Normal = () => {
      this.props.navigation.navigate('SelfHarm_Normal');
  };
  SelfHarm_NoNeed = () => {
      this.props.navigation.navigate('SelfHarm_NoNeed');
  };
  SelfHarm_Danger = () => {
      this.props.navigation.navigate('SelfHarm_Danger');
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




  constructor(props) {
  super(props);

}

  render() {

    return (

       <ChatBot
              handleEnd={this.HomeScreen}
              steps={[
                {
                  id: 'StartQ9',
                  message: 'โอวเคจ้า งั้นมาเริ่มกันเลย',
                  trigger: 'StartQ9sticker',
                },

                {
                  id: 'StartQ9sticker',
                  component: (
                    <Text>
                    <Image style={{ width: 90,height: 100,}} source={require('../assets/garoo/Diagnose.png')}/>
                    {'\n'}
                    {'\n'}
                    {'\n'}
                    </Text>
                  ),
                  asMessage: true,
                  trigger: 'selfHarmQuestion1',
                },

                {
                  id: 'selfHarmQuestion1',
                  message: 'ในช่วง 2 สัปดาห์ที่ผ่านมาจนถึงวันนี้ คุณรู้สึกเบื่อหน่ายไม่สนใจทำอะไร แม้แต่สิ่งที่เคยชอบทำเป็นประจำบ้างหรือไม่?',
                  trigger: 'selfHarmQuestionChoice',
                },
                {
                  id: 'selfHarmQuestion2',
                  message: 'ในช่วง 2 สัปดาห์ที่ผ่านมาจนถึงวันนี้ คุณรู้สึกเศร้า ท้อแท้ใจไม่เป็นสุขใจ บ้างหรือไม่?',
                  trigger: 'selfHarmQuestionChoice2',
                },
                {
                  id: 'selfHarmQuestion3',
                  message: 'ในช่วง 2 สัปดาห์ที่ผ่านมาจนถึงวันนี้ คุณนอนไม่หลับ หลับยาก มีอาการหลับๆ ตื่นๆ หรือนอนมากกว่าปกติ บ้างหรือไม่?',
                  trigger: 'selfHarmQuestionChoice3',
                },
                {
                  id: 'selfHarmQuestion3_1',
                  message: 'ในช่วง 2 สัปดาห์ที่ผ่านมาจนถึงวันนี้ คุณรู้สึกเหนื่อยง่าย ไม่ค่อยมีเรี่ยวแรง บ้างหรือไม่?',
                  trigger: 'selfHarmQuestionChoice3_1',
                },
                {
                  id: 'selfHarmQuestion3_2',
                  message: 'ในช่วง 2 สัปดาห์ที่ผ่านมาจนถึงวันนี้ คุณมีอาการเบื่ออาหาร หรือ กินจุมากกว่าปกติ บ้างหรือไม่?',
                  trigger: 'selfHarmQuestionChoice3_2',
                },

                {
                  id: 'selfHarmQuestion4',
                  message: 'ในช่วง 2 สัปดาห์ที่ผ่านมาจนถึงวันนี้คุณหลงลืมง่ายไม่มีสมาธิบ้างหรือไม่?',
                  trigger: 'selfHarmQuestionChoice4',
                },
                {
                  id: 'selfHarmQuestion5',
                  message: 'ในช่วง 2 สัปดาห์ที่ผ่านมาจนถึงวันนี้ คุณเชื่องช้ากว่าปกติ หรือ กระสับกระส่ายมากกว่าปกติ บ้างหรือไม่?',
                  trigger: 'selfHarmQuestionChoice5',
                },
                {
                  id: 'selfHarmQuestion6',
                  message: 'ในช่วง 2 สัปดาห์ที่ผ่านมาจนถึงวันนี้ คุณคิดอยากตายคิดทำร้ายตนเอง หรือคิดว่าถ้าตายไปคงจะดีบ้างหรือไม่?',
                  trigger: 'selfHarmQuestionChoice6',
                },


                {
                id: 'selfHarmQuestionChoice',
                  options: [
                    { value:0, label: 'ไม่เลย', trigger: 'selfHarmQuestion2' },
                    { value:1, label: 'เป็นบางวัน (1-7 วัน)', trigger: 'selfHarmQuestion2' },
                    { value:2, label: 'เป็นบ่อยๆ (มากกว่า7วัน)', trigger: 'selfHarmQuestion2' },
                    { value:3, label: 'เป็นแทบทุกวัน', trigger: 'selfHarmQuestion2' },
                  ],
                },
                {
                  id: 'selfHarmQuestionChoice2',
                    options: [
                      { value:0, label: 'ไม่เลย', trigger: 'selfHarmQuestion3' },
                      { value:1, label: 'เป็นบางวัน (1-7 วัน)', trigger: 'selfHarmQuestion3' },
                      { value:2, label: 'เป็นบ่อยๆ (มากกว่า7วัน)', trigger: 'selfHarmQuestion3' },
                      { value:3, label: 'เป็นแทบทุกวัน', trigger: 'selfHarmQuestion3' },
                    ],
                  },
                  {
                    id: 'selfHarmQuestionChoice3',
                      options: [
                        { value:0, label: 'ไม่เลย', trigger: 'selfHarmQuestion3_1' },
                        { value:1, label: 'เป็นบางวัน (1-7 วัน)', trigger: 'selfHarmQuestion3_1' },
                        { value:2, label: 'เป็นบ่อยๆ (มากกว่า7วัน)', trigger: 'selfHarmQuestion3_1' },
                        { value:3, label: 'เป็นแทบทุกวัน', trigger: 'selfHarmQuestion3_1' },
                      ],
                    },


                    {
                      id: 'selfHarmQuestionChoice3_1',
                        options: [
                          { value:0, label: 'ไม่เลย', trigger: 'selfHarmQuestion3_2' },
                          { value:1, label: 'เป็นบางวัน (1-7 วัน)', trigger: 'selfHarmQuestion3_2' },
                          { value:2, label: 'เป็นบ่อยๆ (มากกว่า7วัน)', trigger: 'selfHarmQuestion3_2' },
                          { value:3, label: 'เป็นแทบทุกวัน', trigger: 'selfHarmQuestion3_2' },
                        ],
                      },
                      {
                        id: 'selfHarmQuestionChoice3_2',
                          options: [
                            { value:0, label: 'ไม่เลย', trigger: 'selfHarmQuestion4' },
                            { value:1, label: 'เป็นบางวัน (1-7 วัน)', trigger: 'selfHarmQuestion4' },
                            { value:2, label: 'เป็นบ่อยๆ (มากกว่า7วัน)', trigger: 'selfHarmQuestion4' },
                            { value:3, label: 'เป็นแทบทุกวัน', trigger: 'selfHarmQuestion4' },
                          ],
                        },

                    {
                      id: 'selfHarmQuestionChoice4',
                        options: [
                          { value:0, label: 'ไม่เลย', trigger: 'selfHarmQuestion5' },
                          { value:1, label: 'เป็นบางวัน (1-7 วัน)', trigger: 'selfHarmQuestion5' },
                          { value:2, label: 'เป็นบ่อยๆ (มากกว่า7วัน)', trigger: 'selfHarmQuestion5' },
                          { value:3, label: 'เป็นแทบทุกวัน', trigger: 'selfHarmQuestion5' },
                        ],
                      },

                      {
                        id: 'selfHarmQuestionChoice5',
                          options: [
                            { value:0, label: 'ไม่เลย', trigger: 'selfHarmQuestion6' },
                            { value:1, label: 'เป็นบางวัน (1-7 วัน)', trigger: 'selfHarmQuestion6' },
                            { value:2, label: 'เป็นบ่อยๆ (มากกว่า7วัน)', trigger: 'selfHarmQuestion6' },
                            { value:3, label: 'เป็นแทบทุกวัน', trigger: 'selfHarmQuestion6' },
                          ],
                        },
                        {
                          id: 'selfHarmQuestionChoice6',
                            options: [
                              { value:0, label: 'ไม่เลย', trigger: 'result' },
                              { value:1, label: 'เป็นบางวัน (1-7 วัน)', trigger: 'result' },
                              { value:2, label: 'เป็นบ่อยๆ (มากกว่า7วัน)', trigger: 'result' },
                              { value:3, label: 'เป็นแทบทุกวัน', trigger: 'result' },
                            ],
                          },

                              {
                                id: 'result',
                              component: (<ShowResult />),
                              waitAction: true,

                              },

                              {
                                id: 'Choice',
                                  options: [
                                    { value:"ฉันต้องการความช่วยเหลือ", label: 'ฉันต้องการความช่วยเหลือ', trigger: 'need_help' },
                                    { value:"ฉันยังไม่ต้องการความช่วยเหลือ", label: 'ฉันยังไม่ต้องการความช่วยเหลือ', end:true },

                                  ],
                                },
                                {
                                  id: 'need_help',
                                component: (<Button title="กดปุ่มนี้เพื่อรับความช่วยเหลือ" onPress={this.SelfHarm_Normal}/>),

                                },

                                {
                                  id: 'Score0',
                                component: (<Button title="กดปุ่มนี้เพื่อกลับหน้าหลัก" onPress={this.FirstOpApp}/>),

                                },

                                {
                                  id: 'Score7_18',
                                component: (<Button title="กดปุ่มนี้เพื่อรับการบัดบำรักษา" onPress={this.Thing}/>),

                                },

                                {
                                  id: 'Score18Upper',
                                component: (<Button title="กดปุ่มนี้เพื่อรับการบำบัดรักษาอย่างเร่งด่วน" onPress={this.Behavior}/>),

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

export default Q9;





//
//
