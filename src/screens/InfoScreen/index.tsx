import React from 'react';
import { LargeLogo, Logo } from '~components/Logo';
import { Gap } from '~components/Gap';
import { RegularText } from '~components/RegularText';
import { theme } from '~constants/theme';
import { CenteredView, RootContainer } from '~screens/InfoScreen/style';
import { Platform } from 'react-native';
import { useGetSettingsQuery } from '~store/api/settingsApi';
import { replaceDotByEnter, replaceDotByEnterWithEmail } from '~utils/replaceDotByEnter';

export const InfoScreen = () => {
    const { data: settings } = useGetSettingsQuery();

    const replacedDelivery = settings && replaceDotByEnter(settings.delivery);
    const replacedDescription = settings && replaceDotByEnterWithEmail(settings.description);

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
            <Gap scale={1.5} />
            <RegularText color={theme.SECONDARY_COLOR} fontFamily="Montserrat-Regular" fontSize={12}>
                {replacedDelivery}
            </RegularText>
            <Gap scale={2} />
            <RegularText color={theme.SECONDARY_COLOR} fontFamily="Montserrat-Regular" fontSize={32}>
                О нас
            </RegularText>
            <Gap scale={1.5} />
            <RegularText color={theme.INFO_TEXT_COLOR} fontFamily="Montserrat-Regular" fontSize={12}>
                {replacedDescription}
            </RegularText>
            <Gap scale={5} />
            <CenteredView>
                <LargeLogo />
            </CenteredView>
        </RootContainer>
    );
};
