/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import Styled from 'styled-components/native';
import Counter from '~/Screens/Counter';

const Container = Styled.View`
  flex: 1;
  background-color: #EEE;
`;

const App = () => {
  return(
    <Container>
      <Counter title="This is a Counter App" initValue={5} />
    </Container>
  )
};
export default App;

// import React from 'react';
// import { SafeAreaView, StatusBar } from 'react-native';

// import {
//   Header,
//   LearnMoreLinks,
//   Colors,
//   DebugInstructions,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';

// import Styled from 'styled-components/native';

// const ScrollView = Styled.ScrollView`
//   background-color: ${Colors.lighter};
// `;

// const Body = Styled.View`
//   background-color: ${Colors.white};
// `;

// const SectionContainer = Styled.View`
//   margin-top: 32px;
//   padding-horizontal: 24px;
// `;

// const SectionDescription = Styled.Text`
//   margin-top: 8px;
//   font-size: 18px;
//   font-weight: 400;
//   color: ${Colors.dark};
// `;

// const HighLight = Styled.Text`
//   font-weight: 700;
// `;

// interface Props{}

// const App = ({ }: Props) => {
//   return (
//     <>
//       <StatusBar barStyle="dark-content" />
//       <SafeAreaView>
//         <ScrollView contentInsetAdjustmentBehavior="automatic">
//           <Header />
//           <Body>
//             <SectionContainer>
//               <SectionDescription>Step One</SectionDescription>
//               <SectionDescription>
//                 Edit <HighLight>App.js</HighLight> to change this
//                 screen and then come back to see your edits.
//               </SectionDescription>
//             </SectionContainer>
//             <SectionContainer>
//               <SectionDescription>See Your Changes</SectionDescription>
//               <SectionDescription>
//                 <ReloadInstructions />
//               </SectionDescription>
//             </SectionContainer>
//             <SectionContainer>
//               <SectionDescription>Debug</SectionDescription>
//               <SectionDescription>
//                 <DebugInstructions />
//               </SectionDescription>
//             </SectionContainer>
//             <SectionContainer>
//               <SectionDescription>Learn More</SectionDescription>
//               <SectionDescription>
//                 Read the docs to discover what to do next:
//               </SectionDescription>
//             </SectionContainer>
//             <LearnMoreLinks />
//           </Body>
//         </ScrollView>
//       </SafeAreaView>
//     </>
//   );
// };
// export default App;
