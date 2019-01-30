import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  AsyncStorage
} from 'react-native';
import { Icon } from 'react-native-elements'

export default class Profile extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: "Profile",
      headerRight: (
        <Icon
raised
name='home'
color='#00aaff'
onPress={() => navigation.navigate('FirstOpApp')} />
                   )

    };
  };

  Name = async () => {
    try {
      var name = await AsyncStorage.getItem('Name');

      this.setState({

        NameUser: name
      });
    } catch (error) {
      console.log(error);
    }
  }

  Score = async () => {
    try {
      var score = await AsyncStorage.getItem('Score');

      this.setState({

        Score: score
      });
    } catch (error) {
      console.log(error);
    }
  }




      componentWillMount() {

        this.Name();
        this.Score();

        var that = this;
      var date = new Date().getDate(); //Current Date
      var month = new Date().getMonth() + 1; //Current Month
      var year = new Date().getFullYear(); //Current Year
      var hours = new Date().getHours(); //Current Hours
      var min = new Date().getMinutes(); //Current Minutes
      var sec = new Date().getSeconds(); //Current Seconds

      that.setState({
        name:
          date + '/' + month + '/' + year + ' ' + hours + ':' + min + ':' + sec,

      });

      }

  render() {
    return (
      <View style={styles.container}>
          <View style={styles.header}>
            <View style={styles.headerContent}>
                <Image style={styles.avatar}
                  source={{uri: 'https://www.qualiscare.com/wp-content/uploads/2017/08/default-user.png'}}/>

                <Text style={styles.name}>{this.state.NameUser} {'\n'}</Text>

            </View>
          </View>

          <View style={styles.body}>
            <View style={styles.item}>
              <View style={styles.iconContent}>

              </View>



            </View>
            <Image style={styles.icon} source={{uri: 'https://img.icons8.com/ios/50/000000/clinic-filled.png'}}/>
            <Text style={styles.info}>{this.state.Score}</Text>

            <Image style={styles.icon} source={{uri: 'https://img.icons8.com/ios/50/000000/ringer-volume-filled.png'}}/>
            <Text style={styles.info}>สายด่วน 1323</Text>
            <Text style={styles.info}>ศูนย์สุขภาวะทางจิตมหาลัยธรรมศาสตร์</Text>
            <Text style={styles.info}>โทร 02564-4440 ต่อ 1282,6604</Text>



          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header:{
    backgroundColor: "#DCDCDC",
  },
  headerContent:{
    padding:30,
    alignItems: 'center',
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom:10,
  },
  name:{
    fontSize:22,
    color:"#000000",
    fontWeight:'600',
  },

  userInfo:{
    fontSize:16,
    color:"#778899",
    fontWeight:'600',
  },
  body:{
    backgroundColor: "#778899",
    height:500,
    alignItems:'center',
  },
  item:{
    flexDirection : 'row',
  },
  infoContent:{
    flex:1,
    alignItems:'flex-start',
    paddingLeft:5
  },
  iconContent:{
    flex:1,
    alignItems:'flex-end',
    paddingRight:5,
  },
  icon:{
    width:30,
    height:30,
    marginTop:20,
  },
  info:{
    fontSize:18,
    marginTop:20,
    color: "#FFFFFF",
  }
});
