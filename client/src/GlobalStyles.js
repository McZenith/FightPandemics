import { createGlobalStyle } from "styled-components";
import { WHITE } from "./constants/colors";

const globalStyles = createGlobalStyle`
html {
  font-size: 62.5%;
}

body {
  margin: 0;
  background-color: ${WHITE};
  font-family: "Poppins", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
}

.text-center {
  text-align: center !important;
}

.app-drawer .am-drawer-sidebar {
  background-color: $white;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
}

.app-drawer .am-drawer-sidebar .am-list {
  width: 200px;
  padding: 0;
}

.text-light {
  font-weight: 500;
}

.nav-item {
  padding: 5px 10px;

  > a,
  > a.nav-link {
    color: #000 !important;
    display: inline;
    padding: 0;
  }

  .active {
    color: $royal-blue;
  }
}

.btn-light {
  border: 1px solid #ddd;
}
`;

export default globalStyles;
