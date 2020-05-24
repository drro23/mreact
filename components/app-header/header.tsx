import Link from "next/link";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import styles from "./header.module.scss";

export default function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Link href="/">
          <Typography variant="h6" className={styles.title}>
            Where in the world ?
          </Typography>
        </Link>
        <Link href="/todos">
          <Button variant="contained" className="mr-4">
            Todos
          </Button>
        </Link>
        <Link href="/countries">
          <Button variant="contained">Countries</Button>
        </Link>
      </Toolbar>
    </AppBar>
  );
}
