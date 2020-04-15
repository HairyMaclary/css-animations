declare module 'style-it' {
    interface Style {
        it: (cssText: string, rootElement: ReactElement) => string;
    };
    export default style-it;
}