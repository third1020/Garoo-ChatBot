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





export default class Need_help extends React.Component {
    static navigationOptions = {
        title: 'Need_help',
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




    render() {
        return (
          <ChatBot
          handleEnd={this.FirstOpApp}
            steps={[
            {
                id: '1',
                message: 'ฉันตรวจพบว่าคุณต้องการความช่วยเหลือ',
                trigger: '3',
              },
              {
                id: '3',
                message: 'โปรดระบุว่าคุณคือ บุคคลทั่วไป หรือ บุคลากร/นักศึกษามหาวิทยาลัยธรรมศาสตร์',
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
                  { value:'โทรแล้วครับ', label: 'โทรแล้วครับ', trigger:'cbt1'},
                  { value:'โทรแล้วค่ะ', label: 'โทรแล้วค่ะ', trigger:'cbt1'},
                ],
              },
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
                trigger: 'cbt4_1',
              },
              {
                id: 'cbt4_1',
                message: 'จากประโยคข้างบน คุณคิดว่าคำไหนที่เราสามารถเปลี่ยนแปลงได้' ,
                trigger: 'cbt5',
              },
              {
                id: 'cbt5',
                  options: [
                    { value:'ทั้งหมด', label: 'ทั้งหมด', trigger: 'cbt7' },
                    { value:'ความผิด', label: 'ความผิด', trigger: 'cbt6' },
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
                      { value:'ใช่', label: 'ใช่', trigger: 'cbt7' },
                      { value:'ความคิดที่แต่งเติม?', label: 'ความคิดที่แต่งเติม?', trigger: 'cbt6' },
                    ],
                  },
                  {
                    id: 'cbt8',
                      options: [
                        { value:'emoji_1', label: '😊', trigger: 'cbt9' },
                        { value:'emoji_2', label: '😢', trigger: 'cbt9' },
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
                          { value:'ขอบคุณนะ น้องการุ', label: 'ขอบคุณนะ น้องการุ', trigger: 'cbt11' },
                          { value:'ฉันจะพยายาม น้องการุ', label: 'ฉันจะพยายาม น้องการุ', trigger: 'cbt11' },
                        ],
                      },
                      {
                        id: 'cbt11',
                        message: 'เมื่อคุณรู้สึกแย่หรือวิตกกังวล คุณจะขาดแรงจูงใจจนไม่อยากจะทำกิจกรรมอย่างอื่นเลย' ,
                        trigger: 'cbt12',
                      },
                      {
                        id: 'cbt12',
                          options: [
                            { value:'ใช่ฉันเลย น้องการุ', label: 'ใช่ฉันเลย น้องการุ', trigger: 'cbt13' },
                            { value:'ฉันคิดว่านั่นไม่ใช่ฉันแล้วล่ะ น้องการุ', label: 'ฉันคิดว่านั่นไม่ใช่ฉันแล้วล่ะ น้องการุ', trigger: 'HowWasIt' },
                          ],
                        },
                      {
                        id: 'cbt13',
                        message: 'ฉันเข้าใจความรู้สึกของคุณนะ' ,
                        trigger: 'cbt14',
                      },
                      {
                        id: 'cbt14',
                        message: 'คราวนี้ ฉันอาจจะใช้ของวิเศษที่ดีที่สุดของฉันแล้วล่ะ 🤔' ,
                        trigger: 'cbt15',
                      },
                      {
                        id: 'cbt15',
                          options: [
                            { value:'คืออะไรเหรอ?', label: 'คืออะไรเหรอ?', trigger: 'cbt16' },
                            { value:'เซอไพรส์ฉันสิ', label: 'เซอไพรส์ฉันสิ', trigger: 'cbt16' },
                          ],
                        },
                        {
                            id: 'cbt16',
                            message: 'คือ "คุณ" ยังไงล่ะ' ,
                            trigger: 'cbt17',
                          },
                          {
                            id: 'cbt17',
                            message: 'ฉันจะทำไม่ได้แน่ๆ เลยหากขาด "คุณ" ในครั้งนี้' ,
                            trigger: 'cbt18',
                          },
                          {
                            id: 'cbt18',
                              options: [
                                { value:'emoji_3', label: '🤗', trigger: 'cbt19' },
                                { value:'emoji_4', label: '😳', trigger: 'cbt19' },
                              ],
                            },
                            {
                                id: 'cbt19',
                                message: 'ของวิเศษที่ดีที่สุดสำหรับฉัน ก็คือ "คุณ" ยังไงล่ะ' ,
                                trigger: 'cbt20',
                              },
                              {
                                id: 'cbt20',
                                  options: [
                                    { value:'emoji_5', label: '😳', trigger: 'Behavior8' },
                                    { value:'emoji_6', label: '😲', trigger: 'Behavior8' },
                                  ],
                                },
                                {
                                    id: 'Behavior8',
                                    message: 'ใน 1 สัปดาห์นี้ฉันต้องการให้คุณทำกิจกรรมเพื่อการผ่อนคลาย 3 อย่างซึ่งจะเป็นผลดีต่อการพัฒนาทางอารมณ์ของคุณเอง' ,
                                    trigger: 'Behavior8_sticker',
                                  },
                                  {
                                    id: 'Behavior8_sticker',
                                    component: (
                                      <Text>
                                      <Image style={{ width: 90,height: 100,}} source={require('../assets/garoo/5.png')}/>
                                       {'\n'}
                                       {'\n'}
                                       {'\n'}
                                      </Text>
                                    ),
                                    asMessage:true,
                                    trigger: 'Behavior8_2',
                                  },
                                  {
                                    id: 'Behavior8_2',
                                    component: (<View>
                                      <Button title="กดปุ่มนีเพื่อเลือกกิจกรรม" onPress={this.SelectImage} />

                                    </View>) ,
                                    trigger: 'Behavior9',
                                  },
                                  {
                                    id: 'Behavior9',
                                    message: 'กดปุ่มข้างบนแล้วหรือยั้ง !' ,
                                    trigger: 'Behavior10',

                                 },
                                 {
                                   id:'Behavior10',
                                   options: [
                                     { value:'กดแล้ว', label: 'กดแล้ว', trigger:'Behavior13'},
                                     { value:'ยังไม่กด', label: 'ยังไม่กด', trigger:'Behavior11'},
                                   ],
                                 },

                                 {
                                   id: 'Behavior11',
                                   message: 'แหน่ะ คุณต้องเลือกกิจกรรมก่อนนะ อย่าดื้อสิ' ,
                                   trigger: 'Behavior8_2',
                                 },

                                  {
                                    id: 'Behavior13',
                                    message: 'สัญญานะว่าต้องทำตามกิจกรรมที่เลือกไป !' ,
                                    trigger: 'Behavior14',
                                  },
                                  {
                                    id: 'Behavior14',
                                    options: [
                                      { value:'emoji_7', label: '👌', trigger:'Behavior15'},
                                      { value:'emoji_8', label: '🤞', trigger:'Behavior8'},
                                    ],
                                  },
                                  {
                                    id: 'Behavior15',
                                    message: 'โอเคจ้า ถือว่าเป็นการบ้านระหว่างเรานะ' ,
                                    trigger: 'Behavior16',
                                  },
                                  {
                                    id: 'Behavior16',
                                    message: 'แล้วฉันจะมาตรวจการบ้านในอีก 1 สัปดาห์นะ' ,
                                    trigger: 'HowWasIt',
                                  },

                    {
                      id: 'HowWasIt',
                      message: 'คุณรู้สึกยังไงที่ได้คุยกับฉันในวันนี้' ,
                      trigger: 'HowWasItChoice',
                    },
                    {
                      id: 'HowWasItChoice',
                        options: [
                          { value:'emoji_9', label: '👍', trigger: 'feedbackreply' },
                          { value:'emoji_10', label: '👎', trigger: 'feedbackreply' },
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
                            { value:'emoji_11', label: '❤️', trigger: 'seeu' },
                          ],
                        },
                          {
                            id: 'seeu',
                            message: 'แล้วพบกันอีกนะ 😊' ,
                            trigger: 'seeuChoice',
                          },

                          {
                            id: 'seeuChoice',
                              options: [
                                { value:'แล้วพบกัน น้องการุ', label: 'แล้วพบกัน น้องการุ', end: true },
                                { value:'Bye น้องการุ', label: 'Bye น้องการุ', end: true },
                              ],
                            },

            ]}
        />
        );
    }
}
