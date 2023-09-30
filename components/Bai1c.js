import { StatusBar } from 'expo-status-bar';
import { Button, Image, StyleSheet, Text, TouchableOpacity, View ,TextInput} from 'react-native';
const  Bai1c= () => {
    return (
        <View style={styles.container} >
         
          {/* <StatusBar style="auto" /> */}
          <View style={styles.iconImg}>
                    <Text style={{fontSize:"50px"}}>CODE</Text>
                    <Text style={{fontSize:"20px",marginTop:"40px",fontWeight:700}}>VERIFICATION</Text>
               
                 <View style={styles.txtDes}>
                    <Text style={styles.txtDescription}>Enter ontime password sent on </Text>
                    <Text style={styles.txtDescription}>++849092605798</Text>
                 </View>
          </View>
          <View style={styles.cpnBottom}>
              <View style={styles.txtBottom}>
                  
                  
                    
                   
                    <Image source={require('../assets/Rectangle 1.png')} resizeMode='stretch' style={{width:'50px',height:'50px'}}></Image>
                    <Image source={require('../assets/Rectangle 1.png')} resizeMode='stretch' style={{width:'50px',height:'50px'}}></Image>
                    <Image source={require('../assets/Rectangle 1.png')} resizeMode='stretch' style={{width:'50px',height:'50px'}}></Image>
                    <Image source={require('../assets/Rectangle 1.png')} resizeMode='stretch' style={{width:'50px',height:'50px'}}></Image>
                    <Image source={require('../assets/Rectangle 1.png')} resizeMode='stretch' style={{width:'50px',height:'50px'}}></Image>
                    <Image source={require('../assets/Rectangle 1.png')} resizeMode='stretch' style={{width:'50px',height:'50px'}}></Image>
              </View>
              
                  
              
             <View style={styles.btn}>
          
              <TouchableOpacity style={styles.button}>
                       <Text style={styles.txtButton}>VERIFY CODE</Text>
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
      txtLabel:{
          paddingTop:'20px',
          alignItems:'center'
      },
      txt:{
        fontSize:'30px',
        fontWeight:600,
        
        
      },
      txtDes:{
        marginTop:"20px",
        alignItems:'center'
          
      },
      cpnBottom:{
        flex:1,
       
    
      },
      txtBottom:{
        marginLeft:"40px",
        width:'70%',
        height:'15%',
        flexDirection:"row",
       
        
       
      }
      ,
      txtDescription:{
        fontSize:'15px',
        fontWeight:700
    
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

 
export default Bai1c;