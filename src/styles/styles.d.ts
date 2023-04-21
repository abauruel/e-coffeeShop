import 'styled-components'
declare module 'styled-components' {
  export interface DefaultTheme {
    title: string,
    colors: {
      title: string,
      subtitle: string,
      text: string,
      label: string,
      hover: string,
      button: string,
      input: string,
      card: string,
      background: string,
      white: string,
      white: string,
      yellowDark: string,
      yellow: string,
      yellowLight: string,
      purpleDark: string,
      purple: string,
      purpleLight: string
    },
    sizes: {
      title: {

        lineHeight: string,
        xl: {
          fontSize: string,
        },
        l: {
          fontSize: string
        },
        m: {
          fontSize: string
        },
        s: {
          fontSize: string
        },
        xs: {
          fontSize: string
        },


      },
      text: {
        l: {
          fontSize: string
        },
        m: {
          fontSize: string
        },
        s: {
          fontSize: string
        },
        s_bold: string
      },
      components: {
        tag: {
          fontSize: string
        },
        buttonG: {
          lineHeight: string,
          fontSize: string
        },
        buttonS: {
          lineHeight: string,
          fontSize: string
        }
      }
    }
  }

}