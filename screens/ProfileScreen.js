
import React from 'react';
import { StyleSheet, Dimensions, ScrollView, ShadowPropTypesIOS, } from 'react-native';
import { Block, theme, Text, Button } from 'galio-framework';  
import { Theme, tabs } from "../constants/"; 

 
const { width } = Dimensions.get('screen');
 
class Home extends React.Component { 
  renderArticles = () => {
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.articles}>
        <Block flex>
         <Text
            h5
            style={styles.centerLANno}
            color="#282561"
          > 
            LAN No. : GS001BL0271761
          </Text> 
          {/* Loan Amount, Amount Paid */}
          <Block style={styles.paddingBlock}>
            <Block flex row style={styles.evenspace}>
              <Text 
                p bold
                style={styles.left}
                color={"#282561"}
              >
                Loan Amount 
              </Text>

              <Text
                p bold
                style={styles.right}
                color={"#282561"}
              >
                Amount Paid
              </Text>
            </Block>
            <Block flex row style={styles.evenspace}>
            <Text
              p
              style={{ marginBottom: theme.SIZES.BASE / 2 }}
              color={"#282561"}
            >
              56,00,000/-
            </Text>

            <Text
              p
              style={styles.right}
              color={"#282561"}
            >
              12,00,000/-
            </Text>
          </Block>
          </Block>


           {/* Next EMI Due / Amount */}
          <Block style={styles.paddingBlock}>
            <Block flex row style={styles.evenspace}>
              <Text 
                p bold
                style={styles.left}
                color={"#282561"}
              >
                Next EMI Due 
              </Text>

              <Text
                p bold
                style={styles.right}
                color={"#282561"}
              >
                Amount
              </Text>
            </Block>
            <Block flex row style={styles.evenspace}>
            <Text
              p
              style={{ marginBottom: theme.SIZES.BASE / 2 }}
              color={"#282561"}
            >
              22/6/2020
            </Text>

            <Text
              p
              style={styles.right}
              color={"#282561"}
            >
              56,000/-
            </Text>
          </Block>
          </Block>


          {/* Repayment Method Last EMI Date */}
          <Block style={styles.paddingBlock}>
            <Block flex row style={styles.evenspace}>
              <Text 
                p bold
                style={styles.left}
                color={"#282561"}
              >
                Repayment Method
              </Text>

              <Text
                p bold
                style={styles.right}
                color={"#282561"}
              >
                Last EMI Date
              </Text>
            </Block>
            <Block flex row style={styles.evenspace}>
            <Text
              p
              style={{ marginBottom: theme.SIZES.BASE / 2 }}
              color={"#282561"}
            >
              NACH
            </Text>

            <Text
              p
              style={styles.right}
              color={"#282561"}
            >
              22/6/2030
            </Text>
          </Block>
          </Block>

          <Block center colomn style={styles.ShadowROI} card>  
              <Text 
                p bold
                style={styles.left}
                color={"#282561"}
              >
               ROI 
              </Text>
              <Text 
                p bold
                style={styles.left}
                color={"#282561"}
              >
               38%
              </Text>  
          </Block>

          
        
          
        </Block>
        
         <Block> 
            <Text></Text> 
            <Button round uppercase shadowless color="info" >Partial Or Early Settlement</Button>  
            <Text></Text>
            <Button round uppercase shadowless color="info">Menual Payment</Button>
            <Text></Text>
            <Button round uppercase shadowless color="info">Request Disbursement </Button>
            <Text></Text>
            <Button round uppercase shadowless color="info">Request Rate Change</Button>
            <Text></Text>
            <Button round uppercase shadowless color="info">Request Repayment Amount Change</Button>
            <Text></Text> 
            <Button round uppercase shadowless color="info">View Application Details</Button> 
            <Text></Text> 
            <Button center round uppercase shadowless> More Options </Button> 
          </Block>
      </ScrollView>
    )
  }

  render() {
    return (
      <Block flex center style={styles.home}>
        {this.renderArticles()}
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  home: {
    width: width,     
  },
  articles: {
    width: width - theme.SIZES.BASE * 2,
    paddingVertical: theme.SIZES.BASE,
  },
  centerLANno:{
    textAlign:"center",
    marginBottom: theme.SIZES.BASE / 2 
  },
  left:{
    textAlign:"left",
  },
  right:{
    textAlign:"right",
  },

  evenspace:{
    justifyContent: 'space-between',
  },

  paddingBlock:{
    padding:12,  
  },

  ShadowROI:{
    padding:15,
    shadowColor: "#000", 
    shadowOpacity: 0.20, 
    shadowRadius: 3.65,  
  },

  buttoncss:{
    padding:15,     

  }
});

export default Home;
