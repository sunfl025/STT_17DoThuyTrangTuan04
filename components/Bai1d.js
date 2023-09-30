import { Image, Text, TextInput, TouchableOpacity } from "react-native";
import { StyleSheet, View } from "react-native";

const Bai1d = () => {
    return ( 
        <View style={styles.container}>
            <View style={styles.login}>
                  <Text style={{fontSize:"30px",fontWeight:700,colors:"#d8efdf"}}>LOGIN</Text>
            </View>
            <View style={styles.input}>
              
                    <TextInput style ={styles.txtInput}value="Email"></TextInput>
                    <View style={styles.inputImg}>
                    <TextInput style ={styles.txtInput}value="Password"></TextInput>
                    <TouchableOpacity style={{position:'absolute',right:0,marginTop:"10px"}}>
                          <Image source={require('../assets/eye.png') } style={{width:"38px",height:"24.55px"}}></Image>
                    </TouchableOpacity>
                    
                    </View>

                    <View style={{marginTop:"60px"}}>
                        <TouchableOpacity style={styles.txtsubmit}>
                            <Text style={{fontSize:"20px",fontWeight:600,color:"#d8efdf"}}>LOGIN</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{marginTop:"20px"}}>
                      <Text>When you agree to terms and conditions</Text>
                    </View>
                   <TouchableOpacity style={{marginTop:"20px"}}>
                        <Text style={{color:"#5D25FA"}}>For got your password?</Text>
                    </TouchableOpacity>
                   
                    <View style={{marginTop:"20px"}}>
                      <Text> Or login with</Text>
                    </View>
                   
                   <View style={{flexDirection:"row",marginTop:"60px"}}>
                   <TouchableOpacity style={{backgroundColor:"#3f48cc"}}>
                       <Image source={require('../assets/fb.png')} style={{width:"100px",height:"50px"}} resizeMode="stretch" ></Image>
                   </TouchableOpacity>
                   <TouchableOpacity style={{backgroundColor:"#1593c5"}}>
                       <Image source={require('../assets/icozalo.png')} style={{width:"100px",height:"50px"}} resizeMode="contain"></Image>
                   </TouchableOpacity>
                   <TouchableOpacity style={{borderColor:"#1593c5",borderWidth:1}}>
                       <Image source={require('../assets/gg.png')} style={{width:"100px",height:"50px"}} resizeMode="contain"></Image>
                   </TouchableOpacity>
                   </View>

            </View>
            
        </View>
     );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: "#d8efdf"

    },
    login:{
        paddingTop:"30px",
        alignItems:'center'
    },
    input:{
        paddingTop:"50px",
        alignItems:'center',
        justifyContent:"space-around",
        
    },
    txtInput:{
        width:"350px",
        height:"50px",
        backgroundColor:"#cde4d4"
    },
    inputImg:{
       
        marginTop:"30px",
        flexDirection:"row",
        
      
    },

    txtsubmit:{
        width:"350px",
        height:"50px",
        backgroundColor:"#E53935",
        borderRadius:5,
        alignItems:'center',
        justifyContent:'center'
    }
})
export default Bai1d;
