import "antd/dist/antd.css";
// import 'bootstrap/dist/css/bootstrap.min.css'

// import { MuiThemeProvider } from "@material-ui/core/styles";
// import { customTheme } from "../../core/app/javascript/dash/layout/CustomLayout/theme";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

// export const decorators = [
//   (Story) => (
//     <MuiThemeProvider theme={customTheme}>
//       <Story />
//     </MuiThemeProvider>
//   ),
// ];
