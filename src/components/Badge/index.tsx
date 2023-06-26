import React from 'react';
import { useAppSelector } from '~store/store';
import { getCurrentBadgeCount } from '~store/selectors';
import { Container } from '~components/Badge/style';
import { RegularText } from '~components/RegularText';
import { theme } from '~constants/theme';

export const Badge = () => {
    const badge = useAppSelector(getCurrentBadgeCount);

    return (
        <Container>
            <RegularText color={theme.WHITE} fontSize={13} fontFamily="Montserrat-Regular">
                {badge}
            </RegularText>
        </Container>
    );
};
