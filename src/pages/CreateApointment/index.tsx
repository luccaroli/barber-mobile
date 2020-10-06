import React, { useCallback, useEffect, useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import { useAuth } from '../../hooks/AuthContext';
import api from '../../services/api';

import { 
  Container, 
  Header, 
  BackButton, 
  HeaderTitle, 
  UserAvatar, 
  ProviderListContainer, 
  ProvidersList,
  ProviderContainer,
  ProviderAvatar,
  ProviderName,
} from './styles';



interface RouteParams {
  providerId: string;
}

export interface Provider {
  id: string;
  name: string;
  avatar_url: string
}

const CreateApointment: React.FC = () => {
  const { user } = useAuth()
  const route = useRoute()
  const { goBack } = useNavigation()

  const routeParams = route.params as RouteParams

  const [providers, setProviders] = useState<Provider[]>([])
  const [selectedProvider, setSelectProvider] = useState(routeParams.providerId)

  useEffect(() => {
    api.get('providers').then(response => {
      setProviders(response.data)
    })

  }, [])

  const navigate = useCallback(() => {
    goBack()
  }, [goBack])

  const handleSelectProvider = useCallback((providerId: string) => {
    setSelectProvider(providerId)
  }, [])

  return (
    <Container>
      <Header>
        <BackButton onPress={navigate}>
          <Icon name="chevron-left" size={24} color="#999591" />
        </BackButton>

        <HeaderTitle>Barbeiros</HeaderTitle>

        <UserAvatar source={{ uri: user.avatar_url }} />
      </Header>

      <ProviderListContainer>
        <ProvidersList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={providers}
          keyExtractor={provider => provider.id}
          renderItem={({ item: provider }) => (
            <ProviderContainer 
              selected={provider.id === selectedProvider}
              onPress={() => handleSelectProvider(provider.id)}
              >
                <ProviderAvatar source={{ uri: provider.avatar_url }} />
                <ProviderName 
                  selected={provider.id === selectedProvider}
                >
                  {provider.name}
                </ProviderName>
            </ProviderContainer>
          )}

        />

      </ProviderListContainer>
    </Container>
  )
}
export default CreateApointment;