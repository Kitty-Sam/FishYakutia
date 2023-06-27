import React, { FC } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

import { theme } from '~constants/theme';
import { ISearchBar } from '~components/SearchBar/type';
import { Container, IconContainer, SearchBarInput } from '~components/SearchBar/style';

export const SearchBar: FC<ISearchBar> = ({ setSearch, search, filterHandler }) => (
    <Container>
        <SearchBarInput
            value={search}
            onChangeText={setSearch}
            placeholder="Быстрый поиск"
            placeholderTextColor={theme.SECONDARY_COLOR}
        />
        <IconContainer>
            <Icon name="search" size={18} color={theme.SECONDARY_COLOR} onPress={filterHandler} />
        </IconContainer>
    </Container>
);
