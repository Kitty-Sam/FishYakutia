import React from 'react';
import { LargeLogo, Logo } from '~components/Logo';
import { Gap } from '~components/Gap';
import { RegularText } from '~components/RegularText';
import { theme } from '~constants/theme';
import { CenteredView, RootContainer } from '~screens/InfoScreen/style';
import { Platform } from 'react-native';

export const InfoScreen = () => {
    return (
        <RootContainer>
            <CenteredView>
                {Platform.OS === 'android' && <Gap scale={0.5} />}
                <Logo />
            </CenteredView>
            <Gap scale={1.5} />
            <RegularText color={theme.PRIMARY_COLOR} fontFamily="Montserrat-Medium" fontSize={32}>
                Информация
            </RegularText>

            <Gap scale={1} />
            <RegularText color={theme.SECONDARY_COLOR} fontFamily="Montserrat-Regular" fontSize={32}>
                Доставка и оплата
            </RegularText>

            <RegularText color={theme.SECONDARY_COLOR} fontFamily="Montserrat-Regular" fontSize={12}>
                Copy Доставка = 100 рублей
            </RegularText>
            <RegularText color={theme.SECONDARY_COLOR} fontFamily="Montserrat-Regular" fontSize={12}>
                Бесплатная доставка от 1500 рублей
            </RegularText>

            <Gap scale={2} />
            <RegularText color={theme.SECONDARY_COLOR} fontFamily="Montserrat-Regular" fontSize={12}>
                Оплата наличными и по карте. Можно переводом.
            </RegularText>
            <Gap scale={1.5} />
            <RegularText color={theme.SECONDARY_COLOR} fontFamily="Montserrat-Regular" fontSize={32}>
                О нас
            </RegularText>
            <Gap scale={1.5} />
            <RegularText color={theme.INFO_TEXT_COLOR} fontFamily="Montserrat-Regular" fontSize={12}>
                Магазин вкуснейшей рыбы в городе! Быстро доставим к Вам домой
            </RegularText>
            <Gap scale={1.5} />
            <RegularText color={theme.INFO_TEXT_COLOR} fontFamily="Montserrat-Regular" fontSize={12}>
                Санкт-Петербург, Ладожская улица, дом 1
            </RegularText>
            <RegularText color={theme.INFO_TEXT_COLOR} fontFamily="Montserrat-Regular" fontSize={12}>
                +7 812 777 77 77
            </RegularText>
            <RegularText color={theme.INFO_TEXT_COLOR} fontFamily="Montserrat-Regular" fontSize={12}>
                info@fishka.ru
            </RegularText>

            <Gap scale={5} />
            <CenteredView>
                <LargeLogo />
            </CenteredView>
        </RootContainer>
    );
};
