import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    background: ${props => props.theme.colors.background};

    #page-room main {
      .room-title {
        h1 {
          color: ${props => props.theme.colors.text};
        }
      }

      form {
        .form-footer {
          .user-info {
            span {
              color: ${props => props.theme.colors.text};
            }
          }
          > span {
            color: ${props => props.theme.colors.text};
          }
        }
      }
    }
  }
`