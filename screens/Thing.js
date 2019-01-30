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

import ChatBot from 'react-native-chatbot';
import { Icon } from 'react-native-elements'

export default class Thing extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: "Thing",
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

    render() {
        return (
          <ChatBot
          handleEnd={this.FirstOpApp}
                steps={[
                  //บำบัดความคิด
                  {
                    id: 'Score2_9',
                    message: 'ฉันมีแบบทดสอบทางความคิดให้ทำ ซึ่งใช้เวลาเพียง 2 นาทีเท่านั้น',
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
                      id: 'questionCBT2',
                      message: 'ข้อใดไม่มีการใช้ความคิดแบบ Labeling',
                      trigger: 'questionCBTchoice2',
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
                        trigger: 'questionCBTchoice2',
                      },
                      {
                        id: 'WhatisShouldMust',
                        message: '"Should and "Must" statement คือการคิดความหวังให้ตนเองหรือคนอื่นเป็นอย่างนั้นอย่างนี้ตามที่ตนคาดหวัง หรือตามความต้องการของตน',
                        trigger: 'questionCBTchoice3',
                      },
                      {
                        id: 'RightAnswer',
                        message: 'เย้ๆ เยี่ยมไปเลยจ้า คราวนี้ลองข้อต่อไปนะ 🙂',
                        trigger: 'questionCBT2',
                      },
                      {
                        id: 'RightAnswer2',
                        message: 'ว้าว! ยอดไปเลย ต่อไปข้อสุดท้ายนะ 🙂',
                        trigger: 'questionCBT3',
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
                              end:true,
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
