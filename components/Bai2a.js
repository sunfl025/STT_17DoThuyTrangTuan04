import { StyleSheet, Text, View ,TextInput,TouchableOpacity,Image} from "react-native";

const Bai2a = () => {
    return (  
        <View style={styles.container}>
           <View style={{marginTop:"70px",marginLeft:"20px"}}>
               <Text style={{fontSize:"30px",fontWeight:700}}>LOGIN</Text>
           </View>
           <View style={styles.input}>
                <TextInput style ={styles.txtInput} value="Name"></TextInput>
                    <View style={{position:'absolute',left:0,marginTop:"10px",marginLeft:"20px"}}>
                          <Image source={require('../assets/user.png') } style={{width:"30px",height:"30px"}}></Image>
                    </View>
                
           </View>
           <View style={{marginTop:"30px",marginLeft:"20px"}}>
                   <TextInput style ={styles.txtInput} value="Password"></TextInput>
                    <View style={{position:'absolute',left:0,marginTop:"10px",marginLeft:"3px"}}>
                          <Image source={require('../assets/Vector.png') } style={{width:"30px",height:"30px"}}></Image>
                    </View>
                    <View style={{position:'absolute',right:0,marginTop:"10px",marginRight:"25px"}}>
                          <Image source={require('../assets/eye.png') } style={{width:"32px",height:"32px"}} resizeMode="contain"></Image>
                    </View>
                
            </View>
            <View style={{marginTop:"50px",alignItems:"center"}}>
                        <TouchableOpacity style={styles.txtsubmit}>
                            <Text style={{fontSize:"20px",fontWeight:600,color:"#d8efdf"}}>REGISTER</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{marginTop:"50px"}}>
                            <Text style={{fontSize:"20px",fontWeight:700}}>CREATE ACCOUNT</Text>
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
        backgroundColor:"#F2F2F2",
        paddingLeft:"40px"
        // linear-gradient(0deg, rgba(196, 196, 196, 0.3), rgba(196, 196, 196, 0.3))"
    },
    txtsubmit:{
        width:"350px",
        height:"50px",
        backgroundColor:"black",
        borderRadius:5,
        alignItems:'center',
        justifyContent:'center'
    }
    
})

export default Bai2a;
// background: linear-gradient(0deg, #F2F2F2, #F2F2F2),
// linear-gradient(0deg, rgba(196, 196, 196, 0.3), rgba(196, 196, 196, 0.3));
