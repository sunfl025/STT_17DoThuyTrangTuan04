import { Image, Text, TextInput, TouchableOpacity } from "react-native";
import { StyleSheet, View } from "react-native";
const Bai1e = () => {
    return ( 
        <View style={styles.container}>
            <View style={styles.login}>
                  <Text style={{fontSize:"30px",fontWeight:700,colors:"#d8efdf"}}>REGISTER</Text>
            </View>
            <View style={styles.input}>
                    <View style={styles.inputImg}>
                    <TextInput style ={styles.txtInput}value="Name"></TextInput>
                    </View>
                    <View style={styles.inputImg}>
                    <TextInput style ={styles.txtInput}value="Phone"></TextInput>
                    </View>
                    <View style={styles.inputImg}>
                    <TextInput style ={styles.txtInput}value="Email"></TextInput>
                    </View>
                    <View style={styles.inputImg}>
                    <TextInput style ={styles.txtInput}value="Password"></TextInput>
                    <TouchableOpacity style={{position:'absolute',right:0,marginTop:"10px"}}>
                          <Image source={require('../assets/eye.png') } style={{width:"38px",height:"24.55px"}}></Image>
                    </TouchableOpacity>
                    
                    </View>
                    <View style={styles.inputImg}>
                    <TextInput style ={styles.txtInput}value="Bithday"></TextInput>
                    </View>
                    <View style={{justifyContent:"space-between",flexDirection:"row",marginTop:"20px",alignItems:"flex-start"}}>
                        <View style={{flexDirection:"row",justifyContent:"space-between"}}>
                            <Text style={{fontSize:"20px"}}>Male</Text>
                            <input type="radio"></input>
                            <Text style={{fontSize:"20px"}}>Female</Text>
                            <input type="radio"></input>
                         </View>
                  
                        
                    </View>
                    <View style={{marginTop:"20px"}}>
                        <TouchableOpacity style={styles.txtsubmit}>
                            <Text style={{fontSize:"20px",fontWeight:600,color:"#d8efdf"}}>REGISTER</Text>
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

 
export default Bai1e;