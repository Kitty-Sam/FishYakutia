import React, { FC } from 'react';

import { Logo } from '~components/Logo';
import { CenteredContainer, Image, RootContainer } from '~screens/MainScreen/style';
import { Gap } from '~components/Gap';
import { AppButton } from '~components/Buttons/Button';
import { RegularText } from '~components/RegularText';
import { MainScreenProps, RootStackNavigationName } from '~navigation/RootStack/type';
import { theme } from '~constants/theme';
import { Platform, ScrollView } from 'react-native';

const group = require('../../../assets/images/group.png');

export const MainScreen: FC<MainScreenProps> = ({ navigation }) => {
    const onMenuPress = () => {
        navigation.navigate(RootStackNavigationName.MENU);
    };

    return (
        <RootContainer>
            <CenteredContainer>
                {Platform.OS === 'android' && <Gap scale={0.5} />}
                <Logo />
            </CenteredContainer>
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
            <AppButton title="В меню" onPress={onMenuPress} />
            <Gap scale={2} />
            <ScrollView contentContainerStyle={{ flex: 1 }}>
                <RegularText
                    color={theme.PRIMARY_COLOR}
                    fontFamily="Montserrat-Regular"
                    fontSize={16}
                    style={{ width: 350 }}
                >
                    Магазин вкуснейшей рыбы в городе! Быстро доставим к Вам домой
                </RegularText>
                <Gap scale={1} />
                <RegularText
                    color={theme.PRIMARY_COLOR}
                    fontFamily="Montserrat-Regular"
                    fontSize={16}
                    style={{ width: 350 }}
                >
                    Санкт-Петербург, Ладожская улица, дом 1
                </RegularText>
                <RegularText
                    color={theme.PRIMARY_COLOR}
                    fontFamily="Montserrat-Regular"
                    fontSize={16}
                    style={{ width: 350 }}
                >
                    +7 812 777 77 77
                </RegularText>
                <RegularText
                    color={theme.PRIMARY_COLOR}
                    fontFamily="Montserrat-Regular"
                    fontSize={16}
                    style={{ width: 350 }}
                >
                    info@fishka.ru
                </RegularText>
            </ScrollView>
        </RootContainer>
    );
};
