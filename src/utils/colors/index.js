    const mainColors={
        green1: '#F7ADB3',
        green2: '#596275',
        green3: '#f8a5c2',
        dark1: '#112340',
        dark2: '#2C3E50',
        grey1: '#7D8797',
        grey2: '#C1C1C1',
        grey3: '#E7E7E7',
        grey4: '#B1B7C2',
        white: '#ffffff',
        red:   '#D65445',
        red2: '#E06379',
        blue:  '#0066CB',
        black1: '#000000',
        black2: 'rgba(0, 0, 0, 0.5)'
    }
  
  
  export const colors = {
        primary: mainColors.green1,
        secondary: mainColors.dark1,
        white: 'white',
        black: 'black',
        tertiary: mainColors.blue,
        disable: mainColors.grey3,
        text: {
            primary: mainColors.dark1,
            secondary: mainColors.grey1,
            third: mainColors.white,
            menuInactive: mainColors.green2,
            menuActive: mainColors.dark2,
        },
        button: {
            primary: {
                background: mainColors.green1,
                text: 'white'
            },
            secondary: {
                background: 'white',
                text: mainColors.dark1
            },
            third: {
                background: mainColors.red
            },
            disable: {
                background: mainColors.grey3,
                text: mainColors.grey4
            }
        },
        cardLight: mainColors.green3,
        backgroundColor: mainColors.white,
        border: mainColors.grey2,
        wrapper: mainColors.green2,
        loadingBackground: mainColors.black2,
        error: mainColors.red2

    }