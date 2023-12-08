import {Box, Container, Typography} from "@mui/material";
import LoginButton from "@/components/Login/LoginButton";
import {getServerSession} from "next-auth";
import {authOptions} from "@/auth/auth";

import FacilityPickerSidebar from "@/components/FacilityPicker/FacilityPickerSidebar";

export default async function Home() {
    const session = await getServerSession(authOptions);
    return (
      <Container sx={{
          marginTop: '5rem',
          textAlign: 'center',
      }} maxWidth="sm">
          { !session && <Typography variant="h6">Only members of the ARTCC can access the IDS.</Typography>}
          { session && <Typography variant="h6">Welcome {session.user.fullName}, select a facility from the left.</Typography>}
          <Box sx={{ marginTop: '1rem', }}>
              {!session && (<LoginButton session={session}/>)}
              {session && (<FacilityPickerSidebar/>)}
          </Box>

      </Container>
    )
}
