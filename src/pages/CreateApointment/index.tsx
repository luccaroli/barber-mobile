import React, { useCallback } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import { Container, Header, BackButton, HeaderTitle, UserAvatar } from './styles';
import { useAuth } from '../../hooks/AuthContext';

interface RouteParams {
  providerId: string;
}

const CreateApointment: React.FC = () => {
  const { user } = useAuth()
  const route = useRoute()
  const { goBack } = useNavigation()

  const { providerId } = route.params as RouteParams

  const navigate = useCallback(() => {
    goBack()
  }, [goBack])

  return (
    <Container>
      <Header>
        <BackButton onPress={navigate}>
          <Icon name="chevron-left" size={24} color="#999591" />
        </BackButton>

        <HeaderTitle>Barbeiros</HeaderTitle>

        <UserAvatar source={{ uri: user.avatar_url }} />
      </Header>
    </Container>
  )
}
export default CreateApointment;