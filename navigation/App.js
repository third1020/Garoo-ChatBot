import React from 'react';
import { StyleSheet, Text, View ,ActivityIndicator, AsyncStorage,Alert,Image} from 'react-native';
import ChatBot from 'react-native-chatbot';
import HomeScreen from './HomeScreen';
import FirstOpApp from './FirstOpApp';
import Q9 from './Q9';
import SelfHarm_Normal from '../screens/SelfHarm_Normal';
import SelfHarm_NoNeed from '../screens/SelfHarm_NoNeed';
import SelfHarm_Danger from '../screens/SelfHarm_Danger';
import Checkword from '../AbilityBot/Checkword';
import CheckwordMood from '../AbilityBot/CheckwordMood';
import CheckFeel from '../AbilityBot/CheckFeel';
import CheckSick from '../AbilityBot/CheckSick';
import PlaySound from '../AbilityBot/PlaySound';
import { Button } from 'react-native-elements';


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



    constructor(props) {
    super(props);





    this.state = {
      askName: '',

      selfHarmQuestionChoice: '',
      selfHarmQuestionChoice2: '',
      selfHarmQuestionChoice3: '',
      selfHarmQuestionChoice3_1: '',
      selfHarmQuestionChoice4: '',
      selfHarmQuestionChoice5: '',
      selfHarmQuestionChoice6: '',
      selfHarmQuestionChoice7: '',
      selfHarmQuestionChoice8: '',


    };
  }

  componentWillMount() {
    const { steps } = this.props;


    const { askName,selfHarmQuestionChoice,selfHarmQuestionChoice2,
            selfHarmQuestionChoice3,selfHarmQuestionChoice3_1,
            selfHarmQuestionChoice4,selfHarmQuestionChoice5,selfHarmQuestionChoice6,
            selfHarmQuestionChoice7,selfHarmQuestionChoice8} = steps;

    this.setState({ askName,selfHarmQuestionChoice,selfHarmQuestionChoice2,
            selfHarmQuestionChoice3,selfHarmQuestionChoice3_1,
            selfHarmQuestionChoice4,selfHarmQuestionChoice5,selfHarmQuestionChoice6,
            selfHarmQuestionChoice7,selfHarmQuestionChoice8});


                      score = selfHarmQuestionChoice.value+selfHarmQuestionChoice2.value+selfHarmQuestionChoice3.value
                              +selfHarmQuestionChoice4.value+selfHarmQuestionChoice5.value+selfHarmQuestionChoice3_1.value
                              +selfHarmQuestionChoice6.value+selfHarmQuestionChoice7.value+selfHarmQuestionChoice8.value;



                    if (score == 0) {word = " จากการประเมินเบื้องต้นเราพบว่าคุณไม่มีความเสี่ยงในการทำร้ายตนเองและการฆ่าตัวตาย"

                                     // ,help="ขอบคุณนะ Mindbot",
                                     // nohelp="แล้วเจอกันอีกนะ Mindbot",
                                     // patch="{() => this.props.navigation.navigate('SCORE5T8')}"


                                   } //score =0
                    else if (score > 0 && score < 2 ) {word =" จากการประเมินเบื้องต้นเราพบว่าคุณมีความเสี่ยงในการทำร้ายตัวเองในระดับปานกลาง และความเสี่ยงในการฆ่าตัวตายในระดับน้อย"
                                                       // ,help="ขอบคุณนะ Mindbot",
                                                       // nohelp="แล้วเจอกันอีกนะ Mindbot"
                                                     }//score =1-2

                    else if (score >= 2 && score < 5 ) {word =" จากการประเมินเบื้องต้นเราพบว่าคุณมีความเสี่ยงในการทำร้ายตัวเองในระดับสูง และความเสี่ยงในการฆ่าตัวตายในระดับน้อย"
                                                       // ,help="ฉันต้องกำรควำมช่วยเหลือ",
                                                       // nohelp="ฉันยังไม่ต้องกำรควำมช่วยเหลือ"
                                                     }//score =3-4

                    else if (score >= 5 && score < 9) {word =" จากการประเมินเบื้องต้นเราพบว่าึถณมีความเสี่ยงในการทำร้ายตัวเองในระดับรุนแรง และความเสี่ยงในการฆ่าตัวตายในระดับน้อย"
                                                       // ,help="ฉันต้องกำรควำมช่วยเหลือ",
                                                       // nohelp="ฉันยังไม่ต้องกำรควำมช่วยเหลือ"
                                                     }//score =5-9

                    else if (score >= 9 && score < 17) {word =" จากการประเมินเบื้องต้นเราพบว่าคุณมีความเสี่ยงในการทำร้ายตัวเองในระดับรุนแรง และความเสี่ยงในการฆ่าตัวตายในระดับปานกลาง"
                                                       // ,help="ฉันต้องกำรควำมช่วยเหลืออย่างเร่งด่วน",
                                                       // nohelp="ฉันต้องกำรควำมช่วยเหลือ"
                                                     }//score =10-16

                    else if (score >= 17) { word =" จากการประเมินเบื้องต้นเราพบว่าคุณมีความเสี่ยงในการทำร้ายตัวเองในระดับรุนแรง และมีความเสี่ยงในการฆ่าตัวตายในระดับสูง"
                                                       // ,help="ฉันต้องกำรควำมช่วยเหลืออย่างเร่งด่วน",
                                                       // nohelp="ฉันต้องกำรควำมช่วยเหลือ"
                                                     }//score > 16
                    else { word= "Error" }

  }

  render() {
    const { askName,selfHarmQuestionChoice,selfHarmQuestionChoice2,
            selfHarmQuestionChoice3,selfHarmQuestionChoice3_1,
            selfHarmQuestionChoice4,selfHarmQuestionChoice5,selfHarmQuestionChoice6,
            selfHarmQuestionChoice7,selfHarmQuestionChoice8} = this.state;


    return (

            <Text> คะแนนที่คุณได้คือ {score}{word}</Text>
    );
  }
}


