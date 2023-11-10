import {AppBar, Box, Toolbar, Typography} from "@mui/material";
import LoginButton from "@/components/Login/LoginButton";
import {getServerSession} from "next-auth";
import {authOptions} from "@/auth/auth";

export default async function Home() {
    const session = await getServerSession(authOptions);
    return (
      <>
          <AppBar position="static">
              <Toolbar>
                  <Typography variant="h6" sx={{flexGrow: 1}}>vZDC IDS</Typography>
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
