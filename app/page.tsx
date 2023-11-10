import {AppBar, Box, Stack, Toolbar, Typography} from "@mui/material";
import LoginButton from "@/components/Login/LoginButton";
import {getServerSession} from "next-auth";
import {authOptions} from "@/auth/auth";
import ColorModeButton from "@/components/Nav/ColorModeButton";
import Logo from "@/components/Logo/Logo";

export default async function Home() {
    const session = await getServerSession(authOptions);
    return (
      <>
          <AppBar position="static">
              <Toolbar>
                  <Stack direction="row" spacing={2} alignItems="center" sx={{flexGrow: 1,}}>
                      <Logo/>
                      <Typography variant="h4">vIDS</Typography>
                  </Stack>
                  <Stack direction="row" alignItems="center" spacing={2}>
                      <ColorModeButton/>
                      <LoginButton session={session}/>
                  </Stack>
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