ShowResult.propTypes = {
  steps: PropTypes.object,
};

ShowResult.defaultProps = {
  steps: undefined,
};




class App extends React.Component {

  static navigationOptions = {
      title: 'GarooBot',
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
  Q9 = () => {
      this.props.navigation.navigate('Q9');
  };
  FirstOpApp = () => {
      this.props.navigation.navigate('FirstOpApp');
  };



  constructor(props) {
  super(props);

  this.state = {
    askName: '',
    userAnswer: '',

  };

}

  render() {


    return (

       <ChatBot

              handleEnd={this.FirstOpApp}
              steps={[

                {
                  id: '1',
                  message: 'สวัสดีจ้า ฉันชื่อว่า Garoo , แล้วคุณล่ะชื่ออะไร?',
                  trigger: 'askName',
                },
                {
                id: 'askName',
                  user: true,
                  trigger: 'userName',
                },
                {
                  id: 'userName',
                  message: 'ยินดีที่ได้รู้จัก {previousValue}!',
                  trigger: 'introduce' ,
                },

                {
                  id: 'introduce',
                  message: 'ฉันคือหุ่นยนต์ตัวน้อยๆ ที่ถูกสร้างขึ้นมาเพื่อปฎิบัติภารกิจอันยิ่งใหญ่ที่ได้รับมอบหมายมาจากผู้สร้าง',
                  trigger: 'introduceChoice',
                  },
                  {
                    id: 'introduceChoice',
                    options: [
                      { value:'ภารกิจที่ว่านั้นคืออะไรเหรอ?', label: 'ภารกิจที่ว่านั้นคืออะไรเหรอ?', trigger: '2' },

                    ]
                  },
                  {
                  id: '2',
                  message: 'นั่นก็คือไตหาหัวจาม "ตามหาหัวใจ" คุณยังไงล่ะ เมื่อตามหาเจอแล้ว น้องการุ สัญญาว่าจะดูแลใจคุณอย่างดี ❤️',
                  trigger: '3',
                },
                {
                  id: '3',
                  message: 'ตัวเลือกที่มีให้คุณเลือกในแต่ละครั้ง คือวิธีหลักในการสื่อสารกับ น้องการุ นะ เว้นแต่เมื่อฉันจะขอให้คุณเขียน ✏️',
                  trigger: '4',
                },
                {
                  id: '4',
                  message: 'ยิ่งคุณคุยกับฉันมากเท่าไหร่ ก็จะยิ่งทำให้ฉันรู้จักและเข้าใจอารมณ์ของคุณได้มากขึ้น',
                  trigger: '5',
                },
                {
                  id: '5',
                  message: 'นอกจากนี้ข้อมูลต่างๆที่คุณได้พูดคุยกับฉันจะถูกเก็บเป็นความลับ ระหว่างเราเท่านั้นนะ 🤫 ซึ่งคุณสามารถลบประวัติการสนทนาของเราได้ทุกเมื่อ ในตัวเลือก',
                  trigger: '6',
                },
                {
                  id: '6',
                  message: 'ในกรณีที่คุณต้องการความช่วยเหลือฉุกเฉินสามารถเลือก "ช่วยด้วย" หรือ "ต้องการความช่วยเหลือ" ได้ตลอดเวลาเลยนะ',
                  trigger: 'understand',
                },
                {
                  id: 'understand',
                  options: [
                    { value:'รับทราบ', label: 'รับทราบ', trigger: 'start' },
                  ],
                },
                {
                  id: 'start',
                  message: 'โอเคจ้า งั้นเรามาเริ่มเปิดใจคุยกันเลยดีกว่า',
                  trigger: 'heart',
                },
                {
                  id: 'heart',
                  options: [
                    { value:'emoji_1', label: '❤️', trigger: 'doing' },
                  ],
                },
                {
                  id: 'doing',
                  message: 'ตอนนี้คุณ กำลังทำอะไรอยู่(นอกจากกำลังคุยกับฉัน)',
                  trigger: 'userAnswer',
                },
                {
                  id: 'userAnswer',
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
                  trigger: 'mood',

                },

                {
                  id: 'mood',
                  message: 'แล้วอารมณ์ของคุณตอนนี้เป็นอย่างไร',
                  trigger: 'moodChoice',
                },
                {
                  id: 'moodChoice',
                  options: [
                    {value:'ดีมาก', label: 'ดีมาก', trigger: 'veryGood' },
                    {value:'ดี', label: 'ดี', trigger: 'Good' },
                    {value:'เฉยๆ', label: 'เฉยๆ', trigger: 'notBothered' },
                    {value:'ไม่ค่อยดี', label: 'ไม่ค่อยดี', trigger: 'quiteBad' },
                    {value:'แย่มาก', label: 'แย่มาก', trigger: 'bad' },
                  ],
                },
                {
                  id: 'veryGood',
                  message: 'ว้าว! ฉันอยากให้คุณแชร์ให้ฉันรู้หน่อยว่า ทำไมตอนนี้คุณถึงรู้สึกดี',
                  trigger: 'shareMood',
                },
                {
                  id: 'Good',
                  message: 'ว้าว! ฉันอยากให้คุณแชร์ให้ฉันรู้หน่อยว่า ทำไมตอนนี้คุณถึงรู้สึกดี',
                  trigger: 'shareMood',
                },
                {
                  id: 'notBothered',
                  message: 'งั้นเหรอ ฉันอยากให้คุณแชร์ให้ฉันรู้หน่อยว่าทำไม ตอนนี้คุณถึงรู้สึกเฉยๆ',
                  trigger: 'shareMood',
                },
                {
                  id: 'quiteBad',
                  message: 'ฉันพร้อมที่จะอยู่เคียงข้างเธอเสมอนะ! แชร์ให้ฉันรู้หน่อยว่าทำไมตอนนี้คุณถึงรู้สึกแย่ ✏️',
                  trigger: 'shareMood',
                },
                {
                  id: 'bad',
                  message: 'ฉันพร้อมที่จะอยู่เคียงข้างเธอเสมอนะ! แชร์ให้ฉันรู้หน่อยว่าทำไมตอนนี้คุณถึงรู้สึกแย่ ✏️',
                  trigger: 'shareMood',
                },
                {
                  id: 'shareMood',
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
                  trigger: 'HowYouFeel',
                },



                {
                  id: 'selfHarmQuestion1',
                  message: 'ในเดือนที่ผ่านมาจนถึงวันนี้ คุณได้คิดว่าอยากตายหรือคิดว่าตายไปจะดีกว่าบ้างหรือไม่?',
                  trigger: 'selfHarmQuestionChoice',
                },
                {
                  id: 'selfHarmQuestion2',
                  message: 'ในเดือนที่ผ่านมาจนถึงวันนี้ คุณได้คิดว่าอยากทำร้ายตัวเองหรือทำให้ตัวเองบาดเจ็บบ้างหรือไม่?',
                  trigger: 'selfHarmQuestionChoice2',
                },
                {
                  id: 'selfHarmQuestion3',
                  message: 'ในเดือนที่ผ่านมาจนถึงวันนี้ คุณได้คิดเกี่ยวกับการฆ่าตัวตายบ้างหรือไม่?',
                  trigger: 'selfHarmQuestionChoice3',
                },
                {
                  id: 'selfHarmQuestion3_1',
                  message: 'คุณสามารถควมคุมความอยากฆ่าตัวตายที่คุณคิดอยู่ได้หรือไม่?',
                  trigger: 'selfHarmQuestionChoice3_1',
                },

                {
                  id: 'selfHarmQuestion4',
                  message: 'ในเดือนที่ผ่านมาจนถึงวันนี้ คุณได้มีแผนการที่จะฆ่าตัวตายบ้างหรือไม่?',
                  trigger: 'selfHarmQuestionChoice4',
                },
                {
                  id: 'selfHarmQuestion5',
                  message: 'ในเดือนที่ผ่านมาจนถึงวันนี้ คุณได้เตรียมการที่จะทำร้ายตัวเอง หรือเตรียมการฆ่าตัวตายโดยตั้งใจว่าจะให้ตัวเองตายบ้างหรือไม่?',
                  trigger: 'selfHarmQuestionChoice5',
                },
                {
                  id: 'selfHarmQuestion6',
                  message: 'ในเดือนที่ผ่านมาจนถึงวันนี้ คุณได้ทำให้ตัวเองบาดเจ็บแต่ไม่ได้ตั้งใจให้ตัวเองตายบ้างหรือไม่?',
                  trigger: 'selfHarmQuestionChoice6',
                },
                {
                  id: 'selfHarmQuestion7',
                  message: 'ในเดือนที่ผ่านมาจนถึงวันนี้ คุณได้พยายามฆ่าตัวตาย โดยคาดหวังหรือตั้งใจจะให้ตัวเองตายบ้างหรือไม่?',
                  trigger: 'selfHarmQuestionChoice7',
                },
                {
                  id: 'selfHarmQuestion8',
                  message: 'ในตลอดชีวิตที่ผ่านมา คุณเคยพยายามฆ่าตัวตายบ้างหรือไม่?',
                  trigger: 'selfHarmQuestionChoice8',
                },
                {
                id: 'selfHarmQuestionChoice',
                  options: [
                    { value:1, label: 'ใช่', trigger: 'selfHarmQuestion2' },
                    { value:0, label: 'ไม่ใช่', trigger: 'selfHarmQuestion2' },
                  ],
                },
                {
                  id: 'selfHarmQuestionChoice2',
                    options: [
                      { value:2, label: 'ใช่', trigger: 'selfHarmQuestion3' },
                      { value:0, label: 'ไม่ใช่', trigger: 'selfHarmQuestion3' },
                    ],
                  },
                  {
                    id: 'selfHarmQuestionChoice3',
                      options: [
                        { value:6, label: 'ใช่', trigger: 'selfHarmQuestion3_1' },
                        { value:0, label: 'ไม่ใช่', trigger: 'selfHarmQuestion3_1' },
                      ],
                    },

                    {
                      id: 'selfHarmQuestionChoice3_1',
                        options: [
                          { value:0, label: 'ควบคุมได้', trigger: 'selfHarmQuestion4' },
                          { value:8, label: 'ควบคุมไม่ได้', trigger: 'selfHarmQuestion4' },
                        ],
                      },

                    {
                      id: 'selfHarmQuestionChoice4',
                        options: [
                          { value:8, label: 'มี', trigger: 'selfHarmQuestion5' },
                          { value:0, label: 'ไม่มี', trigger: 'selfHarmQuestion5' },
                        ],
                      },

                      {
                        id: 'selfHarmQuestionChoice5',
                          options: [
                            { value:9, label: 'ใช่', trigger: 'selfHarmQuestion6' },
                            { value:0, label: 'ไม่ใช่', trigger: 'selfHarmQuestion6' },
                          ],
                        },
                        {
                          id: 'selfHarmQuestionChoice6',
                            options: [
                              { value:4, label: 'ใช่', trigger: 'selfHarmQuestion7' },
                              { value:0, label: 'ไม่ใช่', trigger: 'selfHarmQuestion7' },
                            ],
                          },
                          {
                            id: 'selfHarmQuestionChoice7',
                              options: [
                                { value:10, label: 'ใช่', trigger: 'selfHarmQuestion8' },
                                { value:0, label: 'ไม่ใช่', trigger: 'selfHarmQuestion8' },
                              ],
                            },
                            {
                              id: 'selfHarmQuestionChoice8',
                                options: [
                                  { value:4, label: 'ใช่', trigger: 'HowWasIt' },
                                  { value:0, label: 'ไม่ใช่', trigger: 'HowWasIt' },
                                ],
                              },
                {
                  id: 'selfHarmStart',
                  message: 'โอเคจ้า งั้นเรามาเริ่มกันเลย ✌️',
                  trigger: 'selfHarmQuestion1',
                },
                {
                  id: 'startCBT',
                  message: 'สวัสดี หลังจากคราวที่แล้วที่เราคุยกัน วันนี้ฉันจึงมีแบบทดสอบให้คุณทำ ซึ่งใช้เวลาเพียง 2 นาทีเท่านั้น',
                  trigger: 'letstartCBT',
                },
                {
                  id: 'letstartCBT',
                  message: 'งั้นเรามาเริ่มกันเลยดีกว่า ✌️',
                  trigger: 'questionCBT',
                },
                {
                  id: 'questionCBT',
                  message: 'ข้อใดมีการใช้ความคิดแบบ All-or-Nothing',
                  trigger: 'questionCBTchoice',
                },
                {
                  id: 'questionCBTchoice',
                    options: [
                      {value:'ฉันจะพยายามทำให้ดีที่สุด', label: 'ฉันจะพยายามทำให้ดีที่สุด', trigger: 'WrongAnswer' },
                      {value:'ฉันทำไม่ได้แน่ๆ', label: 'ฉันทำไม่ได้แน่ๆ', trigger: 'RightAnswer' },
                      {value:'ฉันทำได้ในบางครั้ง', label: 'ฉันทำได้ในบางครั้ง', trigger: 'WrongAnswer' },
                      {value:'All-or-Nothing คืออะไร?', label: 'All-or-Nothing คืออะไร?', trigger: 'WhatisAllorNothing' },

                    ],
                  },
                  {
                    id: 'WhatisAllorNothing',
                    message: 'All-or-Nothing คือความคิดสุดขั้วในด้านใดด้านหนึ่ง เป็นดำหรือขาวไปหมด เป็นบวกหรือลบไปหมด โดยไม่สามารถมองอะไรกลางๆได้',
                    trigger: 'questionCBT',
                  },
                  {
                    id: 'RightAnswer',
                    message: 'เย้ๆ เยี่ยมไปเลยจ้า คราวนี้ลองข้อต่อไปนะ 🙂',
                    trigger: 'questionCBT2',
                  },
                  {
                    id: 'WrongAnswer',
                    message: 'ลองคิดใหม่นะจ๊ะ ✌️' ,
                    trigger: 'questionCBTchoice',
                  },
                  {
                    id: 'WrongAnswer2',
                    message: 'ลองคิดใหม่นะจ๊ะ ✌️' ,
                    trigger: 'questionCBTchoice2',
                  },
                  {
                    id: 'WrongAnswer3',
                    message: 'ลองคิดใหม่นะจ๊ะ ✌️' ,
                    trigger: 'questionCBTchoice3',
                  },
                  {
                  id: 'questionCBTchoice',
                    options: [
                      {value:'ฉันจะพยายามทำให้ดีที่สุด',  label: 'ฉันจะพยายามทำให้ดีที่สุด', trigger: 'selfHarmStart' },
                      {value:'ฉันทำไม่ได้แน่ๆ',  label: 'ฉันทำไม่ได้แน่ๆ', trigger: 'Good' },
                      {value:'ฉันทำได้ในบางครั้ง',  label: 'ฉันทำได้ในบางครั้ง', trigger: 'Good' },
                      {value:'ฉันทำได้ในบางครั้ง',  label: 'ฉันทำได้ในบางครั้ง', trigger: 'Good' },
                    ],
                  },
                  {
                    id: 'questionCBT2',
                    message: 'ข้อใดไม่มีการใช้ความคิดแบบ Labeling',
                    trigger: 'questionCBTchoice',
                  },
                  {
                    id: 'questionCBTchoice2',
                      options: [
                        {value:'ไม่มีใครชอบฉันอีกต่อไป',  label: 'ไม่มีใครชอบฉันอีกต่อไป', trigger: 'WrongAnswer2' },
                        {value:'ฉันไม่สามารถเป็นเพื่อนกับใครได้อีก',  label: 'ฉันไม่สามารถเป็นเพื่อนกับใครได้อีก', trigger: 'WrongAnswer2' },
                        {value:'ฉันคิดว่าแม่ฉันน่าจะงานยุ่งอยู่ เลยอาจจะมาสาย',  label: 'ฉันคิดว่าแม่ฉันน่าจะงานยุ่งอยู่ เลยอาจจะมาสาย', trigger: 'RightAnswer2' },
                        {value:'Labeling คืออะไร',  label: 'Labeling คืออะไร', trigger: 'WhatisLabeling' },
                      ],
                    },
                    {
                      id: 'questionCBT3',
                      message: 'ข้อใดใช้ความคิดแบบ "Should" and "Must" statement',
                      trigger: 'questionCBTchoice3',
                    },
                    {
                      id: 'questionCBTchoice3',
                        options: [
                          {value:'ฉันต้องสอบคิดหมอให้ได้',   label: 'ฉันต้องสอบคิดหมอให้ได้', trigger: 'WrongAnswer3' },
                          {value:'ฉันยอมรับในการตัดสินใจของเพื่อน',   label: 'ฉันยอมรับในการตัดสินใจของเพื่อน', trigger: 'WrongAnswer3' },
                          {value:'ชีวิตของฉันมีค่า',   label: 'ชีวิตของฉันมีค่า', trigger: 'RightAnswerFinal' },
                          {value:'"Should" and "Must" statement คืออะไร?',   label: '"Should" and "Must" statement คืออะไร?', trigger: 'WhatisShouldMust' },
                        ],
                      },
                    {
                      id: 'WhatisLabeling',
                      message: 'Labeling คือการตีตราตนเอง หรือ คนอื่นในทางลบ ไม่ว่าจะทำอะไรก็มักจะยึดติดกับความรู้สึกที่ตนได้ตีตราไว้',
                      trigger: 'questionCBT',
                    },
                    {
                      id: 'WhatisShouldMust',
                      message: '"Should and "Must" statement คือการคิดความหวังให้ตนเองหรือคนอื่นเป็นอย่างนั้นอย่างนี้ตามที่ตนคาดหวัง หรือตามความต้องการของตน',
                      trigger: 'questionCBT',
                    },
                    {
                      id: 'RightAnswer',
                      message: 'เย้ๆ เยี่ยมไปเลยจ้า คราวนี้ลองข้อต่อไปนะ 🙂',
                      trigger: 'questionCBT2',
                    },
                    {
                      id: 'RightAnswer2',
                      message: 'ว้าว! ยอดไปเลย ต่อไปข้อสุดท้ายนะ 🙂',
                      trigger: 'questionCBT2',
                    },
                    {
                      id: 'RightAnswerFinal',
                      message: 'สุดยอดที่สุดเลย 🎉 ฉันทึ่งในความสามารถของคุณนะ แล้วก็ใจของคุณด้วย',
                      trigger: 'RightAnswerFinal_sticker',
                    },
                    {
                      id: 'RightAnswerFinal_sticker',
                      component: (
                <Text>
                <Image style={{ width: 90,height: 100,}} source={require('../assets/garoo/2.png')}/>
                 {'\n'}
                 {'\n'}
                 {'\n'}
                </Text>

              ),
                      asMessage:true,
                      trigger: 'ThankGaroo',
                    },
                    {
                      id: 'ThankGaroo',
                      options: [
                        { value:'ขอบคุณครับ น้องการุ', label: 'ขอบคุณครับ น้องการุ', trigger:'HowWasIt'},
                        { value:'ขอบคุณค่ะ น้องการุ', label: 'ขอบคุณค่ะ น้องการุ', trigger:'HowWasIt'},
                      ],
                    },


                    // Cognitive Behavior Therapy (CBT)
                    {
                      id: 'cbt1',
                      message: 'ฉันเข้าใจความรู้สึกของคุณนะ' ,
                      trigger: 'cbt2',
                    },
                    {
                      id: 'cbt2',
                      message: 'ฉันอาจจะใช้ของวิเศษชิ้นนี้ช่วยคุณได้ 🤔' ,
                      trigger: 'cbt3',
                    },
                    {
                      id: 'cbt3',
                      message: 'งั้นเรามาเริ่มกันเลยดีกว่า! ฉันจะยกตัวอย่างประโยคให้คุณดังนี้' ,
                      trigger: 'cbt4',
                    },
                    {
                      id: 'cbt4',
                      message: '"ทั้งหมดเป็นความผิดของฉัน"' ,
                      trigger: 'cbt5',
                    },
                    {
                      id: 'cbt5',
                        options: [
                          {value:'ทั้งหมด',  label: 'ทั้งหมด', trigger: 'cbt7' },
                          {value:'ความผิด',  label: 'ความผิด', trigger: 'cbt6' },
                        ],
                      },
                      {
                        id: 'cbt6',
                        message: 'หืม... ฉันอยากให้คุณคิดอีกที คำว่า "ความผิด" ที่คุณคิดอยู่เป็นความจริงใช่หรือไม่ หรือเป็นความคิดที่แต่งเติมขึ้นมาจากความรู้สึกเราเอง' ,
                        trigger: 'cbt8',
                      },
                      {
                        id: 'cbt7',
                        message: 'ถูกต้องแล้วจ้า! ฉันคิดว่า "ความผิด" คือความจริง แต่ความคิดที่แต่งเติมคือคำว่า "ทั้งหมด" เพราะบางทีเราก็ไม่ได้เป็นคนผิดทั้งหมดเสมอไปนะ' ,
                        trigger: 'cbt9',
                      },
                      {
                        id: 'cbt8',
                          options: [
                            {value:'ใช่',  label: 'ใช่', trigger: 'cbt7' },
                            {value:'ความคิดที่แต่งเติม?',  label: 'ความคิดที่แต่งเติม?', trigger: 'cbt6' },
                          ],
                        },
                        {
                          id: 'cbt8',
                            options: [
                              {value:'emoji_2',  label: '😊', trigger: 'cbt9' },
                              {value:'emoji_3',  label: '😢', trigger: 'cbt9' },
                            ],
                          },
                          {
                            id: 'cbt9',
                            message: 'บางทีการเปลี่ยนแปลงอาจจะเป็นสิ่งที่ยาก แต่การที่คุณได้พูดคุยกับฉันในวันนี้ จะเป็น "จุดเริ่มต้นที่ดี" ในการเปลี่ยนแปลงอารมณ์ของคุณ ✌️' ,
                            trigger: 'cbt10',
                          },
                          {
                            id: 'cbt10',
                            message: 'นี่คือสิ่งที่ทุกคนสามารถขัดเกลาและฝึกฝนตนเองได้แล้วฉันจะคอยอยู่เคียงข้างและช่วยเหลือคุณทุกเมื่อเลยนะ ❤️' ,
                            trigger: 'cbtlast',
                          },
                          {
                            id: 'cbtlast',
                              options: [
                                {value:'ขอบคุณนะ น้องการุ',  label: 'ขอบคุณนะ น้องการุ', trigger: 'HowWasItNoqestion' },
                                {value:'ฉันจะพยายาม น้องการุ',  label: 'ฉันจะพยายาม น้องการุ', trigger: 'HowWasItNoqestion' },
                              ],
                            },
                          {
                            id: 'HowWasIt',
                            message: 'คุณรู้สึกยังไงที่ได้คุยกับฉันในวันนี้' ,
                            trigger: 'HowWasItChoice',
                          },
                          {
                            id: 'HowWasItChoice',
                              options: [
                                {value:'emoji_4',  label: '👍', trigger: 'feedbackreply' },
                                {value:'emoji_5',  label: '👎', trigger: 'feedbackreply' },
                              ],
                            },
                            {
                              id: 'feedbackreply',
                              message: 'ขอบคุณสำหรับการติชม ฉันมีความสุขทุกครั้งที่ได้เป็นเพื่อนดูแลใจของคุณ 😊' ,
                              trigger: 'feedbackemoji',
                            },
                            {
                              id: 'feedbackemoji',
                                options: [
                                  {value:'emoji_1',  label: '❤️', trigger: 'seeu' },
                                ],
                              },
                                {
                                  id: 'seeu',
                                  message: 'แล้วพบกันอีกนะ  😊' ,
                                  trigger: 'intheend',
                                },
                                {
                                  id: 'intheend',
                                component: (<ShowResult />),
                                trigger: 'seeuChoice'
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
                                  id: 'seeuChoice',
                                    options: [
                                      {value:'ฉันต้องการความช่วยเหลืออย่างเร่งด่วน', label: 'ฉันต้องการความช่วยเหลืออย่างเร่งด่วน', trigger: 'Danger' },
                                      {value:'ฉันต้องการความช่วยเหลือ', label: 'ฉันต้องการความช่วยเหลือ',trigger: 'Normal' },
                                      {value:'ฉันไม่ต้องการความช่วยเหลือ', label: 'ฉันไม่ต้องการความช่วยเหลือ',trigger: 'NoNeed'}
                                    ],
                                  },

                                  {
                                    id: 'Danger',

                                    component: (<View>
                                      <Button title="กดปุ่มนีเพื่อรับความช่วยเหลือแบบเร่งด่วน" onPress={this.SelfHarm_Danger} />
                                    </View>) ,

                                  },

                                  {
                                    id: 'Normal',
                                    component: (<View>
                                      <Button title="กดปุ่มนีเพื่อรับความช่วยเหลือ" onPress={this.SelfHarm_Normal} />

                                    </View>) ,


                                  },

                                  {
                                    id: 'NoNeed',
                                    component: (<Button title="กดปุ่มนี้เพื่อกลับสู่หน้าหลัก" onPress={this.FirstOpApp} />) ,


                                  },

                                  // Deep-Mind analytic
                                  {
                                    id: 'HowYouFeel',
                                    message: 'ตอนนี้คุณรู้สึกอย่างไร' ,
                                    trigger: 'HowYouFeelChoice',
                                  },
                                  {
                                    id: 'HowYouFeelChoice',
                                    options: [
                                      {value:'ดี', label: 'ดี', trigger: 'FeelGood' },
                                      {value:'มีความสุข', label: 'มีความสุข', trigger: 'FeelGood' },
                                      {value:'โล่งอก', label: 'โล่งอก', trigger: 'FeelGood' },
                                      {value:'เหนื่อย', label: 'เหนื่อย', trigger: 'Feelsad' },
                                      {value:'นอนไม่หลับ', label: 'นอนไม่หลับ', trigger: 'HowToSleep' },
                                      {value:'ป่วย', label: 'ป่วย', trigger: 'FeelSick' },
                                      {value:'เครียด', label: 'เครียด', trigger: 'FeelTired' },
                                      {value:'ซึมเศร้า', label: 'ซึมเศร้า', trigger: 'FeelTired' },
                                      {value:'วิตกกังวล', label: 'วิตกกังวล', trigger: 'FeelTired' },
                                      {value:'โกรธ', label: 'โกรธ', trigger: 'FeelAngry' },
                                      {value:'เหงา', label: 'เหงา', trigger: 'FeelLonely' },
                                    ],
                                  },
                                  {
                                    id: 'FeelGood',
                                    message: 'ฉันดีใจมาก ที่คุณรู้สึก{previousValue}' ,
                                    trigger: 'WhyYouFeel',
                                  },
                                  {
                                    id: 'WhyYouFeel',
                                    message: 'บอกให้ฉันรู้ได้ไหมว่ามีอะไรเกิดขึ้น แล้วทำให้คุณรู้สึก{previousValue}' ,
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
                                    message: 'ฉันดีใจที่คุณรู้สึกดีนะ และหวังว่าคุณจะแชร์ความรู้สึกดีๆให้ น้องการุ รับรู้อีกนะ 😊' ,
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
                                    message: 'คุณต้องการเข้ำรับกำรประเมินเบื้องต้นก่อนหรือไม' ,
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
                                    message: 'ฉันหวังว่าคุณจะมีเวลาได้พักผ่อนบ้างนะ' ,
                                    trigger: 'relex',
                                  },
                                  {
                                    id: 'relex',
                                    options: [
                                      {value:'ขอบคุณครับ Garoo ', label: 'ขอบคุณครับ Garoo', trigger: 'giftbox' },

                                    ],
                                  },
                                  {
                                    id: 'giftbox',
                                    message: 'ฉันมีของวิฉันมีของวิเศษซึ่งจะช่วยผ่อนคลายความเหนื่อยล้าให้คุณได้' ,
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
                                      component: (<Image style={{ width: 340,height: 300,  alignSelf: 'auto',}} source={{uri:'https://scontent.fbkk5-3.fna.fbcdn.net/v/t1.0-9/50058549_1983959065024959_412088230716899328_n.jpg?_nc_cat=105&_nc_ht=scontent.fbkk5-3.fna&oh=5d94fb7978181d3704643d148c187453&oe=5CBD10FC'} } />  ),
                                      trigger: 'HowToSleepChoice',
                                    },
                                    {
                                      id: 'HowToSleepChoice',
                                      options: [
                                        {value:'ฉันง่วงนอนแล้วล่ะ',  label: 'ฉันง่วงนอนแล้วล่ะ 😴', trigger: 'GoodNight' },
                                        {value:'ฉันจะพยายามทำตามคำแนะนะ',  label: 'ฉันจะพยายามทำตามคำแนะนะ 👌', trigger: 'HowToSleep1' },
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
                                        {value:'Good Night Garoo !',  label: 'Good Night Garoo!', end: true },
                                        {value:'ฝันดีนะ น้องการุ',  label: 'ฝันดีนะ น้องการุ', end: true },
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
                                        {value:'ขอบคุณค่ะ', label: 'ขอบคุณค่ะ', trigger:'NeedHelp1'},
                                      ],
                                    },
                                    {
                                      id: 'NeedHelp1',
                                      message: 'คุณต้องการให้ฉันช่วยอะไรคุณไหม?' ,
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
                                      message: 'โชว์ข้อมูล เทคนิคที่ทำให้รู้สึกดีขึ้นยามป่วย' ,
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
                                        message: 'เลือกได้เลยจ้า' ,
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
                                        component: (<Image style={{ width: 350,height: 300,  alignSelf: 'auto',}} source={{uri:'https://uppic.cc/d/KRJB'} } />),
                                        trigger: 'MeditationChoice1',

                                      },
                                      {
                                        id: 'Meditation2',
                                        message: 'หลับตาแล้วทำจิตใจให้สงบประมาณ 5 นาทีนะ ⏱️' ,
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
                                          {value:'ขอบคุณครับ น้องการุ',  label: 'ขอบคุณครับ น้องการุ', trigger:'HowWasItNoqestion'},
                                          {value:'ขอบคุณค่ะ น้องการุ', label: 'ขอบคุณค่ะ น้องการุ', trigger:'HowWasItNoqestion'},
                                        ],
                                      },
                                      {
                                        id: 'MeditationChoice',
                                        options: [
                                          {value:'ขั้นตอนต่อไป',  label: 'ขั้นตอนต่อไป', trigger:'MeditationChoice1'},
                                        ],
                                      },
                                      {
                                        id: 'MeditationChoice1',
                                        options: [
                                          {value:'ขั้นตอนต่อไป', label: 'ขั้นตอนต่อไป', trigger:'MeditationChoice2'},
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
                                          {value:'เรียบร้อยแล้ว น้องการุ', label: 'เรียบร้อยแล้ว น้องการุ', trigger:'cbt2'},
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
                                          {value:'ขอบคุณครับ น้องการุ', label: 'ขอบคุณครับ น้องการุ', trigger:'FeelLonely2'},
                                          {value:'ขอบคุณค่ะ น้องการุ', label: 'ขอบคุณค่ะ น้องการุ', trigger:'FeelLonely2'},
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
                                            {value:'ฉันคิดว่านั่นไม่ใช่ฉันแล้วล่ะ น้องการุ', label: 'ฉันคิดว่านั่นไม่ใช่ฉันแล้วล่ะ น้องการุ', trigger:'FeelLonely5'},
                                          ],
                                        },
                                        {
                                          id: 'Behavior1',
                                          message: 'ฉันเข้าใจความรู้สึกของคุณนะ' ,
                                          trigger: 'Behavior2',
                                        },
                                        {
                                          id: 'Behavior2',
                                          message: 'คราวนี้ ฉันอาจจะใช้ของวิเศษที่ดีที่สุดของฉันแล้วล่ะ 🤔' ,
                                          trigger: 'BehaviorChoice2',
                                        },
                                        {
                                          id: 'BehaviorChoice2',
                                          options: [
                                            {value:'คืออะไรเหรอ?', label: 'คืออะไรเหรอ?', trigger:'Behavior3'},
                                            {value:'เซอไพรส์ฉันสิ', label: 'เซอไพรส์ฉันสิ', trigger:'Behavior3'},
                                          ],
                                        },
                                        {
                                          id: 'Behavior3',
                                          message: 'คือ คุณ ยังไงล่ะ' ,
                                          trigger: 'Behavior4',
                                        },
                                        {
                                          id: 'Behavior4',
                                          message: 'ฉันทำไม่ได้แน่ๆ เลยหากขาด คุณ' ,
                                          trigger: 'BehaviorChoice4',
                                        },
                                        {
                                          id: 'BehaviorChoice4',
                                          options: [
                                            {value:'emoji_97', label: '😳', trigger:'Behavior5'},
                                            {value:'emoji_96', label: '😂', trigger:'Behavior5'},
                                          ],
                                        },
                                        {
                                          id: 'Behavior5',
                                          message: 'ฉันทำไม่ได้แน่ๆ เลยหากขาด คุณ' ,
                                          trigger: 'BehaviorChoice4',
                                        },
                                        {
                                          id: 'Behavior6',
                                          message: 'ฉันทำไม่ได้แน่ๆ เลยหากขาด คุณ' ,
                                          trigger: 'BehaviorChoice4',
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

export default App;





//
//
