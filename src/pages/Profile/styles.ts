import styled from 'styled-components/native'
import { Platform } from 'react-native'
import { RectButton } from 'react-native-gesture-handler';

export const Content = styled.ScrollView``

export const Container = styled.View`
  flex: 1;
  padding: 0 24px ${Platform.OS === 'android' ? 150 : 40}px;
`;

export const Title = styled.Text`
  font-size: 20px;
  color: #f4ede4;
  font-family: 'Ubuntu_500Medium';
  margin: 24px 0;
`
export const BackButton = styled.TouchableOpacity`
  margin-top: 40px;
`


export const UserAvatarButton = styled.TouchableOpacity`
  margin-top: 32px;
  box-shadow: rgba(255,144,0,0) 0 5px 20px;
`

export const UserAvatar = styled.Image`
  width: 186px;
  height: 186px;
  border-radius: 98px;
  align-self: center;
`

export const ButtonSignOut = styled(RectButton)`
  width: 30%;
  height: 30px;
  background: #c53030;
  border-radius: 10px;
  margin-top: 32px;

  flex-direction: row;
  justify-content: center;
  align-items: center;
  align-self: center;
` 
export const ButtonSignOutText = styled.Text`
  font-family: 'Ubuntu_500Medium';
  color: #f4ede4;
  font-size: 16px;
`


