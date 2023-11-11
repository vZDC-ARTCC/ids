import {AppBar, Box, Stack, Toolbar, Typography} from "@mui/material";
import LoginButton from "@/components/Login/LoginButton";
import {getServerSession} from "next-auth";
import {authOptions} from "@/auth/auth";
import ColorModeButton from "@/components/Nav/ColorModeButton";
import Logo from "@/components/Logo/Logo";
import FacilityPicker from "@/components/FacilityPicker/FacilityPicker";

export default async function Home() {
    const session = await getServerSession(authOptions);
    return (
      <>
          <Box sx={{
              width: '100%',
              marginTop: '15rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              alignItems: 'center',
          }}>
              <Typography variant="h6" sx={{display: 'block',}}>Select a facility or login below to access the
                  IDS:</Typography>
              {!session && <LoginButton session={session}/>}
              {session && <FacilityPicker/>}
          </Box>
      </>
    )
}
