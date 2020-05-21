import React, { Component } from 'react'
import helemet from "./assests/images/helmet_front.png"
import tvs from "./assests/images/TVS_White_Logo.png"
import back from "./assests/images/back.png"
import nfc from "./assests/images/nfc2.png"
import next from "./assests/images/next.png"
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'
import { StyleSheet, Text, View,Image,TouchableOpacity ,Dimensions,ScrollView,StatusBar, TextInput,BackHandler,Alert} from 'react-native'
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { createStyles, maxHeight , minHeight,maxWidth,minWidth} from 'react-native-media-queries';
// import Spinner from 'react-native-loading-spinner-overlay';
const base = {
  cre: 
      {fontSize:RFValue(27),color:'#fff', marginTop:hp('1%'),fontWeight:'bold',marginLeft:wp('10%')},
      tag: {
        width: wp('80%'),
        color: '#000',
     borderRadius:RFValue(2),
        fontSize: RFValue(17),
 alignItems:'center',
 justifyContent:'center',
    backgroundColor:'#fff',

      },
      txt:{width:wp('80%'),marginTop:hp('2%'),fontSize:RFValue(19),color:'#fff'},
      ta:{fontSize:RFValue(19),color:'white',fontWeight:'500'},
      id:{alignSelf:'center',marginTop:hp('2%'),color:'#fff',fontSize:RFValue(19),width:wp('80%'),textAlign:'center'},
      nxt:{fontSize:RFValue(19),color:'#A7A7A7',fontWeight:'500'}
};
const style = createStyles(
  base,
   maxWidth(359, {
    cre: 
      {fontSize:RFValue(25),color:'#fff', marginTop:hp('1%'),fontWeight:'bold',marginLeft:wp('10%')}
       ,
       tag: {
        width: wp('80%'),
        color: '#000',
     borderRadius:RFValue(2),
        fontSize: RFValue(15),
 alignItems:'center',
 justifyContent:'center',
    backgroundColor:'#fff',

      },
      txt:{width:wp('80%'),marginTop:hp('2%'),fontSize:RFValue(17),color:'#fff'},
      ta:{fontSize:RFValue(17),color:'white',fontWeight:'500'},
      id:{alignSelf:'center',marginTop:hp('2%'),color:'#fff',fontSize:RFValue(17),width:wp('80%'),textAlign:'center'},
      nxt:{fontSize:RFValue(17),color:'#A7A7A7',fontWeight:'500'}
      
  }),
)
class App extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        tag:'',
        txt_true:false,
        txt_false:false,
        verify:false,
        nxt:true,
        spinner:false,
      }
      this.api=this.api.bind(this);
      this.button_nxt=this.button_nxt.bind(this);
      this.back=this.back.bind(this);
      this.handleBackButton = this.handleBackButton.bind(this);
    }
    componentDidMount(){
      BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
    }
 
  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);

  }
  handleBackButton = () => {
    Alert.alert(
      'Exit App',
      'Exiting the application?', [{
        text: 'Cancel',
        style: 'cancel'
      }, {
        text: 'OK',
        onPress: () => BackHandler.exitApp()
      },], {
      cancelable: false
    }
    )
    return true;
  }
  
   async api(){
//      if(this.state.tag.length == 0){
//       Alert.alert(
//         'Incorrect Details',
//         'Please enter something to proceed', [ {
//             text: 'OK',
      
//         }, ], {
//             cancelable: false
//         }
//      )
//      }
//      else{
//     this.setState({txt_true:false,verify:false,txt_false:false,nxt:true,spinner:true})

//     let body={
//       "id":this.state.tag
//       }
//   await axios.post("https://balsam-chambray-cookie.glitch.me/retrieve",body).then((apires)=>{
//     if(apires.data.msg.msg == "success" ){
   
// this.setState({txt_true:true,verify:true,nxt:false,spinner:false})
//     }
//     else{
//       this.setState({txt_false:true,verify:false,nxt:true,spinner:false})
//     }
    
//     }).catch((err)=>{
//       this.setState({txt_false:true,verify:false,nxt:true,spinner:false})
//       console.log(err)
//     })
//     }
  }
    button_nxt(){
      this.props.navigation.navigate('Manage_Profile_Details', {
        "Tag": this.state.tag,
    })
  }
  back(){
    this.props.navigation.navigate('Create_Profile')
  }
    render() {

        return (
            <View style={styles.container}>
                 {/* <Spinner
          visible={this.state.spinner}
          // textContent={'Please wait...'}
          textStyle={styles.spinnerTextStyle}
        /> */}
                <StatusBar translucent backgroundColor="transparent" />
                <View style={{flexDirection:'row',backgroundColor:'#005AA1',width:wp('100%'),height:hp('12%'),alignItems:'center',marginTop:hp('3%')}}>
                   <View>
                    <TouchableOpacity style={{marginLeft:wp('7%')}}
                    onPress={this.back}
                    >
                        <Image source={back} style={{height:RFValue(30),width:RFValue(30),}}>

                        </Image>
                    </TouchableOpacity>
                    </View>
                    <View style={{justifyContent:'center',alignItems:'center',flexDirection:'row'}}>
                <Image source={tvs} style={{height:RFValue(80),width:RFValue(100),marginLeft:wp('53.5%')}} />
                </View>
                </View>
                <ScrollView style={styles.slide1} keyboardShouldPersistTaps='handled'>
<Text style={style.cre}>Manage Profile</Text>
<View style={{alignSelf:'center',marginTop:hp('5.5%')}}>
<Image source={nfc} style={{height:RFValue(80),width:RFValue(100),borderRadius:RFValue(10)}} />
</View>
<View style={{marginTop:hp('6.5%'),alignSelf:'center'}}>

<TextInput
                style={style.tag}
                placeholder={'Enter Tag ID'}

                placeholderTextColor={'#000'}
              
                onChangeText={(tag) => this.setState({tag:tag,txt_true:false,verify:false,txt_false:false,nxt:true})
              }
                value={this.state.tag} />
                <Text style={style.txt}>*Tag ID is a 6 digit alpha numeric
code that is found on the backside of
the package (Example: A10506)</Text>
  </View>
{this.state.verify == true ?
  <TouchableOpacity style={styles.create_profile1} 
onPress={this.api}
disabled={true}
>
     <Text style={style.ta}>Verify Tag</Text>
   </TouchableOpacity>
   :
   <TouchableOpacity style={styles.create_profile} 
   onPress={this.api}
   disabled={false}
   >
        <Text style={style.ta}>Verify Tag</Text>
      </TouchableOpacity>
    }

   {this.state.txt_true == true ?
<Text style={style.id}>Congratulations! Tag Verified!</Text>
:
   null}
      {this.state.txt_false == true ?
<Text style={style.id}>Invalid Tag ID! Retry or Contact Us</Text> 
  :
  null}
   <TouchableOpacity style={styles.next} 
disabled={this.state.nxt}
onPress={this.button_nxt}
>
     <Text style={style.nxt}>Next</Text>
     <Image source={next} style={{width:RFValue(15),height:RFValue(15)}}></Image>
   </TouchableOpacity>
  
</ScrollView>
</View>
    
    )
    }
}
export default App;

