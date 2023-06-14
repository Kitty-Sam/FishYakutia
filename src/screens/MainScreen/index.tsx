import React, { FC } from 'react';

import { Logo } from '~components/Logo';
import { Image, RootContainer } from '~screens/MainScreen/style';
import { Gap } from '~components/Gap';
import { AppButton } from '~components/Button';
import { RegularText } from '~components/RegularText';
import { MainScreenProps, RootStackNavigationName } from '~navigation/RootStack/type';
import { theme } from '~constants/theme';

const group = require('../../../assets/images/group.png');

export const MainScreen: FC<MainScreenProps> = ({ navigation }) => {
    const onMenuPress = () => {
        navigation.navigate(RootStackNavigationName.MENU);
    };

    return (
        <RootContainer>
            <Logo />
            <Gap scale={0.5} />
            <RegularText
                color={theme.PRIMARY_COLOR}
                fontFamily="Montserrat-SemiBold"
                fontSize={32}
                style={{ width: 275 }}
            >
                Добро пожаловать
            </RegularText>
            <Gap scale={1.5} />
            <Image source={group} />
            <Gap scale={3} />
            <AppButton title="В меню" onPress={onMenuPress} />
            <Gap scale={3} />
            <RegularText
                color={theme.PRIMARY_COLOR}
                fontFamily="Montserrat-Regular"
                fontSize={16}
                style={{ width: 350 }}
            >
                Магазин вкуснейшей рыбы в городе! Быстро доставим к Вам домой
            </RegularText>
            <Gap scale={1} />
            <RegularText color={theme.PRIMARY_COLOR} fontFamily="Montserrat-Regular" fontSize={16}>
                Санкт-Петербург, Ладожская улица, дом 1 +7 812 777 77 77
            </RegularText>
            <RegularText
                color={theme.PRIMARY_COLOR}
                fontFamily="Montserrat-Regular"
                fontSize={16}
                style={{ width: 350 }}
            >
                info@fishka.ru
            </RegularText>
        </RootContainer>
    );
};
