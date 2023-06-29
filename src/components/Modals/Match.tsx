import React from 'react';
import { RegularText } from '~components/RegularText';
import { theme } from '~constants/theme';
import { useAppDispatch } from '~store/store';
import { removeModalType } from '~store/slices/modalSlice';
import Icon from 'react-native-vector-icons/Ionicons';
import { Container } from '~components/Modals/style';

export const Match = () => {
    const dispatch = useAppDispatch();
    const onClosePress = () => dispatch(removeModalType());

    return (
        <Container>
            <RegularText color={theme.PRIMARY_COLOR} fontSize={13} fontFamily="Montserrat-Regular">
                Совпадения отсутствуют
            </RegularText>
            <Icon name="close" onPress={onClosePress} size={24} color={theme.PRIMARY_COLOR} />
        </Container>
    );
};
