import {Container, Typography} from "@mui/material";
import LoginButton from "@/components/Login/LoginButton";
import {getServerSession} from "next-auth";
import {authOptions} from "@/auth/auth";

import FacilityPicker from "@/components/FacilityPicker/FacilityPicker";

export default async function Home() {
    const session = await getServerSession(authOptions);
    return (
      <Container sx={{
          marginTop: '5rem',
          textAlign: 'center',
      }} maxWidth="sm">
          <Typography variant="h6" sx={{display: 'block', marginBottom: '1rem', }}>Select a facility or login below to access the
              IDS:</Typography>
          {!session && (<LoginButton session={session}/>)}
          {session && (<FacilityPicker/>)}
      </Container>
    )
}
