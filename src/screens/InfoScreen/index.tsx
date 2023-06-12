import React from 'react';
import { MediumText } from '~components/MediumText';
import { LargeLogo, Logo } from '~components/Logo';
import { Gap } from '~components/Gap';
import { RegularText } from '~components/RegularText';
import { theme } from '~constants/theme';
import { ThinText } from '~components/ThinText';
import { SafeAreaView } from 'react-native-safe-area-context';

export const InfoScreen = () => {
    return (
        <SafeAreaView>
            <Logo />
            <MediumText>Информация</MediumText>
            <Gap scale={2} />
            <RegularText color={theme.SECONDARY_COLOR}>Доставка и оплата</RegularText>
            <ThinText>Copy Доставка = 100 рублей </ThinText>
            <ThinText>Бесплатная доставка от 1500 рублей</ThinText>
            <Gap scale={2} />
            <ThinText>Оплата наличными и по карте. Можно переводом.</ThinText>
            <RegularText color={theme.SECONDARY_COLOR}>О нас</RegularText>
            <Gap scale={1.5} />
            <ThinText>Магазин вкуснейшей рыбы в городе! Быстро доставим к Вам домой</ThinText>
            <Gap scale={1.5} />
            <ThinText>Санкт-Петербург, Ладожская улица, дом 1 +7 812 777 77 77 info@fishka.ru</ThinText>
            <Gap scale={5} />
            <LargeLogo />
        </SafeAreaView>
    );
};
