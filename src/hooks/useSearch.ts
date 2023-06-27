import { useState } from 'react';
import { useCommonFilterFoodMutation } from '~store/api/foodApi';

export const useSearch = (categoryId: number = 0) => {
    const [search, setSearch] = useState('');

    const [commonFilterFood] = useCommonFilterFoodMutation();

    const filterBySearch = async () => {
        if (search) {
            await commonFilterFood({ title: search, categoryId }).unwrap();
        }
    };

    return {
        filterBySearch,
        search,
        setSearch,
    };
};
