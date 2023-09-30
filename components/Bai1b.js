import { StatusBar } from 'expo-status-bar';
import { Button, Image, StyleSheet, Text, TouchableOpacity, View ,TextInput} from 'react-native';
const Bai1b = () => {
    return (
        <View style={styles.container} >
         
          {/* <StatusBar style="auto" /> */}
          <View style={styles.iconImg}>
                 <Image source={require('../assets/Vector.png')} style={styles.img} resizeMode='stretch' />
                 <View style={styles.txtLabel}>
                 <Text style={styles.txt} >FORGET </Text>
                 <Text  style={styles.txt}>PASSWORD</Text>
                 </View>
                 <View style={styles.txtDes}>
                    <Text style={styles.txtDescription}>Provide your account’s email for which you </Text>
                    <Text style={styles.txtDescription}>want to reset your password</Text>
                 </View>
          </View>
          <View style={styles.cpnBottom}>
              <View style={styles.txtBottom}>
                     <Image source={require('../assets/2744492898368.png')} resizeMode='stretch' style={{width:"48px",height:"45px"}}></Image>
                    <TextInput style={styles.input} value={"Email"}/>
              </View>
              
                  
              
             <View style={styles.btn}>
          
              <TouchableOpacity style={styles.button}>
                       <Text style={styles.txtButton}>NEXT</Text>
              </TouchableOpacity>
               
             </View>
            
          </View>
             
         
        </View>
      );
}

const styles = StyleSheet.create({
    container: {
      flex:1,
      backgroundImage: 'linear-gradient(180deg, #C7F4F7 0.03%, #D1F4F6 30.21%, #E5F4F5 85.42%, #00CCF9 100%)',
      padding:'10px'
    },
    iconImg:{
      width:'100%',
      height:'55%',
      justifyContent:'center',
      alignItems:'center',
      paddingTop:'50px'
    },
    img:{
      width: 100, 
      height: 100,
    },
    txtLabel:{
        paddingTop:'20px',
        alignItems:'center'
    },
    txt:{
      fontSize:'30px',
      fontWeight:600,
      
      
    },
    txtDes:{
      marginTop:"25px",
      alignItems:'center'
        
    },
    cpnBottom:{
      flex:1,
    
  
    },
    txtBottom:{
     marginTop:"50px",
      width:'100%',
      height:'16%',
      backgroundColor:"#C4C4C4",
      flexDirection:"row"
    }
    ,
    txtDescription:{
      fontSize:'15px',
      fontWeight:500
  
    },
    btn:{
      paddingTop:"10px",
       width:'100%',
       height:'50%',
       flexDirection:'row',
       alignItems:'center',
       justifyContent:'space-around',
      
    },
    button:{
       width:'100%',
       height:'40px',
       backgroundColor:'#daa520',
       alignItems:'center',
       justifyContent:'center',
      
       
    },
    txtButton:{
      fontSize:'20px',
      fontWeight:500
    },
    input: {
      width:350,
      height: 40,
      borderColor : "#666",
      backgroundColor:"#C4C4C4"
  
    },
  });
 
export default Bai1b;