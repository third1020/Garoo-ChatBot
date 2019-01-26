import React from 'react';
import {
    ActivityIndicator,
    AsyncStorage,
    StatusBar,
    StyleSheet,
    View,
    Text,
    Button,
    Image,
} from 'react-native';
import {
    createSwitchNavigator,
    createStackNavigator,
    createAppContainer,
} from 'react-navigation';
import Add from '../navigation/Add';
import ChatBot from 'react-native-chatbot';

export default class SelfHarm_Danger extends React.Component {
    static navigationOptions = {
        title: 'SelfHarm_Danger',
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
                message: 'ฉันตรวจพบว่าคุณต้องการความช่วยเหลืออย่างเร่งด่วน',
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
                  { value:'บุคคลทั่วไป',  label: 'บุคคลทั่วไป', trigger:'5_photo'},
                  { value:'บุคลากร/นักศึกษามหาวิทยาลัยธรรมศาสตร์',  label: 'บุคลากร/นักศึกษามหาวิทยาลัยธรรมศาสตร์', trigger:'6_photo'},
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
                          { value:'ขอบคุณนะ น้องการุ', label: 'ขอบคุณนะ น้องการุ', trigger: 'HowWasIt' },
                          { value:'ฉันจะพยายาม น้องการุ', label: 'ฉันจะพยายาม น้องการุ', trigger: 'HowWasIt' },
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
                          { value:'emoji_3', label: '👍', trigger: 'feedbackreply' },
                          { value:'emoji_4', label: '👎', trigger: 'feedbackreply' },
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
                            { value:'emoji_5', label: '❤️', trigger: 'seeu' },
                          ],
                        },
                          {
                            id: 'seeu',
                            message: 'แล้วพบกันอีกนะ  😊' ,
                            trigger: 'seeuChoice',
                          },

                          {
                            id: 'seeuChoice',
                              options: [
                                { value:'แล้วพบกัน น้องการุ', label: 'แล้วพบกัน น้องการุ', end: true },
                                { value:'Bye Garoo', label: 'Bye Garoo', end: true },
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
