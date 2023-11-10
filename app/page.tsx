import {AppBar, Box, Toolbar, Typography} from "@mui/material";
import LoginButton from "@/components/Login/LoginButton";
import {getServerSession} from "next-auth";
import {authOptions} from "@/auth/auth";
import ColorModeButton from "@/components/Nav/ColorModeButton";

export default async function Home() {
    const session = await getServerSession(authOptions);
    return (
      <>
          <AppBar position="static">
              <Toolbar>
                  <Typography variant="h6" sx={{flexGrow: 1}}>vZDC IDS</Typography>
                  <ColorModeButton/>
                  <Box sx={{width: '1rem',}}></Box>
                  <LoginButton session={session}/>
              </Toolbar>
          </AppBar>
          <Box sx={{
              width: '100%',
              marginTop: '15rem',
              display: 'flex',
              justifyContent: 'center',
          }}>
              {!session && <LoginButton session={session}/>}
              {session && <Typography>Placeholder for airport picker</Typography>}
          </Box>
      </>
    )
}
