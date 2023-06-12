import React, { FC } from 'react';
import { RootContainer } from '~screens/style';
import { Logo } from '~components/Logo';
import { SemiBoldText } from '~components/SemiBoldText';
import { Image } from '~screens/MainScreen/style';
import { Gap } from '~components/Gap';
import { AppButton } from '~components/Button';
import { RegularText } from '~components/RegularText';
import { MainScreenProps, RootStackNavigationName } from '~navigation/RootStack/type';
import { theme } from '~constants/theme';
import { RegularSmallText } from '~components/RegularSmallText';

const group = require('../../../assets/images/group.png');

export const MainScreen: FC<MainScreenProps> = ({ navigation }) => {
    const onMenuPress = () => {
        navigation.navigate(RootStackNavigationName.MENU);
    };

    return (
        <RootContainer>
            <Logo />
            <SemiBoldText>Добро пожаловать</SemiBoldText>
            <Gap scale={1.5} />
            <Image source={group} />
            <Gap scale={3} />
            <AppButton title="В меню" onPress={onMenuPress} />
            <RegularSmallText color={theme.PRIMARY_COLOR}>
                Магазин вкуснейшей рыбы в городе! Быстро доставим к Вам домой
            </RegularSmallText>
            <Gap scale={1} />
            <RegularSmallText color={theme.PRIMARY_COLOR}>
                Санкт-Петербург, Ладожская улица, дом 1 +7 812 777 77 77 info@fishka.ru
            </RegularSmallText>
        </RootContainer>
    );
};
