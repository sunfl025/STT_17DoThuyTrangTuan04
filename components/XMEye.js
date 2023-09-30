import { Image, View,TextInput ,StyleSheet,TouchableOpacity,Text} from "react-native";

const XMEye = () => {
    return ( 
        <View style={{flex:1}}>
            <View style={{alignItems:"center"}}>
                <Image source={require("../assets/eyeball.png")} style={{width:"210px",height:"210px"}}>
            </Image>
            </View>
            <View style={{marginTop:"30px",marginLeft:"20px"}}>
                   <TextInput style ={styles.txtInput}  placeholder="Please input user name"></TextInput>
                    <View style={{position:'absolute',left:0,marginTop:"10px",marginLeft:"3px"}}>
                          <Image source={require('../assets/user2.png') } style={{width:"30px",height:"30px"}}></Image>
                    </View>
                
            </View>
            <View style={{marginTop:"30px",marginLeft:"20px"}}>
                   <TextInput style ={styles.txtInput}  placeholder="Please input password"></TextInput>
                    <View style={{position:'absolute',left:0,marginTop:"10px",marginLeft:"3px"}}>
                          <Image source={require('../assets/lock2.png') } style={{width:"30px",height:"30px"}}></Image>
                    </View>
                
            </View>
            <View style={{alignItems:"center",marginTop:"50px"}}>
                 <TouchableOpacity style={styles.txtsubmit}>LOGIN</TouchableOpacity>
            </View>
            <View style={{flexDirection:'row'}}>
                <TouchableOpacity style={{marginLeft:"15px",marginTop:"10px"}}>
                    <Text style={{fontSize:"20px", fontWeight:600}}>Register</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{marginLeft:"120px",marginTop:"10px"}}>
                    <Text style={{fontSize:"20px", fontWeight:600}}>Forgot Password</Text>
                </TouchableOpacity>

            </View>
            <View style={{alignItems:"center",marginTop:"30px"}}>
                <Text  style={{fontSize:"20px", fontWeight:600}}>Order Login Methods</Text>
            </View>
            <View style={{flexDirection:"row",alignItems:"center",justifyContent:"space-around",marginTop:"30px"}}>
                <TouchableOpacity>
                      <Image source={require('../assets/1.png')} resizeMode="stretch" style={{width:"65px",height:"65px"}}></Image>
                </TouchableOpacity>
                <TouchableOpacity>
                      <Image source={require('../assets/2.png')} resizeMode="stretch" style={{width:"65px",height:"65px"}}></Image>
                </TouchableOpacity>
                <TouchableOpacity>
                      <Image source={require('../assets/3.png')} resizeMode="stretch" style={{width:"65px",height:"65px"}}></Image>
                </TouchableOpacity>
                

            </View>

        </View>
     );
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundImage:"linear-gradient(180deg, #FBCB00 0%, #BF9A00 100%)"
    },
    input:{
        paddingTop:"50px",
        alignItems:'center',
        justifyContent:"space-around",
        
    },
    txtInput:{
        width:"350px",
        height:"50px",
        paddingLeft:"40px",
        borderBottomWidth:1,
        color:"#dadada"
        // linear-gradient(0deg, rgba(196, 196, 196, 0.3), rgba(196, 196, 196, 0.3))"
    },
    txtsubmit:{
        width:"350px",
        height:"50px",
        backgroundColor:"#386ffc",
        borderRadius:5,
        alignItems:'center',
        justifyContent:'center',
        color:"white",
        fontWeight:700
    }
    
})
export default  XMEye ;