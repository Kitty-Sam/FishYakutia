export const replaceDotByEnter = (text: string) => {
    return text.replace(/\./g, '\n').replace(/^\s+/gm, '');
};

export const replaceDotByEnterWithEmail = (text: string) => {
    return text.replace(/(?<!@)\.(?!\w)/g, '\n').replace(/^\s+/gm, '');
};
