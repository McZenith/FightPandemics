import Home from "./pages/Home";
import NeedHelp from "./pages/NeedHelp";
import OfferHelp from "./pages/OfferHelp";
import About from "./pages/About";
import Medical from "./pages/Medical";
import AirTableCOVID from "./pages/AirTableCOVID";
import SymptomsCheck from "./pages/SymptomsCheck";
import TermsConditions from "./pages/TermsConditions";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import CookiesPolicy from "./pages/CookiesPolicy";
import Profile from "./pages/Profile";
import EditProfile from "./pages/EditProfile";
import EditAccount from "./pages/EditAccount";
import Feed from "./containers/FeedContainer";
import Login from "./pages/Login";
import VerifyEmail from "./pages/VerifyEmail";
import NearestHospital from "./pages/NearestHospital";
import CreatePost from "./pages/CreatePost";

const routes = [
  {
    path: "/",
    component: Home,
    exact: true,
  },
  {
    path: "/auth/login",
    component: Login,
    layout: "logo",
    props: {
      isLoginForm: true,
      notLoggedInOnly: true,
    },
  },
  {
    path: "/auth/signup",
    component: Login,
    layout: "logo",
    props: {
      isLoginForm: false,
      notLoggedInOnly: true,
    },
  },
  {
    path: "/auth/verify-email",
    component: VerifyEmail,
    layout: "logo",
    props: {
      loggedInOnly: true,
    },
  },
  {
    path: "/need-help",
    component: NeedHelp,
  },
  {
    path: "/offer-help",
    component: OfferHelp,
  },
  {
    path: "/about",
    component: About,
  },
  {
    path: "/medical",
    component: Medical,
  },
  {
    path: "/nearest-hospital",
    component: NearestHospital,
  },
  {
    path: "/AirTableCOVID",
    component: AirTableCOVID,
  },
  {
    path: "/find-help",
    component: Feed,
  },
  {
    path: "/symptoms-check",
    component: SymptomsCheck,
  },
  {
    path: "/feed",
    component: Feed,
  },
  {
    path: "/profile",
    component: Profile,
  },
  {
    path: "/edit-profile",
    component: EditProfile,
  },
  {
    path: "/edit-account",
    component: EditAccount,
  },
  {
    path: "/create-post",
    component: CreatePost,
  },
  {
    path: "/terms-conditions",
    component: TermsConditions,
  },
  {
    path: "/privacy-policy",
    component: PrivacyPolicy,
  },
  {
    path: "/cookies-policy",
    component: CookiesPolicy,
  },
];

export default routes;
