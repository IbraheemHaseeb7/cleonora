import styles from "./navigation.module.css";
import HomeIcon from "@mui/icons-material/Home";
import CleaningServicesIcon from "@mui/icons-material/CleaningServices";
import DryCleaningIcon from "@mui/icons-material/DryCleaning";
import CallIcon from "@mui/icons-material/Call";
import InfoIcon from "@mui/icons-material/Info";
import CollectionsIcon from "@mui/icons-material/Collections";
import Link from "next/link";
import { useRouter } from "next/router";

const navs = [
  { route: "/", icon: <HomeIcon />, id: 1, title: "Home" },
  {
    route: "/treatments",
    icon: <CleaningServicesIcon />,
    id: 2,
    title: "Treatments",
  },
  {
    route: "/courses",
    icon: <DryCleaningIcon />,
    id: 3,
    title: "Glow Up Squad",
  },
  { route: "/aboutus", icon: <CallIcon />, id: 4, title: "About" },
  { route: "/contactus", icon: <InfoIcon />, id: 5, title: "Contact" },
  { route: "/gallery", icon: <CollectionsIcon />, id: 6, title: "Gallery" },
];

export default function Navigation() {
  return (
    <div className={styles.main_container}>
      <div className={styles.inner_container}>
        {navs.map(({ title, route, icon, id }) => {
          return <Nav route={route} icon={icon} key={id} title={title} />;
        })}
      </div>
    </div>
  );
}

function Nav({ icon, route, title }) {
  const router = useRouter();

  return (
    <div className={styles.nav_container}>
      <div
        onClick={() => {
          router.push(`/${route}`);
        }}
      >
        <>
          <div>{icon}</div>
          <p>{title}</p>
        </>
      </div>
    </div>
  );
}