const styles = StyleSheet.create({
    container: {
        flex: 1,
  
        backgroundColor: '#005AA1'
      },
    slide1: {
        flex: 1,
    
      },
      create_profile: {
        flexDirection: 'row',
        width: wp('45%'),
        fontFamily:'Muli-SemiBold',
        height: hp('9%'),
      marginTop:hp('5%'),
        borderRadius: RFValue(40),
        alignSelf:'center',
        alignItems: 'center',
        justifyContent:'center',
         color:'#fff',
        backgroundColor: '#F01B23',
      
      
      },
      create_profile1: {
        flexDirection: 'row',
        width: wp('45%'),
        fontFamily:'Muli-SemiBold',
        height: hp('9%'),
      marginTop:hp('5%'),
        borderRadius: RFValue(40),
        alignSelf:'center',
        alignItems: 'center',
        justifyContent:'center',
         color:'#fff',
        backgroundColor: '#A6A6A6',
      
      
      },
      next: {
        flexDirection: 'row',
        width: wp('32%'),
        fontFamily:'Muli-SemiBold',
        height: hp('8%'),
      marginTop:hp('4%'),
      right:wp('7%'),
        borderRadius: RFValue(40),
        alignSelf:'flex-end',
       alignItems:'center',
        justifyContent:'space-evenly',
         color:'#fff',
         borderColor:'#A7A7A7',
         borderWidth:RFValue(2),
        backgroundColor: 'transparent',
      marginBottom:hp('2%')
      
      },
      tag: {
        width: wp('80%'),
        color: '#000',
     borderRadius:RFValue(2),
        fontSize: RFValue(18),
 alignItems:'center',
 justifyContent:'center',
    backgroundColor:'#fff',

      },
})